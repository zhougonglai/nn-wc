<template lang="pug">
button.nn-btn(ref="button" @click="btnClick")
	slot
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
	@Ref('button') readonly button!: HTMLButtonElement;

	btnClick(e: PointerEvent) {
		const x = e.clientX - (e.target as HTMLButtonElement).offsetLeft;
		const y = e.clientY - (e.target as HTMLButtonElement).offsetTop;
		const ripples = document.createElement('span');
		ripples.style.left = x + 'px';
		ripples.style.top = y + 'px';
		this.button.appendChild(ripples);
		setTimeout(() => {
			ripples.remove();
		}, 1000);
	}
}
</script>
<style lang="stylus">
@keyframes animate
	from
		width 0
		height 0
		opacity 1
	to
		width 500px
		height 500px
		opacity 0

button.nn-btn
	position relative
	background-color transparent
	outline 0
	border none
	color var(--nn-FG-0)
	line-height 40px
	font-size large
	min-width 200px
	padding-left 20px
	padding-right 20px
	border-radius 20px
	overflow hidden
	text-direction none
	letter-spacing 2px
	cursor pointer
	&:hover
		background-color var(--nn-FG-3)
	span
		position absolute
		background var(--nn-FG-2)
		transform translate(-50%, -50%)
		pointer-events none
		border-radius 50%
		animation animate 1s linear infinite
</style>
