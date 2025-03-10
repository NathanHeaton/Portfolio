"use client"

import "../globals.css";


import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";

// all the top links
const Links = [
    { name: "Digital", href: "/art_projects"},
    { name: "Trad", href: "/art_projects/traditional"},
    { name: "3D", href: "/art_projects/3d"},
    { name: "Sketches", href: "/art_projects/sketches"}
    ]


export default function ArtNav()
{
    const userPath = usePathname();// gets path of current page
    return(
        <>
            {Links.map((link) =>// returns a link for each section in code projects
                {
                    return (
                        <Link key={link.name}
                        href={link.href}
                        className={clsx(
                            "bg-darkgreen px-6 py-3 m-2 text-2xl duration-300 ease-in-out hover:bg-energygreen",
                            userPath === link.href
                              ? "bg-energygreen text-highlightblue"
                              : "text-white"
                          )}
                            >
                                {link.name}
                            </Link>
                    )
                }
            )
            }
        
        </>
    )


}