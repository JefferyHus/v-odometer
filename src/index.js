import VueOdometer from './components/VueOdometer';

export default VueOdometer;

if (typeof window !== 'undefined' && window.Vue)
{
	window.Vue.component('vue-odometer', VueOdometer);
}