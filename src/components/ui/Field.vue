<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  nameIcon: {
    type: String,
    default: ''
  }
})
const isFocused = ref(false)
const input = ref(null)

const onFocus = () => {
  if (!props.modelValue) {
    isFocused.value = true
  }
}
const emits = defineEmits(['update:modelValue'])

const emitValue = (e) => {
  emits('update:modelValue', e.target.value)
}
</script>
<template>
  <div
    :class="{ '!border-main border-b-2 transition': isFocused || modelValue }"
    class="block mx-auto w-[80%] border-b border-white/[.1] transition mb-8"
  >
    <div class="relative flex items-center px-0 h-full">
      <input
        :value="modelValue"
        class="px-4 w-full md:min-w-[450px] text-[20px] py-3 h-full bg-transparent outline-none transition"
        :type="type"
        ref="input"
        @focus="onFocus"
        @blur="isFocused = false"
        @input="emitValue"
      />
      <span
        :class="{
          ' text-main -translate-y-6 transition px-0 !text-xl': isFocused || modelValue
        }"
        class="flex-shrink-0 absolute pointer-events-none text-2xl"
        >{{ label }}</span
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'],
input[type='number']:hover,
input[type='number']:focus {
  appearance: none;
  -moz-appearance: textfield;
}

input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button {
  display: none;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='date'] {
  color-scheme: dark;
}
</style>
