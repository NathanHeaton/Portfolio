import Link from "next/link";

const listButtons = [{text : "- UX & UI design", href : "/code_projects", key : 1},
                    {text : "- Web development", href : "/code_projects", key : 2},
                    {text : "- Game development", href : "/code_projects/games", key : 3},
                    {text : "- Digital & Traditional art", href : "/art_projects", key : 4},
                    {text : "- Music Composition", href : "/other_projects", key : 5},

]



export default function SquareButtons()
{

    return(
      <div className=" hidden md:block !text-[1.5rem] font-alegreya">
      {listButtons.map((link) => (
        
        <Link 
        key={link.key}
        href={link.href}
        className=" py-1 w-fit flex hover:px-10 hover:from-energygreen bg-linear-to-r  to-[#00000000] ease-in-out transition-all duration-600">
        {link.text}
        </Link>
      


      ))}
      </div>

    );

}