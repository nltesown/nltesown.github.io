<script>
	export let color = '#046';
	// export let color = '#158';
	export let size = 18;
	export let fill = false;
	export let strokeWidth = 10;
</script>

<svg
	style="width:{size}px; height:{size}px;"
	viewBox="0 0 100 100"
	xmlns="http://www.w3.org/2000/svg"
>
	{#if fill}
		<circle
			stroke-width={strokeWidth}
			style="fill: {color}; stroke: {color}"
			r="30"
			cy="50"
			cx="50"
		/>
	{:else}
		<circle stroke-width={strokeWidth} style="fill: none; stroke: {color}" r="30" cy="50" cx="50" />
	{/if}
</svg>

<style>
	svg:hover circle {
		fill: #158;
	}
</style>
