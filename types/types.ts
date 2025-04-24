export interface Message {
  id: string;
  chat_id: string;
  sender_id: string;
  content: string;
  sent_at: string;
  delivered_at: string;
  replied_to_message_id: string;
  is_edited: string;
}

export interface User {
  id?: string;
  username: string;
  full_name: string;
  avatar_url: string;
  msisdn: string;
  bio?: string;
  lastseen?: string;
}

export interface Chat {
  chat_id: string;
  participant: User | any;
  messages?: Message[];
  last_message?: Message;
  created_at: string;
  updated_at: string;
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

export interface SendMessage {
  chat_id: string;
  sender_id: string;
  content: string;
}
