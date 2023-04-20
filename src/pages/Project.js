import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { H1 } from "../components"

export const Project = ({ myProjects }) => {
 const myId = parseInt(useParams().id);
  const project = myProjects.find(project => ( project.id === myId))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

return (
  <main>
    <H1 />
    {project.longDescription.title && <h2 id="project-title">Project: {project.longDescription.title}</h2>}      
    <div className="wrapper-content-main-project">
      <section>
        <div className="wrapper-img">
          <img src={project.picture && project.picture} alt="Projects snapshot" />
        </div>
        <div className="wrapper-card-content">
          {project.githubLink && <a className="link-sources" href={project.githubLink}><i className="fab fa-github"></i> GitHub</a>}
          {project.deployedLink && <a className="link-sources" href={project.deployedLink}>LIVE</a>}
          {project.date && <h3>Timeframe</h3>}
          {project.date && <p>{project.longDescription.timeframe}, presentation {project.date}</p>}
          {project.longDescription && <h3>Brief</h3>}
          {project.longDescription && <p>{project.longDescription.brief}</p>}
          {project.longDescription && <h3>Description</h3>}
          {project.longDescription && <p>{project.longDescription.description}</p>}
          {project.longDescription && <h3>Learnings</h3>}
          {project.longDescription && <p>{project.longDescription.learnings}</p>}
          {project.toolsIcons && <h3>Tools</h3>}
          {project.toolsIcons && <span id="projects-icons">{project.toolsIcons}</span>}
        </div>
      </section>
    </div>
    <div className="wrapper-link">
      <Link to="/projects">OTHER PROJECTS</Link>
    </div>
  </main>)
}