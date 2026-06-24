
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t border-purple-100 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-purple-700 to-violet-500 bg-clip-text text-transparent">
              AI Notes
            </h2>

            <p className="mt-4 text-gray-600 text-sm leading-6">
              Create smart AI-powered notes, summaries, and study materials
              in seconds. Built for students and professionals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  AI Notes
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Summaries
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-purple-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>

            <div className="flex gap-4 text-xl">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 hover:bg-purple-600 hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 hover:bg-purple-600 hover:text-white transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 hover:bg-purple-600 hover:text-white transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 hover:bg-purple-600 hover:text-white transition"
              >
                <FaInstagram />
              </a>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              support@ainotes.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-purple-100 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 AI Notes. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-purple-600 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-purple-600 transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-purple-600 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
