import{g as dt,m as ut,K as P,bi as U,r as Y,i as S,k as A,bj as G,n as N,j as E,a as x,w as J,av as mt}from"./index.bd1b03b0.js";const bt=new P("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),gt=new P("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),pt=new P("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),ft=new P("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),ht=new P("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),$t=new P("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),Ct=t=>{const{componentCls:e,iconCls:r,antCls:o,badgeFontHeight:n,badgeShadowSize:s,badgeHeightSm:a,motionDurationSlow:d,badgeStatusSize:g,marginXS:C,badgeRibbonOffset:i}=t,l=`${o}-scroll-number`,c=`${o}-ribbon`,m=`${o}-ribbon-wrapper`,p=U(t,(b,u)=>{let{darkColor:$}=u;return{[`${e}-color-${b}`]:{background:$}}}),h=U(t,(b,u)=>{let{darkColor:$}=u;return{[`&${c}-color-${b}`]:{background:$,color:$}}});return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},Y(t)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${e}-count`]:{zIndex:t.badgeZIndex,minWidth:t.badgeHeight,height:t.badgeHeight,color:t.badgeTextColor,fontWeight:t.badgeFontWeight,fontSize:t.badgeFontSize,lineHeight:`${t.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:t.badgeColor,borderRadius:t.badgeHeight/2,boxShadow:`0 0 0 ${s}px ${t.badgeShadowColor}`,transition:`background ${t.motionDurationMid}`,a:{color:t.badgeTextColor},"a:hover":{color:t.badgeTextColor},"a:hover &":{background:t.badgeColorHover}},[`${e}-count-sm`]:{minWidth:a,height:a,fontSize:t.badgeFontSizeSm,lineHeight:`${a}px`,borderRadius:a/2},[`${e}-multiple-words`]:{padding:`0 ${t.paddingXS}px`},[`${e}-dot`]:{zIndex:t.badgeZIndex,width:t.badgeDotSize,minWidth:t.badgeDotSize,height:t.badgeDotSize,background:t.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${s}px ${t.badgeShadowColor}`},[`${e}-dot${l}`]:{transition:`background ${d}`},[`${e}-count, ${e}-dot, ${l}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`${r}-spin`]:{animationName:$t,animationDuration:t.motionDurationMid,animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${e}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${e}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:g,height:g,verticalAlign:"middle",borderRadius:"50%"},[`${e}-status-success`]:{backgroundColor:t.colorSuccess},[`${e}-status-processing`]:{position:"relative",color:t.colorPrimary,backgroundColor:t.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:s,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:bt,animationDuration:t.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${e}-status-default`]:{backgroundColor:t.colorTextPlaceholder},[`${e}-status-error`]:{backgroundColor:t.colorError},[`${e}-status-warning`]:{backgroundColor:t.colorWarning},[`${e}-status-text`]:{marginInlineStart:C,color:t.colorText,fontSize:t.fontSize}}}),p),{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:gt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`${e}-zoom-leave`]:{animationName:pt,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack,animationFillMode:"both"},[`&${e}-not-a-wrapper`]:{[`${e}-zoom-appear, ${e}-zoom-enter`]:{animationName:ft,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`${e}-zoom-leave`]:{animationName:ht,animationDuration:t.motionDurationSlow,animationTimingFunction:t.motionEaseOutBack},[`&:not(${e}-status)`]:{verticalAlign:"middle"},[`${l}-custom-component, ${e}-count`]:{transform:"none"},[`${l}-custom-component, ${l}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${l}`]:{overflow:"hidden",[`${l}-only`]:{position:"relative",display:"inline-block",height:t.badgeHeight,transition:`all ${t.motionDurationSlow} ${t.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${l}-only-unit`]:{height:t.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${l}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${e}-count, ${e}-dot, ${l}-custom-component`]:{transform:"translate(-50%, -50%)"}}}),[`${m}`]:{position:"relative"},[`${c}`]:Object.assign(Object.assign(Object.assign(Object.assign({},Y(t)),{position:"absolute",top:C,padding:`0 ${t.paddingXS}px`,color:t.colorPrimary,lineHeight:`${n}px`,whiteSpace:"nowrap",backgroundColor:t.colorPrimary,borderRadius:t.borderRadiusSM,[`${c}-text`]:{color:t.colorTextLightSolid},[`${c}-corner`]:{position:"absolute",top:"100%",width:i,height:i,color:"currentcolor",border:`${i/2}px solid`,transform:t.badgeRibbonCornerTransform,transformOrigin:"top",filter:t.badgeRibbonCornerFilter}}),h),{[`&${c}-placement-end`]:{insetInlineEnd:-i,borderEndEndRadius:0,[`${c}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${c}-placement-start`]:{insetInlineStart:-i,borderEndStartRadius:0,[`${c}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}},Q=dt("Badge",t=>{const{fontSize:e,lineHeight:r,fontSizeSM:o,lineWidth:n,marginXS:s,colorBorderBg:a}=t,d=Math.round(e*r),g=n,C="auto",i=d-2*g,l=t.colorBgContainer,c="normal",m=o,p=t.colorError,h=t.colorErrorHover,b=e,u=o/2,$=o,O=o/2,z=ut(t,{badgeFontHeight:d,badgeShadowSize:g,badgeZIndex:C,badgeHeight:i,badgeTextColor:l,badgeFontWeight:c,badgeFontSize:m,badgeColor:p,badgeColorHover:h,badgeShadowColor:a,badgeHeightSm:b,badgeDotSize:u,badgeFontSizeSm:$,badgeStatusSize:O,badgeProcessingDuration:"1.2s",badgeRibbonOffset:s,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return[Ct(z)]}),St=t=>{let{className:e,prefixCls:r,style:o,color:n,children:s,text:a,placement:d="end"}=t;const{getPrefixCls:g,direction:C}=S.exports.useContext(A),i=g("ribbon",r),l=G(n,!1),c=N(i,`${i}-placement-${d}`,{[`${i}-rtl`]:C==="rtl",[`${i}-color-${n}`]:l},e),[m,p]=Q(i),h={},b={};return n&&!l&&(h.background=n,b.color=n),m(E("div",{className:N(`${i}-wrapper`,p),children:[s,E("div",{className:N(c,p),style:Object.assign(Object.assign({},h),o),children:[x("span",{className:`${i}-text`,children:a}),x("div",{className:`${i}-corner`,style:b})]})]}))},xt=St;function q(t){let{prefixCls:e,value:r,current:o,offset:n=0}=t,s;return n&&(s={position:"absolute",top:`${n}00%`,left:0}),x("span",{style:s,className:N(`${e}-only-unit`,{current:o}),children:r})}function yt(t,e,r){let o=t,n=0;for(;(o+10)%10!==e;)o+=r,n+=r;return n}function Nt(t){const{prefixCls:e,count:r,value:o}=t,n=Number(o),s=Math.abs(r),[a,d]=S.exports.useState(n),[g,C]=S.exports.useState(s),i=()=>{d(n),C(s)};S.exports.useEffect(()=>{const m=setTimeout(()=>{i()},1e3);return()=>{clearTimeout(m)}},[n]);let l,c;if(a===n||Number.isNaN(n)||Number.isNaN(a))l=[x(q,{...Object.assign({},t,{key:n,current:!0})})],c={transition:"none"};else{l=[];const m=n+10,p=[];for(let u=n;u<=m;u+=1)p.push(u);const h=p.findIndex(u=>u%10===a);l=p.map((u,$)=>{const O=u%10;return x(q,{...Object.assign({},t,{key:u,value:O,offset:$-h,current:$===h})})});const b=g<s?1:-1;c={transform:`translateY(${-yt(a,n,b)}00%)`}}return x("span",{className:`${e}-only`,style:c,onTransitionEnd:i,children:l})}var Ot=globalThis&&globalThis.__rest||function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(r[o[n]]=t[o[n]]);return r};const wt=S.exports.forwardRef((t,e)=>{var{prefixCls:r,count:o,className:n,motionClassName:s,style:a,title:d,show:g,component:C="sup",children:i}=t,l=Ot(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]);const{getPrefixCls:c}=S.exports.useContext(A),m=c("scroll-number",r),p=Object.assign(Object.assign({},l),{"data-show":g,style:a,className:N(m,n,s),title:d});let h=o;if(o&&Number(o)%1===0){const b=String(o).split("");h=b.map((u,$)=>x(Nt,{prefixCls:m,count:Number(o),value:u},b.length-$))}return a&&a.borderColor&&(p.style=Object.assign(Object.assign({},a),{boxShadow:`0 0 0 1px ${a.borderColor} inset`})),i?J(i,b=>({className:N(`${m}-custom-component`,b==null?void 0:b.className,s)})):x(C,{...Object.assign({},p,{ref:e}),children:h})}),vt=wt;var jt=globalThis&&globalThis.__rest||function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(t);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(t,o[n])&&(r[o[n]]=t[o[n]]);return r};const Pt=(t,e)=>{const{prefixCls:r,scrollNumberPrefixCls:o,children:n,status:s,text:a,color:d,count:g=null,overflowCount:C=99,dot:i=!1,size:l="default",title:c,offset:m,style:p,className:h,rootClassName:b,showZero:u=!1}=t,$=jt(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","showZero"]),{getPrefixCls:O,direction:z}=S.exports.useContext(A),f=O("badge",r),[_,tt]=Q(f),H=g>C?`${C}+`:g,R=H==="0"||H===0,et=g===null||R&&!u,F=(s!=null||d!=null)&&et,I=i&&!R,w=I?"":H,v=S.exports.useMemo(()=>(w==null||w===""||R&&!u)&&!I,[w,R,u,I]),L=S.exports.useRef(g);v||(L.current=g);const j=L.current,V=S.exports.useRef(w);v||(V.current=w);const W=V.current,X=S.exports.useRef(I);v||(X.current=I);const T=S.exports.useMemo(()=>{if(!m)return Object.assign({},p);const y={marginTop:m[1]};return z==="rtl"?y.left=parseInt(m[0],10):y.right=-parseInt(m[0],10),Object.assign(Object.assign({},y),p)},[z,m,p]),ot=c!=null?c:typeof j=="string"||typeof j=="number"?j:void 0,nt=v||!a?null:x("span",{className:`${f}-status-text`,children:a}),rt=!j||typeof j!="object"?void 0:J(j,y=>({style:Object.assign(Object.assign({},T),y.style)})),B=G(d,!1),st=N({[`${f}-status-dot`]:F,[`${f}-status-${s}`]:!!s,[`${f}-color-${d}`]:B}),Z={};d&&!B&&(Z.color=d,Z.background=d);const K=N(f,{[`${f}-status`]:F,[`${f}-not-a-wrapper`]:!n,[`${f}-rtl`]:z==="rtl"},h,b,tt);if(!n&&F){const y=T.color;return _(E("span",{...Object.assign({},$,{className:K,style:T}),children:[x("span",{className:st,style:Z}),a&&x("span",{style:{color:y},className:`${f}-status-text`,children:a})]}))}return _(E("span",{...Object.assign({ref:e},$,{className:K}),children:[n,x(mt,{visible:!v,motionName:`${f}-zoom`,motionAppear:!1,motionDeadline:1e3,children:y=>{let{className:at,ref:it}=y;const lt=O("scroll-number",o),M=X.current,ct=N({[`${f}-dot`]:M,[`${f}-count`]:!M,[`${f}-count-sm`]:l==="small",[`${f}-multiple-words`]:!M&&W&&W.toString().length>1,[`${f}-status-${s}`]:!!s,[`${f}-color-${d}`]:B});let D=Object.assign({},T);return d&&!B&&(D=D||{},D.background=d),x(vt,{prefixCls:lt,show:!v,motionClassName:at,className:ct,count:W,title:ot,style:D,ref:it,children:rt},"scrollNumber")}}),nt]}))},k=S.exports.forwardRef(Pt);k.Ribbon=xt;const It=k;export{It as B};
//# sourceMappingURL=index.9eaf52c4.js.map
