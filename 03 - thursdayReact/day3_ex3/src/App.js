import React, { useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import PersonList from "./PersonList";
import NewPerson from "./NewPerson";
import { v4 as uuidv4 } from 'uuid';

var uuid = require('uuid');


function App() {
  const initialData = [
    { id: uuidv4(), personTxt: "Daniel" },
    { id: uuidv4(), personTxt: "Jannich" },
    { id: uuidv4(), personTxt: "Emil" }
  ]
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", personTxt: "" });

  const addPerson = person => {
    if (person.id === "") {
      person.id = uuidv4();
      persons.push(person);
    }else{
      console.log("a")
    }
    setPersons([...persons]);
    setNewPerson({ id: "", personTxt: "" })
  }

  return (
    <div className="container outer">


      <div className="row">
        <div className="col-6 allPersons">
          <PersonList persons={persons} />
        </div>
        <div className="col-5 new-person">
          <NewPerson
           addPerson={addPerson}
           nextPerson={newPerson}
           />
        </div>
      </div>

    </div>
  );
}

export default App;
