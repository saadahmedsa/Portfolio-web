"use client";

import React from "react";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-7/12 text-left md:text-left">
          <h1 className="text-3xl font-bold mb-4">
            Hi There! <span role="img" aria-labelledby="wave">👋🏻</span>
          </h1>
          <h1 className="text-3xl font-extrabold text-purple-500">
            I'M <span className="text-white">SAAD AHMED</span>
          </h1>
          <div className="mt-6 text-left  ">
            <Type />
          </div>
        </div>
        <div className="md:w-5/12 flex justify-center mt-10 md:mt-0">
          <img
            src={"/home-main.svg"}
            alt="home pic"
            className="max-h-[450px] w-full object-contain"
          />
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
