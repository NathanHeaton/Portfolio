"use client";


import { easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({children} : {children : React.ReactNode}){
    const userPath = removeExtension()

    function removeExtension() // gets rid off stuff after the first backslash from the user path
    {
        let userPath = usePathname();
        let array = userPath.split("/");
        return ("/" + array[1]);
    }

    function tranistionDirection(){
        let x = 300;
        console.log(userPath)
        if (userPath == "/")
        {
            x= -300;
        }
        return x;
    }

    return(

            <motion.div
                key={userPath} 
                style={{originX:0, originY:0, originZ:0}}
                initial={{ opacity: 0, y: 100, x: 0, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, x: 0,rotateX: 0 }}
                exit={{ opacity: 0, y:-100}}
                transition={{ duration: 0.6, ease:"easeInOut" }}
            > 
            {children}
            </motion.div>

    );
}