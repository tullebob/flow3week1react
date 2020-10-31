
import React, {useState, useEffect} from 'react';


function Count(props) {
    const [count, setCount] = useState(props.startVal);
  
    function incValue() {
      setCount(count + props.incVal);
    }
  
    function decVal() {
      setCount(count - props.incVal);
    }
  
    useEffect(
      () => {
        localStorage.setItem("count", count);
      }, [count]
    )
  
  
  
  
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(incValue)}>
          +
        </button>
        <button onClick={() => setCount(decVal)}>
          -
        </button>
  
      </div>
    );
  }

  export default Count;