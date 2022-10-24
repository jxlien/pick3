<script>
	import '../styles/tailwind.css';
	import '../styles/main.css';
	import '../styles/prestonsTheme.css';
	import Nav from './components/nav.svelte';
	import '$lib/db';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Pick3</title>
	<meta property="og:title" content="Site Tittle" />
	<meta property="og:description" content="Site description" />
	<meta property="og:site_name" content="Site Name" />
	<!-- <meta property="og:image" content="https://netlify.app/banner.jpg"/>  -->
	<!-- <meta property="og:image:width" content="1200" /> -->
	<!-- <meta property="og:image:height" content="630" /> -->
</svelte:head>

<Nav />

<slot />

<footer transition:fade class="fixed bottom-0  flex justify-center w-full py-6">
	<button
		on:click={() => window.alert('Just pick one')}
		class="transform active:translate-y-1 transition-transform">I'm confused</button
	>
</footer>