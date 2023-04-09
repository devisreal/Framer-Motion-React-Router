import { useRef } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useLocation } from "react-router-dom"
import { stagger, animate } from "framer-motion"


import './App.css'

function LocationProvider({ children }) {
  return <AnimatePresence>
    {children}
  </AnimatePresence>;
}

function RoutesWithAnimation() {
  const location = useLocation();
  console.log(location);

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

const routeVariants = {
  initial: {
    y: '100vh'
  },
  final: {
    y: '0vh',
    transition: {
      type: "spring",
      mass: 0.3,
    }
  }
}

const childVariants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  final: {
    opacity: 1,
    y: "0px",
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AnimatePresence>
          <Header />
          <LocationProvider>
            <RoutesWithAnimation />
          </LocationProvider>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  )
}

function Home() {
  return (
    <>
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        className="home component"
      >
        <motion.h1 variants={childVariants} initial="initial" animate="final">  Home Component </motion.h1>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%"
          }}
          className="w-14 h-14 bg-white rounded"
        >
        </motion.div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </motion.div>

      {/* 
        <motion.div
        initial={{
          x: 200
        }}
        animate={{ x: 400 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-32 h-32 my-20 mx-auto bg-red-300"
      >

      </motion.div>
      */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 200 }}
        dragElastic={1}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 200 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-32 h-32 my-20 mx-auto bg-red-300"
      >

      </motion.div>
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <span>Header Component</span>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </div>
  );
}

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref)
  // animate(".about", { x: 100 }, { delay: stagger(0.1) })
  return (
    <>
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        className="about component"
      >
        <motion.h1 variants={childVariants} initial="initial" animate="final"> About Component </motion.h1>
      </motion.div>
      

      <section ref={ref}>
        <span
          className="text-3xl"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          About
        </span>
      </section>
      <section ref={ref}>
        <span
          className="text-3xl"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          About
        </span>
      </section>
      <section ref={ref}>
        <span
          className="text-3xl"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          About
        </span>
      </section>
    </>
  );
}

function Contact() {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="contact component"
    >
      <motion.h1 variants={childVariants} initial="initial" animate="final"> Contact Component </motion.h1>
    </motion.div>
  );
}

export default App
