<template lang="pug">
article#about
	p
		| 本项目用于NN相关项目基本组件.
		| 设计参考Google Material Design.
		| 微软 Metro.
		| Apple Human Design.
		| Alibaba Ant Desgin.
		| Next Zeit Design...
	p
		| 结合种组件设计的亮点 --- 混种
	p
		| 业务程序员初次开源
		| 易用性不强.
		span.text-danger 不建议使用
</template>
<style lang="stylus" scoped>
#about
	padding 10px
	p
		&:first-child::first-letter
			color: #5f79ff;
			float: left;
			margin: 0 8px 0 4px;
			font-size: 3rem;
			font-weight: bold;
			line-height: 1;
		.text-danger
			color var(--nn-RED)
</style>
