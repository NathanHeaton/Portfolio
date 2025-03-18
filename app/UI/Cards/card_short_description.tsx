

type types ={
    description : string;
    tools : string;
}   

export default function ShortDescription({description , tools} : types)
{
    return(
    <section className="bg-darkgrey flex rounded-b-xl">
        <p className="p-4 text-wrap text-offWhite"><strong>Description</strong>: {description} <br />
            <strong>Tools</strong>: {tools}<br />
            <i>Click/Tap image to find out more!</i></p>
    </section>
    );

}