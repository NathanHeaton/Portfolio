const MusicCards : {id : string, size : string, title : string, subTitle : string,
    description : any ,
     button : any,
    mainImage : {src : string, alt : string, aspect: string},
    secondaryImage : {src : string, alt : string, width: number, height : number}[],
    shortDescription : string,
    tools : string,
    extension : {extension : boolean, VLE : boolean}[]
   
   }[] = [
    {
        id: "42",
        size: "w-1/3",
        title: "Soundcloud",
        subTitle: "Personal",
        description: [
            "My Soundcloud."
        ],
        button: [{ link: "https://soundcloud.com/nathan-heaton-207274954", text: "Check it out" }],
        mainImage: { src: "/img/soundcloud.PNG", alt: "Soundcloud", aspect: "aspect-[3/4]" },
        secondaryImage: [],
        shortDescription: "Link to my Soundcloud profile",
        tools: "Soundcloud",
        extension: [{ extension: false, VLE: false }]
    }
];

export default MusicCards;