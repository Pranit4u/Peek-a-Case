import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Card, Divider, User } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { StartInvestigationModal } from "@/components/modals";
import { RightArrowIcon } from "@/components/icons";
import FindAdrianna from "@/components/find-adriana-screen";
import { CurrentUserContext } from "@/App";

export default function WonPage() {
  const navigate = useNavigate();
  const { currentUser, currentPath, setCurrentPath } = useContext(CurrentUserContext);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (currentPath !== "chapter3") {
      navigate("/");
    }
  });


  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h4 className="text-medium font-medium">Peek a Case</h4>
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
        <Card className="p-4 text-center">Hogya</Card>
      </section>
    </div>
  );
}
