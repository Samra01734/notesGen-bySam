import React from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../utils/firebase";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";

import {
  FaBrain,
  FaBook,
  FaChartLine,
  FaFileAlt,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

import { SiGoogle } from "react-icons/si";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      const response = await axios.post(
        `${serverUrl}/api/auth/google`,
        {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        dispatch(setUserData(response.data.user));
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const features = [
    {
      icon: <FaBrain />,
      title: "AI Notes",
      desc: "Generate smart study notes instantly.",
    },
    {
      icon: <FaBook />,
      title: "Learning Paths",
      desc: "Personalized learning experience.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      desc: "Track progress with detailed insights.",
    },
    {
      icon: <FaFileAlt />,
      title: "AI Quizzes",
      desc: "Auto-generated practice tests.",
    },
    {
      icon: <FaRocket />,
      title: "Fast Learning",
      desc: "Learn more in less time.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure",
      desc: "Protected and reliable platform.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[180px]" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[150px]" />

      {/* Grid Effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-10">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-xl mb-8">
              ✨ Next Generation AI Learning
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Learn
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Smarter
              </span>
              <br />
              With AI
            </h1>

            <p className="mt-8 text-lg text-gray-300 max-w-xl leading-relaxed">
              Transform your learning journey with AI-generated notes,
              intelligent quizzes, analytics and personalized study plans.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-5"
                >
                  <div className="text-3xl text-cyan-400 mb-4">
                    {item.icon}
                  </div>

                  <h3 className="font-bold text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT LOGIN CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow Behind Card */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-3xl opacity-30 rounded-[50px]" />

            <div className="relative bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[40px] p-10 shadow-2xl">

              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-3xl font-bold shadow-lg">
                  AI
                </div>

                <h2 className="text-4xl font-bold mt-6">
                  Welcome Back
                </h2>

                <p className="text-gray-300 mt-3">
                  Sign in and continue your learning journey
                </p>
              </div>

              <div className="mt-10">
                <button
                  onClick={handleGoogleAuth}
                  className="w-full py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <SiGoogle size={22} />
                  Continue with Google
                </button>
              </div>

              <div className="mt-10">
                <div className="flex justify-center -space-x-3">
                  <img
                    src="https://i.pravatar.cc/100?img=1"
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=2"
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=3"
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />
                  <img
                    src="https://i.pravatar.cc/100?img=4"
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />
                </div>

                <p className="text-center text-sm text-gray-400 mt-4">
                  Trusted by 10,000+ learners worldwide
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <h3 className="font-bold text-xl">50K+</h3>
                  <p className="text-xs text-gray-400">Students</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <h3 className="font-bold text-xl">1M+</h3>
                  <p className="text-xs text-gray-400">Notes</p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <h3 className="font-bold text-xl">99%</h3>
                  <p className="text-xs text-gray-400">Success</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Auth;