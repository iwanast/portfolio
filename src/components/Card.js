import { Link } from "react-router-dom"

export const Card = ({myProjects}) => {

  const content = myProjects.map((project) => { 
      return (<section className="wrapper-card">
      <Link to={`/project/${project.id}`}>
        <div className="wrapper-img">
          <img src={project.picture && project.picture} alt="Projects snapshot" />
        </div>
        <div className="wrapper-card-content">
          {project.title && <h3 id="project-title">{project.title}</h3>}
          {project.date && <p id="project-date">{project.date}</p>}
          {project.shortDescription && <p id="short-project-description">{project.shortDescription}</p>}
          {project.toolsIcons && <span id="projects-icons">{project.toolsIcons}</span>}
        </div>
      </Link>
    </section>)
    }
  );

  return(
    <>
    {content}
    </>);
}