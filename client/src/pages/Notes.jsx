
import React from "react";
import { FaGem, FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TopicForm from "../components/TopicForm";

const Notes = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Notes
          </h1>

          <p className="text-gray-500 mt-1">
            Manage and view all your generated notes.
          </p>
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
            from-violet-500
            to-blue-500
            text-white
            font-semibold
            shadow-lg
            "
          >
            <FaGem />
            Pricing
          </button>

          {/* History */}
          <button
            onClick={() => navigate("/history")}
            className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            border
            border-gray-300
            text-gray-700
            font-semibold
            hover:bg-gray-100
            "
          >
            <FaBook />
            My Notes
          </button>
        </div>
      </div>
      <motion.div 
        className="mb-12"
      >
        <TopicForm/>
      </motion.div>
    </div>
  );
};

export default Notes;
