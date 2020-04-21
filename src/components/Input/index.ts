import Input from './vnInput.vue';
import { PluginObject } from 'vue/types/umd';
import { Component } from 'vue';

export default {
	install: function(Vue) {
		Vue.component(Input.name, Input);
	},
} as PluginObject<Component>;
