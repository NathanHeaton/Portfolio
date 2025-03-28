import Carousel from "../carousel"
import Image from "next/image"
import RoundButtonPri from "../round_buttonPri";

const DNCarousel = [
    {src : "/img/perry gaurentees.png",alt : "list of gaurentees", width : 400, height : 300},
    {src : "/img/PerrysFuels.png",alt : "people that are part of the business", width : 400, height : 300},
    {src : "/img/kennys fuel page.png",alt : "ennys fuel page", width : 400, height : 300},

]

const VLECarousel = [
    {src : "/img/persona1.png",alt : "teacher persona", width : 400, height : 300},
    {src : "/img/persona2.png",alt : "teacher persona", width : 400, height : 300},
    {src : "/img/persona3.png",alt : "teacher persona", width : 400, height : 300},
    {src : "/img/persona4.png",alt : "teacher persona", width : 400, height : 300},
    {src : "/img/persona5.png",alt : "teacher persona", width : 400, height : 300},
    {src : "/img/persona6.png",alt : "teacher persona", width : 400, height : 300}


]

type types = {
    extension : boolean;
    VLE : boolean;

}


export default function ExtendedDescription({extension, VLE} : types)
{
    if (extension)
    {
        if (VLE)
        {        
        return(
            <section className="flex flex-col w-full">
                <div className="bg-darkgreen p-5 flex justify-center my-5"><h1>Introduction</h1></div>
                <article   className="max-w-175 flex justify-center mx-5 mb-5 md:mx-auto" >
                    <p>The VLE user interface I designed is intended for college/university-level education, for both lecturers
                            and students. It is a place for lecturers to make assignment, upload notes and give feedback. My goal while designing was to
                            streamline these aspects of the interface make it intuitive and quickly navigable for any lecturer. For students it is a place 
                            to get assignment information, see important dates, find lecture notes, find useful course specific tools and get feedback/grading on their work.  
                        <br /><br />
                        To achieve a great design, it was first important to research existing VLE and their users. I decided to base my research on Blackboard
                            the VLE that we use in SETU Carlow. </p>
                </article>
                <div className="bg-darkgreen p-5 flex justify-center my-5"><h1>Research</h1></div>
                <article   className="max-w-175 flex justify-center mx-5 mb-5 md:mx-auto" >
                    <p>I first carried out surveys on the existing VLE (blackboard) that students and teachers are using. Focused on asking users about the existing tools 
                        and features, and also about any features they would like to see. I did this so I could greatly simplify the user experience, cutting unnecessary or underused 
                        tools/features.
                        <br /><br />
                        I gave teachers unique questions that apply more towards their experience of uploading, 
                        editing and tracking assignments, and giving feedback to students. This was done so I can find the weakness and strengths in the steps to making and marking
                            an assignment. The most useful data to me was the text response where users can go into detail, and I can learn about the specific things they like and dislike. </p>
                </article>
                <div className="bg-darkgreen p-5 flex justify-center my-5"><h1>Journey Maps and Personas</h1></div>
                <article   className="max-w-175 flex justify-center mx-5 mb-5 md:mx-auto" >
                    <p>To get a better understanding of the user base and of their needs I made user personas for different types of teachers and also create a journey map outlining some 
                        tasks that a user might need to complete.</p>
                </article>
                    <Carousel images={VLECarousel} />
                <article   className="max-w-175 flex justify-center mx-5 mb-5 md:mx-auto" >
                    <p>Students need an intuitive interface; they need to see announcements and upcoming due dates. A place to see their previous submissions 
                        and their overall grades. A place to find information about their modules and course work. <br /><br />
                        Teachers want to easily mark student work and give feedback, they need to quickly upload and download work, 
                        must be able to make announcements and notify students when assignments change and when new work is uploaded. The site must be easy to use even by less technical teachers. </p>
                </article>

                <div className=" w-full h-full relative mb-5 aspect-1600/628">
                    <Image src="/img/Journey map VLE.png"
                     alt="journey map"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                      fill
                       className="object-fit: cover; w-full h-fit" />
                </div>
                <article   className="max-w-175 flex justify-center mx-5 mb-5 md:mx-auto" >
                    <p>Dr. Liam Singh wants to make sure students are seeing their work and getting the feedback they need and that his assignments are thought provoking
                    </p>
                </article>
                <div className="bg-darkgreen p-5 flex justify-center my-5"><h1>Full Process</h1></div>
                <article   className="max-w-175 flex justify-center mx-5 mb-5 md:mx-auto" >
                    <p>To see if a full report on this project you can view this pdf, where I go over my wireframing process, desision infered from survey data, user testing, data
                        visulisation and revisions</p>
                    <br /><br />
                </article>
                <article   className="max-w-175 flex justify-center mx-5 mb-5 md:mx-auto" >
                <RoundButtonPri href="/documment/VLE Design Report.pdf" text="VLE Design Report.pdf" newPage={true} />
                </article>
            </section>

        );}
        else
            {
            return(
                <section className="hidden flex-col w-full">
                        <div className="bg-darkgreen p-5 flex justify-center my-5"><h1>Research & Planing</h1></div>
                        <article   className="max-w-175 flex justify-center mx-5 mb-5 md:mx-auto" >
                            
                            <p>The project began with extensive market research, focusing on fuel websites in Ireland. Initially, I examined major brands like 
                                Top Oil to gather insights. After presenting my findings to my employer, I inquired whether he wanted a similar website style.
                                 While he appreciated certain aspects,
                                 he expressed a desire to avoid a corporate, soulless look. This feedback 
                                 prompted me to pivot my research towards smaller, local family businesses, such as Kenny’s Fuels and perrys fuels.
                                 <br /><br />
                                Through this exploration, I identified elements that instill trust and convey care in a family-run business. I discovered the 
                                importance of showcasing the people behind the business and using language that resonates with the local community. After compiling
                                 new images and text that captured this essence, my employer was excited, and we began brainstorming ideas for displaying employees
                                  and determining the necessary visuals.</p>
                        </article>
                            <Carousel images={DNCarousel}/>
                          <div className="bg-darkgreen p-5 flex justify-normal my-5"><h1>Design Phase</h1></div>
                          <section className="flex " >
                                <article className="w-full md:w-1/2">
                                    <p className="max-w-175 px-7">
                                        The initial phase of the project revealed that DNoreilly Fuels lacked a logo,
                                        so I prioritized its creation. Developing a cohesive
                                        design and color scheme would establish a foundation for the rest of the website. Crafting a 
                                        logo that embodied the brand’s personality was challenging, especially as I was not highly experienced
                                        in logo design. Nevertheless, I pushed forward with my concepts and began wireframing to determine the best layout.
                                        <br /><br />
                                        Selecting the color scheme was also difficult. Initially, my employer favored red and blue,
                                        similar to Kenny’s Fuels and the trucks he owned. While the red was certainly eye-catching,
                                        it felt too serious and did not align with the desired brand image. We needed a more 
                                        friendly and approachable palette. During this process, my employer noticed a sweet wrapper
                                        with a green and yellow color scheme. Though I was initially skeptical, it ultimately
                                            proved to be a perfect fit, lending the website a welcoming aesthetic.
                                            <br /><br />
                                        In terms of typography, I experimented with various typeface combinations to achieve a modern
                                        and friendly look. 
                                        <br /><br />
                                        Further into development my employer decide to get a logo done by a professonal  logo designer, this helped me really center the design and look of the whole brand.
                                    </p>
                                </article>
                                <div className=" w-full md:w-1/2 h-full relative mb-5 aspect-1600/628"> 
                                    <Image src="/img/DN-logo-Designs.png" alt="fuel page"  fill />
                                </div>
                            </section>
                            <div className="bg-darkgreen p-5 flex justify-normal my-5"><h1>Development</h1></div>
                            <section className="flex mb-20 flex-col md:flex-row" >
                                <article className="w-full md:w-1/2 ">
                                    <p className="max-w-175 px-7">After thorough consideration, research, and discussions with my lecturer, I concluded that it would be best to utilise a tool
                                        for handling the e-commerce section of the website. Given my tight timeline and at the time limited web development experience,
                                        ensuring secure payment processing was paramount.
                                        <br /><br />
                                        I chose Shopify for its integrated e-commerce system. I began with a template that closely matched my wireframes, making necessary adjustments along the way.
                                        <br /><br />
                                        Throughout the development process, we held weekly meetings to review my progress and gather feedback. I actively sought additional
                                        information and specifics, such as the text my employer wanted for each section.
                                        <br /><br />
                                        After numerous iterations and continuous building, we launched the site, purchased the domain, and orders started to pour in.</p>

                                </article>
                                <div  className=" w-1/2 h-full relative mb-5 aspect-1600/628">
                                    <Image src="/img/Dnoreillys-fulspage.png" alt="fuel page"  fill />
                                </div>
                            </section>
                            <div className="bg-darkgreen p-5 flex justify-center my-5"><h1>Reflection</h1></div>
                            <article   className="max-w-175 flex justify-center mx-5 mb-5 md:mx-auto" >
                        
                              <p>This project was a significant opportunity that allowed me to design and develop a commercial product, providing me with invaluable insights into the business landscape 
                                and enhancing my design skills. Engaging with my employer and collaborating on the vision for DNoreilly Fuels highlighted the importance of understanding client needs and user perspectives.
                                <br /><br />
                                I learned the value of conducting thorough market research and how it informs design decisions. By exploring both large brands and local family businesses,
                                 I discovered the nuances of building trust and community connection through design. This experience reinforced my belief in the power of empathy in design
                                  and the necessity of crafting user-centered experiences.
                                  <br /><br />
                                Throughout the project, I encountered challenges that required creative problem-solving, particularly in logo design and color selection. These experiences
                                 taught me the importance of being open to feedback and iterating on ideas. I also recognized the need for flexibility, as collaborating with professionals
                                  like logo designers can greatly enhance the quality of the final product.
                                  <br /><br />
                                If I were to undertake this project again, I would focus on integrating more advanced design tools and techniques earlier in the process. Exploring AI-assisted
                                 design methods could streamline workflows and inspire innovative solutions. Overall, this project has been instrumental in shaping my approach to design, 
                                 emphasizing continuous learning, collaboration, and the significance of crafting meaningful user experiences.</p>
                          </article>

                    </section>
            )
        
            }
    }
    else{
        return("")//if the card doesn't have an extension
    }

}