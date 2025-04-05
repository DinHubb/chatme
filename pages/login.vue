<script setup lang="ts">
const { login } = useAuth();
const router = useRouter();

const form = shallowRef<LoginCredentials>({ login: "", password: "" });
const errorMessages = ref({
  validate: "",
});

const { submit, inProgress, ValidationErrors, error } = useSubmit(
  async () => {
    return login(form.value);
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
        <UIFormInput v-model="form.login" :name="'text'" :label="'Login'" />
        <UIFormInput
          v-model="form.password"
          :name="'password'"
          :label="'Password'"
        />
      </template>
    </AppAuth>
  </div>
</template>
