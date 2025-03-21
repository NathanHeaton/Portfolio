"use client";


import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CardTranstion({children} : {children : React.ReactNode}){
    const userPath = usePathname()

    return(

            <motion.div
                key={userPath} 
                initial={{ opacity: 0,  }}
                animate={{ opacity: 1, }}
                exit={{ opacity: 0, y:-100}}
                transition={{ duration: 0.4 }}
            > 
            {children}
            </motion.div>

    );
}