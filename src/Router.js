import { Route, Routes } from "react-router-dom";
import { Projects, Project, About} from "./pages/index"

export const Router = ({myProjects}) => {
  return (
    <Routes>
      <Route path="/" element={<Projects myProjects={myProjects}/>} />
      <Route path="/project/:id" element={<Project myProjects={myProjects}/>} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
} 