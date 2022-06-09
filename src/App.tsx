import React from "react";

import { UsersProvider } from "./common/usersContexts";

import Header from "./header";
import UserList from "./userList/UserList";
import Session from "./session/Session";

import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <div className="main--container">
        <div className="main">
          <UsersProvider>
            <>
              <UserList />
              <div className="divider"></div>
              <Session />
            </>
          </UsersProvider>
        </div>
      </div>
    </>
  );
};

export default App;
