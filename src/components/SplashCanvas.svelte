<script>
	import { onMount } from 'svelte';

	let w, h;
	let elCanvas;

	onMount(() => {
		let ctx = elCanvas.getContext('2d');
		let gradient;
		gradient = ctx.createLinearGradient(0, 0, 100, 100);
		gradient.addColorStop(0, '#3f3329ff');
		gradient.addColorStop(1, '#cccc00cc');
		ctx.fillStyle = gradient;
		ctx.fillRect(-10, -10, w + 10, h + 10);
		gradient = ctx.createLinearGradient(100, 0, 0, 100);
		gradient.addColorStop(0, '#6699ff33');
		gradient.addColorStop(1, '#336699ff');
		ctx.fillStyle = gradient;
		ctx.fillRect(-10, -10, w + 10, h + 10);
	});
</script>

<canvas bind:this={elCanvas} bind:clientWidth={w} bind:clientHeight={h} />

<style>
	canvas {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 0;
	}
</style>
