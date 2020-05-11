<template lang="pug">
.nn-alert
  header.nn-alert-header
    slot(name="title")
  slot
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator';
import VnComponent from '@/mixin/VnComponent';

@Component
export default class VnAlert extends VnComponent {}
</script>
<style lang="stylus" scoped>
.nn-alert
  width 100%
  border-radius 0 10px 10px 0
  background var(--nn-primary-3)
  color black
  border-left 4px solid var(--nn-primary)
  padding 10px 16px
  box-shadow 0 4px 15px 0 rgba(#fadb14,.12)
  &-header
    font-size larger
</style>
