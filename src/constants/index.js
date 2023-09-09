import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify, 
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact", 
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Data Structures",
    icon: mobile,
  },
  {
    title: "OOPs Concepts",
    icon: backend,
  },
  {
    title: "Vercel",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "ARYAN INSTITUTE OF TECH.",
    company_name: "BTech In Computer Science",
    icon: meta,
    iconBg: "#383E56",
    date: "Oct 2020 - July 2023",
    points: [
      "Graduation Completed.",
      "With 7.4 CGPA.",

    ],
  },
  {
    title: "JAMIA MILLIA ISLAMIA",
    company_name: "Diploma In Computer Engineering",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - July 2020",
    points: [
      "Diploma Completed.",
      "With 78.4%.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I hvae solved more than 450+ DSA problem on Leetcode, GFG, Pep-coding, etc.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Leetcode max rating - 1250+ and 3 badges.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Subject Matter Expert in Computer Science on chegg and solved more than 400+ problems.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "INSTAGRAM CLONE",
    description:
      "Instagram clone that allows 1000+ users to share photos with other users and user can create post, like, comment, check others profiles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongo",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/KnighhtRider/instagram-clone",
  },
  {
    name: "MOVIES APP",
    description:
      "A movies app allows users to access all the trending movies and users can add their favourite movies and sorting on the basis of rating.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://movie-nine-rho.vercel.app/",
  },
  {
    name: "CAMERA APP",
    description:
      "Camera App is used to click and record memories with the help of API including features download and delete the media from Gallery page.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://camera-app-knighhtrider.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
