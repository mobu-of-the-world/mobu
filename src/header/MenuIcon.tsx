import css from "./MenuIcon.module.css";

const MenuIcon = () => {
  return (
    <div className={css.menuicon}>
      <span className={css["menuicon--line"]}></span>
      <span className={css["menuicon--line"]}></span>
      <span className={css["menuicon--line"]}></span>
    </div>
  );
};

export default MenuIcon;
