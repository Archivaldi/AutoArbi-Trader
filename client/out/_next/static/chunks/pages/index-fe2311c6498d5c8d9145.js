_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"++HY":function(e,t,n){"use strict";var a=n("wx14"),r=n("q1tI"),o=(n("17x9"),n("H2TA")),i=n("ofer"),c=r.forwardRef((function(e,t){return r.createElement(i.a,Object(a.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(o.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Oe}));var a=n("q1tI"),r=n.n(a),o=(n("L4PR"),n("o0o1")),i=n.n(o),c=n("HaE+"),s=n("30+C"),l=n("ofer"),u=n("oa/T"),d=n("Ff2n"),p=n("rePB"),f=n("wx14"),m=(n("17x9"),n("iuhU")),g=n("H2TA"),b=n("wpWl"),h=n("i8i4"),v=n("gk1O"),y=n("bfFb"),O=n("Ovef");function j(e){return e.substring(2).toLowerCase()}var E=function(e){var t=e.children,n=e.disableReactTree,r=void 0!==n&&n,o=e.mouseEvent,i=void 0===o?"onClick":o,c=e.onClickAway,s=e.touchEvent,l=void 0===s?"onTouchEnd":s,u=a.useRef(!1),d=a.useRef(null),p=a.useRef(!1),f=a.useRef(!1);a.useEffect((function(){return p.current=!0,function(){p.current=!1}}),[]);var m=a.useCallback((function(e){d.current=h.findDOMNode(e)}),[]),g=Object(y.a)(t.ref,m),b=Object(O.a)((function(e){var t=f.current;if(f.current=!1,p.current&&d.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(u.current)u.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(d.current)>-1;else n=!Object(v.a)(d.current).documentElement.contains(e.target)||d.current.contains(e.target);n||!r&&t||c(e)}})),E=function(e){return function(n){f.current=!0;var a=t.props[e];a&&a(n)}},w={ref:g};return!1!==l&&(w[l]=E(l)),a.useEffect((function(){if(!1!==l){var e=j(l),t=Object(v.a)(d.current),n=function(){u.current=!0};return t.addEventListener(e,b),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,b),t.removeEventListener("touchmove",n)}}}),[b,l]),!1!==i&&(w[i]=E(i)),a.useEffect((function(){if(!1!==i){var e=j(i),t=Object(v.a)(d.current);return t.addEventListener(e,b),function(){t.removeEventListener(e,b)}}}),[b,i]),a.createElement(a.Fragment,null,a.cloneElement(t,w))},w=n("NqtD"),x=n("x6Ns"),C=n("bqsI"),k=n("kKAo"),S=n("ye/S"),T=a.forwardRef((function(e,t){var n=e.action,r=e.classes,o=e.className,i=e.message,c=e.role,s=void 0===c?"alert":c,l=Object(d.a)(e,["action","classes","className","message","role"]);return a.createElement(k.a,Object(f.a)({role:s,square:!0,elevation:6,className:Object(m.a)(r.root,o),ref:t},l),a.createElement("div",{className:r.message},i),n?a.createElement("div",{className:r.action},n):null)})),L=Object(g.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(S.b)(e.palette.background.default,t);return{root:Object(f.a)({},e.typography.body2,Object(p.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(T),N=a.forwardRef((function(e,t){var n=e.action,r=e.anchorOrigin,o=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,i=r.horizontal,c=e.autoHideDuration,s=void 0===c?null:c,l=e.children,u=e.classes,p=e.className,g=e.ClickAwayListenerProps,h=e.ContentProps,v=e.disableWindowBlurListener,y=void 0!==v&&v,j=e.message,k=e.onClose,S=e.onEnter,T=e.onEntered,N=e.onEntering,R=e.onExit,I=e.onExited,P=e.onExiting,A=e.onMouseEnter,M=e.onMouseLeave,z=e.open,D=e.resumeHideDuration,W=e.TransitionComponent,B=void 0===W?C.a:W,H=e.transitionDuration,_=void 0===H?{enter:b.b.enteringScreen,exit:b.b.leavingScreen}:H,F=e.TransitionProps,q=Object(d.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),V=a.useRef(),G=a.useState(!0),U=G[0],$=G[1],X=Object(O.a)((function(){k&&k.apply(void 0,arguments)})),J=Object(O.a)((function(e){k&&null!=e&&(clearTimeout(V.current),V.current=setTimeout((function(){X(null,"timeout")}),e))}));a.useEffect((function(){return z&&J(s),function(){clearTimeout(V.current)}}),[z,s,J]);var Z=function(){clearTimeout(V.current)},Y=a.useCallback((function(){null!=s&&J(null!=D?D:.5*s)}),[s,D,J]);return a.useEffect((function(){if(!y&&z)return window.addEventListener("focus",Y),window.addEventListener("blur",Z),function(){window.removeEventListener("focus",Y),window.removeEventListener("blur",Z)}}),[y,Y,z]),!z&&U?null:a.createElement(E,Object(f.a)({onClickAway:function(e){k&&k(e,"clickaway")}},g),a.createElement("div",Object(f.a)({className:Object(m.a)(u.root,u["anchorOrigin".concat(Object(w.a)(o)).concat(Object(w.a)(i))],p),onMouseEnter:function(e){A&&A(e),Z()},onMouseLeave:function(e){M&&M(e),Y()},ref:t},q),a.createElement(B,Object(f.a)({appear:!0,in:z,onEnter:Object(x.a)((function(){$(!1)}),S),onEntered:T,onEntering:N,onExit:R,onExited:Object(x.a)((function(){$(!0)}),I),onExiting:P,timeout:_,direction:"top"===o?"down":"up"},F),l||a.createElement(L,Object(f.a)({message:j,action:n},h)))))})),R=Object(g.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},r={justifyContent:"flex-start"},o={top:24},i={bottom:24},c={right:24},s={left:24},l={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(f.a)({},t,Object(p.a)({},e.breakpoints.up("sm"),Object(f.a)({},o,l))),anchorOriginBottomCenter:Object(f.a)({},n,Object(p.a)({},e.breakpoints.up("sm"),Object(f.a)({},i,l))),anchorOriginTopRight:Object(f.a)({},t,a,Object(p.a)({},e.breakpoints.up("sm"),Object(f.a)({left:"auto"},o,c))),anchorOriginBottomRight:Object(f.a)({},n,a,Object(p.a)({},e.breakpoints.up("sm"),Object(f.a)({left:"auto"},i,c))),anchorOriginTopLeft:Object(f.a)({},t,r,Object(p.a)({},e.breakpoints.up("sm"),Object(f.a)({right:"auto"},o,s))),anchorOriginBottomLeft:Object(f.a)({},n,r,Object(p.a)({},e.breakpoints.up("sm"),Object(f.a)({right:"auto"},i,s)))}}),{flip:!1,name:"MuiSnackbar"})(N),I=n("r9w1"),P=n("ADg1"),A=n("cVXz"),M=n("tVbE"),z=a.forwardRef((function(e,t){var n,r=e.classes,o=e.className,i=e.component,c=void 0===i?"li":i,s=e.disableGutters,l=void 0!==s&&s,u=e.ListItemClasses,p=e.role,g=void 0===p?"menuitem":p,b=e.selected,h=e.tabIndex,v=Object(d.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==h?h:-1),a.createElement(M.a,Object(f.a)({button:!0,role:g,tabIndex:n,component:c,selected:b,disableGutters:l,classes:Object(f.a)({dense:r.dense},u),className:Object(m.a)(r.root,o,b&&r.selected,!l&&r.gutters),ref:t},v))})),D=Object(g.a)((function(e){return{root:Object(f.a)({},e.typography.body1,Object(p.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(f.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(z),W=n("Spdj"),B=n("iae6"),H=a.forwardRef((function(e,t){var n=e.disableSpacing,r=void 0!==n&&n,o=e.classes,i=e.className,c=Object(d.a)(e,["disableSpacing","classes","className"]);return a.createElement("div",Object(f.a)({className:Object(m.a)(o.root,i,!r&&o.spacing),ref:t},c))})),_=Object(g.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(H),F=n("Z3vd"),q=n("5AJ6"),V=Object(q.a)(a.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),G=Object(q.a)(a.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),U=Object(q.a)(a.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),$=Object(q.a)(a.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),X=Object(q.a)(a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),J=n("PsDL"),Z={success:a.createElement(V,{fontSize:"inherit"}),warning:a.createElement(G,{fontSize:"inherit"}),error:a.createElement(U,{fontSize:"inherit"}),info:a.createElement($,{fontSize:"inherit"})},Y=a.createElement(X,{fontSize:"small"}),K=a.forwardRef((function(e,t){var n=e.action,r=e.children,o=e.classes,i=e.className,c=e.closeText,s=void 0===c?"Close":c,l=e.color,u=e.icon,p=e.iconMapping,g=void 0===p?Z:p,b=e.onClose,h=e.role,v=void 0===h?"alert":h,y=e.severity,O=void 0===y?"success":y,j=e.variant,E=void 0===j?"standard":j,x=Object(d.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return a.createElement(k.a,Object(f.a)({role:v,square:!0,elevation:0,className:Object(m.a)(o.root,o["".concat(E).concat(Object(w.a)(l||O))],i),ref:t},x),!1!==u?a.createElement("div",{className:o.icon},u||g[O]||Z[O]):null,a.createElement("div",{className:o.message},r),null!=n?a.createElement("div",{className:o.action},n):null,null==n&&b?a.createElement("div",{className:o.action},a.createElement(J.a,{size:"small","aria-label":s,title:s,color:"inherit",onClick:b},Y)):null)})),Q=Object(g.a)((function(e){var t="light"===e.palette.type?S.a:S.e,n="light"===e.palette.type?S.e:S.a;return{root:Object(f.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:n(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:n(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:n(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:n(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(K),ee=n("nOHt"),te=n("kfFl"),ne=n("yv+Y"),ae=n("EQI2"),re=n("++HY"),oe=n("+JwS"),ie=n("R/WZ"),ce=Object(ie.a)((function(e){return{typos:{color:"rgba(255, 255, 255, 0.7)"},currentChar:{borderTopLeftRadius:"2px",borderBottomLeftRadius:"2px",background:"#62bdf9",color:"#212121"},charsToBeTyped:{background:"#0081cb",borderTopRightRadius:"2px",borderBottomRightRadius:"2px"},welcome:{textAlign:"center"},content:{display:"flex",flexDirection:"column",justifyContent:"space-around"}}})),se=n("ULge"),le=r.a.createElement;function ue(e){var t=e.user_id,n=e.open,o=e.setAuthDialogOpen,s=e.handleGoBackReset,u=ce(),d=u.content,p=u.typos,f=u.currentChar,m=u.charsToBeTyped,g=u.welcome,b=Object(a.useState)(!1),h=b[0],v=b[1],y=Object(a.useState)(!1),O=y[0],j=y[1],E=Object(a.useState)(0),w=E[0],x=E[1],C=Object(a.useState)(0),k=C[0],S=C[1],T=Object(a.useState)(""),L=T[0],N=T[1],R=Object(a.useRef)(),P=Object(ee.useRouter)(),A=se.a.message,M=se.a.route,z=function(){R.current.start(),v(!1),N(""),x(w+1),k===A.length-1?S(0):S(k+1),document.querySelector("#input").focus()},D=function(){var e=Object(c.a)(i.a.mark((function e(){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R.current.stop(),v(!0),e.next=4,R.current.getTypingPattern({type:0,text:L});case 4:if(n=e.sent,!(R.current.getQuality(n)>.3)){e.next=17;break}return e.next=9,fetch(M.verify,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({typingPattern:n,user_id:t})});case 9:return a=e.sent,e.next=12,a.json();case 12:r=e.sent,"not verified"===r.message?z():(j(!0),setTimeout((function(){P.push("/dashboard")}),1e3)),e.next=18;break;case 17:z();case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){R.current||(R.current=new TypingDNA)}),[R]),Object(a.useEffect)((function(){L.length===A[k].length&&D()}),[L]),le("div",null,le(te.a,{open:n,"aria-labelledby":"form-dialog-title"},le(ne.a,{id:"form-dialog-title"},le("img",{width:"200",src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true"})),le(ae.a,{className:d},le(re.a,null,le("span",null,"To ensure the highest level of security, we are using a technology that will test who you are by the way you type!")),le(l.a,{variant:"body1"},O?le("h3",{className:g},"\ud83d\ude4c Thank you for participating! \ud83c\udf89 Redirecting..."):le(r.a.Fragment,null,le("span",null,"Please type ",le("span",{className:p},"(typos accepted)"),":"," ",A[k].substring(0,L.length),le("span",{className:f},A[k].charAt(L.length)),le("span",{className:m},A[k].substring(L.length+1,A[k].length))),le(I.a,{autoFocus:!0,inputProps:{spellCheck:"false"},autoComplete:"off",margin:"dense",id:"input",label:"Type Phrase Here",color:"secondary",value:L,disabled:h,onChange:function(e){return N(e.target.value)},fullWidth:!0})))),le(oe.a,null,le(F.a,{onClick:function(){R.current.reset(),o(!1),s(),setTimeout((function(){v(!1),S(0),N("")}),200)},color:"secondary"},"Go Back"))))}var de=n("ot8U"),pe=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},fe=r.a.createElement;function me(e){var t=e.useStyles,n=se.a.appScript,o=n.landing,d=n.secondAuthLogin,p=n.secondAuthSignUp,f=se.a.route,m=f.signUp,g=f.login,b=t(),h=b.root,v=b.brand,y=b.auto,O=b.arbiTrader,j=b.buttons,E=b.logo,w=b.email,x=b.formControl,C=b.selectEmpty,k=Object(a.useState)(null),S=k[0],T=k[1],L=Object(a.useState)(null),N=L[0],M=L[1],z=Object(a.useState)(!1),H=z[0],q=z[1],V=Object(a.useState)(!1),G=V[0],U=V[1],$=Object(a.useState)(!1),X=$[0],J=$[1],Z=Object(a.useState)("Error!"),Y=Z[0],K=Z[1],ee=Object(de.a)({emailInput:"",passwordInput:"",passwordInputVerify:""}),te=ee.values,ne=ee.updateValue,ae=Object(a.useRef)(),re=te.emailInput,oe=te.passwordInput,ie=te.passwordInputVerify,ce=function(e){T(e)},le=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("signup"===S&&oe!==ie||"signup"===S&&""===ie||"signup"===S&&!N||""===oe||""===re)&&pe(re)){e.next=10;break}!1===X&&(J(!0),setTimeout((function(){J(!1)}),3e3)),"signup"===S&&oe!==ie&&K("Passwords do not match!"),"signup"===S&&""===ie&&K("Re-Enter Password Empty!"),"signup"!==S||N||K("Transaction Role Empty!"),""===oe&&K("Password Empty!"),""===re&&K("Email Empty!"),pe(re)||K("Not a valid Email!"),e.next=21;break;case 10:return U(!0),e.next=13,fetch("".concat("signup"===S?m:g).concat("signup"===S?"/".concat(N):""),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({emailInput:re,passwordInput:oe})});case 13:return t=e.sent,e.next=16,t.json();case 16:n=e.sent,a=n.user_id,n.role,n.error?(U(!1),K("Invalid Password! Please try again."),!1===X&&(J(!0),setTimeout((function(){J(!1)}),1500))):void 0!==a?(ae.current=a,q(!0)):console.log("User ID not captured");case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return fe(r.a.Fragment,null,fe(ue,{user_id:ae.current,open:H,setAuthDialogOpen:q,handleGoBackReset:function(){T(null),U(!1)}}),fe(s.a,{className:h},fe("div",{className:v},fe("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:E}),fe(l.a,{variant:"h5",noWrap:!0},fe("span",{className:y},"auto")," ",fe("span",{className:O},"arbi-trader"))),fe(u.a,null,!1===G?fe(r.a.Fragment,null,null===S?fe(l.a,{align:"center",color:"textSecondary"},o):fe(r.a.Fragment,null,fe(R,{open:X,onClick:function(){return setPasswordError(!1)}},fe(Q,{severity:"error"},Y)),fe(l.a,{color:"textSecondary"},fe("span",null,"signup"===S?p:d)),fe("div",{className:w},fe(I.a,{color:"secondary",type:"email",label:"Email",id:"emailInput",name:"emailInput",value:re,onChange:ne,required:!0}),fe(I.a,{color:"secondary",type:"password",label:"Password",id:"passwordInput",name:"passwordInput",onChange:ne,value:oe,required:!0}),"signup"===S&&fe(r.a.Fragment,null,fe(I.a,{color:"secondary",type:"password",label:"Re-Enter Password",id:"passwordInputVerify",name:"passwordInputVerify",onChange:ne,value:ie,required:!0}),fe(P.a,{className:x,color:"secondary",required:!0},fe(A.a,{value:N,onChange:function(e){return M(e.target.value)},displayEmpty:!0,className:C,inputProps:{"aria-label":"Without label"}},fe(D,{value:"",disabled:!0},"Transaction Role"),fe(D,{value:"buyer"},"Buying"),fe(D,{value:"seller"},"Selling")),fe(W.a,null,"Transaction Role")))))):fe(B.a,{color:"secondary"})),fe(_,{className:j},null===S?fe(r.a.Fragment,null,fe(F.a,{size:"large",color:"secondary",onClick:function(){return ce("login")}},"Logging In"),fe(F.a,{size:"large",color:"secondary",onClick:function(){return ce("signup")}},"Signing Up")):fe(r.a.Fragment,null,fe(F.a,{disabled:G,size:"large",color:"secondary",onClick:function(){return ce(null)}},"Go Back"),fe(F.a,{disabled:G,size:"large",color:"secondary",onClick:le},"login"===S?"Login":"Sign Up")))))}var ge=Object(ie.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},root:{width:300,height:455,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},brand:{display:"grid",gridAutoFlow:"column",justifyContent:"center",alignItems:"center",padding:"8px"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},buttons:{display:"flex",width:"100%",justifyContent:"space-around",marginLeft:"6px",marginReft:"6px"},email:{display:"flex",flexDirection:"column"},formControl:{marginTop:"1px",minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),be=n("wKsx"),he=r.a.createElement;function ve(e){var t=e.children,n=se.a.route.session,o=Object(be.a)().page,s=Object(a.useState)(null),l=s[0],u=s[1];return Object(a.useEffect)((function(){!function(){var e=Object(c.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,(r=a.user_id)&&(u(r),window.location.replace("/dashboard"));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),he(r.a.Fragment,null,l?he(r.a.Fragment,null,t):he("div",{className:o},he(B.a,{color:"secondary"})))}var ye=r.a.createElement;function Oe(){var e=ge().page;return ye(ve,null,ye("div",{className:e},ye(me,{useStyles:ge})))}},ot8U:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("rePB"),r=n("q1tI");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){var t=Object(r.useState)(e),n=t[0],o=t[1];return{values:n,updateValue:function(e){var t=e.target,r=t.value,c=t.type,s=t.name;"number"===c&&(r=parseInt(r)),o(i(i({},n),{},Object(a.a)({},s,r)))}}}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",0,2,1,3,4]]]);