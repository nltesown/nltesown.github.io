<script>
	import Image from '../components/lib/Image.svelte';
</script>

<div class="container">
	<div class="image-container"><Image src="../img/2-1.jpg" alt="System reset" /></div>
	<article>
		<p>
			<strong>System reset. Are you certain?</strong> Think twice before answering this question and
			pressing that key.
		</p>
		<p>
			Blue keys, yes, seem friendly and innocuous. Blue keys, to put it another way, are not red
			keys. But what is the color blue exactly supposed to mean here?
		</p>
	</article>
</div>

<style>
	article {
		background-color: #fff;
		padding: 24px;
		min-height: 200vh;
	}

	.container {
		width: 800px;
		max-width: calc(100vw - 12px);
		margin: 0 auto;
	}

	.image-container {
		margin-bottom: 12px;
	}
</style>
