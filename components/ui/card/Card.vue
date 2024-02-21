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
  <article
    :class="
			cn(
				'rounded-lg bg-card text-card-foreground animation border border-transparent transition-colors hover:border-[#a252c83d]',
				props.class
			)
    "
  >
    <slot />
  </article>
</template>

<style scoped>
@keyframes show {
  from {
    @apply border-[#a252c83d];
    transform: translateY(20px);
    opacity: 0.4;
  }

  90% {
    @apply border-[#a252c83d];
  }

  to {
    @apply border-transparent;
    transform: translateY(0);
    opacity: 1;
  }
}

.animation {
  animation: show 0.5s ease-in-out;
}
</style>