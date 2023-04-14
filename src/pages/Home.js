import { useEffect } from "react";
import { H1 } from "../components"
import avatar from "./../assets/images/avatar.png"

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
          <img src={avatar} alt="My avatar"/>
        </div>
        <div>
          <h3>Frontend Developer</h3>
          <p>Love to work with people and reach goals together</p>
          <p>Respectful, active listener and focused</p>
          <p>Open for a junior developer position</p>
        </div>
      </div>
    </main>
  );
}