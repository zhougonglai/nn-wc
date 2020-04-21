import Vue from 'vue';
import { vnButton, vnHamburger, vnInput, vnSwitch } from '@/components';
// import { upperFirst } from 'lodash';

// const requireComponent = require.context(
// 	'@/components',
// 	false,
// 	/[A-Z]\w+\.(vue|js)$/,
// );

// requireComponent.keys().forEach(fileName => {
// 	const componentConfig = requireComponent(fileName);

// 	const componentName = upperFirst(
// 		fileName
// 			.split('/')
// 			.pop()
// 			.replace(/\.\w+$/, ''),
// 	);

// 	Vue.component(componentName, componentConfig.default || componentConfig);
// });

Vue.use(vnButton);
Vue.use(vnHamburger);
Vue.use(vnInput);
Vue.use(vnSwitch);
