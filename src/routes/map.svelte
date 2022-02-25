<script type="typescript">
	import Dialog from '../components/lib/Dialog.svelte';
</script>

<div class="container">
	<article>
		<h1>Tourisme en tripoints</h1>

		<ul>
			<li>Allemagne - Belgique - Pays-Bas</li>
			<li>Allemagne - France - Luxembourg</li>
			<li>Allemagne - France - Suisse</li>
			<li>Allemagne - Autriche - République tchèque</li>
			<li>Allemagne - Pologne - République tchèque</li>
			<li>Andorre - Espagne - France (&times;2)</li>
			<li>Autriche - Liechtenstein - Suisse (&times;2)</li>
			<li>Autriche - Italie - Slovénie</li>
			<li>Belgique - France - Luxembourg</li>
			<li>France - Italie - Suisse</li>
			<li>Moldavie - Roumanie - Ukraine</li>
			<li />
			<li />
			<li />
			<li />
			<ul />
		</ul>
	</article>
</div>
<Dialog text="What do you want to do?" />

<style>
	article {
		background-color: #fff;
		padding: 24px;
		min-height: 200vh;
	}

	p {
		margin: 1rem 0;
		line-height: 1.5;
	}

	.container {
		width: 800px;
		max-width: calc(100vw - 12px);
		margin: 0 auto;
	}
</style>
