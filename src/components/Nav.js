import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <div id="logo-name">
        <Link to="./">
          IWANA <span className="unbreakable">STÄD<span className="title-letter">E</span>LI&nbsp;</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="./projects">PROJECTS</Link>
        </li>
        <li>
          <Link to="./about">ABOUT ME</Link>
        </li>
      </ul>
    </nav>
  );
};
