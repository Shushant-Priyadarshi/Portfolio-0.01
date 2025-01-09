import gifCode from "../../images/gifCode.gif";
import {motion} from "framer-motion"
const AboutMe = () => {
  return (
    <>
      <div
        className="max-w-[1240px] mx-auto  md:grid grid-cols-2  md:my-10 font-poppins py-[50px] "
        id="about"
      >
        <motion.div className=" col-span-1 md:w-[70%] inline p-8 md:p-0"
        initial={{x:-800}}
        animate={{x:0}}
        transition={{delay:0.7, type:"spring", stiffness:200}}
       
       >
          <motion.img
          initial={{x:-800}}
        animate={{x:0}}
        
           
      whileHover={{scale:1.1}}
      transition={{duration:0.5,delay:0.7, type:"spring", stiffness:200}}
            src={gifCode}
            alt="coder"
            className=""
          ></motion.img>
        </motion.div>
        <motion.div className=" col-span-1 md:py-[80px] text-sm md:text-lg p-8 md:-4"
        initial={{x:800}}
        animate={{x:0}}
        transition={{delay:0.7, type:"spring", stiffness:200}}
        drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
       dragElastic={0.3}
       >
         <motion.div 
           
      whileHover={{scale:1.1}}
      transition={{duration:0.3}}
         >
         I am an 18-year-old{" "}
  <span className="text-[#3D52A0] font-bold">Fullstack Developer</span>{" "}
  based in India, currently interning at{" "}
  <span className="text-[#3D52A0] font-bold">DRDO</span> and pursuing my second year of Bachelor of
  Computer Applications at{" "}
  <span className="text-[#3D52A0] font-bold">Maharaja Surajmal Institute</span>.
  With a strong passion for technology and problem-solving, I enjoy
  creating innovative solutions and exploring the endless possibilities
  of software development.

         </motion.div> 
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;
