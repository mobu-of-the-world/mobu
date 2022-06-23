import { FunctionComponent } from "react";

import { UsersProvider } from "./common/usersContexts";

import Header from "./header";
import UserList from "./userList/UserList";
import Session from "./session/Session";
import Footer from "./footer";

import css from "./App.module.css";

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <div className={css["main--container"]}>
        <div className={css["main"]}>
          <UsersProvider>
            <>
              <UserList />
              <div className={css["divider"]}></div>
              <Session />
            </>
          </UsersProvider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
