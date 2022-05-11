import { Route, Routes } from "react-router-dom";
import { Projects, Project, About} from "./pages/index"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
} 