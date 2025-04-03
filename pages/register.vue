<script setup lang="ts">
const { register } = useAuth();
const router = useRouter();

const form = reactive({ username: "", email: "", password: "" });
const errorMessages = ref({
  validate: "",
});

const { submit, inProgress, ValidationErrors, error } = useSubmit(
  () => {
    return register(form);
  },
  {
    onSuccess: () => router.push("/"),
    onError: () => {
      if (ValidationErrors.value.errors) {
        errorMessages.value.validate = ValidationErrors.value.errors.message;
      }
    },
  }
);
</script>

<template>
  <div class="__container pt-28">
    <AppAuth :form="form" :errorMessages="errorMessages" @submit="submit">
      <template #title> Sign up </template>
      <template #subtitle>
        Already have an account?
        <NuxtLink
          to="/login"
          class="text-tg active:opacity-80 transition-all duration-200 ease-out hover:text-darkTg"
          >Sign in</NuxtLink
        >
      </template>
      <template #formkitField>
        <FormKit
          v-model="form.username"
          name="text"
          label="Name"
          validation="required"
          :classes="{
            outer: 'pb-4',
            label: 'text-secondary font-light ',
            input:
              'rounded-lg border border-hgrey caret-tg transition-all duration-200 easy-out w-full h-10 p-2 mt-1 focus:border-tg hover:border-tg',
            message: 'mt-1 font-normal text-red-600 text-sm',
          }"
        />
        <FormKit
          v-model="form.email"
          type="email"
          label="email"
          validation="required|email"
          :classes="{
            outer: 'pb-4',
            label: 'text-secondary font-light ',
            input:
              'rounded-lg border border-hgrey caret-tg transition-all duration-200 easy-out w-full h-10 p-2 mt-1 focus:border-tg hover:border-tg',
            message: 'mt-1 font-normal text-red-600 text-sm',
          }"
        />
        <FormKit
          v-model="form.password"
          type="password"
          label="Password"
          validation="required:trim|length:4"
          :classes="{
            outer: 'pb-4',
            label: 'text-secondary font-light ',
            input:
              'rounded-lg border border-hgrey caret-tg transition-all duration-200 easy-out w-full h-10 p-2 mt-1 focus:border-tg hover:border-tg',
            message: 'mt-1 font-normal text-red-600 text-sm',
          }"
        />
      </template>
    </AppAuth>
  </div>
</template>
