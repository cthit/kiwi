<script>
	// @ts-ignore
	import MoodSign from '../components/MoodSign.svelte';
	import Kiwi from '../components/Kiwi.svelte';
</script>

<div class="background">
	<MoodSign />
	<Kiwi />
</div>

<style>
	.background {
		background-image: url('/images/Hubben.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		min-width: 100px;
		height: 100vh;
		width: 100vw;
	}
</style>
