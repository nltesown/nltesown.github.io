<script type="typescript">
	export let text: string = '';
	let elWrapper: HTMLElement;

	function close(e: Event) {
		console.log(e instanceof Event);

		elWrapper.style.display = 'none';
	}
</script>

<div class="dialog-wrapper" on:click={close} bind:this={elWrapper}>
	<div class="dialog-container">{text}</div>
</div>

<style>
	.dialog-wrapper {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.dialog-container {
		display: flex;
		flex: 0 0 auto;
		width: 700px;
		height: 300px;
		background-color: aqua;
	}
</style>
