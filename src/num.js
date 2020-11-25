import React , {useState} from 'react';
import './num.css';
import Sqad from './sqad';

const NumComp = ({arrNum, loop}) =>{
    const [charState, setArrState] = useState(['a','b','c','d','e','f','g','h']);
    const [arState, setCharState] = useState([8,7,6,5,4,3,2,1]);
    
    let typeStyle = true;
    if(loop % 2 !== 0){
        typeStyle = false;
    }
    return(
        <div className="horizontalMain">
            { 
                arrNum.map((item, i)=>{
                let name = charState[i]  + (arState[0 + loop] );
                if(typeStyle) {
                    typeStyle = !typeStyle;
                    return <Sqad key={name} title={name} color={'horizontalOne'}/>
                } else {
                    typeStyle = !typeStyle;
                    return <Sqad key={name} title={name} color={'horizontalTwo'}/>
                }
            })
            
            }
        </div>
    )
};
export default NumComp;


