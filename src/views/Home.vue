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
		h2.title pressed
		Button(type="primary" pressed) pressed
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

	.box
		margin  10px
	button
		margin 10px
</style>
