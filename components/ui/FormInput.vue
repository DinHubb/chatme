<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  name: string;
  label: string;
  validation: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const valueRef = computed({
  get: () => props.modelValue,
  set: (val: string) => emit("update:modelValue", val),
});
</script>

<template>
  <FormKit
    v-model="valueRef"
    :name="name"
    :label="label"
    :validation="validation"
    :classes="{
      outer: 'pb-4',
      label: 'text-secondary font-light',
      input:
        'rounded-lg border border-hgrey caret-tg transition-all duration-200 easy-out w-full h-10 p-2 mt-1 focus:border-tg hover:border-tg',
      message: 'mt-1 font-normal text-red-600 text-sm',
    }"
  />
</template>
