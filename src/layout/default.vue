<template lang="pug">
#component
  aside
    ul.sidebar
      li(v-for="(sidebar, i) in sidebars" :key="i")
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
					label: '按钮',
					link: 'Home',
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
	];
}
</script>
<style lang="stylus" scoped>
#component
  min-height 100vh
  padding 0 20px
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
            padding-left 10px
            margin-left 7px
            border-left 1px solid var(--nn-FG-HALF)
            li.nav
              margin 16px 0
  main
    padding-top calc(72px + 3.25rem)
    margin-left 250px
</style>
