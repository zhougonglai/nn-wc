import * as vnComponents from '@/components/index';

const install = (Vue: any) => {
	Object.values(vnComponents).forEach(vnComponent => {
		Vue.use(vnComponent);
	});
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default install;
