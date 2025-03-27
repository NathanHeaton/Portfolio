import { useEffect, useRef, useState } from "react";
import Card from "./card";

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
    useEffect(() =>{},[])// close other cards work on later
    return(
        <>
        {Cards.map((card, index: number) => (
        <Card data={card} index={index} key={index} />
        ))}
        </>
    )
    }