
import ArtNav from "../UI/art_nav";
import ActionLine from "../components/actionLine";
import RoundButtonPri from "../UI/round_buttonPri";
import RoundButtonSec from "../UI/round_buttonSec";

export default function ArtLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
<div className="flex flex-col flex-wrap items-center justify-items-center min-h-screen md:p-8 pb-20 gap-5 sm:p-20 ">


<section id="top" className="flex justify-center flex-wrap py-25 w-full md:max-w-200 md:w-3/5 px-8 md:px-0">
    <ActionLine />
    <h1 className="text-l py-5">Art Portfolio</h1>
    <p>This page showcases a variety of my artistic works, ranging from digital to traditional mediums. You'll find digital pieces created with software like Photoshop, 
                Krita, Aseprite, and Spine, alongside traditional artworks made using watercolor, acrylics, and slab pottery. I’ve also
                 included sketches, 3D art, and other forms of creative expression, reflecting my exploration of different techniques and styles.</p>
</section>
<nav className="bg-darkgrey p-3 max-w-600 w-full flex flex-wrap">
    <ArtNav></ArtNav>
</nav>

<main className="w-full flex justify-center max-w-400">
<section className="w-full flex flex-row flex-wrap">
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