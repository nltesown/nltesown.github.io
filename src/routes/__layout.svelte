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
	<header>
		<div class="main-title"><a href="/">nltesown</a></div>
	</header>
	<main><slot /></main>
	<Modal
		show={$modal}
		classBg="modal-bg"
		classWindowWrap="modal-window-wrap"
		classWindow="modal-window"
		classContent="modal-content"
		closeButton={false}
		unstyled={true}
	/>
	<!-- <Modal
		show={$modal}
		classWindow="modal-window"
		classContent="modal-content"
		closeButton={false}
		unstyled={true}
	/> -->
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

	header {
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
		margin: 0;
		padding: 0;
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

	:global(.modal-bg) {
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.66);
	}

	:global(.modal-window-wrap) {
		position: relative;
		margin: 12px;
		max-height: 100%;
	}

	:global(.modal-window) {
		position: relative;
		width: 40rem;
		max-width: 100%;
		max-height: 100%;
		margin: 0 auto;
		border-radius: 0rem;
		background: #fff;
	}

	:global(.modal-content) {
		position: relative;
		/* height: 65vh; */
		max-height: 65vh;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>
