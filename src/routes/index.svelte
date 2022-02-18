<script>
</script>

<svelte:head><title>NLTESOWN</title></svelte:head>

<ul class="container">
	<li>
		<a href=".">Description tout court</a>
	</li>
	<li><a href="cinematheque/calendrier">Le calendrier de la Cinémathèque</a></li>
	<li><a href=".">Choses réputées comestibles</a></li>
	<li><a href=".">¡Adiós, guateque!</a></li>
	<li><a href=".">Choses oulipiques diverses</a></li>
	<li><a href=".">À la recherche du tapis à damier</a></li>
</ul>

<style>
	ul.container {
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		padding: 0;
		justify-content: flex-start;
		align-content: flex-start;
		flex-wrap: wrap;
		width: 1310px; /* (6 + 250 + 6) * 5 */
	}

	@media (max-width: 1309px) {
		ul.container {
			width: 1048px; /* (6 + 250 + 6) * 4 */
		}
	}
	@media (max-width: 1047px) {
		ul.container {
			width: 786px; /* (6 + 250 + 6) * 3 */
		}
	}

	@media (max-width: 785px) {
		ul.container {
			width: 524px; /* (6 + 250 + 6) * 2 */
		}
	}

	@media (max-width: 523px) {
		ul.container {
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
