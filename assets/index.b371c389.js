import{i as s,a as g,g as Y,m as Z,r as ee,x as te,k as H,aD as re,n as w,H as se,y as ae,w as oe,P as ne}from"./index.73fee95b.js";import{u as ie}from"./useBreakpoint.25d76929.js";const G=s.exports.createContext("default"),A=e=>{let{children:a,size:r}=e;const t=s.exports.useContext(G);return g(G.Provider,{value:r||t,children:a})},ce=e=>{const{antCls:a,componentCls:r,iconCls:t,avatarBg:o,avatarColor:C,avatarSizeBase:p,avatarSizeLG:v,avatarSizeSM:m,avatarFontSizeBase:h,avatarFontSizeLG:d,avatarFontSizeSM:x,borderRadius:y,borderRadiusLG:z,borderRadiusSM:P,lineWidth:O,lineType:j}=e,f=(c,b,u)=>({width:c,height:c,lineHeight:`${c-O*2}px`,borderRadius:"50%",[`&${r}-square`]:{borderRadius:u},[`${r}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${r}-icon`]:{fontSize:b,[`> ${t}`]:{margin:0}}});return{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},ee(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:C,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${O}px ${j} transparent`,["&-image"]:{background:"transparent"},[`${a}-image-img`]:{display:"block"}}),f(p,h,y)),{["&-lg"]:Object.assign({},f(v,d,z)),["&-sm"]:Object.assign({},f(m,x,P)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},le=e=>{const{componentCls:a,avatarGroupBorderColor:r,avatarGroupSpace:t}=e;return{[`${a}-group`]:{display:"inline-flex",[`${a}`]:{borderColor:r},["> *:not(:first-child)"]:{marginInlineStart:t}}}},I=Y("Avatar",e=>{const{colorTextLightSolid:a,controlHeight:r,controlHeightLG:t,controlHeightSM:o,fontSize:C,fontSizeLG:p,fontSizeXL:v,fontSizeHeading3:m,marginXS:h,colorBorderBg:d,colorTextPlaceholder:x}=e,y=Z(e,{avatarBg:x,avatarColor:a,avatarSizeBase:r,avatarSizeLG:t,avatarSizeSM:o,avatarFontSizeBase:Math.round((p+v)/2),avatarFontSizeLG:m,avatarFontSizeSM:C,avatarGroupSpace:-h,avatarGroupBorderColor:d});return[ce(y),le(y)]});var de=globalThis&&globalThis.__rest||function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)a.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const ge=(e,a)=>{const r=s.exports.useContext(G),[t,o]=s.exports.useState(1),[C,p]=s.exports.useState(!1),[v,m]=s.exports.useState(!0),h=s.exports.useRef(null),d=s.exports.useRef(null),x=te(a,h),{getPrefixCls:y}=s.exports.useContext(H),z=()=>{if(!d.current||!h.current)return;const i=d.current.offsetWidth,l=h.current.offsetWidth;if(i!==0&&l!==0){const{gap:$=4}=e;$*2<l&&o(l-$*2<i?(l-$*2)/i:1)}};s.exports.useEffect(()=>{p(!0)},[]),s.exports.useEffect(()=>{m(!0),o(1)},[e.src]),s.exports.useEffect(()=>{z()},[e.gap]);const P=()=>{const{onError:i}=e;(i?i():void 0)!==!1&&m(!1)},{prefixCls:O,shape:j="circle",size:f="default",src:c,srcSet:b,icon:u,className:T,rootClassName:F,alt:W,draggable:_,children:N,crossOrigin:X}=e,k=de(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),n=f==="default"?r:f,q=Object.keys(typeof n=="object"?n||{}:{}).some(i=>["xs","sm","md","lg","xl","xxl"].includes(i)),B=ie(q),D=s.exports.useMemo(()=>{if(typeof n!="object")return{};const i=re.find($=>B[$]),l=n[i];return l?{width:l,height:l,lineHeight:`${l}px`,fontSize:u?l/2:18}:{}},[B,n]),S=y("avatar",O),[V,J]=I(S),K=w({[`${S}-lg`]:n==="large",[`${S}-sm`]:n==="small"}),E=s.exports.isValidElement(c),Q=w(S,K,{[`${S}-${j}`]:!!j,[`${S}-image`]:E||c&&v,[`${S}-icon`]:!!u},T,F,J),U=typeof n=="number"?{width:n,height:n,lineHeight:`${n}px`,fontSize:u?n/2:18}:{};let R;if(typeof c=="string"&&v)R=g("img",{src:c,draggable:_,srcSet:b,onError:P,alt:W,crossOrigin:X});else if(E)R=c;else if(u)R=u;else if(C||t!==1){const i=`scale(${t}) translateX(-50%)`,l={msTransform:i,WebkitTransform:i,transform:i},$=typeof n=="number"?{lineHeight:`${n}px`}:{};R=g(se,{onResize:z,children:g("span",{className:`${S}-string`,ref:d,style:Object.assign(Object.assign({},$),l),children:N})})}else R=g("span",{className:`${S}-string`,style:{opacity:0},ref:d,children:N});return delete k.onError,delete k.gap,V(g("span",{...Object.assign({},k,{style:Object.assign(Object.assign(Object.assign({},U),D),k.style),className:Q,ref:x}),children:R}))},pe=s.exports.forwardRef(ge),L=pe,fe=e=>{const{getPrefixCls:a,direction:r}=s.exports.useContext(H),{prefixCls:t,className:o,rootClassName:C,maxCount:p,maxStyle:v,size:m}=e,h=a("avatar",t),d=`${h}-group`,[x,y]=I(h),z=w(d,{[`${d}-rtl`]:r==="rtl"},o,C,y),{children:P,maxPopoverPlacement:O="top",maxPopoverTrigger:j="hover"}=e,f=ae(P).map((b,u)=>oe(b,{key:`avatar-key-${u}`})),c=f.length;if(p&&p<c){const b=f.slice(0,p),u=f.slice(p,c);return b.push(g(ne,{content:u,trigger:j,placement:O,overlayClassName:`${d}-popover`,children:g(L,{style:v,children:`+${c-p}`})},"avatar-popover-key")),x(g(A,{size:m,children:g("div",{className:z,style:e.style,children:b})}))}return x(g(A,{size:m,children:g("div",{className:z,style:e.style,children:f})}))},ue=fe,M=L;M.Group=ue;const Se=M;export{Se as A};
//# sourceMappingURL=index.b371c389.js.map
