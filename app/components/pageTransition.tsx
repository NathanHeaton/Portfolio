"use client";


import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({children} : {children : React.ReactNode}){
    const userPath = removeExtension()

    function removeExtension() // gets rid off stuff after the first backslash from the user path
    {
        let userPath = usePathname();
        let array = userPath.split("/");
        return ("/" + array[1]);
    }

    return(
        <AnimatePresence mode="wait" initial={false}>
         
            <motion.div
                key={userPath} 
                initial={{ opacity: 0, y: 100, x: 100 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y:-100}}
                transition={{ duration: 0.4 }}
            > 
            {children}
            </motion.div>
        </AnimatePresence>

    );
}