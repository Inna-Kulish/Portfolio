export enum SectionIds {
  home = "home",
  about = "about",
  skills = "skills",
  education = "education",
  projects = "projects",
  contact = "contact",
}

interface NavItem {
  title: string;
  navLink?: string;
  sectionId: SectionIds;
}

export const NAV_LINKS: NavItem[] = [
  {
    title: "Home",
    navLink: "/",
    sectionId: SectionIds.home,
  },
  {
    title: "About",
    sectionId: SectionIds.about,
  },
  {
    title: "Skills",
    sectionId: SectionIds.skills,
  },
  {
    title: "Education",
    sectionId: SectionIds.education,
  },
  {
    title: "Projects",
    sectionId: SectionIds.projects,
  },
  {
    title: "Contact",
    sectionId: SectionIds.contact,
  },
];
