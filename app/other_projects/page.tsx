import MusicCards from "../UI/Cards/Data/music_cards_data";
import GenCards from "../UI/Cards/cards";

export default function Page(){    
    return     (
      <GenCards Cards={MusicCards}/>
    )
}