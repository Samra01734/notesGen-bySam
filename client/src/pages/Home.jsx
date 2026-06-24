
import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import {
  FaBookOpen,
  FaFileAlt,
  FaBrain,
  FaGraduationCap,
} from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
  const features = [
    {
      icon: <FaBookOpen />,
      title: "Study Notes",
      desc: "Generate organized notes instantly from any topic.",
    },
    {
      icon: <FaBrain />,
      title: "AI Summary",
      desc: "Convert long lectures into short summaries.",
    },
    {
      icon: <FaFileAlt />,
      title: "Exam Notes",
      desc: "Get important questions and key concepts quickly.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Smart Learning",
      desc: "Learn faster with AI-powered study assistance.",
    },
  ];

  return (
    <div
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-gradient-to-br
      from-white
      via-purple-50
      to-violet-100
      text-black
      "
    >
      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-300/30 rounded-full blur-3xl" />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              rotateX: 6,
              rotateY: -6,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <motion.h1
              whileHover={{ y: -4 }}
              style={{
                transform: "translateZ(40px)",
              }}
              className="
              text-5xl
              lg:text-7xl
              font-extrabold
              leading-tight
              bg-gradient-to-r
              from-purple-700
              via-violet-500
              to-purple-900
              bg-clip-text
              text-transparent
              "
            >
              Create Smart
              <br />
              AI Notes
              <br />
              In Seconds
            </motion.h1>

            <motion.p
              whileHover={{ y: -2 }}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              Upload PDFs, lecture notes, study material, or any topic.
              Our AI instantly creates clean notes, summaries, and
              exam-ready content.
            </motion.p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                className="
                px-8
                py-4
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                to-violet-500
                text-white
                font-semibold
                shadow-lg
                hover:scale-105
                transition
                "
              >
                Get Started
              </button>

              <button
                className="
                px-8
                py-4
                rounded-xl
                border
                border-purple-300
                text-purple-700
                font-semibold
                hover:bg-purple-50
                transition
                "
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200"
            alt="AI Notes"
            className="
            w-full
            max-w-lg
            rounded-3xl
            shadow-2xl
            border
            border-purple-200
            "
          />
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2
            className="
            text-4xl
            font-bold
            bg-gradient-to-r
            from-purple-700
            to-violet-500
            bg-clip-text
            text-transparent
            "
          >
            Everything You Need For Notes
          </h2>

          <p className="text-gray-600 mt-3">
            Powerful AI tools for students and professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
              bg-white/80
              backdrop-blur-md
              border
              border-purple-100
              rounded-2xl
              p-6
              shadow-lg
              hover:shadow-purple-200
              transition
              "
            >
              <div className="text-3xl text-purple-600 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
    
  );
};

export default Home;

