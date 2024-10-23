import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";

import { Contact } from "@/types";

const ContactItem = ({ contact }: { contact: Contact }) => {
  return (
    <Accordion selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label="Chung Miller"
        className="text-center"
        startContent={
          <Avatar isBordered color="primary" radius="lg" src={contact.img} />
        }
        title={contact.name}
      >
        {contact.number}
      </AccordionItem>
    </Accordion>
  );
};

export default ContactItem;
