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
  <div :class="cn('flex text-2xl font-bold flex-col space-y-1.5', props.class)">
    <slot />
  </div>
</template>
