_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2wU4":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t("sFYk")}])},sFYk:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var r=t("o0o1"),n=t.n(r),o=t("HaE+"),i=t("q1tI"),c=t.n(i),s=t("iae6"),l=t("79Xs"),d=t("ZiQX"),u=t("bJni"),f=t("fE/f"),m=t("+rzG"),b=t("30+C"),p=t("oa/T"),v=t("ofer"),g=t("rePB"),y=t("R/WZ"),h=Object(y.a)((function(e){var a;return{root:{display:"grid",gap:"1em",minWidth:"260px",height:"50vh",marginBottom:"2em"},header:{display:"grid",gridTemplateColumns:"50% 50%"},progress:{display:"grid",margin:"0 50px 0 50px"},documents:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},items:{display:"flex",flexDirection:"row"},userNameFont:(a={fontSize:"3vw"},Object(g.a)(a,e.breakpoints.down("lg"),{fontSize:"2vw"}),Object(g.a)(a,e.breakpoints.down("sm"),{fontSize:"1.5em"}),a),font:Object(g.a)({fontSize:"1.5vw"},e.breakpoints.down("sm"),{fontSize:"1em"}),accent:{color:"#62bdf9"}}})),w=t("wx14"),j=t("Ff2n"),O=(t("17x9"),t("iuhU")),x=t("NqtD"),N=t("H2TA"),k=t("ye/S"),S=t("tr08"),C=i.forwardRef((function(e,a){var t=e.classes,r=e.className,n=e.color,o=void 0===n?"primary":n,c=e.value,s=e.valueBuffer,l=e.variant,d=void 0===l?"indeterminate":l,u=Object(j.a)(e,["classes","className","color","value","valueBuffer","variant"]),f=Object(S.a)(),m={},b={bar1:{},bar2:{}};if("determinate"===d||"buffer"===d)if(void 0!==c){m["aria-valuenow"]=Math.round(c),m["aria-valuemin"]=0,m["aria-valuemax"]=100;var p=c-100;"rtl"===f.direction&&(p=-p),b.bar1.transform="translateX(".concat(p,"%)")}else 0;if("buffer"===d)if(void 0!==s){var v=(s||0)-100;"rtl"===f.direction&&(v=-v),b.bar2.transform="translateX(".concat(v,"%)")}else 0;return i.createElement("div",Object(w.a)({className:Object(O.a)(t.root,t["color".concat(Object(x.a)(o))],r,{determinate:t.determinate,indeterminate:t.indeterminate,buffer:t.buffer,query:t.query}[d]),role:"progressbar"},m,{ref:a},u),"buffer"===d?i.createElement("div",{className:Object(O.a)(t.dashed,t["dashedColor".concat(Object(x.a)(o))])}):null,i.createElement("div",{className:Object(O.a)(t.bar,t["barColor".concat(Object(x.a)(o))],("indeterminate"===d||"query"===d)&&t.bar1Indeterminate,{determinate:t.bar1Determinate,buffer:t.bar1Buffer}[d]),style:b.bar1}),"determinate"===d?null:i.createElement("div",{className:Object(O.a)(t.bar,("indeterminate"===d||"query"===d)&&t.bar2Indeterminate,"buffer"===d?[t["color".concat(Object(x.a)(o))],t.bar2Buffer]:t["barColor".concat(Object(x.a)(o))]),style:b.bar2}))})),E=Object(N.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(k.e)(a,.62):Object(k.a)(a,.5)},t=a(e.palette.primary.main),r=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:t},colorSecondary:{backgroundColor:r},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(C),P=c.a.createElement,_=Object(y.a)({root:{width:"100%"}});function I(e){var a=e.value,t=_().root;return P("div",{className:t},P(E,{variant:"determinate",value:a,color:100===a?"secondary":"primary"}))}var z=t("vrJG"),D=t.n(z),B=c.a.createElement;function T(e){var a=e.data,t=a.docs,r=(a.name,e.userData),n=r.firstName,o=r.lastName,i=[r.govId,r.title,r.billOfSale,r.registration],c=h(),s=c.root,l=c.header,d=c.documents,u=c.items,f=c.progress,m=c.accent,g=c.font,y=c.userNameFont;var w=function(e){var a=0;return e.forEach((function(e){e.completed?a++:a=a})),a/e.length*100}(t);return console.log(i),B(b.a,{className:s},B(p.a,{className:l},B("div",null,B(v.a,{className:y},B("span",null,n," ",o)),B(v.a,{className:"".concat(m," ").concat(g)})),B("div",{className:d},t.map((function(e){var a=e.id,t=e.completed,r=e.type;return B("div",{className:u,key:a},B(D.a,{className:g,color:t?"secondary":"primary"}),B(v.a,{className:g,color:"textSecondary"},r))})))),B("div",{className:f},B(I,{value:w})))}var q=t("bVjH"),X=t("L4PR"),F=t("fx/U"),J=t("49Ka"),U=c.a.createElement;function H(){var e=Object(F.a)(),a=X.a.buyer,t=X.a.seller,r=u.a.userInfo,c=Object(i.useState)(null),b=c[0],p=c[1],v=Object(i.useState)("No Id"),g=v[0],y=v[1],h=Object(i.useState)(!1),w=h[0],j=h[1];return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r,{method:"POST"});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,p(t),t.seller.transaction_id&&(y("Your Transaction ID: ".concat(t.seller.transaction_id)),j(!0));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),U(f.a,null,null===b?U("div",{className:e.loading},U(s.a,{color:"secondary"})):U(m.a,{allDocsComplete:Object(J.a)(a,t),classes:e},U(q.a,null),U(l.a,{open:w},U(d.a,{severity:"info"},g)),U(T,{key:2,userData:b.seller,data:t})))}}},[["2wU4",0,2,1,3,4,5]]]);