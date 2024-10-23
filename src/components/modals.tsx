import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Image,
  Card,
  CardBody,
  Avatar,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import { Fragment, useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

import CallLogItem from "./call-log-item";
import TextMessageItem from "./text-message-item";
import ContactItem from "./contact-item";

import { CallLog, Contact, Note, TextMessage } from "@/types";

export const StartInvestigationModal = ({
  title,
  text1,
  text2,
}: {
  title: string;
  text1: string;
  text2: string;
}) => {
  const [isBeginDialogOpen, setIsBeginDialogOpen] = useState(true);

  return (
    <Modal backdrop="blur" isOpen={isBeginDialogOpen} placement="center">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <ModalBody>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString(text1)
                .pauseFor(500)
                .typeString("<br />" + text2)
                .start();
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onPress={() => setIsBeginDialogOpen(false)}>
            Begin Investigation
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const CallLogsModal = ({ callLogs }: { callLogs: CallLog[] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="relative col-span-6 md:col-span-1">
        <Image
          alt="Album cover"
          className="object-cover"
          src="./mobile.png"
          onClick={onOpen}
        />
      </div>
      <Modal
        backdrop="blur"
        className="h-3/4"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Phone
              </ModalHeader>
              <div className="overflow-auto">
                <ModalBody>
                  {callLogs.reduce((acc, callLog, index) => {
                    const dateDivider =
                      index === 0 || callLog.date !== callLogs[index - 1].date;

                    if (dateDivider) {
                      acc.push(
                        <div key={`date-${callLog.date}`} className="text-xs">
                          {callLog.date}
                        </div>,
                      );
                    }
                    acc.push(
                      <CallLogItem
                        key={index}
                        img={callLog.img}
                        name={callLog.name}
                        number={callLog.number}
                        time={callLog.time}
                        type={callLog.type}
                      />,
                    );

                    return acc;
                  }, [] as JSX.Element[])}
                </ModalBody>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export const TextMessagesModal = ({
  textMessages,
  appLockSet = false,
  password = "",
}: {
  textMessages: TextMessage[];
  appLockSet?: boolean;
  password?: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLocked, setIsLocked] = useState(appLockSet);
  const [passwordInput, setPasswordInput] = useState("");

  useEffect(() => {
    if (passwordInput === password) {
      setIsLocked(false);
    }
  });

  return (
    <>
      <div className="relative col-span-6 md:col-span-1">
        <Image
          alt="Album cover"
          className="object-cover"
          src="./messages.png"
          onClick={onOpen}
        />
      </div>
      {isLocked ? (
        <Modal
          backdrop="blur"
          className="h-1/2"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center">
                  App Lock
                </ModalHeader>
                <ModalBody className="flex justify-center">
                  <Input
                    endContent={
                      <FaDeleteLeft
                        className="cursor-pointer"
                        onClick={() => setPasswordInput("")}
                      />
                    }
                    style={{ textAlign: "center" }}
                    value={passwordInput}
                  />
                  <div className="h-3/4 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "1")}
                      >
                        1
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "2")}
                      >
                        2
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "3")}
                      >
                        3
                      </Button>
                    </div>
                    <div className="flex justify-between">
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "4")}
                      >
                        4
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "5")}
                      >
                        5
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "6")}
                      >
                        6
                      </Button>
                    </div>
                    <div className="flex justify-between">
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "7")}
                      >
                        7
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "8")}
                      >
                        8
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "9")}
                      >
                        9
                      </Button>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      ) : (
        <Modal
          backdrop="blur"
          className="h-3/4"
          isOpen={isOpen}
          size="lg"
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center">
                  <h4>Messages</h4>
                  <p className="text-sm font-small text-default-500">
                    No unread messages
                  </p>
                </ModalHeader>
                <ModalBody>
                  {textMessages.map((textMessage, index) => (
                    <ChatModal key={index} textMessage={textMessage} />
                  ))}
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export const ChatModal = ({ textMessage }: { textMessage: TextMessage }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="relative col-span-6 md:col-span-1 flex gap-2 flex-col cursor-pointer">
        <TextMessageItem
          img={textMessage.img}
          lastMessage={textMessage.lastMessage}
          name={textMessage.name}
          time={textMessage.time}
          onClick={onOpen}
        />
      </div>
      <Modal
        backdrop="blur"
        className="h-3/4"
        isOpen={isOpen}
        size="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col">
                <h4>{textMessage.name}</h4>
                <p className="text-sm font-small text-default-500">
                  {textMessage.number}
                </p>
              </ModalHeader>
              <div className="overflow-auto">
                <ModalBody className="text-xs">
                  {textMessage.chats.map((chat, index) => (
                    <div
                      key={index}
                      className={`flex gap-1 items-center ${chat.sent ? "justify-end" : ""}`}
                    >
                      {chat.sent ? (
                        <h4 className="text-xs text-default-500">
                          {chat.time}
                        </h4>
                      ) : (
                        <Avatar src={chat.avatar} />
                      )}
                      <Card key={index} className="max-w-80">
                        <CardBody>
                          {chat.type === "img" ? (
                            <ImageModal img={chat.message} />
                          ) : (
                            <p>{chat.message}</p>
                          )}
                        </CardBody>
                      </Card>
                      {chat.sent || (
                        <h4 className="text-xs text-default-500">
                          {chat.time}
                        </h4>
                      )}
                    </div>
                  ))}
                </ModalBody>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export const NotesModal = ({
  notes,
  password,
}: {
  notes: Note[];
  password: string;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLocked, setIsLocked] = useState(true);
  const [passwordInput, setPasswordInput] = useState("");

  useEffect(() => {
    if (passwordInput === password) {
      setIsLocked(false);
    }
  });

  return (
    <>
      <div className="relative col-span-6 md:col-span-1">
        <Image
          alt="Album cover"
          className="object-cover"
          src="./note.png"
          onClick={onOpen}
        />
      </div>
      {isLocked ? (
        <Modal
          backdrop="blur"
          className="h-1/2"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center">
                  App Lock
                </ModalHeader>
                <ModalBody className="flex justify-center">
                  <Input
                    style={{ textAlign: "center" }}
                    value={passwordInput}
                  />
                  <div className="h-3/4 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "1")}
                      >
                        1
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "2")}
                      >
                        2
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "3")}
                      >
                        3
                      </Button>
                    </div>
                    <div className="flex justify-between">
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "4")}
                      >
                        4
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "5")}
                      >
                        5
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "6")}
                      >
                        6
                      </Button>
                    </div>
                    <div className="flex justify-between">
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "7")}
                      >
                        7
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "8")}
                      >
                        8
                      </Button>
                      <Button
                        className="rounded-full h-20 w-20 flex justify-center items-center"
                        onClick={() => setPasswordInput((prev) => prev + "9")}
                      >
                        9
                      </Button>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      ) : (
        <Modal
          backdrop="blur"
          className="h-3/4"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center bg-yellow-400">
                  Notes
                </ModalHeader>
                <div className="overflow-auto">
                  <ModalBody>
                    <div className="grid grid-cols-4 md:grid-cols-2 gap-4 md:gap-4">
                      {notes.map((note, index) => (
                        <NoteModel key={index} note={note} />
                      ))}
                    </div>
                  </ModalBody>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

const NoteModel = ({ note }: { note: Note }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="max-w-[400px] m-2 cursor-pointer">
        <div role="button" onClick={onOpen}>
          <CardHeader className="flex gap-3 bg-yellow-400">
            <p className="text-small text-default-500">{note.title}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{note.displayText}</p>
          </CardBody>
        </div>
      </Card>
      <Modal
        backdrop="blur"
        className="h-3/4"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center bg-yellow-400">
                {note.title}
              </ModalHeader>
              <div className="overflow-auto">
                <ModalBody>
                  <p>
                    {note.data.split("\n").map((line, index) => (
                      <Fragment key={index}>
                        {line}
                        <br />
                      </Fragment>
                    ))}
                  </p>
                </ModalBody>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export const ContactsModal = ({ contacts }: { contacts: Contact[] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="relative col-span-6 md:col-span-1">
        <Image
          alt="Album cover"
          className="object-cover"
          src="./user-group.png"
          onClick={onOpen}
        />
      </div>
      <Modal
        backdrop="blur"
        className="h-3/4"
        isOpen={isOpen}
        size="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                <h4>Contacts</h4>
              </ModalHeader>
              <ModalBody>
                <p className="text-sm font-small text-default-500">
                  Favourites
                </p>
                {contacts
                  .filter((contact) => contact.favourite)
                  .map((contact, index) => (
                    <ContactItem key={index} contact={contact} />
                  ))}
                <p className="text-sm font-small text-default-500">Contacts</p>
                {contacts
                  .filter((contact) => !contact.favourite)
                  .map((contact, index) => (
                    <ContactItem key={index} contact={contact} />
                  ))}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export const SmartHomeModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="relative col-span-6 md:col-span-1">
        <Image
          alt="Album cover"
          className="object-cover"
          src="./smart-home.png"
          onClick={onOpen}
        />
      </div>
      <Modal
        backdrop="blur"
        className="h-3/4"
        isOpen={isOpen}
        size="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                <h4>Smart Home</h4>
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-4 md:grid-cols-2 gap-4 md:gap-4">
                  <Card className="max-w-[400px] m-2">
                    <div onClick={onOpen} role="button">
                      <CardBody className="flex flex-col items-center gap-3">
                        <p className="text-small">Dog Feeder</p>
                        <p className="text-small text-default-500">On</p>
                      </CardBody>
                    </div>
                  </Card>
                  <Card className="max-w-[400px] m-2">
                    <div onClick={onOpen}>
                      <CardBody className="flex flex-col items-center gap-3">
                        <p className="text-small">Basement Door</p>
                        <p className="text-small text-default-500">Locked</p>
                      </CardBody>
                    </div>
                  </Card>
                  <Card className="max-w-[400px] m-2">
                    <div onClick={onOpen} role="button">
                      <CardBody className="flex flex-col items-center gap-3">
                        <p className="text-small">Water Pump</p>
                        <p className="text-small text-default-500">On</p>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const ImageModal = ({ img }: { img: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Image
        className="cursor-pointer"
        height={100}
        src={img}
        onClick={onOpen}
      />
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>{() => <Image src={img} />}</ModalContent>
      </Modal>
    </>
  );
};
