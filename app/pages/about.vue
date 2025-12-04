<template>
  <div class="pt-16">
    <!-- Header -->
    <section class="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <i class="pi pi-user text-6xl mb-6"></i>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('about.title') }}</h1>
        <p class="text-xl text-indigo-100 max-w-3xl mx-auto">{{ t('about.subtitle') }}</p>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-lg mb-12">
            <div class="flex items-center justify-center mb-6">
              <i class="pi pi-user text-6xl text-blue-600"></i>
            </div>
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">{{ t('about.who.title') }}</h2>
            <p class="text-gray-700 text-lg leading-relaxed text-center mb-8">
              {{ t('about.who.description') }}
            </p>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex items-start space-x-3">
                <i class="pi pi-check-circle text-green-600 text-xl mt-1"></i>
                <div>
                  <h4 class="font-semibold text-gray-800 mb-1">{{ t('about.who.qualification1.title') }}</h4>
                  <p class="text-gray-600 text-sm">{{ t('about.who.qualification1.desc') }}</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <i class="pi pi-check-circle text-green-600 text-xl mt-1"></i>
                <div>
                  <h4 class="font-semibold text-gray-800 mb-1">{{ t('about.who.qualification2.title') }}</h4>
                  <p class="text-gray-600 text-sm">{{ t('about.who.qualification2.desc') }}</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <i class="pi pi-check-circle text-green-600 text-xl mt-1"></i>
                <div>
                  <h4 class="font-semibold text-gray-800 mb-1">{{ t('about.who.qualification3.title') }}</h4>
                  <p class="text-gray-600 text-sm">{{ t('about.who.qualification3.desc') }}</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <i class="pi pi-check-circle text-green-600 text-xl mt-1"></i>
                <div>
                  <h4 class="font-semibold text-gray-800 mb-1">{{ t('about.who.qualification4.title') }}</h4>
                  <p class="text-gray-600 text-sm">{{ t('about.who.qualification4.desc') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Mission -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 shadow-lg mb-12">
            <div class="flex items-center justify-center mb-6">
              <i class="pi pi-heart text-6xl text-purple-600"></i>
            </div>
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">{{ t('about.mission.title') }}</h2>
            <p class="text-gray-700 text-lg leading-relaxed text-center">
              {{ t('about.mission.description') }}
            </p>
          </div>

          <!-- Values -->
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-blue-50 p-6 rounded-xl text-center">
              <i class="pi pi-star text-4xl text-blue-600 mb-4"></i>
              <h3 class="font-bold text-gray-800 mb-2">{{ t('about.values.value1.title') }}</h3>
              <p class="text-gray-600">{{ t('about.values.value1.desc') }}</p>
            </div>

            <div class="bg-green-50 p-6 rounded-xl text-center">
              <i class="pi pi-users text-4xl text-green-600 mb-4"></i>
              <h3 class="font-bold text-gray-800 mb-2">{{ t('about.values.value2.title') }}</h3>
              <p class="text-gray-600">{{ t('about.values.value2.desc') }}</p>
            </div>

            <div class="bg-purple-50 p-6 rounded-xl text-center">
              <i class="pi pi-shield text-4xl text-purple-600 mb-4"></i>
              <h3 class="font-bold text-gray-800 mb-2">{{ t('about.values.value3.title') }}</h3>
              <p class="text-gray-600">{{ t('about.values.value3.desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">{{ t('about.testimonials.title') }}</h2>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-4">
              <i class="pi pi-star-fill text-yellow-400 text-xl"></i>
              <i class="pi pi-star-fill text-yellow-400 text-xl"></i>
              <i class="pi pi-star-fill text-yellow-400 text-xl"></i>
              <i class="pi pi-star-fill text-yellow-400 text-xl"></i>
              <i class="pi pi-star-fill text-yellow-400 text-xl"></i>
            </div>
            <p class="text-gray-700 italic mb-4 text-lg leading-relaxed">"{{ t('about.testimonials.testimonial1.text') }}"</p>
            <div class="flex items-center space-x-2 text-gray-600">
              <i class="pi pi-user"></i>
              <span class="font-semibold">{{ t('about.testimonials.testimonial1.name') }}</span>
              <span>•</span>
              <i class="pi pi-map-marker"></i>
              <span>{{ t('about.testimonials.testimonial1.location') }}</span>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div class="flex items-center mb-4">
              <i class="pi pi-star-fill text-yellow-400 text-xl"></i>
              <i class="pi pi-star-fill text-yellow-400 text-xl"></i>
              <i class="pi pi-star-fill text-yellow-400 text-xl"></i>
              <i class="pi pi-star-fill text-yellow-400 text-xl"></i>
              <i class="pi pi-star-fill text-yellow-400 text-xl"></i>
            </div>
            <p class="text-gray-700 italic mb-4 text-lg leading-relaxed">"{{ t('about.testimonials.testimonial2.text') }}"</p>
            <div class="flex items-center space-x-2 text-gray-600">
              <i class="pi pi-user"></i>
              <span class="font-semibold">{{ t('about.testimonials.testimonial2.name') }}</span>
              <span>•</span>
              <i class="pi pi-map-marker"></i>
              <span>{{ t('about.testimonials.testimonial2.location') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ t('about.cta.title') }}</h2>
        <p class="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">{{ t('about.cta.subtitle') }}</p>
        <NuxtLink to="/contact" class="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg inline-block">
          <i class="pi pi-phone mr-2"></i>{{ t('about.cta.button') }}
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
