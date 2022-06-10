import type { FC } from "react";
import css from "./UserProfileIcon.module.css";

type UserProfileIconProps = {
  user: string;
};

const UserProfileIcon: FC<UserProfileIconProps> = ({ user }) => (
  <div className={css["user-profile-icon"]}>
    <img
      draggable={false}
      src={`https://github.com/${user}.png`}
      onError={(e: React.BaseSyntheticEvent) => {
        e.target.onerror = null;
        e.target.src = "/images/default-profile-icon.png";
      }}
    />
  </div>
);

export default UserProfileIcon;
