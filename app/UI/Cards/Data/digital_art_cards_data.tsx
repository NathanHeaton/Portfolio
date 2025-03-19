
const DigitalArtCards : {id : string, size : string, title : string, subTitle : string,
    description : any ,
     button : any,
    mainImage : {src : string, alt : string, aspect: string},
    secondaryImage : {src : string, alt : string, width: number, height : number}[],
    shortDescription : string,
    tools : string,
    extension : {extension : boolean, VLE : boolean}[]
   
   }[] = [
        {
            id: "17",
            size: "w-2/3",
            title: "Strows Concept Art",
            subTitle: "SETU Carlow",
            description: [
                "Concept art project for a made-up civilisation, The civilisation I made up was the Strows. I did concept art for the landscape they live in, their technology, animals, and plants that also inhabit this planet."
            ],
            button: [],
            mainImage: { src: "/art/Concept Landscape.png", alt: "alien landscape", aspect: "aspect-[5/3]" },
            secondaryImage: [
                { src: "/art/Strow.PNG", alt: "alien strow", width: 600, height: 300 },
                { src: "/art/2plants.PNG", alt: "alien plants", width: 600, height: 300 }
            ],
            shortDescription: "Concept landscape for Strow civilisation",
            tools: "Adobe Photoshop",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: "18",
            size: "w-1/3",
            title: "Photoshop Portraits",
            subTitle: "Personal",
            description: [
                "Digital portraits over the summer 2024, I used Pinterest to find references."
            ],
            button: [],
            mainImage: { src: "/art/PSportrait2.png", alt: "digital art of a man's face", aspect: "aspect-[3/4]" },
            secondaryImage: [
                { src: "/art/gold roman 10.png", alt: "knight lineart", width: 600, height: 300 }
            ],
            shortDescription: "Digital portraits",
            tools: "Adobe Photoshop",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: "19",
            size: "w-1/2",
            title: "Knight Rig",
            subTitle: "SETU Carlow",
            description: [
                "Practical from the end of second year. The goal was to create a character to be rigged in Spine. I made a view for each direction but didn't have time to rig all of them, so only the side view is rigged."
            ],
            button: [],
            mainImage: { src: "/art/knight for rigging.PNG", alt: "knight rig", aspect: "aspect-[5/3]" },
            secondaryImage: [
                { src: "/art/Knight Rig lineart.PNG", alt: "knight lineart", width: 600, height: 300 },
                { src: "/art/Knight Rig sketch.PNG", alt: "knight sketch", width: 600, height: 300 }
            ],
            shortDescription: "Character turnaround and rig",
            tools: "Adobe Photoshop, Spine",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: "20",
            size: "w-1/2",
            title: "Pixel Art Flowers",
            subTitle: "SETU Carlow",
            description: [
                "First-year intro to pixel art and Aseprite. We had to make pixel art versions of flowers."
            ],
            button: [],
            mainImage: { src: "/art/FLowers.PNG", alt: "pixel art flowers", aspect: "aspect-[5/3]" },
            secondaryImage: [],
            shortDescription: "Pixel Art Flowers first-year assignment",
            tools: "Aseprite",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: "21",
            size: "w-1/2",
            title: "Cat and Rat",
            subTitle: "SETU Carlow",
            description: [
                "My end-of-year project for first year, Cat and Rat. This game is about shooting rats and mice before they get to the cheese. All of the art assets were made in Aseprite, and I coded the game in C++ using the SFML library."
            ],
            button: [],
            mainImage: { src: "/img/menu.png", alt: "home screen for cat game", aspect: "aspect-[5/3]" },
            secondaryImage: [
                { src: "/img/cat and rat game end screen.PNG", alt: "end screen", width: 600, height: 300 },
                { src: "/art/cat_Player1.png", alt: "cat player spritesheet", width: 600, height: 300 },
                { src: "/art/Mouse_enemy1.png", alt: "mouse enemy spritesheet", width: 300, height: 300 },
                { src: "/art/rat_enemy-Sheet.png", alt: "rat enemy spritesheet", width: 300, height: 300 }
            ],
            shortDescription: "Game spritesheet",
            tools: "Aseprite",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: "22",
            size: "w-1/3",
            title: "Heli Sprite",
            subTitle: "SETU Carlow",
            description: [
                "First-year intro to pixel art and Aseprite. Sprite for Heli-Shooter flying animations."
            ],
            button: [],
            mainImage: { src: "/art/heli for heli game.png", alt: "heli sprite", aspect: "aspect-[3/4]" },
            secondaryImage: [],
            shortDescription: "Heli sprite for Heli-Shooter",
            tools: "Aseprite",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: "23",
            size: "w-1/3",
            title: "PRACTICAL1 Year 2",
            subTitle: "SETU Carlow",
            description: [
                "Practical from the start of second year. We had to create a character in an action pose. Then we also had to make redesigns in other art styles."
            ],
            button: [],
            mainImage: { src: "/art/PRACTICAL1 year2.png", alt: "woman in action pose", aspect: "aspect-[3/4]" },
            secondaryImage: [
                { src: "/art/pracical2 - simpsons style.png", alt: "Simpsons style", width: 600, height: 300 },
                { src: "/art/practical 2 flat art syle.png", alt: "flat art style", width: 600, height: 300 }
            ],
            shortDescription: "Character in an action pose",
            tools: "Adobe Photoshop",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: "24",
            size: "w-1/3",
            title: "Photoshop Portraits",
            subTitle: "Personal",
            description: [
                "Digital portraits over the summer 2024, I used Pinterest to find references."
            ],
            button: [],
            mainImage: { src: "/art/Digital portrait 1.png", alt: "woman digital art, with white outline ", aspect: "aspect-[3/4]" },
            secondaryImage: [

            ],
            shortDescription: "woman digital art",
            tools: "Adobe Photoshop",
            extension: [{ extension: false, VLE: false }]
        }
    


];

export default DigitalArtCards;