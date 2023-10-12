import{V as R,W as A,bK as D,$ as X,r as C,ab as P,v as I,j as b,bL as V,bM as q,bN as K,aA as Q,a as T,aq as U,d as G}from"./index.4ac89328.js";function J(o){return typeof o!="string"?o:o.charAt(0).toUpperCase()+o.slice(1)}const u=(o,n,l)=>{const e=J(l);return{[`${o.componentCls}-${n}`]:{color:o[`color${l}`],background:o[`color${e}Bg`],borderColor:o[`color${e}Border`],[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}},Y=o=>D(o,(n,l)=>{let{textColor:e,lightBorderColor:r,lightColor:t,darkColor:s}=l;return{[`${o.componentCls}-${n}`]:{color:e,background:t,borderColor:r,"&-inverse":{color:o.colorTextLightSolid,background:s,borderColor:s},[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}}),Z=o=>{const{paddingXXS:n,lineWidth:l,tagPaddingHorizontal:e,componentCls:r}=o,t=e-l,s=n-l;return{[r]:Object.assign(Object.assign({},X(o)),{display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:t,fontSize:o.tagFontSize,lineHeight:o.tagLineHeight,whiteSpace:"nowrap",background:o.defaultBg,border:`${o.lineWidth}px ${o.lineType} ${o.colorBorder}`,borderRadius:o.borderRadiusSM,opacity:1,transition:`all ${o.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:o.defaultColor},[`${r}-close-icon`]:{marginInlineStart:s,color:o.colorTextDescription,fontSize:o.tagIconSize,cursor:"pointer",transition:`all ${o.motionDurationMid}`,"&:hover":{color:o.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${o.iconCls}-close, ${o.iconCls}-close:hover`]:{color:o.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:o.colorPrimary,backgroundColor:o.colorFillSecondary},"&:active, &-checked":{color:o.colorTextLightSolid},"&-checked":{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}},"&:active":{backgroundColor:o.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${o.iconCls} + span, > span + ${o.iconCls}`]:{marginInlineStart:t}}),[`${r}-borderless`]:{borderColor:"transparent",background:o.tagBorderlessBg}}},j=R("Tag",o=>{const{lineWidth:n,fontSizeIcon:l}=o,e=o.fontSizeSM,r=`${o.lineHeightSM*e}px`,t=A(o,{tagFontSize:e,tagLineHeight:r,tagIconSize:l-2*n,tagPaddingHorizontal:8,tagBorderlessBg:o.colorFillTertiary});return[Z(t),Y(t),u(t,"success","Success"),u(t,"processing","Info"),u(t,"error","Error"),u(t,"warning","Warning")]},o=>({defaultBg:o.colorFillQuaternary,defaultColor:o.colorText}));var k=globalThis&&globalThis.__rest||function(o,n){var l={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&n.indexOf(e)<0&&(l[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(o);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(o,e[r])&&(l[e[r]]=o[e[r]]);return l};const oo=o=>{const{prefixCls:n,className:l,checked:e,onChange:r,onClick:t}=o,s=k(o,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:h}=C.exports.useContext(P),c=d=>{r==null||r(!e),t==null||t(d)},i=h("tag",n),[f,m]=j(i),y=I(i,`${i}-checkable`,{[`${i}-checkable-checked`]:e},l,m);return f(b("span",{...Object.assign({},s,{className:y,onClick:c})}))},eo=oo;var ro=globalThis&&globalThis.__rest||function(o,n){var l={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&n.indexOf(e)<0&&(l[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(o);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(o,e[r])&&(l[e[r]]=o[e[r]]);return l};const lo=(o,n)=>{const{prefixCls:l,className:e,rootClassName:r,style:t,children:s,icon:h,color:c,onClose:i,closeIcon:f,closable:m,bordered:y=!0}=o,d=ro(o,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:z,direction:w,tag:g}=C.exports.useContext(P),[B,S]=C.exports.useState(!0);C.exports.useEffect(()=>{"visible"in d&&S(d.visible)},[d.visible]);const v=V(c)||q(c),H=Object.assign(Object.assign({backgroundColor:c&&!v?c:void 0},g==null?void 0:g.style),t),a=z("tag",l),[_,M]=j(a),W=I(a,g==null?void 0:g.className,{[`${a}-${c}`]:v,[`${a}-has-color`]:c&&!v,[`${a}-hidden`]:!B,[`${a}-rtl`]:w==="rtl",[`${a}-borderless`]:!y},e,r,M),$=p=>{p.stopPropagation(),i==null||i(p),!p.defaultPrevented&&S(!1)},[,F]=K(m,f,p=>p===null?b(Q,{className:`${a}-close-icon`,onClick:$}):b("span",{className:`${a}-close-icon`,onClick:$,children:p}),null,!1),L=typeof d.onClick=="function"||s&&s.type==="a",x=h||null,E=x?T(G,{children:[x,s&&b("span",{children:s})]}):s,O=T("span",{...Object.assign({},d,{ref:n,className:W,style:H}),children:[E,F]});return _(L?b(U,{component:"Tag",children:O}):O)},N=C.exports.forwardRef(lo);N.CheckableTag=eo;const to=N;export{to as T};
