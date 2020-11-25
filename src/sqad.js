import React from 'react';
import './sqad.css'

const chessObj = {
    a1: 'whelephaunt', b1: 'whhourse', c1: 'whrook', d1: 'whqueen', e1: 'whking',
    f1:'whrook', h1:'whhourse', g1:'whelephaunt', a2:'whpawn', b2:'whpawn', c2:'whpawn',
    d2:'whpawn', e2:'whpawn', f2:'whpawn', h2:'whpawn', g2:'whpawn',

    a8: 'blelephaunt', b8: 'blhourse', c8: 'blrook', d8: 'blqueen', e8: 'blking',
    f8:'blrook', h8:'blhourse', g8:'blelephaunt', a7:'blpawn', b7:'blpawn', c7:'blpawn',
    d7:'blpawn', e7:'blpawn', f7:'blpawn', h7:'blpawn', g7:'blpawn',
}

const Sqad = ({ color, title}) =>{
    
    if(chessObj[title]  ){       
        return (
            <div id={title} className={ [color, 'sqad-cont', 'el', chessObj[title] ].join(' ')}>
                                          
            </div>
        )
    } else {
        return (
            <div id={title} className={[color, 'sqad-cont'].join(' ')}>
                
                                     
            </div>
        )
    }

};

export default Sqad;

/* <img src={whrook || blhourse} alt="sqad" width="80" height="80"></img>                          */