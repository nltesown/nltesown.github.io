<script>
	import Eager from '../components/lib/Eager.svelte';
</script>

<Eager>
	<nav>
		<div class="main-title"><a href="/">Anegada</a></div>
	</nav>
</Eager>
<slot />

<style>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 120px;
		background-color: #fff;
		color: #000;
		overflow: hidden;
		/* border-bottom: solid 2px #000; */
	}

	.main-title {
		line-height: 4rem;
		font-size: 4rem;
		font-family: Neonderthaw;
		/* font-family: Monoton; */

		overflow: hidden;
		text-transform: lowercase;
	}

	a {
		text-decoration: none;
		color: inherit;
		transition: 0.2s;
		outline: solid 1px red;
	}

	a:hover,
	a:active {
		color: tomato;
	}
</style>
