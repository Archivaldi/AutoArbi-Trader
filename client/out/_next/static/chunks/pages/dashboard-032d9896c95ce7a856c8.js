_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"2wU4":function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r("sFYk")}])},sFYk:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return F}));var t=r("o0o1"),n=r.n(t),o=r("HaE+"),i=r("q1tI"),c=r.n(i),s=r("fE/f"),l=r("+rzG"),d=r("30+C"),u=r("oa/T"),f=r("ofer"),m=r("rePB"),b=r("R/WZ"),p=Object(b.a)((function(e){var a;return{root:{display:"grid",gap:"1em",minWidth:"260px"},header:{display:"grid",gridTemplateColumns:"50% 50%"},progress:{display:"grid",margin:"0 50px 0 50px"},documents:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},items:{display:"flex",flexDirection:"row"},userNameFont:(a={fontSize:"3vw"},Object(m.a)(a,e.breakpoints.down("lg"),{fontSize:"2vw"}),Object(m.a)(a,e.breakpoints.down("sm"),{fontSize:"1.5em"}),a),font:Object(m.a)({fontSize:"1.5vw"},e.breakpoints.down("sm"),{fontSize:"1em"}),accent:{color:"#62bdf9"}}})),v=r("wx14"),g=r("Ff2n"),y=(r("17x9"),r("iuhU")),h=r("NqtD"),w=r("H2TA"),k=r("ye/S"),x=r("tr08"),j=i.forwardRef((function(e,a){var r=e.classes,t=e.className,n=e.color,o=void 0===n?"primary":n,c=e.value,s=e.valueBuffer,l=e.variant,d=void 0===l?"indeterminate":l,u=Object(g.a)(e,["classes","className","color","value","valueBuffer","variant"]),f=Object(x.a)(),m={},b={bar1:{},bar2:{}};if("determinate"===d||"buffer"===d)if(void 0!==c){m["aria-valuenow"]=Math.round(c),m["aria-valuemin"]=0,m["aria-valuemax"]=100;var p=c-100;"rtl"===f.direction&&(p=-p),b.bar1.transform="translateX(".concat(p,"%)")}else 0;if("buffer"===d)if(void 0!==s){var w=(s||0)-100;"rtl"===f.direction&&(w=-w),b.bar2.transform="translateX(".concat(w,"%)")}else 0;return i.createElement("div",Object(v.a)({className:Object(y.a)(r.root,r["color".concat(Object(h.a)(o))],t,{determinate:r.determinate,indeterminate:r.indeterminate,buffer:r.buffer,query:r.query}[d]),role:"progressbar"},m,{ref:a},u),"buffer"===d?i.createElement("div",{className:Object(y.a)(r.dashed,r["dashedColor".concat(Object(h.a)(o))])}):null,i.createElement("div",{className:Object(y.a)(r.bar,r["barColor".concat(Object(h.a)(o))],("indeterminate"===d||"query"===d)&&r.bar1Indeterminate,{determinate:r.bar1Determinate,buffer:r.bar1Buffer}[d]),style:b.bar1}),"determinate"===d?null:i.createElement("div",{className:Object(y.a)(r.bar,("indeterminate"===d||"query"===d)&&r.bar2Indeterminate,"buffer"===d?[r["color".concat(Object(h.a)(o))],r.bar2Buffer]:r["barColor".concat(Object(h.a)(o))]),style:b.bar2}))})),O=Object(w.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(k.e)(a,.62):Object(k.a)(a,.5)},r=a(e.palette.primary.main),t=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:r},colorSecondary:{backgroundColor:t},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(j),N=c.a.createElement,C=Object(b.a)({root:{width:"100%"}});function E(e){var a=e.value,r=C().root;return N("div",{className:r},N(O,{variant:"determinate",value:a,color:100===a?"secondary":"primary"}))}var P=r("vrJG"),S=r.n(P),_=c.a.createElement;function z(e){var a=e.data,r=a.docs,t=a.name,n=a.title,o=p(),i=o.root,c=o.header,s=o.documents,l=o.items,m=o.progress,b=o.accent,v=o.font,g=o.userNameFont;var y=function(e){var a=0;return e.forEach((function(e){e.completed?a++:a=a})),a/e.length*100}(r);return _(d.a,{className:i},_(u.a,{className:c},_("div",null,_(f.a,{className:g},t),_(f.a,{className:"".concat(b," ").concat(v)},n)),_("div",{className:s},r.map((function(e){var a=e.id,r=e.completed,t=e.type;return _("div",{className:l,key:a},_(S.a,{className:v,color:r?"secondary":"primary"}),_(f.a,{className:v,color:"textSecondary"},t))})))),_("div",{className:m},_(E,{value:y})))}var I=r("L4PR"),q=r("fx/U"),B=r("49Ka"),T="/api/db/user-info",D=c.a.createElement;function F(){var e=Object(q.a)(),a=I.a.buyer,r=I.a.seller,t=T;return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(n.a.mark((function e(){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST"});case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,console.log(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),D(s.a,null,D(l.a,{allDocsComplete:Object(B.a)(a,r),classes:e},D(z,{key:2,data:r}),D(z,{key:1,data:a})))}}},[["2wU4",0,2,1,3,4,6]]]);