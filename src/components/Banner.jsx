import { ReactTyped } from "react-typed";
import Header from "./Header";
const Banner = () => {
  return (
    <div
      className="bg-gradient-to-b from-[#D9DFFE] to-[#EDE8F5] w-full py-[50px] font-poppins"
      id="home"
    >
      <div className="max-w-[1240px] mx-auto text-center my-[80px] ">
        <Header />
        <div className="font-bold text-2xl mb-5 md:text-5xl">
          Hello.&nbsp;&nbsp;I'm Shushant<br></br>
        </div>

        <div className="text-[#7091E6] font-bold  text-2xl md:text-6xl">
          <ReactTyped
            className="pl-2"
            strings={["A Frontend Developer"]}
            typeSpeed={100}
            backSpeed={60}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
