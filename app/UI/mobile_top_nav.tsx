"use client"

import { useState } from "react";
import clsx from "clsx";
import NavLink from "./nav_links";
import Image from "next/image";

let navState = true;

export default function MobileNav()
{
    const [navState, setNavState] = useState(false); 

    function handleCLick(){
        setNavState(!navState);
        console.log(navState)
    }

    return (<>

            <div className="absolute p-2 top-4 right-2 w-15 h-20 cursor-pointer" onClick={handleCLick}><Image src="/icons/Hamburger.png" alt="|||" width={100} height={100} /></div>
            <div className={clsx( navState === true ? "flex":"hidden", "flex-col absolute w-full top-25 left-0 bg-darkgrey z-0")}>
                <NavLink />
            </div>
        </>
    )

}

