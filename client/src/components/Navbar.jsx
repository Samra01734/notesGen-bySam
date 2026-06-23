import React, { useState } from "react";
import {
  FaGem,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] =
    useState(false);

  const userData = useSelector(
    (state) => state.user?.userData
  );

  const initial = userData?.name
    ? userData.name.charAt(0).toUpperCase()
    : "U";

  const handleSignout = () => {
    localStorage.clear();
    navigate("/auth");
  };
  
  return (
    <div className="w-full flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">

      {/* Left Side Logo */}
      <div
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div
          className="
            h-11
            w-11
            rounded-xl
            bg-gradient-to-r
            from-violet-500
            to-blue-500
            flex
            items-center
            justify-center
            text-white
            font-bold
            text-lg
            shadow-lg
          "
        >
          N
        </div>

        <div>
          <h2 className="text-white font-bold text-xl">
            NotesGen
          </h2>

          <p className="text-xs text-slate-400">
            AI Exam Notes Generator
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* Credits Badge */}
        <button
          onClick={() => navigate("/pricing")}
          className="
            hidden
            md:flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            bg-gradient-to-r
            from-violet-500/20
            to-blue-500/20
            border
            border-violet-500/30
            backdrop-blur-xl
            hover:scale-105
            transition
            cursor-pointer
          "
        >
          <FaGem className="text-yellow-400" />

          <span className="font-semibold text-white">
            {userData?.credits || 50}
          </span>

          <span className="text-gray-300 text-sm">
            Credits
          </span>
        </button>

        {/* Profile */}
        <div className="relative">

          <button
            onClick={() =>
              setProfileOpen(!profileOpen)
            }
            className="
              h-10
              w-10
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-blue-500
              flex
              items-center
              justify-center
              font-bold
              text-white
              shadow-lg
            "
          >
            {initial}
          </button>

          {profileOpen && (
            <div
              className="
                absolute
                right-0
                top-14
                w-72
                bg-slate-900
                rounded-2xl
                border
                border-slate-700
                p-4
                shadow-2xl
                z-50
              "
            >
              <div className="mb-4">
                <h3 className="font-semibold text-white">
                  {userData?.name || "User"}
                </h3>

                <p className="text-sm text-gray-400">
                  {userData?.email ||
                    "No Email"}
                </p>
              </div>

              <div className="border-t border-slate-700 pt-3">

                <button
                  onClick={() =>
                    navigate("/profile")
                  }
                  className="
                    w-full
                    text-left
                    px-3
                    py-3
                    rounded-xl
                    hover:bg-slate-800
                    flex
                    items-center
                    gap-3
                    text-white
                  "
                >
                  <FaUser />
                  Profile
                </button>

                <button
                  onClick={handleLogout}
                  className="
                    w-full
                    text-left
                    px-3
                    py-3
                    rounded-xl
                    hover:bg-red-500/10
                    flex
                    items-center
                    gap-3
                    text-red-400
                  "
                >
                  <FaSignOutAlt />
                  Sign Out
                </button>

              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Navbar;