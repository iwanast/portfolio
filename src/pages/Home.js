import { useEffect } from "react";
import { H1 } from "../components"

export const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <main>
      <H1 />
      <h2>Me in a nutshell</h2>
      <div className="wrapper-content-main-about">
        <div className="home-wrapper-img">
          <img src="../avatar.png" alt="Portrait"/>
        </div>
        <div>
          <h3>Frontend Developer Student</h3>
          <p>Love to work with people and reach goals together</p>
          <p>Respectful, active listener and focused </p>
          <p>Looking for a junior position from april/2023</p>
        </div>
      </div>
    </main>
  );
}