import { Avatar, Divider } from "@nextui-org/react"

const TextMessageItem = ({ img, name, time, lastMessage, onClick }: { img: string, name: string, time: string, lastMessage: string, onClick: any }) => {
  return (
    <>
      <div className="flex gap-2" onClick={onClick}>
        <Avatar src={img} />
        <div className="flex flex-col gap-1 flex-1">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-default-500">{lastMessage}</p>
        </div>
        <div>
          <p className="text-xs text-default-500">{time}</p>
        </div>
      </div>
      <Divider />
    </>
  )
}

export default TextMessageItem