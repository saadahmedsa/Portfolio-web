"use client";

import React from "react";
import ProjectCards from "./ProjectCards";
import zyck from "../../Assets/Projects/Zyck.PNG";
import olx from "../../Assets/Projects/olx.PNG";
import gym from "../../Assets/Projects/gym.PNG";
import driver from "../../Assets/Projects/Driver.PNG";
import estate from "../../Assets/Projects/Estate.PNG";
import meme from "../../Assets/Projects/meme.PNG";
import blog from "../../Assets/Projects/blogging.PNG";
import ecom from "../../Assets/Projects/e-commerce.PNG";
import buy from "../../Assets/Projects/buysell.PNG";
import weather from "../../Assets/Projects/weather.PNG";
import todo from "../../Assets/Projects/todo.PNG";
import char from "../../Assets/Projects/charity.PNG";

function Projects() {
  return (
    <div className="bg-gray-900 min-h-screen py-10 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          My Recent <span className="text-purple-500">Projects</span>
        </h1>
        <p className="text-center text-gray-400 mb-10">
          Here are a few projects I've worked on recently.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            img: zyck, title: "Zyck Properties", desc: "Real Estate app using Next.js for selling and renting properties.", demo: "https://www.zyckproperty.com/"
          }, {
            img: olx, title: "Olx Clone", desc: "Users can sign in and post ads for selling items.", gh: "https://github.com/SaadAhmedSA/olx-clone", demo: "https://olx-clone-sfvs.vercel.app/"
          }, {
            img: gym, title: "Shape-Up Gym", desc: "Gym website created with Next.js.", gh: "https://github.com/SaadAhedSA/Shape-up-Gym", demo: "https://shape-up-gym-gz1w.vercel.app/"
          }, {
            img: driver, title: "Rider Register App", desc: "Driver registration app like Indrive using React.js and Firebase.", gh: "https://github.com/SaadAhmedSA/Rider-registeration-web", demo: "https://rider-registeration-web.vercel.app/"
          }, {
            img: estate, title: "Real Estate App", desc: "React & Tailwind CSS Real Estate listing app.", gh: "https://github.com/SaadAhmedSA/Real-Estate", demo: "https://real-estate-lovat-delta.vercel.app/"
          }, {
            img: meme, title: "Meme Maker App", desc: "Meme generator using Next.js and meme API.", gh: "https://github.com/SaadAhmedSA/Meme-Maker", demo: "https://meme-make.netlify.app/"
          }, {
            img: blog, title: "Blogging App", desc: "A blogging platform built with React and Firebase.", gh: "https://github.com/SaadAhmedSA/Blogging-App-React", demo: "https://react-pro-2.netlify.app/"
          }, {
            img: ecom, title: "E-commerce App", desc: "E-commerce platform with Redux for global state handling.", gh: "https://github.com/SaadAhmedSA/E-commerce-with-add-to-cart-redux", demo: "https://e-commerce-with-add-to-cart-redux.vercel.app/"
          }, {
            img: buy, title: "Buy-Sell Corner", desc: "Users can list products for sale.", gh: "https://github.com/SaadAhmedSA/E-commerce-with-add-to-cart-redux", demo: "https://e-commerce-with-add-to-cart-redux.vercel.app/"
          }, {
            img: weather, title: "Weather App", desc: "Weather app using API and React.js.", gh: "https://github.com/SaadAhmedSA/Weather-App-React", demo: "https://reactproject-weatherapp.netlify.app/"
          }, {
            img: todo, title: "Realtime Todo App", desc: "Todo app with Firebase realtime updates.", gh: "https://github.com/SaadAhmedSA/Todo-app-firebase-realtime", demo: "https://todoapp-firebaserealtime.netlify.app/"
          }, {
            img: char, title: "The Charity", desc: "Charity website using HTML, CSS, and Bootstrap.", gh: "https://github.com/SaadAhmedSA/The-Charity", demo: "https://saadahmedsa.github.io/The-Charity/"
          }].map((project, index) => (
            <ProjectCards
              key={index}
              imgPath={project.img}
              title={project.title}
              description={project.desc}
              ghLink={project.gh}
              demoLink={project.demo}
              isBlog={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
