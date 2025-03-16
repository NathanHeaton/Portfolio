

import Image from "next/image"
import { useRef } from "react"

export default function Carousel({images})
{
    const IMAGE = useRef(null);

    // setInterval(() => {
    //     if (IMAGE)
    //     {
    //     IMAGE.current.classlist.replace("hidden","flex");
    //     }

    // },5000)

    setInterval
    
    return(
        <>
            {images.map((image, index) =>(
                <div key={index} ref={IMAGE} className="hidden">
                <Image src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                />
                <div className="size-5 rounded-full bg-white relative"></div>
                </div>
                

            ))}
        </>

        );
}