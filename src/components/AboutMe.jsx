import gifCode from "../../images/gifCode.gif";

const AboutMe = () => {
  return (
    <>
      <div
        className="max-w-[1240px] mx-auto  md:grid grid-cols-2  md:my-10 font-poppins py-[50px] "
        id="about"
      >
        <div className=" col-span-1 md:w-[70%] inline">
          <img
            src={gifCode}
            alt="coder"
            className="hover:scale-110 duration-500"
          ></img>
        </div>
        <div className=" col-span-1 md:py-[80px] text-sm md:text-lg p-4">
          I am a 17-year-old{" "}
          <span className="text-[#3D52A0] font-bold">Frontend developer</span>{" "}
          based in India, currently pursuing my first year of Bachelor of
          Computer Applications at{" "}
          <span className="text-[#3D52A0] font-bold">
            Maharaja Surajmal Institute
          </span>
          . With a strong passion for technology and problem-solving, I enjoy
          creating innovative solutions and exploring the endless possibilities
          of software development.
        </div>
      </div>
    </>
  );
};

export default AboutMe;
