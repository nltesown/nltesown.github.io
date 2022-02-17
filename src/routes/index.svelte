<script>
	// import { Body } from 'svelte-body';
</script>

<!-- <div class="ticker-container">
	<div class="ticker">Bienvenidos a mi sitio personal. No se preocupe si no entiende nada. OK?</div>
</div> -->
<svelte:head><title>NLTESOWN</title></svelte:head>

<!-- <Body style="background-color: pink;" /> -->

<ul class="container">
	<!--
	<li><a href=".">Choses réputées comestibles</a></li>
	<li><a href=".">¡Adiós, guateque!</a></li>
	-->
	<li>
		<a href=".">Description tout court</a>
	</li>
	<li><a href="cinematheque/calendrier">En ce moment à la Cinémathèque</a></li>
	<!--
	<li><a href=".">Choses oulipiques diverses</a></li>
	<li><a href=".">À la recherche du tapis à damier</a></li>
	-->
</ul>

<style>
	ul.container {
		display: flex;
		flex-direction: row;
		margin: 0;
		padding: 0;
		justify-content: flex-start;
		/* justify-content: space-between; */
		flex-wrap: wrap;
		width: 100%;
	}

	li {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: stretch;
		background-color: #ffffff99;
		max-width: 100%;
		width: 250px;
		height: 100px;
		margin: 6px;
		padding: 0;
		transition: 0.2s;
	}

	li:hover {
		border-radius: 120px;
		background-color: #ffffffff;
	}

	a {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 12px;
		text-decoration: none;
		color: inherit;
		font-weight: 400;
		font-size: 1rem;
		text-align: center;
	}
</style>
