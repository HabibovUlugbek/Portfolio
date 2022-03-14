import { v4 as uuidv4 } from 'uuid';
import PomodoroImg from '../images/pomodoro.png';
import QuizImg from '../images/quizapp.png';
import PortfolioImg from '../images/portfolio.png';
import RockGameImg from '../images/rockgame.png';
import TypingImg from '../images/typingmaster.png';
import BookshelfImg from "../images/bookshelf.png";
import LifeStoryImg from "../images/lifestory.png"
const projects = [
  {
    id: uuidv4(),
    name: 'Quiz app',
    desc:
      'An application to check your knowledge abut the world. I developed the website in React',
    img: QuizImg,
    link:'https://questionary.netlify.app'
  },
  {
    id: uuidv4(),
    name: 'Portfolio website',
    desc:
      'An app to help people to show their works to others.',
    img: PortfolioImg,
    link:"https://portfoliohabibov.netlify.app"
  },
  {
    id: uuidv4(),
    name: 'Bookshelf',
    desc:
      'An app to help people to find the suitable books . And also give their thoughts to the world . MERN stack project',
    img: BookshelfImg,
    link:'https://bookshelfnode.herokuapp.com/user'
  },
  {
    id: uuidv4(),
    name: 'Rock-Paper-Scissors',
    desc:
      'Using this app you can play popular game. Also you will remember your childhood goog moments',
    img: RockGameImg,
    link:"https://rock-paper-scissors-by-habibov.netlify.app"
  },
  {
    id: uuidv4(),
    name: 'LifeStory',
    desc:
      'this Fullstack app help sharing stories to give motivation from that. Besides you  can read others life truth',
    img: LifeStoryImg,
    link:"https://lifestorybook.herokuapp.com/dashboard"
  },
  {
    id: uuidv4(),
    name: "Typing Master",
    desc:
      'This game for fun but at the time improve typing skill. The game is made using ReactJs.',
    img: TypingImg,
    link:"https://typing-master.netlify.app"
  },
  {
    id: uuidv4(),
    name: 'Pomodoro Timer',
    desc:
      'A timer website that will show your performance . Also you will use this website for time managment.',
    img: PomodoroImg,
    link:"https://pomodoro-timer-by-habibov.netlify.app"
  },
];

export default projects;
