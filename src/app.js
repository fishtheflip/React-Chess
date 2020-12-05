import React, {useState} from 'react';

import './app.css';
import NumComp from './num';


function App() {
  const [arState, setArrStare] = useState([8,7,6,5,4,3,2,1]);
  const [idState, setIdState] = useState(null);
  const [pawnState, setPawnState] = useState([null, null]);

  const findPawnField = (e) =>{
    if(e.target.getAttribute('name') === 'whpawn'){
      console.log(e.target.getAttribute('id'));
      let pawnField = e.target.getAttribute('id');
      let lit = pawnField.split('');
      let litFirst = [ lit[0] , +lit[1] + 1].join('');
      let litSec = [ lit[0] , +lit[1] + 2].join('');
      
      let obj1 = document.querySelector(`div[circleid="${litFirst}"]`);
      let obj2 = document.querySelector(`div[circleid="${litSec}"]`);
      setPawnState([litFirst, litSec]);
      console.log(pawnState);
      
      obj1.removeAttribute('hidden');
      obj2.removeAttribute('hidden');           
    }
  }
  const findFig = (e) =>{

    let payload = e.target.getAttribute('name');
    console.log(payload);
    if(payload){
      e.target.classList.add('change');
      
      if(idState === null){

        setIdState(e.target.getAttribute('id'));
        findPawnField(e);
        
      } else{

        document.querySelector(`div[id="${idState}"]`).classList.remove('change');
        setIdState(e.target.getAttribute('id'));
        findPawnField(e);
      }
      
      

    }
  };
  return (
    <div className="app">
      <div className="appField">
        {arState.map((item, i)=>{
          return <NumComp key={item} arrNum={arState} loop={i} onFind={findFig}/>
        })}
      </div>

    </div>
  );
}

export default App;
