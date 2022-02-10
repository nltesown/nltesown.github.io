<script>
	import '$lib/dayjs_custom_locale_fr';
	dayjs.locale('fr');
	import _ from 'lodash';
	import dayjs from 'dayjs';
	import { get } from '$lib/api.js';

	let cal;
	(async () => {
		let s1 = await get(
			'PROG99%20D%C3%A9cembre%202021-f%C3%A9vrier%202022/PROG99%20D%C3%A9cembre%202021-f%C3%A9vrier%202022_SEANCES_DEF.json'
		);
		let s2 = await get('PROG111%20Mars-mai%202022/PROG111%20Mars-mai%202022_SEANCES_DEF.json');

		let seances = _(_.concat(s1, s2))
			.orderBy((d) => d.dateHeure)
			.filter((d) => !dayjs(d.dateHeure).startOf('day').isBefore(dayjs().startOf('week')))
			.value();

		let days = _(seances)
			.map((d) => d.dateHeure.substring(0, 10))
			.uniq()
			.value();

		seances = _(seances)
			.groupBy((d) => d.dateHeure.substring(0, 10))
			.value();

		let firstSeanceDay = dayjs(_.min(days));
		let lastSeanceDay = dayjs(_.max(days));
		let firstCalDay = firstSeanceDay.startOf('week');
		let lastCalDay = lastSeanceDay.endOf('week');
		let calSpanDays = lastCalDay.diff(firstCalDay, 'day') + 1;

		cal = _(new Array(calSpanDays))
			.map((d, i) => {
				let date = firstCalDay.add(i, 'day');
				return {
					date,
					seances: _(seances).pick(date.format('YYYY-MM-DD')).map().value()[0]
				};
			})
			.value();
	})();
</script>

<svelte:head><title>Cinémathèque</title></svelte:head>
{#if cal}
	<div class="calendar">
		<div class="day header">Lundi</div>
		<div class="day header">Mardi</div>
		<div class="day header">Mercredi</div>
		<div class="day header">Jeudi</div>
		<div class="day header">Vendredi</div>
		<div class="day header">Samedi</div>
		<div class="day header">Dimanche</div>

		{#each cal as day}
			<div class="day" class:today={day.date.isSame(dayjs(), 'day')} class:active={day.seances}>
				<div class="date">
					{@html day.date.format('ddd D MMMM').replace(' 1 ', ' 1<sup>er</sup> ')}
				</div>
				{#if day.seances}
					<div class="seances">
						{#each day.seances as seance}
							<a class="seance" href=".">
								<div class="time">{seance.dateHeure.substring(11, 16).replace(':', 'h')}</div>
								<div class="details">
									<div class="cycle">{seance.cycle[0][0]}</div>
									{#each seance.items as item}
										<div class="titre">
											{item.art || ''}
											{item.titre}
										</div>{/each}
								</div></a
							>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
{/if}

<style>
	.calendar {
		position: relative;
		max-width: 90%;
		margin: 0 auto 48px auto;
		display: grid;
		column-gap: 4px;
		row-gap: 4px;
		grid-template-columns: repeat(7, 1fr);
	}

	.day:not(.active) {
		background-color: #ffffff22;
	}

	.day.header {
		margin-top: 48px;
		padding: 2px;
		background-color: #ffffff99;
		text-align: center;
		color: inherit;
		font-weight: 600;
	}

	.date {
		display: inline-block;
		border-bottom: solid 2px #369;
		padding: 2px 4px;
		margin: 6px 0 0 2px;
		font-weight: 600;
		font-size: 0.813rem;
	}

	.seances {
		margin: 18px 0;
		font-size: 0.75rem;
		font-weight: 300;
	}

	a.seance {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		padding: 6px 8px 8px 8px;
		text-decoration: none;
		color: inherit;
		transition: 0s;
	}

	a.seance:hover {
		background-color: #ffffffcc;
	}

	.time {
		display: inline-block;
		flex: 0 0 25%;
		font-weight: 500;
	}

	.details {
		display: inline-block;
		flex: 0 0 75%;
	}

	.day.active {
		background-color: #ffffff66;
		cursor: pointer;
		transition: 0.1s ease;
	}

	.day.today {
		background-color: #ffffff99;
		outline: solid 4px #258;
	}

	.cycle {
		font-weight: 500;
	}

	@media (max-width: 575px) {
		.calendar {
			grid-template-columns: 1fr;
		}

		.day {
			display: none;
		}

		.day.active {
			display: block;
		}

		.date {
			font-size: 1rem;
		}

		.seances {
			grid-template-columns: 1fr 4fr;
			font-size: 0.938rem;
		}
	}
</style>
