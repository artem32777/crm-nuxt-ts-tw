<script setup lang="ts">
import type { IAuthStore } from '~/stores/auth.store'

import { v4 as uuid } from 'uuid'

useHead({
  title: 'login',
})

const emailRef = ref<string>('')
const passwordRef = ref<string>('')
const nameRef = ref<string>('')

const loader = useLoaderStore()
const store = useAuthStore()
const router = useRouter()

async function register(): Promise<void> {
  await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
  await login()
}

async function login(): Promise<void> {
  loader.show(true)
  try {
    await account.createEmailSession(emailRef.value, passwordRef.value)
    const response: IAuthStore = await account.get()
    if (response) {
      store.set({
        email: response.email,
        name: response.name,
        status: response.status,
      })
    }
    await router.push('/')
  } catch (e) {
    alert(e)
  } finally {
    emailRef.value = ''
    passwordRef.value = ''
    nameRef.value = ''
    loader.show(false)
  }
}
</script>

<template>
  <div class="flex min-h-screen w-full items-center justify-center">
    <div class="w-1/4 rounded bg-sidebar p-5">
      <h1 class="mb-5 text-center text-2xl font-bold">Login</h1>
      <form>

        <UiInput
          placeholder="Email"
          type="email"
          class="mb-3"
          v-model="emailRef" />
        <UiInput
          placeholder="Password"
          autocomplete="off"
          type="password"
          class="mb-3"
          v-model="passwordRef" />
        <UiInput
          placeholder="Name"
          type="name"
          class="mb-3"
          v-model="nameRef" />
        <div class="flex items-center justify-center gap-5">
          <UiButton
            type="button"
            @click="login"
            >Login
          </UiButton>
          <UiButton
            type="button"
            @click="register"
            >Register
          </UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
