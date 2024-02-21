<script setup lang="ts">
import { cn } from '@/libs/utils'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div :class="cn('pt-0 font-bold', props.class)">
    <slot />
  </div>
</template>
