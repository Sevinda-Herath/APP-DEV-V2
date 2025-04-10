import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setStatus({ success: true, message: "✅ Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ success: false, message: "❌ Failed to send message. Please try again." });
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="mb-20"></div>
      <div className="container px-5 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-6">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Contact Us</h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
          </div>
        </div>
      </div>

      <div className="container px-5 py-1 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126711.27061084604!2d79.9078356!3d7.0413111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f7991e5d99cd%3A0x92464ead6e8776d0!2sSLT-Mobitel%20NEBULA%20Institute%20of%20Technology%20NIT!5e0!3m2!1sen!2slk!4v1744207188366!5m2!1sen!2slk"
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            className="absolute inset-0"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Nebula Institute of Technology   
                Negombo Road,   
                Welisara.   
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed">esports@nebula.edu.lk</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">94-11 2162162</p>
            </div>
          </div>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Email Us</h2>
          <p className="leading-relaxed mb-5 text-gray-600">For Any Inquiries</p>

          {status.success !== null && (
            <div
              className={`mb-4 text-sm px-4 py-2 rounded ${
                status.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Send
          </button>
          <p className="text-xs text-gray-500 mt-3">Contact Us</p>
        </form>
      </div>

      <div className="mb-10"></div>
    </section>
  );
}