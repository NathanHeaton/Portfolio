
type types = {
    href : string;
    text : string;
}

export default function RoundButtonSec({href, text} : types)
{
    return(
        <a
        href={href}
        className="px-9 py-3 my-5 rounded-xl flex w-fit bg-energygreen hover:bg-offWhite hover:text-highlightblue hover:px-12 transition-all duration-1000"
   >
            {text}
        </a>
    );

}