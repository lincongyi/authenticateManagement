import{V as F,W as R,$ as X,r as C,ab as V,v as I,N as J,j as c,ay as q,a as B,az as K,aA as Q,aB as U,aC as Y,ak as Z,aD as ee,D as oe,E as ne,G as te,J as re}from"./index.0174d8c9.js";const v=(o,e,t,n,r)=>({backgroundColor:o,border:`${n.lineWidth}px ${n.lineType} ${e}`,[`${r}-icon`]:{color:t}}),se=o=>{const{componentCls:e,motionDurationSlow:t,marginXS:n,marginSM:r,fontSize:s,fontSizeLG:d,lineHeight:a,borderRadiusLG:p,motionEaseInOutCirc:l,alertIconSizeLG:u,colorText:m,paddingContentVerticalSM:y,alertPaddingHorizontal:g,paddingMD:$,paddingContentHorizontalLG:f,colorTextHeading:x}=o;return{[e]:Object.assign(Object.assign({},X(o)),{position:"relative",display:"flex",alignItems:"center",padding:`${y}px ${g}px`,wordWrap:"break-word",borderRadius:p,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:n,lineHeight:0},["&-description"]:{display:"none",fontSize:s,lineHeight:a},"&-message":{color:m},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${l}, opacity ${t} ${l},
        padding-top ${t} ${l}, padding-bottom ${t} ${l},
        margin-bottom ${t} ${l}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",paddingInline:f,paddingBlock:$,[`${e}-icon`]:{marginInlineEnd:r,fontSize:u,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:n,color:x,fontSize:d},[`${e}-description`]:{display:"block"}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},ie=o=>{const{componentCls:e,colorSuccess:t,colorSuccessBorder:n,colorSuccessBg:r,colorWarning:s,colorWarningBorder:d,colorWarningBg:a,colorError:p,colorErrorBorder:l,colorErrorBg:u,colorInfo:m,colorInfoBorder:y,colorInfoBg:g}=o;return{[e]:{"&-success":v(r,n,t,o,e),"&-info":v(g,y,m,o,e),"&-warning":v(a,d,s,o,e),"&-error":Object.assign(Object.assign({},v(u,l,p,o,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},ae=o=>{const{componentCls:e,iconCls:t,motionDurationMid:n,marginXS:r,fontSizeIcon:s,colorIcon:d,colorIconHover:a}=o;return{[e]:{["&-action"]:{marginInlineStart:r},[`${e}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:s,lineHeight:`${s}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:d,transition:`color ${n}`,"&:hover":{color:a}}},"&-close-text":{color:d,transition:`color ${n}`,"&:hover":{color:a}}}}},le=o=>[se(o),ie(o),ae(o)],ce=F("Alert",o=>{const{fontSizeHeading3:e}=o,t=R(o,{alertIconSizeLG:e,alertPaddingHorizontal:12});return[le(t)]});var de=globalThis&&globalThis.__rest||function(o,e){var t={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&e.indexOf(n)<0&&(t[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(o);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(o,n[r])&&(t[n[r]]=o[n[r]]);return t};const pe={success:U,info:Y,error:Z,warning:ee},ue=o=>{const{icon:e,prefixCls:t,type:n}=o,r=pe[n]||null;return e?K(e,c("span",{className:`${t}-icon`,children:e}),()=>({className:I(`${t}-icon`,{[e.props.className]:e.props.className})})):C.exports.createElement(r,{className:`${t}-icon`})},me=o=>{const{isClosable:e,prefixCls:t,closeIcon:n,handleClose:r}=o,s=n===!0||n===void 0?c(Q,{}):n;return e?c("button",{type:"button",onClick:r,className:`${t}-close-icon`,tabIndex:0,children:s}):null},ge=o=>{const{description:e,prefixCls:t,message:n,banner:r,className:s,rootClassName:d,style:a,onMouseEnter:p,onMouseLeave:l,onClick:u,afterClose:m,showIcon:y,closable:g,closeText:$,closeIcon:f,action:x}=o,z=de(o,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[N,M]=C.exports.useState(!1),H=C.exports.useRef(null),{getPrefixCls:k,direction:A,alert:h}=C.exports.useContext(V),i=k("alert",t),[T,_]=ce(i),L=b=>{var S;M(!0),(S=o.onClose)===null||S===void 0||S.call(o,b)},E=C.exports.useMemo(()=>o.type!==void 0?o.type:r?"warning":"info",[o.type,r]),P=C.exports.useMemo(()=>$?!0:typeof g=="boolean"?g:f!==!1&&f!==null&&f!==void 0,[$,f,g]),w=r&&y===void 0?!0:y,D=I(i,`${i}-${E}`,{[`${i}-with-description`]:!!e,[`${i}-no-icon`]:!w,[`${i}-banner`]:!!r,[`${i}-rtl`]:A==="rtl"},h==null?void 0:h.className,s,d,_),W=J(z,{aria:!0,data:!0});return T(c(q,{visible:!N,motionName:`${i}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:b=>({maxHeight:b.offsetHeight}),onLeaveEnd:m,children:b=>{let{className:S,style:G}=b;return B("div",{...Object.assign({ref:H,"data-show":!N,className:I(D,S),style:Object.assign(Object.assign(Object.assign({},h==null?void 0:h.style),a),G),onMouseEnter:p,onMouseLeave:l,onClick:u,role:"alert"},W),children:[w?c(ue,{description:e,icon:o.icon,prefixCls:i,type:E}):null,B("div",{className:`${i}-content`,children:[n?c("div",{className:`${i}-message`,children:n}):null,e?c("div",{className:`${i}-description`,children:e}):null]}),x?c("div",{className:`${i}-action`,children:x}):null,c(me,{isClosable:P,prefixCls:i,closeIcon:$||f,handleClose:L})]})}}))},O=ge;let fe=function(o){oe(t,o);var e=ne(t);function t(){var n;return te(this,t),n=e.apply(this,arguments),n.state={error:void 0,info:{componentStack:""}},n}return re(t,[{key:"componentDidCatch",value:function(r,s){this.setState({error:r,info:s})}},{key:"render",value:function(){const{message:r,description:s,children:d}=this.props,{error:a,info:p}=this.state,l=p&&p.componentStack?p.componentStack:null,u=typeof r>"u"?(a||"").toString():r,m=typeof s>"u"?l:s;return a?c(O,{type:"error",message:u,description:c("pre",{style:{fontSize:"0.9em",overflowX:"auto"},children:m})}):d}}]),t}(C.exports.Component);const Ce=fe,j=O;j.ErrorBoundary=Ce;const he=j;export{he as A};
