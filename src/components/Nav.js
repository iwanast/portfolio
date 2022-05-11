import { Link } from "react-router-dom";

export const Nav = () => {

  return(
    <nav>
      <div id="logo-name"><Link to="./about">IWANA STÄDELI</Link></div>
      <ul>
        <li>
          <Link to="./">PROJECTS</Link>
        </li>
        <li> 
          <Link to="./about">ABOUT ME</Link>
        </li>
      </ul>
    </nav>
  );
}