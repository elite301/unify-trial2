import { getInvites, getTeamMembers } from "apis/users";
import React, { createContext, useEffect, useState } from "react";
import { Invite } from "types/Invite";
import { UserContextType } from "types/UserContextTypes";
import { TeamMember } from "types/UserTypes";

const initialState: UserContextType = {
  teamMembers: [],
  invites: []
}

const UserContext = createContext<UserContextType>({} as UserContextType);

const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getTeamMembers().then((data) => {
      setState((state) => ({ ...state, teamMembers: data as TeamMember[] }));
    });
    getInvites().then((data) => {
      setState((state) => ({ ...state, invites: data as Invite[] }));
    });
  }, []);

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
