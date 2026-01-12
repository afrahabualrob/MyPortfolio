import { motion } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { SiUpwork } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const HomeSection = () => {
  return (
    <motion.section
      id="home"
      className="flex items-center justify-center px-6 md:px-12 lg:px-20 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2">
          <motion.p
            className="text-stone-600 font-semibold text-lg font-serif"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            className="mt-2 text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-cyan-500 via-cyan-700 to-stone-300 bg-[length:200%_200%] bg-clip-text text-transparent font-mono"
            >
              Afrah Abualrob
            </motion.span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, x: -75 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-lato font-bold text-stone-400 text-2xl mt-1 font-serif"
          >
            <Typewriter
              words={[
                "Frontend Developer",
                "Next.js Developer",
                "React Developer",
                "React Native Developer",
              ]}
              cursor
              cursorStyle="_"
              cursorColor="hsl(var(--primary))"
              cursorBlinking
              typeSpeed={70}
              loop
            />
          </motion.h3>
          <motion.p
            className="mt-5 text-stone-600 text-sm md:text-base max-w-xl leading-relaxed font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            I’m a Frontend Developer specializing in React, React Native, and
            Next.js. I create fast, responsive applications with a strong focus
            on UX, performance, and clean code.
          </motion.p>
          <div className="mt-10">
            <div className="mx-auto h-px max-w-4xl bg-stone-300" />
          </div>
          <div className="flex flex-wrap gap-4 mt-5">
            <a
              href="mailto:afrahabualrob8@gmail.com"
              className="flex items-center gap-2 rounded-2xl bg-cyan-800 px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:shadow-md font-sans"
            >
              Contact Me Here
              <HiArrowSmallRight size={20} />
            </a>

            <a
              href="/Afrah-Abualrob-Resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-2xl bg-stone-400 text-white px-6 py-3 text-sm font-medium 
               transition hover:scale-105 hover:shadow-md  font-sans"
            >
              My Resume
              <LuSend size={20} />
            </a>
            <a
              href="http://www.linkedin.com/in/afrah-abualrob-4b5569233"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-400 text-white transition hover:scale-105 hover:shadow-md"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/afrahabualrob"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-400 text-white transition hover:scale-105 hover:shadow-md"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01851fe31d17da7ebe"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-400 text-white transition hover:scale-105 hover:shadow-md"
            >
              <SiUpwork className="h-5 w-5" />
            </a>
          </div>
        </div>
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut", delay: 0.3 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            },
          }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/d-icon-avatar-cartoon-cute-freelancer-woman-working-online-learning-laptop-transparent-png-background-works-embodying-345422695.jpg"
            alt="Afrah working as a web developer"
            className="w-full max-w-md lg:max-w-lg"
            height="300px"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomeSection;
