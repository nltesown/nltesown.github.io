<script>
	import '$lib/dayjs_custom_locale_fr';
	dayjs.locale('fr');
	import _ from 'lodash';
	import dayjs from 'dayjs';
	import { get } from '$lib/api.js';
	import Loader from '../components/Loader.svelte';
	import { fade } from 'svelte/transition';

	let pCal = new Promise((resolve, reject) => {
		Promise.all([
			new Promise((resolve) => {
				setTimeout(resolve, 1000); // Délai minimal de résolution des promesses.
			}),
			get('PROG99 Décembre 2021-février 2022/PROG99_GLOBAL/PROG99_SEANCES_DEF.json'),
			get('PROG111 Mars-mai 2022/PROG111_GLOBAL/PROG111_SEANCES_DEF.json'),
			get('PROG116 FIFR 2022/PROG116_GLOBAL/PROG116_SEANCES.json')
		])
			.then((data) => {
				data = _(data).filter().value(); // Supprime l'item `undefined` renvoyé par la promesse de délai.
				let seances = _(_.concat(...data))
					.filter((d) => d.salle !== 'HO')
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

				let calendar = _(new Array(calSpanDays))
					.map((d, i) => {
						let date = firstCalDay.add(i, 'day');
						return {
							date,
							seances: _(seances).pick(date.format('YYYY-MM-DD')).map().value()[0]
						};
					})
					.value();

				resolve({ calendar, calSpanDays });
			})
			.catch(() => reject());
	});
</script>

<svelte:head><title>Cinémathèque</title></svelte:head>

{#await pCal}<Loader text="Chargement des données" />{:then data}
	<div in:fade={{ duration: 250 }}>
		<div class="calendar-nav">
			{#each new Array(data.calSpanDays / 7) as w, i}
				<div>
					{#if i === 0}⚫︎{:else}○{/if}
				</div>
			{/each}
		</div>

		<div class="calendar">
			<div class="day header">Lundi</div>
			<div class="day header">Mardi</div>
			<div class="day header">Mercredi</div>
			<div class="day header">Jeudi</div>
			<div class="day header">Vendredi</div>
			<div class="day header">Samedi</div>
			<div class="day header">Dimanche</div>

			{#each data.calendar as day}
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
					{:else}
						<div class="no-seance">Aucune séance aujourd'hui.</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
{:catch}Le chargement des données a échoué.
{/await}

<style>
	.calendar-nav {
		width: 90%;
		margin: 0 auto;
		padding: 9px 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		user-select: none;
	}

	.calendar-nav > div {
		padding: 9px 3px;
		color: #069;
		cursor: pointer;
		transition: 0.1s;
	}

	.calendar-nav > div:hover {
		color: #fff;
	}

	.calendar {
		position: relative;
		width: 90%;
		margin: 0 auto 48px auto;
		display: grid;
		column-gap: 4px;
		row-gap: 4px;
		grid-template-columns: repeat(7, 1fr);
	}

	.day {
		min-width: 100%; /* Egalisation de la largeur des colonnes */
	}

	.day:not(.active) {
		background-color: #ffffff22;
	}

	.day.header {
		margin-top: 12px;
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

	.day.today {
		background-color: #eed;
		/* background-color: #ef6; */
	}

	.date {
		display: inline-block;
		border-bottom: solid 2px #369;
		padding: 2px 4px;
		margin: 6px 0 18px 2px;
		font-weight: 600;
		font-size: 0.813rem;
	}

	.seances {
		margin: 0 0 18px 0;
		font-size: 0.75rem;
		font-weight: 300;
	}

	.no-seance {
		display: none;
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

	.cycle {
		font-weight: 500;
	}

	@media (max-width: 575px) {
		.calendar {
			grid-template-columns: 1fr;
			column-gap: 0;
			row-gap: 12px;
		}

		.day {
			display: none;
		}

		.day.today {
			background-color: #ffffff66;
			display: block;
		}

		.day.active.today,
		.day.today ~ .day.active {
			display: block;
		}

		.date {
			font-size: 1rem;
		}

		.seances {
			grid-template-columns: 1fr 4fr;
			font-size: 0.938rem;
		}

		.no-seance {
			display: block;
			margin: 0 0 28px 0;
			padding: 6px 8px 8px 8px;
			font-size: 0.938rem;
			font-weight: 500;
			text-align: center;
		}
	}
</style>
