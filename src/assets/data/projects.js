import { v4 as uuidv4 } from 'uuid';
import PomodoroImg from '../images/pomodoro.png';
import QuizImg from '../images/quizapp.png';
import PortfolioImg from '../images/portfolio.png';
import RockGameImg from '../images/rockgame.png';
import TypingImg from '../images/typingmaster.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Quiz app',
    desc:
      'An application to check your knowledge abut the world. I developed the website in React',
    img: QuizImg,
  },
  {
    id: uuidv4(),
    name: 'Portfolio website',
    desc:
      'An app to help people to show their works to others.',
    img: PortfolioImg,
  },
  {
    id: uuidv4(),
    name: 'Rock-Paper-Scissors',
    desc:
      'Using this app you can play popular game. Also you will remember your childhood goog moments',
    img: RockGameImg,
  },
  {
    id: uuidv4(),
    name: "Typing Master",
    desc:
      'This game for fun but at the time improve typing skill. The game is made using ReactJs.',
    img: TypingImg,
  },
  {
    id: uuidv4(),
    name: 'Pomodoro Timer',
    desc:
      'A timer website that will show your performance . Also you will use this website for time managment.',
    img: PomodoroImg,
  },
];

export default projects;
