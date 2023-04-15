import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { MotionConfig, animate, motion, transform } from "framer-motion";
import CompOne from "./Components/CompOne";

function App() {
  return (
    // <CompOne/>
    <motion.div
    className="w-full h-screen"
    >
      <motion.div
        className="w-[300px] h-[200px] bg-red-300"
        exit={{
          transform: "-50vw,-50vh",
          width: "100vw",
          height: "50vh",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        Post
      </motion.div>
    </motion.div>
  );
}

export default App;
