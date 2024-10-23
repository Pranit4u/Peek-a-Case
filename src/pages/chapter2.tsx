import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider, User } from "@nextui-org/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StartInvestigationModal } from "@/components/modals";
import { RightArrowIcon } from "@/components/icons";
import FindAdrianasAddress from "@/components/find-adrianas-address-screen";
import { CurrentUserContext } from "@/App";

export default function Chapter2Page() {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (!answer) {
      return;
    }
    if (answer.toLowerCase() === "456 freedom ave") {
      alert("Investigation succeeded");
      navigate("/chapter3");
    } else {
      alert("Mission failed");
      navigate("/");
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h4 className="text-medium font-medium">Peek a Case</h4>
        <Input
          className="max-w-xs"
          endContent={
            <Button size="sm" onClick={handleSubmit}>
              <RightArrowIcon />
            </Button>
          }
          placeholder="Find Adriana's address"
          type="text"
          value={answer}
          variant="bordered"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <User
          avatarProps={{
            src: "/searcher.png",
            isBordered: true,
          }}
          description="Private detective"
          name={currentUser || "..."}
        />
      </div>
      <Divider />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 flex-1">
        <StartInvestigationModal
          text1="One of the tech store employees rushes out looking for Adriana. You mention her name, so they give you her fixed phone."
          text2="Find out where Adriana lives? Submit the address in the box at top"
          title="Find Adriana's address"
        />
        <FindAdrianasAddress />
      </section>
    </div>
  );
}
