import React from "react";
import "./style.css";

function FriendCard(props) {
  console.log(props.char.name)
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="SpongeBob"
          src={props.char.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.char.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.char.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.char.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
