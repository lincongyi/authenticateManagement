import{i as R,k as A,aM as D,l as X,r as u,o as T,f as I,j as C,aN as G,aO as Q,aP as U,aG as V,a as P,W as q,F as J}from"./index.e1f6c22a.js";function K(o){return typeof o!="string"?o:o.charAt(0).toUpperCase()+o.slice(1)}const b=(o,n,l)=>{const e=K(l);return{[`${o.componentCls}-${n}`]:{color:o[`color${l}`],background:o[`color${e}Bg`],borderColor:o[`color${e}Border`],[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}},Y=o=>D(o,(n,l)=>{let{textColor:e,lightBorderColor:r,lightColor:t,darkColor:a}=l;return{[`${o.componentCls}-${n}`]:{color:e,background:t,borderColor:r,"&-inverse":{color:o.colorTextLightSolid,background:a,borderColor:a},[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}}),Z=o=>{const{paddingXXS:n,lineWidth:l,tagPaddingHorizontal:e,componentCls:r}=o,t=e-l,a=n-l;return{[r]:Object.assign(Object.assign({},X(o)),{display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:t,fontSize:o.tagFontSize,lineHeight:o.tagLineHeight,whiteSpace:"nowrap",background:o.defaultBg,border:`${o.lineWidth}px ${o.lineType} ${o.colorBorder}`,borderRadius:o.borderRadiusSM,opacity:1,transition:`all ${o.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:o.defaultColor},[`${r}-close-icon`]:{marginInlineStart:a,color:o.colorTextDescription,fontSize:o.tagIconSize,cursor:"pointer",transition:`all ${o.motionDurationMid}`,"&:hover":{color:o.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${o.iconCls}-close, ${o.iconCls}-close:hover`]:{color:o.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:o.colorPrimary,backgroundColor:o.colorFillSecondary},"&:active, &-checked":{color:o.colorTextLightSolid},"&-checked":{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}},"&:active":{backgroundColor:o.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${o.iconCls} + span, > span + ${o.iconCls}`]:{marginInlineStart:t}}),[`${r}-borderless`]:{borderColor:"transparent",background:o.tagBorderlessBg}}},j=R("Tag",o=>{const{lineWidth:n,fontSizeIcon:l}=o,e=o.fontSizeSM,r=`${o.lineHeightSM*e}px`,t=A(o,{tagFontSize:e,tagLineHeight:r,tagIconSize:l-2*n,tagPaddingHorizontal:8,tagBorderlessBg:o.colorFillTertiary});return[Z(t),Y(t),b(t,"success","Success"),b(t,"processing","Info"),b(t,"error","Error"),b(t,"warning","Warning")]},o=>({defaultBg:o.colorFillQuaternary,defaultColor:o.colorText}));var k=globalThis&&globalThis.__rest||function(o,n){var l={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&n.indexOf(e)<0&&(l[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(o);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(o,e[r])&&(l[e[r]]=o[e[r]]);return l};const oo=o=>{const{prefixCls:n,className:l,checked:e,onChange:r,onClick:t}=o,a=k(o,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:h}=u.exports.useContext(T),c=d=>{r==null||r(!e),t==null||t(d)},i=h("tag",n),[f,m]=j(i),y=I(i,`${i}-checkable`,{[`${i}-checkable-checked`]:e},l,m);return f(C("span",{...Object.assign({},a,{className:y,onClick:c})}))},eo=oo;var ro=globalThis&&globalThis.__rest||function(o,n){var l={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&n.indexOf(e)<0&&(l[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(o);r<e.length;r++)n.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(o,e[r])&&(l[e[r]]=o[e[r]]);return l};const lo=(o,n)=>{const{prefixCls:l,className:e,rootClassName:r,style:t,children:a,icon:h,color:c,onClose:i,closeIcon:f,closable:m,bordered:y=!0}=o,d=ro(o,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:z,direction:w,tag:g}=u.exports.useContext(T),[B,v]=u.exports.useState(!0);u.exports.useEffect(()=>{"visible"in d&&v(d.visible)},[d.visible]);const S=G(c)||Q(c),H=Object.assign(Object.assign({backgroundColor:c&&!S?c:void 0},g==null?void 0:g.style),t),s=z("tag",l),[_,F]=j(s),M=I(s,g==null?void 0:g.className,{[`${s}-${c}`]:S,[`${s}-has-color`]:c&&!S,[`${s}-hidden`]:!B,[`${s}-rtl`]:w==="rtl",[`${s}-borderless`]:!y},e,r,F),$=p=>{p.stopPropagation(),i==null||i(p),!p.defaultPrevented&&v(!1)},[,W]=U(m,f,p=>p===null?C(V,{className:`${s}-close-icon`,onClick:$}):C("span",{className:`${s}-close-icon`,onClick:$,children:p}),null,!1),E=typeof d.onClick=="function"||a&&a.type==="a",x=h||null,L=x?P(J,{children:[x,a&&C("span",{children:a})]}):a,O=P("span",{...Object.assign({},d,{ref:n,className:M,style:H}),children:[L,W]});return _(E?C(q,{component:"Tag",children:O}):O)},N=u.exports.forwardRef(lo);N.CheckableTag=eo;const to=N;export{to as T};
