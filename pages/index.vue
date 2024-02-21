<script setup lang="ts">
import type { ICard, IColumn } from '~/components/kanban/kanban.types'
import { useKanbanQuery } from '~/components/kanban/useKanbanQuery'
import { useMutation } from '@tanstack/vue-query'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants'
import type { EnumColumnStatus } from '~/types/deals.types'
import { generateColumnColor } from '~/components/kanban/generateColumnColor'
import { useSlideOverStore } from '~/stores/slideover.store'

useSeoMeta({
  title: 'Home',
})

const slideOver = useSlideOverStore()

const { data, isLoading, refetch } = useKanbanQuery()

type TypeMutationVariables = {
  dealID: string
  status: EnumColumnStatus
}

const { mutate, isPending } = useMutation({
  mutationKey: ['change deal status'],
  mutationFn: ({ dealID, status }: TypeMutationVariables) =>
    DB.updateDocument(DB_ID, COLLECTION_DEALS, dealID, {
      status,
    }),
  onSuccess(data) {
    refetch()
  },
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)
function handleDragStart(card: ICard, column: IColumn) {
  dragCardRef.value = card
  sourceColumnRef.value = column
}
function handleDragOver(e: DragEvent) {
  e.preventDefault()
}
function handleDrop(targetColumn: IColumn) {
  if (dragCardRef.value && sourceColumnRef.value) {
    mutate({ dealID: dragCardRef.value.id, status: targetColumn.id })
  }
}
function cardClick(card: ICard) {
  slideOver.open()
  slideOver.setCardId(card)
}
</script>

<template>
  <div class="p-10">
    <h1 class="mb-10 text-2xl font-bold">CRM SYSTEM</h1>
    <div v-if="isLoading">Loading...</div>
    <ul
      v-else
      class="flex h-full flex-wrap justify-between gap-5">
      <li
        @dragover="handleDragOver"
        @drop="() => handleDrop(column)"
        v-for="(column, index) in data"
        :key="column.id"
        class="w-[300px] flex-grow">
        <h2
          :style="generateColumnColor(index as number, data?.length)"
          class="mb-2 rounded bg-slate-700 px-5 py-1 text-center">
          {{ column.name }}
        </h2>
        <KanbanCreateDeal
          :status="column.id"
          :refetch="refetch" />

        <KanbanDeal
          @click="cardClick(card)"
          v-for="card in column.items"
          :key="card.id"
          :card="card"
          @dragstart="() => handleDragStart(card, column)" />
      </li>
    </ul>
    <KanbanSlideover
      v-if="slideOver.isOpen"
      :kanban-refetch="refetch" />
  </div>
</template>

<style scoped></style>
