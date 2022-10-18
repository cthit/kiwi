<script lang="ts">
	import moods from './moods.json';

	// Generate random index based on number of keys
	const randIndex = Math.floor(Math.random() * moods.moods.length);

	let index: number = randIndex;
	let currentMood: string = moods.moods[index].mood;
	let moodHEX: string = moods.moods[index].HEX;
</script>

<div style={`background-color: ${moodHEX};`} class="mood-sign" />

<style>
	.mood-sign {
		border: 2px red;
		background-size: cover;
		background-repeat: no-repeat;
		min-width: 10px;
		min-height: 10vh;
		width: 10vw;
	}
</style>
