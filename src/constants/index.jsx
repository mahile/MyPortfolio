import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project1.jpeg";
import projectImage3 from "../assets/project1.jpeg";
import projectImage4 from "../assets/project1.jpeg";


import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Mahilet",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/mahile/MyPortfolio",
    githubLink: "https://github.com/mahile/MyPortfolio",
  },
  {
    id: 2,
    name: "Pharmacy Desktop app",
    description:
      "This is a desktop application called Pharmacy using JavaFX, which allows users to add, update, and delete medicines efficiently.",
    image: projectImage4,
    githubLink: "https://github.com/mahile/Pharmacy",
  },
  {
    id: 3,
    name: "Finance Managemnet System",
    description:
      "This is a full-stack project built with React (with Chakra UI) for the frontend and Node.js (with Express) for the backend.",
    image: projectImage3,
    githubLink: "https://github.com/mahile/FinanceManagement",
  },
  {
    id: 4,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using ReactJs , featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },

];

export const BIO = [
  "Mahilet Honelign studing Software Enigneering at the University of Wolkite., where I immersed myself in the world of frontend development.",
  "As a multi-disciplinary frontend developer,I brings a wealth of skills and expertise to my work. From my deep understanding of HTML, CSS, and JavaScript to my proficiency in modern frameworks like React,I possesses a versatile skill set that allows me to craft stunning and unforgettable web experiences for my clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "6+ months",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "6+ months",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "6+ months",
  },
 
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "6+ months",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/mahile",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/mahilet-honelign-395305339/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "https://www.instagram.com/mahitabts/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
];