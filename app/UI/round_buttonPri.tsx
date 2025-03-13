
export default function RoundButtonPri({href, text})
{
    return(
        <a
        href={href}
        className="px-9 py-3 my-5 rounded-2xl flex w-fit bg-darkgreen hover:bg-energygreen hover:text-highlightblue hover:px-12 transition-all duration-1000"
        target="_blank">
            {text}
        </a>
    );

}