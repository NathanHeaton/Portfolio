import CodeNav from "../UI/code_nav";
import "../globals.css";
import ActionLine from "../components/actionLine";
import RoundButtonPri from "../UI/round_buttonPri";
import RoundButtonSec from "../UI/round_buttonSec";

export default function CodeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        
<div className="flex flex-col flex-wrap items-center justify-items-center min-h-screen md:p-8 pb-20 gap-5 ">

    <ActionLine />

    <section id="top"className="flex justify-center flex-wrap py-25 w-full md:max-w-200 md:w-3/5 px-8 md:px-0">
        <h1 className="text-l py-5">Programming and UX/UI portfolio</h1>
        <p>Here is all of my programming and design work, showcasing my technical skills and focus on user
             experience. I developed games using C++ and SFML in my first year of IDAD and another game in
              JavaScript during my second year. I’ve also worked on websites both inside and outside SETU,
               using HTML, CSS, and JavaScript. Throughout these projects, I combined coding with UX
             research and UI design to create user-friendly, accessible interfaces that enhance usability.</p>
    </section>

    <nav className="bg-darkgrey p-3 max-w-600 w-full flex flex-wrap">
        <CodeNav></CodeNav>
    </nav>

    <main className="w-full flex max-w-400">
    <section className="w-full flex flex-row flex-wrap">
        {/* <CardTranstion children={children} /> */}
        {children}
    </section>


    </main>
    <section className="flex justify-center flex-wrap py-25 w-full md:max-w-200 md:w-3/5 px-8 md:px-0">
        <h1 className="text-l py-5">Open to New Opportunities</h1>
        <p>Feel free to reach out if you'd like to learn more about my work or discuss potential collaborations. I'm always open to new opportunities and connections!</p>
        <RoundButtonPri text="Back to top!" href="#top" newPage={false}/>
        <RoundButtonSec text="Contact Me" href="/contact" />
    </section>


</div>

    );
}