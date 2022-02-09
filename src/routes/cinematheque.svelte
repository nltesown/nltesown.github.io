<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const res = await fetch('cinematheque_seances.json');
		return {
			status: res.status,
			props: {
				seances: res.ok && (await res.json())
			}
		};
	}
</script>

<script>
	import '$lib/dayjs_custom_locale_fr';
	dayjs.locale('fr');
	import _ from 'lodash';
	import dayjs from 'dayjs';
	export let seances;

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

	let cal = _(new Array(calSpanDays))
		.map((d, i) => {
			let date = firstCalDay.add(i, 'day');
			return {
				date,
				seances: _(seances).pick(date.format('YYYY-MM-DD')).map().value()[0]
			};
		})
		.value();
</script>

<div class="calendar">
	<div class="day header">Lundi</div>
	<div class="day header">Mardi</div>
	<div class="day header">Mercredi</div>
	<div class="day header">Jeudi</div>
	<div class="day header">Vendredi</div>
	<div class="day header">Samedi</div>
	<div class="day header">Dimanche</div>

	{#each cal as day}
		<div class="day">
			{day.date.format('D MMMM')}

			{#if day.seances}
				<div class="seances">
					{#each day.seances as seance}<div>
							<div class="heureSalle">
								{seance.dateHeure.substring(11, 16)}
								{seance.salle}
								{seance.items[0].art || ''}
								{seance.items[0].titre}
							</div>
						</div>{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.calendar {
		position: relative;
		max-width: 98%;
		margin: 0 auto;
		display: grid;
		column-gap: 4px;
		row-gap: 4px;
		grid-template-columns: repeat(7, 1fr);
		font-size: 0.875rem;
	}

	.day.header {
		background-color: #ffffff99;
		text-align: center;
		color: inherit;
		font-weight: 600;
	}

	.day {
		padding: 4px;
		background-color: #ffffff44;
		cursor: pointer;
		transition: 0.1s ease;
	}

	.day:hover {
		/* transform: scale(1.25); */
		background-color: #ffffffcc;
		z-index: 10000;
	}

	.heureSalle {
		font-size: 0.75rem;
		font-weight: 300;
	}
</style>
