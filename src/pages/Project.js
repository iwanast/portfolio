import { useParams, Link } from "react-router-dom"

export const Project = ({ myProjects }) => {
 const myId = parseInt(useParams().id);
  const project = myProjects.find(project => ( project.id === myId))
  console.log(project)

return (<main>
  <h1>PORTFOLIO</h1>
  {project.longDescription.title && <h2 id="project-title">Project: {project.longDescription.title}</h2>}      <div className="wrapper-content-main-project">
        <section className="wrapper-card">
        <div className="wrapper-img">
          <img src={project.picture && project.picture} alt="Projects snapshot" />
        </div>
        <div className="wrapper-card-content">
          {project.longDescription && <h3>Timeframe</h3>}
          {project.longDescription && <p>{project.longDescription.timeframe}, presentation {project.date} - <a href={project.githubLink}><i className="fab fa-github"></i></a> and  <a href={project.deployedLink}>Live</a> </p>} 
          {project.longDescription && <h3>Brief</h3>}
          {project.longDescription && <p>{project.longDescription.brief}</p>}
          {project.longDescription && <h3>Description</h3>}
          {project.longDescription && <p>{project.longDescription.description}</p>}
          {project.longDescription && <h3>Learnings</h3>}
          {project.longDescription && <p>{project.longDescription.learnings}</p>}
          {project.toolsIcons && <h3 id="projects-icons">Tools</h3>}
          {project.toolsIcons && <span id="projects-icons">{project.toolsIcons}</span>}
        </div>
        <Link to="./projects">Other projects</Link>
    </section>
    </div>
    </main>)
}