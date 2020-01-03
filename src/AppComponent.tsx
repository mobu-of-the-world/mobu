import React from "react";
import Button from "./atoms/Button";
import Timer from "./atoms/Timer";
import TextInput from "./atoms/TextInput";
import Form from "./atoms/Form";
import User from "./molecules/User";

const AppComponent: React.FunctionComponent<{
  elapsedTime: string;
  onStart: (event: React.MouseEvent<HTMLElement>) => void;
  onPause: (event: React.MouseEvent<HTMLElement>) => void;
  onReset: (event: React.MouseEvent<HTMLElement>) => void;
  onShuffle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUserRegister: (event: React.FormEvent<HTMLFormElement>) => void;
  onUserRemove: (event: React.MouseEvent<HTMLButtonElement>) => void;
  username: string;
  users: string[];
  interval: number;
  registerDisabled: boolean;
}> = ({
  elapsedTime,
  onStart,
  onPause,
  onReset,
  onShuffle,
  onUsernameChange,
  onIntervalChange,
  onUserRegister,
  onUserRemove,
  username,
  users,
  interval,
  registerDisabled
}) => {
  return (
    <>
      <div>
        <Timer elapsedTime={elapsedTime} />
        <Button onClick={onStart}>Start</Button>
        <Button onClick={onPause}>Pause</Button>
        <Button onClick={onReset}>Reset</Button>
        <Button onClick={onShuffle}>Shuffle</Button>
        <p>
          Interval(sec)
          <TextInput
            onChange={onIntervalChange}
            type="number"
            value={interval}
          />
        </p>
      </div>
      <div>
        <Form onSubmit={onUserRegister}>
          Username
          <TextInput onChange={onUsernameChange} value={username} />
          <Button type="submit" disabled={registerDisabled}>
            Register
          </Button>
        </Form>
      </div>
      <div>
        <ul>
          {users.map((user, index) => (
            <li key={user}>
              <User isDriver={index === 0} user={user} />
              <Button onClick={onUserRemove} value={user}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AppComponent;
