import React from 'react'
import { motion } from 'framer-motion'
import { SiGoogle } from 'react-icons/si'
import { FaBrain, FaBook, FaFileAlt, FaChartBar, FaGithub } from 'react-icons/fa'

const Auth = () => {
  return (
    <div className='min-h-screen bg-white text-black px-6'>
      
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-7xl mx-auto mt-8 rounded-2xl bg-black/90 border border-black/10 px-8 py-6'
      >
        <h1 className='text-2xl font-semibold text-white'>
          ExamNotes AI
        </h1>

        <p className='text-sm text-gray-300 mt-1'>
          AI-powered notes, revision & smart analytics
        </p>
      </motion.header>

      {/* MAIN */}
      <main className='max-w-7xl mx-auto py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight text-black'>
            Unlock Smart <br /> AI Notes
          </h1>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className='mt-6 flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition'
          >
            <SiGoogle className='text-red-500 text-lg' />
            Continue with Google
          </motion.button>

          <p className='mt-6 text-sm text-gray-600 leading-relaxed max-w-md'>
            AI-generated notes, smart revision system, exam-focused analytics, and structured learning — all in one place.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 sm:grid-cols-2 gap-5'
        >
          <Feature icon={<FaBrain />} title="AI Notes" />
          <Feature icon={<FaBook />} title="Exam Prep" />
          <Feature icon={<FaChartBar />} title="Analytics" />
          <Feature icon={<FaFileAlt />} title="PDF Export" />
          <Feature icon={<FaGithub />} title="Cloud Sync" />
        </motion.div>

      </main>
    </div>
  )
}

/* CLEAN DARK CARDS ON WHITE BG */
function Feature({ icon, title }) {
  return (
    <div className='bg-black text-white rounded-xl p-5 
    border border-black/10 hover:shadow-lg hover:scale-[1.02] transition-all duration-300'>
      
      <div className='text-lg text-white mb-3'>
        {icon}
      </div>

      <h3 className='text-sm font-medium text-white/90'>
        {title}
      </h3>
    </div>
  )
}

export default Auth