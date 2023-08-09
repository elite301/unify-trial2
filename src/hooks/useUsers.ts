import { useContext } from "react";
import { UserContext } from "contexts/UserContext";

const useUsers = () => {
  const context = useContext(UserContext);
  return context;
}

export default useUsers;