<script>
	import '$lib/dayjs_custom_locale_fr';
	dayjs.locale('fr');
	import _ from 'lodash';
	import dayjs from 'dayjs';
	import { get } from '$lib/api.js';

	let cal;
	(async () => {
		let seances = await get('PROG111%20Mars-mai%202022/PROG111%20Mars-mai%202022_SEANCES_DEF.json');

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
			<div class="day" class:active={day.seances}>
				<div class="date">
					{@html day.date.format('ddd D MMMM').replace(' 1 ', ' 1<sup>er</sup> ')}
				</div>

				{#if day.seances}
					<div class="seances">
						{#each day.seances as seance}
							<div class="heureSalle" data-seance={seance.idSeance}>
								<span class="heure">{seance.dateHeure.substring(11, 16).replace(':', 'h')} </span>
							</div>
							<div>
								<div class="cycle">{seance.cycle[0][0]}</div>
								{#each seance.items as item}
									<div class="titre">
										{item.art || ''}
										{item.titre}
									</div>{/each}
							</div>
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
		/* font-size: 0.875rem; */
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

	.day.active {
		background-color: #ffffff66;
		cursor: pointer;
		transition: 0.1s ease;
	}

	.day.active:hover {
		background-color: #ffffffcc;
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
		margin: 24px 8px;
		display: grid;
		grid-template-columns: 1fr 3fr;
		font-size: 0.75rem;
		font-weight: 300;
	}

	.seances > div {
		padding-bottom: 6px;
	}

	.cycle {
		font-weight: 500;
	}

	.titre {
		font-weight: 300;
	}

	.heure {
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
