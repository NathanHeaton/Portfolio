"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";
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


export default function NavLink()
{

    const userPath = usePathname();
    return(
        <>
        {Links.map((link) => {
            return(
                <Link
                key={link.name}
                href={link.href}
                className={clsx("flex text-[#FFF] duration-300 ease-in-out p-1 m-3 font-normal text-[24px] border-b-4 border-white hover:px-3 hover:mx-1 hover:border-[#0066cc]",
                {"border-[#0066cc]" : userPath === link.href})}
                >
                    {link.name}
                </Link>
            )
        }
            
        )}
        </>
    )
}