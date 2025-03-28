"use client";


import { easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTransition({children} : {children : React.ReactNode}){
    const userPath = removeExtension()

    function removeExtension() // gets rid off stuff after the first backslash from the user path
    {
        let userPath = usePathname();
        let array = userPath.split("/");
        return ("/" + array[1]);
    }

    useEffect(() => {
        window.scrollTo(0,-100);

    },[userPath]);



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
                initial={{ opacity: 0, y: -300, x: 0, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, x: 0,rotateX: 0 }}
                exit={{ opacity: 0, y:-100}}
                transition={{ duration: 0.6, ease:"easeInOut" }}
                className="origin-top"
            > 
            {children}
            </motion.div>

    );
}