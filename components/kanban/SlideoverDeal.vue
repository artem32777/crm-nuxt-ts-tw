<script setup lang="ts">
import { convertCurrency } from '~/utils/covertCurrency'
import dayjs from 'dayjs'
import type { IDeal } from '~/types/deals.types'

const props = defineProps<{
  deal: IDeal
  kanbanRefetch: () => void
}>()
</script>

<template>
  <UiCard
    class="p-5 my-5">
    <dl class='grid divide-y'>
      <UiCardHeader class="text-xl">
        <dt>Название</dt>
        <dd class="text-sm font-normal">{{ deal.name }}</dd>
      </UiCardHeader>
      <UiCardContent class='py-2'>
        <dt>Сумма</dt>
        <dd class="text-sm font-normal">{{ convertCurrency(deal.price) }}</dd>
      </UiCardContent>
      <UiCardContent class='py-2'>
        <dt>Статус</dt>
        <dd class="text-sm font-normal">{{ deal.status }}</dd>
      </UiCardContent>
      <UiCardContent class='py-2'>
        <dt>Клиент</dt>
        <dd class="text-sm font-normal">{{ deal.customers.name }}</dd>
      </UiCardContent>
      <UiCardContent class='py-2'>
        <dt>Дата создания</dt>
        <dd class="text-sm font-normal">{{ dayjs(deal['$createdAt']).format('DD MMM YYYY') }}</dd>
      </UiCardContent>
    </dl>
  </UiCard>
</template>

<style scoped>

</style>
