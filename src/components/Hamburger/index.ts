import Hamburger from './vnHamburger.vue';
import { PluginObject } from 'vue/types/umd';
import { Component } from 'vue';

export default {
	install: function(Vue) {
		Vue.component(Hamburger.name, Hamburger);
	},
} as PluginObject<Component>;
