<template lang="pug">
#home
	.box
		h2.title default
		VnButton default
	.box
		h2.title primary / success / danger
		VnButton(type="primary") primary
		VnButton(type="success") success
		VnButton(type="danger") danger
	.box
		h2.title secondary
		VnButton(type="secondary") secondary
	.box
		h2.title disabled
		VnButton(disabled) disabled
	.box
		h2.title text
		VnButton(type="text") text
		VnButton(type="text" disabled) disabled
	.box
		h2.title rounded
		VnButton(rounded) default
		VnButton(type="primary" rounded) primary
		VnButton(type="secondary" rounded) secondary
		VnButton(disabled rounded) disabled
	.box
		h2.title square
		VnButton(square) default
		VnButton(type="primary" square) primary
		VnButton(type="secondary" square) secondary
		VnButton(disabled square) disabled
	.box
		h2.title loading
		VnButton(loading) loading
	.box
		h2.title pressed
		VnButton(pressed) default
		VnButton(type="primary" pressed) primary
		VnButton(type="danger" pressed) danger
		VnButton(type="secondary" pressed) secondary
		VnButton(loading pressed) loading
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
#home
	display flex
	flex-direction column
	padding-bottom 10vh

	.box
		margin  10px
	button
		margin 10px
</style>
