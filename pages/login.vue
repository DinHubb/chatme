<script setup lang="ts">
const { login } = useAuth();
const router = useRouter();

const form = reactive({ msisdn: "", password: "" });

const {
  submit,
  inProgress,
  validationErrors: errors,
} = useSubmit(
  () => {
    return login(form);
  },
  {
    onSuccess: () => router.push("/"),
  }
);
</script>

<template>
  <section class="w-full h-full">
    <div class="__container h-full">
      <AppAuth :form="form" @submit="submit">
        <template #title> Sign in to your user_id </template>
      </AppAuth>
    </div>
  </section>
</template>
