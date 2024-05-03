import React from "react";
import { FaGithub } from "react-icons/fa6";
const Projects = () => {
  return (
    <div className="py-[50px] font-poppins" id="projects">
      <h1 className="text-center font-bold text-2xl md:text-3xl text-[#3D52A0] mt-2 pt-1">
        PROJECTS
      </h1>
      <div className="max-w-[1240px] mx-auto py-10 gap-10">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-10">
        <a
            href="https://github.com/Shushant-Priyadarshi/Bookstore-MERN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="shadow-xl h-[220px]  hover:scale-110 duration-500 md:mb-10  rounded-lg">
              <div className="text-center flex flex-col gap-5 m-2  justify-between  ">
                <h1 className="font-semibold p-3 ">ShelfAri </h1>
                <p>
                  Shelfari is a full-stack app for managing bookstore.
                </p>
                <h1 className="mb-1">MERN</h1>
              </div>
              <div className="text-center">
                <FaGithub className="text-2xl text-end inline" />
              </div>
            </div>
          </a>

          <a
            href="https://github.com/Shushant-Priyadarshi/Blinkit-Clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="shadow-xl h-[220px] bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] hover:scale-110 duration-500 mb-10 md:mb-0 rounded-lg">
              <div className="text-center flex flex-col gap-5 m-2 justify-between ">
                <h1 className="p-4 font-semibold">Blinkit Clone</h1>
                <p>
                  A taskbar that provides content suggestions for users to write
                </p>
                <h1>Html Css Javascript</h1>
              </div>
              <div className="text-center">
                <FaGithub className="text-2xl text-end inline" />
              </div>
            </div>
          </a>


          <a
            href="https://github.com/Shushant-Priyadarshi/Code-Editor"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <div className="shadow-xl h-[220px]  hover:scale-110 duration-500 mb-10 md:mb-0 rounded-lg">
              <div className="text-center flex flex-col gap-5 m-2  justify-between">
                <h1 className="p-4 font-semibold">Code Editor</h1>
                <p>This project is a simple yet powerful code editor.</p>
                <h1>Html Css Javascript</h1>
              </div>
              <div className="text-center">
                <FaGithub className="text-2xl text-end inline" />
              </div>
            </div>
          </a>

          <a
            href="https://github.com/Shushant-Priyadarshi/ChatApp-Firebase"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="shadow-xl h-[220px] bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] hover:scale-110 duration-500 mb-10 rounded-lg md:mb-0">
              <div className="text-center flex flex-col gap-5   justify-between">
                <h1 className="p-4 font-semibold">Chat App</h1>
                <p className="mb-5">Real time chat application</p>
                <h1 className="mb-1">ReactJS, Chakra UI, and Firebase.</h1>
              </div>
              <div className="text-center">
                <FaGithub className="text-2xl text-end inline" />
              </div>
            </div>
          </a>

       
        </div>
      </div>
    </div>
  );
};

export default Projects;
