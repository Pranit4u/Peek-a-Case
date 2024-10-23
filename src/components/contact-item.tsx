import { Contact } from "@/types"
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react"

const ContactItem = ({contact}: {contact: Contact}) => {
  return (
    <Accordion selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label="Chung Miller"
        startContent={
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src={contact.img}
          />
        }
        title={contact.name}
        className="text-center"
      >
        {contact.number}
      </AccordionItem>
    </Accordion>
  )
}

export default ContactItem