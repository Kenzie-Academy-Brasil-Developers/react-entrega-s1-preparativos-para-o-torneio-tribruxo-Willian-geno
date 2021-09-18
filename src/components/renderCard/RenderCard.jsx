import "./renderCard.css"

function RenderCard (props) {

    return(
        <div className = "divPerson">
            <li className = "cardPerson">
                <div><img className = "imgPerson" src = {props.houseOne.image}/></div>
                <div className = "personName">{props.houseOne.name}</div> 
                <div>{props.houseOne.house}</div>
                <div>{props.houseOne.ancestry}</div>
            </li>
            <li className = "cardPerson" >
                <div> <img className = "imgPerson" src = {props.houseTwo.image}/></div>
                <div className = "personName" >{props.houseTwo.name}</div> 
                <div>{props.houseTwo.house}</div>
                <div>{props.houseTwo.ancestry}</div>
            </li>
            <li className = "cardPerson" >
                <div> <img className = "imgPerson" src ={props.houseTree.image}/> </div>
                <div className = "personName" >{props.houseTree.name}</div> 
                <div>{props.houseTree.house}</div>
                <div>{props.houseTree.ancestry}</div>
            </li>
        </div>
        )
}

export default RenderCard;