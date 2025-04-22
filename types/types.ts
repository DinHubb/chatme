export interface Message {
  id: string;
  chat_id: string;
  sender_id: string;
  content: string;
  type: "text" | "image" | "video" | "audio" | "file" | "sticker" | "system";
  media_url?: string;
  replied_to_message_id?: string;
  isEdited: boolean;
  sentAt: string;
  deliveredAt?: string;
  readBy: string[];
  reactions?: { [emoji: string]: string[] };
}

export interface User {
  username: string;
  full_name: string;
  avatar_url: string;
  msisdn: string;
  bio?: string;
}

export interface Chat {
  id: string;
  type: "private" | "group" | "channel";
  name?: string;
  avatar_url?: string;
  participants: User[];
  admins?: string[];
  messages: Message[];
  lastMessageId?: string;
  pinnedMessageId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserInfo {
  id: string;
  username: string;
  msisdn: string;
  full_name: string;
  bio: string;
  avatar_url: string;
  chats: Chat[];
  currentChat: Chat | null;
  isAdminInChat?: boolean;
  isMutedInChat?: boolean;
  showFindFriends: boolean;
}

export interface Form {
  login?: string;
  username?: string;
  msisdn?: string;
  password: string;
}

export interface UpdateUserFields {
  username: string;
  full_name: string;
  avatar_file: File | string;
  msisdn: string;
  bio: string;
}
