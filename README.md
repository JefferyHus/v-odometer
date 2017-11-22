<p align="center"><a href="http://github.hubspot.com/odometer/" target="_blank"><img src="http://themesawesome.com/wp-content/uploads/2014/05/odometer.png" width="523" height="167" /></a><br><br>
<a href="http://github.hubspot.com/odometer/" target="_blank">Odometer</a>
<br><br>
</p>

# About Vue-Odometer
Smoothly transitions numbers with ease. Use this library to give you application a smooth animation, only applicable on numbers, for more details about the OdometerJS pelase refer to: https://github.com/HubSpot/odometer

## Installation
`npm install vue-odometer`

## Usage
#### ECMAScript 6 (ES6)/ ECMAScript 2015 (ES2015)
- Individual components and directives
To cherry pick the component, start by importing it in the file where it is being used:
```javascript
import VueOdometer from 'vue-odometer/src'
```
Then add it to your component definition:

```javascript
Vue.component('my-component', {
    components: {
        'vue-odometer': VueOdometer
    }
    // ...
})
```
Or register it globally:

```javascript
Vue.component('vue-odometer': VueOdometer);
```
#### ECMAScript 5 (ES5)
```xml
...
<head>
	<!-- Metas -->
	<meta name="title" content="ES6-CrawlerDetect">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<title>Odometer - VueJS component</title>
	<!-- Scripts -->
	<script type="text/javascript" src="./your/path/to/main.prod.js"></script>
</head>
<body>
	<div id="app">
		...
		<vue-odometer :value="mynumber" class="myClassName"></vue-odometer>
		...
	</div>
</body>
...
```

```javascript
var app = new Vue({
	data: {
		mynumber: ""
	}
})
```