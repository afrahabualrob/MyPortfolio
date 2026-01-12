import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-20 bg-[#fff]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  max-w-7xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-cyan-700 mb-3 font-mono text-stone-400">
            Get in Touch
          </h2>

          <p className="text-lg font-medium text-gray-600 mb-6">
            I'd love to hear from you!
          </p>

          <p className="text-gray-600 max-w-md leading-relaxed">
            If you have any inquiries, collaborations, or just want to say hi
            feel free to reach out using the contact form or directly through my
            contact details.
          </p>
          <div className="mt-8 space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-700" size={20} />
              <span className="text-sm font-mono ">+972 568378234</span>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="w-6 h-6 text-cyan-700" />
              <a
                href="mailto:afrahabualrob8@gmail.com"
                className="text-sm hover:text-cyan-600 transition "
              >
                afrahabualrob8@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaLocationDot className="w-6 h-6 text-cyan-700" />
              <span className="text-sm">Jenin, Palestine</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <a
              href="https://github.com/afrahabualrob"
              target="_blank"
              className="p-2 border border-gray-300 rounded-full hover:scale-105 hover:shadow-md transition"
            >
              <FaGithub className="w-6 h-6 text-stone-400" />
            </a>

            <a
              href="https://www.linkedin.com/in/afrahabualrob-4b5569233"
              target="_blank"
              className="p-2 border border-gray-300 rounded-full hover:scale-105 hover:shadow-md transition"
            >
              <FaLinkedinIn className="w-6 h-6 text-stone-400" />
            </a>
          </div>
        </div>
        <form className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">First Name</label>
              <input
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Last Name</label>
              <input
                type="text"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm text-gray-700">Email *</label>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm text-gray-700">Message</label>
            <textarea
              rows={5}
              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-cyan-500"
            ></textarea>
          </div>

          <a
            href="mailto:afrahabualrob8@gmail.com"
            type="submit"
            className="mt-6 rounded-full 
            bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-800 
            hover:scale-105 hover:shadow-md text-white px-6 py-2 transition float-right font-semibold"
          >
            Send
          </a>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
