import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

function Experience() {
  useEffect(()=>{
    AOS.init({duration:1200});
  })
  return (
    <div
      className="bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] w-full font-poppins md:py-[40px]"
      id="exp"
    >
      <div className="text-center font-bold text-3xl text-[#3D52A0] mt-2 pt-3 font-poppins" data-aos="flip-down">
        Experience
      </div>


      <div className="max-w-[1240px] mx-auto grid md:gap-20 md:grid-cols-2 md:my-10 font-poppins" >
      <div className="md:col-span-1">
          <div className="py-[20px]" data-aos="flip-down">
            <h1 className="text-center font-semibold text-lg md:text-xl ">
              National Service Scheme, MSI
            </h1>
            <div className="text-sm md:text-lg p-4 text-start">
              <h1>
                Developed frontend solutions using React.js, Tailwind CSS, and
                JavaScript for the National Service Scheme, enhancing user
                interfaces and optimizing user experience.<br></br>
                <i className="text-sm">April 2024 - July 2024</i>
              </h1>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className=" " data-aos="flip-down">
            <h1 className="text-center font-semibold text-lg md:text-xl ">
              HacktoberFest
            </h1>
            <div className="text-sm md:text-lg p-4 text-start">
              <h1>
                Contributed to open-source projects during Hacktoberfest,
                collaborating with developers globally, refining version control
                skills, and expanding proficiency in programming languages and
                frameworks<br></br>
                <i className="text-sm">Oct 2023 - Nov 2023</i>
              </h1>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Experience;
