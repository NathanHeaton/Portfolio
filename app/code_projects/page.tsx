
import GenCards from "../UI/Cards/cards";
import WebCards from "../UI/Cards/Data/web_cards_data";

export default function Page(){
    return  (
        <GenCards Cards={WebCards} />
    )
}