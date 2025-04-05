<script setup lang="ts">
const { register } = useAuth();
const router = useRouter();

const form: RegisterCredentials = reactive({
  username: "",
  email: "",
  password: "",
});
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
        <UIFormInput v-model="form.username" :name="'text'" :label="'Name'" />
        <UIFormInput
          v-model="form.email"
          :name="'email'"
          :label="'Email'"
          :validation="'required|email'"
        />
        <UIFormInput
          v-model="form.password"
          :name="'password'"
          :label="'Password'"
          :validation="'required:trim|length:4'"
        />
      </template>
    </AppAuth>
  </div>
</template>
