import GenCards from "@/app/UI/Cards/cards";

import OtherCards from "@/app/UI/Cards/Data/other_code_cards_data";

export default function page(){

    return (
        <GenCards Cards={OtherCards}/>
    );
}