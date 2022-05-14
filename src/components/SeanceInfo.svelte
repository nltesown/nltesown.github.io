<script>
	import _ from 'lodash';
	import dayjs from 'dayjs';
	import artTitre from '$lib/format/artTitre';
	export let data;

	function formatCycles(cycles) {
		return _(cycles)
			.groupBy((c) => c[0])
			.mapValues((c) =>
				_(c)
					.map((d) => d[1])
					.filter((d) => _.indexOf(['Rencontres et conférences', 'Les films'], d) < 0)
					.value()
					.join(' / ')
			)
			.toPairs()
			.map((c) =>
				_(c)
					.filter((d) => d !== '')
					.value()
					.join(' : ')
			)
			.value();
	}
</script>

<article>
	<header>
		<div style="text-align:center;">
			{_.capitalize(dayjs(data.dateHeure).format('ddd D MMM - HH[h]mm'))} - Salle {data.salle}
		</div>
	</header>
	<section>
		<ul class="cycles">
			{#each formatCycles(data.cycle) as cycle}
				<li>
					{cycle}
				</li>
			{/each}
		</ul>
		<hr />
		<ul class="items">
			{#each data.items as item}
				<li>
					<div class="item-titre">{artTitre(item.art, item.titre)}</div>
					{#if item.idFilm}
						<div class="realisateurs">{item.realisateurs}</div>
						<div>{item.annee}</div>
					{/if}
				</li>
			{/each}
		</ul>

		<!-- <pre><code>{JSON.stringify(data, null, 2)}</code></pre> -->
	</section>
	<footer />
</article>

<!-- 
<ul>
	{#each data.items as item}
		<li>{item.titre}</li>
	{/each}
</ul>
 -->
<style>
	article {
		font-size: 0.875rem;
	}

	header {
		background-color: #668;
		color: #fff;
		padding: 8px 4px;
		font-size: 1rem;
		font-weight: 400;
	}

	section {
		padding: 8px;
	}
</style>
