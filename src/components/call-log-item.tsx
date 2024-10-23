import { Avatar, Divider } from "@nextui-org/react";

const CallLogItem = ({
  img,
  name,
  type,
  time,
  number,
}: {
  img: string;
  name: string;
  type: string;
  time: string;
  number: string;
}) => {
  return (
    <>
      <div className="flex gap-2">
        <Avatar src={img} />
        <div className="flex flex-col gap-1 flex-1">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-default-500">{number}</p>
        </div>
        <div className="text-end">
          <p className="text-xs text-default-500">{time}</p>
          <p className="text-xs text-default-500">{type}</p>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default CallLogItem;
