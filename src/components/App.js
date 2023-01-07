import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
const[state , setState] = useState(false);
  function handleClick(){
   setState (!state);
  }

  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {state ? "ON":"OFF"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {!state ? "ON":"OFF"}
      </button>
    </div>
  );
}


export default App;
