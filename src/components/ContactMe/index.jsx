import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("xkgzazdy"); // your Formspree ID

  return (
    <section className="w-full py-20 bg-[#060606]" id="contact">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#5237f9]">Contact Me</h2>

        {state.succeeded ? (
          <p className="text-white text-lg">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-lg">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-4 rounded-lg bg-[#141414] text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-4 rounded-lg bg-[#141414] text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              className="p-4 rounded-lg bg-[#141414] text-white focus:outline-none"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button
  type="submit"
  disabled={state.submitting}
  className="inline-block mt-2 px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-md hover:opacity-90 transition-opacity"
>
  Send Message
</button>

          </form>
        )}
      </div>
    </section>
  );
};

export default ContactMe;
