import { useEffect } from "react";
import { Card, H1 } from "../components";

export const Projects = ({ myProjects }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="title">
        <H1 />
      </div>
      <h2>PROJECTS</h2>
      <div className="wrapper-content-main-projects">
        <Card myProjects={myProjects} />
      </div>
      <div id="after-projects"></div>
    </main>
  );
};
