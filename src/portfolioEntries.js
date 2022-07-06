import cdlScreenshot from "./images/cdl-full.jpg";
import stoneScreenshot from "./images/stone-full.jpg";
import fdfScreenshot from "./images/fdf-full.jpg";
import filterFull from "./images/filter-full.jpg";

const portfolioEntries = [
  {
    id: 1,
    title: "Band Website",
    description:
      "A fully responsive website made for a local Sydney Classical trio, featuring a music player for visitors.",
    tools: ["react", "tailwind"],
    imgSrc: cdlScreenshot,
    srcCode: "https://github.com/king-oldmate/CDL-trio-website",
    url: "https://clairdelunetrio-sydney.netlify.app/",
  },
  {
    id: 2,
    title: "Tradesman Website",
    description:
      "A fully responsive website made for a local tradesman, featuring a (what I think to be) a unique hero section. ",
    tools: ["tailwind"],
    imgSrc: stoneScreenshot,
    srcCode: null,
    url: "https://antonios-zeaiter-sydney-stonemason.netlify.app/",
  },
  {
    id: 3,
    title: "Full-stack web app",
    description:
      "A web app that allows users to view (on a map) and submit location data on duck habitats. I developed the backend using Node.js and store the submitted data on MongoDB.",
    tools: ["tailwind", "react", "node.js", "mongodb"],
    imgSrc: fdfScreenshot,
    srcCode: "https://github.com/king-oldmate/free-duck-finder",
    url: "https://freeduckfinder.online/",
  },
  {
    id: 4,
    title: "Job listings with filtering solution",
    description:
      "A full responsive web component that takes JSON data and parses it to a page of job listings. Of special note are the tags, which when clicked, filter the listed jobs accordingly.",
    tools: ["tailwind", "react"],
    imgSrc: filterFull,
    srcCode: "https://github.com/king-oldmate/FEM-job-listing-with-filter",
    url: "https://62c57eda52322200087e777b--superb-kashata-bdd2c6.netlify.app/",
  },
];

export default portfolioEntries;
