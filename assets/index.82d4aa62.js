import{k as s,a as g,h as Y,m as Z,r as ee,z as te,n as I,aF as re,q as G,L as se,B as ae,y as oe,P as ne}from"./index.ce7f2286.js";import{u as ie}from"./useBreakpoint.28ed45cc.js";const N=s.exports.createContext("default"),A=e=>{let{children:a,size:r}=e;const t=s.exports.useContext(N);return g(N.Provider,{value:r||t,children:a})},ce=e=>{const{antCls:a,componentCls:r,iconCls:t,avatarBg:o,avatarColor:z,avatarSizeBase:p,avatarSizeLG:v,avatarSizeSM:m,avatarFontSizeBase:h,avatarFontSizeLG:d,avatarFontSizeSM:x,borderRadius:y,borderRadiusLG:C,borderRadiusSM:P,lineWidth:O,lineType:j}=e,f=(c,b,u)=>({width:c,height:c,lineHeight:`${c-O*2}px`,borderRadius:"50%",[`&${r}-square`]:{borderRadius:u},[`${r}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${r}-icon`]:{fontSize:b,[`> ${t}`]:{margin:0}}});return{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},ee(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:z,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${O}px ${j} transparent`,["&-image"]:{background:"transparent"},[`${a}-image-img`]:{display:"block"}}),f(p,h,y)),{["&-lg"]:Object.assign({},f(v,d,C)),["&-sm"]:Object.assign({},f(m,x,P)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},le=e=>{const{componentCls:a,avatarGroupBorderColor:r,avatarGroupSpace:t}=e;return{[`${a}-group`]:{display:"inline-flex",[`${a}`]:{borderColor:r},["> *:not(:first-child)"]:{marginInlineStart:t}}}},L=Y("Avatar",e=>{const{colorTextLightSolid:a,controlHeight:r,controlHeightLG:t,controlHeightSM:o,fontSize:z,fontSizeLG:p,fontSizeXL:v,fontSizeHeading3:m,marginXS:h,colorBorderBg:d,colorTextPlaceholder:x}=e,y=Z(e,{avatarBg:x,avatarColor:a,avatarSizeBase:r,avatarSizeLG:t,avatarSizeSM:o,avatarFontSizeBase:Math.round((p+v)/2),avatarFontSizeLG:m,avatarFontSizeSM:z,avatarGroupSpace:-h,avatarGroupBorderColor:d});return[ce(y),le(y)]});var de=globalThis&&globalThis.__rest||function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)a.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};const ge=(e,a)=>{const r=s.exports.useContext(N),[t,o]=s.exports.useState(1),[z,p]=s.exports.useState(!1),[v,m]=s.exports.useState(!0),h=s.exports.useRef(null),d=s.exports.useRef(null),x=te(a,h),{getPrefixCls:y}=s.exports.useContext(I),C=()=>{if(!d.current||!h.current)return;const i=d.current.offsetWidth,l=h.current.offsetWidth;if(i!==0&&l!==0){const{gap:$=4}=e;$*2<l&&o(l-$*2<i?(l-$*2)/i:1)}};s.exports.useEffect(()=>{p(!0)},[]),s.exports.useEffect(()=>{m(!0),o(1)},[e.src]),s.exports.useEffect(()=>{C()},[e.gap]);const P=()=>{const{onError:i}=e;(i?i():void 0)!==!1&&m(!1)},{prefixCls:O,shape:j="circle",size:f="default",src:c,srcSet:b,icon:u,className:M,rootClassName:T,alt:W,draggable:_,children:w,crossOrigin:X}=e,k=de(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),n=f==="default"?r:f,q=Object.keys(typeof n=="object"?n||{}:{}).some(i=>["xs","sm","md","lg","xl","xxl"].includes(i)),B=ie(q),V=s.exports.useMemo(()=>{if(typeof n!="object")return{};const i=re.find($=>B[$]),l=n[i];return l?{width:l,height:l,lineHeight:`${l}px`,fontSize:u?l/2:18}:{}},[B,n]),S=y("avatar",O),[D,J]=L(S),K=G({[`${S}-lg`]:n==="large",[`${S}-sm`]:n==="small"}),E=s.exports.isValidElement(c),Q=G(S,K,{[`${S}-${j}`]:!!j,[`${S}-image`]:E||c&&v,[`${S}-icon`]:!!u},M,T,J),U=typeof n=="number"?{width:n,height:n,lineHeight:`${n}px`,fontSize:u?n/2:18}:{};let R;if(typeof c=="string"&&v)R=g("img",{src:c,draggable:_,srcSet:b,onError:P,alt:W,crossOrigin:X});else if(E)R=c;else if(u)R=u;else if(z||t!==1){const i=`scale(${t}) translateX(-50%)`,l={msTransform:i,WebkitTransform:i,transform:i},$=typeof n=="number"?{lineHeight:`${n}px`}:{};R=g(se,{onResize:C,children:g("span",{className:`${S}-string`,ref:d,style:Object.assign(Object.assign({},$),l),children:w})})}else R=g("span",{className:`${S}-string`,style:{opacity:0},ref:d,children:w});return delete k.onError,delete k.gap,D(g("span",{...Object.assign({},k,{style:Object.assign(Object.assign(Object.assign({},U),V),k.style),className:Q,ref:x}),children:R}))},pe=s.exports.forwardRef(ge),F=pe,fe=e=>{const{getPrefixCls:a,direction:r}=s.exports.useContext(I),{prefixCls:t,className:o,rootClassName:z,maxCount:p,maxStyle:v,size:m}=e,h=a("avatar",t),d=`${h}-group`,[x,y]=L(h),C=G(d,{[`${d}-rtl`]:r==="rtl"},o,z,y),{children:P,maxPopoverPlacement:O="top",maxPopoverTrigger:j="hover"}=e,f=ae(P).map((b,u)=>oe(b,{key:`avatar-key-${u}`})),c=f.length;if(p&&p<c){const b=f.slice(0,p),u=f.slice(p,c);return b.push(g(ne,{content:u,trigger:j,placement:O,overlayClassName:`${d}-popover`,children:g(F,{style:v,children:`+${c-p}`})},"avatar-popover-key")),x(g(A,{size:m,children:g("div",{className:C,style:e.style,children:b})}))}return x(g(A,{size:m,children:g("div",{className:C,style:e.style,children:f})}))},ue=fe,H=F;H.Group=ue;const Se=H;export{Se as A};
//# sourceMappingURL=index.82d4aa62.js.map
