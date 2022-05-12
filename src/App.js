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
      id : 3,
      title : "MARVEL QUIZ",
      date : 2021.11,
      shortDescription : "Third project in HyperIsland where we worked as a group to deepen our knowledge of HTML, SASS, JavaScript and did get to work with LocalStorage and Firestore",
      longDescription : {
        title: "The Ultimate Marvel Fan Quiz",
        brief: "Group project to create a quiz game that incorporates Firebase.",
        timeframe: "Three weeks.",
        description: "The Ultimate Marvel Fan Quiz is an online game that tests the user's knowledge of the Marvel Cinematic Universe by presenting them with a series of questions, chosen randomly from a large pool, and asks them to select an answer from the four provided. The quiz can be taken on easy or hard difficulty, to cater to both casual and hardcore fans. Questions and answers are stored in a Firestore database. The easy and hard questions and answers are retrieved and ten are selected randomly from the chosen difficulty when the game is started. The four answers are also randomized when displayed on the quiz page. Once the player has answered twn questions, their score will be stored in the database and a score page will be generated displaying the user's score, the average score for that difficulty, and a different gif/quote for each different score bracket.",
        learnings: "I was responsible for the question-page. There I used grid because I wanted to learn it. I styled the page and created the functions so the right answer would be visible, the next-button would show up when answering, the four answer would shuffle place when playing again and did the counting of the right answers. I learned to create event-handler and how to remove them as well. I worked with localStorage. My focus was mostly on grid and functionality."
      },
      toolsIcons : [<Html5Icon/>, <SassIcon/>, <JavascriptIcon/>, <FirebaseIcon />],
      deployedlink : "https://quizaboutmarvel.netlify.app/",
      githubLink : "https://github.com/iwanast/marvel-quiz",
      picture : "../marvel.png"
    },
    {
      id : 2,
      title : "THE WHITE RABBIT",
      date : 2021.11,
      shortDescription : "Second project in Hyper Island where we created an in browser Matrix themed reaction game that incorporates local/session storage.",
      longDescription : {
        title: "The White Rabbit: A Matrix themed reaction speed game",
        brief: "Group project to incorporate the project management tools we've been learning (github, agile, kanban/scrum) to create a web project that incorporates the javascript date function as well as local or session storage.",
        timeframe: "Two weeks.",
        description: "The White Rabbit is an interactive reaction speed game, themed around The Matrix, similar in style to other simple games that are often created for use as marketing materials as part of a larger advertising campaign. The game prompts the user to click on a series of small rabbit images that appear in random positions on the creen as fast as they can. At the end of the game, the user will receive a final time (factoring in penalties for misclicking or missing rabbits), as well as an average reaction time along with other statistics from the game. A gif of a Matrix character will also be displayed, depending on the user's final time. Stats are then saved into the local stroage for use in the highscore page, which displays the user's ten best times.",
        learnings: "We used for the first time Github for a group-project with Github-Desktop. We planed everything in Kanban and styled in Trello. I worked mostly with the game-logic like setTimeout, how to appear at random places, how to calculate the time and I worked with localStorage."
      },
      toolsIcons : [<Html5Icon/>, <SassIcon/>, <JavascriptIcon/>, <FirebaseIcon />],
      deployedlink : "https://thewhiterabbitgame.netlify.app/",
      githubLink : "https://github.com/iwanast/the-white-rabbit",
      picture : "../whiterabbit.png"
    },
    {
      id : 1,
      title : "POMODORO",
      date : 2021.09,
      shortDescription : "First project in HyperIsland where I started to use JavaScript and Sass",
      longDescription : {
        title: "PomoDoro, a timer for focus-time",
        brief: "Individual project which should include HTML and CSS (or SASS).",
        timeframe: "Five weeks.",
        description: "The idea of a pomodoro is that you estimate your work in time-slots and that you do regular breaks to refresh your brain and to be still functioning after a whole day working. ou can choose in the settings the timeslotes and a theme you want to have to look at or have it in the background.",
        learnings: "I worked for the first time with JavaScript and did a timer and a customizable theme-chooser and time-setter. I worked with media-queries and loading-time for images and did a json-file for all the different images. I worked with some animations (timer spinning out when reached 0, label coming up when typing in the text-fields, setting-icon)."
      },
      toolsIcons : [<Html5Icon/>, <SassIcon/>, <JavascriptIcon/>],
      deployedlink : "https://pomodoro-gold.netlify.app/",
      githubLink : "https://github.com/iwanast/pomodoro",
      picture : "../pomodoro.png"
    },
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
