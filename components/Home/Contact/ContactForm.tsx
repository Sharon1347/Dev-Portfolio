import React from "react";
const ContactForm = () => {
  return  <div className="bg-[#0F1A38] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">Work with us!</h1>
      <p className="text-gray-200 mt-3 text-xs md:text-sm lg:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* ✅ Formspree-connected form */}
      <form
        action="https://formspree.io/f/mvgkywyd"  // 🔁 Replace with your Formspree form link
        method="POST"
        className="mt-8 block w-full overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>

        <div>
          <select
            name="service"
            defaultValue=""
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="" disabled>Select an option</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>

        <textarea
          name="message"
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Message"
          required
        ></textarea>

        <div>
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#283fa7] text-white hover:bg-[#375bd3] hover:brightness-110 transition-all duration-150 rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
};

export default ContactForm;