import { useState } from "react";
import RenderCard from "../renderCard/RenderCard";

function Card (props) {
    const [hauseGryffindor, setHauseGryffindor] = useState([]);
    const [hauseSlytherin, setHauseSlytherin] = useState([]);
    const [hauseHufflepuffandRavenclaw, setHauseHufflepuffandRavenclaw] = useState([]);

    const [cardThreeWitches, setCardThreeWitches] = useState([]);
  
    const filterPersons = () => {
        console.log(props.listPerson)
        setHauseGryffindor(props.listPerson.filter(item => item.house ==="Gryffindor"))
    
        setHauseSlytherin(props.listPerson.filter(item => item.house === "Slytherin"))
        
        setHauseHufflepuffandRavenclaw(props.listPerson.filter(item => item.house === "Hufflepuff" || item.house === "Ravenclaw"))
        
    }

    console.log(hauseGryffindor,hauseSlytherin,hauseHufflepuffandRavenclaw);
    console.log(cardThreeWitches);

    return(
        <div className = "conteiner">
            <ul>
                {hauseGryffindor[Math.round(Math.random()*4)] && <RenderCard 
                houseOne = {hauseGryffindor[Math.round(Math.random()*4)]}
                houseTwo = {hauseSlytherin[Math.round(Math.random()*2)]}
                houseTree = {hauseHufflepuffandRavenclaw[Math.round(Math.random()*2)]}
                />}
            </ul>
            <button onClick = {filterPersons} >aqui</button>
        </div>
    )
}

export default Card;