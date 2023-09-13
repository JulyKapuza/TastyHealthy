<script setup>
import Footer from "../components/Footer.vue";
</script>
<template>
  <div
    class="flex flex-col h-full w-full absolute top-0 start-0 bg-gradient text-white overflow-auto"
  >
    <main class="grow flex flex-col pt-4">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
