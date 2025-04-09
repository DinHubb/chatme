export interface Message {
  username: string;
  message: string;
  createdAt: string;
}

export interface UserChat {
  username: string;
  fullName: string;
  avatar: File | string;
  email: string;
}

export interface Chat {
  id: number;
  participants: string[];
  messages: Message[];
  sub1HasViewed: boolean;
  sub2HasViewed: boolean;
  user: UserChat;
}

export interface User {
  username: string;
  fullName: string;
  avatar: File | string;
  email: string;
  bio?: string;
}

export interface UserInfo {
  id: number | null;
  username: string;
  avatar: File | string;
  email: string;
  fullName: string;
  chats: Chat[];
  allUsers: User[];
  userDataForChat: {
    id: string;
    sub1: string;
    sub2: string;
    messages: string[];
  }[];
  showFindFriends: boolean;
  currentChat: Chat | null;
}

export interface Form {
  login?: string;
  username?: string;
  email?: string;
  password: string;
}
