import React from "react";
import { UserProvider } from "contexts/UserContext";
import { UserAndInviteList } from "pages/UserAndInviteList";

function App() {
  return (
    <UserProvider>
      <UserAndInviteList />
    </UserProvider>
  );
}

export default App;
