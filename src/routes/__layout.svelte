<script>
	import { setContext } from 'svelte';
	import { page } from '$app/stores';
	import Eager from '../components/lib/Eager.svelte';
	import SplashCanvas from '../components/SplashCanvas.svelte';
	import IconHome from '../components/lib/icons/IconHome.svelte';

	import Modal, { bind } from 'svelte-simple-modal';
	import { modal } from '../stores.js';
</script>

{#if $page.url.pathname === '/sndv/'}
	<a href="/" class="mini"><IconHome color="#eee" size={20} /></a>
	<slot />
{:else}
	<!-- <div class="body-bg" /> -->
	<nav>
		<div class="main-title"><a href="/">nltesown</a></div>
	</nav>
	<main><slot /></main>
	<Modal show={$modal} classWindow="modal-window" closeButton={false} />
{/if}

<style>
	a.mini {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 48px;
		height: 48px;
		background-color: #4b668a;
		text-align: center;
		color: #eee;
		text-transform: uppercase;
		font-weight: 300;
		font-size: 1.5rem;
		line-height: 1.5rem;
		transition: 0.25s;
		z-index: 500;
	}

	a.mini:hover,
	a.mini:active {
		background-color: #697f7f;
	}

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
		color: tomato;
		/* color: #adbd64; */
		/* color: #affa3c; */
	}

	@media (max-width: 575px) {
		nav {
			height: 60px;
			font-size: 1.5rem;
			line-height: 1.5rem;
		}
	}

	:global(.modal-window) {
		width: 600px !important;
		max-width: 70vw !important;
		/* max-height: 60vw !important; */
		border-radius: 0 !important;
		overflow-x: hidden;
	}
</style>
