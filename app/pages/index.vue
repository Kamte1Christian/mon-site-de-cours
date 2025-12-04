<template>
  <div class="pt-16">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ t('home.hero.title') }}</h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">{{ t('home.hero.subtitle') }}</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
              <i class="pi pi-phone mr-2"></i>{{ t('home.hero.bookCourse') }}
            </NuxtLink>
            <NuxtLink to="/computer-courses" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-lg">
              {{ t('home.hero.viewProgram') }}
            </NuxtLink>
          </div>
          
          <div class="mt-12 bg-yellow-400 text-gray-900 px-6 py-4 rounded-lg inline-block">
            <i class="pi pi-gift mr-2"></i>
            <strong>{{ t('home.hero.specialOffer') }}</strong>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">{{ t('home.services.title') }}</h2>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <NuxtLink to="/computer-courses" class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
            <i class="pi pi-desktop text-5xl text-blue-600 mb-4"></i>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ t('home.services.computer.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('home.services.computer.description') }}</p>
            <ul class="space-y-2 text-gray-700">
              <li><i class="pi pi-check text-green-600 mr-2"></i>{{ t('home.services.computer.item1') }}</li>
              <li><i class="pi pi-check text-green-600 mr-2"></i>{{ t('home.services.computer.item2') }}</li>
              <li><i class="pi pi-check text-green-600 mr-2"></i>{{ t('home.services.computer.item3') }}</li>
            </ul>
            <div class="mt-6 text-blue-600 font-semibold flex items-center">
              {{ t('home.services.learnMore') }} <i class="pi pi-arrow-right ml-2"></i>
            </div>
          </NuxtLink>

          <NuxtLink to="/home-classes" class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
            <i class="pi pi-book text-5xl text-purple-600 mb-4"></i>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">{{ t('home.services.homeClasses.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('home.services.homeClasses.description') }}</p>
            <ul class="space-y-2 text-gray-700">
              <li><i class="pi pi-check text-green-600 mr-2"></i>{{ t('home.services.homeClasses.item1') }}</li>
              <li><i class="pi pi-check text-green-600 mr-2"></i>{{ t('home.services.homeClasses.item2') }}</li>
              <li><i class="pi pi-check text-green-600 mr-2"></i>{{ t('home.services.homeClasses.item3') }}</li>
            </ul>
            <div class="mt-6 text-purple-600 font-semibold flex items-center">
              {{ t('home.services.learnMore') }} <i class="pi pi-arrow-right ml-2"></i>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">{{ t('home.whyChoose.title') }}</h2>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <i class="pi pi-home text-5xl text-blue-600 mb-4"></i>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ t('home.whyChoose.reason1.title') }}</h3>
            <p class="text-gray-600">{{ t('home.whyChoose.reason1.desc') }}</p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <i class="pi pi-user text-5xl text-indigo-600 mb-4"></i>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ t('home.whyChoose.reason2.title') }}</h3>
            <p class="text-gray-600">{{ t('home.whyChoose.reason2.desc') }}</p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-lg text-center">
            <i class="pi pi-chart-line text-5xl text-purple-600 mb-4"></i>
            <h3 class="text-xl font-bold text-gray-800 mb-3">{{ t('home.whyChoose.reason3.title') }}</h3>
            <p class="text-gray-600">{{ t('home.whyChoose.reason3.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ t('home.cta.title') }}</h2>
        <p class="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">{{ t('home.cta.subtitle') }}</p>
        <NuxtLink to="/contact" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg inline-block">
          <i class="pi pi-phone mr-2"></i>{{ t('home.cta.button') }}
        </NuxtLink>
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
