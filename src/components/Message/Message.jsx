
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

const Message = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("Sending data:", data);
      
      await axios.post("https://formspree.io/f/YOUR_FORM_ID", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Form submitted successfully!");
      reset(); 
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div>
      <div className="bg-background-color mt-10 pb-10">

            <div className="grid md:flex items-center">


            <div className="px-5 md:pl-20">
          <div className="text-white text-4xl leading-none md:leading-none xl:leading-line-h md:text-5xl lg:text-6xl xl:text-8xl font-bold banner1 pt-5 md:pt-10 lg:pt-12">
            LET'S TALK<br /> ABOUT YOUR<br />
            <span className="text-red-color">PROJECT</span>
          </div>

          <div className="lg:flex items-center lg:gap-24 xl:gap-32">
            <div className="text-white pt-3 md:pt-10 banner1 text-xs md:text-lg xl:text-xl">
              Let’s discuss your project and see how we can turn <br /> your
              vision into reality. Whether you have a plan or <br /> just an
              idea, we’re here to help elevate your brand!
            </div>
          </div>
        </div>

        <div className="pt-20" style={{ maxWidth: "500px", margin: "0 auto" }}>
          <form onSubmit={handleSubmit(onSubmit)}>

                        
                        <div>
              <input className="lg:w-80 py-3 my-5"
                type="text"
                placeholder="Full name"
                {...register("name")}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

                
                <div>
              <input  className="lg:w-80 py-3 my-5"
                type="text"
                placeholder="Phone number"
                {...register("phone")}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            
            <div>
              <input  className="lg:w-80 py-3 my-5"
                type="email"
                placeholder="Your email here"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>





            
            <div>
              <textarea  className=" w-44 md:w-44 lg:w-80 py-6 my-5"
                placeholder="Message"
                {...register("message")}
              ></textarea>
              {errors.message && <p>{errors.message.message}</p>}
            </div>

            <div>
                    <button className='bg-red-color text-white  banner1 px-4 md:px-8 py-2 rounded-full mt-2 '>SUBMIT MESSAGE</button>
                </div>
          </form>

          <ToastContainer />
        </div>


            </div>





      </div>
    </div>
  );
};

export default Message;
