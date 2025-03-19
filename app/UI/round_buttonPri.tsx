
type types = {
    href : string;
    text : string;
    newPage : boolean;
}

export default function RoundButtonPri({href, text, newPage } : types)
{
    return(
        <a
        href={href}
        className="px-9 py-3 my-5 rounded-xl flex w-fit bg-darkgreen hover:bg-energygreen hover:text-highlightblue hover:px-12 transition-all duration-1000"
        target={newPage ? "_blank" : undefined}>
            {text}
        </a>
    );

}