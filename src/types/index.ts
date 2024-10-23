import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type UserContext = {
  currentUser: string;
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
}

export type Chat = {
  id: number;
  message: string;
  time: string;
  date: string;
  type: string;
  sent: boolean;
  avatar?: string;
}

export type CallLog = {
  id: number;
  img: string;
  name: string;
  type: string;
  time: string;
  number: string;
  date?: string; 
}

export type TextMessage = {
  id: number;
  img: string;
  name: string;
  time: string;
  number: string;
  lastMessage: string;
  chats: Chat[];
}

export type Note = {
  id: number;
  title: string;
  displayText: string;
  data: string;
}

export type Contact = {
  id: number;
  img: string;
  name: string;
  number: string;
  favourite: boolean;
}