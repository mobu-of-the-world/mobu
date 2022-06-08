import React, { useContext } from "react";
import { getStorageUsers, setStorageUsers } from "./storage";

const usersContext = React.createContext<string[]>([]);
const setPersistedUsersContext = React.createContext<
  (newUsers: string[]) => void
>(() => undefined);

export const UsersProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [users, setUsers] = React.useState<string[]>(
    JSON.parse(getStorageUsers())
  );
  const setPersistedUsers = (newUsers: string[]) => {
    setUsers(newUsers);
    setStorageUsers(newUsers);
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
