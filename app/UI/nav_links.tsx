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
    const userPath = removeExtension()

    function removeExtension() // gets rid off stuff after the first backslash from the user path
    {
        let userPath = usePathname();
        let array = userPath.split("/");
        return ("/" + array[1]);
    }

    return(
        <>
        {Links.map((link) => {
            return(
                <Link
                key={link.name}
                href={link.href}
                className={clsx("flex duration-300 ease-in-out p-1 m-3 font-normal text-[24px] border-b-4  hover:px-3 hover:mx-1 hover:border-highlightblue hover:text-highlightblue",
                userPath === link.href
                ? "text-highlightblue border-highlightblue"
                : "text-[#FFF] border-white "
                )}
                >
                    {link.name}
                </Link>
            )
        }
            
        )}
        </>
    )
}