<template lang="pug">
button.nn-btn(
	ref="button"
	:class=`[
		type ? 'nn-btn-' + type : '',
		{
			'loading': loading,
			'rounded': rounded,
			'square': square,
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
import { Component, Ref, Prop } from 'vue-property-decorator';
import VnComponent from '@/mixin/VnComponent';

@Component
export default class VnButton extends VnComponent {
	@Prop(String) readonly type!: string;
	@Prop(Boolean) readonly danger!: boolean;
	@Prop(Boolean) readonly rounded!: boolean;
	@Prop(Boolean) readonly square!: boolean;
	@Prop(Boolean) readonly pressed!: boolean;
	@Prop(Boolean) readonly loading!: boolean;
	@Prop(Boolean) readonly disabled!: boolean;

	@Ref('button') readonly button!: HTMLButtonElement;

	btnClick(e: PointerEvent) {
		const ripples = document.createElement('span');
		ripples.style.left = e.offsetX + 'px';
		ripples.style.top = e.offsetY + 'px';
		ripples.classList.add('wave');
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

@keyframes blink
	0%
		opacity 0.2
	20%
		opacity 1
	100%
		opacity 0.2

.nn-btn
	position relative
	outline 0
	height 40px
	font-size 0.875rem
	line-height 38px
	font-size large
	min-width 200px
	border-radius 4px
	padding 0 25px
	overflow hidden
	text-direction none
	letter-spacing 2px
	cursor pointer
	-webkit-tap-highlight-color: transparent;
	background-color var(--nn-FG-0)
	color var(--nn-BG-0)
	border 1px solid var(--nn-FG-0)
	transition all .2s linear
	box-sizing border-box
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

	&.square
		border-radius 0


	&.pressed
		box-shadow 0 1px 3px 2px var(--nn-FG-2)
		border-color var(--nn-FG-0)
		&:hover
			box-shadow 0 2px 4px 3px var(--nn-FG-2)
			transform: translate3d(0px, -1px, 0px);

	&.loading
		background-color var(--nn-BG-0)
		border-color var(--nn-FG-0)
		display flex
		justify-content center
		pointer-events none
		filter grayscale(1)
		span.loading
			display: inline-flex;
			align-items: center;
			height: auto;
			span
				width 4px
				height 4px
				border-radius 2px
				background-color #999
				margin 0 1px
				animation blink 1.4s infinite both
				&:nth-of-type(2)
					animation-delay 0.2s
				&:nth-of-type(3)
					animation-delay 0.4s

	span.wave
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
	box-shadow none
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
	&.pressed
		border-color var(--nn-RED)
		&:hover
			transform: translate3d(0px, -1px, 0px);

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
	border-color var(--nn-primary)
	&:hover, &:active, &:focus
		background-color var(--nn-BG-0)
		color var(--nn-primary)
		border-color var(--nn-primary)
	&.pressed
		border-color var(--nn-primary)
		&:hover
			transform: translate3d(0px, -1px, 0px);
</style>
