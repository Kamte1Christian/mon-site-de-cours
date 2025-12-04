<template>
  <div class="min-h-screen bg-gray-50">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
</script>

<style>
* {
  font-family: 'Poppins';
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #4B5563;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #4B5563;
}
::-webkit-scrollbar-thumb:active {
  background-color: #4B5563;
}

.p-toast {
  opacity: 0.95;
}

.p-toast .p-toast-message {
  backdrop-filter: blur(10px);
}
</style>