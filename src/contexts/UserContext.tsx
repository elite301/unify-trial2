import { useGetInvites } from "hooks/useGetInvites";
import { useGetTeamMembers } from "hooks/useGetTeamMembers";
import React, { createContext } from "react";
import { UserContextType } from "types/UserContextTypes";

const UserContext = createContext<UserContextType>({} as UserContextType);

const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const {
    data: teamMembers,
    loading: teamMemberLoading,
    error: teamMemberError,
  } = useGetTeamMembers();
  const {
    data: invites,
    loading: inviteLoading,
    error: inviteError,
  } = useGetInvites();

  return (
    <UserContext.Provider
      value={{
        administrators: {
          teamMembers: teamMembers.filter((e) => e.role === "Administrator"),
          invites: invites.filter((e) => e.role === "Administrator"),
        },
        standards: {
          teamMembers: teamMembers.filter((e) => e.role === "Standard"),
          invites: invites.filter((e) => e.role === "Standard"),
        },
        loading: teamMemberLoading || inviteLoading,
        error: teamMemberError || inviteError
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
