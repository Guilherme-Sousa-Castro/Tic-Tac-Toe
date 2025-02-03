import { useState } from "react";

export default function Player({ initialName, symbol }) {
  //usaremos state pois queremos alterar as informaçoes dadas e queremos que fiquem guardadas
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    /*Alterar entre os diferentes estados, false e true */
    /* ?false : true
     * !isEditing
     * ao alterar um estado tendo em conta o estado anterior deve-se usar uma funçao e nao uma variavel com gatafunhos
     */
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let buttonCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );
    //buttonCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {/*buttonCaption*/ isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
