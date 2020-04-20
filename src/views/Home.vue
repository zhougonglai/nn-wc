<template lang="pug">
#home
	.box
		h2.title default
		Button default
	.box
		h2.title primary
		Button(type="primary") primary
	.box
		h2.title danger
		Button(type="danger") danger
	.box
		h2.title secondary
		Button(type="secondary") secondary
	.box
		h2.title text
		Button(type="text") text
	.box
		h2.title rounded
		Button(type="primary" rounded) rounded
		Button(type="primary" rounded danger) rounded
		Button(rounded danger) rounded
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
