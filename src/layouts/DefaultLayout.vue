<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
<template>
  <div
    class="flex flex-col h-full w-full absolute top-0 start-0 bg-gradient text-white overflow-auto"
  >
    <Header />
    <main class="grow flex flex-col pt-4">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
<style lang="scss">
.bg-gradient {
  background: linear-gradient(121.17deg, #083344, #164e63 94.02%);
}
</style>
