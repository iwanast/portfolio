import { Route, Routes } from "react-router-dom";
import { Projects, Project, About, Home } from "./pages/index";

export const Router = ({ myProjects }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects myProjects={myProjects} />} />
      <Route
        path="/project/:id"
        element={<Project myProjects={myProjects} />}
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
