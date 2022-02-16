<script>
	export let info;
	let isVisible = true;
</script>

<div class:visible={isVisible}>{JSON.stringify(info, null, 2)}</div>

<style>
	div {
		display: none;
		position: fixed;
		left: calc(50vw - 150px);
		top: 200px;
		width: 300px;
		padding: 12px;
		background-color: #fff;
		z-index: 10000;
	}

	.visible {
		display: block;
	}
</style>
