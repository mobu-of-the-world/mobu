import "./footer.css";

const Footer = () => (
  <footer className="footer">
    rev - {""}
    <a
      href={`https://github.com/mobu-of-the-world/mobu/tree/${APP_COMMIT_REF}`}
    >
      {APP_COMMIT_REF}
    </a>
  </footer>
);

export default Footer;
