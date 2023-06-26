import{g as W,m as E,bL as R,r as A,i as p,k as P,n as T,a as C,bM as X,bN as Q,ax as U,j as O,bO as V,d as k}from"./index.803c0bcf.js";function q(o){return typeof o!="string"?o:o.charAt(0).toUpperCase()+o.slice(1)}const h=(o,l,t)=>{const e=q(t);return{[`${o.componentCls}-${l}`]:{color:o[`color${t}`],background:o[`color${e}Bg`],borderColor:o[`color${e}Border`]}}},G=o=>R(o,(l,t)=>{let{textColor:e,lightBorderColor:r,lightColor:a,darkColor:n}=t;return{[`${o.componentCls}-${l}`]:{color:e,background:a,borderColor:r,"&-inverse":{color:o.colorTextLightSolid,background:n,borderColor:n},[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}}),J=o=>{const{paddingXXS:l,lineWidth:t,tagPaddingHorizontal:e,componentCls:r}=o,a=e-t,n=l-t;return{[r]:Object.assign(Object.assign({},A(o)),{display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:a,fontSize:o.tagFontSize,lineHeight:`${o.tagLineHeight}px`,whiteSpace:"nowrap",background:o.tagDefaultBg,border:`${o.lineWidth}px ${o.lineType} ${o.colorBorder}`,borderRadius:o.borderRadiusSM,opacity:1,transition:`all ${o.motionDurationMid}`,textAlign:"start",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:o.tagDefaultColor},[`${r}-close-icon`]:{marginInlineStart:n,color:o.colorTextDescription,fontSize:o.tagIconSize,cursor:"pointer",transition:`all ${o.motionDurationMid}`,"&:hover":{color:o.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${o.iconCls}-close, ${o.iconCls}-close:hover`]:{color:o.colorTextLightSolid}},["&-checkable"]:{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:o.colorPrimary,backgroundColor:o.colorFillSecondary},"&:active, &-checked":{color:o.colorTextLightSolid},"&-checked":{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}},"&:active":{backgroundColor:o.colorPrimaryActive}},["&-hidden"]:{display:"none"},[`> ${o.iconCls} + span, > span + ${o.iconCls}`]:{marginInlineStart:a}}),[`${r}-borderless`]:{borderColor:"transparent",background:o.tagBorderlessBg}}},I=W("Tag",o=>{const{fontSize:l,lineHeight:t,lineWidth:e,fontSizeIcon:r}=o,a=Math.round(l*t),n=o.fontSizeSM,u=a-e*2,c=o.colorFillQuaternary,i=o.colorText,s=E(o,{tagFontSize:n,tagLineHeight:u,tagDefaultBg:c,tagDefaultColor:i,tagIconSize:r-2*e,tagPaddingHorizontal:8,tagBorderlessBg:o.colorFillTertiary});return[J(s),G(s),h(s,"success","Success"),h(s,"processing","Info"),h(s,"error","Error"),h(s,"warning","Warning")]});var K=globalThis&&globalThis.__rest||function(o,l){var t={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&l.indexOf(e)<0&&(t[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(o);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(o,e[r])&&(t[e[r]]=o[e[r]]);return t};const Y=o=>{const{prefixCls:l,className:t,checked:e,onChange:r,onClick:a}=o,n=K(o,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:u}=p.exports.useContext(P),c=g=>{r==null||r(!e),a==null||a(g)},i=u("tag",l),[s,b]=I(i),f=T(i,{[`${i}-checkable`]:!0,[`${i}-checkable-checked`]:e},t,b);return s(C("span",{...Object.assign({},n,{className:f,onClick:c})}))},Z=Y;var oo=globalThis&&globalThis.__rest||function(o,l){var t={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&l.indexOf(e)<0&&(t[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(o);r<e.length;r++)l.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(o,e[r])&&(t[e[r]]=o[e[r]]);return t};const eo=(o,l)=>{const{prefixCls:t,className:e,rootClassName:r,style:a,children:n,icon:u,color:c,onClose:i,closeIcon:s,closable:b=!1,bordered:f=!0}=o,g=oo(o,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:j,direction:z}=p.exports.useContext(P),[w,x]=p.exports.useState(!0);p.exports.useEffect(()=>{"visible"in g&&x(g.visible)},[g.visible]);const m=X(c)||Q(c),B=Object.assign({backgroundColor:c&&!m?c:void 0},a),d=j("tag",t),[H,M]=I(d),_=T(d,{[`${d}-${c}`]:m,[`${d}-has-color`]:c&&!m,[`${d}-hidden`]:!w,[`${d}-rtl`]:z==="rtl",[`${d}-borderless`]:!f},e,r,M),y=S=>{S.stopPropagation(),i==null||i(S),!S.defaultPrevented&&x(!1)},D=p.exports.useMemo(()=>b?s?C("span",{className:`${d}-close-icon`,onClick:y,children:s}):C(U,{className:`${d}-close-icon`,onClick:y}):null,[b,s,d,y]),F=typeof g.onClick=="function"||n&&n.type==="a",$=u||null,L=$?O(k,{children:[$,C("span",{children:n})]}):n,v=O("span",{...Object.assign({},g,{ref:l,className:_,style:B}),children:[L,D]});return H(F?C(V,{children:v}):v)},N=p.exports.forwardRef(eo);N.CheckableTag=Z;const to=N;export{to as T};
//# sourceMappingURL=index.ce50a28a.js.map
