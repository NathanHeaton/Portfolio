"use client"

import Image from "next/image";
import { useState } from "react";
import RoundButtonPri from "../round_buttonPri";
import Cards from "./web_cards_data"
import clsx from "clsx";
import ShortDescription from "./card_short_description";


export default function WebCards(){

    const [open, setenlarged] = useState({});

    let prevCard = null;
    let timeoutId = null;

    const m_window = window; // assign window because function won't see it not sure why

    const enlarge = (id)=>{

        if(prevCard) shrink(prevCard);

        if (id == prevCard && m_window.innerWidth < 768) // if the card is already elarged on mobile it will be shrunk
        {
            prevCard = null;//resets card so it can be re opened
            shrink(id);
            return 0;
        }

        prevCard = id;

        let element = document.getElementById(id);

        if (element)
        {
            let imageDiv = element.querySelector("div");
            let article = element.querySelector("article");
            let shortDescription = element.querySelector("section");
            let closeButton = element.querySelector("button");
            let overlayDiv = element.querySelectorAll("div")[1]

            element.classList.remove(Cards[id].size, "h-auto");
            element.classList.add("bg-darkgrey", "w-full", "!min-h-[" + Cards[id].mainImage.height + "rem]");



            if (m_window.innerWidth > 768) // if on desktop
            {
                element.classList.replace("flex-col", "flex-row");
                imageDiv?.classList.replace("w-full","w-1/2");
            }
            imageDiv?.classList.remove("rounded-t-xl");
            imageDiv?.classList.remove("cursor-pointer");
            //imageDiv?.classList.add("m-4")
            article?.classList.replace("hidden","flex");
            shortDescription?.classList.replace("flex","hidden");
            closeButton?.classList.replace("hidden","flex");
            overlayDiv?.classList.add("hidden");

            console.log(element);
                    
            timeoutId = setTimeout(() => {element.scrollIntoView({ behavior: 'smooth', block: 'start' }); },600)//lets animation finish
        
        }

    }
    const shrink = (id)=>{
    {
        let element = document.getElementById(id);

        if (element)
        {
            let article = element.querySelector("article")
            let imageDiv = element.querySelector("div")
            let shortDescription = element.querySelector("section")
            let closeButton = element.querySelector("button");
            let overlayDiv = element.querySelectorAll("div")[1];

            //effect
            element.classList.replace("flex-row", "flex-col");
            element.classList.remove("bg-darkgrey","w-full");
            element.classList.add(Cards[id].size);
            imageDiv?.classList.replace("w-1/2","w-full");
            imageDiv?.classList.add("rounded-t-xl");
            article?.classList.replace("flex","hidden");
            shortDescription?.classList.replace("hidden","flex");
            closeButton?.classList.replace("flex","hidden");
            overlayDiv?.classList.remove("hidden");
            imageDiv?.classList.add("cursor-pointer");
            console.log(element);
        }
    }}
    // if the user scrolls this clears the auto scroll
    window.addEventListener("scroll", () =>{
        clearTimeout(timeoutId);
    })
    return(
        <>
        {Cards.map((card) =>// returns a link for each section in code projects
        {
            return (
            <section key={card.id} id={card.id} className={clsx(card.size, "max-md:w-full h-auto relative flex flex-col p-3 transition-all duration-600")} >
                <div onClick={() =>{enlarge(card.id)}} className={clsx(card.mainImage.aspect, "w-full h-full relative overflow-hidden rounded-t-xl cursor-pointer")}>
                    <Image
                    src={card.mainImage.src}
                    alt={card.mainImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="w-full h-auto object-cover overflow-clip"
                    />   
                    <div className="hover:opacity-40 flex bg-black opacity-0 transition-all duration-600 w-full h-full relative items-center justify-center ">
                        <h2 className="text-3xl text-balance">{card.title}</h2>
                    </div>                
                </div>
                <button className="hidden absolute top-4 right-6 bg-darkgrey p-3 rounded-full border-2 border-darkgreen cursor-pointer" onClick={() =>{shrink(card.id)}} >Close</button>
                <article className="hidden md:w-1/3 flex-col m-10" >
                    <h1>{card.title}</h1>
                    <h3 className="text-secondaryText mb-5">{card.subTitle}</h3>
                    <p>
                    {card.description}
                    </p>
                    <RoundButtonPri href={card.webLink} text={card.buttonText} />
                    <div className="my-5" >
                        <Image 
                            src={card.secondaryImage.src} alt={card.secondaryImage.alt} width={card.secondaryImage.width} height={card.secondaryImage.height}
                            />
                    </div>
                </article>  
                <ShortDescription description={card.shortDescription} tools={card.tools} />
            </section>
            )
            }
        )
        }
        </>
    )
    }
