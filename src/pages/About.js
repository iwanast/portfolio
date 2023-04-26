import { H1 } from "../components";
import portrait from "./../assets/images/Selfy_klein.png";

export const About = () => {
  return (
    <main>
      <H1 />
      <h2>About Me</h2>
      <div className="wrapper-content-main-about">
        <div>
          <img src={portrait} alt="Portrait" />
        </div>
        <div>
          <p>
            I am a newly graduated Frontend Developer from Hyper Island Sweden,
            currently residing in Winterthur, Switzerland. I am actively seeking
            a junior position in this field.
          </p>
          <br />
          <p>
            I love to deepen my knowledge of JavaScript, React.js or other
            JavaScript frameworks. In one of my previous projects, I
            successfully set up an API with Express and MongoDB. This experience
            has also sparked my curiosity about backend development.
          </p>
          <br />
          <p>
            With me you will get an open-minded, focused and enthusiastic junior
            developer, which values continuous learning and growth.
          </p>
        </div>
      </div>
    </main>
  );
};
