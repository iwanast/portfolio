import { useEffect } from "react";

export const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <main>
      <h1>PORTFOLIO</h1>
      <h2>Me in a nutshell</h2>
      <div className="wrapper-content-main-about">
        <div className="home-wrapper-img">
          <img src="../avatar.png" alt="Portrait"/>
        </div>
          <div>
            <br />
          <h3>Frontend Developer Student</h3>
          <p>I love to work with people and reach goals together</p>
          <br />
          <p>Respectful, active listener and focused </p>
          <br />
          <p>Looking for an internship from 10/2022</p>
          <br />
        </div>
      </div>
    </main>
  );
}