<script setup>
import Multiselect from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const selectedLocale = ref(locale)

const localeChange = (newLocale) => {
  selectedLocale.value = newLocale
}
</script>
<template>
  <header class="sticky top-0 pt-0 xl:-top-5 xl:pt-5 z-50 3xl:container xl:px-4">
    <div class="h-[80px] bg-main flex items-center justify-between px-5 rounded-[20px]">
      <div class="font-logo text-[50px]">Tasty&Healthy</div>
      <div class="w-[250px]">
        <Multiselect
          v-model="selectedLocale"
          @click="localeChange(selectedLocale)"
          :searchable="false"
          :options="[
            { title: 'English', value: 'en' },
            { title: 'Ukranian', value: 'uk' }
          ]"
          label="title"
          optionLabel="title"
          :clear-on-select="false"
        >
        </Multiselect>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.multiselect {
  --ms-bg: transparent;
  --ms-radius: 20px;
  --ms-border-color: rgb(255 255 255 / 0.1);
  --ms-dropdown-border-color: rgb(255 255 255 / 0.1);
  --ms-caret-color: rgb(255 255 255 / 0.5);
  --ms-ring-width: 0;
  --ms-option-bg-selected: rgb(255 255 255 / 0.1);
  --ms-option-bg-pointed: rgb(255 255 255 / 0.05);
  --ms-option-bg-selected-pointed: rgb(255 255 255 / 0.15);
  --ms-option-color-pointed: #fff;
  height: 48px;
  color: #263238;
}

.multiselect-dropdown {
  border-radius: 0 0 20px 20px;
  overflow: auto;
  background: #0891b2;
  radius: 20px;

  .multiselect-options {
    @apply bg-panel;
  }
}
.multiselect-clear-icon {
  display: none;
}
</style>
