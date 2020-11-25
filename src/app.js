import React, {useState} from 'react';

import './app.css';
import NumComp from './num';


function App() {
  const [arState, setArrStare] = useState([8,7,6,5,4,3,2,1]);
  
  return (
    <div className="app">
      <div className="appField">
        {arState.map((item, i)=>{
          return <NumComp key={item} arrNum={arState} loop={i} />
        })}
        

      </div>

    </div>
  );
}

export default App;
