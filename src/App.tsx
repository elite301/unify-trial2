import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserProvider } from "contexts/UserContext";
import { Test } from "components/Test";

function App() {
  return (
    <UserProvider>
      <Test />
    </UserProvider>
  );
}

export default App;
