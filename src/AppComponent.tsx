import React from "react";
import Button from "./atoms/Button";
import Timer from "./atoms/Timer";
import TextInput from "./atoms/TextInput";

const AppComponent: React.FunctionComponent<{
  elapsedTime: string;
  onStart: (event: React.MouseEvent<HTMLElement>) => void;
  onPause: (event: React.MouseEvent<HTMLElement>) => void;
  onReset: (event: React.MouseEvent<HTMLElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUserRegister: (event: React.MouseEvent<HTMLElement>) => void;
  username: string;
  users: string[];
  registerDisabled: boolean;
}> = ({
  elapsedTime,
  onStart,
  onPause,
  onReset,
  onChange,
  onUserRegister,
  username,
  users,
  registerDisabled
}) => {
  return (
    <>
      <div>
        <Timer elapsedTime={elapsedTime} />
        <Button onClick={onStart}>Start</Button>
        <Button onClick={onPause}>Pause</Button>
        <Button onClick={onReset}>Reset</Button>
      </div>
      <div>
        <TextInput onChange={onChange} value={username} />
        <Button onClick={onUserRegister} disabled={registerDisabled}>Register</Button>
      </div>
      <div>
        <ul>
          {users.map(user => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AppComponent;
