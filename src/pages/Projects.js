import { useEffect } from "react";
import { Card } from "../components/index";

export const Projects = ({ myProjects}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <h1>PORTFOLIO</h1>
      <h2>Projects</h2>
      <div className="wrapper-content-main-projects">
        <Card myProjects={myProjects} />
      </div>
    </main>
  );
}