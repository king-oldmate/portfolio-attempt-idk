import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiMongodb,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";

const techList = {
  html5: <SiHtml5 />,
  css3: <SiCss3 />,
  tailwind: <SiTailwindcss />,
  react: <SiReact />,
  mongodb: <SiMongodb />,
  js: <SiJavascript />,
  "node.js": <SiNodedotjs />,
};

const Technologies = ({ tools }) => {
  return (
    <div className='flex flex-wrap justify-center pt-3 gap-x-2'>
      {tools.map((tool, index) => {
        console.log(tool);
        return (
          <div key={tool} className=''>
            <span title={tool.toUpperCase()}>{techList[tool]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
