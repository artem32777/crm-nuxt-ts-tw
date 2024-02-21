<script setup lang="ts">
import type { IDeal } from '~/types/deals.types'

const props = defineProps<{
  deal: IDeal
}>()

</script>

<template>
  <div class="my-4 border-t">
    <div v-if="!deal.comments.length">Комментариев пока нету</div>
    <UiAccordion
      v-else
      type="1">
      <UiAccordionItem value="1">
        <UiAccordionTrigger>Комментарии ({{ deal.comments.length }})</UiAccordionTrigger>
        <UiAccordionContent>
          <ol>
            <li v-for="(comment, index) in deal.comments">
              {{ comment.text }}
            </li>
          </ol>
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  </div>
</template>

<style scoped>
ol {
  counter-reset: item;
  li {
    &::before {
      font-size: 25px;
      content: counter(item, ' sds.');
      counter-increment: item;
    }
  }
}
</style>
