const Odometer = require('odometer/odometer.min.js')

import 'odometer/themes/odometer-theme-car.css'
import 'odometer/themes/odometer-theme-default.css'
import 'odometer/themes/odometer-theme-digital.css'
import 'odometer/themes/odometer-theme-minimal.css'
import 'odometer/themes/odometer-theme-plaza.css'
import 'odometer/themes/odometer-theme-slot-machine.css'
import 'odometer/themes/odometer-theme-train-station.css'
import VueOdometer from './components/VueOdometer'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-odometer', VueOdometer)
}

export default VueOdometer
