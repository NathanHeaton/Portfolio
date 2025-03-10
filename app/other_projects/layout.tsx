import MiscNav from "../UI/misc_nav";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">


<section className="flex justify-center flex-wrap my-50 w-full md:max-w-200 md:w-3/5">
    <h1 className="text-l py-5">Check out my other work</h1>
    <p>This section highlights some of my work outside of art and coding. I’ve composed and produced several songs using FL Studio,
         which are available on SoundCloud. Additionally, I’ve participated in Capture the Flag (CTF)
         competitions, with plans to attend more in the future as I continue expanding my skills in cybersecurity and problem-solving.</p>
</section>
<nav className="bg-darkgrey p-3 max-w-400 w-full flex flex-wrap">
    <MiscNav></MiscNav>
</nav>

<main className="w-full max-w-400px md:w-5/6">
    {children}
</main>

</div>
    );
}