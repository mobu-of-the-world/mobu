import { createContext, ReactElement, useContext, useState } from "react";
import { getStorageUsers, setStorageUsers } from "./storage";

const usersContext = createContext<string[]>([]);
const setPersistedUsersContext = createContext<(newUsers: string[]) => void>(
  () => undefined,
);

export const UsersProvider = ({ children }: { children: ReactElement }) => {
  const [users, setUsers] = useState<string[]>(getStorageUsers());
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
