<script setup lang="ts">
const props = defineProps<{
  modelValue: string | undefined;
  name: string;
  label: string;
  validation: string;
  type: any;
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
    v-model.trim="valueRef"
    :name="name"
    :type="type"
    :label="label"
    :validation="validation"
    rows="1"
    autocomplete="off"
    :classes="{
      outer: 'relative',
      wrapper: 'flex items-center',
      inner: 'w-full',
      label:
        'edit__profile__label absolute left-3.5 text-placeholderInput px-1 bg-white select-none pointer-events-none font-light origin-top-left transition-all easy-in-out duration-200' +
        (valueRef ? ' label--active' : ''),
      input:
        ' rounded-[10px] resize-none outline-none bg-white border border-hgrey caret-tg transition-all duration-200 easy-out w-full p-3.5 focus:border-tg hover:border-tg',
      message: 'mt-1 font-normal text-red-600 text-sm',
    }"
  />
</template>

<style>
.formkit-wrapper:hover .edit__profile__label {
  color: #3390ec;
}
.formkit-wrapper:focus-within .edit__profile__label {
  transform: translateY(-1.5rem) scale(0.8);
  font-weight: 500;
  color: #3390ec;
}

.edit__profile__label.label--active {
  transform: translateY(-1.5rem) scale(0.8);
}
</style>
