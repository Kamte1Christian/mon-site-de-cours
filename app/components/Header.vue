<template>
  <header class="bg-white shadow-md fixed w-full top-0 z-50">
    <div class="container mx-auto px-4 py-4">
      <nav class="flex justify-between items-center">
        <div class="text-2xl font-bold text-blue-600">Logo</div>
        <div class="space-x-6">
          <NuxtLink to="/" class="text-gray-700 hover:text-blue-600">{{ t('nav.home') }}</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-blue-600">{{ t('nav.about') }}</NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
</style>
