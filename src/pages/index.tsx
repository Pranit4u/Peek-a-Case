import { Button, Card, CardBody, Code, Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { User } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Typewriter from "typewriter-effect";

import { CurrentUserContext } from "@/App";

export default function IndexPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, setCurrentPath } = useContext(CurrentUserContext);

  useEffect(() => {
    setCurrentPath("");
  });

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h4 className="text-medium font-medium">Peek a Case</h4>
        <Code className="text-medium font-medium">Chapter 1: Gone Girl</Code>
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
      <section className="flex flex-col flex-1 items-center gap-4 py-8 md:py-10">
        <Card className="w-96">
          <CardBody className="h-[100px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString(
                    "A missing girl case is assigned to you. Your mission, should you choose to accept it, is to find the missing girl!",
                  )
                  .start();
              }}
            />
          </CardBody>
        </Card>
        <Input
          className="max-w-xs"
          placeholder="The name is Bond?"
          type="text"
          value={currentUser}
          variant="bordered"
          onChange={(e) => setCurrentUser(e.target.value)}
        />
        <Button
          className="disabled:cursor-not-allowed"
          color="success"
          disabled={!currentUser}
          onClick={() => {
              setCurrentPath("index")
              navigate("/chapter1", { replace: true });
          }}
        >
          Start the mission
        </Button>
      </section>
    </div>
  );
}
