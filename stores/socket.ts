import { defineStore } from "pinia";
import { Socket } from "socket.io-client";

export const useSocketStore = defineStore("socket", () => {
  const { $socket } = useNuxtApp();
  const socket = $socket as Socket;

  const isConnected = ref(false);

  onMounted(() => {
    socket.on("connect", () => {
      isConnected.value = true;
      console.log("Socket connected:", socket.id);
    });

    socket.on("disconnect", () => {
      isConnected.value = false;
      console.log("Socket disconnected");
    });
  });

  function emitMessage(event: string, payload: any) {
    socket.emit(event, payload);
  }

  function listen<T = string>(event: string, callback: (data: T) => void) {
    socket.on(event, callback);
  }

  return {
    socket,
    isConnected,
    emitMessage,
    listen,
  };
});
