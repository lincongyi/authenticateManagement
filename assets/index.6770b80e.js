import{r as o,V as ee,W as te,$ as re,ap as se,ab as H,aF as oe,v as A,j as g,an as ne,av as ae,au as ie,P as le}from"./index.99f96971.js";import{u as ce}from"./useBreakpoint.1aad708c.js";const de=o.exports.createContext({size:"default",shape:void 0}),E=de,ge=e=>{const{antCls:s,componentCls:r,iconCls:t,avatarBg:n,avatarColor:C,containerSize:m,containerSizeLG:c,containerSizeSM:x,textFontSize:p,textFontSizeLG:b,textFontSizeSM:N,borderRadius:u,borderRadiusLG:f,borderRadiusSM:z,lineWidth:y,lineType:R}=e,$=(v,d,O)=>({width:v,height:v,lineHeight:`${v-y*2}px`,borderRadius:"50%",[`&${r}-square`]:{borderRadius:O},[`${r}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${r}-icon`]:{fontSize:d,[`> ${t}`]:{margin:0}}});return{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},re(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:C,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:n,border:`${y}px ${R} transparent`,["&-image"]:{background:"transparent"},[`${s}-image-img`]:{display:"block"}}),$(m,p,u)),{["&-lg"]:Object.assign({},$(c,b,f)),["&-sm"]:Object.assign({},$(x,N,z)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},pe=e=>{const{componentCls:s,groupBorderColor:r,groupOverlapping:t,groupSpace:n}=e;return{[`${s}-group`]:{display:"inline-flex",[`${s}`]:{borderColor:r},["> *:not(:first-child)"]:{marginInlineStart:t}},[`${s}-group-popover`]:{[`${s} + ${s}`]:{marginInlineStart:n}}}},L=ee("Avatar",e=>{const{colorTextLightSolid:s,colorTextPlaceholder:r}=e,t=te(e,{avatarBg:r,avatarColor:s});return[ge(t),pe(t)]},e=>{const{controlHeight:s,controlHeightLG:r,controlHeightSM:t,fontSize:n,fontSizeLG:C,fontSizeXL:m,fontSizeHeading3:c,marginXS:x,marginXXS:p,colorBorderBg:b}=e;return{containerSize:s,containerSizeLG:r,containerSizeSM:t,textFontSize:Math.round((C+m)/2),textFontSizeLG:c,textFontSizeSM:n,groupSpace:p,groupOverlapping:-x,groupBorderColor:b}});var ue=globalThis&&globalThis.__rest||function(e,s){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&s.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)s.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r};const fe=(e,s)=>{const[r,t]=o.exports.useState(1),[n,C]=o.exports.useState(!1),[m,c]=o.exports.useState(!0),x=o.exports.useRef(null),p=o.exports.useRef(null),b=se(s,x),{getPrefixCls:N,avatar:u}=o.exports.useContext(H),f=o.exports.useContext(E),z=()=>{if(!p.current||!x.current)return;const a=p.current.offsetWidth,l=x.current.offsetWidth;if(a!==0&&l!==0){const{gap:j=4}=e;j*2<l&&t(l-j*2<a?(l-j*2)/a:1)}};o.exports.useEffect(()=>{C(!0)},[]),o.exports.useEffect(()=>{c(!0),t(1)},[e.src]),o.exports.useEffect(z,[e.gap]);const y=()=>{const{onError:a}=e;(a==null?void 0:a())!==!1&&c(!1)},{prefixCls:R,shape:$,size:v="default",src:d,srcSet:O,icon:h,className:k,rootClassName:W,alt:_,draggable:X,children:I,crossOrigin:V}=e,w=ue(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),i=v==="default"?f==null?void 0:f.size:v,q=Object.keys(typeof i=="object"?i||{}:{}).some(a=>["xs","sm","md","lg","xl","xxl"].includes(a)),G=ce(q),D=o.exports.useMemo(()=>{if(typeof i!="object")return{};const a=oe.find(j=>G[j]),l=i[a];return l?{width:l,height:l,lineHeight:`${l}px`,fontSize:h?l/2:18}:{}},[G,i]),S=N("avatar",R),[J,K]=L(S),Q=A({[`${S}-lg`]:i==="large",[`${S}-sm`]:i==="small"}),M=o.exports.isValidElement(d),U=$||(f==null?void 0:f.shape)||"circle",Y=A(S,Q,u==null?void 0:u.className,`${S}-${U}`,{[`${S}-image`]:M||d&&m,[`${S}-icon`]:!!h},k,W,K),Z=typeof i=="number"?{width:i,height:i,lineHeight:`${i}px`,fontSize:h?i/2:18}:{};let P;if(typeof d=="string"&&m)P=g("img",{src:d,draggable:X,srcSet:O,onError:y,alt:_,crossOrigin:V});else if(M)P=d;else if(h)P=h;else if(n||r!==1){const a=`scale(${r}) translateX(-50%)`,l={msTransform:a,WebkitTransform:a,transform:a},j=typeof i=="number"?{lineHeight:`${i}px`}:{};P=g(ne,{onResize:z,children:g("span",{className:`${S}-string`,ref:p,style:Object.assign(Object.assign({},j),l),children:I})})}else P=g("span",{className:`${S}-string`,style:{opacity:0},ref:p,children:I});return delete w.onError,delete w.gap,J(g("span",{...Object.assign({},w,{style:Object.assign(Object.assign(Object.assign(Object.assign({},Z),D),u==null?void 0:u.style),w.style),className:Y,ref:b}),children:P}))},he=o.exports.forwardRef(fe),T=he,F=e=>{const{size:s,shape:r}=o.exports.useContext(E),t=o.exports.useMemo(()=>({size:e.size||s,shape:e.shape||r}),[e.size,e.shape,s,r]);return g(E.Provider,{value:t,children:e.children})},me=e=>{const{getPrefixCls:s,direction:r}=o.exports.useContext(H),{prefixCls:t,className:n,rootClassName:C,style:m,maxCount:c,maxStyle:x,size:p,shape:b,maxPopoverPlacement:N="top",maxPopoverTrigger:u="hover",children:f}=e,z=s("avatar",t),y=`${z}-group`,[R,$]=L(z),v=A(y,{[`${y}-rtl`]:r==="rtl"},n,C,$),d=ae(f).map((h,k)=>ie(h,{key:`avatar-key-${k}`})),O=d.length;if(c&&c<O){const h=d.slice(0,c),k=d.slice(c,O);return h.push(g(le,{content:k,trigger:u,placement:N,overlayClassName:`${y}-popover`,children:g(T,{style:x,children:`+${O-c}`})},"avatar-popover-key")),R(g(F,{shape:b,size:p,children:g("div",{className:v,style:m,children:h})}))}return R(g(F,{shape:b,size:p,children:g("div",{className:v,style:m,children:d})}))},xe=me,B=T;B.Group=xe;const be=B;export{be as A};
