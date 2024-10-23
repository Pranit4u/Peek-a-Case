import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

import { UserContext } from "./types";

import IndexPage from "@/pages/index";
import Chapter1Page from "@/pages/chatper1";
import Chapter2Page from "@/pages/chapter2";
import Chapter3Page from "@/pages/chapter3";
import WonPage from "./pages/WonPage";

export const CurrentUserContext = createContext({} as UserContext);

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [currentPath, setCurrentPath] = useState("");
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentPath,
        setCurrentPath,
      }}
    >
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<Chapter1Page />} path="/chapter1" />
        <Route element={<Chapter2Page />} path="/chapter2" />
        <Route element={<Chapter3Page />} path="/chapter3" />
        <Route element={<WonPage />} path="/won" />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
