<template lang="pug" functional>
.nn-switch
  input.offscreen(type="checkbox" id="toggle")
  label.switch(for="toggle")
</template>
<style lang="stylus" scoped>
.nn-switch
  display inline
label.switch
  position relative
  display inline-block
  width 40px
  height 20px
  background-color var(--nn-FG-0)
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
input[type="checkbox"]
  &.offscreen
    position absolute
    left -99999px
  &:checked
    & + .switch
      background-color var(--nn-BG-0)
    & + .switch::after
      background-color var(--nn-FG-0)
      transform translateX(20px)
</style>
