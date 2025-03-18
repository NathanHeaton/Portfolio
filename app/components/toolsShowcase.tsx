"use client";
import Image from "next/image";
import { motion } from "framer-motion";


const tools : {name : string,src : string,alt : string, width : number, height: number}[] = [
    {name : "NEXT.JS", src : "/icons/next-js-seeklogo.svg", alt :"Next.js logo" , width: 100, height : 100},
    {name : "Figma", src : "/icons/figma-seeklogo.svg", alt :"figma logo" , width: 55, height : 100},
    {name : "Photoshop", src : "/icons/adobe-photoshop-seeklogo.png", alt :"Photoshop logo" , width: 100, height : 100},
    {name : "Aseprite", src : "/icons/aseprite-seeklogo.png", alt :"Aseprite logo" , width: 100, height : 100},
    {name : "Godot", src : "/icons/godot-seeklogo.png", alt :"Godot logo" , width: 100, height : 100},
    {name : "Visual Studio", src : "/icons/visual-studio-code-seeklogo.png", alt :"Visual Studio Code logo" , width: 100, height : 100}
]

const MOTIONDIV = motion.div;
export default function ToolsShowcase(){
    return(
        <section className="w-full flex-col flex justify-center py-15 h-auto bg-black overflow-hidden rounded-2xl">
            <h1 className="flex justify-center">Tools & Software</h1>
            <section className="flex flex-row flex-wrap mx-auto">
            {tools.map((tool, index : number) =>
            <MOTIONDIV whileHover={{scale: 1.1}} key={index} className="overflow-hidden flex-col bg-darkgrey w-30 p-3 px-5 m-3 rounded-2xl">
                <Image src={tool.src} alt={tool.alt} width={tool.width} height={tool.height}
                className="mx-auto" />
                <div className=" my-2 h-1 bg-black"></div>
                <h2>{tool.name}</h2>
            </MOTIONDIV>
            )}
            </section>

        </section>
    );
}