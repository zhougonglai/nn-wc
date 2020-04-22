import Vue from 'vue';
import { camelCase, upperFirst } from 'lodash';

const requireComponent = require.context(
	// 其组件目录的相对路径
	'@/components',
	// 是否查询其子目录
	false,
	// 匹配基础组件文件名的正则表达式
	/vn[A-Z]\w+\.(vue|js)$/,
);

requireComponent.keys().forEach(fileName => {
	const component = requireComponent(fileName);

	const componentName = upperFirst(
		camelCase(
			fileName
				.split('/')
				.pop()
				?.replace(/\.\w+$/, ''),
		),
	);

	console.log(componentName);
	Vue.component(componentName, component.default || component);
});
