import { useState } from "react";

export default function Player({ name, symbol }) {
  //usaremos state pois queremos alterar as informaçoes dadas e queremos que fiquem guardadas
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(selectedButton) {
    setIsEditing(!isEditing );
    /*Alterar entre os diferentes estados, false e true */
    /* ?false : true*/
  }
  let playerName = <span className="player-name">{name}</span>;
  let buttonCaption = 'Edit';

  if (isEditing) {
    playerName = <input type="text" required value = {name}></input>;
    buttonCaption = 'Save';
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span> 
      </span>
      <button onClick={handleEditClick}>{buttonCaption  /*isEditing ? 'Save : 'Edit' */}</button>
    </li>
  );
}
