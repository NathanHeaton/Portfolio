"use client"

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import clsx from "clsx";

const Cards = [
    {
        id: "0",
        size: "w-1/3",
        // text and links
        title: "Blooming Flower Clock",
        subTitle: "SETU Carlow year 3",
        description: "Clock represented by blooming flowers telling the season and time of day growth and movement of the flower implies the time have some trivia about the flower blooming in this month able to scroll through other months past months have wilted flowers and ones in the future are just seeds. Responsive mobile and desktop design. first mock up done in photoshop then I made a sprite sheet in aseprite with each of flower and their stage of growths. see whats in bloom today.",
        webLink: "https://nathanheaton.github.io/bloomingFlowerClock/",
        // images
        mainImage: {src:"/img/Blooming flower image.png", alt: "pixel art flower", aspect :"aspect-[5/3]", height : "913"},
        secondaryImage: {src:"/img/blooming flower sprites.png", alt: "pixel art flower sprite sheet", width: 600, height : 300},
        // for short description
        shortDescription: "SETU Y3, Unconventional clock, based on flowers",
        tools: " HTML, CSS, JS, Aseprite and Adobe Photoshop"

    },
    {
        id: "1",
        size: "w-2/3",
        // text and links
        title: "VLE (Virtual Learning Enviornment)",
        subTitle: "SETU Carlow - UX Measurement",
        description: "To see my entire report of my process and the steps involved in my process please view download the below PDF",
        webLink: "https://nathanheaton.github.io/bloomingFlowerClock/",
        // images        
        mainImage: {src:"/img/Module page adjusted.png", alt: "VLE login page", aspect :"aspect-[1920/1080]", height : "913"},
        secondaryImage: {src:"/img/Student Login page.png", alt: "VLE login page", width: 600, height : 300},
        // for short description
        shortDescription: "SETU Y3, High fidelity Wireframes, work process for VLE UI design and UX Measurement",
        tools: "Figma, MS Forms and OBS(for user testing/recordings)"

    },
    {
        id: "2",
        size: "w-2/3",
        // text and links
        title: "Retrograde Website",
        subTitle: "Commission 2024",
        description: "Website I designed and developed for Retrograde an Indie Soul-pop band based in Dublin. I used penpot to make a basic wireframe and then with feedback I made changes where need while increasing the fidelity. I add a spotify preview along with link to their relevent socials and a place to book tickets for their upcoming gig.",        webLink: "https://nathanheaton.github.io/bloomingFlowerClock/",
        // images
        mainImage: {src:"/img/Retrograde.png", alt: "retrograde website", aspect :"aspect-[1920/1080]", height : "913"},
        secondaryImage: {src:"/img/Retrograde-music.png", alt: "retrograde music preview website", width: 2, height : 3},
        // for short description
        shortDescription: "Commission 2024, Website for a band in Dublin",
        tools: "Penpot(wireframing), HTML, CSS and JS"

    },
    
    
]

export default function WebCards(){

    const [open, setenlarged] = useState({});

    let prevCard = null;
    let timeoutId = null;

    const enlarge = (id)=>{

        if(prevCard) shrink(prevCard);

        if (id == prevCard && window.innerWidth < 768) // if the card is already elarged on mobile
        {
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

            element.classList.remove(Cards[id].size, "h-auto");
            element.classList.add("bg-darkgrey", "w-full", "!min-h-[" + Cards[id].mainImage.height + "rem]");



            if (window.innerWidth > 768) // if on desktop
            {
                element.classList.replace("flex-col", "flex-row");
                imageDiv?.classList.replace("w-full","w-1/2");
            }
            imageDiv?.classList.remove("rounded-t-xl");
            //imageDiv?.classList.add("m-4")
            article?.classList.replace("hidden","flex");
            shortDescription?.classList.replace("flex","hidden");
            closeButton?.classList.replace("hidden","flex");

            console.log(element);
                    
            timeoutId = setTimeout(() => {element.scrollIntoView({ behavior: 'smooth', block: 'start' }); },300)//lets animation finish
        
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

            //effect
            element.classList.replace("flex-row", "flex-col");
            element.classList.remove("bg-darkgrey","w-full");
            element.classList.add(Cards[id].size);
            imageDiv?.classList.replace("w-1/2","w-full");
            imageDiv?.classList.add("rounded-t-xl");
            article?.classList.replace("flex","hidden");
            shortDescription?.classList.replace("hidden","flex");
            closeButton?.classList.replace("flex","hidden");
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
            <section key={card.id} id={card.id} className={clsx(card.size, "max-md:w-full h-auto relative flex flex-col p-2 transition-all duration-300")} >
                <div onClick={() =>{enlarge(card.id)}} className={clsx(card.mainImage.aspect, "w-full h-full relative overflow-hidden rounded-t-xl cursor-pointer")}>
                    <Image
                    src={card.mainImage.src}
                    alt={card.mainImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="w-full h-auto object-cover overflow-clip"
                    />   
                    <div className="hover:flex hidden h-auto relative justify-center "><h2 >{card.title}</h2></div>                
                </div>
                <button className="hidden absolute top-4 right-6 bg-darkgrey p-3 rounded-full border-2 border-darkgreen" onClick={() =>{shrink(card.id)}} >Close</button>
                <article className="hidden md:w-1/3 flex-col m-10" >
                    <h1>{card.title}</h1>
                    <h3 className="text-secondaryText mb-5">{card.subTitle}</h3>
                    <p>
                        {card.description}
                    </p>
                    <a href={card.webLink} className="px-9 py-3 my-5 rounded-2xl flex w-fit bg-darkgreen hover:bg-energygreen hover:text-highlightblue hover:px-12 transition-all duration-1000" target="_blank">Check it out</a>
                    <div className="my-5" >
                        <Image 
                            src={card.secondaryImage.src} alt={card.secondaryImage.alt} width={card.secondaryImage.width} height={card.secondaryImage.height}
                            />
                    </div>
                </article>  
                <section className="bg-darkgrey flex rounded-b-xl">
                    <p className="p-4 text-wrap text-offWhite"><strong>Description</strong>: {card.shortDescription} <br />
                        <strong>Tools</strong>: {card.tools}<br />
                        <i>Click/Tap image to find out more!</i></p>
                </section>
            </section>
            )
            }
        )
        }
        </>
    )
    }
