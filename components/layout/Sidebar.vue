<script setup lang="ts">

const store = useAuthStore()
const loader = useLoaderStore()
const router = useRouter()

async function logout(){
  loader.show(true)
  try{
    await account.deleteSession('current')
    store.clear()
    await router.push('/login')
  } catch(e) {

  } finally {
    loader.show(false)
  }
}

</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="" width="140px" class="mx-auto" />
    </NuxtLink>
    <button
      class="absolute top-2 right-3 transition-colors text-primary hover:text-green-500"
    >
      <Icon name="line-md:log-out" size="22" @click="logout" />
    </button>
    <LayoutMenu/>
  </aside>
</template>

<style scoped></style>
