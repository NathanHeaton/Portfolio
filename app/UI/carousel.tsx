

import Image from "next/image"
import { useRef } from "react"

type types = {
    src : string;
    alt : string;
    width : number;
    height : number;
}
type carousel = {
    images : types[];
}

export default function Carousel({images} : carousel)
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
            {images.map((image, index : number) =>(
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