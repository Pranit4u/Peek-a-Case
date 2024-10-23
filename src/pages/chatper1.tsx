import { CurrentUserContext } from "@/App";
import { FindPhoneOwner } from "@/components/find-phone-owner-screen";
import { RightArrowIcon } from "@/components/icons";
import { StartInvestigationModal } from "@/components/modals";
import { Button, Input, Tooltip, User } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Chapter1Page() {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (!answer) {
      return;
    }
    if (answer.toLowerCase().trim() === "adrianna") {
      alert("Investigation succeeded");
      navigate("/chapter2");
    } else {
      alert("Mission failed");
      navigate("/");
    }
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h4 className="text-medium font-medium">Peek a Case</h4>
        <Tooltip
          isOpen={showTooltip}
          onOpenChange={(open) => setShowTooltip(open)}
          placement="left"
          showArrow
          content="Submit your answer here"
        >
          <Input
            type="text"
            variant="bordered"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="max-w-xs"
            placeholder="Find Phone Owner"
            endContent={
              <Button size="sm" onClick={handleSubmit}>
                <RightArrowIcon />
              </Button>
            }
          />
        </Tooltip>
        <User
          name={currentUser || "..."}
          description="Private detective"
          avatarProps={{
            src: '/searcher.png',
            isBordered: true
          }}
        />
      </div>
      <Divider />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 flex-1">
        <StartInvestigationModal title="Find Phone Owner" text1="You find a lost phone." text2="Find the owner's name of the phone. Submit your answer in the box at top." />
        <FindPhoneOwner />
      </section>
    </div>
  );
}