import { io, Socket } from "socket.io-client";

export default defineNuxtPlugin(() => {
  const { SOCKET_URL } = useRuntimeConfig().public;

  const socket: Socket = io(SOCKET_URL as string, {
    withCredentials: true,
    transports: ["websocket"],
  });

  return {
    provide: {
      socket,
    },
  };
});
