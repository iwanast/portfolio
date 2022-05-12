import { useEffect } from "react";
import { AiOutlineHtml5 as Html5Icon } from "react-icons/ai";
import { DiCss3 as CssIcon, DiReact as ReactIcon, DiSass as SassIcon } from "react-icons/di";
import { IoLogoJavascript as JavascriptIcon } from "react-icons/io";
import { SiMongodb as MongodbIcon, SiFirebase as FirebaseIcon} from "react-icons/si";
import { Router } from "./Router"
import { Header, Footer } from "./components/index"

function App() {

  const myProjects = [
    {
      id : 1,
      title : "POMODORO",
      date : 2021.09,
      shortDescription : "First project in HyperIsland where I started to use JavaScript",
      longDescription : "First project in HyperIsland where I started to use JavaScript",
      toolsIcons : [<Html5Icon/>, <SassIcon/>, <JavascriptIcon/>],
      deployedlink : "https://iwanast.github.io/pomodoro/",
      githubLink : "https://github.com/iwanast/pomodoro",
      picture : "../pomodoro.png"
    },
    {
      id : 2,
      title : "MARVEL QUIZ",
      date : 2021.11,
      shortDescription : "Third project in HyperIsland where we worked as a group to deepen our knowledge of HTML, SASS, JavaScript and did get to work with LocalStorage and Firestore",
      longDescription : "Third project in HyperIsland where we worked as a group to deepen our knowledge of HTML, SASS, JavaScript and did get to work with LocalStorage and Firestore",
      toolsIcons : [<Html5Icon/>, <SassIcon/>, <JavascriptIcon/>, <FirebaseIcon />],
      deployedlink : "iwanast.github.io/marvel-quiz/",
      githubLink : "https://github.com/iwanast/marvel-quiz",
      picture : "../marvel.png"
    }
  ]

  useEffect(()=>{
    console.log("%cIwanas portfolio", "color:blue");
    console.log("%ce-mail: iwana.stadeli@hyperisland.se", "color:#BAC1FF");
  }, []);

  return (
    <>
      <Header />
      <Router myProjects={myProjects}/>
      <Footer />
    </>
  );
}

export default App;
