<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants'

const slideOver = useSlideOverStore()

const props = defineProps<{
  kanbanRefetch: () => void
}>()

const { isLoading, isError, data, error, refetch } = useQuery({
  queryKey: ['deal'],
  queryFn: () => DB.getDocument(DB_ID, COLLECTION_DEALS, slideOver.getCardId as string),
})
</script>

<template>
  <UiSheet :open="slideOver.isOpen">
    <UiSheetContent
      @interactOutside="slideOver.close()"
      @escapeKeyDown="slideOver.close()"
      class="max-w-[450px]">
      <UiSheetHeader>
        <UiSheetTitle>Информация о сделке</UiSheetTitle>
        <UiSheetDescription>
          Make changes to your profile here. Click save when you're done.
        </UiSheetDescription>
      </UiSheetHeader>
      <div v-if="isLoading">Loading...</div>
      <span v-else-if="isError">Error: {{ error.message }}</span>
      <div v-else>
        <KanbanSlideoverDeal
          :deal="data"
          :kanban-refetch="kanbanRefetch" />
        <KanbanSlideoverComments :deal="data" />
        <KanbanSlideoverCommentsAdd :deal="data" />
      </div>
    </UiSheetContent>
  </UiSheet>
</template>

<style scoped></style>
