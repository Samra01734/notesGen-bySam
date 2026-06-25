import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaGraduationCap,
  FaClipboardList,
  FaMagic,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { updateCredits } from "../redux/userSlice";

const TopicForm = () => {
  const dispatch = useDispatch();

  const credits = useSelector(
    (state) => state.user?.userData?.credits || 0
  );

  const [topic, setTopic] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [examType, setExamType] = useState("");
  const [revisionMode, setRevisionMode] = useState("normal");
  const [includeDiagram, setIncludeDiagram] = useState(false);
  const [includeChart, setIncludeChart] = useState(false);

  const [generatedNotes, setGeneratedNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("");

  const handleGenerate = async () => {
    if (!topic || !classLevel || !examType) {
      alert("Please fill all fields");
      return;
    }

    if (credits <= 0) {
      alert("You don't have enough credits");
      return;
    }

    try {
      setLoading(true);

      console.log({
        topic,
        classLevel,
        examType,
        revisionMode,
        includeDiagram,
        includeChart,
      });

      await new Promise((resolve) => setTimeout(resolve, 5000));

      const notes = `
📘 Topic: ${topic}

🎓 Class Level: ${classLevel}

📝 Exam Type: ${examType}

⚡ Revision Mode: ${revisionMode}

-------------------------------------

1. Introduction
${topic} is an important concept that helps students understand key fundamentals.

2. Key Points
• Point 1
• Point 2
• Point 3

3. Important Notes
• Easy to revise
• Exam focused
• Quick understanding

${includeDiagram ? "\n📊 Diagram Included" : ""}
${includeChart ? "\n📈 Chart Included" : ""}

✅ Notes Generated Successfully
`;

      setGeneratedNotes(notes);

      setProgress(100);
      setProgressText("Notes Generated Successfully ✅");

      dispatch(updateCredits(credits - 1));
    } catch (error) {
      console.log(error);
      alert("Failed to generate notes");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  };

  useEffect(() => {
    if (!loading) {
      setProgress(0);
      setProgressText("");
      return;
    }

    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 8;

      if (value >= 95) {
        value = 95;
        setProgressText("Almost done...");
        clearInterval(interval);
      } else if (value > 70) {
        setProgressText("Finalizing notes...");
      } else if (value > 40) {
        setProgressText("Processing content...");
      } else {
        setProgressText("Generating notes...");
      }

      setProgress(Math.floor(value));
    }, 700);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <div
        className="
          relative overflow-hidden
          rounded-3xl
          border border-white/10
          bg-gradient-to-br
          from-[#111827]
          via-[#0f172a]
          to-[#1e1b4b]
          p-8 md:p-10
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        "
      >
        <div className="absolute top-0 left-0 h-60 w-60 bg-violet-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 h-60 w-60 bg-blue-600/20 blur-3xl rounded-full" />

        <div className="relative z-10 flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">
              AI Notes Generator 🚀
            </h2>

            <p className="text-gray-400 mt-2">
              Generate smart revision notes instantly.
            </p>
          </div>

          <div className="px-4 py-2 rounded-xl bg-violet-500/20 border border-violet-500/30">
            <p className="text-sm text-violet-300">
              Credits: <span className="font-bold">{credits}</span>
            </p>
          </div>
        </div>

        <div className="relative z-10 space-y-5">
          <div className="relative">
            <FaBook className="absolute left-4 top-4 text-violet-400" />
            <input
              type="text"
              placeholder="Enter Topic (Web Development)"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="
                w-full pl-12 pr-4 py-3
                rounded-xl bg-white/5
                border border-white/10
                text-white placeholder-gray-400
                focus:outline-none
                focus:ring-2 focus:ring-violet-500
              "
            />
          </div>

          <div className="relative">
            <FaGraduationCap className="absolute left-4 top-4 text-blue-400" />
            <input
              type="text"
              placeholder="Class Level (Class 10)"
              value={classLevel}
              onChange={(e) => setClassLevel(e.target.value)}
              className="
                w-full pl-12 pr-4 py-3
                rounded-xl bg-white/5
                border border-white/10
                text-white placeholder-gray-400
                focus:outline-none
                focus:ring-2 focus:ring-blue-500
              "
            />
          </div>

          <div className="relative">
            <FaClipboardList className="absolute left-4 top-4 text-green-400" />
            <input
              type="text"
              placeholder="Exam Type (JEE, NEET, CSS)"
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              className="
                w-full pl-12 pr-4 py-3
                rounded-xl bg-white/5
                border border-white/10
                text-white placeholder-gray-400
                focus:outline-none
                focus:ring-2 focus:ring-green-500
              "
            />
          </div>

          <select
            value={revisionMode}
            onChange={(e) => setRevisionMode(e.target.value)}
            className="
              w-full p-3 rounded-xl
              bg-white/5 border border-white/10
              text-white
              focus:outline-none
              focus:ring-2 focus:ring-pink-500
            "
          >
            <option className="text-black" value="normal">
              Normal Study
            </option>
            <option className="text-black" value="quick">
              Quick Revision
            </option>
            <option className="text-black" value="deep">
              Deep Study
            </option>
          </select>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-white">📊 Include Diagrams</span>

              <input
                type="checkbox"
                checked={includeDiagram}
                onChange={(e) => setIncludeDiagram(e.target.checked)}
              />
            </label>

            <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-white">📈 Include Charts</span>

              <input
                type="checkbox"
                checked={includeChart}
                onChange={(e) => setIncludeChart(e.target.checked)}
              />
            </label>
          </div>

          {loading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-300">
                <span>{progressText}</span>
                <span>{progress}%</span>
              </div>

              <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-violet-500 to-blue-500"
                />
              </div>
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            disabled={loading}
            onClick={handleGenerate}
            className="
              w-full py-4 rounded-xl
              font-semibold text-white
              bg-gradient-to-r
              from-violet-600
              via-purple-600
              to-blue-600
              shadow-lg
              disabled:opacity-50
            "
          >
            {loading ? (
              "Generating Notes..."
            ) : (
              <span className="flex items-center justify-center gap-2">
                <FaMagic />
                Generate Notes
              </span>
            )}
          </motion.button>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Generated Notes
            </h3>

            {generatedNotes ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="
                  bg-white/5
                  border border-white/10
                  rounded-2xl
                  p-6
                  text-gray-200
                  whitespace-pre-wrap
                  leading-relaxed
                "
              >
                {generatedNotes}
              </motion.div>
            ) : (
              <div
                className="
                  bg-white/5
                  border border-dashed border-white/10
                  rounded-2xl
                  p-10
                  text-center
                  text-gray-400
                "
              >
                📄 No Notes Generated Yet
                <br />
                <span className="text-sm">
                  Generate notes and they will appear here.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopicForm;