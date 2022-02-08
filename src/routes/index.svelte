<ul class="container">
	<li><a href=".">Choses réputées comestibles</a></li>
	<li><a href=".">Description tout court</a></li>
	<li><a href=".">¡Adiós, guateque!</a></li>
</ul>

<style>
	ul.container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
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
		height: 200px;
		margin: 12px;
		padding: 0;
		transition: 0.1s;
	}

	li > a {
		width: 100%;
		padding: 12px;
		display: block;
		text-decoration: none;
		color: transparent;
	}

	li:hover {
		background-color: #ffffffff;
	}
</style>
