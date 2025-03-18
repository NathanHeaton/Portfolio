"use client"

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
//import "";


// all the top links
const Links = [
    { name: "Home", href: "/"},
    { name: "Code Projects", href: "/code_projects"},
    { name: "Art Projects", href: "/art_projects"},
    { name: "Other Projects", href: "/other_projects"},
    { name: "Contact", href: "/contact"},
    { name: "CV", href: "/cv"}
    ]


export default function ProjectGrid()
{

    return(
        <section className="grid w-full h-autp p-5 gap-5 xl:w-2/3">

            <motion.div
            whileHover={{scale: 1.1}}
             className="bg-darkgrey relative overflow-hidden rounded-xl max-h-50 sm:max-h-100 justify-center items-center sm:col-span-3">
            <Image
                src="/img/An Phiasts Destruction.png"
                alt="art"
                width={1200}
                height={100}
                />
            </motion.div>
            <motion.div
            whileHover={{scale: 1.1}}
             className="bg-darkgrey relative overflow-hidden max-h-50 md:max-h-max rounded-xl">

            <Image
                    src="/img/dnoreillys-website.PNG"
                    alt="fuels website"
                    width={1200}
                    height={100}
                    className="relative"
                    
                />
            </motion.div>
            <motion.div
whileHover={{scale: 1.1}}
             className="bg-darkgrey  relative overflow-hidden max-h-50 md:max-h-max rounded-xl">
            <Image
                    src="/img/cat and rat game end screen.PNG"
                    alt="cat art"
                                        width={1200}
                    height={100}
                 />
            </motion.div>

        
        </section>
    )
}