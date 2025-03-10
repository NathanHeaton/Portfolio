import WebCards from "../UI/Cards/web_cards";


export default function Page(){
    return  (
      <section className="flex row flex-wrap gap-2 w-full max-w-400">
        <WebCards />
      </section>
    )
}