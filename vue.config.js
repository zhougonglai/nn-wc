/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/camelcase */
const SizePlugin = require('size-plugin');

const isDev = () => process.env.NODE_ENV !== 'production';

const plugins = [];

if (!isDev()) {
	const bundlesize = new SizePlugin();
	plugins.push(bundlesize);
}

module.exports = {
	devServer: {},

	configureWebpack: {
		output: {
			libraryExport: 'default',
		},
		plugins,
	},

	css: { extract: !isDev() },

	chainWebpack: config => {
		const svgRule = config.module.rule('svg');

		svgRule.uses.clear();

		svgRule
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader');
	},

	pwa: {
		name: 'nn-ui',
		themeColor: '#fadb14',
		msTileColor: '#FFFFFF',
		manifestOptions: {
			name: '@zhougonglai/nn-ui',
			short_name: 'nn-ui',
			background_color: '#FFFFFF',
		},
	},
};
