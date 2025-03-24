"use client";


import { animate, motion } from "framer-motion";
import { easeInOut } from "framer-motion/dom";

export default function WavingHand(){

    return(

        <motion.p 
        initial ={{rotate:60}}
        whileHover={{rotate:[60, -60]}}

        transition={{duration:0.3, ease:"easeInOut" }}
        className="!text-[1.5rem] transition-all duration-300 absolute origin-center">
            👋
        </motion.p> 

    );
}