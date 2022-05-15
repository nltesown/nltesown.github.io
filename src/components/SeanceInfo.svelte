<script>
	import _ from 'lodash';
	import dayjs from 'dayjs';
	import artTitre from '$lib/format/artTitre';
	import { get } from '$lib/api.js';
	import ba from '$lib/format/beforeAfterStr';
	import de from '$lib/format/de';
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
			{#each data.items as item, i}
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
							{@html ba(
								`<div class="realisateurs">`,
								'</div>',
								`${de(film.realisateurs)}${film.realisateurs}`
							)}
							<div>
								{ba('', ' / ', film.pays)}
								{ba('', ' / ', film.annee)}
								{ba('', ' / ', item.duree)}
								{ba('', ' / ', item.format)}
								{ba('', '', item.version)}
							</div>
							{@html ba('<div>', '</div>', film.adaptation)}
							{@html ba('<div>Avec ', '.</div>', film.generique)}
							{@html ba(`<p style="margin: 0.5rem 0;">`, '</p>', film.synopsis)}
							<!-- <pre><code>{JSON.stringify(film, null, 2)}</code></pre> -->
							{#if i < data.items.length - 1}<hr class="short" />{/if}
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
	header {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		background-color: #ccc;
		padding: 12px 4px;
		font-size: 1.25rem;
		font-weight: 400;
	}

	.left,
	.center,
	.right {
		display: block;
		padding: 0 0.2rem;
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
		font-size: 1rem;
		padding: 12px 24px 12px 12px;
		line-height: 1.2;
	}

	ul.items {
		margin: 12px 0;
	}

	.item-titre {
		font-weight: 600;
		font-size: 1.125rem;
	}

	.conf {
		color: #930;
	}

	hr.short {
		width: 80px;
		border: none;
		border-bottom: solid 1px #11558840;
		margin: 18px 0;
		padding: 0;
	}
</style>
