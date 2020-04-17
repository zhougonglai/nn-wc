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
  height: 2.5rem
  width: 2.5rem
  cursor: pointer
  .bar
    height 5px
    background var(--nn-FG-0)
    border-radius: 5px
    margin: 3px 0px
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
