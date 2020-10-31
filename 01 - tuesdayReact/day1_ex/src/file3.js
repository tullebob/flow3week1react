import {persons} from "./file2";




export function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />
      <WelcomePerson person={persons[0]} />
      {persons.map((person)=><WelcomePerson person={person}/>)}


    </div>
  );
}



export function WelcomePerson(props) {
  return (
    <div>
      <p>{props.person.firstName}</p>
      <p>{props.person.lastName}</p>
      <p>{props.person.email}</p>
    </div>

  );
}



