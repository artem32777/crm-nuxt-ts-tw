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
  <div :class="cn('flex italic text-xs', props.class)">
    <slot />
  </div>
</template>
