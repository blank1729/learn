import { motion } from "framer-motion";
import React from "react";

function Post() {
  return <motion.div 
  exit={{
    opacity:0.1
  }}
  transition={{
    duration:0.5,
    ease: 'easeInOut'
  }}
  className="w-screen bg-red-300 h-[50vh]"
  >
    POST
</motion.div>;
}

export default Post;
