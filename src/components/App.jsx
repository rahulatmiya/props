import React from "react";
import Card from "./Card"
import contacts from "../contacts";
import Avatar from "./Avatar";


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://th.bing.com/th/id/OIP.6I5zX1BhSeNPDyrKpvibfAAAAA?w=124&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"/>
     <Card 
     name={contacts[0].name}
     img={contacts[0].imgURL}
     tel={contacts[0].phone}
     email={contacts[0].email}
     
     />
     <Card 
     name={contacts[1].name}
     img={contacts[1].imgURL}
     tel={contacts[1].phone}
     email={contacts[1].email}
     
     />
     <Card 
     name={contacts[2].name}
     img={contacts[2].imgURL}
     tel={contacts[2].phone}
     email={contacts[2].email}
     
     />
    </div>
  );
}

export default App;
