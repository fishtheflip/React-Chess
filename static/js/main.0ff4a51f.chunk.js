(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],[,,,,,,,,,,function(e,n,l){},function(e,n,l){},function(e,n,l){},function(e,n,l){"use strict";l.r(n);var t=l(0),c=l(1),a=l(4),u=l.n(a),i=l(2),o=(l(10),l(11),l(12),{a1:"whelephaunt",b1:"whhourse",c1:"whrook",d1:"whqueen",e1:"whking",f1:"whrook",h1:"whhourse",g1:"whelephaunt",a2:"whpawn",b2:"whpawn",c2:"whpawn",d2:"whpawn",e2:"whpawn",f2:"whpawn",h2:"whpawn",g2:"whpawn",a3:null,b3:null,c3:null,d3:null,e3:null,f3:null,h3:null,g3:null,a4:null,b4:null,c4:null,d4:null,e4:null,f4:null,h4:null,g4:null,a5:null,b5:null,c5:null,d5:null,e5:null,f5:null,h5:null,g5:null,a6:null,b6:null,c6:null,d6:null,e6:null,f6:null,h6:null,g6:null,a8:"blelephaunt",b8:"blhourse",c8:"blrook",d8:"blqueen",e8:"blking",f8:"blrook",h8:"blhourse",g8:"blelephaunt",a7:"blpawn",b7:"blpawn",c7:"blpawn",d7:"blpawn",e7:"blpawn",f7:"blpawn",h7:"blpawn",g7:"blpawn"}),r=function(e){var n=e.color,l=e.title,c=e.onFindFig;return o[l]?Object(t.jsx)("div",{id:l,className:[n,"sqad-cont","el",o[l]].join(" "),name:o[l],onClick:c,children:Object(t.jsx)("div",{circleid:l,className:"circle",hidden:!0})}):Object(t.jsx)("div",{id:l,className:[n,"sqad-cont"].join(" "),name:"null",children:Object(t.jsx)("div",{circleid:l,className:"circle",hidden:!0})})},d=function(e){var n=e.arrNum,l=e.loop,a=e.onFind,u=Object(c.useState)(["a","b","c","d","e","f","g","h"]),o=Object(i.a)(u,2),d=o[0],s=(o[1],Object(c.useState)([8,7,6,5,4,3,2,1])),b=Object(i.a)(s,2),h=b[0],w=(b[1],!0);return l%2!==0&&(w=!1),Object(t.jsx)("div",{className:"horizontalMain",children:n.map((function(e,n){var c=d[n]+h[0+l];return w?(w=!w,Object(t.jsx)(r,{title:c,color:"horizontalOne",onFindFig:a},c)):(w=!w,Object(t.jsx)(r,{title:c,color:"horizontalTwo",onFindFig:a},c))}))})};var s=function(){var e=Object(c.useState)([8,7,6,5,4,3,2,1]),n=Object(i.a)(e,2),l=n[0],a=(n[1],Object(c.useState)(null)),u=Object(i.a)(a,2),o=u[0],r=u[1],s=Object(c.useState)([null,null]),b=Object(i.a)(s,2),h=b[0],w=b[1],j=function(e){if("whpawn"===e.target.getAttribute("name")){console.log(e.target.getAttribute("id"));var n=e.target.getAttribute("id").split(""),l=[n[0],+n[1]+1].join(""),t=[n[0],+n[1]+2].join(""),c=document.querySelector('div[circleid="'.concat(l,'"]')),a=document.querySelector('div[circleid="'.concat(t,'"]'));w([l,t]),console.log(h),c.removeAttribute("hidden"),a.removeAttribute("hidden")}},p=function(e){var n=e.target.getAttribute("name");console.log(n),n&&(e.target.classList.add("change"),null===o?(r(e.target.getAttribute("id")),j(e)):(document.querySelector('div[id="'.concat(o,'"]')).classList.remove("change"),r(e.target.getAttribute("id")),j(e)))};return Object(t.jsx)("div",{className:"app",children:Object(t.jsx)("div",{className:"appField",children:l.map((function(e,n){return Object(t.jsx)(d,{arrNum:l,loop:n,onFind:p},e)}))})})};u.a.render(Object(t.jsx)(s,{}),document.querySelector("#root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.0ff4a51f.chunk.js.map