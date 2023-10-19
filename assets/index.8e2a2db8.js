import{R as U,a as v,v as O,j as i,r as $,d as V,av as q,V as J,W as K,$ as Q,a7 as Y,ab as Z,ad as k,aE as ee,aF as T}from"./index.14298e89.js";const te=U.createContext({}),E=te,ne=e=>{let{children:t}=e;return t},le=ne;function z(e){return e!=null}const oe=e=>{const{itemPrefixCls:t,component:l,span:n,className:o,style:s,labelStyle:r,contentStyle:p,bordered:m,label:d,content:c,colon:g}=e,f=l;return m?v(f,{className:O({[`${t}-item-label`]:z(d),[`${t}-item-content`]:z(c)},o),style:s,colSpan:n,children:[z(d)&&i("span",{style:r,children:d}),z(c)&&i("span",{style:p,children:c})]}):i(f,{className:O(`${t}-item`,o),style:s,colSpan:n,children:v("div",{className:`${t}-item-container`,children:[(d||d===0)&&i("span",{className:O(`${t}-item-label`,{[`${t}-item-no-colon`]:!g}),style:r,children:d}),(c||c===0)&&i("span",{className:O(`${t}-item-content`),style:p,children:c})]})})},P=oe;function M(e,t,l){let{colon:n,prefixCls:o,bordered:s}=t,{component:r,type:p,showLabel:m,showContent:d,labelStyle:c,contentStyle:g}=l;return e.map((f,u)=>{let{label:y,children:j,prefixCls:h=o,className:x,style:S,labelStyle:b,contentStyle:a,span:w=1,key:C}=f;return typeof r=="string"?i(P,{className:x,style:S,labelStyle:Object.assign(Object.assign({},c),b),contentStyle:Object.assign(Object.assign({},g),a),span:w,colon:n,component:r,itemPrefixCls:h,bordered:s,label:m?y:null,content:d?j:null},`${p}-${C||u}`):[i(P,{className:x,style:Object.assign(Object.assign(Object.assign({},c),S),b),span:1,colon:n,component:r[0],itemPrefixCls:h,bordered:s,label:y},`label-${C||u}`),i(P,{className:x,style:Object.assign(Object.assign(Object.assign({},g),S),a),span:w*2-1,component:r[1],itemPrefixCls:h,bordered:s,content:j},`content-${C||u}`)]})}const se=e=>{const t=$.exports.useContext(E),{prefixCls:l,vertical:n,row:o,index:s,bordered:r}=e;return n?v(V,{children:[i("tr",{className:`${l}-row`,children:M(o,e,Object.assign({component:"th",type:"label",showLabel:!0},t))},`label-${s}`),i("tr",{className:`${l}-row`,children:M(o,e,Object.assign({component:"td",type:"content",showContent:!0},t))},`content-${s}`)]}):i("tr",{className:`${l}-row`,children:M(o,e,Object.assign({component:r?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t))},s)},ie=se;function D(e,t,l){let n=e;return(l===void 0||l>t)&&(n=Object.assign(Object.assign({},e),{span:t})),n}const re=e=>q(e).map(t=>Object.assign({},t==null?void 0:t.props));function A(e,t){const l=[];let n=[],o=t;return e.filter(s=>s).forEach((s,r)=>{const p=s==null?void 0:s.span,m=p||1;if(r===e.length-1){n.push(D(s,o,p)),l.push(n);return}m<o?(o-=m,n.push(s)):(n.push(D(s,o,m)),l.push(n),o=t,n=[])}),l}const ae=(e,t,l)=>$.exports.useMemo(()=>Array.isArray(t)?A(t,e):A(re(l),e),[t,l,e]),ce=ae,de=e=>{const{componentCls:t,labelBg:l}=e;return{[`&${t}-bordered`]:{[`> ${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"},[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${e.padding}px ${e.paddingLG}px`,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`> ${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:l,"&::after":{display:"none"}}}},[`&${t}-middle`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${e.paddingSM}px ${e.paddingLG}px`}}},[`&${t}-small`]:{[`${t}-row`]:{[`> ${t}-item-label, > ${t}-item-content`]:{padding:`${e.paddingXS}px ${e.padding}px`}}}}}},pe=e=>{const{componentCls:t,extraColor:l,itemPaddingBottom:n,colonMarginRight:o,colonMarginLeft:s,titleMarginBottom:r}=e;return{[t]:Object.assign(Object.assign(Object.assign({},Q(e)),de(e)),{["&-rtl"]:{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:r},[`${t}-title`]:Object.assign(Object.assign({},Y),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:l,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${s}px ${o}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},me=J("Descriptions",e=>{const t=K(e,{});return[pe(t)]},e=>({labelBg:e.colorFillAlter,titleMarginBottom:e.fontSizeSM*e.lineHeightSM,itemPaddingBottom:e.padding,colonMarginRight:e.marginXS,colonMarginLeft:e.marginXXS/2,extraColor:e.colorText}));var be=globalThis&&globalThis.__rest||function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(l[n[o]]=e[n[o]]);return l};const H={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function ge(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let l=0;l<T.length;l++){const n=T[l];if(t[n]&&e[n]!==void 0)return e[n]||H[n]}return 3}const W=e=>{const{prefixCls:t,title:l,extra:n,column:o=H,colon:s=!0,bordered:r,layout:p,children:m,className:d,rootClassName:c,style:g,size:f,labelStyle:u,contentStyle:y,items:j}=e,h=be(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle","items"]),{getPrefixCls:x,direction:S,descriptions:b}=$.exports.useContext(Z),a=x("descriptions",t),[w,C]=$.exports.useState({}),I=ge(o,w),B=k(f),_=ce(I,j,m),[F,G]=me(a),R=ee();$.exports.useEffect(()=>{const L=R.subscribe(N=>{typeof o=="object"&&C(N)});return()=>{R.unsubscribe(L)}},[]);const X=$.exports.useMemo(()=>({labelStyle:u,contentStyle:y}),[u,y]);return F(i(E.Provider,{value:X,children:v("div",{...Object.assign({className:O(a,b==null?void 0:b.className,{[`${a}-${B}`]:B&&B!=="default",[`${a}-bordered`]:!!r,[`${a}-rtl`]:S==="rtl"},d,c,G),style:Object.assign(Object.assign({},b==null?void 0:b.style),g)},h),children:[(l||n)&&v("div",{className:`${a}-header`,children:[l&&i("div",{className:`${a}-title`,children:l}),n&&i("div",{className:`${a}-extra`,children:n})]}),i("div",{className:`${a}-view`,children:i("table",{children:i("tbody",{children:_.map((L,N)=>i(ie,{index:N,colon:s,prefixCls:a,vertical:p==="vertical",bordered:r,row:L},N))})})})]})}))};W.Item=le;const ue=W;export{ue as D};
