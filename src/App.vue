<template lang="pug">
#app
	header#header
		.draw
			VnHamburger.active(:active="active" @click="toggle")
		.spacer
		nav
			ul.sibling-fade
				li
					router-link(:to="{name: 'About'}" exact) 关于
				li
					router-link(:to="{name: 'Home'}") 组件
			.spacer.ml-3
			Moon
			VnSwitch.mx-1(v-model="switcher" @change="toggleTheme")
			Sun
		.version(v-text="$root.VERSION")
	keep-alive(v-if="$route.meta.keepAlive")
		router-view
	router-view(v-else)
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
import Sun from '@/assets/icon/sun.svg';
import Moon from '@/assets/icon/moon.svg';

@Component({
	components: {
		Sun,
		Moon,
	},
})
export default class App extends Vue {
	active = false;
	switcher = true;

	toggle() {
		return (this.active = !this.active);
	}

	toggleTheme(val) {
		if (val) {
			document.body.setAttribute('data-nn-theme', 'light');
		} else {
			document.body.setAttribute('data-nn-theme', 'dark');
		}
	}

	created() {
		this.switcher = window.matchMedia('(prefers-color-scheme: light)').matches;
		document.body.setAttribute(
			'data-nn-theme',
			this.switcher ? 'light' : 'dark',
		);
	}
}
</script>
<style lang="stylus" scoped>
#app
	header
		height 72px
		position fixed
		top 0
		left 0
		right 0
		display flex
		align-items center
		justify-content space-between
		z-index 99
		// border-bottom 1px solid var(--nn-FG-2)
		box-shadow 0 2px 4px var(--nn-FG-2)
		backdrop-filter blur(5px)
		.version
			position: absolute;
			top: 0;
			right: 0;
			font-size: xx-small;
			background-color: var(--nn-FG-2);
			padding: 4px 8px;
			border-radius: 0 0 0 8px;
		.draw
			height 100%
			width 72px
			display flex
			align-items center
			justify-content center
			margin-left 24px
		nav
			height 100%
			line-height 72px
			margin-right 24px
			display flex
			align-items center
			justify-content space-between
			ul.sibling-fade
				height inherit
				display flex
				li
					float left
					& + li
						margin-left 10px
					a
						position relative
						display block
						text-align center
						padding 0 12px
						&::before
							content: ''
							position: absolute
							top 0
							left 0
							right 0
							height 0
							width 100%
							background-color var(--nn-FG)
							transition height 0.2s linear
						&.router-link-active::before
							height 4px
</style>
