import { Button, Card, CardBody, Code, Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { User } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "@/App";
import Typewriter from 'typewriter-effect';

export default function IndexPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h4 className="text-medium font-medium">Peek a Case</h4>
        <Code className="text-medium font-medium">Chapter 1: Gone Girl</Code>
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
      <section className="flex flex-col flex-1 items-center gap-4 py-8 md:py-10">
        <Card className="w-96">
          <CardBody className="h-[100px]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.changeDelay(50)
                  .typeString('A missing girl case is assigned to you. Your mission, should you choose to accept it, is to find the missing girl!')
                  .start();
              }}
            />
          </CardBody>
        </Card>
        <Input
          type="text"
          variant="bordered"
          className="max-w-xs"
          placeholder="The name is Bond?"
          value={currentUser}
          onChange={(e) => setCurrentUser(e.target.value)}
        />
        <Button
          color="success"
          onClick={() => navigate("/chapter1", {replace: true})}
          disabled={!currentUser}
          className="disabled:cursor-not-allowed"
        >
          Start the mission
        </Button>
      </section>
    </div>
  );
}
