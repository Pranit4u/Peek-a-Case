import { Card, CardBody } from "@nextui-org/react";
import { FaBatteryThreeQuarters, FaWifi } from "react-icons/fa6";

import {
  CallLogsModal,
  ContactsModal,
  // SmartHomeModal,
  TextMessagesModal,
} from "./modals";

import { chapter3CallLogs } from "@/data/callLogs";
import { chapter3TextMessages } from "@/data/chats";
import { chapter3Contacts } from "@/data/contacts";

const FindAdrianna = () => {
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
          <CallLogsModal callLogs={chapter3CallLogs} />
          <ContactsModal contacts={chapter3Contacts} />
          <TextMessagesModal
            appLockSet={true}
            password="19145"
            textMessages={chapter3TextMessages}
          />
          {/* <SmartHomeModal /> */}
        </div>
      </CardBody>
    </Card>
  );
};

export default FindAdrianna;
