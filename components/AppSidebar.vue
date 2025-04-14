<script setup lang="ts">
import AppChats from "@/components/AppChats.vue";
import AppEditProfile from "@/components/AppEditProfile.vue";
import AppSetting from "./AppSetting.vue";
import type { CallMenu } from "~/types/menu";
const emit = defineEmits(["select-chat"]);
const storeUser = useUserStore();

const transitionName = ref("fade-to-left");

type ComponentType =
  | typeof AppChats
  | typeof AppEditProfile
  | typeof AppSetting
  | CallMenu;

const componentHistory = shallowRef<ComponentType[]>([AppChats]);
const currentComponent = shallowRef<ComponentType>(AppChats);

const handleGoBack = () => {
  if (componentHistory.value.length > 1) {
    componentHistory.value.pop();
    currentComponent.value =
      componentHistory.value[componentHistory.value.length - 1];
    transitionName.value = "fade-to-right";
  }
};

const handleNext = (component: ComponentType) => {
  transitionName.value = "fade-to-left";
  componentHistory.value.push(component);
  currentComponent.value = component;
};
</script>
<template>
  <aside
    class="relative max-w-[420px] w-full h-full overflow-hidden border-r bg-bgColor border-brcolor"
  >
    <Transition :name="transitionName">
      <component
        :is="currentComponent"
        :user="storeUser.user"
        @go-back="handleGoBack"
        @next="handleNext"
      />
    </Transition>
  </aside>
</template>
<style scoped>
/* Animation to left */
.fade-to-left-enter-active,
.fade-to-left-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-to-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
  filter: blur(10px);
  -webkit-filter: blur(10px);
}

.fade-to-left-leave-to {
  transform: translateX(-50%);
  opacity: 0;
  filter: blur(15px);
  -webkit-filter: blur(15px);
}

/* Animation to right */
.fade-to-right-enter-active,
.fade-to-right-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-to-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
  filter: blur(10px);
  -webkit-filter: blur(10px);
}

.fade-to-right-leave-to {
  transform: translateX(50%);
  opacity: 0;
  filter: blur(15px);
  -webkit-filter: blur(15px);
}
</style>
