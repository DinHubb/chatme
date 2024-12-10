<script setup lang="ts">
const props = defineProps<{
  form?: object;
}>();
</script>

<template>
  <div class="relative flex flex-col justify-center items-center min-h-full">
    <div class="pb-8">
      <img
        class="mx-auto h-10 w-auto mb-8"
        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 class="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        <slot name="title"></slot>
      </h2>
    </div>

    <FormKit
      type="form"
      :actions="false"
      :incomplete-message="false"
      @submit="$emit('submit')"
    >
      <FormKit
        v-model="form.msisdn"
        name="text"
        label="Login"
        validation="required"
      />
      <FormKit
        v-model="form.password"
        type="password"
        name="password"
        label="Password"
        validation="required"
      />
      <FormKit type="submit" label="Submit" />
    </FormKit>
  </div>
</template>
