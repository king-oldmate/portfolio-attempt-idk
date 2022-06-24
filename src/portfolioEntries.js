import cdlScreenshot from "./images/cdl-full.jpg";
import stoneScreenshot from "./images/stone-full.jpg";

const portfolioEntries = [
  {
    id: 1,
    title: "Band Website",
    description:
      "A fully responsive website made for a local Sydney Classical trio, featuring a music player for visitors.",
    tools: ["react", "tailwind"],
    imgSrc: cdlScreenshot,
    srcCode: "",
    url: "https://clairdelunetrio-sydney.netlify.app/",
  },
  {
    id: 2,
    title: "Tradesman Website",
    description:
      "A fully responsive website made for a local tradesman, featuring a (what I think to be) a unique hero section.",
    tools: ["tailwind"],
    imgSrc: stoneScreenshot,
    srcCode: "",
    url: "https://antonios-zeaiter-sydney-stonemason.netlify.app/",
  },
];

export default portfolioEntries;
