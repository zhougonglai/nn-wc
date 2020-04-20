<template lang="pug">
#home
	Button(pressed) default
	Button(type="primary") primary
	Button(danger) danger
	Button(type="primary" danger) danger
	Button(type="primary" rounded) rounded
	Button(type="primary" pressed) pressed
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
#home
	button
		margin-left 10px
</style>
