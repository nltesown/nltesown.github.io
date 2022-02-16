<script>
	import Eager from '../components/lib/Eager.svelte';
	import SplashCanvas from '../components/SplashCanvas.svelte';
</script>

<!-- <SplashCanvas /> -->
<nav>
	<div class="main-title"><a href="/">nltesown</a></div>
</nav>
<main>
	<slot />
</main>

<style>
	nav {
		display: flex;
		position: sticky;
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
		line-height: 2rem;
		font-size: 2rem;
		font-weight: 200;
		text-transform: uppercase;
		letter-spacing: -0.1rem;
		z-index: 500;

		/* border-bottom: solid 2px #000; */
	}

	main {
		position: relative;
		width: 100%;
		margin: 12px 0 12px 0;
		z-index: 1;
	}

	a {
		text-decoration: none;
		color: inherit;
		transition: 0.2s;
	}

	a:hover,
	a:active {
		color: #adbd64;
		/* color: #affa3c; */
		/* color: tomato; */
	}

	@media (max-width: 575px) {
		main {
			margin-top: 72px;
		}

		nav {
			height: 60px;
			font-size: 1.5rem;
			line-height: 1.5rem;
		}
	}
</style>
