import { H1 } from "../components"
import portrait from "./../assets/images/portrait.jpg"

export const About = () => {

  return (
    <main>
      <H1 />
      <h2>About Me</h2>
      <div className="wrapper-content-main-about">
        <div>
          <img src={portrait} alt="Portrait"/>
        </div>
        <div>
          <p>I am a newly turned frontend developer from Hyper Island Sweden, living in Winterthur Switzerland. I am open for a junior position starting now.</p>
          <br />
          <p>I love to deepen my knowledge in JavaScript, React.js or in another JavaScript-framework. In one of my projects I did set up an API with express and MongoDB and since then I can see myself as well wanting to know more about backend.</p>
          <br/>
          <p>With me you will get an openminded, focused and enthusiastic junior, eager to learn more.</p>
        </div>
    
      </div>
    </main>
  );
}