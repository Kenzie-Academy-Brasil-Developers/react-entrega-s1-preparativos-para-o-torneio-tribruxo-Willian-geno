import "./renderCard.css"

function RenderCard (props) {

    return(
        <div className = "divPerson">
            <li className = "cardPerson">
                <img className = "imgPerson" src = {props.houseOne.image}/>
                <h3 className = "personName">{props.houseOne.name}</h3> 
                <h4>{props.houseOne.house}</h4>
                <h4>{props.houseOne.ancestry}</h4>
            </li>
            <li className = "cardPerson" >
                <img className = "imgPerson" src = {props.houseTwo.image}/>
                <h3 className = "personName" >{props.houseTwo.name}</h3> 
                <h4>{props.houseTwo.house}</h4>
                <h4>{props.houseTwo.ancestry}</h4>
            </li>
            <li className = "cardPerson" >
                <img className = "imgPerson" src ={props.houseTree.image}/>
                <h3 className = "personName" >{props.houseTree.name}</h3> 
                <h4>{props.houseTree.house}</h4>
                <h4>{props.houseTree.ancestry}</h4>
            </li>
        </div>
        )
}

export default RenderCard;