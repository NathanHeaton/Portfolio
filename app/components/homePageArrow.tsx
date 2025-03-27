"use client"

import { backOut, easeInOut, motion } from "framer-motion";


export default function HomePageArrow(){


    return (

            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:left-1/6 absolute md:w-400 md:h-800 w-200 h-400  left-0 top-35 right-auto -z-1"
                viewBox="3231.265 3619 1317.735 2614"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.path
                    d="M3203.000,788.363C3421.000,757.363,3380.000,1113.000,3753.432,945.238C3752.432,945.238,3688.432,934.238,3688.432,934.238L3709.432,985.238L3730.432,967.238"                    fill="none"
                    strokeWidth="15"
                    strokeOpacity="1"
                    initial={{ pathLength: 0, stroke:"#0066cc" }}
                    animate={{ pathLength: 1,stroke:"#68df90" }}
                    transition={{ duration: 5.5 , ease:"easeIn" }}
                />
            </motion.svg>


    )
}
