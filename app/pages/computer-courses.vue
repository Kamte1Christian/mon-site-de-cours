<template>
  <div class="pt-16">
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ t('computerCourses.title') }}</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-12">{{ t('computerCourses.subtitle') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
</style>
