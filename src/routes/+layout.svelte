<svelte:head>
	<title>Solo Christmas</title>
	<meta name="description" content="Merry solo christmas" />
	<link rel="icon" href="/favicon.ico" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>
<script>
	import Header from './Header.svelte';
	import '../app.css';

	/** @type {{children: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}



	.snow-container { 
		position: fixed; 
		top: 0; left: 0; 
		width: 100%; 
		height: 100%; 
		pointer-events: none; 
		overflow: hidden; 
	}
	
	.snowflake { 
		position: absolute;
		top: -10px; 
		left: 50%; 
		font-size: 
		1.5rem; 
		color: white; 
		animation: fall 10s linear infinite; 
		opacity: 0.8;
	}
		
	@keyframes fall { 
		0% { 
			transform: translateX(0) translateY(0); 
		} 
		100% { 
			transform: translateX(calc(200vw * var(--direction))) translateY(200vh); 
		} 
	} 
	.snowflake:nth-child(odd) { 
		animation-duration: 7s; 
		animation-delay: -3s; 
		--direction: 1; 
	} 
	.snowflake:nth-child(even) { 
		animation-duration: 10s; 
		animation-delay: -5s; 
		--direction: -1; 
	}
</style>

<div class="snow-container">
	{#each Array(50) as _, i} 
		<div class="snowflake" style="left: {Math.random() * 100}%; animation-duration: {Math.random() * 3 + 7}s; opacity: {Math.random()};">❄️</div> 
	{/each} 
</div> 


