<script lang="ts">
	import type { Food } from './Food';

	let saturation: number = 100;
	let fullness: number = 100;
	let fitness: number = 100;
	let love: number = 100;
	let currentMood: string = 'Happy';

	function feed(food: Food) {
		saturation += food.saturation;
		addFullness(food.fulfillment);
	}

	function addSaturation(saturation: number) {
		//Add method
	}

	function addFullness(fulfillment: number) {
		if (fullness + fulfillment >= 100) {
			fullness = 100;
		} else {
			fullness += fulfillment;
		}
	}
</script>

<div class="kiwi" />

<style>
	.kiwi {
		background-image: url('/images/Kiwi.png');
		background-size: cover;
		background-repeat: no-repeat;
		min-width: 10px;
		height: 10vh;
		width: 10vw;
	}
</style>
