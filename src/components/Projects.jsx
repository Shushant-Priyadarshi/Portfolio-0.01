import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projectData from "../Constants/projects.json";
import { motion } from "framer-motion";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800,delay:200 });
  }, []);

  return (
    <div className="py-[50px] font-poppins" id="projects">
      <h1
        className="text-center font-bold text-2xl md:text-3xl text-[#3D52A0] mt-2 pt-1"
        data-aos="flip-down"
      >
        PROJECTS
      </h1>
      <div className="max-w-[1240px] mx-auto py-10 gap-10 p-6 md:p-0   ">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-4 md:gap-10">
          {projectData.map((data) => (
            <motion.a
              
              transition={{ duration: 0.3 }}
              key={data.id}
              data-aos="flip-up"
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={`shadow-2xl h-[220px]  hover:scale-110 duration-500 md:mb-10  rounded-lg mt-8 md:mt-5 ${
                  data.alternate
                    ? "bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] w-full  "
                    : ""
                }`}
              >
                <div className="text-center flex flex-col gap-5 m-2  justify-between  ">
                  <h1 className="font-semibold p-3 ">{data.name} </h1>
                  <p>{data.description}</p>
                  <h1 className="mb-1 text-sm">{data.tech}</h1>
                </div>
                {/* <div className="text-center">
                  <FaGithub className="text-2xl text-end inline" />
                </div> */}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
