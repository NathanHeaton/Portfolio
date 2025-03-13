"use client";

import { useEffect } from "react";

import { motion } from "framer-motion";
import { useRef } from "react";
import "../globals.css";

export default function MouseEffect() {
  const mouseRef = useRef(null);
  const mouseTextRef = useRef(null);

  useEffect(() => {

    const customMouse = mouseRef.current;

    if(customMouse) customMouse.style.backgroundColor = "#69de90";

    const mouseText = mouseTextRef.current;
    let mouseSize = 16;
    let mousesEnlarged = false

    let mousePos = {x:0,y:0};
    let targetPos = {x:0,y:0};

    const handleMouseMove = (e) =>
    {
      targetPos = {x: e.pageX, y: e.pageY}

      let element = null
      if(isFinite(e.clientX) && isFinite(e.clientY))// ,ales sure eclient is a number that can be used
      {
        element = document.elementFromPoint(e.clientX,e.clientY)// finds the element the user is hovering over
      }
      let cursorStyle = null
      if(element)
      {
      cursorStyle = window.getComputedStyle(element).cursor;
      }

      if (customMouse && element && mouseText)
      {
        if (cursorStyle === "pointer" && mousesEnlarged == false)
        {
          mousesEnlarged = true;
          customMouse.style.backgroundColor = "#0066cc";
          if (element.tagName == "IMG")
          {
            mouseText.classList.replace("opacity-0", "opacity-80");
            customMouse.classList.replace("size-4","size-17");
          }
          else
            customMouse.classList.replace("size-17", "size-4");
        }
        else if (cursorStyle != "pointer" && mousesEnlarged == true )
        {
          mousesEnlarged = false;
          mouseText.classList.replace("opacity-80", "opacity-0");
          customMouse.style.backgroundColor = "#69de90";
          customMouse.classList.replace("size-17", "size-4");
        }
      }
    };

    function lerp(start, end, factor) {
      return start + (end - start) * factor;
    }

    const animate = () => {
      mousePos.x = lerp(mousePos.x, targetPos.x, 0.05); // Lower factor = smoother transition
      mousePos.y = lerp(mousePos.y, targetPos.y, 0.05);

      if (customMouse) {
        customMouse.style.left = `${mousePos.x - mouseSize / 2}px`;
        customMouse.style.top = `${mousePos.y - mouseSize / 2}px`;
      }

     requestAnimationFrame(animate);
    };

    animate(); // Start animation loop

  
      window.addEventListener("mousemove", handleMouseMove);
      //window.addEventListener("scroll", handleMouseMove );
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
  
    return (
      <motion.div
      ref={mouseRef}
      className="rounded-full md:flex hidden justify-center absolute size-4 opacity-80 pointer-events-none left-[-8px] transition-[width,height,background-color] duration-500 top-[-8px] z-3"
    >
      <p
        ref={mouseTextRef}
        className="opacity-0 p-4 my-1 !font-tilt text-sm transition-[width,height,background-color] duration-500"
      >
        View
      </p>
    </motion.div>
    ); 
  }