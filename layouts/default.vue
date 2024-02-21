<script setup lang="ts">
const loader = useLoaderStore()
const store = useAuthStore()
const router = useRouter()

store.clear()


onMounted(async () => {
  try {
    const response = await account.get()
    store.set({
      email: response.email,
      name: response.name,
      status: true,
    })
  } catch (e) {
    await router.push('/login')
  } finally {
    loader.show(false)
  }
})


</script>

<template>
  <section>
    <LayoutLoader v-if="false" />
    <div
      v-else
      class="wrapper">
      <LayoutSidebar v-if="true" />
      <slot />
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}
</style>
