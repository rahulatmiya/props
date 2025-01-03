import React from "react";
import Avatar from "./Avatar"
import Telephone from "./Telephone"
import Email from "./Email"

function Card(props) {
    return <div>
 
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imginfo={props.img}/>
        </div>
        <div className="bottom">
          <Telephone tel={props.tel}/>
          <Email email={props.email}/>
        </div>
      </div>
    </div>
}

export default Card;