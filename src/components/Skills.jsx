
import skillData from "../Constants/skills.json";
import skill from "../../images/skill.gif";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

const hoverEffect = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function Skills() {

  useEffect(()=>{
    AOS.init({duration:800});
  })
  return (
    <div className="bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] w-full font-poppins">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 md:my-10 font-poppins">
        <div className="col-span-1 md:w-[70%] md:py-[100px]">
          <h1 className="text-center font-bold text-2xl md:text-3xl text-[#3D52A0] mt-2 pt-1 font-poppins" data-aos="fade-right">
            TECH STACK
          </h1>
          <div className="mt-3 text-center"  data-aos="fade-right">
            {skillData.map((skill) => (
              <motion.button
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.3}
                transition={{ duration: 1 }}
                key={skill.id}
                className="border-2 m-1 rounded-lg p-2 bg-[#7091E6] text-white text-base"
                variants={hoverEffect}
                whileHover="hover"
              >
                {skill.skill}
              </motion.button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center pt-4 md:ml-10">
          <div className="col-span-1 md:text-lg p-4 text-center" data-aos="fade-left">
            <motion.img
              drag
              dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
              dragElastic={0.3}
              transition={{ duration: 0.1 }}
              src={skill}
              alt="skill"
              className="h-[400px] pt-10 hover:scale-110 duration-200 hidden md:inline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
