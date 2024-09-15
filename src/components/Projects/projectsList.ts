import bookshelf from "@/assets/images/projects/bookshelf.jpg";
import drink from "@/assets/images/projects/drink.jpg";
import fitness from "@/assets/images/projects/fitness.jpg";
import mimino from "@/assets/images/projects/mimino.jpg";
import recipes from "@/assets/images/projects/recipes.jpg";
import todo from "@/assets/images/projects/todo.jpg";
import webstudio from "@/assets/images/projects/webstudio.jpg";
import bookshelf2x from "@/assets/images/projects/bookshelf@2x.jpg";
import drink2x from "@/assets/images/projects/drink@2x.jpg";
import fitness2x from "@/assets/images/projects/fitness@2x.jpg";
import mimino2x from "@/assets/images/projects/mimino@2x.jpg";
import recipes2x from "@/assets/images/projects/recipes@2x.jpg";
import todo2x from "@/assets/images/projects/todo@2x.jpg";
import webstudio2x from "@/assets/images/projects/webstudio@2x.jpg";

interface ProjectItem {
  name: string;
  photo: string;
  photo2x: string;
  github: string;
  page: string;
  description: string;
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    name: "Recipe Website",
    photo: recipes,
    photo2x: recipes2x,
    github: "https://github.com/Inna-Kulish/recipes-project",
    page: "https://cute-paletas-35bdf5.netlify.app/",
    description: "A TypeScript-based React application for discovering and managing recipes. This project uses various modern web technologies and libraries to provide a seamless user experience.",
  },
  {
    name: "Fitness Website",
    photo: fitness,
    photo2x: fitness2x,
    github: "https://github.com/Inna-Kulish/fitness-app",
    page: "https://inna-kulish.github.io/fitness-app/",
    description: "This project is a one-page fitness app website built. The website features a responsive design, ensuring optimal viewing and interaction experience across various devices.",
  },
  {
    name: "Drink Master",
    photo: drink,
    photo2x: drink2x,
    github: "https://github.com/Inna-Kulish/DrinkMaster",
    page: "https://danylotytarenko.github.io/DrinkMaster/",
    description: "Drink Master is app that allows users to explore and manage drink recipes. Users can create an account, saving favorite drinks or managing custom drink recipes.",
  },
  {
    name: "Bookshelf Website",
    photo: bookshelf,
    photo2x: bookshelf2x,
    github: "https://github.com/Inna-Kulish/Bookshelf",
    page: "https://violetanaboy.github.io/project-team-8/",
    description:"App for choosing books. Adaptive design, modal window, mobile menu, shopping list, support window, pagination. Integrated a dark mode feature.",
  },
  {
    name: "Mimino Website",
    photo: mimino,
    photo2x: mimino2x,
    github: "https://github.com/Inna-Kulish/mimino-project",
    page: "https://danylotytarenko.github.io/mimino-project/",
    description: "A website of a restaurant-hotel complex. An intuitive online reservation system, allowing guests to book rooms, suites, and amenities effortlessly."
  },
  {
    name: "Todo App",
    photo: todo,
    photo2x: todo2x,
    github: "https://github.com/Inna-Kulish/TodoList",
    page: "https://inna-kulish.github.io/TodoList/",
    description: "The tasks are stored on the backend using the mokAPI. Users can add, delete, and modify tasks, and there is a filter option to view tasks that are completed or still in progress.",
  },
  {
    name: "Webstudio Website",
    photo: webstudio,
    photo2x: webstudio2x,
    github: "https://github.com/Inna-Kulish/Webstudio",
    page: "https://inna-kulish.github.io/Webstudio/",
    description: "Application built with HTML5 and CSS3, focusing on creating adaptive and user-friendly web designs. adaptive layouts, modal windows, and a mobile-friendly navigation menu.",
  },
];
