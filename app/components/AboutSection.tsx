import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-16 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-cyan-700 mb-8 text-heading font-mono">
          About Me
        </h2>
        <div className="flex items-center justify-center">
          <div>
            <p className="text-gray-800 max-w-3xl leading-relaxed mb-10 text-center font-medium">
              I’m Afrah Abualrob, a frontend-focused software developer with
              around three years of experience building high-quality web and
              mobile applications. I specialize in creating responsive,
              scalable, and user-friendly interfaces using modern technologies
              such as React, React Native, Next.js, TypeScript, and Redux.
              <br />
              Throughout my career, I’ve worked on diverse projects where I
              focused on performance, clean architecture, and seamless API
              integration. I enjoy writing maintainable code, improving user
              experiences, and continuously learning new tools and best
              practices. I thrive in collaborative environments and enjoy
              contributing to impactful, real-world products.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="mailto:afrahabualrob8@gmail.com"
                className="p-3 bg-stone-400 shadow-sm rounded-full border border-stone-200 hover:scale-105 hover:shadow-md transition"
              >
                <MdEmail className="w-6 h-6 text-white " />
              </a>
              <a
                href="https://github.com/afrahabualrob"
                target="_blank"
                className="p-3 bg-stone-400 shadow-sm rounded-full border border-stone-200 hover:scale-105 hover:shadow-md"
              >
                <FaGithub className="w-6 h-6 text-white " />
              </a>
              <a
                href="http://www.linkedin.com/in/afrah-abualrob-4b5569233"
                target="_blank"
                className="p-3 bg-stone-400 shadow-sm rounded-full border border-stone-200 hover:scale-105 hover:shadow-md"
              >
                <FaLinkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
