"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import RoundButtonPri from "../round_buttonPri";

import clsx from "clsx";
import ShortDescription from "./card_short_description";
import CardImage from "./card_image";
import ExtendedDescription from "./extended_description";
import { motion } from "framer-motion";


interface types {id : string;
    size : string;
     title : string;
      subTitle : string;
    description : any ;
    button: {
        link: string;
        text: string;
      }[];
    mainImage : {src : string;
         alt : string;
          aspect: string};
    secondaryImage : {src : string;
         alt : string;
          width: number;
           height : number}[];
    shortDescription : string;
    tools : string;
    extension : {extension : boolean; VLE : boolean}[]
   
   };

   interface GenCardsProps {
    Cards: types[];
  }

export default function GenCards({Cards} : GenCardsProps){

    const [open, setenlarged] = useState({});
    const element = useRef(null);

    let prevCard : number | null = null;
    let timeoutId : ReturnType<typeof setTimeout> | null = null;

    const useEffect = () =>{}


    const m_window = window; // assign window because function won't see it not sure why

    const enlarge = (id:number)=>{

        if(prevCard) shrink(prevCard);

        if (id == prevCard && m_window.innerWidth < 768) // if the card is already elarged on mobile it will be shrunk
        {
            prevCard = null;//resets card so it can be re opened
            shrink(id);
            return 0;
        }

        prevCard = id;

        let element = document.getElementById(""+id+"");

        if (element)
        {
            let imageDiv = element.querySelector("div");
            let article = element.querySelector("article");
            let shortDescription = element.querySelector("section");
            let closeButton = element.querySelector("button");
            let overlayDiv = element.querySelectorAll("div")[1]
            let extenion = element.querySelectorAll("section")[1];

            element.classList.remove(Cards[id].size, "h-auto");
            element.classList.add("bg-darkgrey", "w-full");


            console.log(window.innerWidth)
            if (m_window.innerWidth > 1200) // if on desktop
            {
                
                if(Cards[id].extension[0].extension)
                {
                    element.classList.add("flex-col")
                }
                else{
                    element.classList.replace("flex-col", "flex-row");
                }
                imageDiv?.classList.replace("w-full","w-1/2");
            }
            imageDiv?.classList.remove("rounded-t-xl");
            imageDiv?.classList.remove("cursor-pointer");
            //imageDiv?.classList.add("m-4")
            article?.classList.replace("hidden","flex");
            shortDescription?.classList.replace("flex","hidden");
            closeButton?.classList.replace("hidden","flex");
            overlayDiv?.classList.add("hidden");
            extenion?.classList.replace("hidden","flex");

            console.log(element);
                    
            timeoutId = setTimeout(() => {element.scrollIntoView({ behavior: 'smooth', block: 'start' }); },200)//lets animation finish
        }

    }

    
    const shrink = (id : number)=>{
    {
        let element = document.getElementById(""+id+"");

        if (element)
        {
            let article = element.querySelector("article")
            let imageDiv = element.querySelector("div")
            let shortDescription = element.querySelector("section")
            let closeButton = element.querySelector("button");
            let overlayDiv = element.querySelectorAll("div")[1];
            let extenion = element.querySelectorAll("section")[1];

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
            extenion?.classList.replace("flex","hidden");
            console.log(element);
        }
    }}
    
    // if the user scrolls this clears the auto scroll
    window.addEventListener("scroll", () =>{
        if (timeoutId)
        clearTimeout(timeoutId);
    })

    return(
        <>
        {Cards.map((card, index : number) =>// returns a link for each section in code projects
        {
            return (
                <motion.section 
                    //{...()   &&{ whileHover : {scale: 1.05},  whileTap :{scale:0.95}}}
                  key={card.id}
                   id={""+index+""}
                    ref={element}
                     className={clsx(card.size, "max-xl:w-full md:aspect-auto h-auto relative flex flex-col p-3 transition-all duration-200", `${card.mainImage.aspect}`)} >
                <div  onClick={() =>{enlarge(index)}} className={clsx(card.mainImage.aspect, "w-full h-full max-h-250 sl:max-w-auto relative overflow-hidden rounded-t-xl cursor-pointer")}>
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
                <button className="hidden absolute top-4 right-6 bg-darkgrey p-3 rounded-full border-2 border-darkgreen cursor-pointer" onClick={() =>{shrink(index)}} >Close</button>
                <article  className="hidden md:w-1/3 flex-col m-10" >
                    <h1>{card.title}</h1>
                    <h3 className="text-secondaryText mb-5">{card.subTitle}</h3>
                    <p>
                    {card.description}
                    </p>
                    {card.button.map((button, index : number) =>( // generates for each button
                    <RoundButtonPri key={index} href={button.link} text={button.text} newPage={true} />
                    ))}

                    {card.secondaryImage.map((image, index : number) =>( // generates for each image
                    <CardImage key={index} src={image.src} alt={image.alt} height={image.height} width={image.width} />
                    ))}
                </article>  
                <ShortDescription description={card.shortDescription} tools={card.tools} />
                <ExtendedDescription extension={card.extension[0].extension}  VLE={card.extension[0].VLE}/>
                
            </motion.section>
            )
            }
        )
        }
        </>
    )
    }
