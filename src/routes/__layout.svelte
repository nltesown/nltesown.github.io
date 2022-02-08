<script>
	import Eager from '../components/lib/Eager.svelte';
	import SplashCanvas from '../components/SplashCanvas.svelte';
</script>

<SplashCanvas />

<nav>
	<div class="main-title"><a href="/">nltesown</a></div>
</nav>
<main>
	<slot />
</main>

<style>
	nav {
		display: flex;
		position: fixed;
		font-family: Inter;
		left: 0;
		top: 0;
		width: 100%;
		justify-content: center;
		align-items: center;
		height: 120px;
		background-color: #111;
		color: #eee;
		overflow: hidden;
		line-height: 3rem;
		font-size: 3rem;
		font-weight: 200;
		text-transform: uppercase;
		letter-spacing: -0.1rem;
		z-index: 1000;

		/* border-bottom: solid 2px #000; */
	}

	main {
		position: relative;
		margin: calc(120px + 1vw) 1vw 1vw 1vw;
		z-index: 1;
	}

	a {
		text-decoration: none;
		color: inherit;
		transition: 0.2s;
	}

	a:hover,
	a:active {
		color: #0d0;
		/* color: tomato; */
	}
</style>
