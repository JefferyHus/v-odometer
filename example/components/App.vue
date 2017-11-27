<template>
	<div id="app">
		<vue-odometer :value="mynumber" animation="smooth"></vue-odometer>
		<button @click="updateNumber()">Update</button>
	</div>
</template>

<script>
	import VueOdometer from '../../src'

	export default {
		name: 'app',
		data: function () {
			return {
				mynumber: 0
			}
		},
		methods: {
			updateNumber: function ()
			{
				this.mynumber = Math.floor(Math.random() * (9999 - 1)) + 1
				console.log(this.mynumber)
			}
		},
		components: {
			"vue-odometer": VueOdometer
		}
	}
</script>