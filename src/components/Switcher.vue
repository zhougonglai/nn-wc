<template lang="pug">
label.switch(
  role="checkbox"
  :class="[size ? ('switch--' + size) : '',{checked: value },{disabled}]"
  :aria-checked="value"
  :aria-disabled="disabled")
  input(type="checkbox"
    :defaultChecked="defaultChecked"
    :disabled="disabled"
    :value="model"
    v-model="model"
    @change="handleChange")
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Switcher extends Vue {
	@Prop({ type: Boolean })
	readonly defaultChecked = false;

	@Prop({ type: Boolean })
	readonly value!: boolean;

	@Prop({ type: Boolean })
	readonly indeterminate = false;

	@Prop({ type: Boolean })
	readonly disabled = false;

	@Prop({ type: String })
	readonly size!: string;

	get model() {
		return this.value;
	}

	set model(val) {
		this.$emit('input', val);
	}

	@Emit('change')
	handleChange(e: Event): boolean {
		return (e.target as HTMLInputElement).checked;
	}
}
</script>
<style lang="stylus" scoped>
label.switch
  position relative
  display inline-block
  width 40px
  height 20px
  background-color var(--nn-FG-1)
  border-radius 20px
  transition all .2s
  &::after
    content ''
    position absolute
    width 18px
    height 18px
    border-radius 18px
    background-color white
    top 1px
    left 1px
    transition all .3s
  &.checked
    &::after
      background-color var(--nn-FG-0)
      transform translateX(20px)

input[type="checkbox"]
  display none
</style>
