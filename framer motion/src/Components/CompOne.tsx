import { motion } from "framer-motion";
import React, { useState } from "react";

function CompOne() {
  const [expand, setExpand] = useState(false);
  return (
    <motion.div
      className="h-[300px] bg-red-200 rounded-md inline-block"
      style={{ transitionDuration: "150ms" }}
      onClick={() => {
        setExpand(!expand);
      }}
      initial={{
        width: "150px",
      }}
      animate={
        expand
          ? {
              width: "300px",
            }
          : {}
      }
    >
      <div className="flex justify-center items-center">
        <h1 className="flex-shrink text-3xl font-bold underline">Hello</h1>
        {expand && (
          <h1 className="flex-shrink text-3xl font-bold underline">world!</h1>
        )}
      </div>
    </motion.div>
  );
}

export default CompOne;
