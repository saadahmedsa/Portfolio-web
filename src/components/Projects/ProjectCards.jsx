"use client";

import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

function ProjectCards({ imgPath, title, description, ghLink, isBlog, demoLink }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden p-4 text-white">
      <Image width={400} height={400} src={imgPath} alt="Project-img" className="w-full h-48  rounded-md" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-300 mt-2 text-justify">{description}</p>
        <div className="mt-4 flex space-x-4">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <BsGithub className="mr-2" /> {isBlog ? "Blog" : "GitHub"}
          </a>
          {!isBlog && demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <CgWebsite className="mr-2" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
