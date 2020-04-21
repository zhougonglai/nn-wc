<template lang="pug">
#home
	.box
		h2.title default
		Button default
	.box
		h2.title primary / success / danger
		Button(type="primary") primary
		Button(type="success") success
		Button(type="danger") danger
	.box
		h2.title secondary
		Button(type="secondary") secondary
	.box
		h2.title disabled
		Button(disabled) disabled
	.box
		h2.title text
		Button(type="text") text
		Button(type="text" disabled) disabled
	.box
		h2.title rounded
		Button(rounded) default
		Button(type="primary" rounded) primary
		Button(type="secondary" rounded) secondary
		Button(disabled rounded) disabled
	.box
		h2.title loading
		Button(loading) loading
	.box
		h2.title pressed
		Button(pressed) default
		Button(type="primary" pressed) primary
		Button(type="danger" pressed) danger
		Button(type="secondary" pressed) secondary
		Button(loading pressed) loading
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
