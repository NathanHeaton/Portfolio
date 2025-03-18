import Image from "next/image";

// gives types to function atributes
type types ={
    src:string;
    width:number;
    height:number;
    alt:string;
}

export default function CardImage({src, width, height, alt} : types)
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