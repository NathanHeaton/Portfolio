import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="">
					<h2>Nathan Heaton Portfolio</h2>
					<p>Welcome to My Portfolio Explore my collection of art and programming projects, showcasing my journey 
            and growth over the past few years. I’m currently a student at SETU Carlow, pursuing a degree in Interactive
             Digital Art and Design. My work spans both traditional and digital art, with a recent focus on 3D modeling 
             anddigital design. Alongside my artistic skills, I’m also experienced in coding, with proficiency in languages
              like C++, JavaScript, and HTML. From developing interactive websitesto creating efficient, user-friendly 
              interfaces, I love combining creativity with technical expertise to solve design and programming challenges.
               Dive in to see how I blend creativity, design, and coding to bring ideas to life.</p>
                        <button  id="center" ><a href="codeProjects.html" id="button-link">Code Projects</a></button>
                        <p>To gain insight into my process check out my VLE Design</p>
                        <button  id="center"><a id="button-link">VLE User Measurment Project</a></button>
                        <p>To seem of my commision work experinece check out D&N O'Reillys Fuels</p>
                        <button  id="center"><a  id="button-link">D&N O'Reillys Fuels</a></button>

        </section>



      </main>

    </div>
  );
}
