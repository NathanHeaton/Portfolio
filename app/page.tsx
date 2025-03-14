import Image from "next/image";
import ToolsShowcase from "./components/toolsShowcase";
import ProjectGrid from "./UI/project_grid";
import { motion } from "framer-motion";
import SquareButtons from "./UI/square_buttons";
import RoundButtonPri from "./UI/round_buttonPri";
import RoundButtonSec from "./UI/round_buttonSec";
//import RoundButton from "./UI/round_button";

export default function Home() {
  return (
    <div className="flex flex-col flex-wrap items-center justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20 ">

      <main className="flex flex-col gap-8 row-start-2 items-center max-w-[1800] sm:items-start">
        <section className="flex w-full flex-wrap">
          <article className="xl:w-1/3 w-full 2xl:pr-30 flex-row xl:flex-col">
            <h1 className="my-5 md:w-1/2">Nathan Heaton <br /> Portfolio</h1>
            <div className="mb-15 md:w-1/2">
            <p className="hover:rotate-90 !text-[1.5rem] transition-all duration-300 absolute origin-center">👋</p> 
            <p className="!text-[1.5rem] mb-5">.... Welcome to My Portfolio, here are my main skills:</p>
              <SquareButtons />
            </div>
            <RoundButtonSec href="#about-me" text="About me"/>
          </article>
          <ProjectGrid />
        </section>
        <ToolsShowcase />
        <section id="about"className="md:w-1/2 w-full max-w-1200">
          <h1 id="about-me" >About me</h1>
          <p className="hover:rotate-90 transition-all duration-300 absolute origin-center !text-[1.5rem]">👋</p> 
          <p className="!text-[1.5rem]">.... Welcome to My Portfolio Explore my collection of art and programming projects, showcasing my journey and growth over the past few years.<br /><br />
          I’m currently a student at SETU Carlow, pursuing a degree in Interactive Digital Art and Design. My work spans both traditional and digital art, with a recent focus on 3D modeling and digital design. Alongside my artistic skills, I’m also experienced in coding, with proficiency in languages like C++, JavaScript, and HTML. From developing interactive websites to creating efficient, user-friendly interfaces, I love combining creativity with technical expertise to solve design and programming challenges.
          <br /><br />
          Dive in to see how I blend creativity, design, and coding to bring ideas to life.</p>
        </section>

      



      </main>

    </div>
  );
}
