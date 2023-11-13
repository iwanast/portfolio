import { AiOutlineHtml5 as Html5Icon } from "react-icons/ai";
import { DiReact as ReactIcon, DiSass as SassIcon } from "react-icons/di"; // DiCss3 as CssIcon,
import { IoLogoJavascript as JavascriptIcon } from "react-icons/io";
import {
  SiMongodb as MongodbIcon,
  SiFirebase as FirebaseIcon,
  SiRedux as ReduxIcon,
} from "react-icons/si";
import { FaAws as AWSIcon } from "react-icons/fa";

export const myProjects = [
  {
    id: 12,
    title: "POMODORO",
    date: "2023.03",
    shortDescription:
      "Own app for the internship: A highly customizable pomodoro",
    longDescription: {
      title: "Pomodoro Mythos Megacorp",
      brief:
        "The vision of the product is a highly customizable, mindful pomodoro timer with the possibility to extend the product with a wide array of features and customization points.",
      timeframe: "6 months",
      description:
        "I conducted research to determine the best technologies to use for my project. After considering several options, I decided to use React because it offered a component-based approach and single-page application architecture, which would be suitable for the high level of customization required for the project. I also chose Redux toolkit to manage the global state of my application, given the numerous settings that customers could choose from, and the data needed to be accessible across all platforms and devices. I developed two prototypes to test the feasibility of my idea, get feedback from my mentor and think about the architecture. As database for the userdata I decided to use Firestore where I then also easily could use Firebase auth for my app. The idea about different, soothing and mindful background-images for the app let me to explore more databases and in the end I decided to use AWS S3 Bucket to store the files. When then building the MVP I used test-driven development (TDD) to ensure the code was predictable, and I selected React-testing-library with Jest as the testing framework.",
      learnings:
        "Working with prototyping, Redux Toolkit, Firebase (Firestore, Auth and Hosting), AWS S3 Buckets and TDD. Working with a designer and product owner and otherwise deciding on my own.",
    },
    toolsIcons: [
      <FirebaseIcon key="firebase" />,
      <SassIcon key="sass" />,
      <ReactIcon key="react>" />,
      <ReduxIcon key="redux" />,
      <AWSIcon key="aws" />,
    ],
    deployedLink: "", //"https://pomodoro-mythos-megacorp.web.app/",
    githubLink: "",
    picture: "/MythosMegacorp_darkmode_Clockfaces.png",
    gallery: [
      "/MythosMegacorp_darkmode_Clockfaces.png",
      "/MythosMegacorp_darkmode_ClockfacesColors.png",
      "/MythosMegacorp_darkmode_FlowClockface.png",
      "/MythosMegacorp_lightmode_ClassicClockface.png",
    ],
  },
  {
    id: 8,
    title: "E-COMMERCE",
    date: "2022.03",
    shortDescription:
      "Individual Project to build an e-commerce with the MERN-stack",
    longDescription: {
      title: "Secondhand e-shop for books",
      brief:
        "Create an API with MongoDB and Express for a shopping store online where (1) there is at least one way for customers to interact with their new API, (2) customers should be able to find available products, (3) customers should be able to create a shopping cart, (4) it should be possible to create an order with a shopping cart AND a single item and (5) workers at the store should be able to mark orders as packed and shipped.",
      timeframe: "4 weeks",
      description:
        "First I decided upon the structure of the database and what would be needed for the project on paper. Then I set-up the basic structure for the shop-app and the backend running on the Server. I implemented the different features step by step and used Hooks such as useState, useEffect, useContext and useReducer for the frontend. I developed a basic REST API for the backend.",
      learnings:
        "Learning data interactions and setting up an API, learning MongoDB and Express and more react.js",
    },
    toolsIcons: [
      <MongodbIcon key="mongo" />,
      <SassIcon key="sass" />,
      <ReactIcon key="react>" />,
    ],
    deployedLink: "https://shopping-secondhand-bookshop.netlify.app/",
    githubLink: "https://github.com/iwanast/shopping",
    picture: "/shopping.png",
  },
  {
    id: 6,
    title: "SWEDISH RADIO API",
    date: "2022.01",
    shortDescription:
      "Showing the content of an API (first in JavaScript then refactoring in React.js)",
    longDescription: {
      title: "Showing an API with React.js",
      brief:
        "Refactoring the earlier project (JavaScript) with React.js. It should be readable and maintainable. Publish the project.",
      timeframe: "1 week",
      description:
        "I created a webpage where all the programs from the swedish radio API (Sveriges Radio API) for children are shown and can be played. You can switch between programs for 3-8 year olds or programs for 9-13 year olds. If you click on a program, all available episodes (max 120) are shown. If you click on the episode you want to listen to, you see the episode and the audioplayer.",
      learnings:
        "First I had to learn the basics of React.js and worked with function components, Hook, react router dom, react player and SASS. I implemented step for step the functions and logic from my previous project and adapted where needed the fetch for the Sveriges Radio API. Then I published the project to netlify.",
    },
    toolsIcons: [
      <SassIcon key="sass" />,
      <ReactIcon key="react" />,
      <i key="node" className="fa-brands fa-node-js"></i>,
    ],
    deployedLink: "https://svensk-radio-barn.netlify.app/",
    githubLink: "https://github.com/iwanast/the-first-app-in-react",
    picture: "/radio.png", //
  },
  {
    id: 4,
    title: "FISH GAME",
    date: "2021.12",
    shortDescription:
      "Building a game with JavaScript and the HTML5 game framework/engine Phaser 3.",
    longDescription: {
      title: "The Fishgame",
      brief:
        "Group project where we build a game with JavaScript and the framework/engine Phaser 3.",
      timeframe: "2,5 weeks",
      description:
        "We created a game underwater where a fish eats all the hidden plastics to save his friends. There are sound effects if bumping into other creatures in the sea. The player has to be cautious of the sharks and the time ticking away. We temporarily store the score in SessionStorage to access it from different scenes. The scores from the best 3 players are fetched from Firestore and shown under the current players score. The player gets an encouraging text at the end with a hint to rise to the challenge to get a better score.",
      learnings:
        "I learned more about JavaScript and time-functions as well as Phaser. I set up the scenes and together with Tintin implemented the logic behind the game. We used NodeJs and its packages for the first time. I did save the scores to Firestore and we all learned more about working in branches and Github.",
    },
    toolsIcons: [
      <JavascriptIcon key="js" />,
      <FirebaseIcon key="firebase" />,
      <i key="node" className="fa-brands fa-node-js"></i>,
    ],
    deployedLink: "",
    githubLink: "https://github.com/iwanast/FishGame",
    picture: "/fishgame.png",
    gallery: [
      "/fishgame.png",
      "/fishgame_username.png",
      "/fishgame_helloSophieplay.png",
      "/fishgame_play.png",
      "/fishgame_play_youcandothis.png",
      "/fishgame_play_eat.png",
      "/fishgame_play_shark.png",
      "/fishgame2.png",
      "/fishgame_scorehigh_sophie.png",
      "/fishgame_won.png",
    ],
  },
  {
    id: 3,
    title: "MARVEL QUIZ",
    date: "2021.11",
    shortDescription:
      "Third project in HyperIsland where we worked to deepen our knowledge of HTML, SASS, JavaScript and did get to work with LocalStorage and Firestore",
    longDescription: {
      title: "The Ultimate Marvel Fan Quiz",
      brief: "Group project to create a quiz game that incorporates Firebase.",
      timeframe: "3 weeks",
      description:
        "The Ultimate Marvel Fan Quiz is an online game that tests the user's knowledge of the Marvel Cinematic Universe by presenting them with a series of questions, chosen randomly from a large pool, and asks them to select an answer from the four provided. The quiz can be taken on easy or hard difficulty, to cater to both casual and hardcore fans. Questions and answers are stored in a Firestore database. The easy and hard questions and answers are retrieved and ten are selected randomly from the chosen difficulty when the game is started. The four answers are also randomized when displayed on the quiz page. Once the player has answered twn questions, their score will be stored in the database and a score page will be generated displaying the user's score, the average score for that difficulty, and a different gif/quote for each different score bracket.",
      learnings:
        "I was responsible for the question-page. There I used grid because I wanted to learn it. I styled the page and created the functions so the right answer would be visible, the next-button would show up when answering, the four answer would shuffle place when playing again and did the counting of the right answers. I learned to create event-handler and how to remove them as well. I worked with localStorage. My focus was mostly on grid and functionality.",
    },
    toolsIcons: [
      <Html5Icon key="html" />,
      <SassIcon key="sass" />,
      <JavascriptIcon key="js" />,
      <FirebaseIcon key="firebase" />,
    ],
    deployedLink: "https://quizaboutmarvel.netlify.app/",
    githubLink: "https://github.com/iwanast/marvel-quiz",
    picture: "/marvel.png",
  },
  {
    id: 2,
    title: "THE WHITE RABBIT",
    date: "2021.10",
    shortDescription:
      "Second project in Hyper Island where we created an in browser Matrix themed reaction game that incorporates local/session storage.",
    longDescription: {
      title: "The White Rabbit: A Matrix themed reaction speed game",
      brief:
        "Group project to incorporate the project management tools we've been learning (github, agile, kanban/scrum) to create a web project that incorporates the javascript date function as well as local or session storage.",
      timeframe: "2 weeks",
      description:
        "The White Rabbit is an interactive reaction speed game, themed around The Matrix, similar in style to other simple games that are often created for use as marketing materials as part of a larger advertising campaign. The game prompts the user to click on a series of small rabbit images that appear in random positions on the screen as fast as they can. At the end of the game, the user will receive a final time (factoring in penalties for misclicking or missing rabbits), as well as an average reaction time along with other statistics from the game. A gif of a Matrix character will also be displayed, depending on the user's final time. Stats are then saved into the local storage for use in the highscore page, which displays the user's ten best times.",
      learnings:
        "We used for the first time Github for a group-project with Github-Desktop. We planed everything in Kanban and styled in Trello. I worked mostly with the game-logic like setTimeout, how to appear at random places, how to calculate the time and I worked with localStorage.",
    },
    toolsIcons: [
      <Html5Icon key="html" />,
      <SassIcon key="sass" />,
      <JavascriptIcon key="js" />,
      <FirebaseIcon key="firebase" />,
    ],
    deployedLink: "https://thewhiterabbitgame.netlify.app/",
    githubLink: "https://github.com/iwanast/the-white-rabbit",
    picture: "/whiterabbit.png",
  },
  // {
  //   id : 1,
  //   title : "POMODORO",
  //   date : "2021.09",
  //   shortDescription : "First project in HyperIsland where we learned the fundamentals and I started to use JavaScript and Sass and deepened my knowledge of HTML.",
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
];
