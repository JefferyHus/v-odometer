<template>
	<span :class="className"></span>
</template>

<script>
	import Odometer from 'odometer'
	import 'odometer/themes/odometer-theme-car.css'
	import 'odometer/themes/odometer-theme-default.css'
	import 'odometer/themes/odometer-theme-digital.css'
	import 'odometer/themes/odometer-theme-minimal.css'
	import 'odometer/themes/odometer-theme-plaza.css'
	import 'odometer/themes/odometer-theme-slot-machine.css'
	import 'odometer/themes/odometer-theme-train-station.css'

	export default {
		name: 'vue-odometer',
		props: {
			className:{
				type: String,
				default: 'odometer'
			},
			value: {
				type: Number,
				required: true,
				default: 0
			},
			format: {
				type: String,
				required: false,
				default: '(.ddd),dd'
			},
			theme: {
				type: String,
				required: false,
				default: 'minimal'
			},
			duration: {
				type: Number,
				required: false,
				default: 3000
			},
			animation: {
				type: String,
				required: false,
				default: 'count'
			},
			formatFunction: {
				type: Function,
				required: false
			}
		},
		data() {
			return {
				instance: null
			}
		},
		watch: {
			value: {
				handler(value) {
					if (this.instance && this.instance.update) {
						this.instance.update(value)
					}
				},
				deep: false
			}
		},
		mounted() {
			this.instance = new Odometer({
				el: this.$el,
				value: this.value,
				theme: this.theme,
				format: this.format,
				duration: this.duration,
				animation: this.animation
			})

			this.instance.render()
		}
	}
</script>
