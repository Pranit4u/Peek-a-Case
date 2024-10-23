import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider, User } from "@nextui-org/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StartInvestigationModal } from "@/components/modals";
import { RightArrowIcon } from "@/components/icons";
import FindAdriana from "@/components/find-adriana-screen";
import { CurrentUserContext } from "@/App";

export default function Chapter3Page() {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (!answer) {
      return;
    }
    if (answer.toLowerCase().trim().includes("basement")) {
      alert("Mission accomplished");
      navigate("/");
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
          placeholder="Find Adriana"
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
          text1="The police search Adriana and David's house and see he fled in a rush, leaving behind his phone. You've proved to be a great detective, so they ask you to search for clues to Adriana's whereabouts."
          text2="Search through David's phone to find Adriana."
          title="Find Adriana"
        />
        <FindAdriana />
      </section>
    </div>
  );
}
