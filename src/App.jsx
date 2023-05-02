import { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Experiance from './component/Experiance'
import Contact from './component/Contact'
import Testimonials from './component/Testimonials'

import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const style ={
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    // height: 10px;
    // background: var(--red);
    // transform-origin: 0%;

    position: "fixed",
    top: 0, 
    left: 0,
    right: 0,
 
    background: "lightblue",
    transformOrigin: "0%",
    height: "100vh",
    zIndex: -100,
    backgroundOpacity: 0.5,

  }

  return (
    <>
    <motion.div className="progress-bar" style={{ scaleX ,...style
    
    }} />
    <Navbar/>
    <Home/>
    <motion.div>

     

    <About/>
      

    </motion.div>
    <Experiance/>
    <Testimonials/>
    <Contact/>

    </>
  )
}

export default App
