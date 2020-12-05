import React from 'react';
import './sqad.css'

const chessObj = {
    a1: 'whelephaunt', b1: 'whhourse', c1: 'whrook', d1: 'whqueen', e1: 'whking',
    f1:'whrook', h1:'whhourse', g1:'whelephaunt', a2:'whpawn', b2:'whpawn', c2:'whpawn',
    d2:'whpawn', e2:'whpawn', f2:'whpawn', h2:'whpawn', g2:'whpawn',

    a3: null, b3: null, c3: null, d3: null, e3: null,
    f3:null, h3:null, g3:null, a4:null, b4:null, c4:null,
    d4:null, e4:null, f4:null, h4:null, g4:null,

    a5: null, b5: null, c5: null, d5: null, e5: null,
    f5:null, h5:null, g5:null, a6:null, b6:null, c6:null,
    d6:null, e6:null, f6:null, h6:null, g6:null,

    a8: 'blelephaunt', b8: 'blhourse', c8: 'blrook', d8: 'blqueen', e8: 'blking',
    f8:'blrook', h8:'blhourse', g8:'blelephaunt', a7:'blpawn', b7:'blpawn', c7:'blpawn',
    d7:'blpawn', e7:'blpawn', f7:'blpawn', h7:'blpawn', g7:'blpawn',
}

const Sqad = ({ color, title, onFindFig}) =>{
    
    if(chessObj[title]  ){       
        return (
            <div id={title} className={ [color, 'sqad-cont', 'el', chessObj[title] ].join(' ')} name={chessObj[title]} onClick={onFindFig}>
                <div circleid={title} className="circle" hidden>

                </div>                          
            </div>
        )
    } else {
        return (
            <div id={title} className={[color, 'sqad-cont'].join(' ') } name="null">
                <div circleid={title} className="circle" hidden>

                </div>
                                     
            </div>
        )
    }

};

export default Sqad;
