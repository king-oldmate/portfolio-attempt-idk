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
import { VscJson } from "react-icons/vsc";

const techList = {
  html5: <SiHtml5 />,
  css3: <SiCss3 />,
  tailwind: <SiTailwindcss />,
  react: <SiReact />,
  mongodb: <SiMongodb />,
  js: <SiJavascript />,
  "node.js": <SiNodedotjs />,
  json: <VscJson />,
};

const Technologies = ({ tools }) => {
  return (
    <div className='flex flex-wrap justify-center w-3/4 gap-3 pt-3 mx-auto'>
      {tools.map((tool, index) => {
        console.log(tool);
        return (
          <div key={tool} className='flex flex-wrap gap-x-1'>
            {techList[tool]}
            <span className='text-xs' title={tool.toUpperCase()}>
              {tool.toUpperCase()}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
