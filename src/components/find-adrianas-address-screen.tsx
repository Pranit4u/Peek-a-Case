import { Card, CardBody } from "@nextui-org/react";
import { FaBatteryThreeQuarters, FaWifi } from "react-icons/fa6";

import { CallLogsModal, NotesModal, TextMessagesModal } from "./modals";

import { chapter2TextMessages } from "@/data/chats";
import { chapter2CallLogs } from "@/data/callLogs";
import { chapter2Notes } from "@/data/notes";

const FindAdriannasAddress = () => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-1/2 h-full"
      shadow="sm"
    >
      <CardBody className="p-0">
        <div className="bg-default-500 dark:bg-default-100/50 text-white py-2 px-4 flex justify-end gap-4">
          <FaWifi />
          <FaBatteryThreeQuarters />
        </div>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center p-4">
          <CallLogsModal callLogs={chapter2CallLogs} />
          <NotesModal notes={chapter2Notes} password="9119" />
          <TextMessagesModal textMessages={chapter2TextMessages} />
        </div>
      </CardBody>
    </Card>
  );
};

export default FindAdriannasAddress;
