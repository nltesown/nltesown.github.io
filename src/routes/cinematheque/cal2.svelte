<script>
	import IconCircle from '../../components/lib/icons/IconCircle.svelte';
</script>

<svelte:head><title>Cal2</title></svelte:head>

<nav>
	<div><IconCircle /></div>
	<div><IconCircle /></div>
	<div><IconCircle /></div>
	<div><IconCircle /></div>
	<div><IconCircle /></div>
	<div><IconCircle /></div>
</nav>
<section />

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: sticky;
		height: 48px;
		top: 120px;
		left: 0;
		right: 0;
		background-color: #ccc;
		overflow: hidden;
	}

	section {
		position: relative;
		min-height: 300vh;
		overflow: hidden;
	}

	nav > div {
		outline: solid 1px red;
		padding: 4px;
		cursor: pointer;
	}

	nav > div:hover {
		transform: scale(1.25);
	}
</style>
