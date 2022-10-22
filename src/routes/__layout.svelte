<script>
	import '../styles/tailwind.css';
	import '../styles/main.css';
	import '../styles/prestonsTheme.css';
	import Nav from './components/nav.svelte';
</script>

<svelte:head>
	<title>Svelte Sides</title>
	<meta property="og:title" content="Site Tittle" />
	<meta property="og:description" content="Site description" />
	<meta property="og:site_name" content="Site Name" />
	<!-- <meta property="og:image" content="https://netlify.app/banner.jpg"/>  -->
	<!-- <meta property="og:image:width" content="1200" /> -->
	<!-- <meta property="og:image:height" content="630" /> -->
</svelte:head>

<Nav />

<slot />
