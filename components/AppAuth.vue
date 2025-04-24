<script setup lang="ts">
import type { Form } from "~/types/types";

interface errorMessages {
  validate: string;
}

const { createRipple } = useRipple();

const props = defineProps<{
  form?: Form;
  errorMessages: errorMessages;
}>();

const emit = defineEmits<(e: "submit") => void>();
</script>

<template>
  <div class="relative flex flex-col justify-center items-center h-full">
    <div class="pb-8 text-center">
      <img
        class="mx-auto h-10 w-auto mb-8"
        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />

      <h2 class="text-center text-4xl font-semibold mb-2">Chatme</h2>
      <p class="text-secondary font-light text-base">
        <slot name="subtitle"></slot>
      </p>
    </div>

    <FormKit
      type="form"
      :actions="false"
      :incomplete-message="false"
      :classes="{
        form: 'w-96',
        messages: 'text-red-600 text-center pt-3',
      }"
      @submit="emit('submit')"
      :errors="[errorMessages.validate]"
    >
      <slot name="formkitField"></slot>
      <FormKit
        @click="createRipple"
        type="submit"
        label="NEXT"
        :classes="{
          input:
            'w-full rounded-lg bg-tg hover:bg-darkTg relative overflow-hidden p-2 text-white font-light',
        }"
      />
    </FormKit>
  </div>
</template>
