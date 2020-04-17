module.exports = {
	devServer: {
		port: 3333,
	},
	configureWebpack: {
		output: {
			libraryExport: 'default',
		},
	},
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
};
