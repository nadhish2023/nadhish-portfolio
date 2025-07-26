import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Spline from "@splinetool/react-spline";

const Contact = React.forwardRef((props, ref) => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div ref={ref} className="w-full px-4 sm:px-6 py-16 bg-transparent relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">

        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[5%] -left-20 w-[500px] h-[500px] bg-orange-500/20 blur-3xl rounded-full"></div>
          </div>

          {/* 3D model */}
          <div className="h-[400px] sm:h-[500px] md:h-[550px] w-full max-w-md z-10">
            <Spline scene="https://prod.spline.design/yy-hGx7ReDvpD4vp/scene.splinecode" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 p-[2px] rounded-2xl bg-gradient-to-br from-orange-400/40 via-orange-300/20 to-orange-500/30 shadow-lg">
          <div className="backdrop-blur-md bg-black/30 rounded-2xl p-8">
            <h2 className="text-3xl font-semibold text-orange-400 mb-6">Contact Me</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                className="bg-black/30 text-white placeholder-gray-300 border border-orange-400/30 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                className="bg-black/30 text-white placeholder-gray-300 border border-orange-400/30 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                name="message"
                required
                className="bg-black/30 text-white placeholder-gray-300 border border-orange-400/30 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold py-3 rounded-md hover:from-orange-600 hover:to-yellow-500 transition-all"
              >
                Send Message
              </button>
              {done && (
                <span className="text-green-400 text-sm mt-2">
                  Thanks for contacting me!
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;