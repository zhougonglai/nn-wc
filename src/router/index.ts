import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Default from '@/layout/default.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		meta: {
			keepAlive: true,
		},
		component: Default,
		children: [
			{
				path: '',
				name: 'Home',
				component: Home,
			},
		],
	},
	{
		path: '/about',
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
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
