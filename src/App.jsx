import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/Videoplayer/Videoplayer'


function App() {

  const [player, setPlayer] = useState(false)

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='Our Program' title="What We Offer"></Title>
        <Program></Program>
        <About setPlayer={setPlayer}></About>
        <Title subtitle='Gallery' title="Campus Photos"></Title>
        <Campus></Campus>
        <Title subtitle='TESTIMONIALS' title="What Student Says"></Title>
        <Testimonials></Testimonials>
        <Title subtitle='Contact Us' title="Get in Touch"></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <Videoplayer player={player} setPlayer={setPlayer}></Videoplayer>
    </div>
  )
}

export default App
