import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider, User } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StartInvestigationModal } from "@/components/modals";
import { RightArrowIcon } from "@/components/icons";
import FindAdrianna from "@/components/find-adriana-screen";
import { CurrentUserContext } from "@/App";

export default function Chapter3Page() {
  const navigate = useNavigate();
  const { currentUser, currentPath, setCurrentPath } = useContext(CurrentUserContext);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (currentPath !== "chapter2") {
      navigate("/");
    }
  });

  const handleSubmit = () => {
    if (!answer) {
      return;
    }
    if (answer.toLowerCase().trim().includes("basement")) {
      alert("Mission accomplished");
      setCurrentPath("chapter3");
      navigate("/won");
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
          placeholder="Find Adrianna"
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
          text1="The police search Adrianna and David's house and see he fled in a rush, leaving behind his phone. You've proved to be a great detective, so they ask you to search for clues to Adrianna's whereabouts."
          text2="Search through David's phone to find Adrianna. Submit the location where you think she is in the top box."
          title="Find Adrianna"
        />
        <FindAdrianna />
      </section>
    </div>
  );
}
