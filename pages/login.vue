<script setup lang="ts">
const { login } = useAuth();
const router = useRouter();

const form = reactive({ login: "", password: "" });
const errorMessages = ref({
  validate: "",
});

const { submit, inProgress, ValidationErrors, error } = useSubmit(
  async () => {
    return login(form);
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
      <template #subtitle>
        New to Chatme?
        <NuxtLink
          to="/register"
          class="text-tg active:opacity-80 transition-all duration-200 ease-out hover:text-darkTg"
          >Join now</NuxtLink
        >
      </template>
      <template #formkitField>
        <FormKit
          v-model="form.login"
          name="text"
          label="Login"
          validation="required"
          :classes="{
            outer: 'pb-4',
            label: 'text-secondary font-light ',
            input:
              'rounded-lg border border-hgrey caret-tg transition-all duration-200 easy-out w-full h-10 p-2 mt-1 focus:border-tg hover:border-tg',
            message: 'font-normal text-red-600 text-sm',
          }"
        />
        <FormKit
          v-model="form.password"
          type="password"
          name="password"
          label="Password"
          validation="required"
          :classes="{
            outer: 'pb-4',
            label: 'text-secondary font-light text-base',
            input:
              'rounded-lg border border-hgrey caret-tg transition-all duration-200 easy-out w-full h-10 p-2 mt-1 focus:border-tg hover:border-tg',
            message: 'font-normal text-red-600 text-sm',
          }"
        />
      </template>
    </AppAuth>
  </div>
</template>
