import Image from "next/image";


export default function CardImage({key, src, width, height, alt})
{
    return(
        <div className="my-5" >
        <Image 
            key={key}
            src={src}
             alt={alt}
              width={width}
               height={height}
            />
    </div>
    );

}