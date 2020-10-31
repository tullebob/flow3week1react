import './App.css';
import upper, {text1, text2, text3} from "./file1";
import Person, {males, females} from "./file2";
import {Welcome, MultiWelcome, welcomePerson} from "./file3";


const person = Person;
const {firstName, email} = person;
const joinNames = [...males, ...females];
const joinNames2 = [...males, "Kurt", "Helle", ...females, "Tina"];
function App() {
  console.log(joinNames);
  console.log(joinNames2)
  return (
    <div className="App">
      <h2>Ex 1</h2>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>

      <div>
        <h2>Ex 2</h2>
        <p>First name: {firstName}, email: {email}</p>
      </div>

      <div>
        <h2>Ex 3</h2>
        <MultiWelcome/>

      </div>
    </div>
    
  );
}

export default App;
