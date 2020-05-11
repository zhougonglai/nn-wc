<template lang="pug">
.nn-dialog
  dialog.nn-dialog-content(ref="dialog" :open="open")
    VnButton.nn-dialog-close(icon @click="close")
      i.bx.bx-x
    header.nn-dialog-header
      slot(name="header")
    section.nn-dialog-body
      slot
    footer.nn-dialog-footer
      slot(name="footer")
  .backdrop(v-if="!backdrop && open" @click="close")
</template>
<script lang="ts">
import { Component, Ref, Prop, Emit } from 'vue-property-decorator';
import VnButton from './vnButton.vue';
import VnComponent from '@/mixin/VnComponent';

@Component({
	components: {
		[VnButton.name]: VnButton,
	},
})
export default class VnDialog extends VnComponent {
	@Ref('dialog') readonly dialog!: HTMLDialogElement;

	@Prop(Boolean) readonly backdrop!: boolean;
	@Prop(Boolean) readonly open!: boolean;

	@Emit('update:open')
	close() {
		return false;
	}
}
</script>
<style lang="stylus" scoped>
.nn-dialog
  .nn-dialog-content
    bottom: 0;
    top: 0;
    position: absolute;
    left: 0;
    right: 0;
    width: fit-content;
    height: fit-content;
    margin: auto;
    border: solid;
    padding: 1em;
    display: flex;
    flex-direction column
    z-index: 99;
    padding: 0;
    border: 0;
    min-width: 35vw;
    min-height: 37vh;
    border-radius: 12px;
    box-shadow 0 4px 15px 0 rgba(0,0,0,.12)
    background-color var(--nn-BG-0)
    color var(--nn-FG-0)
    transition all 2s linear
    &.fixed
      position fixed;
      top 50%
      transform translate(0, -50%)
    &[open]
      animation scale 0.2s linear
    &:not([open])
      display none
  &-close
    position absolute
    top -6px
    right -6px
    box-shadow 0 4px 15px 0 rgba(0,0,0,.12)
    transition: all 0.2s linear;
    background-color: var(--nn-BG-0)
    color: var(--nn-FG-0)
    &:hover
      box-shadow 0 3px 8px 0 rgba(0,0,0,.25)
      transform: translate(-2px, 2px);
  &-header
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
  &-body
    width: 100%;
    flex: 1;
  &-footer
    width: 100%;
    height: 55px;
  .backdrop
    background: rgba(0,0,0,.1);
    backdrop-filter: blur(5px);
    z-index 10
    position: fixed
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
</style>
