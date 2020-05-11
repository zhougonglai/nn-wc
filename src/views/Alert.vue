<template lang="pug">
#Alert
  h4 alert
  .box
    VnAlert
      template(#title) Vuesax Framework
      p Vuesax (pronounced / vjusacksː /, as view sacks) is a UI components framework created with Vuejs to make projects easily and with a Unique and pleasant style, Vuesax is created from scratch and designed for all types of developed from the frontend lover to the backend that wants to easily create your visual approach to the end user
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Alert extends Vue {}
</script>
<style lang="stylus" scoped>
#Alert
  display flex
  flex-direction column
  .box
    width 25vw
</style>
