import GenCards from "@/app/UI/Cards/cards";
import GameCards from "@/app/UI/Cards/Data/game_cards_data";

export default function page(){

    return (

        <GenCards Cards={GameCards} />
    );
}