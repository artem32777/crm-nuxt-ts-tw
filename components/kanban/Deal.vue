<script setup lang="ts">
import { convertCurrency } from '~/utils/covertCurrency'
import type { ICard } from '~/components/kanban/kanban.types'
import dayjs from 'dayjs'

const props = defineProps<{
  card: ICard
}>()

</script>

<template>
  <UiCard
    class="mb-3 flex flex-col gap-5 p-6"
    draggable="true">
    <UiCardHeader
      class="text-xl"
      role="button"
      >{{ card.name }}</UiCardHeader
    >
    <UiCardDescription>
      {{ convertCurrency(card.price) }}
    </UiCardDescription>
    <UiCardContent v-if='card["companyName"]'>
      {{ card['companyName'] }}
    </UiCardContent>
    <UiCardFooter>
      {{ dayjs(card['$createdAt']).format('DD MMM YYYY') }}
    </UiCardFooter>
  </UiCard>
</template>

<style scoped></style>
