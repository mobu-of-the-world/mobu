import { FC } from "react";
import "./UserProfileIcon.css";

type UserProfileIconProps = {
  user: string;
};

const UserProfileIcon: FC<UserProfileIconProps> = ({ user }) => (
  <div className={"user-profile-icon"}>
    <img
      src={`https://github.com/${user}.png`}
      onError={(e: React.BaseSyntheticEvent) => {
        e.target.onerror = null;
        e.target.src = "/images/default-profile-icon.png";
      }}
    />
  </div>
);

export default UserProfileIcon;
