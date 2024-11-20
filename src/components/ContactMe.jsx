
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaNpm } from "react-icons/fa";
import {motion} from "framer-motion"
import { TbFileCv } from "react-icons/tb";


function ContactMe() {

  return (
    <div className="w-full py-[20px] bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] " >
      <div className="flex justify-between items-center  p-2 md:p-4  ">
        <div className="flex gap-1 items-center text-sm md:text-base ">
          💓
          Made with Reactjs,{<br></br>}Tailwind & Framer Motion
        </div>

        <div className="flex gap-4 text-2xl md:text-4xl mr-3">
          <motion.a 
            href="https://www.linkedin.com/in/shushant-priyadarshi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </motion.a>
          <a
            href="https://github.com/Shushant-Priyadarshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.npmjs.com/settings/shushi_codes/packages"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaNpm />
          </a>
          <a
            href="https://drive.google.com/file/d/1LYMcx3nnsjCWqmYH-8yV1Sn4e1KEh_Tk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
           <TbFileCv />
          </a>  
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
