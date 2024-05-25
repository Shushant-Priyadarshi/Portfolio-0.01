import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="flex justify-center relative z-10"
     
    >
      <motion.div
        className="bg-[#7091E6] p-4 mt-3 items-center font-poppins fixed top-0 rounded-lg "
        animate={{ y: 1 }}
        initial={{ y: -250 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
      >
        <motion.div>
          <ul className="flex gap-10 items-center cursor-pointer text-white text-[0.8rem] md:text-xl">
            <motion.h1
              onClick={() => scrollToSection("home")}
              className=" cursor-pointer hover:scale-125 duration-300 ease-in"
            >
              Home
            </motion.h1>
            <motion.h1
              onClick={() => scrollToSection("about")}
              className=" cursor-pointer hover:scale-125 duration-300 ease-in "
            >
              About Me
            </motion.h1>
            <motion.h1
              onClick={() => scrollToSection("projects")}
              className=" cursor-pointer  hover:scale-125 duration-300 ease-in"
            >
              Projects
            </motion.h1>
            <motion.h1
              onClick={() => scrollToSection("exp")}
              className=" cursor-pointer  hover:scale-125 duration-300 ease-in"
            >
              Experience
            </motion.h1>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
