import{j as C,q as S,a as r,k as u,e as W,h as _,m as F,r as G,af as X,n as U,aE as q,aF as T,B as V,y as J}from"./index.d93c8983.js";const K=e=>{let{children:t}=e;return t},Q=K;function P(e){return e!=null}const Y=e=>{let{itemPrefixCls:t,component:l,span:n,className:o,style:i,labelStyle:s,contentStyle:m,bordered:p,label:c,content:a,colon:g}=e;const b=l;return p?C(b,{className:S({[`${t}-item-label`]:P(c),[`${t}-item-content`]:P(a)},o),style:i,colSpan:n,children:[P(c)&&r("span",{style:s,children:c}),P(a)&&r("span",{style:m,children:a})]}):r(b,{className:S(`${t}-item`,o),style:i,colSpan:n,children:C("div",{className:`${t}-item-container`,children:[(c||c===0)&&r("span",{className:S(`${t}-item-label`,{[`${t}-item-no-colon`]:!g}),style:s,children:c}),(a||a===0)&&r("span",{className:S(`${t}-item-content`),style:m,children:a})]})})},L=Y;function B(e,t,l){let{colon:n,prefixCls:o,bordered:i}=t,{component:s,type:m,showLabel:p,showContent:c,labelStyle:a,contentStyle:g}=l;return e.map((b,f)=>{let{props:{label:h,children:w,prefixCls:y=o,className:$,style:d,labelStyle:O,contentStyle:v,span:j=1},key:x}=b;return typeof s=="string"?r(L,{className:$,style:d,labelStyle:Object.assign(Object.assign({},a),O),contentStyle:Object.assign(Object.assign({},g),v),span:j,colon:n,component:s,itemPrefixCls:y,bordered:i,label:p?h:null,content:c?w:null},`${m}-${x||f}`):[r(L,{className:$,style:Object.assign(Object.assign(Object.assign({},a),d),O),span:1,colon:n,component:s[0],itemPrefixCls:y,bordered:i,label:h},`label-${x||f}`),r(L,{className:$,style:Object.assign(Object.assign(Object.assign({},g),d),v),span:j*2-1,component:s[1],itemPrefixCls:y,bordered:i,content:w},`content-${x||f}`)]})}const Z=e=>{const t=u.exports.useContext(E),{prefixCls:l,vertical:n,row:o,index:i,bordered:s}=e;return n?C(W,{children:[r("tr",{className:`${l}-row`,children:B(o,e,Object.assign({component:"th",type:"label",showLabel:!0},t))},`label-${i}`),r("tr",{className:`${l}-row`,children:B(o,e,Object.assign({component:"td",type:"content",showContent:!0},t))},`content-${i}`)]}):r("tr",{className:`${l}-row`,children:B(o,e,Object.assign({component:s?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t))},i)},k=Z,ee=e=>{const{componentCls:t,descriptionsSmallPadding:l,descriptionsDefaultPadding:n,descriptionsMiddlePadding:o,descriptionsBg:i}=e;return{[`&${t}-bordered`]:{[`${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${t}-item-label, ${t}-item-content`]:{padding:n,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:i,"&::after":{display:"none"}},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${t}-middle`]:{[`${t}-item-label, ${t}-item-content`]:{padding:o}},[`&${t}-small`]:{[`${t}-item-label, ${t}-item-content`]:{padding:l}}}}},te=e=>{const{componentCls:t,descriptionsExtraColor:l,descriptionItemPaddingBottom:n,descriptionsItemLabelColonMarginRight:o,descriptionsItemLabelColonMarginLeft:i,descriptionsTitleMarginBottom:s}=e;return{[t]:Object.assign(Object.assign(Object.assign({},G(e)),ee(e)),{["&-rtl"]:{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:s},[`${t}-title`]:Object.assign(Object.assign({},X),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:l,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${i}px ${o}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},ne=_("Descriptions",e=>{const t=e.colorFillAlter,l=e.fontSizeSM*e.lineHeightSM,n=e.colorText,o=`${e.paddingXS}px ${e.padding}px`,i=`${e.padding}px ${e.paddingLG}px`,s=`${e.paddingSM}px ${e.paddingLG}px`,m=e.padding,p=e.marginXS,c=e.marginXXS/2,a=F(e,{descriptionsBg:t,descriptionsTitleMarginBottom:l,descriptionsExtraColor:n,descriptionItemPaddingBottom:m,descriptionsSmallPadding:o,descriptionsDefaultPadding:i,descriptionsMiddlePadding:s,descriptionsItemLabelColonMarginRight:p,descriptionsItemLabelColonMarginLeft:c});return[te(a)]});var le=globalThis&&globalThis.__rest||function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(l[n[o]]=e[n[o]]);return l};const E=u.exports.createContext({}),D={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function oe(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let l=0;l<T.length;l++){const n=T[l];if(t[n]&&e[n]!==void 0)return e[n]||D[n]}return 3}function z(e,t,l){let n=e;return(l===void 0||l>t)&&(n=J(e,{span:t})),n}function ie(e,t){const l=V(e).filter(s=>s),n=[];let o=[],i=t;return l.forEach((s,m)=>{var p;const c=(p=s.props)===null||p===void 0?void 0:p.span,a=c||1;if(m===l.length-1){o.push(z(s,i,c)),n.push(o);return}a<i?(i-=a,o.push(s)):(o.push(z(s,i,a)),n.push(o),i=t,o=[])}),n}function se(e){var{prefixCls:t,title:l,extra:n,column:o=D,colon:i=!0,bordered:s,layout:m,children:p,className:c,rootClassName:a,style:g,size:b,labelStyle:f,contentStyle:h}=e,w=le(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle"]);const{getPrefixCls:y,direction:$}=u.exports.useContext(U),d=y("descriptions",t),[O,v]=u.exports.useState({}),j=oe(o,O),[x,R]=ne(d),M=q();u.exports.useEffect(()=>{const I=M.subscribe(N=>{typeof o=="object"&&v(N)});return()=>{M.unsubscribe(I)}},[]);const H=ie(p,j),A=u.exports.useMemo(()=>({labelStyle:f,contentStyle:h}),[f,h]);return x(r(E.Provider,{value:A,children:C("div",{...Object.assign({className:S(d,{[`${d}-${b}`]:b&&b!=="default",[`${d}-bordered`]:!!s,[`${d}-rtl`]:$==="rtl"},c,a,R),style:g},w),children:[(l||n)&&C("div",{className:`${d}-header`,children:[l&&r("div",{className:`${d}-title`,children:l}),n&&r("div",{className:`${d}-extra`,children:n})]}),r("div",{className:`${d}-view`,children:r("table",{children:r("tbody",{children:H.map((I,N)=>r(k,{index:N,colon:i,prefixCls:d,vertical:m==="vertical",bordered:s,row:I},N))})})})]})}))}se.Item=Q;export{se as D};
//# sourceMappingURL=index.769516a4.js.map
