import Vue from 'vue';
import { upperFirst } from 'lodash';

const requireComponent = require.context(
	'@/components',
	false,
	/[A-Z]\w+\.(vue|js)$/,
);

requireComponent.keys().forEach(fileName => {
	const componentConfig = requireComponent(fileName);

	const componentName = upperFirst(
		fileName
			.split('/')
			.pop()
			.replace(/\.\w+$/, ''),
	);

	Vue.component(componentName, componentConfig.default || componentConfig);
});
