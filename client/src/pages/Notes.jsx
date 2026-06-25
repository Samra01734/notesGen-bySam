import React from "react";
import { FaGem, FaHistory, FaFileAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TopicForm from "../components/TopicForm.jsx";

const Notes = () => {
  const navigate = useNavigate();

  const notes = []; // API se notes aayenge

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              My Notes
            </h1>
            <p className="text-gray-500 mt-1">
              View and manage your generated notes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/price")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 text-white font-semibold"
            >
              <FaGem />
              Pricing
            </button>

            <button
              onClick={() => navigate("/history")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100"
            >
              <FaHistory />
              History
            </button>
          </div>
        </div>
      </div>

      {/* Notes Section */}
       <TopicForm/> 
    </div>
  );
};

export default Notes;