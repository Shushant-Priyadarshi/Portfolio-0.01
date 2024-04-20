import React from "react";
import skill from "../../images/skill.gif";
import { Button } from "@mui/material";

function Skills() {
  return (
    <div className="bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] w-full font-poppins  ">
      <div className="max-w-[1240px] mx-auto  md:grid grid-cols-2  md:my-10 font-poppins  ">
        <div className=" col-span-1 md:w-[70%]  md:py-[100px] ">
          <h1 className="text-center font-bold text-2xl md:text-3xl text-[#3D52A0] mt-2 pt-1 font-poppins">
            TECH STACK
          </h1>
          <div className="flex flex-wrap justify-center pt-4 md:ml-10">
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              HTML
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              CSS
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              JavaScript
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              Bootstrap
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              Reactjs
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              Tailwind Css
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              Nodejs
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              Expressjs
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              MongoDB
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              MySql
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              PHP
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              Canva
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              Figma
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              Java
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              C
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              Python
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              Nginx
            </Button>
            <Button
              variant="contained"
              className="hover:scale-110 duration-300"
              sx={{
                m: 0.5,
                bgcolor: "#7091E6",
                fontSize: "12px",
                fontFamily: "poppins",
              }}
            >
              Firebase
            </Button>
          </div>
        </div>
        <div className=" col-span-1  md:text-lg p-4 text-center">
          <img
            src={skill}
            alt="skill"
            className=" h-[400px]  pt-10 hover:scale-110 duration-200 hidden md:inline"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Skills;
