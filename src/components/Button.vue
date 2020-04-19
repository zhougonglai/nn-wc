<template lang="pug">
button.nn-btn(
	ref="button"
	:class="[type ? 'nn-btn-' + type : '',{'loading': loading}]"
	@click="btnClick")
	slot
</template>

<script lang="ts">
import { Component, Vue, Ref, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
	@Prop(String) readonly type!: string;
	@Prop(Boolean) readonly loading!: boolean;

	@Ref('button') readonly button!: HTMLButtonElement;

	private animating = false;

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

		if (!this.animating) {
			this.animating = true;
			setTimeout(() => {
				this.animating = false;
			});
		}
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

.nn-btn
	position relative
	outline 0
	line-height 32px
	font-size large
	min-width 120px
	border-radius 4px
	padding-left 8px
	padding-right 8px
	overflow hidden
	text-direction none
	letter-spacing 2px
	cursor pointer
	background-color var(--nn-BG-0)
	color var(--nn-FG-0)
	border 1px solid var(--nn-FG-0)

	&::before
		content ''
		position absolute
		left 0
		right 0
		top 0
		bottom 0
		background-color currentColor
		border-radius: inherit;
		opacity 0

	&:hover, &:active, &:focus
		&::before
			opacity 0.2

	&.disabled, &[disabled]
		cursor not-allowed
		> *
			pointer-events none

	span
		position absolute
		background var(--nn-FG-2)
		transform translate(-50%, -50%)
		pointer-events none
		border-radius 50%
		animation animate 1s linear infinite



.nn-btn-primary
	background-color var(--nn-primary)
	color var(--nn-BG)
	border none
	&:hover, &:active, &:focus
		background-color var(--nn-primary-5)
	span
		background var(--nn-FG-2)

.nn-btn-success
	background-color var(--nn-GREEN)
	color var(--nn-BG)
	border none
	span
		background var(--nn-FG-2)

.nn-btn-info
	background-color var(--nn-BLUE)
	color var(--nn-BG)
	border none
	span
		background var(--nn-FG-2)

.nn-btn-warning
	background-color var(--nn-ORANGE)
	color var(--nn-BG)
	border none
	span
		background var(--nn-FG-2)

.nn-btn-danger
	background-color var(--nn-RED)
	color var(--nn-BG)
	border none
	span
		background var(--nn-FG-2)
</style>
