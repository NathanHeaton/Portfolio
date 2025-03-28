const TradArtCards: {id : number, size : string, title : string, subTitle : string,
    description : [
        string,
    ] | any ,
     button : [

     ] | any ,
    mainImage : {src : string, alt : string, aspect: string},
    secondaryImage : {src : string, alt : string, width: number, height : number}[],
    shortDescription : string,
    tools : string,
    extension : {extension : boolean, VLE : boolean}[]
   
   }[] = [
    {
        id: 24,
        size: "w-1/2",
        title: "Portrait",
        subTitle: "Personal",
        description: [],
        button: [],
        mainImage: { src: "/art/Portrait-Woman.jpg", alt: "pencil portrait", aspect: "aspect-[5/3]" },
        secondaryImage: [],
        shortDescription: "Pencil drawing of a woman",
        tools: "B6 to HB pencils, tortillon, and eraser",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: 25,
        size: "w-1/2",
        title: "Pencil Portrait",
        subTitle: "Personal",
        description: [
            "Realistic portrait of a person, I used Pinterest for reference."
        ],
        button: [],
        mainImage: { src: "/art/Portrait-Woman2.jpg", alt: "pencil portrait", aspect: "aspect-[5/3]" },
        secondaryImage: [],
        shortDescription: "Realistic study of a person",
        tools: "B6 to HB pencils, tortillon, and eraser",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: 26,
        size: "w-1/2",
        title: "Ceramic Piece",
        subTitle: "Leaving Cert Art",
        description: [
            "Ceramic building I made for my Leaving Cert art."
        ],
        button: [],
        mainImage: { src: "/art/ceramicBuilding.PNG", alt: "ceramic building", aspect: "aspect-[5/3]" },
        secondaryImage: [],
        shortDescription: "Ceramic building based on the Hungarian parliament",
        tools: "Slab pottery tools",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: 27,
        size: "w-1/2",
        title: "Pencil Portrait",
        subTitle: "Personal",
        description: [
            "Realistic portrait of a person, I used Pinterest for reference."
        ],
        button: [],
        mainImage: { src: "/art/portrait-asian-man.jpg", alt: "pencil portrait", aspect: "aspect-[5/3]" },
        secondaryImage: [],
        shortDescription: "Realistic study of a person",
        tools: "B6 to HB pencils, tortillon, and eraser",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: 28,
        size: "w-2/3",
        title: "Car Drawings",
        subTitle: "Personal",
        description: [
            "These are some drawings of cars I have done. I mostly draw sports cars from reference and sometimes draw my own designs from my head."
        ],
        button: [],
        mainImage: { src: "/art/car2.jpg", alt: "Supra", aspect: "aspect-[5/3]" },
        secondaryImage: [
            { src: "/art/car1.jpg", alt: "car", width: 600, height: 300 },
            { src: "/art/car and flower.jpg", alt: "car", width: 600, height: 300 }
        ],
        shortDescription: "Realistic study of sports cars",
        tools: "B6 to HB pencils, tortillon, and eraser",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: 29,
        size: "w-1/3",
        title: "Pencil Portraits",
        subTitle: "Personal",
        description: [
            "These are some drawings of people I have done. Over the summer, I practiced drawing people nearly every day, mostly drawing from life."
        ],
        button: [],
        mainImage: { src: "/art/portrait1.jpg", alt: "pencil portrait", aspect: "aspect-[3/4]" },
        secondaryImage: [
            { src: "/art/portrait2.png", alt: "pencil portrait", width: 600, height: 300 }
        ],
        shortDescription: "Realistic study of people",
        tools: "B6 to HB pencils, tortillon, and eraser",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: 30,
        size: "w-2/3",
        title: "Guitar Painting",
        subTitle: "Leaving Cert",
        description: [
            "Painting of my electric guitar. I rarely use acrylic paint, but I wanted to try it out, and I think it worked well."
        ],
        button: [],
        mainImage: { src: "/art/guitar.png", alt: "guitar painting", aspect: "aspect-[5/3]" },
        secondaryImage: [],
        shortDescription: "Painting of my electric guitar",
        tools: "B6 to HB pencils, acrylic paint",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: 31,
        size: "w-1/3",
        title: "Charcoal Portrait",
        subTitle: "Personal",
        description: [
            "This is a charcoal drawing I did of Johnny Silverhand from Cyberpunk 2077."
        ],
        button: [],
        mainImage: { src: "/art/Jonny-Silverhand.jpg", alt: "Jonny Silverhand", aspect: "aspect-[3/4]" },
        secondaryImage: [],
        shortDescription: "Johnny Silverhand from Cyberpunk 2077",
        tools: "Charcoal pencils, tortillon, and eraser",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: 32,
        size: "w-1/3",
        title: "Pencil Portrait, Arthur Morgan",
        subTitle: "Personal",
        description: [
            "Pencil drawing of Arthur Morgan from Red Dead Redemption 2. I used a reference image from Google."
        ],
        button: [],
        mainImage: { src: "/art/portrait-Arthur-Morgan.jpg", alt: "Arthur Morgan", aspect: "aspect-[3/4]" },
        secondaryImage: [],
        shortDescription: "Arthur Morgan from Red Dead Redemption 2",
        tools: "B6 to HB pencils, tortillon, and eraser",
        extension: [{ extension: false, VLE: false }]
    }
];

export default TradArtCards;