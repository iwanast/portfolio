import { Link } from "react-router-dom"

export const Card = ({myProjects}) => {

  const content = myProjects.map((project) => { 
    if(project.id % 2 != 0){
      return(<section className="wrapper-card">
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
    } else {
      return(
        <section className="wrapper-card">
      <Link to={`/project/${project.id}`}>
        <div className="wrapper-card-content">
          {project.title && <h3 id="project-title">{project.title}</h3>}
          {project.date && <p id="project-date">{project.date}</p>}
          {project.shortDescription && <p id="short-project-description">{project.shortDescription}</p>}
          {project.toolsIcons && <span id="projects-icons">{project.toolsIcons}</span>}
        </div>
        <div className="wrapper-img">
          <img src={project.picture && project.picture} alt="Projects snapshot" />
        </div>
      </Link>
    </section>
      )
    }
  }
  );

  return(
    <>
    {content}
    </>);
}