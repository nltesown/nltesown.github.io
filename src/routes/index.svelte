<script>
</script>

<svelte:head><title>NLTESOWN</title></svelte:head>

<div class="wrapper">
	<div class="container">
		<ul>
			<li>
				<a href=".">Description tout court</a>
			</li>
			<li><a href="cinematheque/calendrier">Le calendrier de la Cinémathèque</a></li>
			<li><a href="system-reset">System reset</a></li>
			<li><a href="sndv">SNDV<br />Générateur d'exotisme durassien</a></li>
			<li><a href=".">Choses réputées comestibles</a></li>
			<li><a href=".">¡Adiós, guateque!</a></li>
			<li><a href=".">Choses oulipiques diverses</a></li>
			<li><a href=".">À la recherche du tapis à damier</a></li>
			<li><a href="map">Tourisme en tripoints</a></li>
			<!-- <li><a href="." /></li> -->
		</ul>
	</div>
</div>

<style>
	.container {
		width: 1310px; /* (6 + 250 + 6) * 5 */
		margin: 0 auto;
	}

	ul {
		display: flex;
		flex-direction: row;
		padding: 0;
		width: 100%;
		justify-content: flex-start;
		align-content: flex-start;
		flex-wrap: wrap;
	}

	@media (max-width: 1309px) {
		.container {
			width: 1048px; /* (6 + 250 + 6) * 4 */
		}
	}
	@media (max-width: 1047px) {
		.container {
			width: 786px; /* (6 + 250 + 6) * 3 */
		}
	}

	@media (max-width: 785px) {
		.container {
			width: 524px; /* (6 + 250 + 6) * 2 */
		}
	}

	@media (max-width: 523px) {
		.container {
			width: 262px; /* (6 + 250 + 6) * 1 */
		}
	}

	li {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: stretch;
		margin: 6px;
		padding: 0;
		background-color: #ffffff99;
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
		max-width: 100%;
		width: 250px;
		height: 100px;
		padding: 12px;
		text-decoration: none;
		color: inherit;
		font-weight: 400;
		font-size: 1rem;
		text-align: center;
	}
</style>
