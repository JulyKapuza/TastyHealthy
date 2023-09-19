<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <notifications position="top right" :duration="4000" />
</template>

<style scoped></style>
