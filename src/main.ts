import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './style/index.styl';
import '@/plugins/globalRegister';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	data: () => ({ VERSION: '0.1.3' }),
	render: h => h(App),
}).$mount('#app');
