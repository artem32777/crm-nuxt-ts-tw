<script setup lang="ts">
import { MENU_DATA } from '~/components/layout/menu.data'
</script>

<template>
  <ul class="inline-flex flex-col gap-4 text-1.5xl">
    <li
      v-for="menuItem in MENU_DATA"
      :key="menuItem.name">
      <NuxtLink
        class="flex items-center gap-2 rounded-lg px-3 py-1 transition-colors hover:text-green-600"
        :to="menuItem.url"
      >
        <Icon
          :name="menuItem.icon"
          size="30" />
        {{ menuItem.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
