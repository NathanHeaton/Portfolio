import type { Metadata } from "next";
import { Alegreya, Tilt_Warp} from "next/font/google";
import NavLink from "@/app/UI/nav_links"

import "./globals.css";
import FooterLink from "./UI/footer_links";
import Image from "next/image";

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
        <header className="flex align-center h-25 w-full bg-energygreen " >
            <section id="nav-content">
                <button id="hamburger" ></button>
                <h1 className="text-[48px] my-2"> Nathan H</h1> 
                <div className="m-2 sm:block hidden">
                <Image src="/icons/logo.png" alt="N logo" width={113 *.5} height={118*.5} ></Image>    
                </div>        
                <nav className="justify-end my-5 md:flex hidden">
                  <NavLink />
                </nav>
            </section>
        </header>
        {children}

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-darkgrey">
        <section >
                <div >
                  <FooterLink />

                </div>
                <div >
                    <div id="social" >
                        <a href="/public/icons/Linkin_icon.svg" target="_blank">
                            
                        </a>
                    </div>

                    <div id="social" >
                        <a href="/public/icons/8725846_github_alt_icon.svg" target="_blank">
                            
                        </a>
                    </div>
                </div>
                <div >
                  
                    <p>Made by Nathan Heaton 2024</p>
                </div>
            </section>
        </footer>
      </body>
    </html>
  );
}
