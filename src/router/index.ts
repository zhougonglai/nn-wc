import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		meta: {
			keepAlive: true,
		},
		component: () =>
			import(/* webpackChunkName: "layout.about" */ '@/layout/about.vue'),
		children: [
			{
				path: '',
				name: 'About',
				component: () =>
					import(/* webpackChunkName: "page.about" */ '@/views/About.vue'),
			},
		],
	},
	{
		path: '/components',
		meta: {
			keepAlive: true,
		},
		component: () =>
			import(/* webpackChunkName: "layout.default" */ '@/layout/default.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () =>
					import(/* webpackChunkName: 'page.Home' */ '@/views/Home.vue'),
			},
			{
				path: 'alert',
				name: 'Alert',
				component: () =>
					import(/* webpackChunkName: 'page.Alert' */ '@/views/Alert.vue'),
			},
			{
				path: 'checkbox',
				name: 'Checkbox',
				component: () =>
					import(
						/* webpackChunkName: 'page.Checkbox' */ '@/views/Checkbox.vue'
					),
			},
			{
				path: 'dialog',
				name: 'Dialog',
				component: () =>
					import(/* webpackChunkName: 'page.Dialog' */ '@/views/Dialog.vue'),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
