<template lang="pug">
button.nn-btn
	slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
	@Prop() private msg!: string;
}
</script>
