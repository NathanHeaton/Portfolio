import type { Metadata } from "next";
import { Alegreya, Tilt_Warp} from "next/font/google";
import NavLink from "@/app/UI/nav_links"
import Link from "next/link";
import MouseEffect from "./components/mouseEffect";
import { AnimatePresence, motion } from "framer-motion";

import "./globals.css";
import FooterLink from "./UI/footer_links";
import Image from "next/image";
import MobileNav from "./UI/mobile_top_nav";

const alegreyaSerif = Alegreya({
  variable: "--font-alegreya-serif",
  subsets: ["latin"],
});

const tiltWarp = Tilt_Warp({
  variable: "--font-tilt_warp-sans-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: {
    template: "Nathan Heaton | %s",
    default: "Nathan Heaton | Portfolio",
  },
  description: "Portfolio of Nathan Heaton, an Interactive Digital Art & Design student at SETU Carlow. Showcasing UX/UI design, web development, and digital art projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <meta name="description" content="Portfolio of Nathan Heaton, an Interactive Digital Art & Design student at SETU Carlow. Showcasing UX/UI design, web development, and digital art projects."></meta>
        <meta name="keywords" content="Nathan Heaton, UX design, UI design, web development, digital art, interactive design, SETU Carlow, usability testing, front-end development"></meta>
        <meta name="author" content="Nathan Heaton"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:description" content="Explore my UX/UI projects, web development work, and digital art portfolio."></meta>
        <meta property="og:image" content="https://nathanheaton.github.io/Web-User-Interface-Design/assets/img/codeprojects-showcase.png"></meta>
        <meta property="og:url" content="https://nathanheaton.github.io/Web-User-Interface-Design/index.html"></meta>

        <link rel="icon" href="/public/icons/logo.png" type="image/x-icon"/>
      <body className={`${alegreyaSerif.variable} ${tiltWarp.variable} antialiased`}>
        <MouseEffect />
        <header className="flex justify-between align-center h-25 w-full bg-energygreen " >
          <section className="flex align-center row-auto 2xl:ml-50 ml-10">
            <div className="m-2 mt-7.5 z-1 sm:block hidden scale-80 2xl:scale-100">
              <Image src="/icons/logo.png" alt="N logo" width={113 * .9} height={118 *.9} ></Image>    
            </div>    
            <h1 className="text-xl 2xl:text-[48px] my-3"> Nathan H</h1> 
           </section>    
           <nav className="xl:hidden">
            <MobileNav />
            </nav>
            <nav className="justify-end my-5 mr-10 xl:flex hidden 2xl:mr-20">
              <NavLink />
            </nav>
   
        </header>
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          > */}
        {children}
        {/* </motion.div>
        </AnimatePresence> */}
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-20 bg-darkgrey">
        <section>
                <div className="md:flex row-auto p-10">
                  <FooterLink />
                </div>
                <div className="flex row gap-5 px-10">
                    <Link href={"https://www.linkedin.com/in/nathan-heaton-478541300/"} target="_blank">
                      <Image src="/icons/5296501_linkedin_network_linkedin logo_icon.png" alt="LinkedIn link" width={60} height={60} />
                    </Link>
                    <Link href={"https://github.com/NathanHeaton"} target="_blank">
                        <Image src="/icons/8725846_github_alt_icon.svg" alt="github link" width={60} height={60} />
                    </Link>
                </div>
                <div className="flex row-auto gap-5 my-10 justify-center align-middle">
                <Image src="/icons/logo.png" alt="N logo" width={113 * .8} height={118 *.8} />    
                    <p className="align-middle">Made by Nathan Heaton 2024</p>
                </div>
            </section>
        </footer>
      </body>
    </html>
  );
}
