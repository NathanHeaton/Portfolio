"use client";

import { useEffect } from "react";

import { motion } from "framer-motion";

export default function MouseEffect() {


  useEffect(() => {
    const customMouse = document.getElementById("mouse");
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
          if (cursorStyle === "pointer" && mousesEnlarged == false && element.tagName == "DIV")
            {
                mousesEnlarged = true;
                mouseText.style.display = "flex";
                customMouse.style.color = "#0066cc";
            }
          else if (cursorStyle === "pointer" && mousesEnlarged == false)
          {
              mousesEnlarged = true;
              mouseScale = 2
              mouseText.style.display = "none";
              customMouse.style.color = "#0066cc";
              customMouse.style.scale = "2";

      
          }
      
          
          if (cursorStyle != "pointer" && mousesEnlarged == true )
          {
              mousesEnlarged = false;
              mouseText.style.display = "none";
              
              console.log("shrinking")
              mouseScale = 1
              customMouse.style.color = "#69de90";

          }
          customMouse.style.left = mouse.x - (mouseSize/2)  + "px";
          customMouse.style.top = mouse.y - (mouseSize/2) + "px";
        }
    
        
        console.log("Hovered over:", target?.tagName);
        
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  
    return (
        <motion.div id="mouse" animate={{}} className="rounded-full absolute w-4 h-4 bg-energygreen opacity-80 pointer-events-none left-[-8px] top-[-8px] transition-color duration-300 z-3">
          <p id="text" className="hidden p-1" >View</p>
        </motion.div>
    ); 
  }