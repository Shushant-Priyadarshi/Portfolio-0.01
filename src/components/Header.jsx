import React from "react";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center relative z-10">
      <div className="bg-[#7091E6] p-4 mt-3 items-center font-poppins fixed top-0 rounded-lg ">
        <div>
          <ul className="flex gap-10 items-center cursor-pointer text-white text-[0.6rem] md:text-base">
            <li
              onClick={() => scrollToSection("home")}
              className="hover:text-black cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="hover:text-black cursor-pointer"
            >
              About Me
            </li>
            <li
              onClick={() => scrollToSection("projects")}
              className="hover:text-black cursor-pointer"
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection("exp")}
              className="hover:text-black cursor-pointer"
            >
              Experience
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
