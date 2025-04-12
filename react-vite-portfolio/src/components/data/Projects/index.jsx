import quizImage from '../../../assets/projectcardimages/quiz.jpg';
import exerciseImage from '../../../assets/projectcardimages/exercise-app.jpg';
import todoImage from '../../../assets/projectcardimages/todo-app.jpg';

export const ProjectsList = [
  {
    title: "React Expo Todo List",
    desc: "A simple to-do app with navigation, task creation, deletion, and management.",
    tech: ["React Native", "Node.js", "Expo"],
    image: todoImage,
    demo: "https://github.com/mmolmo/react-expo-todo-list",
    code: "https://github.com/mmolmo/react-expo-todo-list"
  },
  {
    title: "React Native Exercise App",
    desc: "Motivating, offline-first exercise app demo for exercise enthuasists.",
    tech: ["React", "React Native", "Expo", "React Native UI", "React Navigator"],
    image: exerciseImage,
    demo: "https://github.com/mmolmo/react-native-exercise-app",
    code: "https://github.com/mmolmo/react-native-exercise-app"
  },
  {
    title: "React Native Quiz App",
    desc: "Simple user quiz with results visualization",
    tech: ["React Native", "React Navigator", "Expo", "React Native UI", "React Navigator"],
    image: quizImage,
    demo: "https://github.com/mmolmo/react_native_quizapp",
    code: "https://github.com/mmolmo/react_native_quizapp"
  }
];