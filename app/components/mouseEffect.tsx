"use client";

import { useEffect } from "react";

import { motion } from "framer-motion";
import "../globals.css";

export default function MouseEffect() {


  useEffect(() => {
    const customMouse = document.getElementById("mouse");
    if(customMouse)customMouse.style.backgroundColor = "#69de90";
    const mouseText = document.getElementById("text")
    let mouseScale = 1;
    let mouseSize = 16;
    let mousesEnlarged = false
      const handleMouseMove = (e) => {
        let mouse = {x: e.pageX, y: e.pageY}
        let element = document.elementFromPoint(e.clientX,e.clientY)// finds the element the user is hovering over
        let cursorStyle = null
        if(element)
        {
        cursorStyle = window.getComputedStyle(element).cursor;
        }

        const target = document.elementFromPoint(e.clientX, e.clientY);

        if (customMouse && element && mouseText)
        {
          if (cursorStyle === "pointer" && mousesEnlarged == false && element.tagName == "IMG")
          {
            console.log("showing text")
              mousesEnlarged = true;
              mouseText.style.display = "flex";
              customMouse.style.backgroundColor = "#0066cc";
              customMouse.classList.remove("w-4","h-4");
              customMouse.classList.add("w-12","h-12");
      
          }
          else if (cursorStyle === "pointer" && mousesEnlarged == false)
          {
              mousesEnlarged = true;
              mouseText.style.display = "none";
              customMouse.style.backgroundColor = "#0066cc";
              customMouse.classList.remove("w-12","h-12");
              customMouse.classList.add("w-4","h-4");
          }
      
          
          if (cursorStyle != "pointer" && mousesEnlarged == true )
          {
              mousesEnlarged = false;
              mouseText.style.display = "none";
              
              //console.log("shrinking")
              customMouse.style.backgroundColor = "#69de90";
              customMouse.classList.remove("w-12","h-12");
              customMouse.classList.add("w-4","h-4");
          }
          customMouse.style.left = mouse.x - (mouseSize/2)  + "px";
          customMouse.style.top = mouse.y - (mouseSize/2) + "px";
        }
    
        
        //console.log("Hovered over:", target?.tagName);
        
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  
    return (
        <motion.div id="mouse" animate={{}} className="rounded-full md:flex hidden justify-center absolute w-4 h-4 opacity-80 pointer-events-none left-[-8px] top-[-8px] transition-all duration-300 z-3">
          <p id="text" className="hidden p-2 my-1 !font-tilt text-sm" >View</p>
        </motion.div>
    ); 
  }