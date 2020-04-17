<template lang="pug">
#component
  header#header
    .draw
      Hamburger.active(:active="active" @click="toggle")
    .spacer
    nav
      ul.sibling-fade
        li
          router-link(:to="{name: 'Home'}") 组件
        li
          router-link(:to="{name: 'About'}") 关于
  aside
    ul.sidebar
      li(v-for="(sidebar, i) in sidebars" :key="i")
        details(:open="sidebar.open")
          summary
            Arrow
            | {{sidebar.group}}
          ul.navs
            li.nav(v-for="(nav, $i) in sidebar.child" :key="`${i}-${$i}`")
              router-link(:to="{name: nav.name}" v-text="nav.label")
  main
    router-view
</template>
<script>
import Arrow from '@/assets/icon/arrow.svg';

export default {
	name: 'Default',
	components: {
		Arrow,
	},
	data() {
		return {
			active: false,
			sidebars: [
				{
					group: '表单',
					open: true,
					child: [
						{
							label: '按钮',
							link: 'Btn',
						},
						{
							label: '表单',
							link: 'Form',
						},
						{
							label: '列表',
							link: 'List',
						},
						{
							label: '滑块',
							link: 'Slider',
						},
						{
							label: '上传',
							link: 'Uploader',
						},
					],
				},
				{
					group: '基础组件',
					open: true,
					child: [
						{
							label: '文章',
							link: 'Article',
						},
						{
							label: '徽章',
							link: 'Badge',
						},
						{
							label: '弹性盒子',
							link: 'Flex',
						},
						{
							label: '页脚',
							link: 'Footer',
						},
						{
							label: '珊窗',
							link: 'Gallery',
						},
						{
							label: '珊格',
							link: 'Grid',
						},
						{
							label: '图标',
							link: 'Icons',
						},
						{
							label: '加载更多',
							link: 'LoadMore',
						},
						{
							label: '面板',
							link: 'Panel',
						},
						{
							label: '预览',
							link: 'Preview',
						},
						{
							label: '进度',
							link: 'Process',
						},
					],
				},
				{
					group: '操作反馈',
					open: true,
					child: [
						{
							label: '弹出式菜单',
							link: 'ActionSheet',
						},
					],
				},
			],
		};
	},
	methods: {
		toggle() {
			return (this.active = !this.active);
		},
	},
};
</script>
<style lang="stylus" scoped>
#component
  min-height 100vh
  padding 0 20px
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
    box-shadow 0 2px 4px rgba(0, 0, 0, 0.5)
    background-color var(--nn-FG-0)
    backdrop-filter blur(5px)
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
            color var(--nn-BG-0)
            padding 0 12px
            &::before
              content ''
              position: absolute
              top 0
              left 0
              right 0
              height 0
              width 100%
              background-color var(--nn-BG-0)
              transition height 0.2s linear
            &.router-link-exact-active::before
              height 4px
  aside
    position fixed
    width 200px
    height 100vh
    display flex
    flex-direction column
    top 0
    padding-top calc(72px + 3.25rem)
    ul.sidebar
      overflow-y auto
      li
        margin 1rem 0
        details
          summary
            cursor pointer
            outline 0
            &::-webkit-details-marker
              display none
          ul.navs
            user-select none
            padding-left 20px
            border-left 1px solid var(--nn-FG-HALF)
            li.nav
              margin 16px 0
  main
    padding-top 72px
    margin-left 250px
</style>
