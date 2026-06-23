import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-white text-black'>
      <Navbar/>
      {/* top */}
      <section className='max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2  gap-20 items-center'></section>
      {/* botton */}
      <section></section>
    </div>
  )
}

export default Home
