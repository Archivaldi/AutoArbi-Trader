_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"++HY":function(e,t,a){"use strict";var n=a("wx14"),r=a("q1tI"),o=(a("17x9"),a("H2TA")),s=a("ofer"),c=r.forwardRef((function(e,t){return r.createElement(s.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(o.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},"30+C":function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),s=(a("17x9"),a("iuhU")),c=a("kKAo"),i=a("H2TA"),l=o.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.raised,u=void 0!==l&&l,d=Object(r.a)(e,["classes","className","raised"]);return o.createElement(c.a,Object(n.a)({className:Object(s.a)(a.root,i),elevation:u?8:1,ref:t},d))}));t.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Z}));var n=a("q1tI"),r=a.n(n),o=(a("L4PR"),a("o0o1")),s=a.n(o),c=a("HaE+"),i=a("30+C"),l=a("ofer"),u=a("oa/T"),d=a("79Xs"),p=a("r9w1"),g=a("ADg1"),m=a("cVXz"),f=a("Ff2n"),b=a("rePB"),h=a("wx14"),y=(a("17x9"),a("iuhU")),w=a("H2TA"),v=a("tVbE"),j=n.forwardRef((function(e,t){var a,r=e.classes,o=e.className,s=e.component,c=void 0===s?"li":s,i=e.disableGutters,l=void 0!==i&&i,u=e.ListItemClasses,d=e.role,p=void 0===d?"menuitem":d,g=e.selected,m=e.tabIndex,b=Object(f.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(a=void 0!==m?m:-1),n.createElement(v.a,Object(h.a)({button:!0,role:p,tabIndex:a,component:c,selected:g,disableGutters:l,classes:Object(h.a)({dense:r.dense},u),className:Object(y.a)(r.root,o,g&&r.selected,!l&&r.gutters),ref:t},b))})),O=Object(w.a)((function(e){return{root:Object(h.a)({},e.typography.body1,Object(b.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(h.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(j),x=a("Spdj"),T=a("iae6"),N=n.forwardRef((function(e,t){var a=e.disableSpacing,r=void 0!==a&&a,o=e.classes,s=e.className,c=Object(f.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(h.a)({className:Object(y.a)(o.root,s,!r&&o.spacing),ref:t},c))})),S=Object(w.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(N),C=a("Z3vd"),E=a("ZiQX"),I=a("nOHt"),R=a("kfFl"),k=a("yv+Y"),A=a("EQI2"),P=a("++HY"),_=a("+JwS"),B=a("R/WZ"),F=Object(B.a)((function(e){return{typos:{color:"rgba(255, 255, 255, 0.7)"},currentChar:{borderTopLeftRadius:"2px",borderBottomLeftRadius:"2px",background:"#62bdf9",color:"#212121"},charsToBeTyped:{background:"#0081cb",borderTopRightRadius:"2px",borderBottomRightRadius:"2px"},welcome:{textAlign:"center"},content:{display:"flex",flexDirection:"column",justifyContent:"space-around"}}})),L=a("ULge"),D=r.a.createElement;function H(e){var t=e.user_id,a=e.open,o=e.setAuthDialogOpen,i=e.handleGoBackReset,u=F(),d=u.content,g=u.typos,m=u.currentChar,f=u.charsToBeTyped,b=u.welcome,h=Object(n.useState)(!1),y=h[0],w=h[1],v=Object(n.useState)(!1),j=v[0],O=v[1],x=Object(n.useState)(0),T=x[0],N=x[1],S=Object(n.useState)(0),E=S[0],B=S[1],H=Object(n.useState)(""),z=H[0],U=H[1],q=Object(n.useRef)(),G=Object(I.useRouter)(),V=L.a.message,X=L.a.route,M=function(){q.current.start(),w(!1),U(""),N(T+1),E===V.length-1?B(0):B(E+1),document.querySelector("#input").focus()},W=function(){var e=Object(c.a)(s.a.mark((function e(){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q.current.stop(),w(!0),e.next=4,q.current.getTypingPattern({type:0,text:z});case 4:if(a=e.sent,!(q.current.getQuality(a)>.3)){e.next=17;break}return e.next=9,fetch(X.verify,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({typingPattern:a,user_id:t})});case 9:return n=e.sent,e.next=12,n.json();case 12:r=e.sent,"not verified"===r.message?M():(O(!0),setTimeout((function(){G.push("/dashboard")}),1e3)),e.next=18;break;case 17:M();case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){q.current||(q.current=new TypingDNA)}),[q]),Object(n.useEffect)((function(){z.length===V[E].length&&W()}),[z]),D("div",null,D(R.a,{open:a,"aria-labelledby":"form-dialog-title"},D(k.a,{id:"form-dialog-title"},D("img",{width:"200",src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true"})),D(A.a,{className:d},D(P.a,null,D("span",null,"To ensure the highest level of security, we are using a technology that will test who you are by the way you type!")),D(l.a,{variant:"body1"},j?D("h3",{className:b},"\ud83d\ude4c Thank you for participating! \ud83c\udf89 Redirecting..."):D(r.a.Fragment,null,D("span",null,"Please type ",D("span",{className:g},"(typos accepted)"),":"," ",V[E].substring(0,z.length),D("span",{className:m},V[E].charAt(z.length)),D("span",{className:f},V[E].substring(z.length+1,V[E].length))),D(p.a,{autoFocus:!0,inputProps:{spellCheck:"false"},autoComplete:"off",margin:"dense",id:"input",label:"Type Phrase Here",color:"secondary",value:z,disabled:y,onChange:function(e){return U(e.target.value)},fullWidth:!0})))),D(_.a,null,D(C.a,{onClick:function(){q.current.reset(),o(!1),i(),setTimeout((function(){w(!1),B(0),U("")}),200)},color:"secondary"},"Go Back"))))}var z=a("ot8U"),U=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},q=r.a.createElement;function G(e){var t=e.useStyles,a=L.a.appScript,o=a.landing,f=a.secondAuthLogin,b=a.secondAuthSignUp,h=L.a.route,y=h.signUp,w=h.login,v=t(),j=v.root,N=v.brand,I=v.auto,R=v.arbiTrader,k=v.buttons,A=v.logo,P=v.email,_=v.formControl,B=v.selectEmpty,F=Object(n.useState)(null),D=F[0],G=F[1],V=Object(n.useState)(null),X=V[0],M=V[1],W=Object(n.useState)(!1),J=W[0],Z=W[1],Q=Object(n.useState)(!1),Y=Q[0],K=Q[1],$=Object(n.useState)(!1),ee=$[0],te=$[1],ae=Object(n.useState)("Error!"),ne=ae[0],re=ae[1],oe=Object(z.a)({emailInput:"",passwordInput:"",passwordInputVerify:""}),se=oe.values,ce=oe.updateValue,ie=Object(n.useRef)(),le=se.emailInput,ue=se.passwordInput,de=se.passwordInputVerify,pe=function(e){G(e)},ge=function(){var e=Object(c.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("signup"===D&&ue!==de||"signup"===D&&""===de||"signup"===D&&!X||""===ue||""===le)&&U(le)){e.next=10;break}!1===ee&&(te(!0),setTimeout((function(){te(!1)}),3e3)),"signup"===D&&ue!==de&&re("Passwords do not match!"),"signup"===D&&""===de&&re("Re-Enter Password Empty!"),"signup"!==D||X||re("Transaction Role Empty!"),""===ue&&re("Password Empty!"),""===le&&re("Email Empty!"),U(le)||re("Not a valid Email!"),e.next=21;break;case 10:return K(!0),e.next=13,fetch("".concat("signup"===D?y:w).concat("signup"===D?"/".concat(X):""),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({emailInput:le,passwordInput:ue})});case 13:return t=e.sent,e.next=16,t.json();case 16:a=e.sent,n=a.user_id,a.role,a.error?(K(!1),re("Invalid Password! Please try again."),!1===ee&&(te(!0),setTimeout((function(){te(!1)}),1500))):void 0!==n?(ie.current=n,Z(!0)):console.log("User ID not captured");case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return q(r.a.Fragment,null,q(H,{user_id:ie.current,open:J,setAuthDialogOpen:Z,handleGoBackReset:function(){G(null),K(!1)}}),q(i.a,{className:j},q("div",{className:N},q("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:A}),q(l.a,{variant:"h5",noWrap:!0},q("span",{className:I},"auto")," ",q("span",{className:R},"arbi-trader"))),q(u.a,null,!1===Y?q(r.a.Fragment,null,null===D?q(l.a,{align:"center",color:"textSecondary"},o):q(r.a.Fragment,null,q(d.a,{open:ee,onClick:function(){return setPasswordError(!1)}},q(E.a,{severity:"error"},ne)),q(l.a,{color:"textSecondary"},q("span",null,"signup"===D?b:f)),q("div",{className:P},q(p.a,{color:"secondary",type:"email",label:"Email",id:"emailInput",name:"emailInput",value:le,onChange:ce,required:!0}),q(p.a,{color:"secondary",type:"password",label:"Password",id:"passwordInput",name:"passwordInput",onChange:ce,value:ue,required:!0}),"signup"===D&&q(r.a.Fragment,null,q(p.a,{color:"secondary",type:"password",label:"Re-Enter Password",id:"passwordInputVerify",name:"passwordInputVerify",onChange:ce,value:de,required:!0}),q(g.a,{className:_,color:"secondary",required:!0},q(m.a,{value:X,onChange:function(e){return M(e.target.value)},displayEmpty:!0,className:B,inputProps:{"aria-label":"Without label"}},q(O,{value:"",disabled:!0},"Transaction Role"),q(O,{value:"buyer"},"Buying"),q(O,{value:"seller"},"Selling")),q(x.a,null,"Transaction Role")))))):q(T.a,{color:"secondary"})),q(S,{className:k},null===D?q(r.a.Fragment,null,q(C.a,{size:"large",color:"secondary",onClick:function(){return pe("login")}},"Logging In"),q(C.a,{size:"large",color:"secondary",onClick:function(){return pe("signup")}},"Signing Up")):q(r.a.Fragment,null,q(C.a,{disabled:Y,size:"large",color:"secondary",onClick:function(){return pe(null)}},"Go Back"),q(C.a,{disabled:Y,size:"large",color:"secondary",onClick:ge},"login"===D?"Login":"Sign Up")))))}var V=Object(B.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},root:{width:300,height:455,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},brand:{display:"grid",gridAutoFlow:"column",justifyContent:"center",alignItems:"center",padding:"8px"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},buttons:{display:"flex",width:"100%",justifyContent:"space-around",marginLeft:"6px",marginReft:"6px"},email:{display:"flex",flexDirection:"column"},formControl:{marginTop:"1px",minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),X=a("wKsx"),M=r.a.createElement;function W(e){var t=e.children,a=L.a.route.session,o=Object(X.a)().page,i=Object(n.useState)(!1),l=i[0],u=i[1];return Object(n.useEffect)((function(){!function(){var e=Object(c.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,n.user_id?window.location.replace("/dashboard"):u(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),M(r.a.Fragment,null,l?M(r.a.Fragment,null,t):M("div",{className:o},M(T.a,{color:"secondary"})))}var J=r.a.createElement;function Z(){var e=V().page;return J(W,null,J("div",{className:e},J(G,{useStyles:V})))}},"oa/T":function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),s=(a("17x9"),a("iuhU")),c=a("H2TA"),i=o.forwardRef((function(e,t){var a=e.classes,c=e.className,i=e.component,l=void 0===i?"div":i,u=Object(r.a)(e,["classes","className","component"]);return o.createElement(l,Object(n.a)({className:Object(s.a)(a.root,c),ref:t},u))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RXBc")}])}},[["vlRD",0,2,1,3,4]]]);