import { useRoutes } from "react-router-dom";
import { About, Home, Project, Projects } from "./pages";
import { PageTransition } from "./components/PageTransition";
import { myProjects } from "./myProjects";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects myProjects={myProjects} /> },
  { path: "/project/:id", element: <Project myProjects={myProjects} /> },
  { path: "/about", element: <About /> },
];

export const AllRoutes = () => {
  const element = useRoutes(routes);
  return <PageTransition>{element}</PageTransition>;
};
