import GenCards from "@/app/UI/Cards/cards";
import TradArtCards from "@/app/UI/Cards/trad_art_cards_data";

export default function TraditionalPage(){
    return(<GenCards Cards={TradArtCards} />)
}