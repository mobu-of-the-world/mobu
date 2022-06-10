import { GITHUB_REPOSITORY_URL } from "../common/constants";
import css from "./footer.module.css";

const Footer = () => (
  <footer className={css["footer"]}>
    rev - {""}
    <a href={`${GITHUB_REPOSITORY_URL}/tree/${APP_COMMIT_REF}`}>
      {APP_COMMIT_REF}
    </a>
  </footer>
);

export default Footer;
