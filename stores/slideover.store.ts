import type { ICard } from '~/components/kanban/kanban.types'

export const useSlideOverStore = defineStore('slideOver', () => {
  const slideOverStatus = ref<boolean>(false)
  const isOpen = computed(() => slideOverStatus.value)
  const open = () => (slideOverStatus.value = true)
  const close = () => (slideOverStatus.value = false)

  const cardId = ref<ICard['id'] | null>(null)
  const getCardId = computed(() => cardId.value)
  const setCardId = (clickedCard: ICard) => (cardId.value = clickedCard.id)

  return {
    isOpen,
    open,
    close,
    getCardId,
    setCardId,
  }
})
