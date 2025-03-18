import Image from "next/image";


export default function CardImage({src, width, height, alt})
{
    return(
        <div className="my-5" >
        <Image 
            src={src}
             alt={alt}
              width={width}
               height={height}
            />
    </div>
    );

}