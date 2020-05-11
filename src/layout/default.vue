<template lang="pug">
#component
  aside(:class="[{collapse: draw}]")
    ul.sidebar
      li.sidenav(v-for="(sidebar, i) in sidebars" :key="i")
        details.group(:open="sidebar.open")
          summary.group-title
            Arrow(:class="sidebar.open")
            small.group-label {{sidebar.group}}
          ul.navs
            li.nav(v-for="(nav, $i) in sidebar.child" :key="`${i}-${$i}`")
              router-link(:to="{name: nav.link}" v-text="nav.label")
  main
    router-view
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import Arrow from '@/assets/icon/arrow.svg';

@Component({
	components: {
		Arrow,
	},
})
export default class Default extends Vue {
	sidebars = [
		{
			group: '表单',
			open: true,
			child: [
				{
					label: 'Button',
					link: 'Home',
				},
				{
					label: 'Alert',
					link: 'Alert',
				},
				{
					label: 'Checkbox',
					link: 'Checkbox',
				},
				{
					label: 'Dialog',
					link: 'Dialog',
				},
			],
		},
	];

	draw = true;
}
</script>
<style lang="stylus" scoped>
#component
	min-height 100vh
	padding 0 20px
	@media (max-width: 980px)
		padding 10px
	aside
		position fixed
		width 200px
		height 100vh
		display flex
		flex-direction column
		top 0
		transform translateX(0)
		padding-top calc(72px + 3.25rem)
		transition transform .2s linear
		@media (max-width: 980px)
			transform translateX(-220px)
		ul.sidebar
			overflow-y auto
			li.sidenav
				margin 1rem 0
				details
					&[open]
						svg
							transform rotate(90deg)
					summary
						cursor pointer
						outline 0
						&::-webkit-details-marker
							display none
						svg
							margin-right: 10px
							transition transform 0.2s linear
							transform rotate(0deg)
						small
							font-size 14px
							font-weight 400
							line-height 1.5
					ul.navs
						user-select none
						padding 10px 0 10px 10px
						margin-left 7px
						border-left 1px solid var(--nn-FG-HALF)
						li.nav
							a
								width 100%
								line-height 38px
								&.router-link-exact-active
									color var(--nn-FG)
									font-size large
									font-weight bold
	main
		padding-top calc(72px + 3.25rem)
		margin-left 250px
		transition margin .2s linear
		@media (max-width: 980px)
			margin-left 0
</style>
