import { useEffect } from "react";
import { AiOutlineHtml5 as Html5Icon } from "react-icons/ai";
import {  DiReact as ReactIcon, DiSass as SassIcon } from "react-icons/di"; // DiCss3 as CssIcon,
import { IoLogoJavascript as JavascriptIcon } from "react-icons/io";
import { SiMongodb as MongodbIcon, SiFirebase as FirebaseIcon, } from "react-icons/si"; // SiRedux as ReduxIcon
// import { FaAws as AWSIcon } from "react-icons/fa";
import { Router } from "./Router"
import { Header, Footer, Backgrounds } from "./components/index"

export function App() {

  const myProjects = [
    
    {
      id : 8,
      title : "E-COMMERCE",
      date : "2022.03",
      shortDescription : "Individual Project to build an e-commerce with the MERN-stack",
      longDescription : {
        title: "Secondhand e-shop for books",
        brief: "Create an API with MongoDB and Express for a shopping store online where (1) there is at least one way for customers to interact with their new API, (2) customers should be able to find available products, (3) customers should be able to create a shopping cart, (4) it should be possible to create an order with a shopping cart AND a single item and (5) workers at the store should be able to mark orders as packed and shipped.",
        timeframe: "4 weeks",
        description: "First I decided upon the structur of the database and what would be needed for the project on paper. Then I set-up the basic structure for the shop-app and the backend running on the Server. I implemented the different features step by step and used Hooks such as useState, useEffect, useContext and useReducer for the frontend. I developed a basic REST API for the backend.",
        learnings: "Learning data interactions and setting up an API, learning MongoDB and Express and more react.js"
      },
      toolsIcons : [<MongodbIcon key="mongo"/>, <SassIcon key="sass"/>, <ReactIcon key="react>"/>],
      deployedLink : "https://shopping-secondhand-bookshop.netlify.app/",
      githubLink : "https://github.com/iwanast/shopping",
      picture : "/shopping.png"
    },
    {
      id : 6,
      title : "SWEDISH RADIO API",
      date : "2022.01",
      shortDescription : "Refactoring the earlier project (JavaScript) with react.js and through this learning the basics of this library.",
      longDescription : {
        title: "Secondhand e-shop for books",
        brief: "Refactoring the earlier project (which was in JavaScript) with react.js. It should be readable and maintainable. Publish the project.",
        timeframe: "1 week",
        description: "I created a webbpage where all the programs from the swedish radio API (Sveriges Radio API) for children are. You can switch between programes for 3-8 year olds or programs for 9-13 year olds. If you click on a program, all available episodes (max 120) are shown. You then can click on the episode you want to play to get to the audioplayer.",
        learnings: "First I had to learn the basics of react and worked with function components, Hook, react router dom and react player. Then I used create react app to set up the project, included SASS, react-router-dom, react-player and deleted the content under src. I implemented step for step the functions and logic from my previouse project and adapted where needed the fetch for the Sveriges Radio API. Then I published the project to netlify."
      },
      toolsIcons : [<SassIcon key="sass"/>, <ReactIcon key="react"/>, <i key="node" className="fa-brands fa-node-js"></i>],
      deployedLink : "https://svensk-radio-barn.netlify.app/",
      githubLink : "https://github.com/iwanast/the-first-app-in-react",
      picture : "/radio.png" // 
    },
    {
      id : 4,
      title : "FISH GAME",
      date : "2021.12",
      shortDescription : "Building a game with JavaScript and the HTML5 game framework/engine Phaser 3.",
      longDescription : {
        title: "The Fishgame",
        brief: "Group project where we build a game with JavaScript and the framework/engine Phaser 3.",
        timeframe: "2,5 weeks",
        description: "We created a game underwater where a fish eats all the hidden plastics to save his friends. There are sound effects if bumping into other creatures in the sea. The player has to be cautious of the sharks and the time ticking away. We temporarily store the score in SessionStorage to access it from different scenes. The scores from the best 3 players are fetched from Firestore and shown under the current players score. The player gets an encouraging text at the end with a hint to rise to the challenge to get a better score.",
        learnings: "I learned more about JavaScript and time-functions as well as Phaser. I set up the scenes and togheter with Tintin implemented the logic behind the game. We used NodeJs and its packages for the first time. I did save the scores to Firestore and we all learned more about working in branches and Github."
      },
      toolsIcons : [<JavascriptIcon key="js"/>, <FirebaseIcon key="firebase"/>, <i key="node" className="fa-brands fa-node-js"></i>],
      deployedLink : "",
      githubLink : "https://github.com/iwanast/FishGame",
      picture : "/fishgame.png"
    },
    {
      id : 3,
      title : "MARVEL QUIZ",
      date : "2021.11",
      shortDescription : "Third project in HyperIsland where we worked to deepen our knowledge of HTML, SASS, JavaScript and did get to work with LocalStorage and Firestore",
      longDescription : {
        title: "The Ultimate Marvel Fan Quiz",
        brief: "Group project to create a quiz game that incorporates Firebase.",
        timeframe: "3 weeks",
        description: "The Ultimate Marvel Fan Quiz is an online game that tests the user's knowledge of the Marvel Cinematic Universe by presenting them with a series of questions, chosen randomly from a large pool, and asks them to select an answer from the four provided. The quiz can be taken on easy or hard difficulty, to cater to both casual and hardcore fans. Questions and answers are stored in a Firestore database. The easy and hard questions and answers are retrieved and ten are selected randomly from the chosen difficulty when the game is started. The four answers are also randomized when displayed on the quiz page. Once the player has answered twn questions, their score will be stored in the database and a score page will be generated displaying the user's score, the average score for that difficulty, and a different gif/quote for each different score bracket.",
        learnings: "I was responsible for the question-page. There I used grid because I wanted to learn it. I styled the page and created the functions so the right answer would be visible, the next-button would show up when answering, the four answer would shuffle place when playing again and did the counting of the right answers. I learned to create event-handler and how to remove them as well. I worked with localStorage. My focus was mostly on grid and functionality."
      },
      toolsIcons : [<Html5Icon key="html"/>, <SassIcon key="sass"/>, <JavascriptIcon key="js"/>, <FirebaseIcon key="firebase"/>],
      deployedLink : "https://quizaboutmarvel.netlify.app/",
      githubLink : "https://github.com/iwanast/marvel-quiz",
      picture : "/marvel.png"
    },
    {
      id : 2,
      title : "THE WHITE RABBIT",
      date : "2021.10",
      shortDescription : "Second project in Hyper Island where we created an in browser Matrix themed reaction game that incorporates local/session storage.",
      longDescription : {
        title: "The White Rabbit: A Matrix themed reaction speed game",
        brief: "Group project to incorporate the project management tools we've been learning (github, agile, kanban/scrum) to create a web project that incorporates the javascript date function as well as local or session storage.",
        timeframe: "2 weeks",
        description: "The White Rabbit is an interactive reaction speed game, themed around The Matrix, similar in style to other simple games that are often created for use as marketing materials as part of a larger advertising campaign. The game prompts the user to click on a series of small rabbit images that appear in random positions on the creen as fast as they can. At the end of the game, the user will receive a final time (factoring in penalties for misclicking or missing rabbits), as well as an average reaction time along with other statistics from the game. A gif of a Matrix character will also be displayed, depending on the user's final time. Stats are then saved into the local stroage for use in the highscore page, which displays the user's ten best times.",
        learnings: "We used for the first time Github for a group-project with Github-Desktop. We planed everything in Kanban and styled in Trello. I worked mostly with the game-logic like setTimeout, how to appear at random places, how to calculate the time and I worked with localStorage."
      },
      toolsIcons : [<Html5Icon key="html"/>, <SassIcon key="sass"/>, <JavascriptIcon key="js"/>, <FirebaseIcon key="firebase"/>],
      deployedLink : "https://thewhiterabbitgame.netlify.app/",
      githubLink : "https://github.com/iwanast/the-white-rabbit",
      picture : "/whiterabbit.png"
    },
    // {
    //   id : 1,
    //   title : "POMODORO",
    //   date : "2021.09",
    //   shortDescription : "First project in HyperIsland where we learned the fundamentals and I started to use JavaScript and Sass and deepend my knowledge of HTML.",
    //   longDescription : {
    //     title: "PomoDoro, a timer for focus-time",
    //     brief: "Individual project which should include HTML and CSS (or SASS).",
    //     timeframe: "5 weeks",
    //     description: "The idea of a pomodoro is that you estimate your work in time-slots and that you do regular breaks to refresh your brain and to be still functioning after a whole day working. ou can choose in the settings the timeslotes and a theme you want to have to look at or have it in the background.",
    //     learnings: "I worked for the first time with JavaScript and did a timer and a customizable theme-chooser and time-setter. I worked with media-queries and loading-time for images and did a json-file for all the different images. I worked with some animations (timer spinning out when reached 0, label coming up when typing in the text-fields, setting-icon)."
    //   },
    //   toolsIcons : [<Html5Icon key="html"/>, <SassIcon key="sass"/>, <JavascriptIcon key="js"/>],
    //   deployedLink : "https://pomodoro-gold.netlify.app/",
    //   githubLink : "https://github.com/iwanast/pomodoro",
    //   picture : "/pomodoro.png"
    // },
  ]

  useEffect(()=>{
    console.log("%cIwanas portfolio", "color:blue");
    console.log("%ce-mail: iwana.stadeli@hyperisland.se", "color:#BAC1FF");
  }, []);

  return (
    <>
      <Backgrounds />
      <Header />
      <Router myProjects={myProjects}/>
      <Footer />
    </>
  );
}
