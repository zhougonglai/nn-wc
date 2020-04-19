<template lang="pug">
#home
	Button default
	Button(type="primary") primary
	Button(type="success") success
	Button(type="info") info
	Button(type="warning") warning
	Button(type="danger") danger
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
