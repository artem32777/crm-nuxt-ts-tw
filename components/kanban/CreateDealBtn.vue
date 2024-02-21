<script setup lang='ts'>

const emit = defineEmits<{
  (e: 'openForm'): void
}>()

const isOpen = ref<boolean>(false)

function toggle(){
  isOpen.value = !isOpen.value
  emit('openForm')
}



</script>

<template>
  <button
    @click="toggle()"
    class="opacity-30 transition-all hover:text-primary hover:opacity-100">
    <Icon
      v-if="isOpen"
      name="ph:arrow-circle-up-bold"
      size="35"
      class="fade-in-100 fade-out-0" />
    <Icon
      v-else
      name="tabler:circle-plus"
      size="35"
      class="fade-in-100 fade-out-0" />
  </button>
</template>

<style scoped>

</style>