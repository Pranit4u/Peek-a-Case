import { Chat, TextMessage } from "@/types";
import { ADRIANNA_IMAGE, HELEN_IMAGE } from "@/utils/contants";

const chapter1HelenChat = [
  {
    id: 1,
    message: "Hey Helen, it's me. My phone got smashed!😢😢",
    time: "1:17 PM",
    date: "Sep 26th",
    type: "text",
    sent: true,
  },
  {
    id: 2,
    message:
      "The tech store gave me this temporary phone until they fix mine🙄🤦‍♀️",
    time: "1:17 PM",
    date: "Sep 26th",
    type: "text",
    sent: true,
  },
  {
    id: 3,
    message: "Look what David bought me!💎😍",
    time: "1:19 PM",
    date: "Sep 26th",
    type: "text",
    sent: true,
  },
  {
    id: 4,
    message: "/adrianna_brace.webp",
    time: "1:19 PM",
    date: "Sep 26th",
    type: "img",
    sent: true,
  },
  {
    id: 5,
    message: "Helen I think someone is following me!!",
    time: "1:54 PM",
    date: "Sep 26th",
    type: "text",
    sent: true,
  },
  {
    id: 6,
    message: "PLEASE PICK UP",
    time: "1:59 PM",
    date: "Sep 26th",
    type: "text",
    sent: true,
  },
  {
    id: 7,
    message: "Hi! Are you alright?",
    time: "2:23 PM",
    date: "Sep 26th",
    type: "text",
    sent: false,
  },
  {
    id: 8,
    message: "???",
    time: "2:24 PM",
    date: "Sep 26th",
    type: "text",
    sent: false,
  },
] as Chat[];

export const chapter1TextMessages = [
  {
    id: 1,
    img: "",
    name: "Helen💕",
    time: "1:59 PM",
    lastMessage: "???",
    number: "973-555-0180",
    chats: chapter1HelenChat,
  },
] as TextMessage[];

const chapter2HelenChat = [
  {
    id: 1,
    message: "You need to dump that boy he's at stalker level 1000",
    time: "12:32 PM",
    date: "Sep 16th",
    type: "text",
    sent: false,
    img: HELEN_IMAGE,
  },
  {
    id: 2,
    message: "He has issues, but deep down he has a pure ❤️",
    time: "12:32 PM",
    date: "Sep 16th",
    type: "text",
    sent: true,
  },
  {
    id: 3,
    message: "I had two classes w him last semester. I know him 🤦‍♀️",
    time: "12:32 PM",
    date: "Sep 16th",
    type: "text",
    sent: false,
    img: HELEN_IMAGE,
  },
  {
    id: 4,
    message: "Give him a chance",
    time: "12:33 PM",
    date: "Sep 16th",
    type: "text",
    sent: true,
  },
  {
    id: 5,
    message: "I'm trying to use your card and forgot the pin 🤦‍♀️",
    time: "10:40 AM",
    date: "Sep 18th",
    type: "text",
    sent: false,
    img: HELEN_IMAGE,
  },
  {
    id: 6,
    message: "The usual, 9119",
    time: "10:40 AM",
    date: "Sep 18th",
    type: "text",
    sent: true,
  },
  {
    id: 7,
    message: "Hangs?",
    time: "2:22 PM",
    date: "Sep 19th",
    type: "text",
    sent: false,
    img: HELEN_IMAGE,
  },
  {
    id: 8,
    message:
      "I can't 😣 that project for marketing is due tonight and I still have to research Senator Vaughn's political strategy for it",
    time: "2:22 PM",
    date: "Sep 19th",
    type: "text",
    sent: true,
  },
  {
    id: 9,
    message: "Snoozefest💤",
    time: "2:23 PM",
    date: "Sep 19th",
    type: "text",
    sent: false,
    img: HELEN_IMAGE,
  },
  {
    id: 10,
    message:
      "Woman I hear your phone vibrating every two minutes. Does David call you all class?",
    time: "5:21 PM",
    date: "Sep 20th",
    type: "text",
    sent: false,
    img: HELEN_IMAGE,
  },
  {
    id: 11,
    message: "Don't ask...🤦‍♀️",
    time: "5:21 PM",
    date: "Sep 20th",
    type: "text",
    sent: true,
  },
  {
    id: 12,
    message:
      "I think I'm going to dump him. I even deleted that stupid chat app he made me download",
    time: "4:53 PM",
    date: "Sep 21st",
    type: "text",
    sent: true,
  },
  {
    id: 13,
    message: "Thank the frsh heavens you've finally seen the light 🙏🙏",
    time: "4:53 PM",
    date: "Sep 21st",
    type: "text",
    sent: false,
    img: HELEN_IMAGE,
  },
  {
    id: 14,
    message: "😑",
    time: "5:21 PM",
    date: "Sep 21st",
    type: "text",
    sent: true,
  },
] as Chat[];

const chapter2DavidChat = [
  {
    id: 1,
    message: "Where are you love?",
    time: "4:05 PM",
    date: "Sep 18th",
    type: "text",
    sent: false,
  },
  {
    id: 2,
    message: "In class. I'll call after 😘",
    time: "4:05 PM",
    date: "Sep 18th",
    type: "text",
    sent: true,
  },
  {
    id: 3,
    message: "Class should be done wtf?",
    time: "6:00 PM",
    date: "Sep 18th",
    type: "text",
    sent: false,
  },
  {
    id: 4,
    message: "Sorry! Was asking the prof for help. Calling now!",
    time: "6:00 PM",
    date: "Sep 18th",
    type: "text",
    sent: true,
  },
  {
    id: 5,
    message: "Why aren't you at home you don't have class right now",
    time: "7:08 PM",
    date: "Sep 20th",
    type: "text",
    sent: false,
  },
  {
    id: 6,
    message: "I'm spending the night at Helen's, remember?",
    time: "7:20 PM",
    date: "Sep 20th",
    type: "text",
    sent: true,
  },
  {
    id: 7,
    message: "Spend it with me instead",
    time: "7:20 PM",
    date: "Sep 20th",
    type: "text",
    sent: false,
  },
  {
    id: 8,
    message: "I have a surprise for you",
    time: "7:20 PM",
    date: "Sep 20th",
    type: "text",
    sent: false,
  },
  {
    id: 9,
    message: "Okay ❤️",
    time: "7:21 PM",
    date: "Sep 20th",
    type: "text",
    sent: true,
  },
  {
    id: 10,
    message: "Why aren't you picking up???",
    time: "1:15 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 11,
    message: "I'm in class",
    time: "1:15 PM",
    date: "Sep 22nd",
    type: "text",
    sent: true,
  },
  {
    id: 12,
    message: "Let's hang out after",
    time: "1:16 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 13,
    message: "I was with you for 4 days I need some me time",
    time: "1:16 PM",
    date: "Sep 22nd",
    type: "text",
    sent: true,
  },
  {
    id: 14,
    message: "We'll see about that 😡",
    time: "1:16 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 15,
    message:
      "No. I'm done, David. You broke my phone when you wouldn't let go last night",
    time: "1:17 PM",
    date: "Sep 22nd",
    type: "text",
    sent: true,
  },
  {
    id: 16,
    message: "No! I won't ever do it again. I promise!",
    time: "1:18 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 17,
    message: "Adrianna pick up!",
    time: "1:20 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 18,
    message: "Wtf why do I need to call you so many times",
    time: "1:25 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 19,
    message: "Pick up",
    time: "1:25 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 20,
    message: "I really miss you",
    time: "1:25 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 21,
    message: "You know we have something real",
    time: "1:26 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 22,
    message: "Call me now! I have a special gift for you",
    time: "3:12 PM",
    date: "Sep 25th",
    type: "text",
    sent: false,
  },
] as Chat[];

export const chapter2TextMessages = [
  {
    id: 1,
    img: "",
    name: "David",
    time: "Sep 25th",
    lastMessage: "Call me now! I have a special gift for y...",
    number: "973-555-0180",
    chats: chapter2DavidChat,
  },
  {
    id: 2,
    img: HELEN_IMAGE,
    name: "Helen💕",
    time: "Sep 21st",
    lastMessage: "😑",
    number: "973-555-0180",
    chats: chapter2HelenChat,
  },
] as TextMessage[];

const chapter3NickChat = [
  {
    id: 1,
    message: "Some friend you are",
    time: "08:08 PM",
    date: "Sep 22nd",
    type: "text",
    sent: true,
  },
  {
    id: 2,
    message:
      "Look David, we were really tight last semester, but you've gotten weird about Adrianna",
    time: "08:08 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 3,
    message: "Weird how?",
    time: "08:09 PM",
    date: "Sep 22nd",
    type: "text",
    sent: true,
  },
  {
    id: 4,
    message:
      "I saw you yelling at her outside the campus square. You wouldn't let her walk away and you were mad over some basic shit",
    time: "08:10 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 5,
    message: "You're only mad cause you're jealous!",
    time: "08:10 PM",
    date: "Sep 22nd",
    type: "text",
    sent: true,
  },
  {
    id: 6,
    message: "I'm not jealous. I'm worried for you both",
    time: "08:11 PM",
    date: "Sep 22nd",
    type: "text",
    sent: false,
  },
  {
    id: 7,
    message: "Did you talk to Adrianna about me?",
    time: "02:21 PM",
    date: "Sep 24th",
    type: "text",
    sent: true,
  },
  {
    id: 8,
    message: "No. Adrianna and I don't talk much",
    time: "02:21 PM",
    date: "Sep 24th",
    type: "text",
    sent: false,
  },
  {
    id: 9,
    message: "She's trying to break up with me! You did this!!",
    time: "02:22 PM",
    date: "Sep 24th",
    type: "text",
    sent: true,
  },
  {
    id: 10,
    message: "I didn't do nothing, man. You're losing it.",
    time: "02:22 PM",
    date: "Sep 24th",
    type: "text",
    sent: false,
  },
  {
    id: 11,
    message: "Meet me at my house",
    time: "06:30 PM",
    date: "Sep 27th",
    type: "text",
    sent: true,
  },
  {
    id: 12,
    message: "🤨",
    time: "06:30 PM",
    date: "Sep 27th",
    type: "emoji",
    sent: false,
  },
  {
    id: 13,
    message: "Just do it!",
    time: "06:30 PM",
    date: "Sep 27th",
    type: "text",
    sent: true,
  },
  {
    id: 14,
    message: "Reaching in 5 minutes",
    time: "06:40 PM",
    date: "Sep 27th",
    type: "text",
    sent: false,
  },
  {
    id: 15,
    message: "Come down to the basement once you're here",
    time: "06:40 PM",
    date: "Sep 27th",
    type: "text",
    sent: true,
  },
  {
    id: 16,
    message:
      "David, this is Adrianna. I'm sorry I hurt you but please let us out!!!!",
    time: "06:51 PM",
    date: "Sep 28th",
    type: "text",
    sent: false,
  },
  {
    id: 17,
    message:
      "Let us out of here David!! Nick is hurt! Did you hit him on the head or something?",
    time: "06:54 PM",
    date: "Sep 28th",
    type: "text",
    sent: false,
  },
  {
    id: 18,
    message: "My love please ❤️ this is not funny...",
    time: "07:04 PM",
    date: "Sep 28th",
    type: "text",
    sent: false,
  },
  {
    id: 19,
    message: "David are you there?",
    time: "07:06 PM",
    date: "Sep 28th",
    type: "text",
    sent: false,
  },
] as Chat[];

const chapter3AdriannaChat = [
  {
    id: 1,
    message: "Why aren't you answering my messages?",
    time: "10:35 AM",
    date: "Sep 22, 2024",
    type: "text",
    sent: true,
  },
  {
    id: 2,
    message: "Sorry, I was in the store and had bad service!",
    time: "10:35 AM",
    date: "Sep 22, 2024",
    type: "text",
    sent: false,
  },
  {
    id: 3,
    message: "I don't like when you don't answer",
    time: "10:36 AM",
    date: "Sep 22, 2024",
    type: "text",
    sent: true,
  },
  {
    id: 4,
    message:
      "😡 Well I don't like that you're messaging me on like 3 different apps and acting like I've done something wrong!",
    time: "10:36 AM",
    date: "Sep 22, 2024",
    type: "text",
    sent: false,
  },
  {
    id: 5,
    message:
      "You're so ungrateful. I do this because I care about you and need to make sure you're safe.",
    time: "10:37 AM",
    date: "Sep 22, 2024",
    type: "text",
    sent: true,
  },
  {
    id: 6,
    message: "I know, I know. It's okay",
    time: "10:38 AM",
    date: "Sep 22, 2024",
    type: "text",
    sent: false,
  },
  {
    id: 7,
    message:
      "I love you so so so so so so much ❤️🧡💛 Tell me you love me too baby",
    time: "10:39 AM",
    date: "Sep 22, 2024",
    type: "text",
    sent: true,
  },
  {
    id: 8,
    message: "I love you too 🥰",
    time: "10:39 AM",
    date: "Sep 22, 2024",
    type: "text",
    sent: false,
  },
  {
    id: 9,
    message: "You can't dump me. I won't survive. I need you.",
    time: "02:00 PM",
    date: "Sep 24, 2024",
    type: "text",
    sent: true,
  },
  {
    id: 10,
    message: "You're being really possessive David",
    time: "02:00 PM",
    date: "Sep 24, 2024",
    type: "text",
    sent: false,
  },
  {
    id: 11,
    message: "I'll change. I promise.",
    time: "02:00 PM",
    date: "Sep 24, 2024",
    type: "text",
    sent: true,
  },
] as Chat[];

export const chapter3TextMessages = [
  {
    id: 1,
    img: "",
    name: "Nick",
    time: "07:06 PM",
    lastMessage: "David are you there?",
    number: "",
    chats: chapter3NickChat,
  },
  {
    id: 2,
    img: ADRIANNA_IMAGE,
    name: "Adrianna",
    time: "09/27/2024",
    lastMessage: "I'll change. I promise.",
    number: "",
    chats: chapter3AdriannaChat,
  },
];
