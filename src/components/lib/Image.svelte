<script>
	export let src;
	export let alt;
	export let ratio = 4 / 3; // Ratio de l'image à charger.
	export let duration = 0; // ms

	function loaded(img) {
		img.style.opacity = 1;
	}
</script>

<div class="image-container" style="padding-bottom: {(1 / ratio) * 100}%">
	<img {src} {alt} use:loaded style="transition: {duration}ms;" />
</div>

<style>
	.image-container {
		position: relative;
		display: block;
		width: 100%;
	}

	img {
		position: absolute;
		opacity: 0;
	}
</style>
