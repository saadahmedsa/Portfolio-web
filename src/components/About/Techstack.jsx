import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiCss3,
} from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

function Techstack() {
  const techIcons = [
    AiFillHtml5,
    DiCss3,
    SiTailwindcss,
    SiBootstrap,
    DiJavascript1,
    SiTypescript,
    DiReact,
    SiNextdotjs,
    SiRedux,
    DiNodejs,
    DiMongodb,
    SiExpress,
    DiGit,
    SiFirebase,
  ];

  return (
   <div className="flex flex-wrap justify-center gap-6 my-10">
  {techIcons.map((Icon, index) => (
    <div
      key={index}
      className="flex items-center justify-center w-28 h-28 rounded-xl border border-purple-500 bg-[#0d1117] shadow-md text-gray-300 hover:text-purple-500 hover:border-purple-500 transform hover:scale-110 transition duration-300"
    >
      <Icon size={60} />
    </div>
  ))}
</div>
  );
}

export default Techstack;
