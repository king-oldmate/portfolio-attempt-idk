import cdlScreenshot from "./images/cdl-full.jpg";
import stoneScreenshot from "./images/stone-full.jpg";
import fdfScreenshot from "./images/fdf-full.jpg";
import filterFull from "./images/filter-full.jpg";
import gethscqsFull from "./images/gethscqs-full.jpg";
import dashboard from "./images/dashboard.png";

const portfolioEntries = [
  {
    id: 5,
    title: "Full-stack web app",
    description:
      "A web app for NSW HSC students that generates a random (past) HSC question for them to study based on their search criteria. Features a light and dark mode theme switcher.",
    tools: ["html5", "css3", "react", "node.js", "json"],
    imgSrc: gethscqsFull,
    srcCode: null,
    url: "https://gethscquestions.netlify.app/",
  },
  {
    id: 1,
    title: "Full-stack web app",
    description:
      "A web app that allows users to view (on a map) and submit location data on duck habitats. I developed the backend using Node.js and store the submitted data on MongoDB.",
    tools: ["html5", "tailwind", "react", "node.js", "mongodb"],
    imgSrc: fdfScreenshot,
    srcCode: "https://github.com/king-oldmate/free-duck-finder",
    url: "https://freeduckfinder.online/",
  },
  {
    id: 6,
    title: "Time-tracking Dashboard",
    description: "A responsive time-tracking dashboard component.",
    tools: ["html5", "tailwind", "react", "json"],
    imgSrc: dashboard,
    srcCode:
      "https://github.com/king-oldmate/frontendmentor-time-tracking-dashboard",
    url: "https://glistening-selkie-e0c64a.netlify.app/",
  },
  {
    id: 2,
    title: "Band Website",
    description:
      "A fully responsive website made for a local Sydney Classical trio, featuring a music player for visitors.",
    tools: ["html5", "react", "tailwind"],
    imgSrc: cdlScreenshot,
    srcCode: "https://github.com/king-oldmate/CDL-trio-website",
    url: "https://clairdelunetrio-sydney.netlify.app/",
  },
  {
    id: 3,
    title: "Tradesman Website",
    description:
      "A fully responsive website made for a local tradesman, featuring a (what I think to be) a unique hero section. ",
    tools: ["html5", "tailwind", "js"],

    imgSrc: stoneScreenshot,
    srcCode: null,
    url: "https://antonios-zeaiter-sydney-stonemason.netlify.app/",
  },

  {
    id: 4,
    title: "Job listings with filtering solution",
    description:
      "A fully responsive web component that takes JSON data and parses it to a page of job listings. Of special note are the tags, which when clicked, filter the listed jobs accordingly.",
    tools: ["html5", "tailwind", "react"],
    imgSrc: filterFull,
    srcCode: "https://github.com/king-oldmate/FEM-job-listing-with-filter",
    url: "https://62c57eda52322200087e777b--superb-kashata-bdd2c6.netlify.app/",
  },
];

export default portfolioEntries;
