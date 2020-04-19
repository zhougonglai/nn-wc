<template lang="pug" functional>
.hamburger-menu(v-on="listeners" v-bind="data.attrs" :class="props.active")
  .bar.top
  .bar.middle
  .bar.bottom
</template>
<script>
export default {
	name: 'Hamburger',
};
</script>
<style lang="stylus" scoped>
.hamburger-menu
  display: flex
  flex-direction: column
  flex-wrap: wrap
  justify-content: space-between
  width: 32px
  cursor: pointer
  .bar
    height 2px
    background var(--nn-FG)
    border-radius: 2px
    margin: 4.6px 0px
    transform-origin: left
    transition: all 0.5s
  &[active]
    .top
      transform: rotate(45deg)
    .middle
      opacity: 0
    .bottom
      transform: rotate(-45deg)
</style>
