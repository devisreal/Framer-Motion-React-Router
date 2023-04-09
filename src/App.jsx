import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
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
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="home component"
    >
      <motion.h1 variants={childVariants} initial="initial" animate="final">  Home Component </motion.h1>
    </motion.div>
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
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      className="about component"
    >
      <motion.h1 variants={childVariants} initial="initial" animate="final"> About Component </motion.h1>
    </motion.div>
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
