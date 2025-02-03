import { useState } from "react";

export default function Player( {name, symbol}){
    //usaremos state pois queremos alterar as informaçoes dadas e queremos que fiquem guardadas
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditClick(selectedButton){
        setIsEditing(true);
    }
    let playerName = <span className="player-name">{name}</span>;
    
    if(isEditing){
        playerName =
           <input type = "text" required></input>
    }

    return (
        <li>
            <span className = "player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick = {handleEditClick}>Edit</button>
          </li>
    );
}