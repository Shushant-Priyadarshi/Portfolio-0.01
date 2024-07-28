import { ReactTyped } from "react-typed";
import Header from "./Header";
import {motion} from "framer-motion"
const Banner = () => {
  return (
    <div
      className="bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] w-full py-[50px] font-poppins"
      id="home"
    >
      <div className="max-w-[1240px] mx-auto text-center my-[80px] ">
        <Header />
        <motion.div className="font-bold text-3xl mb-5 md:text-5xl"
        initial={{y:-250}}
        animate={{y:0}}
        transition={{delay:0.6,type:"spring" ,stiffness:120}}>
          Hello,&nbsp;&nbsp;I'm Shushant<br></br>
        </motion.div>

        <motion.div className="text-[#7091E6] font-bold  text-3xl md:text-6xl"
         initial={{y:-500,scale:5.5}}
        animate={{y:0,scale:1}}
        transition={{delay:0.7,type:"spring" ,stiffness:120}}>
          <ReactTyped
            className="pl-2"
            strings={["A Fullstack Developer"]}
            typeSpeed={100}
            backSpeed={60}
            loop={true}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
