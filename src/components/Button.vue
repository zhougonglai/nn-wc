<template lang="pug">
button.nn-btn(
	ref="button"
	:class=`[
		type ? 'nn-btn-' + type : '',
		{
			'loading': loading,
			'rounded': rounded,
			'pressed': pressed
		}
	]`
	:disabled="disabled"
	@click="btnClick")
	slot(v-if="!loading")
	span.loading(v-else)
		span
		span
		span
</template>

<script lang="ts">
import { Component, Vue, Ref, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
	@Prop(String) readonly type!: string;
	@Prop(Boolean) readonly danger!: boolean;
	@Prop(Boolean) readonly rounded!: boolean;
	@Prop(Boolean) readonly pressed!: boolean;
	@Prop(Boolean) readonly loading!: boolean;
	@Prop(Boolean) readonly disabled!: boolean;

	@Ref('button') readonly button!: HTMLButtonElement;

	private animating = false;

	btnClick(e: PointerEvent) {
		const ripples = document.createElement('span');
		ripples.style.left = e.offsetX + 'px';
		ripples.style.top = e.offsetY + 'px';
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
	line-height 40px
	font-size large
	min-width 200px
	border-radius 4px
	padding-left 20px
	padding-right 20px
	overflow hidden
	text-direction none
	letter-spacing 2px
	cursor pointer
	background-color var(--nn-FG-0)
	color var(--nn-BG-0)
	border 1px solid var(--nn-BG-0)
	transition all .2s linear
	will-change background-color, border, color
	&:hover, &:active, &:focus
		background-color var(--nn-BG-0)
		color var(--nn-FG-0)
		border-color var(--nn-FG-0)

	&.disabled, &[disabled]
		cursor not-allowed
		background-color var(--nn-FG-2)
		color var(--nn-BG-0)
		border none
		&:hover, &:active, &:focus
			background-color var(--nn-FG-2)
			color var(--nn-BG-0)
		> *
			pointer-events none

	&.rounded
		border-radius 20px

	&.pressed
		box-shadow 0 2px 4px var(--nn-FG-2)
		&:hover
			box-shadow 0 4px 12px var(--nn-FG-2)

	span
		position absolute
		background var(--nn-FG-2)
		transform translate(-50%, -50%)
		pointer-events none
		border-radius 50%
		animation animate 1s linear infinite

.nn-btn-secondary
	background-color var(--nn-BG-0)
	border-color var(--nn-FG-2)
	color var(--nn-FG-0)
	&:hover, &:active, &:focus
		border-color var(--nn-FG-0)
		color var(--nn-FG)

.nn-btn-text
	background-color var(--nn-BG-0)
	border-color transparent
	color var(--nn-FG-HALF)
	&:not([disabled]):hover, &:not([disabled]):active, &:not([disabled]):focus
		color var(--nn-FG-0)
		border-color transparent
	&[disabled]
		background-color transparent
		color var(--nn-FG-2)
		&:hover
			color var(--nn-FG-2)
			background-color transparent

.nn-btn-danger
	border-color var(--nn-RED)
	background-color var(--nn-RED)
	&:hover, &:active, &:focus
		border-color var(--nn-RED)
		background-color var(--nn-BG-0)
		color var(--nn-RED)

.nn-btn-success
	border-color var(--nn-BLUE)
	background-color var(--nn-BLUE)
	&:hover, &:active, &:focus
		border 1px solid var(--nn-BLUE)
		background-color var(--nn-BG-0)
		color var(--nn-BLUE)

.nn-btn-primary
	background-color var(--nn-primary)
	color var(--nn-BG)
	&:hover, &:active, &:focus
		background-color var(--nn-BG-0)
		color var(--nn-primary)
		border-color var(--nn-primary)
	&.pressed
		box-shadow 0 2px 4px var(--nn-primary)
		&:hover
			box-shadow 0 4px 12px var(--nn-primary)
	span
		background var(--nn-FG-2)
</style>
