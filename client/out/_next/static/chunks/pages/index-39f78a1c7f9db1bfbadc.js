_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"++HY":function(e,t,n){"use strict";var a=n("wx14"),r=n("q1tI"),o=(n("17x9"),n("H2TA")),i=n("ofer"),c=r.forwardRef((function(e,t){return r.createElement(i.a,Object(a.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(o.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Oe}));var a=n("q1tI"),r=n.n(a),o=(n("L4PR"),n("o0o1")),i=n.n(o),c=n("HaE+"),s=n("30+C"),l=n("ofer"),u=n("oa/T"),d=n("Ff2n"),p=n("rePB"),m=n("wx14"),f=(n("17x9"),n("iuhU")),g=n("H2TA"),b=n("wpWl"),h=n("i8i4"),v=n("gk1O"),y=n("bfFb"),O=n("Ovef");function j(e){return e.substring(2).toLowerCase()}var E=function(e){var t=e.children,n=e.disableReactTree,r=void 0!==n&&n,o=e.mouseEvent,i=void 0===o?"onClick":o,c=e.onClickAway,s=e.touchEvent,l=void 0===s?"onTouchEnd":s,u=a.useRef(!1),d=a.useRef(null),p=a.useRef(!1),m=a.useRef(!1);a.useEffect((function(){return p.current=!0,function(){p.current=!1}}),[]);var f=a.useCallback((function(e){d.current=h.findDOMNode(e)}),[]),g=Object(y.a)(t.ref,f),b=Object(O.a)((function(e){var t=m.current;if(m.current=!1,p.current&&d.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(u.current)u.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(d.current)>-1;else n=!Object(v.a)(d.current).documentElement.contains(e.target)||d.current.contains(e.target);n||!r&&t||c(e)}})),E=function(e){return function(n){m.current=!0;var a=t.props[e];a&&a(n)}},x={ref:g};return!1!==l&&(x[l]=E(l)),a.useEffect((function(){if(!1!==l){var e=j(l),t=Object(v.a)(d.current),n=function(){u.current=!0};return t.addEventListener(e,b),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,b),t.removeEventListener("touchmove",n)}}}),[b,l]),!1!==i&&(x[i]=E(i)),a.useEffect((function(){if(!1!==i){var e=j(i),t=Object(v.a)(d.current);return t.addEventListener(e,b),function(){t.removeEventListener(e,b)}}}),[b,i]),a.createElement(a.Fragment,null,a.cloneElement(t,x))},x=n("NqtD"),w=n("x6Ns"),k=n("bqsI"),C=n("kKAo"),S=n("ye/S"),N=a.forwardRef((function(e,t){var n=e.action,r=e.classes,o=e.className,i=e.message,c=e.role,s=void 0===c?"alert":c,l=Object(d.a)(e,["action","classes","className","message","role"]);return a.createElement(C.a,Object(m.a)({role:s,square:!0,elevation:6,className:Object(f.a)(r.root,o),ref:t},l),a.createElement("div",{className:r.message},i),n?a.createElement("div",{className:r.action},n):null)})),L=Object(g.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(S.b)(e.palette.background.default,t);return{root:Object(m.a)({},e.typography.body2,Object(p.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(N),T=a.forwardRef((function(e,t){var n=e.action,r=e.anchorOrigin,o=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,i=r.horizontal,c=e.autoHideDuration,s=void 0===c?null:c,l=e.children,u=e.classes,p=e.className,g=e.ClickAwayListenerProps,h=e.ContentProps,v=e.disableWindowBlurListener,y=void 0!==v&&v,j=e.message,C=e.onClose,S=e.onEnter,N=e.onEntered,T=e.onEntering,R=e.onExit,I=e.onExited,P=e.onExiting,A=e.onMouseEnter,D=e.onMouseLeave,M=e.open,z=e.resumeHideDuration,W=e.TransitionComponent,B=void 0===W?k.a:W,H=e.transitionDuration,F=void 0===H?{enter:b.b.enteringScreen,exit:b.b.leavingScreen}:H,_=e.TransitionProps,q=Object(d.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),V=a.useRef(),$=a.useState(!0),G=$[0],U=$[1],X=Object(O.a)((function(){C&&C.apply(void 0,arguments)})),J=Object(O.a)((function(e){C&&null!=e&&(clearTimeout(V.current),V.current=setTimeout((function(){X(null,"timeout")}),e))}));a.useEffect((function(){return M&&J(s),function(){clearTimeout(V.current)}}),[M,s,J]);var Z=function(){clearTimeout(V.current)},Y=a.useCallback((function(){null!=s&&J(null!=z?z:.5*s)}),[s,z,J]);return a.useEffect((function(){if(!y&&M)return window.addEventListener("focus",Y),window.addEventListener("blur",Z),function(){window.removeEventListener("focus",Y),window.removeEventListener("blur",Z)}}),[y,Y,M]),!M&&G?null:a.createElement(E,Object(m.a)({onClickAway:function(e){C&&C(e,"clickaway")}},g),a.createElement("div",Object(m.a)({className:Object(f.a)(u.root,u["anchorOrigin".concat(Object(x.a)(o)).concat(Object(x.a)(i))],p),onMouseEnter:function(e){A&&A(e),Z()},onMouseLeave:function(e){D&&D(e),Y()},ref:t},q),a.createElement(B,Object(m.a)({appear:!0,in:M,onEnter:Object(w.a)((function(){U(!1)}),S),onEntered:N,onEntering:T,onExit:R,onExited:Object(w.a)((function(){U(!0)}),I),onExiting:P,timeout:F,direction:"top"===o?"down":"up"},_),l||a.createElement(L,Object(m.a)({message:j,action:n},h)))))})),R=Object(g.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},r={justifyContent:"flex-start"},o={top:24},i={bottom:24},c={right:24},s={left:24},l={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(m.a)({},t,Object(p.a)({},e.breakpoints.up("sm"),Object(m.a)({},o,l))),anchorOriginBottomCenter:Object(m.a)({},n,Object(p.a)({},e.breakpoints.up("sm"),Object(m.a)({},i,l))),anchorOriginTopRight:Object(m.a)({},t,a,Object(p.a)({},e.breakpoints.up("sm"),Object(m.a)({left:"auto"},o,c))),anchorOriginBottomRight:Object(m.a)({},n,a,Object(p.a)({},e.breakpoints.up("sm"),Object(m.a)({left:"auto"},i,c))),anchorOriginTopLeft:Object(m.a)({},t,r,Object(p.a)({},e.breakpoints.up("sm"),Object(m.a)({right:"auto"},o,s))),anchorOriginBottomLeft:Object(m.a)({},n,r,Object(p.a)({},e.breakpoints.up("sm"),Object(m.a)({right:"auto"},i,s)))}}),{flip:!1,name:"MuiSnackbar"})(T),I=n("r9w1"),P=n("ADg1"),A=n("cVXz"),D=n("tVbE"),M=a.forwardRef((function(e,t){var n,r=e.classes,o=e.className,i=e.component,c=void 0===i?"li":i,s=e.disableGutters,l=void 0!==s&&s,u=e.ListItemClasses,p=e.role,g=void 0===p?"menuitem":p,b=e.selected,h=e.tabIndex,v=Object(d.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==h?h:-1),a.createElement(D.a,Object(m.a)({button:!0,role:g,tabIndex:n,component:c,selected:b,disableGutters:l,classes:Object(m.a)({dense:r.dense},u),className:Object(f.a)(r.root,o,b&&r.selected,!l&&r.gutters),ref:t},v))})),z=Object(g.a)((function(e){return{root:Object(m.a)({},e.typography.body1,Object(p.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(m.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(M),W=n("Spdj");function B(e){var t,n,a;return t=e,n=0,a=1,e=(Math.min(Math.max(n,t),a)-n)/(a-n),e=(e-=1)*e*e+1}var H=a.forwardRef((function(e,t){var n,r=e.classes,o=e.className,i=e.color,c=void 0===i?"primary":i,s=e.disableShrink,l=void 0!==s&&s,u=e.size,p=void 0===u?40:u,g=e.style,b=e.thickness,h=void 0===b?3.6:b,v=e.value,y=void 0===v?0:v,O=e.variant,j=void 0===O?"indeterminate":O,E=Object(d.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),w={},k={},C={};if("determinate"===j||"static"===j){var S=2*Math.PI*((44-h)/2);w.strokeDasharray=S.toFixed(3),C["aria-valuenow"]=Math.round(y),"static"===j?(w.strokeDashoffset="".concat(((100-y)/100*S).toFixed(3),"px"),k.transform="rotate(-90deg)"):(w.strokeDashoffset="".concat((n=(100-y)/100,n*n*S).toFixed(3),"px"),k.transform="rotate(".concat((270*B(y/70)).toFixed(3),"deg)"))}return a.createElement("div",Object(m.a)({className:Object(f.a)(r.root,o,"inherit"!==c&&r["color".concat(Object(x.a)(c))],{indeterminate:r.indeterminate,static:r.static}[j]),style:Object(m.a)({width:p,height:p},k,g),ref:t,role:"progressbar"},C,E),a.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},a.createElement("circle",{className:Object(f.a)(r.circle,l&&r.circleDisableShrink,{indeterminate:r.circleIndeterminate,static:r.circleStatic}[j]),style:w,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})))})),F=Object(g.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(H),_=a.forwardRef((function(e,t){var n=e.disableSpacing,r=void 0!==n&&n,o=e.classes,i=e.className,c=Object(d.a)(e,["disableSpacing","classes","className"]);return a.createElement("div",Object(m.a)({className:Object(f.a)(o.root,i,!r&&o.spacing),ref:t},c))})),q=Object(g.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(_),V=n("Z3vd"),$=n("5AJ6"),G=Object($.a)(a.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),U=Object($.a)(a.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),X=Object($.a)(a.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),J=Object($.a)(a.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Z=Object($.a)(a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Y=n("PsDL"),Q={success:a.createElement(G,{fontSize:"inherit"}),warning:a.createElement(U,{fontSize:"inherit"}),error:a.createElement(X,{fontSize:"inherit"}),info:a.createElement(J,{fontSize:"inherit"})},K=a.createElement(Z,{fontSize:"small"}),ee=a.forwardRef((function(e,t){var n=e.action,r=e.children,o=e.classes,i=e.className,c=e.closeText,s=void 0===c?"Close":c,l=e.color,u=e.icon,p=e.iconMapping,g=void 0===p?Q:p,b=e.onClose,h=e.role,v=void 0===h?"alert":h,y=e.severity,O=void 0===y?"success":y,j=e.variant,E=void 0===j?"standard":j,w=Object(d.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return a.createElement(C.a,Object(m.a)({role:v,square:!0,elevation:0,className:Object(f.a)(o.root,o["".concat(E).concat(Object(x.a)(l||O))],i),ref:t},w),!1!==u?a.createElement("div",{className:o.icon},u||g[O]||Q[O]):null,a.createElement("div",{className:o.message},r),null!=n?a.createElement("div",{className:o.action},n):null,null==n&&b?a.createElement("div",{className:o.action},a.createElement(Y.a,{size:"small","aria-label":s,title:s,color:"inherit",onClick:b},K)):null)})),te=Object(g.a)((function(e){var t="light"===e.palette.type?S.a:S.e,n="light"===e.palette.type?S.e:S.a;return{root:Object(m.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:n(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:n(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:n(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:n(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(ee),ne=n("nOHt"),ae=n("kfFl"),re=n("yv+Y"),oe=n("EQI2"),ie=n("++HY"),ce=n("+JwS"),se=n("R/WZ"),le=Object(se.a)((function(e){return{typos:{color:"rgba(255, 255, 255, 0.7)"},currentChar:{borderTopLeftRadius:"2px",borderBottomLeftRadius:"2px",background:"#62bdf9",color:"#212121"},charsToBeTyped:{background:"#0081cb",borderTopRightRadius:"2px",borderBottomRightRadius:"2px"},welcome:{textAlign:"center"},content:{display:"flex",flexDirection:"column",justifyContent:"space-around"}}})),ue=n("ULge"),de=r.a.createElement;function pe(e){var t=e.user_id,n=e.open,o=e.setAuthDialogOpen,s=e.handleGoBackReset,u=le(),d=u.content,p=u.typos,m=u.currentChar,f=u.charsToBeTyped,g=u.welcome,b=Object(a.useState)(!1),h=b[0],v=b[1],y=Object(a.useState)(!1),O=y[0],j=y[1],E=Object(a.useState)(0),x=E[0],w=E[1],k=Object(a.useState)(0),C=k[0],S=k[1],N=Object(a.useState)(""),L=N[0],T=N[1],R=Object(a.useRef)(),P=Object(ne.useRouter)(),A=ue.a.message,D=ue.a.route,M=function(){R.current.start(),v(!1),T(""),w(x+1),C===A.length-1?S(0):S(C+1),document.querySelector("#input").focus()},z=function(){var e=Object(c.a)(i.a.mark((function e(){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R.current.stop(),v(!0),e.next=4,R.current.getTypingPattern({type:0,text:L});case 4:if(n=e.sent,!(R.current.getQuality(n)>.3)){e.next=17;break}return e.next=9,fetch(D.verify,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({typingPattern:n,user_id:t})});case 9:return a=e.sent,e.next=12,a.json();case 12:r=e.sent,"not verified"===r.message?M():(j(!0),setTimeout((function(){P.push("/dashboard")}),1e3)),e.next=18;break;case 17:M();case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){R.current||(R.current=new TypingDNA)}),[R]),Object(a.useEffect)((function(){L.length===A[C].length&&z()}),[L]),de("div",null,de(ae.a,{open:n,"aria-labelledby":"form-dialog-title"},de(re.a,{id:"form-dialog-title"},de("img",{width:"200",src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true"})),de(oe.a,{className:d},de(ie.a,null,de("span",null,"To ensure the highest level of security, we are using a technology that will test who you are by the way you type!")),de(l.a,{variant:"body1"},O?de("h3",{className:g},"\ud83d\ude4c Thank you for participating! \ud83c\udf89 Redirecting..."):de(r.a.Fragment,null,de("span",null,"Please type ",de("span",{className:p},"(typos accepted)"),":"," ",A[C].substring(0,L.length),de("span",{className:m},A[C].charAt(L.length)),de("span",{className:f},A[C].substring(L.length+1,A[C].length))),de(I.a,{autoFocus:!0,inputProps:{spellCheck:"false"},autoComplete:"off",margin:"dense",id:"input",label:"Type Phrase Here",color:"secondary",value:L,disabled:h,onChange:function(e){return T(e.target.value)},fullWidth:!0})))),de(ce.a,null,de(V.a,{onClick:function(){R.current.reset(),o(!1),s(),setTimeout((function(){v(!1),S(0),T("")}),200)},color:"secondary"},"Go Back"))))}function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},be=r.a.createElement;function he(e){var t=e.useStyles,n=ue.a.appScript,o=n.landing,d=n.secondAuthLogin,m=n.secondAuthSignUp,f=ue.a.route,g=f.signUp,b=f.login,h=t(),v=h.root,y=h.brand,O=h.auto,j=h.arbiTrader,E=h.buttons,x=h.logo,w=h.email,k=h.formControl,C=h.selectEmpty,S=Object(a.useState)(null),N=S[0],L=S[1],T=Object(a.useState)(null),D=T[0],M=T[1],B=Object(a.useState)(!1),H=B[0],_=B[1],$=Object(a.useState)(!1),G=$[0],U=$[1],X=Object(a.useState)(!1),J=X[0],Z=X[1],Y=Object(a.useState)("Error!"),Q=Y[0],K=Y[1],ee=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return{values:n,updateValue:function(e){var t=e.target,a=t.value,o=t.type,i=t.name;"number"===o&&(a=parseInt(a)),r(fe(fe({},n),{},Object(p.a)({},i,a)))}}}({emailInput:"",passwordInput:"",passwordInputVerify:""}),ne=ee.values,ae=ee.updateValue,re=Object(a.useRef)(),oe=ne.emailInput,ie=ne.passwordInput,ce=ne.passwordInputVerify,se=function(e){L(e)},le=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("signup"===N&&ie!==ce||"signup"===N&&""===ce||"signup"===N&&!D||""===ie||""===oe)&&ge(oe)){e.next=10;break}!1===J&&(Z(!0),setTimeout((function(){Z(!1)}),3e3)),"signup"===N&&ie!==ce&&K("Passwords do not match!"),"signup"===N&&""===ce&&K("Re-Enter Password Empty!"),"signup"!==N||D||K("Transaction Role Empty!"),""===ie&&K("Password Empty!"),""===oe&&K("Email Empty!"),ge(oe)||K("Not a valid Email!"),e.next=20;break;case 10:return U(!0),e.next=13,fetch("".concat("signup"===N?g:b).concat("signup"===N?"/".concat(D):""),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({emailInput:oe,passwordInput:ie})});case 13:return t=e.sent,e.next=16,t.json();case 16:n=e.sent,a=n.user_id,n.error?(U(!1),K("Invalid Password! Please try again."),!1===J&&(Z(!0),setTimeout((function(){Z(!1)}),1500))):void 0!==a?(re.current=a,_(!0)):console.log("User ID not captured");case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return be(r.a.Fragment,null,be(pe,{user_id:re.current,open:H,setAuthDialogOpen:_,handleGoBackReset:function(){L(null),U(!1)}}),be(s.a,{className:v},be("div",{className:y},be("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:x}),be(l.a,{variant:"h5",noWrap:!0},be("span",{className:O},"auto")," ",be("span",{className:j},"arbi-trader"))),be(u.a,null,!1===G?be(r.a.Fragment,null,null===N?be(l.a,{align:"center",color:"textSecondary"},o):be(r.a.Fragment,null,be(R,{open:J,onClick:function(){return setPasswordError(!1)}},be(te,{severity:"error"},Q)),be(l.a,{color:"textSecondary"},be("span",null,"signup"===N?m:d)),be("div",{className:w},be(I.a,{color:"secondary",type:"email",label:"Email",id:"emailInput",name:"emailInput",value:oe,onChange:ae,required:!0}),be(I.a,{color:"secondary",type:"password",label:"Password",id:"passwordInput",name:"passwordInput",onChange:ae,value:ie,required:!0}),"signup"===N&&be(r.a.Fragment,null,be(I.a,{color:"secondary",type:"password",label:"Re-Enter Password",id:"passwordInputVerify",name:"passwordInputVerify",onChange:ae,value:ce,required:!0}),be(P.a,{className:k,color:"secondary",required:!0},be(A.a,{value:D,onChange:function(e){return M(e.target.value)},displayEmpty:!0,className:C,inputProps:{"aria-label":"Without label"}},be(z,{value:"",disabled:!0},"Transaction Role"),be(z,{value:"buyer"},"Buying"),be(z,{value:"seller"},"Selling")),be(W.a,null,"Transaction Role")))))):be(F,{color:"secondary"})),be(q,{className:E},null===N?be(r.a.Fragment,null,be(V.a,{size:"large",color:"secondary",onClick:function(){return se("login")}},"Logging In"),be(V.a,{size:"large",color:"secondary",onClick:function(){return se("signup")}},"Signing Up")):be(r.a.Fragment,null,be(V.a,{disabled:G,size:"large",color:"secondary",onClick:function(){return se(null)}},"Go Back"),be(V.a,{disabled:G,size:"large",color:"secondary",onClick:le},"login"===N?"Login":"Sign Up")))))}var ve=Object(se.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},root:{width:300,height:455,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},brand:{display:"grid",gridAutoFlow:"column",justifyContent:"center",alignItems:"center",padding:"8px"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},buttons:{display:"flex",width:"100%",justifyContent:"space-around",marginLeft:"6px",marginReft:"6px"},email:{display:"flex",flexDirection:"column"},formControl:{marginTop:"1px",minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),ye=r.a.createElement;function Oe(){var e=ve().page;return ye("div",{className:e},ye(he,{useStyles:ve}))}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",0,2,1,3,4]]]);