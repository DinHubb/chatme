import type { SendMessage } from "~/types/types";

export const useChats = () => {
  const getChats = async (id: string) => {
    return await $jwtFetch(`/chats/${id}`, {
      method: "GET",
    });
  };

  const createChat = async (user1Id: string, user2Id: string) => {
    return await $jwtFetch("/chat-open", {
      method: "POST",
      body: { user1_id: user1Id, user2_id: user2Id },
    });
  };

  const sendMessage = async (message: SendMessage) => {
    return await $jwtFetch("/send-message", {
      method: "POST",
      body: message,
    });
  };

  return {
    getChats,
    createChat,
    sendMessage,
  };
};
