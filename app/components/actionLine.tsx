"use client"

import { backOut, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function ActionLine(){
    const pathname = usePathname()
    let pageToSmall : boolean  = false;

    function getTotalPageHeight(){
        console.log(pathname);
        if (pathname == "/code_projects/other" || pathname == "/art_projects/3d" || pathname == "/other_projects")
            {
                pageToSmall = true;
            }

    }
    getTotalPageHeight();

    return (

            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className={clsx(pageToSmall ? `max-h-[125vh] md:left-200`: "md:left-1/6","absolute md:w-400 md:h-800 w-200 h-400  left-0 top-35 right-auto -z-1")}
                viewBox="3231.265 3619 1317.735 2614"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.path
                    d="M3915.132,3675.619C3856.206,3557.257,4649.830,3734.801,4514.425,3976.810C4399.958,4181.397,3997.000,4392.000,3997.000,4392.000C3997.000,4392.000,3592.000,4626.000,3766.000,4924.000C3940.000,5222.000,4302.000,5393.000,4075.000,5638.000C3845.998,5885.160,3095.000,5858.000,3279.000,6214.000M4066.000,4142.000"
                    fill="none"
                    strokeWidth="15"
                    strokeOpacity="1"
                    initial={{ pathLength: 0, stroke:"#0066cc" }}
                    animate={{ pathLength: 1,stroke:"#68df90" }}
                    transition={{ duration: 5.5 , ease:"easeIn" }}
                />
            </motion.svg>


    )
}