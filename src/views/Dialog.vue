<template lang="pug">
.dialog
  h4 dialog
  VnButton(@click="toggleDialog") dialog
  VnDialog(:open.sync="open")
    template(v-slot:header) header
    | dialog body
    template(v-slot:footer) footer
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dialog extends Vue {
	open = false;

	toggleDialog() {
		this.open = !this.open;
	}
}
</script>
