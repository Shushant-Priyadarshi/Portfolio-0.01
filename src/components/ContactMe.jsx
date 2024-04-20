import { FaRegCopyright } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
function ContactMe() {
  return (
    <div className="w-full py-[20px] font-poppins ">
      <div className="flex justify-between items-center p-1 ml-3">
        <div className="flex gap-1 items-center text-sm md:text-base">
          <FaRegCopyright />
          2024 Shushant
        </div>

        <div className="flex gap-4 text-2xl mr-3">
          <a
            href="https://www.linkedin.com/in/shushant-priyadarshi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Shushant-Priyadarshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
