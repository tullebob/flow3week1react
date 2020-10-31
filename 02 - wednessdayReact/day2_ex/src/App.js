
import Count from './Count';
import {FetchJoke} from './FetchJoke';
import {Members} from './ListDemo';
import './App.css';




function App() {

  let startVal = 0;
  const incVal = 2;

  if (localStorage.getItem("count") != null) {
    startVal = Number(localStorage.getItem("count"));
  }


  return (
    <div className="App">
      <Count startVal={startVal} incVal={incVal} />
      <FetchJoke />
      <Members />
    </div>
  );
}

export default App;
