
const SketchesCards : {id : string, size : string, title : string, subTitle : string,
    description : any ,
     button : any,
    mainImage : {src : string, alt : string, aspect: string},
    secondaryImage : {src : string, alt : string, width: number, height : number}[],
    shortDescription : string,
    tools : string,
    extension : {extension : boolean, VLE : boolean}[]
   
   }[] = [
    {
        id: "35",
        size: "w-1/3",
        title: "Action Poses",
        subTitle: "SETU Carlow",
        description: [
            "Sketches of action poses for second year IDAD."
        ],
        button: [],
        mainImage: { src: "/art/pose-Sketch.jpg", alt: "action poses", aspect: "aspect-[3/4]" },
        secondaryImage: [
            { src: "/art/pose-Sketch2.jpg", alt: "action poses", width: 600, height: 300 }
        ],
        shortDescription: "Sketches of action poses",
        tools: "Pencil and paper",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: "36",
        size: "w-1/3",
        title: "Male Anatomy",
        subTitle: "Personal",
        description: [
            "These are some anatomy sketches that I did recently."
        ],
        button: [],
        mainImage: { src: "/art/Male-anatomy1.jpg", alt: "male anatomy sketches", aspect: "aspect-[3/4]" },
        secondaryImage: [],
        shortDescription: "Anatomy sketches of male figures",
        tools: "Pencil and paper",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: "37",
        size: "w-1/3",
        title: "Female Anatomy",
        subTitle: "Personal",
        description: [
            "These are some anatomy sketches that I did recently."
        ],
        button: [],
        mainImage: { src: "/art/Woman-anatomy1.jpg", alt: "female anatomy sketches", aspect: "aspect-[3/4]" },
        secondaryImage: [],
        shortDescription: "Anatomy sketches of female figures",
        tools: "Pencil and paper",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: "38",
        size: "w-1/3",
        title: "Animal Sketches",
        subTitle: "SETU",
        description: [
            "Quick rough sketching of animals, 30 seconds per drawing."
        ],
        button: [],
        mainImage: { src: "/art/sketch-animal1.jpg", alt: "animal sketches", aspect: "aspect-[3/4]" },
        secondaryImage: [],
        shortDescription: "Quick sketches of animals",
        tools: "Pencil and paper",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: "39",
        size: "w-1/3",
        title: "Animal Sketches",
        subTitle: "SETU",
        description: [
            "Quick rough sketching of animals, 30 seconds per drawing."
        ],
        button: [],
        mainImage: { src: "/art/sketch-animal2.jpg", alt: "animal sketches", aspect: "aspect-[3/4]" },
        secondaryImage: [],
        shortDescription: "Quick sketches of animals",
        tools: "Pencil and paper",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: "40",
        size: "w-1/3",
        title: "Animal Sketches",
        subTitle: "SETU",
        description: [
            "Quick rough sketching of animals, 30 seconds per drawing."
        ],
        button: [],
        mainImage: { src: "/art/sketch-animal3.jpg", alt: "animal sketches", aspect: "aspect-[3/4]" },
        secondaryImage: [],
        shortDescription: "Quick sketches of animals",
        tools: "Pencil and paper",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: "41",
        size: "w-1/3",
        title: "Animal Sketches",
        subTitle: "SETU",
        description: [
            "Quick rough sketching of animals, 30 seconds per drawing."
        ],
        button: [],
        mainImage: { src: "/art/sketch-animal4.jpg", alt: "animal sketches", aspect: "aspect-[3/4]" },
        secondaryImage: [],
        shortDescription: "Quick sketches of animals",
        tools: "Pencil and paper",
        extension: [{ extension: false, VLE: false }]
    }
];

export default SketchesCards;