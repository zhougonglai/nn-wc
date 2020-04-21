import Button from './vnButton.vue';
import { PluginObject } from 'vue/types/umd';
import { Component } from 'vue';

export default {
	install: function(Vue) {
		console.log(Button.name);
		Vue.component(Button.name, Button);
	},
} as PluginObject<Component>;
