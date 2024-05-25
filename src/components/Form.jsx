import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
import imgForm from "../../images/contact_us.gif"


const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
           await axios.post("https://getform.io/f/qalovovb",userInfo);
           toast.success("Message sent successfull!")

        } catch (error) {
            console.log("erroe",error);
            toast.error("Something went wrong!")
        }
      }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-10 font-poppins">
      <div
        className="text-center font-bold text-3xl text-[#3D52A0] mt-2 pt-3"
        data-aos="flip-down"
      >
        Contact Me
      </div>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-10 md:my-10 p-4 md:p-0">
        <div className="col-span-1 flex justify-center rounded-lg"  data-aos="fade-right">
          <img
            src={imgForm}
            alt="Contact Us"
            className=" border-2 border-gray-300 "
          />
        </div>
        <div className="col-span-1 md:text-lg p-4" data-aos="fade-left" >
          <form className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })} 
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7091E6]"
            />
            {errors.name && <span>This field is required</span>}
            <input
              type="email"
              name="email"
              {...register("email", { required: true })} 
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7091E6]"
            />
            {errors.email && <span>This field is required</span>}
            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              {...register("message", { required: true })} 
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7091E6]"
            />
            {errors.message && <span>This field is required</span>}
            <button
              type="submit"
              className="p-3 bg-[#7091E6] text-white rounded-lg hover:bg-[#2c3a74] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
