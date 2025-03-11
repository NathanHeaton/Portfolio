import Image from "next/image"

import clsx from "clsx"

const Cards = [
    {
        id: "1",
        size: "w-1/3",
        enlarged : false,
        // text and links
        title: "Blooming Flower Clock",
        subTitle: "SETU Carlow year 3",
        description: "Clock represented by blooming flowers telling the season and time of day growth and movement of the flower implies the time have some trivia about the flower blooming in this month able to scroll through other months past months have wilted flowers and ones in the future are just seeds. Responsive mobile and desktop design. first mock up done in photoshop then I made a sprite sheet in aseprite with each of flower and their stage of growths. see whats in bloom today.",
        webLink: "https://nathanheaton.github.io/bloomingFlowerClock/",
        // images
        mainImage: {src:"/img/Blooming flower image.png", alt: "pixel art flower", width: 300, height : 500},
        secondaryImage: {src:"/img/blooming flower sprites.png", alt: "pixel art flower sprite sheet", width: 4, height : 3},
        // for short description
        shortDescription: "SETU Y3, Unconventional clock, based on flowers",
        tools: " HTML, CSS, JS, Aseprite and Adobe Photoshop"

    },
    {
        id: "2",
        size: "w-2/3",
        enlarged : false,
        title: "VLE (Virtual Learning Enviornment)",
        subTitle: "SETU Carlow - UX Measurement",
        description: "To see my entire report of my process and the steps involved in my process please view download the below PDF",
        webLink: "https://nathanheaton.github.io/bloomingFlowerClock/",
        mainImage: {src:"/img/Module page adjusted.png", alt: "VLE login page", width: 800, height : 300},
        secondaryImage: {src:"/img/blooming flower sprites.png", alt: "VLE login page", width: 4, height : 3},

        shortDescription: "SETU Y3, High fidelity Wireframes, work process for VLE UI design and UX Measurement",
        tools: "Figma, MS Forms and OBS(for user testing/recordings)"

    },
    
    
]

export default function WebCards(){

    return(
        <>
        {Cards.map((card) =>// returns a link for each section in code projects
        {
            return (
            <section key={card.id} className={clsx(card.size, "max-md:w-full relative flex flex-col p-2")} >
                <div className="w-full h-full md:relative overflow-hidden aspect-[4/3]">
                    <div className="hover:flex hidden h-auto relative justify-center"><h2 >{card.title}</h2></div>
                        <Image
                        src={card.mainImage.src}
                        alt={card.mainImage.alt}
                        // width={card.mainImage.width || 500}
                        // height={card.mainImage.height || 500}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                        className="w-full h-auto rounded-t-xl object-cover overflow-clip"
                        />                   
                </div>
                {/*</section><button class="back-button" onclick="shrinkCard(this, 33)" >back</button>*/}
                <article className="hidden" >
                    <h1>{card.title}</h1>
                    <h3>{card.subTitle}</h3>
                    <p>
                        {card.description}
                    </p>
                    <a href={card.webLink} id="button-link" target="_blank">Check it out</a>
                    <div className="Image-inner-card" >
                        <Image 
                            src={card.secondaryImage.src} alt={card.secondaryImage.alt} width="100" height={100}
                            />
                    </div>
                </article>  
                <section className="bg-darkgrey rounded-b-xl">
                    <p className="p-4 text-wrap"><strong>Description</strong>: {card.shortDescription} <br />
                        <strong>Tools</strong>: {card.tools}<br />
                        <i>Click/Tap image to find out more!</i></p>
                </section>
            </section>
            )
            }
        )
        }
        
        </>
    )

}