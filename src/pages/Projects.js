import { AiOutlineHtml5 as Html5Icon } from "react-icons/ai";
import { DiCss3 as CssIcon, DiReact as ReactIcon, DiSass as SassIcon } from "react-icons/di";
import { IoLogoJavascript as JavascriptIcon } from "react-icons/io";
import { SiMongodb as MongodbIcon } from "react-icons/si";


export const Projects = () => {

  const myProjects = [
    {
      id : 101,
      title : "Pomodoro",
      date : 2021.09,
      description : "First project in HyperIsland where I started to use starting to use JavaScript",
      toolsIcons : [<Html5Icon/>, <SassIcon/>, <JavascriptIcon/>],
      deployedlink : "https://iwanast.github.io/pomodoro/",
      githubLink : "https://github.com/iwanast/pomodoro",
      picture : ""

    },
    {
      id : 201,
      title : "Marvel Quiz",
      date : 2021.11,
      description : "Third project in HyperIsland where we worked as a group to deepen our knowledge of HTML, SASS, JavaScript and did get to work with LocalStorage and Firestore",
      toolsIcons : [<Html5Icon/>, <SassIcon/>, <JavascriptIcon/>, ],
      deployedlink : "https://iwanast.github.io/pomodoro/",
      githubLink : "https://github.com/iwanast/pomodoro",
      picture : ""

    }
  ]

  return (
    <main>
      <h1>PORTFOLIO Iwana Städeli</h1>
      <h2>Projects</h2>
    </main>
  );
}