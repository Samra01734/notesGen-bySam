import React from "react";
import { motion } from "framer-motion";
import { SiGoogle } from "react-icons/si";
 import axios from "axios"
import {
  FaBrain,
  FaBook,
  FaChartLine,
  FaFileAlt,
  FaCloud,
  FaArrowRight,
} from "react-icons/fa";
import { linkWithCredential, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { serverUrl } from "../App";

const features = [
  {
    icon: <FaBrain />,
    title: "AI Notes",
    desc: "Generate smart and structured notes instantly.",
  },
  {
    icon: <FaBook />,
    title: "Exam Prep",
    desc: "Focused preparation with AI recommendations.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics",
    desc: "Track learning performance and progress.",
  },
  {
    icon: <FaFileAlt />,
    title: "PDF Export",
    desc: "Download notes professionally in PDF format.",
  },
];

const Auth = () => {

const handleGoogleAuth = async () => {
  try {
    // Firebase Google Login
    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    const name = user.displayName;
    const email = user.email;

    // Backend API Call
    const response = await axios.post(
      `${serverUrl}/api/auth/google`,
      {
        name,
        email,
      },
      {
        withCredentials: true,
      }
    );

    console.log("Login Success");
    console.log(response.data);

  } catch (error) {
    console.log("ERROR:", error);

    if (error.response) {
      console.log("Server Error:", error.response.data);
    }
  }
};

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070B14] text-white">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-500/20 blur-[140px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-8"
      >
        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-5 backdrop-blur-3xl">

          <div>
            <h1 className="text-2xl font-bold">ExamNotes AI</h1>
            <p className="mt-1 text-sm text-gray-400">
              Smart Learning Platform
            </p>
          </div>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <span>Features</span>
            <span>Analytics</span>
            <span>Revision</span>
            <span>Notes</span>
          </div>
        </div>
      </motion.header>

      {/* Main */}
      <main className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            🚀 Next Generation Learning Platform
          </div>

          <h1 className="mt-8 text-6xl font-black leading-none md:text-8xl">
            Future of
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Learning
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
            Create AI-powered notes, revise smarter, track progress,
            and boost exam performance with a modern learning experience.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative mt-10 flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.35)]"
            onClick={handleGoogleAuth}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />

            <SiGoogle className="relative z-10 text-lg" />
            <span className="relative z-10">
              Continue with Google
            </span>

            <FaArrowRight className="relative z-10 transition group-hover:translate-x-1" />
          </motion.button>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
            <span>✓ AI Notes</span>
            <span>✓ Exam Analytics</span>
            <span>✓ Cloud Sync</span>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <h2 className="text-4xl font-bold">50K+</h2>
              <p className="mt-1 text-gray-500">Students</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">1M+</h2>
              <p className="mt-1 text-gray-500">Notes</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">98%</h2>
              <p className="mt-1 text-gray-500">Success</p>
            </div>
          </div>
        </motion.div>

        {/* Right Dashboard */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-3xl">

            {/* Score Card */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 p-6">
              <p className="text-sm text-gray-300">
                AI Learning Score
              </p>

              <h2 className="mt-2 text-6xl font-black">
                94%
              </h2>

              <p className="mt-2 text-sm text-green-400">
                +12% this week
              </p>
            </div>

            {/* Progress */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5">

              <div className="mb-3 flex justify-between">
                <span>Machine Learning</span>
                <span>82%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[82%] rounded-full bg-cyan-400" />
              </div>

              <div className="mb-3 mt-5 flex justify-between">
                <span>Programming</span>
                <span>91%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[91%] rounded-full bg-violet-400" />
              </div>

            </div>

            {/* Features */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {features.map((item, index) => (
                <FeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>

            {/* Bottom */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-400">
                  <FaCloud size={20} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Cloud Sync Enabled
                  </h3>

                  <p className="text-sm text-gray-400">
                    Access your notes anytime, anywhere.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </motion.div>
      </main>
    </div>
  );
};

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-violet-500/0 opacity-0 transition group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-3 text-2xl text-cyan-400">
          {icon}
        </div>

        <h3 className="font-semibold">{title}</h3>

        <p className="mt-2 text-sm text-gray-400">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export default Auth;