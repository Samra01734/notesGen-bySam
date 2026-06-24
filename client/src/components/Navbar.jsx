
import React, { useEffect, useRef, useState } from "react";
import {
  FaGem,
  FaBook,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../redux/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);

  const userData = useSelector(
    (state) => state.user?.userData
  );

  const initial = userData?.name
    ? userData.name.charAt(0).toUpperCase()
    : "U";

  const handleSignout = () => {
    localStorage.clear();
    sessionStorage.clear();

    dispatch(clearUser());

    navigate("/auth", { replace: true });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      className="
      w-full
      flex
      items-center
      justify-between
      px-3
      md:px-6
      py-3
      bg-slate-950
      border-b
      border-slate-800
      sticky
      top-0
      z-50
    "
    >
      {/* Logo */}
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
        "
        >
          N
        </div>

        <div className="hidden sm:block">
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
        {/* Pricing */}
        <button
          onClick={() => navigate("/price")}
          className="
          flex
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
          text-white
        "
        >
          <FaGem className="text-yellow-400" />
          <span className="font-semibold">
            Pricing
          </span>
        </button>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
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
            text-white
            font-bold
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
              border
              border-slate-700
              rounded-2xl
              p-4
              shadow-2xl
            "
            >
              <div className="mb-4">
                <h3 className="text-white font-semibold">
                  {userData?.name || "User"}
                </h3>

                <p className="text-gray-400 text-sm break-all">
                  {userData?.email ||
                    "No Email Found"}
                </p>
              </div>

              <div className="border-t border-slate-700 my-3"></div>

              {/* Notes */}
              <button
                onClick={() => {
                  navigate("/notes");
                  setProfileOpen(false);
                }}
                className="
                w-full
                flex
                items-center
                gap-3
                px-3
                py-3
                rounded-xl
                hover:bg-slate-800
                text-white
              "
              >
                <FaBook />
                My Notes
              </button>

              {/* History */}
              <button
                onClick={() => {
                  navigate("/history");
                  setProfileOpen(false);
                }}
                className="
                w-full
                flex
                items-center
                gap-3
                px-3
                py-3
                rounded-xl
                hover:bg-slate-800
                text-white
              "
              >
                <FaHistory />
                History
              </button>

              <div className="border-t border-slate-700 my-3"></div>

              {/* Logout */}
              <button
                onClick={handleSignout}
                className="
                w-full
                flex
                items-center
                gap-3
                px-3
                py-3
                rounded-xl
                hover:bg-red-500/10
                text-red-400
              "
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
