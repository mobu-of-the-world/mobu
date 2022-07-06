import css from "./UserProfileIcon.module.css";

interface UserProfileIconProps {
  user: string;
}

const UserProfileIcon = ({ user }: UserProfileIconProps) => (
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
