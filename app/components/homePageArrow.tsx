"use client"

import { backOut, easeInOut, motion } from "framer-motion";


export default function HomePageArrow(){


    return (

        <motion.svg
        viewBox="3169 752.436 618.432 271.991"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="absolute 2xl:left-1/6 md:left-20  top-1/2 w-125 h-auto -z-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <motion.path
          d="M3203.000,788.363C3421.000,757.363,3380.000,1113.000,3753.432,945.238C3752.432,945.238,3688.432,934.238,3688.432,934.238L3709.432,985.238L3730.432,967.238"
          stroke="#69de90"
          strokeWidth="14"
          strokeOpacity="1"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, stroke:"#0066cc" }}
          animate={{ pathLength: 1,stroke:"#68df90" }}
          transition={{ duration: 1.5,delay: 1.5, ease: "easeInOut" }}
        />
      </motion.svg>


    )
}
