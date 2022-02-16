<!-- https://codepen.io/nikhil8krishnan/pen/rVoXJa -->
<script>
	export let size = 64;
	export let text = '';
	// export let text = 'Chargement des données.';
	export let style = {
		ring: { color: '#258', opacity: 0.25 },
		dot: { color: '#258', opacity: 1 },
		text: { color: '#258', fontSize: '1rem' }
	};
	export let duration = '1s';
</script>

<div class="wrapper">
	<div class="container">
		<svg
			version="1.1"
			id="L3"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 100 100"
			enable-background="new 0 0 0 0"
			xml:space="preserve"
			style="width: {size}px; height: {size}px;"
		>
			<circle
				fill="none"
				stroke={style.ring.color}
				stroke-width="4"
				cx="50"
				cy="50"
				r="44"
				style="opacity:{style.ring.opacity};"
			/>
			<circle
				fill={style.dot.color}
				stroke="none"
				style="opacity:{style.dot.opacity};"
				stroke-width="3"
				cx="8"
				cy="54"
				r="6"
			>
				<animateTransform
					attributeName="transform"
					dur={duration}
					type="rotate"
					from="0 50 48"
					to="360 50 52"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>

		{#if text && text != ''}
			<div class="text" style="color:{style.text.color}; font-size:{style.text.fontSize};">
				{text}
			</div>
		{/if}
	</div>
</div>

<style>
	.wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		z-index: 10000;
	}

	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.text {
		margin-top: 1.5rem;
	}
</style>
