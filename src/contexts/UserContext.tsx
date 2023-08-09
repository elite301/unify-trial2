import React, { createContext, useState } from "react";
import { UserContextType } from "types/UserContextTypes";
import sample from "json/sample.json";

const initialState: UserContextType = sample as UserContextType;

const UserContext = createContext<UserContextType>({} as UserContextType);

const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state] = useState(initialState);

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
