import React from "react";

import './App.css';

function App() {

 
  return (
    <div className="App">
      <button onClick={()=>console.log(process.env.REACT_APP_SECRET_KEY)}>Click</button>
    </div>
  );
}

export default App;
