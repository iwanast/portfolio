import { useParams } from "react-router-dom"

export const Project = ({ myProjects }) => {
 const myId = useParams().id;
  const myProject = myProjects.find((id)=>( id === myId))
  console.log(myProject)
  return(
    <div>
      <h2>Project</h2>
    </div>
  );
}