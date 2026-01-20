import { useForm } from "react-hook-form";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left */}
        <div className="md:w-2/3 space-y-2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">Let’s Connect</h2>
        </div>

        
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone (optional)</label>
            <input
              type="tel"
              {...register("phone")}
              className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            rows="3"
            {...register("message", {
              required: "Message is required",
            })}
            className="w-full border-b border-gray-300 focus:border-black outline-none py-2"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Send Message <FaArrowRight />
        </button>
      </form>
    </div>
  );
}

/* Reusable Social Icon */
function SocialIcon({ children, bg }) {
  return (
    <a
      href="#"
      className={`flex items-center justify-center w-10 h-10 text-xl rounded-full shadow-md transition transform hover:scale-110 text-white ${bg}`}
    >
      {children}
    </a>
  );
}
