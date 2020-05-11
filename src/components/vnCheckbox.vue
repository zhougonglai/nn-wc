<template lang="pug">
.nn-checkbox
  input(
    class="nn-checkbox--input"
    type="checkbox"
    v-bind="$attrs"
    :checked="value || $attrs.checked"
    v-on:change="toggleValue")
  span.nn-checkbox--content
    span.nn-checkbox--check
      i.bx.bx-check.nn-checkbox--icon
  span.nn-checkbox--label
    slot
</template>
<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import VnComponent from '@/mixin/VnComponent';

@Component
export default class VnCheckBox extends VnComponent {
	@Prop(Boolean) readonly value: boolean = false;

	toggleValue(e: InputEvent) {
		this.$emit('input', !this.value);
		this.$emit('change', e);
	}
}
</script>
<style lang="stylus" scoped>

.nn-checkbox
  position: relative
  display: block
  display: inline-flex
  align-items: center
  justify-content: center
  margin-left: 5px
  margin-right: 5px
  &--input
    position: absolute
    width: 100%
    height: 100%
    opacity: 0
    z-index: 200
    cursor: pointer
    background: rgb(85, 215, 117)
    &:active:checked
      & + .nn-checkbox--content
        .nn-checkbox--check
          transform: translate(3px)
        .nn-checkbox--icon
          transform: translate(6px)
    &:checked
      & + .nn-checkbox--content
        transform rotate(0deg)
        border-color var(--nn-primary)
        .nn-checkbox--check
          transform: translate(0%);
          background-color var(--nn-primary)
        .nn-checkbox--icon
          opacity: 1;
          transform: translate(0);
          color: rgb(255, 255, 255);
          display: flex;
          align-items: center;
          justify-content: center;
          color var(--nn-BG-0)
  &--content
    transition: all 0.2s ease;
    cursor: pointer;
    position: relative;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(-90deg);
    overflow: hidden;
    box-sizing: border-box;
    border: 2px solid rgb(180, 180, 180);
    margin-right: 5px;
  &--check
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    transform: translate(100%);
    transform-origin: right;
    transition: all 0.2s ease;
    z-index: 10;
  &--icon
    backface-visibility: visible;
    transition: all 0.2s ease-out;
    z-index: 100;
    font-size: 1.125em;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translate(30px);
    transform-origin: center;
</style>
