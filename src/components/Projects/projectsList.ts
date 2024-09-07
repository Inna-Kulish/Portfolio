import bookshelf from "@/assets/images/projects/bookshelf.jpg";
import drink from "@/assets/images/projects/drink.jpg";
import fitness from "@/assets/images/projects/fitness.jpg";
import mimino from "@/assets/images/projects/mimino.jpg";
import recipes from "@/assets/images/projects/recipes.jpg";
import todo from "@/assets/images/projects/todo.jpg";
import webstudio from "@/assets/images/projects/webstudio.jpg";

interface ProjectItem {
  name: string;
  photo: string;
  github: string;
  page: string;
  description: string;
}

export const PROJECTS_LIST: ProjectItem[] = [
  {
    name: "Recipe Website",
    photo: recipes,
    github: "/",
    page: "/",
    description: "Recipe Website",
  },
  {
    name: "Fitness Website",
    photo: fitness,
    github: "/",
    page: "/",
    description: "Fitness Website",
  },
  {
    name: "Drink Website",
    photo: drink,
    github: "/",
    page: "/",
    description: "Drink Website",
  },
  {
    name: "Bookshelf Website",
    photo: bookshelf,
    github: "/",
    page: "/",
    description: "Bookshelf Website",
  },
  {
    name: "Mimino Website",
    photo: mimino,
    github: "/",
    page: "/",
    description: "Mimino Website",
  },
  {
    name: "Todo Website",
    photo: todo,
    github: "/",
    page: "/",
    description: "Todo Website",
  },
  {
    name: "Webstudio Website",
    photo: webstudio,
    github: "/",
    page: "/",
    description: "Webstudio Website",
  },
];
