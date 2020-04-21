<template lang="pug">
#home
	.box
		h2.title default
		vn-button default
	.box
		h2.title primary / success / danger
		vn-button(type="primary") primary
		vn-button(type="success") success
		vn-button(type="danger") danger
	.box
		h2.title secondary
		vn-button(type="secondary") secondary
	.box
		h2.title disabled
		vn-button(disabled) disabled
	.box
		h2.title text
		vn-button(type="text") text
		vn-button(type="text" disabled) disabled
	.box
		h2.title rounded
		vn-button(rounded) default
		vn-button(type="primary" rounded) primary
		vn-button(type="secondary" rounded) secondary
		vn-button(disabled rounded) disabled
	.box
		h2.title square
		vn-button(square) default
		vn-button(type="primary" square) primary
		vn-button(type="secondary" square) secondary
		vn-button(disabled square) disabled
	.box
		h2.title loading
		vn-button(loading) loading
	.box
		h2.title pressed
		vn-button(pressed) default
		vn-button(type="primary" pressed) primary
		vn-button(type="danger" pressed) danger
		vn-button(type="secondary" pressed) secondary
		vn-button(loading pressed) loading
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
