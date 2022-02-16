<!-- <div class="ticker-container">
	<div class="ticker">Bienvenidos a mi sitio personal. No se preocupe si no entiende nada. OK?</div>
</div> -->
<svelte:head><title>NLTESOWN</title></svelte:head>

<ul class="container">
	<!-- <li><a href="."><div class="title">Choses réputées comestibles</div></a></li>
	<li><a href="."><div class="title">Description tout court</div></a></li>
	<li><a href="."><div class="title">¡Adiós, guateque!</div></a></li> -->
	<li><a href="cinematheque">En ce moment à la Cinémathèque</a></li>
	<!-- <li><a href="."><div class="title">Choses oulipiques diverses</div></a></li>
	<li><a href="."><div class="title">À la recherche du tapis à damier</div></a></li> -->
</ul>

<style>
	/*
.ticker-container {
		position: relative;
		width: 100%;
		height: 36px;
		background-color: #000;
		overflow: hidden;
	}

	.ticker {
		position: absolute;
		text-align: right;
		color: #0f0;
		font-family: 'Dot Matrix';
		font-size: 28px;
		padding: 4px;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-name: ticker;
		animation-duration: 10s;
	}
*/
	/*TODO: improve, see https://codepen.io/lewismcarey/pen/GJZVoG */
	/*@keyframes ticker {
		0% {
			transform: translate3d(100%, 0, 0);
			visibility: visible;
		}

		100% {
			-webkit-transform: translate3d(-100%, 0, 0);
			transform: translate3d(-100%, 0, 0);
		}
	}*/

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
		margin: 0 6px;
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
		/* color: #036; */
	}

	.title {
		padding: 2px 12px;
		text-align: center;
	}
</style>
