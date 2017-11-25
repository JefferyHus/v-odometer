<p align="center"><a href="http://github.hubspot.com/odometer/" target="_blank"><img src="http://themesawesome.com/wp-content/uploads/2014/05/odometer.png" width="523" height="167" /></a><br><br>
<a href="http://github.hubspot.com/odometer/" target="_blank">Odometer</a>
<br><br>
</p>

# About Vue-Odometer

Smoothly transitions numbers with ease. Use this library to give you application a smooth animation, only applicable on numbers, for more details about the OdometerJS pelase refer to: https://github.com/HubSpot/odometer

## Installation

`npm install v-odometer`

## Usage

start by importing it in the file where it is being used:
```javascript
import VueOdometer from 'v-odometer'
```

Then add it to your component definition:

```javascript
Vue.component('my-component', {
    components: {VueOdometer}
    // ...
})
```

Or register it globally:

```javascript
Vue.component(VueOdometer);
```

```html
<vue-odometer :value="mynumber" class="myClassName"></vue-odometer>
```
