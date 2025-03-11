export interface Message {
  sub: string;
  message: string;
  createdAt: string;
}

export interface UserChat {
  sub: string;
  fullName: string;
  avatar: string;
}

export interface Chat {
  id: number;
  participants: string[];
  messages: Message[];
  sub1HasViewed: boolean;
  sub2HasViewed: boolean;
  user: UserChat;
}

export interface Users {
  sub: string;
  fullName: string;
  avatar: string;
}

export interface UserInfo {
  id: number;
  sub: string;
  avatar: string;
  fullName: string;
  chats: Chat[];
  allUsers: Users[];
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
