import { H1 } from "../components"

export const About = () => {

  return (
    <main>
      <H1 />
      <h2>About Me</h2>
      <div className="wrapper-content-main-about">
        <div>
          <img src="../portrait.jpg" alt="Portrait"/>
        </div>
        <div>
          <p>My name is Iwana Städeli and I am a frontend developer student in Hyper Island Sweden moving back to Switzerland this summer. I am searching an internship starting october 2022.</p>
          <br />
          <p>I love to deepen my knowledge in JavaScript and in react or in another JavaScript-framework. In one of my projects I did set up an API with express and MongoDB and since then I can see myself as well wanting to know more about backend.</p>
          <br/>
          <p>With me you will get an openminded, focused and enthusiastic intern, eager to learn more.</p>
        </div>
    
      </div>
    </main>
  );
}