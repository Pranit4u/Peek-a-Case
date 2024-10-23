import { Contact } from "@/types";
import { ADRIANA_IMAGE } from "@/utils/contants";

export const chapter3Contacts = [
  {
    id: 1,
    name: "Dad",
    img: "",
    number: "865-55-0143",
    favourite: false,
  },
  {
    id: 2,
    name: "Nick",
    img: "",
    number: "515-555-0187",
    favourite: false,
  },
  {
    id: 3,
    name: "Reminder",
    img: "",
    number: "19145",
    favourite: false,
  },
  {
    id: 4,
    name: "My Adriana 💔",
    img: ADRIANA_IMAGE,
    number: "973-555-0173",
    favourite: true,
  },
] as Contact[];
