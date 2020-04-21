import Button from './vnButton.vue';
import { PluginObject } from 'vue/types/umd';

export default {
	install: function(Vue) {
		Vue.component(Button.name, Button);
	},
} as PluginObject<Button>;
