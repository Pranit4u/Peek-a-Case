import { CurrentUserContext } from "@/App";
import FindAdriana from "@/components/find-adriana-screen";
import { RightArrowIcon } from "@/components/icons";
import { StartInvestigationModal } from "@/components/modals";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider, User } from "@nextui-org/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h4 className="text-medium font-medium">Peek a Case</h4>
        <Input
          type="text"
          variant="bordered"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="max-w-xs"
          placeholder="Find Adriana"
          endContent={
            <Button size="sm" onClick={handleSubmit}>
              <RightArrowIcon />
            </Button>
          }
        />
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
        <StartInvestigationModal
          title="Find Adriana"
          text1="The police search Adriana and David's house and see he fled in a rush, leaving behind his phone. You've proved to be a great detective, so they ask you to search for clues to Adriana's whereabouts."
          text2="Search through David's phone to find Adriana." />
        <FindAdriana />
      </section>
    </div>
  );
}
