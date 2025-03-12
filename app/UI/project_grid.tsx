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
        <section className="grid">
            <div className="bg-darkgrey size-10 relative">
            <Image
                src="/art/2plants.PNG"
                alt="art"
                fill
                />
            </div>
            <div className="bg-darkgrey size-10 relative">
            <Image
                    src="/img/dnoreillys-website.PNG"
                    alt="fuels website"
                    fill
                 />
            </div>
            <div className="bg-darkgrey size-10 relative">
            <Image
                    src="/img/cat and rat game end screen.PNG"
                    alt="cat art"
                    fill
                 />
            </div>

        
        </section>
    )
}