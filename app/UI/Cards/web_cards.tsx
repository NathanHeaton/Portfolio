import Image from "next/image"

import clsx from "clsx"

const Cards = [
    {
        id: "1",
        title: "Blooming Flower Clock",
        subTitle: "SETU Carlow year 3",
        description: "Clock represented by blooming flowers telling the season and time of day growth and movement of the flower implies the time have some trivia about the flower blooming in this month able to scroll through other months past months have wilted flowers and ones in the future are just seeds. Responsive mobile and desktop design. first mock up done in photoshop then I made a sprite sheet in aseprite with each of flower and their stage of growths. see whats in bloom today.",
        webLink: "https://nathanheaton.github.io/bloomingFlowerClock/",
        mainImage: "/img/Blooming flower image.png",
        mainImageAlt: "pixel art flower",
        secondaryImage: "/img/blooming flower sprites.png",
        secondaryImageAlt: "pixel art flower sprite sheet",
        size: "1/3",
        shortDescription: "SETU Y3, Unconventional clock, based on flowers",
        tools: " HTML, CSS, JS, Aseprite and Adobe Photoshop"

    },
    
]

export default function WebCards(){

    return(
        <>
        {Cards.map((card) =>// returns a link for each section in code projects
        {
            return (
            <section key={card.id} className={clsx(`w-full sm:w-${card.size}`,)} >
                <div className={clsx(`w-full md:w-${card.size}`)} >
                    <div className="hover:flex hidden w-full h-full absolute justify-center"><h2 >{card.title}</h2></div>
                    <Image 
                        src={card.mainImage}
                        alt={card.mainImageAlt}
                        width={300}
                        height={500}
                        className="w-full h-auto"
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
                            src={card.secondaryImage} alt={card.secondaryImageAlt} width="100" height={100}
                            />
                    </div>
                </article>  
                <section className="short-description">
                    <p className="bg-darkgrey rounded-b-xl p-4"><strong>Description</strong>: {card.shortDescription} <br />
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