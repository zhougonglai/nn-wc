<template lang="pug">
#app
	header#header
		.draw
			VnHamburger.active(:active="active" @click="toggle")
			Logo.logo
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
import Logo from '@/assets/icon/logo.svg';

@Component({
	components: {
		Sun,
		Moon,
		Logo,
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

	VN = {
		media: {
			XS: window.matchMedia('(max-width: 600px)').matches,
			SM: window.matchMedia('(min-width: 601px) and (max-width: 960px)')
				.matches,
			MD: window.matchMedia('(min-width: 961px) and (max-width: 1264px)')
				.matches,
			LG: window.matchMedia('(min-width: 1265px) and (max-width: 1904px)')
				.matches,
			XL: window.matchMedia('(min-width: 1905px)').matches,
		},
		theme: 'system',
		darkMode: window.matchMedia('(prefers-color-scheme: light)'),
	};

	createMediaMatch(query) {
		return window.matchMedia(query).matches;
	}

	created() {
		const XS = window.matchMedia('(max-width: 599px)');
		this.VN.media.XS = XS.matches;
		XS.onchange = ({ matches }) => {
			this.VN.media.XS = matches;
		};
		const SM = window.matchMedia('(min-width: 601px) and (max-width: 960px)');
		this.VN.media.SM = SM.matches;
		SM.onchange = ({ matches }) => {
			this.VN.media.SM = matches;
		};
		const MD = window.matchMedia('(min-width: 961px) and (max-width: 1264px)');
		this.VN.media.MD = MD.matches;
		MD.onchange = ({ matches }) => {
			this.VN.media.MD = matches;
		};
		const LG = window.matchMedia('(min-width: 1265px) and (max-width: 1904px)');
		this.VN.media.LG = LG.matches;
		LG.onchange = ({ matches }) => {
			this.VN.media.LG = matches;
		};
		const XL = window.matchMedia('(min-width: 1905px)');
		this.VN.media.XL = XL.matches;
		XL.onchange = ({ matches }) => {
			this.VN.media.XL = matches;
		};
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
			.logo
				width 32px
				height 32px
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
