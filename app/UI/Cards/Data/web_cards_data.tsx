


const WebCards : {id : string, size : string, title : string, subTitle : string,
   description : any ,
    button : any,
   mainImage : {src : string, alt : string, aspect: string},
   secondaryImage : {src : string, alt : string, width: number, height : number}[],
   shortDescription : string,
   tools : string,
   extension : {extension : boolean, VLE : boolean}[]
  
  }[] = [
    {
        id: "0",
        size: "w-1/3",
        // text and links
        title: "Blooming Flower Clock",
        subTitle: "SETU Carlow year 3",
        description:[ "Clock represented by blooming flowers telling the season and time of day growth and movement of the flower implies the time have some trivia about the flower blooming in this month able to scroll through other months past months have wilted flowers and ones in the future are just seeds.",
            , <br key={1}/>,  <br key={2}/>,
            "Responsive mobile and desktop design. first mock up done in photoshop then I made a sprite sheet in aseprite with each of flower and their stage of growths.",
             , <br key={3}/>, <br key={4} />,
             "See whats in bloom today."],
        button: [{link : "https://nathanheaton.github.io/bloomingFlowerClock/", text : "Visit Site" }],
        // images
        mainImage: {src:"/img/Blooming flower image.png", alt: "pixel art flower", aspect : "aspect-[3/5]"},
        secondaryImage: [{src:"/img/blooming flower sprites.png", alt: "pixel art flower sprite sheet", width: 600, height : 300}],
        // for short description
        shortDescription: "SETU Y3, Unconventional clock, based on flowers",
        tools: " HTML, CSS, JS, Aseprite and Adobe Photoshop",
        extension: [{extension : false,VLE : false}]

    },
    {
        id: "1",
        size: "w-2/3",
        // text and links
        title: "VLE (Virtual Learning Enviornment)",
        subTitle: "SETU Carlow - UX Measurement",
        description: ["To see my entire report of my process and the steps involved in my process please view download the below PDF, you can also view my Figma project below."],
        button: [{link : "/doccuments/VLE Design Report.pdf", text : "VLE Design Report.pdf" },{link : "https://www.figma.com/design/gbVMIeZDShAIkHxHYnnVOA/VLE-wireframe?node-id=0-1", text : "Figma Project" }],
        // images        
        mainImage: {src:"/img/Module page adjusted.png", alt: "VLE login page", aspect :"aspect-[19/10]"},
        secondaryImage: [],
        // for short description
        shortDescription: "SETU Y3, High fidelity Wireframes, work process for VLE UI design and UX Measurement",
        tools: "Figma, MS Forms and OBS(for user testing/recordings)",

        extension: [{extension : true , VLE : true}]// add rest of info

    },
    {
        id: "2",
        size: "w-2/3",
        // text and links
        title: "Retrograde Website",
        subTitle: "Commission 2024",
        description: ["Website I designed and developed for Retrograde an Indie Soul-pop band based in Dublin. I used penpot to make a basic wireframe and then with feedback I made changes where need while increasing the fidelity. I add a spotify preview along with link to their relevent socials and a place to book tickets for their upcoming gig."],
        button: [{link : "https://nathanheaton.github.io/Retrograde-website/", text : "Visit Site" }],
        // images
        mainImage: {src:"/img/Retrograde.png", alt: "retrograde website", aspect :"aspect-[1920/1200]"},
        secondaryImage: [{src:"/img/Retrograde-music.png", alt: "retrograde music preview website", width: 400, height : 300}],
        // for short description
        shortDescription: "Commission 2024, Website for a band in Dublin",
        tools: "Penpot(wireframing), HTML, CSS and JS",
        extension: [{extension : false,VLE : false}]

    },
    {
      id: "3",
      size: "w-1/3",
      // text and links
      title: "Intern Manager",
      subTitle: "SETU Y3",
      description: ["Intern managment App to find Interns from colleges, made in Flutterflow protoytpes in Figma. The app is connect to a firebase database to store user data."],
      button: [],
      // images
      mainImage: {src:"/img/Intern Manager.png", alt: "retrograde website", aspect :"aspect-[3/4]"},
      secondaryImage: [{src:"/img/Intern Manager Chat.png", alt: "Intern manager chat", width: 600, height : 400},
      {src:"/img/Intern Manager Prototypes.png", alt: "Intern manager chat", width: 600, height : 400},
      {src:"/img/Intern Manager Discover.png", alt: "Intern manager chat", width: 200, height : 400}
      ],
      // for short description
      shortDescription: "Commission 2024, Website for a band in Dublin",
      tools: "Penpot(wireframing), HTML, CSS and JS",
      extension: [{extension : false , VLE : false}]

  },
  {
    id: "9", // Assuming this is the next ID in your sequence
    size: "w-2/3", // Assuming it's a large card based on the class "card-content-large"
    // text and links
    title: "DNOreilly's Fuels Website",
    subTitle: "Commission",
    description: [
        "This is a website I made for D&N O'Reilly Solidfuels & Timber, a local company here in Carlow that sells solid fuels and gas.",
        "I made this website with the help of Shopify. I used presets and then added my HTML and CSS on top to get the right look. Most of my time was spent making layouts and choosing colour schemes."
    ],
    button: [{ link: "https://dnoreillysfuels.com/", text: "Check it out" }],
    // images
    mainImage: { src: "/img/dnoreillys-website.PNG", alt: "website for dnoreillysfuels LTD selling fuels", aspect: "aspect-[1920/1080]" }, // Adjust aspect ratio as needed
    secondaryImage: [],
    shortDescription: "Commission, D&N O'Reilly Solidfuels & Timber web design & development",
    tools: "Inkscape (wireframing), Shopify, CSS",
    extension: [{ extension: true, VLE: false }]
  },
  {
      id: "4",
      size: 'w-1/3',
      title: 'Portfolio Website',
      subTitle: 'SETU Carlow year 2-3',
      description: [
        'Portfolio Website showing off my work in and out of SETU.',
        'HTML: 1,999 loc',
        'CSS: 823 loc',
        'JavaScript: 362 loc',
          <br key={5} />,
          <br key={6} />,
        "To see my entire report of my process and the steps involved in my process please view download the below PDF and my early wireframes:"
      ],
      shortDescription: 'SETU Y2-Y3, Portfolio website showing of my work in and out of SETU',
      button: [{link : "https://nathanheaton.github.io/Web-User-Interface-Design/index.html", text : "Old home page" },
      {link : "/doccuments/mobile and desktop medium.pdf", text : "mobile and desktop medium.pdf" },
      {link : "/doccuments/mobile and desktop high fidelty .pdf", text : "mobile and desktop high fidelty .pdf" },
      {link : "/doccuments/Portfolio Design Doccument.pdf", text : "Portfolio Design Doccument.pdf" }
      ],
      mainImage: { src: "/img/porfolio-page-mobile.png", alt: "Portfolio mobile page", aspect: "aspect-[3/4]" },
      secondaryImage: [{ src: "/img/codeprojects-showcase.png", alt: "Showcase of my code projects", width: 600, height: 300 }],
      tools: 'HTML, CSS, JavaScript, Penpot, Inkscape, Adobe Photoshop',
      extension: [{extension : false , VLE : false}]
    },
    {
      id: "5",
      size: 'w-1/3',
      title: 'USAP Redesign Wireframe',
      subTitle: 'SETU Carlow',
      description: [
        'A medium fidelity redesign I designed for UI testing in 2nd year.',
        'I was tasked with redesigning a website with a bad or outdated design. USAP is a US website about Antarctica, it has loads of information and programs, but I found it very outdated compared to other US government websites.',
        'I tried to give it a modern refresh.',
      ],
      shortDescription: 'SETU Y2, Conduct user testing and redesign website',
      button: [{link : 'https://www.usap.gov/', text : "Vist Site" }],
      mainImage: { src: "/img/USAP redesign.PNG", alt: "USAP redesign wireframe", aspect: "aspect-[5/3]" },
      secondaryImage: [{ src: "/img/USAP wire1.png", alt: "USAP wireframe design", width: 600, height: 300 }],
      tools: 'Inkscape(wireframing)',
      extension: [{extension : false , VLE : false}]
    },
    {
      id: "6",
      size: 'w-2/3',
      title: 'Riverside Take Away Website',
      subTitle: 'SETU Carlow',
      description: [
        'A website for Riverside takeaway to showcase menu, contact info, and sell spice bags.',
        'I used WooCommerce and a theme found on WordPress, customising the header image and colour scheme to match Riverside’s branding. I also made changes to the theme’s code to better suit the project needs.',
        'I used generative AI for the content and set up the SQL database for the website through Plesk.',
      ],
      shortDescription: 'SETU Y3, Website for local Cantonese take away',
      button: [{link : 'https://idad3c00286899.candept.com/RS/', text : "Vist Site" }],
      mainImage: { src: "/img/Riverside Takeaway Website.png", alt: "Riverside Takeaway website design", aspect: "aspect-[5/3]" },
      secondaryImage: [{ src: "/img/Riverside basket.png", alt: "Riverside basket display", width: 600, height: 300 }],
      tools: 'WordPress, SQL, Adobe Photoshop',
      extension: [{extension : false , VLE : false}]
    },
    {
      id: "7",
      size: 'w-2/3',
      title: 'Escape from Time',
      subTitle: 'SETU Carlow',
      description: [
        'A puzzle action game about time travel. I used JavaScript extensively to build this game.',
        'The game involves solving puzzles using time portals to navigate through challenges. The game is mobile and desktop compatible, and it saves user data in local storage.',
        'I also used sound effects and music composed in FL Studio.',
      ],
      shortDescription: 'SETU Y2, Puzzle action game about time travel',
      button: [{link : 'https://ui-programming-23-24.codeberg.page/Nathan-Heaton-C00286899-UI-Programming-Module-Project/', text : "Vist Site" }],
      mainImage: { src: "/img/Escape from time gameplay.PNG", alt: "Escape from Time gameplay", aspect: "aspect-[5/3]" },
      secondaryImage: [{ src: "/img/Escape from time options.PNG", alt: "Escape from Time options menu", width: 600, height: 300 }],
      tools: 'HTML, CSS, JavaScript, Aseprite',
      extension: [{extension : false , VLE : false}]
    },
    {
      id: "8",
      size: 'w-1/3',
      title: 'Band Promotion Website',
      subTitle: 'SETU Carlow',
      description: [
        'Responsive website built for promoting a band. It features a form that saves user information to local storage.',
        'I tested more complex HTML, CSS, and JavaScript, using jQuery for smooth animations.',
      ],
      shortDescription: 'SETU Y2, HTML Practicals',
      button: [{link : 'https://c00286899.candept.com/Practicals/lab5/', text : "Vist Site" }],
      mainImage: { src: "/img/band-website.PNG", alt: "Band Promotion website design", aspect: "aspect-[5/3]" },
      secondaryImage: [{ src: "/img/band-website-carousel1.png", alt: "Band Promotion carousel", width: 600, height: 300 }],
      tools: 'HTML, CSS, JavaScript',
      extension: [{extension : false , VLE : false}]
    },
  
    
]

export default WebCards;
