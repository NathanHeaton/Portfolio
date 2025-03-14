"use client"

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";
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
        <section className="flex flex-col sm:flex-row xl:w-2/3 w-full h-170 p-5 gap-5">
            <div className="flex flex-col sm:w-2/3 w-full gap-5">
                <div className="bg-darkgrey w-full p-3 h-1/2 relative overflow-hidden rounded-xl">
                <Image
                    src="/img/An Phiasts Destruction.png"
                    alt="art"
                    width={200}
                    height={100}
                    />
                </div>
                <div className="bg-darkgrey w-full p-3 h-1/2 size-10 relative overflow-hidden rounded-xl">
                <Image
                        src="/img/dnoreillys-website.PNG"
                        alt="fuels website"
                        width={200}
                        height={100}
                        
                    />
                </div>
            </div>
            <div className="bg-darkgrey sm:w-1/3 w-full p-3 h-full relative overflow-hidden rounded-xl">
            <Image
                    src="/img/cat and rat game end screen.PNG"
                    alt="cat art"
                                        width={200}
                    height={100}
                 />
            </div>

        
        </section>
    )
}