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
        mainImage: {src:"/img/Blooming flower image.png", alt: "pixel art flower", aspect :"aspect-[5/3]"},
        secondaryImage: {src:"/img/blooming flower sprites.png", alt: "pixel art flower sprite sheet", width: 4, height : 3},
        // for short description
        shortDescription: "SETU Y3, Unconventional clock, based on flowers",
        tools: " HTML, CSS, JS, Aseprite and Adobe Photoshop"

    },
    {
        id: "2",
        size: "w-2/3",
        enlarged : false,
        // text and links
        title: "VLE (Virtual Learning Enviornment)",
        subTitle: "SETU Carlow - UX Measurement",
        description: "To see my entire report of my process and the steps involved in my process please view download the below PDF",
        webLink: "https://nathanheaton.github.io/bloomingFlowerClock/",
        // images        
        mainImage: {src:"/img/Module page adjusted.png", alt: "VLE login page", aspect :"aspect-[1920/1080]"},
        secondaryImage: {src:"/img/blooming flower sprites.png", alt: "VLE login page", width: 4, height : 3},
        // for short description
        shortDescription: "SETU Y3, High fidelity Wireframes, work process for VLE UI design and UX Measurement",
        tools: "Figma, MS Forms and OBS(for user testing/recordings)"

    },
    {
        id: "3",
        size: "w-2/3",
        enlarged : false,
        // text and links
        title: "Retrograde Website",
        subTitle: "Commission 2024",
        description: "Website I designed and developed for Retrograde an Indie Soul-pop band based in Dublin. I used penpot to make a basic wireframe and then with feedback I made changes where need while increasing the fidelity. I add a spotify preview along with link to their relevent socials and a place to book tickets for their upcoming gig.",        webLink: "https://nathanheaton.github.io/bloomingFlowerClock/",
        // images
        mainImage: {src:"/img/Retrograde.png", alt: "retrograde website", aspect :"aspect-[1920/1080]"},
        secondaryImage: {src:"/img/Retrograde-music.png", alt: "retrograde music preview website", width: 4, height : 3},
        // for short description
        shortDescription: "Commission 2024, Website for a band in Dublin",
        tools: "Penpot(wireframing), HTML, CSS and JS"

    },
    
    
]

export default function WebCards(){

    return(
        <>

        {Cards.map((card) =>// returns a link for each section in code projects
        {
            return (
            <section key={card.id} className={clsx(card.size, "max-md:w-full relative flex flex-col p-2")} >
                <div className={clsx(card.mainImage.aspect, "w-full h-full relative overflow-hidden rounded-t-xl")}>
                    <Image
                    src={card.mainImage.src}
                    alt={card.mainImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    className="w-full h-auto object-cover overflow-clip"
                    />   
                    <div className="hover:flex hidden h-auto relative justify-center "><h2 >{card.title}</h2></div>                
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