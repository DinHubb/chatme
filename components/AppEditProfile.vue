<script setup lang="ts">
import {
  ArrowLeftIcon,
  CameraIcon,
  CheckIcon,
} from "@heroicons/vue/24/outline";
import type { ComponentSidebarEmits } from "~/types/emits";
import type { ComponentSidebarProps } from "~/types/props";
import type { UpdateUserFields, User } from "~/types/types";

const props = defineProps<ComponentSidebarProps>();
const emit = defineEmits<ComponentSidebarEmits>();
const { updateUser } = useUser();
const storeUser = useUserStore();
const user = computed(() => storeUser.user);

const originalForm = ref<UpdateUserFields>({
  full_name: user.value.full_name,
  msisdn: user.value.msisdn,
  username: user.value.username,
  avatar_file: user.value.avatar_url,
  bio: user.value.bio,
});
const form = reactive<UpdateUserFields>({ ...originalForm.value });
const inputFile = shallowRef<HTMLElement | null>(null);
const previewAvatar = ref<string | null>(null);

const isFormChanged = computed(() =>
  Object.keys(form).some(
    (key) =>
      form[key as keyof UpdateUserFields] !==
      originalForm.value[key as keyof UpdateUserFields]
  )
);

const uploadAvatar = () => {
  inputFile.value?.click();
};

function onChangeAvatar(event: any) {
  const file = event.target?.files[0];

  if (file) {
    processFile(file);
    event.target.value = "";
  }
}

const processFile = (fileItem: File) => {
  const newFile = new File([fileItem], fileItem.name, {
    type: fileItem.type,
  });

  previewAvatar.value = URL.createObjectURL(fileItem);
  form.avatar_file = newFile;
};

const { submit, inProgress, ValidationErrors, error } = useSubmit(
  async () => {
    return await updateUser(user.value.id, form);
  },
  {
    onSuccess: (res) => {
      storeUser.updateUser(res);
      originalForm.value = {
        full_name: user.value.full_name,
        msisdn: user.value.msisdn,
        username: user.value.username,
        avatar_file: user.value.avatar_url,
        bio: user.value.bio,
      };
    },
    onError: () => {},
  }
);
</script>

<template>
  <div class="absolute w-full h-full bg-bgColor">
    <div class="bg-white mb-3 shadow-[0_1px_3px_0_rgba(0,0,0,0.06)]">
      <div class="py-2 px-4 flex items-center">
        <button
          class="w-10 h-10 min-w-10 min-h-10 p-2 rounded-full hover:bg-hgray"
          @click="emit('goBack')"
        >
          <ArrowLeftIcon class="w-6 h-6 stroke-2 stroke-secondary" />
        </button>
        <div class="flex items-center justify-between w-full">
          <span class="pl-6 text-xl font-medium"> Edit Profile </span>
        </div>
      </div>
      <div class="flex flex-col pt-8 pb-2 mx-2 items-center">
        <div
          class="relative group overflow-hidden flex justify-center items-center w-[120px] h-[120px] rounded-full cursor-pointer mb-5"
          @click="uploadAvatar"
        >
          <div
            class="absolute w-full h-full filter brightness-75 bg-[rgba(0,0,0,0.28)] rounded-full"
          ></div>
          <CameraIcon
            class="w-12 h-12 absolute text-white group-hover:scale-125 transition-transform duration-200 ease-in-out"
          />
          <div v-if="previewAvatar" class="rounded-full overflow-hidden">
            <img :src="previewAvatar ?? ''" alt="" />
          </div>
          <UIProfileAvatar
            v-else
            :user="user"
            :class-name="'w-full h-full text-4xl'"
          />
          <input
            ref="inputFile"
            type="file"
            class="hidden"
            @change="onChangeAvatar($event)"
          />
        </div>
        <div class="w-full px-3 my-3 space-y-5">
          <UIFormAnimateInput
            v-model="form.full_name"
            :name="'text'"
            :type="'text'"
            :label="'Name'"
            :validation="''"
          />
          <UIFormAnimateInput
            v-model="form.bio"
            :name="'textarea'"
            :type="'textarea'"
            :label="'Bio (optional)'"
            :validation="''"
          />
        </div>
      </div>
    </div>
    <div class="text-secondary text-sm px-6 mb-4">
      Any details such as age, occupation or city. <br />
      Example: 23 y.o. designer from San Francisco
    </div>
    <div
      class="bg-white mb-3 py-2 font-light shadow-[0_1px_3px_0_rgba(0,0,0,0.06)]"
    >
      <div class="mx-2">
        <h4 class="py-2 px-4 text-tg font-medium">Username</h4>
        <div class="my-3 px-3">
          <UIFormAnimateInput
            v-model="form.username"
            :name="'text'"
            :type="'text'"
            :label="'Username (optional)'"
            :validation="''"
          />
        </div>
      </div>
    </div>
    <div class="text-secondary text-sm px-6 mb-4">
      <span
        >You can choose a username on <b>Chatme</b>. If you do, people will be
        able to find you by this username and contact you without needing your
        phone number.<br /><br />You can use <b>a–z</b>, <b>0–9</b> and
        underscores. Minimum length is <b>5</b> characters.</span
      >
    </div>
    <Transition
      enter-active-class="transition-all duration-200 ease-[cubic-bezier(.34,1.56,.64,1)]"
      enter-from-class="translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="transition-all duration-200 ease-in-out"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-full"
    >
      <div v-if="isFormChanged" class="absolute bottom-5 right-5">
        <UIButton
          :class-name="'w-14 h-14 bg-tg hover:bg-darkTg'"
          @on-click="submit"
        >
          <span class="text-2xl text-white">✓</span>
        </UIButton>
      </div>
    </Transition>
  </div>
</template>
