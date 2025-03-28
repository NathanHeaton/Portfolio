"use client";

import { useEffect, useRef, useState } from "react";
import Card from "./card";
import { usePathname } from "next/navigation";

interface types {id : number;
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

  const pathName = usePathname();

  const [activeCardId, setActiveID] = useState<number | null>(null);


    useEffect(() =>{
      let hash : string = window.location.hash.toString();
      if(hash != "")
        {
          console.log(hash +" this is the page hash")
          setActiveID( Number(hash.replace("#","")) )
        }

    },[0])//scrolls to card if selected from another page

    return(
        <>
        {Cards.map((card, index: number) => (
        <Card
         data={card}
          index={index}
           key={card.id}
           isOpen={activeCardId == card.id }
           setActiveID={setActiveID}
            />
        ))}
        </>
    )
    }