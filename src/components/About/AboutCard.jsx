import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className=" text-white py-6 rounded-lg shadow-lg">
      <p className="text-justify">
  Hi Everyone, I am <span className="text-purple-500">Saad Ahmed</span> from{" "}
  <span className="text-purple-500">Karachi, Pakistan.</span>
  <br />
  <br />
  I am a Junior Front-end developer using <span className="text-purple-500">ReactJS</span> &{" "}
  <span className="text-purple-500">NextJS</span>. I had an opportunity to intern at{" "}
  <span className="text-purple-500">Zyck Technology</span> as a Front-end Developer, where I really
  enjoyed my experience and contributed to their projects.
  <br/>
  <br/>
   I also worked as a{" "}
  <span className="text-purple-500">MERN Stack Developer</span> at{" "}
  <span className="text-purple-500">Saylani Tech</span>, where I gained hands-on experience in
  building full-stack applications , integrating APIs, managing databases, and delivering end-to-end solutions.
  <br />
  <br />
   I’m passionate about creating impactful web applications, exploring modern{" "}
  <span className="text-purple-500">JavaScript frameworks</span>, and continuously improving my
  development skills.
  <br />
  <br />
  Apart from coding, some other activities that I love to do!
</p>

      <ul className="mt-4 space-y-2">
        <li className="flex items-center space-x-2">
          <ImPointRight className="text-purple-500" />
          <span>Cooking</span>
        </li>
        <li className="flex items-center space-x-2">
          <ImPointRight className="text-purple-500" />
          <span>Teaching</span>
        </li>
        <li className="flex items-center space-x-2">
          <ImPointRight className="text-purple-500" />
          <span>Travelling</span>
        </li>
      </ul>
    </div>
  );
}

export default AboutCard;
