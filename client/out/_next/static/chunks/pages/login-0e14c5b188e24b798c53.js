_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{SGa5:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var n=a("q1tI"),o=a.n(n),r=a("L4PR"),l=a("30+C"),i=a("oa/T"),c=a("ofer"),s=a("r9w1"),u=a("wx14"),d=a("Ff2n"),g=(a("17x9"),a("iuhU")),m=a("H2TA"),p=n.forwardRef((function(e,t){var a=e.disableSpacing,o=void 0!==a&&a,r=e.classes,l=e.className,i=Object(d.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(u.a)({className:Object(g.a)(r.root,l,!o&&r.spacing),ref:t},i))})),f=Object(m.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(p),y=a("Z3vd"),b=a("KQm4"),h=a("kfFl"),w=a("yv+Y"),v=a("EQI2"),j=a("++HY"),S=a("+JwS"),N=["I'm here to create a new account","I want to create a text to secure my information","We are using new technology to add more security"],O={domain:"http//localhost:",port:"8080",path:"/check_pattern"},C=o.a.createElement;function T(e){var t=e.open,a=e.handleDialogClose,r=e.styles,l=Object(n.useState)(0),i=l[0],u=l[1],d=Object(n.useState)(!0),g=d[0],m=d[1],p=Object(n.useState)([]),f=p[0],T=p[1],k=Object(n.useState)(""),x=k[0],_=k[1],E=N,I=O,A=(I.domain,I.port,I.path,Object(n.useRef)()),W=function(){setTimeout((function(){a(),T(""),m(!0),u(0)}),200)};return Object(n.useEffect)((function(){A.current||(A.current=new TypingDNA)}),[A]),C("div",null,C(h.a,{open:t,onClose:W,"aria-labelledby":"form-dialog-title"},C(w.a,{id:"form-dialog-title"},C("img",{width:"200",src:"https://github.com/Archivaldi/4wheelz/blob/userAuthFE/client/src/images/ShoppedTypingDNA.png?raw=true"})),C(v.a,{className:r},C(j.a,null,"To ensure the highest level of security, we are using a technology that will test who you are by the way you type!"),C(c.a,{variant:"body1",component:"body1"},i<E.length?C(o.a.Fragment,null,C("span",null,"Please type: ",E[i]),C(s.a,{autoFocus:!0,autoComplete:"off",margin:"dense",id:"name",label:"Type Message Here",type:"email",color:"secondary",value:f,disabled:!g,onChange:function(e){return t=e.target.value,T(t),void(t===E[i]&&m(!1));var t},fullWidth:!0})):C("span",null,"Thank you for participating!"))),C(S.a,null,C(y.a,{onClick:W,color:"secondary"},"Go Back"),i<E.length?C(y.a,{onClick:function(){u(i+1),m(!0),_([].concat(Object(b.a)(x),Object(b.a)(f))),T("")},color:"secondary",disabled:g},"Next"):C(y.a,{onClick:function(){A.current.stop();var e=A.current.getTypingPattern({type:1,text:x.join("")});console.log(e),fetch("http://localhost:8080/test_change",{method:"POST",body:{typingPattern:e},mode:"no-cors"}).then((function(e){"Success!"===e.message?console.log("It worked"):console.log("It did not")}))},color:"secondary"},"Submit"))))}var k=o.a.createElement;function x(e){var t=(0,e.useStyles)(),a=t.root,r=t.dialog,u=t.brand,d=t.auto,g=t.arbiTrader,m=t.buttons,p=t.logo,b=Object(n.useState)(null),h=b[0],w=b[1],v=Object(n.useState)(!1),j=v[0],S=v[1],N=function(e){w(e)};return Object(n.useEffect)((function(){"seller"===h&&S(!0)}),[h]),k(l.a,{className:a},k(T,{styles:r,open:j,handleDialogClose:function(){S(!1),w(null)}}),k(i.a,null,k("div",{className:u},k("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:p}),k(c.a,{variant:"h5",noWrap:!0},k("span",{className:d},"auto")," ",k("span",{className:g},"arbi-trader"))),"buyer"==h?k(s.a,{color:"secondary",id:"standard-required",label:"Transaction ID",required:!0}):k(c.a,{variant:"h6",color:"textSecondary"},"Welcome! What role will you be needing assistance in your transaction today?")),k(f,{className:m},"buyer"==h?k(o.a.Fragment,null,k(y.a,{size:"large",color:"secondary",onClick:function(){return N(null)}},"Go Back"),k(y.a,{size:"large",color:"secondary"},"Submit")):k(o.a.Fragment,null,k(y.a,{size:"large",color:"secondary",onClick:function(){return N("buyer")}},"Buying"),k(y.a,{size:"large",color:"secondary",onClick:function(){return N("seller")}},"Selling"))))}var _=a("R/WZ"),E=Object(_.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},root:{minWidth:275,maxWidth:300,display:"flex",flexDirection:"column",alignItems:"center"},brand:{display:"grid",gridAutoFlow:"column",justifyContent:"center",alignItems:"center"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},buttons:{display:"flex",width:"100%",justifyContent:"space-around",margin:"6px"},dialog:{minHeight:160}}})),I=o.a.createElement;function A(){r.a.buyer,r.a.seller;var e=E().page;return I("div",{className:e},I(x,{useStyles:E}))}},u6Hu:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a("SGa5")}])}},[["u6Hu",0,1,3,4,6]]]);