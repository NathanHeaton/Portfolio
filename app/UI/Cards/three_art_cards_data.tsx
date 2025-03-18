const ThreeDArtCards : {id : string, size : string, title : string, subTitle : string,
    description : any ,
     button : any,
    mainImage : {src : string, alt : string, aspect: string},
    secondaryImage : {src : string, alt : string, width: number, height : number}[],
    shortDescription : string,
    tools : string,
    extension : {extension : boolean, VLE : boolean}[]
   
   }[] = [
    {
        id: "33",
        size: "w-1/2",
        title: "Blender Donut",
        subTitle: "Personal",
        description: [
            "First time using Blender, 3D model of a donut I made following a tutorial."
        ],
        button: [],
        mainImage: { src: "/art/donut.PNG", alt: "3D render donut", aspect: "aspect-[5/3]" },
        secondaryImage: [],
        shortDescription: "3D model of a donut made in Blender",
        tools: "Blender",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: "34",
        size: "w-1/2",
        title: "Blender Coffee Cup",
        subTitle: "Personal",
        description: [
            "3D model of a Coffee Cup I made following a tutorial in Blender."
        ],
        button: [],
        mainImage: { src: "/art/coffe cup.png", alt: "3D render coffee cup", aspect: "aspect-[5/3]" },
        secondaryImage: [],
        shortDescription: "3D model of a coffee cup made in Blender",
        tools: "Blender",
        extension: [{ extension: false, VLE: false }]
    }
];

export default ThreeDArtCards;