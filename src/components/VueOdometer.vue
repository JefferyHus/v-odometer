<template>
  <span :class="className"></span>
</template>

<script>
export default {
  name: 'VueOdometer',

  props: {
    value: { type: Number, default: () => 0 },
    theme: { type: String, default: () => 'minimal' },
    format: { type: String, default: () => '(.ddd),dd' },
    duration: { type: Number, default: () => 3000 },
    className: { type: String, default: () => 'odometer' },
    animation: { type: String, default: () => 'count' },
    formatFunction: { type: Function },
  },

  data: () => ({
    instance: null,
  }),

  watch: {
    value: {
      handler (value) {
        if (this.instance && this.instance.update) {
          this.instance.update(value)
        }
      },
      deep: false,
    },
  },

  mounted () {
    this.instance = new Odometer({
      el: this.$el,
      value: this.value,
      theme: this.theme,
      format: this.format,
      duration: this.duration,
      animation: this.animation,
    })

    this.instance.render()
  },
}
</script>
