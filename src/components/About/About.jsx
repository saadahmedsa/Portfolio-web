"use client";

import React from "react";
import Github from "./Github.jsx";
import Techstack from "./Techstack.jsx";
import Aboutcard from "./AboutCard.jsx";

function About() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 flex flex-col items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="md:w-2/3 text-left">
            <h1 className="text-4xl font-bold mb-6 text-center">
              Know Who <span className="text-purple-500">I'M</span>
            </h1>
            <Aboutcard />
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src={"/about.png"} alt="about" className="max-w-xs md:max-w-sm rounded-lg shadow-lg" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mt-16">
          Professional <span className="text-purple-500">Skillset</span>
        </h1>
        <Techstack />

        <Github />
      </div>
    </section>
  );
}

export default About;
