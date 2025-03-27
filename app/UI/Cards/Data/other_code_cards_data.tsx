const OtherCards : {id : string, size : string, title : string, subTitle : string,
    description : any ,
     button : any,
    mainImage : {src : string, alt : string, aspect: string},
    secondaryImage : {src : string, alt : string, width: number, height : number}[],
    shortDescription : string,
    tools : string,
    extension : {extension : boolean, VLE : boolean}[]
   
   }[] = [
    {
        id: "43",
        size: "w-1/3",
        title: "Data Self Portrait",
        subTitle: "SETU",
        description: [
            "In this project, we are tasked with creating a visualization of data from our lives. I decided to base it on data from my electronic piano.",<br key={3} />,<br key={4}/>,
            "Record full MIDI sessions of my playing for 22 days",<br key={5}/>,
            "Use MIDI data to create a visual representation of my playing",<br key={6}/>,
            "Insight into how my playing visually changes when I am improvising, doing finger exercises, and performing or practicing songs",<br key={7}/>,
            "Looked at other people's projects",<br key={13}/>,<br key={14}/>,
            "Researched MIDI in Processing",<br key={8}/>,
            "Got basic playback working",<br key={9}/>,
            "Struggled to read Java documentation",<br key={10}/>,
            "Used AI to rework my code and get MIDI messages",<br key={11}/>,
            "Coded all the bouncing notes, track selection, and tried to fix file bugs",<br key={12}/>,
            "Github repo below:"
        ],
        button: [{ link: "https://github.com/NathanHeaton/Data-Self-Portrait.git", text: "Repo" }],
        mainImage: { src: "/img/Data Self Portrait poster.png", alt: "Data Self Portrait poster", aspect: "aspect-[3/4]" },
        secondaryImage: [
            { src: "/img/Data Self Portrait.png", alt: "Data Self Portrait", width: 500, height: 200 }
        ],
        shortDescription: "SETU Y3, audio visualizer",
        tools: "Processing (Java) and Adobe Photoshop",
        extension: [{ extension: false, VLE: false }]
    },
    {
        id: "44",
        size: "w-2/3",
        title: "To-Do App Wireframe",
        subTitle: "SETU Y2",
        description: [
            "A productivity-focused to-do app with customizable views and smart organization features. Users can switch between Week/Month Views for upcoming tasks, an Eisenhower Matrix for priority-based sorting, and color-coded task groups that learn user preferences. The app supports file attachments, importance tags, and group sorting for better task management. Custom notifications ensure timely reminders, while personalized navigation allows users to enable or disable different views, including Kanban boards.",
            <br key={1} />, <br key={2} />,
            "Below is a PDF of all my high-fidelity wireframes (issue with export caused some to not render correctly):"
        ],
        button: [{ link: "/doccument/pdf/desktop eisenhower matrix page.pdf", text: "Wireframe PDF" }],
        mainImage: { src: "/img/Todo-App.png", alt: "To-Do App Wireframe", aspect: "aspect-[5/3]" },
        secondaryImage: [
            { src: "/img/Todo-App-Mobile.png", alt: "To-Do App Mobile Wireframe", width: 300, height: 300 }
        ],
        shortDescription: "SETU Y2, wireframes for to-do list app",
        tools: "Penpot (wireframing)",
        extension: [{ extension: false, VLE: false }]
    }
];

export default OtherCards;