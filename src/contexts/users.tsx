import React, { useContext } from "react";
import { getCookieUsers, setCookieUsers } from "../utils/cookie";

const usersContext = React.createContext<string[]>([]);
const setPersistedUsersContext = React.createContext<
  (newUsers: string[]) => void
>(() => undefined);

export const UsersProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [users, setUsers] = React.useState<string[]>(
    JSON.parse(getCookieUsers())
  );
  const setPersistedUsers = (newUsers: string[]) => {
    setUsers(newUsers);
    setCookieUsers(newUsers);
  };

  return (
    <usersContext.Provider value={users}>
      <setPersistedUsersContext.Provider value={setPersistedUsers}>
        {children}
      </setPersistedUsersContext.Provider>
    </usersContext.Provider>
  );
};

export const useUsers = () => useContext(usersContext);
export const useSetPersistedUsers = () => useContext(setPersistedUsersContext);
