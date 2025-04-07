"use client";

import React from "react";
import { AiFillGithub, AiTwotoneMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <section id="about" className="w-full bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mb-6">
          LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
        </h1>
        <p className="text-lg max-w-3xl leading-relaxed">
          I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
          <br /><br />
          I am fluent in classics like
          <span className="text-purple-500"> Javascript, ReactJs and NextJs </span>
          <br /><br />
          Whenever possible, I also apply my passion for developing web
          with <span className="text-purple-500"> Modern Javascript Library and Frameworks </span>
          like <span className="text-purple-500"> React.js</span>.
        </p>
        <div className="mt-10">
          <img src={"/avatar.svg"} alt="avatar" className="w-40 h-40 md:w-60 md:h-60 rounded-full" />
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold">FIND ME ON</h2>
          <p className="text-lg">Feel free to <span className="text-purple-500">connect</span> with me</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/SaadAhmedSA" target="_blank" rel="noreferrer" className="text-3xl text-white hover:text-purple-500">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/saad-ahmed-971362250/" target="_blank" rel="noreferrer" className="text-3xl text-white hover:text-purple-500">
              <FaLinkedinIn />
            </a>
            <a href="mailto:ss5099903@gmail.com" target="_blank" rel="noreferrer" className="text-3xl text-white hover:text-purple-500">
              <AiTwotoneMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home2;
