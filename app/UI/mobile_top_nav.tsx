"use client"

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';

const Links = [
    { name: "Home", href: "/"},
    { name: "Code Projects", href: "/code_projects"},
    { name: "Art Projects", href: "/art_projects"},
    { name: "Other Projects", href: "/other_projects"},
    { name: "Contact", href: "/contact"},
    { name: "CV", href: "/cv"}
    ]

export default function MobileNav()
{
    const variants = {open: {opacity : 1, x : "0"}, closed: {opacity: 0,x : "100% "}}
    const [navState, setNavState] = useState(false); 

    function handleCLick(){
        setNavState(!navState);
        console.log(navState)
    }

    const userPath = removeExtension()

    function removeExtension() // gets rid off stuff after the first backslash from the user path
    {
        let userPath = usePathname();
        let array = userPath.split("/");
        return ("/" + array[1]);
    }

    return (<>

            <div className="absolute p-2 top-4 right-2 w-15 h-20 cursor-pointer" onClick={handleCLick}><Image src="/icons/Hamburger.png" alt="|||" width={100} height={100} /></div>
            <motion.div 
            initial={{opacity:0}}
            animate={navState ? "open" : "closed"} 
            variants={variants}
            transition={{duration: 0.2}}
            className="flex flex-col absolute w-full top-25 right-0 bg-darkgrey z-0 md:w-100 ">
               
                    <>
                    {Links.map((link) => {
                        return(
                            <Link
                            key={link.name}
                            href={link.href}
                            className={clsx("flex justify-end text-right duration-300 ease-in-out p-4  font-normal text-[24px] border-b-4 hover:border-highlightblue hover:bg-darkgreen",
                            userPath === link.href
                            ? "text-highlightblue border-highlightblue bg-energygreen"
                            : "text-[#FFF] border-darkgrey "
                            )}
                            >
                                {link.name}
                            </Link>
                        )
                    }
                        
                    )}
                    </>
                
            </motion.div>
        </>
    )

}

