
const GameCards : {id : number, size : string, title : string, subTitle : string,
    description : any ,
     button : any,
    mainImage : {src : string, alt : string, aspect: string},
    secondaryImage : {src : string, alt : string, width: number, height : number}[],
    shortDescription : string,
    tools : string,
    extension : {extension : boolean, VLE : boolean}[]
   
   }[] = [
        {
            id: 9,
            size: "w-1/3",
            title: "Golden-Duel",
            subTitle: "SETU Carlow",
            description: [
                "2 player battle game each player gets a weapon they can attack with the weapon by pressing the button. Players are rewarded with more damage if they can time the press or release of a button to a visual indicator. Weapons have different properties depending on their size and how they would be utilised in life. Weapons get changed randomly every few seconds, so players need to learn the best strategy for every weapon if they want to win.",
                <br key={1} />, <br key={2} />,
                "I designed the weapons on Photoshop along with the prototype screens, then I used Figma to design an interactive preview of the game.",
                <br key={3} />, <br key={4} />,
                "View prototype below:"
            ],
            button: [{ link: "https://www.figma.com/proto/F25ZnUCxCdElpSxK8qWeNv/Gold-Duel?node-id=0-1&t=1YuwKkX9rgGJp0xm-1", text: "Figma Prototype" }],
            mainImage: { src: "/img/golden duel.png", alt: "game about flying around and hitting targets", aspect: "aspect-[5/3]" },
            secondaryImage: [{ src: "/img/golden duel weapons.png", alt: "weapons for Golden-Duel", width: 600, height: 250 }],
            shortDescription: "SETU Y3, Game Concept about dueling with weapons using only one button",
            tools: "Figma and Adobe Photoshop",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: 10,
            size: "w-2/3",
            title: "An Phiast's Destruction",
            subTitle: "SETU Carlow / Dingle",
            description: [
                "Group project built in Godot for Animation Dingle and for part of a course module. The game is based on Vampire Survivors (a 2022 roguelike shoot 'em up video) you play as Phiast who is the mascot for Animation Dingle, the aim is to destroy buildings/enemies this gives you exp allowing you to upgrade your slash attack and use many new attacks. The game is loosely set in Dingle Kerry the home town of An Phiast.",
                <br key={1} />, <br key={2} />,
                "I mainly worked on the music for the game I also sourced all the SFX and programmed some attacks.",
                <br key={3} />, <br key={4} />,
                "Github repo below:"
            ],
            button: [
                { link: "https://github.com/NaoiseRyan/AnimationDingle_GameSting.git", text: "Github Repo" },
                { link: "https://drive.google.com/drive/folders/17TkM1KU7oGcDXh4GAuuFYNtOHjl-sySN?usp=sharing", text: "Download" }
            ],
            mainImage: { src: "/img/An Phiasts Destruction.png", alt: "website game puzzle exploration", aspect: "aspect-[1279/718]" },
            secondaryImage: [
                { src: "/img/An Phiasts Gameplay.png", alt: "end screen for cat game", width: 600, height: 300 },
                { src: "/img/An Phiasts Destruction game over.png", alt: "player sprites", width: 600, height: 300 }
            ],
            shortDescription: "SETU Y3, Game about surviving waves of enemies and general destruction",
            tools: "Godot and FL Studio",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: 11,
            size: "w-2/3",
            title: "Quest of An Phiast",
            subTitle: "SETU Carlow / Dingle",
            description: [
                "This game was a sting / demo made for Dingle animations. Group Project. In the game, players find themselves at Loch Corraillí, a mystical lake home to the legendary creature, An Phiast. The player casts their fishing line into the water, waiting patiently for a bite. Once they get a nibble, they must click quickly to hook the fish. Players use the scroll wheel to carefully reel in their catch, making sure they don’t reel too fast or slow.",
                <br key={1} />, <br key={2} />,
                "An Phiast, the guardian of the lake, always demands a tribute. After reeling in a fish, the player offers it to An Phiast, who devours the catch in exchange for rewards. These rewards range from enchanted lures to stronger fishing lines, which help the player capture rarer and more valuable fish hiding deep within the loch. Over time, players get the best gear where then they have a chance to catch the rarest fish in Loch Corraillí’s waters completing the game.",
                <br key={3} />, <br key={4} />,
                "I programmed the game in JavaScript using a js canvas, I made the assets and spritesheets in Photoshop my partner also helped with making concept art for some of the assets.",
                <br key={5} />, <br key={6} />,
                "Github repo and link for game below:"
            ],
            button: [
                { link: "https://github.com/NathanHeaton/Quest-of-PHIAST.git", text: "Github Repo" },
                { link: "https://nathanheaton.github.io/Quest-of-PHIAST/index.html", text: "Play" }
            ],
            mainImage: { src: "/img/Quest of Phiast feeding.png", alt: "fishing game", aspect: "aspect-[5/3]" },
            secondaryImage: [
                { src: "/img/Quest of Phiast gamplay.png", alt: "end screen for cat game", width: 600, height: 300 },
                { src: "/img/Quest of Phiast fishing.png", alt: "player sprites", width: 600, height: 300 }
            ],
            shortDescription: "SETU Y3, Game about fishing for a monster",
            tools: "HTML, CSS, JS and Adobe Photoshop",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: 12,
            size: "w-1/2",
            title: "Cardochism",
            subTitle: "SETU Carlow",
            description: [
                "Cardochism was the end of year group project for IDAD in first year. The game is a bullet hell and involves the player dodging and killing enemies and once the time runs out the player has the chance to buy from the shop to get more lives or attack cards. The main game mechanic is the ability to speed up and slow down the games playing at faster speeds means better reward but can be too difficult all the time so you can also slow time to dodge easier.",
                <br key={1} />, <br key={2} />,
                "I mainly worked on art I made all the backgrounds the player animations and the bullets all using Photoshop. I also worked on some of the code I added the bullet shooting functions and some of the animations using C++. I also added the main game music which I made using FL Studio."
            ],
            button: [{ link: "https://github.com/PeterLowe/prototype-sushi-terrorists", text: "Repo" }],
            mainImage: { src: "/img/cardochism gameplay.PNG", alt: "roulette themed bullet hell game", aspect: "aspect-[5/3]" },
            secondaryImage: [
                { src: "/img/cardochism help screen.PNG", alt: "home screen", width: 300, height: 300 },
                { src: "/img/cardochism home screen.PNG", alt: "home screen", width: 300, height: 300 }
            ],
            shortDescription: "SETU Y1, Group project, bullet hell with slow time mechanic",
            tools: "C++, SFML, Adobe Photoshop and FL Studio",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: 13,
            size: "w-1/2",
            title: "Escape from Time",
            subTitle: "SETU Carlow",
            description: [
                "This is a website I built in IDAD year 2 in the first semester. This was my first time using JavaScript extensively. Our theme was Time so I decided to make a game where you have to solve a puzzle using time portals to your advantage. There is one portal that takes you to the future and one to the past, in the past there are more enemies as the building is not abandoned yet but in the past is also where all the tech still works well. Using these portals you must find a way to escape I didn't have enough time to add an ending so once you beat it it just goes on to the next level and repeats.",
                <br key={1} />, <br key={2} />,
                "I used a js canvas to render the sprites, the game is both desktop and mobile compatible and can be downloaded as a PWA it also saves user data in local storage so you play from where you left off. I also used a song I composed in FL and added walking and running sound effects I found online."
            ],
            button: [{ link: "https://ui-programming-23-24.codeberg.page/Nathan-Heaton-C00286899-UI-Programming-Module-Project/", text: "Check it out" }],
            mainImage: { src: "/img/Escape from time gameplay.PNG", alt: "website game puzzle exploration", aspect: "aspect-[5/3]" },
            secondaryImage: [
                { src: "/img/Escape from time future gameplay.PNG", alt: "Future screen", width: 600, height: 300 },
                { src: "/img/Escape from time options.PNG", alt: "options screen", width: 600, height: 300 }
            ],
            shortDescription: "SETU Y2, Game about time travel made using JS.",
            tools: "HTML, CSS, JS and Aseprite",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: 14,
            size: "w-2/3",
            title: "Cat and Rat",
            subTitle: "SETU Carlow",
            description: [
                "My end of year project for first year Cat and Rat, this game is about shooting rats and mice before they get to the cheese. All of the art assets were made in Aseprite and I coded the game in C++ using SFML library, object-oriented programming.",
                <br key={1} />, <br key={2} />,
                "The enemies descend from the top of the screen while moving randomly left and right then when they are closest to the cheese they head in a direct line towards it. The player can shoot bouncing bullets to try to stop the enemy one hit will kill the mice but two will be needed for the rats. Outside of college I added a milk power-up that gives the player more speed.",
                <br key={3} />, <br key={4} />,
                "Github repo below:"
            ],
            button: [{ link: "https://github.com/KenPowerClassroom/programmingproject2023-NathanHeaton", text: "Repo" }],
            mainImage: { src: "/img/cat and rat game.PNG", alt: "website game puzzle exploration", aspect: "aspect-[5/3]" },
            secondaryImage: [
                { src: "/img/cat and rat game end screen.PNG", alt: "end screen for cat game", width: 300, height: 300 },
                { src: "/art/cat_Player1.png", alt: "player sprites", width: 300, height: 300 }
            ],
            shortDescription: "SETU Y1, Game about protecting cheese from rodents",
            tools: "C++, SFML and Aseprite",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: 15,
            size: "w-1/3",
            title: "Heli-Shooter",
            subTitle: "SETU Carlow",
            description: [
                "Heli-Shooter is the first game I made in 1st year. The aim of the game is to shoot targets that spawn randomly on the screen when the player hits one they get points and a new target spawns. The shooting is very buggy as it is the first game I made but it does function and is playable.",
                <br key={1} />, <br key={2} />,
                "The assets were made in Aseprite except for the gameplay background which I got online. I coded the game in C++ using SFML library."
            ],
            button: [{ link: "https://github.com/PeterLowe/spring-interactive-NathanHeaton", text: "Repo" }],
            mainImage: { src: "/img/Heli-shooter gameplay.PNG", alt: "game about flying around and hitting targets", aspect: "aspect-[3/4]" },
            secondaryImage: [{ src: "/img/Heli-shooter home screen.PNG", alt: "home screen", width: 600, height: 250 }],
            shortDescription: "SETU Y1, Game about shooting targets that spawn randomly",
            tools: "C++, SFML and Aseprite",
            extension: [{ extension: false, VLE: false }]
        },
        {
            id: 16,
            size: "w-2/3",
            title: "Fish Grow",
            subTitle: "Personal",
            description: [
                "This is a game I made in my spare time over the summer, the aim of the game is to collect food and grow as big as possible. Yellow pellets spawn randomly around the screen eating them increases player size once the player is big enough they can choose to evolve with the number keys. I only did coding for this project again I used C++ with SFML libs.",
                <br key={1} />, <br key={2} />,
                "Github repo below:"
            ],
            button: [{ link: "https://github.com/NathanHeaton/slider-game", text: "Repo" }],
            mainImage: { src: "/img/fish growing game.PNG", alt: "website game puzzle exploration", aspect: "aspect-[5/3]" },
            secondaryImage: [],
            shortDescription: "Personal, Game about growing a fish big.",
            tools: "C++, SFML and Aseprite",
            extension: [{ extension: false, VLE: false }]
        }
    ];






export default GameCards;
