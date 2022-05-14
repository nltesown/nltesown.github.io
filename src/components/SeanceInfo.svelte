<script>
	import _ from 'lodash';
	import dayjs from 'dayjs';
	import artTitre from '$lib/format/artTitre';
	import { get } from '$lib/api.js';
	import ba from '$lib/format/beforeAfterStr';
	import IconPersons from '../components/lib/icons/IconPersons.svelte';
	export let data;

	// Formatage du libellé du/des cycle(s) de la séance.
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
		<div class="left">{_.capitalize(dayjs(data.dateHeure).format('ddd D MMM'))}</div>
		<div class="center">{dayjs(data.dateHeure).format('HH[h]mm')}</div>
		<div class="right">Salle {data.salle}</div>
	</header>
	<section>
		<!-- <ul class="cycles">
			{#each formatCycles(data.cycle) as cycle}
				<li>
					{cycle}
				</li>
			{/each}
		</ul> -->
		<ul class="items">
			{#each data.items as item}
				<li>
					<div class="item-titre" class:conf={item.idConf}>
						{#if item.idConf}<IconPersons /> {/if}{artTitre(item.art, item.titre)}
					</div>
					{#if item.idFilm}
						{#await get(`https://api.cnmtq.fr/film/${item.idFilm}`) then film}
							{@html ba(
								`<div class="item-titre">(`,
								')</div>',
								film.titrenx || artTitre(film.artvo, film.titrevo)
							)}
							{@html ba(`<div class="realisateurs">`, '</div>', film.realisateurs)}
							<div>
								{film.pays} / {film.annee} / {item.duree} min / {item.format} / {item.version || ''}
							</div>
							{@html ba('<div>', '</div>', film.adaptation)}
							{@html ba('<div>Avec ', '</div>', film.generique)}
							{@html ba(`<div style="margin-top: 12px;">`, '</div>', film.synopsis)}
							{@html ba(`<div style="margin-top: 12px;">`, '</div>', film.commentaire)}
							<!-- <pre><code>{JSON.stringify(film, null, 2)}</code></pre> -->
						{/await}
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
		color: #036;
		line-height: 1.6;
	}

	header {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		background-color: #036;
		/* background-color: #668; */
		color: #fff;
		padding: 8px 4px;
		font-size: 1rem;
		font-weight: 400;
	}

	.left,
	.center,
	.right {
		display: block;
		padding: 0 0.25rem;
	}

	.left {
		text-align: right;
		flex: 1 1 45%;
	}
	.center {
		text-align: center;
		flex: 1 1 10%;
	}
	.right {
		text-align: left;
		flex: 1 1 45%;
	}

	section {
		padding: 2rem;
	}

	li {
		padding-bottom: 16px;
	}

	.item-titre {
		font-weight: 600;
		font-size: 0.938rem;
	}

	.conf {
		color: #930;
	}
</style>
