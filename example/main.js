import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import * as _ from "lodash";
import moment from 'moment';

/**
 * Add the moment to the window
 */
window.moment = moment;

/**
 * Change the behavior
 */
window.moment.relativeTimeThreshold('s', 60);
window.moment.relativeTimeThreshold('m', 60);
window.moment.relativeTimeThreshold('h', 24);
window.moment.relativeTimeThreshold('d', 28);
window.moment.relativeTimeThreshold('M', 12);
/**
 * Start creating the DOM Vue controller
 */

Vue.use(VueRouter);
Vue.use(require('vue-moment'));

// Create routes for each component
const routes = [
	{
		path: '/',
		component: App
	}
]

// Create the routing object
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes
})

new Vue({
	router,
	components: { App },
	render: h => h(App)
}).$mount('#app')