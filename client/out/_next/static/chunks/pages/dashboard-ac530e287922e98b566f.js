_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2wU4":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t("sFYk")}])},L4PR:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var r={seller:{name:"Artur Markov",title:"Seller",docs:[{id:"5aea17efuju86",type:"Government ID",url:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/PlaceHolderID.jpg?raw=true",completed:!0},{id:"5aea17ded86",type:"Bill of Sale",url:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/PlaceHolderBillOfSale.jpg?raw=true",completed:!0},{id:"5aea17theh386",type:"Vehicle Title",url:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/PlaceHolderTitle.jpg?raw=true",completed:!0},{id:"5aea17efae9386",type:"Registration",url:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/PlaceHolderReg.jpg?raw=true",completed:!0}]},buyer:{name:"Nate Ryan",title:"Buyer",docs:[{id:"5aea1tre386",type:"Government ID",url:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/PlaceHolderID.jpg?raw=true",completed:!0},{id:"5aea17tyre9386",type:"Bill of Sale",url:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/PlaceHolderBillOfSale.jpg?raw=true",completed:!0}]}}},sFYk:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return X}));var r=t("o0o1"),n=t.n(r),i=t("HaE+"),o=t("q1tI"),l=t.n(o),c=t("iae6"),s=t("79Xs"),u=t("ZiQX"),d=t("bJni"),m=t("fE/f"),f=t("+rzG"),b=t("30+C"),p=t("oa/T"),g=t("ofer"),h=t("rePB"),v=t("R/WZ"),y=Object(v.a)((function(e){var a;return{root:{display:"grid",gap:"1em",minWidth:"260px",height:"50vh",marginBottom:"2em"},header:{display:"grid",gridTemplateColumns:"50% 50%"},progress:{display:"grid",margin:"0 50px 0 50px"},documents:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},items:{display:"flex",flexDirection:"row"},userNameFont:(a={fontSize:"3vw"},Object(h.a)(a,e.breakpoints.down("lg"),{fontSize:"2vw"}),Object(h.a)(a,e.breakpoints.down("sm"),{fontSize:"1.5em"}),a),font:Object(h.a)({fontSize:"1.5vw"},e.breakpoints.down("sm"),{fontSize:"1em"}),accent:{color:"#62bdf9"}}})),w=t("wx14"),j=t("Ff2n"),O=(t("17x9"),t("iuhU")),k=t("NqtD"),N=t("H2TA"),x=t("ye/S"),S=t("tr08"),I=o.forwardRef((function(e,a){var t=e.classes,r=e.className,n=e.color,i=void 0===n?"primary":n,l=e.value,c=e.valueBuffer,s=e.variant,u=void 0===s?"indeterminate":s,d=Object(j.a)(e,["classes","className","color","value","valueBuffer","variant"]),m=Object(S.a)(),f={},b={bar1:{},bar2:{}};if("determinate"===u||"buffer"===u)if(void 0!==l){f["aria-valuenow"]=Math.round(l),f["aria-valuemin"]=0,f["aria-valuemax"]=100;var p=l-100;"rtl"===m.direction&&(p=-p),b.bar1.transform="translateX(".concat(p,"%)")}else 0;if("buffer"===u)if(void 0!==c){var g=(c||0)-100;"rtl"===m.direction&&(g=-g),b.bar2.transform="translateX(".concat(g,"%)")}else 0;return o.createElement("div",Object(w.a)({className:Object(O.a)(t.root,t["color".concat(Object(k.a)(i))],r,{determinate:t.determinate,indeterminate:t.indeterminate,buffer:t.buffer,query:t.query}[u]),role:"progressbar"},f,{ref:a},d),"buffer"===u?o.createElement("div",{className:Object(O.a)(t.dashed,t["dashedColor".concat(Object(k.a)(i))])}):null,o.createElement("div",{className:Object(O.a)(t.bar,t["barColor".concat(Object(k.a)(i))],("indeterminate"===u||"query"===u)&&t.bar1Indeterminate,{determinate:t.bar1Determinate,buffer:t.bar1Buffer}[u]),style:b.bar1}),"determinate"===u?null:o.createElement("div",{className:Object(O.a)(t.bar,("indeterminate"===u||"query"===u)&&t.bar2Indeterminate,"buffer"===u?[t["color".concat(Object(k.a)(i))],t.bar2Buffer]:t["barColor".concat(Object(k.a)(i))]),style:b.bar2}))})),P=Object(N.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(x.e)(a,.62):Object(x.a)(a,.5)},t=a(e.palette.primary.main),r=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:t},colorSecondary:{backgroundColor:r},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(I),z=l.a.createElement,E=Object(v.a)({root:{width:"100%"}});function C(e){var a=e.value,t=E().root;return z("div",{className:t},z(P,{variant:"determinate",value:a,color:100===a?"secondary":"primary"}))}var B=t("vrJG"),D=t.n(B),_=l.a.createElement;function T(e){var a=e.userData,t=a.firstName,r=a.lastName,n=Object(o.useState)([]),i=n[0],c=n[1],s=y(),u=s.root,d=s.header,m=s.documents,f=s.items,h=s.progress,v=s.accent,w=s.font,j=s.userNameFont;return Object(o.useEffect)((function(){var e=0,t=[];for(var r in a)if("govId"===r||"title"===r||"billOfSale"===r||"registration"===r){var n=a[r],i=void 0;"govId"===r&&(i="Government ID"),"title"===r&&(i="Vehicle Title",n=!0),"billOfSale"===r&&(i="Bill of Sale",n=!0),"registration"===r&&(i="Registration",n=!0);var o={completed:n,type:i,id:e};t.push(o),e++}c(t)}),[a]),_(b.a,{className:u},_(p.a,{className:d},_("div",null,_(g.a,{className:j},_("span",null,t," ",r)),_(g.a,{className:"".concat(v," ").concat(w)},4===i.length?"Seller":"Buyer")),_("div",{className:m},i.length>0&&_(l.a.Fragment,null,i.map((function(e){var a=e.id,t=e.completed,r=e.type;return _("div",{className:f,key:a},_(D.a,{className:w,color:t?"secondary":"primary"}),_(g.a,{className:w,color:"textSecondary"},r))}))))),i.length>0&&_("div",{className:h},_(C,{value:function(e){var a=0;return e.forEach((function(e){e.completed?a++:a=a})),a/e.length*100}(i)})))}var A=t("bVjH"),H=t("L4PR"),R=t("fx/U"),q=t("KQm4"),F=function(e,a){var t=[].concat(Object(q.a)(e.docs),Object(q.a)(a.docs));return t.filter((function(e){return!0===e.completed})).length===t.length},U=l.a.createElement;function X(){var e=Object(R.a)(),a=H.a.buyer,t=H.a.seller,r=d.a.userInfo,b=Object(o.useState)(null),p=b[0],g=b[1],h=Object(o.useState)("No Id"),v=h[0],y=h[1],w=Object(o.useState)(!1),j=w[0],O=w[1];return Object(o.useEffect)((function(){!function(){var e=Object(i.a)(n.a.mark((function e(){var a,t,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r,{method:"POST"});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,i=t.message,g(serverUserInfo),i&&(y("Your Transaction ID: ".concat(serverUserInfo.seller.transaction_id)),O(!0));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),U(m.a,null,null===p?U("div",{className:e.loading},U(c.a,{color:"secondary"})):U(f.a,{allDocsComplete:F(a,t),classes:e},U(A.a,null),!r.seller&&U(s.a,{open:j},U(u.a,{severity:"info"},v)),p&&U(l.a.Fragment,null,p.seller&&U(T,{key:2,userData:p.seller}),p.buyer&&U(T,{key:1,userData:p.buyer}))))}}},[["2wU4",0,2,1,3,4,5]]]);