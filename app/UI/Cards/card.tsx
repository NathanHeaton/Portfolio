"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import RoundButtonPri from "../round_buttonPri";

import clsx from "clsx";
import ShortDescription from "./card_short_description";
import CardImage from "./card_image";
import ExtendedDescription from "./extended_description";
import { motion } from "framer-motion";


interface types {

data : {id : string;
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
    }
index : number;

};
   

export default function Card({data  ,index } : types){

    const [isOpen, setopen] = useState(false);

    const cardRef= useRef<HTMLDivElement>(null);

    const card = data;

    useEffect(()=>{
        let cardElement : HTMLDivElement | null  = cardRef.current
        if (isOpen && cardElement != null)
            {
                cardElement.scrollIntoView({ behavior: "smooth", block: "start" })
            }
    },[isOpen])

    



    return(
     
    <motion.section 
    whileTap ={{scale:0.95}}
    key={index}
    ref={cardRef}
    initial={{ y:200}}
    animate={{ y: 0}}
    transition={{duration:0.3, ease:"circInOut"}}
    className={clsx(
        isOpen? "w-full bg-darkgrey md:flex-row flex-col" : card.size +" flex-col" ,
        "max-xl:w-full md:aspect-auto h-auto relative flex p-3 transition-all duration-400 snap-start", 
        `${card.mainImage.aspect}`)} >

    <div onClick={() =>{setopen(true)}}
     className={clsx(
        isOpen? "md:w-1/2 w-full" : "w-full",
        card.mainImage.aspect, 
        "h-full max-h-250 sl:max-w-auto relative overflow-hidden rounded-t-xl cursor-pointer")}
     >
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
    <button className={clsx(
        isOpen? "flex" : "hidden",
         "absolute top-4 right-6 bg-darkgrey p-3 rounded-full border-2 border-darkgreen cursor-pointer")} onClick={() =>{setopen(false)}} >Close</button>
    <article  className={clsx(
        isOpen? "flex" : "hidden",
        "md:w-1/3 flex-col m-10")} >
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
    <div className={clsx(
        isOpen? "hidden" : "block" )}>
    <ShortDescription description={card.shortDescription} tools={card.tools} />
    </div>
    <ExtendedDescription extension={card.extension[0].extension}  VLE={card.extension[0].VLE}/>

    </motion.section>
);

}