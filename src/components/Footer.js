import { pageLinks } from "../data";
import { iconLinks } from "../data";
export default function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(({ id, href, text }) => {
          return (
            <li key={id}>
              <a
                href={href}
                className="footer-link"
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {iconLinks.map(({ id, icon, href }) => {
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}
