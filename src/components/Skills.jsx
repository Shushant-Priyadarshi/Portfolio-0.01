import skillData from "../Skills/skills.json";
import skill from "../../images/skill.gif";
import { Button } from "@mui/material";
import { motion, MotionConfig } from "framer-motion";

function Skills() {
  return (
    <div className="bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] w-full font-poppins  ">
      <div className="max-w-[1240px] mx-auto  md:grid grid-cols-2  md:my-10 font-poppins  ">
        <div className=" col-span-1 md:w-[70%]  md:py-[100px] ">
          <h1 className="text-center font-bold text-2xl md:text-3xl text-[#3D52A0] mt-2 pt-1 font-poppins">
            TECH STACK
          </h1>
          <div className="mt-3 text-center">
            {skillData.map((skill) => (
              <Button
                key={skill.id}
                variant="contained"
                className="hover:scale-110 duration-400 hover:rotate-3 ease-in-out"
                sx={{
                  m: 0.5,
                  bgcolor: "#7091E6",
                  fontSize: "12px",
                  fontFamily: "poppins",
                }}
              >
                {skill.skill}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center pt-4 md:ml-10">
          <div className=" col-span-1  md:text-lg p-4 text-center">
            <img
              src={skill}
              alt="skill"
              className=" h-[400px]  pt-10 hover:scale-110 duration-200 hidden md:inline"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
