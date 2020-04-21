import Switch from './vnSwitch.vue';
import { PluginObject } from 'vue/types/umd';

export default {
	install: function(Vue) {
		Vue.component(Switch.name, Switch);
	},
} as PluginObject<Switch>;
