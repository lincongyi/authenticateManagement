import{k as s,a as g,A as je,t as te,v as ne,w as at,x as ct,h as dt,q as oe,j as re,T as pt,y as ut,n as $e,z as Re,B as Ie,E as ee,e as ce,G as de,H as ft,p as Pe,J as gt,L as yt,M as mt}from"./index.d93c8983.js";import{E as bt}from"./EditOutlined.60d0cc2d.js";import{o as Le,i as xe}from"./styleChecker.a18a23d6.js";var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const ht=vt;var _e=function(t,o){return g(je,{...te(te({},t),{},{ref:o,icon:ht})})};_e.displayName="CopyOutlined";const xt=s.exports.forwardRef(_e);var St={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const Et=St;var Ne=function(t,o){return g(je,{...te(te({},t),{},{ref:o,icon:Et})})};Ne.displayName="EnterOutlined";const Ot=s.exports.forwardRef(Ne);var Ct=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const wt={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Tt=s.exports.forwardRef((e,t)=>{const o=y=>{const{keyCode:l}=y;l===ne.ENTER&&y.preventDefault()},n=y=>{const{keyCode:l}=y,{onClick:b}=e;l===ne.ENTER&&b&&b()},{style:r,noStyle:u,disabled:m}=e,c=Ct(e,["style","noStyle","disabled"]);let d={};return u||(d=Object.assign({},wt)),m&&(d.pointerEvents="none"),d=Object.assign(Object.assign({},d),r),g("div",{...Object.assign({role:"button",tabIndex:0,ref:t},c,{onKeyDown:o,onKeyUp:n,style:d})})}),Se=Tt;var jt=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||o.forEach(function(r){e.addRange(r)}),t&&t.focus()}},$t=jt,Ee={"text/plain":"Text","text/html":"Url",default:"Text"},Rt="Copy to clipboard: #{key}, Enter";function It(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Pt(e,t){var o,n,r,u,m,c,d=!1;t||(t={}),o=t.debug||!1;try{r=$t(),u=document.createRange(),m=document.getSelection(),c=document.createElement("span"),c.textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(l){if(l.stopPropagation(),t.format)if(l.preventDefault(),typeof l.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var b=Ee[t.format]||Ee.default;window.clipboardData.setData(b,e)}else l.clipboardData.clearData(),l.clipboardData.setData(t.format,e);t.onCopy&&(l.preventDefault(),t.onCopy(l.clipboardData))}),document.body.appendChild(c),u.selectNodeContents(c),m.addRange(u);var y=document.execCommand("copy");if(!y)throw new Error("copy command was unsuccessful");d=!0}catch(l){o&&console.error("unable to copy using execCommand: ",l),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(b){o&&console.error("unable to copy using clipboardData: ",b),o&&console.error("falling back to prompt"),n=It("message"in t?t.message:Rt),window.prompt(n,e)}}finally{m&&(typeof m.removeRange=="function"?m.removeRange(u):m.removeAllRanges()),c&&document.body.removeChild(c),r()}return d}var Lt=Pt;const _t=(e,t,o,n)=>{const{sizeMarginHeadingVerticalEnd:r,fontWeightStrong:u}=n;return{marginBottom:r,color:o,fontWeight:u,fontSize:e,lineHeight:t}},Nt=e=>{const t=[1,2,3,4,5],o={};return t.forEach(n=>{o[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `]=_t(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)}),o},Dt=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},Le(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},kt=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:at[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),zt=e=>{const{componentCls:t}=e,n=ct(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-n,marginBottom:`calc(1em - ${n}px)`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},Ht=e=>({"&-copy-success":{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}}}),Mt=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),Bt=e=>{const{componentCls:t,sizeMarginHeadingVerticalStart:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},Nt(e)),{[`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]:{marginTop:o},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:o}}}),kt(e)),Dt(e)),{[`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]:Object.assign(Object.assign({},Le(e)),{marginInlineStart:e.marginXXS})}),zt(e)),Ht(e)),Mt()),{"&-rtl":{direction:"rtl"}})}},De=dt("Typography",e=>[Bt(e)],{sizeMarginHeadingVerticalStart:"1.2em",sizeMarginHeadingVerticalEnd:"0.5em"}),At=e=>{let{prefixCls:t,"aria-label":o,className:n,style:r,direction:u,maxLength:m,autoSize:c=!0,value:d,onSave:y,onCancel:l,onEnd:b,component:v,enterIcon:$=g(Ot,{})}=e;const E=s.exports.useRef(null),w=s.exports.useRef(!1),D=s.exports.useRef(),[P,T]=s.exports.useState(d);s.exports.useEffect(()=>{T(d)},[d]),s.exports.useEffect(()=>{if(E.current&&E.current.resizableTextArea){const{textArea:C}=E.current.resizableTextArea;C.focus();const{length:R}=C.value;C.setSelectionRange(R,R)}},[]);const p=C=>{let{target:R}=C;T(R.value.replace(/[\n\r]/g,""))},B=()=>{w.current=!0},A=()=>{w.current=!1},h=C=>{let{keyCode:R}=C;w.current||(D.current=R)},K=()=>{y(P.trim())},x=C=>{let{keyCode:R,ctrlKey:se,altKey:F,metaKey:z,shiftKey:U}=C;D.current===R&&!w.current&&!se&&!F&&!z&&!U&&(R===ne.ENTER?(K(),b==null||b()):R===ne.ESC&&l())},f=()=>{K()},j=v?`${t}-${v}`:"",[W,k]=De(t),N=oe(t,`${t}-edit-content`,{[`${t}-rtl`]:u==="rtl"},n,j,k);return W(re("div",{className:N,style:r,children:[g(pt,{ref:E,maxLength:m,value:P,onChange:p,onKeyDown:h,onKeyUp:x,onCompositionStart:B,onCompositionEnd:A,onBlur:f,"aria-label":o,rows:1,autoSize:c}),$!==null?ut($,{className:`${t}-edit-content-confirm`}):null]}))},Wt=At;function le(e,t){return s.exports.useMemo(()=>{const o=!!e;return[o,Object.assign(Object.assign({},t),o&&typeof e=="object"?e:null)]},[e])}const Kt=(e,t)=>{const o=s.exports.useRef(!1);s.exports.useEffect(()=>{o.current?e():o.current=!0},t)},Ut=Kt;var Vt=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const Ft=s.exports.forwardRef((e,t)=>{var{prefixCls:o,component:n="article",className:r,rootClassName:u,setContentRef:m,children:c,direction:d}=e,y=Vt(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction"]);const{getPrefixCls:l,direction:b}=s.exports.useContext($e),v=d!=null?d:b;let $=t;m&&($=Re(t,m));const E=l("typography",o),[w,D]=De(E),P=oe(E,{[`${E}-rtl`]:v==="rtl"},r,u,D);return w(g(n,{...Object.assign({className:P,ref:$},y),children:c}))}),ke=Ft;function ze(e){const t=typeof e;return t==="string"||t==="number"}function Xt(e){let t=0;return e.forEach(o=>{ze(o)?t+=String(o).length:t+=1}),t}function Oe(e,t){let o=0;const n=[];for(let r=0;r<e.length;r+=1){if(o===t)return n;const u=e[r],c=ze(u)?String(u).length:1,d=o+c;if(d>t){const y=t-o;return n.push(String(u).slice(0,y)),n}n.push(u),o=d}return e}const Jt=0,Y=1,Ce=2,ae=3,we=4,qt=e=>{let{enabledMeasure:t,children:o,text:n,width:r,fontSize:u,rows:m,onEllipsis:c}=e;const[[d,y,l],b]=s.exports.useState([0,0,0]),[v,$]=s.exports.useState(Jt),[E,w]=s.exports.useState(0),D=s.exports.useRef(null),P=s.exports.useRef(null),T=s.exports.useMemo(()=>Ie(n),[n]),p=s.exports.useMemo(()=>Xt(T),[T]),B=s.exports.useMemo(()=>!t||v!==ae?o(T,!1):o(Oe(T,y),y<p),[t,v,o,T,y,p]);ee(()=>{t&&r&&u&&p&&($(Y),b([0,Math.ceil(p/2),p]))},[t,r,u,n,p,m]),ee(()=>{var x;v===Y&&w(((x=D.current)===null||x===void 0?void 0:x.offsetHeight)||0)},[v]),ee(()=>{var x,f;if(E){if(v===Y){const j=((x=P.current)===null||x===void 0?void 0:x.offsetHeight)||0,W=m*E;j<=W?($(we),c(!1)):$(Ce)}else if(v===Ce)if(d!==l){const j=((f=P.current)===null||f===void 0?void 0:f.offsetHeight)||0,W=m*E;let k=d,N=l;d===l-1?N=d:j<=W?k=y:N=y;const C=Math.ceil((k+N)/2);b([k,C,N])}else $(ae),c(!0)}},[v,d,l,m,E]);const A={width:r,whiteSpace:"normal",margin:0,padding:0},h=(x,f,j)=>g("span",{"aria-hidden":!0,ref:f,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(u/2)*2},j),children:x}),K=(x,f)=>{const j=Oe(T,x);return h(o(j,!0),f,A)};return re(ce,{children:[B,t&&v!==ae&&v!==we&&re(ce,{children:[h("lg",D,{wordBreak:"keep-all",whiteSpace:"nowrap"}),v===Y?h(o(T,!1),P,A):K(y,P)]})]})},Gt=qt,Qt=e=>{let{enabledEllipsis:t,isEllipsis:o,children:n,tooltipProps:r}=e;return!(r!=null&&r.title)||!t?n:g(de,{...Object.assign({open:o?void 0:!1},r),children:n})},Yt=Qt;var Zt=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};function en(e,t){let{mark:o,code:n,underline:r,delete:u,strong:m,keyboard:c,italic:d}=e,y=t;function l(b,v){!v||(y=s.exports.createElement(b,{},y))}return l("strong",m),l("u",r),l("del",u),l("code",n),l("mark",o),l("kbd",c),l("i",d),y}function Z(e,t,o){return e===!0||e===void 0?t:e||o&&t}function Te(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const tn="...",nn=s.exports.forwardRef((e,t)=>{var o,n,r;const{prefixCls:u,className:m,style:c,type:d,disabled:y,children:l,ellipsis:b,editable:v,copyable:$,component:E,title:w}=e,D=Zt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:P,direction:T}=s.exports.useContext($e),[p]=ft("Text"),B=s.exports.useRef(null),A=s.exports.useRef(null),h=P("typography",u),K=Pe(D,["mark","code","delete","underline","strong","keyboard","italic"]),[x,f]=le(v),[j,W]=gt(!1,{value:f.editing}),{triggerType:k=["icon"]}=f,N=i=>{var a;i&&((a=f.onStart)===null||a===void 0||a.call(f)),W(i)};Ut(()=>{var i;j||(i=A.current)===null||i===void 0||i.focus()},[j]);const C=i=>{i==null||i.preventDefault(),N(!0)},R=i=>{var a;(a=f.onChange)===null||a===void 0||a.call(f,i),N(!1)},se=()=>{var i;(i=f.onCancel)===null||i===void 0||i.call(f),N(!1)},[F,z]=le($),[U,pe]=s.exports.useState(!1),ue=s.exports.useRef(),fe={};z.format&&(fe.format=z.format);const ge=()=>{window.clearTimeout(ue.current)},He=i=>{var a;i==null||i.preventDefault(),i==null||i.stopPropagation(),Lt(z.text||String(l)||"",fe),pe(!0),ge(),ue.current=window.setTimeout(()=>{pe(!1)},3e3),(a=z.onCopy)===null||a===void 0||a.call(z,i)};s.exports.useEffect(()=>ge,[]);const[ye,Me]=s.exports.useState(!1),[me,Be]=s.exports.useState(!1),[Ae,We]=s.exports.useState(!1),[be,Ke]=s.exports.useState(!1),[ve,Ue]=s.exports.useState(!1),[Ve,Fe]=s.exports.useState(!0),[H,S]=le(b,{expandable:!1}),L=H&&!Ae,{rows:V=1}=S,J=s.exports.useMemo(()=>!L||S.suffix!==void 0||S.onEllipsis||S.expandable||x||F,[L,S,x,F]);ee(()=>{H&&!J&&(Me(xe("webkitLineClamp")),Be(xe("textOverflow")))},[J,H]);const _=s.exports.useMemo(()=>J?!1:V===1?me:ye,[J,me,ye]),he=L&&(_?ve:be),Xe=L&&V===1&&_,q=L&&V>1&&_,Je=i=>{var a;We(!0),(a=S.onExpand)===null||a===void 0||a.call(S,i)},[qe,Ge]=s.exports.useState(0),[Qe,Ye]=s.exports.useState(0),Ze=(i,a)=>{let{offsetWidth:O}=i;var I;Ge(O),Ye(parseInt((I=window.getComputedStyle)===null||I===void 0?void 0:I.call(window,a).fontSize,10)||0)},et=i=>{var a;Ke(i),be!==i&&((a=S.onEllipsis)===null||a===void 0||a.call(S,i))};s.exports.useEffect(()=>{const i=B.current;if(H&&_&&i){const a=q?i.offsetHeight<i.scrollHeight:i.offsetWidth<i.scrollWidth;ve!==a&&Ue(a)}},[H,_,l,q,Ve]),s.exports.useEffect(()=>{const i=B.current;if(typeof IntersectionObserver>"u"||!i||!_||!L)return;const a=new IntersectionObserver(()=>{Fe(!!i.offsetParent)});return a.observe(i),()=>{a.disconnect()}},[_,L]);let M={};S.tooltip===!0?M={title:(o=f.text)!==null&&o!==void 0?o:l}:s.exports.isValidElement(S.tooltip)?M={title:S.tooltip}:typeof S.tooltip=="object"?M=Object.assign({title:(n=f.text)!==null&&n!==void 0?n:l},S.tooltip):M={title:S.tooltip};const G=s.exports.useMemo(()=>{const i=a=>["string","number"].includes(typeof a);if(!(!H||_)){if(i(f.text))return f.text;if(i(l))return l;if(i(w))return w;if(i(M.title))return M.title}},[H,_,w,M.title,he]);if(j)return g(Wt,{value:(r=f.text)!==null&&r!==void 0?r:typeof l=="string"?l:"",onSave:R,onCancel:se,onEnd:f.onEnd,prefixCls:h,className:m,style:c,direction:T,component:E,maxLength:f.maxLength,autoSize:f.autoSize,enterIcon:f.enterIcon});const tt=()=>{const{expandable:i,symbol:a}=S;if(!i)return null;let O;return a?O=a:O=p==null?void 0:p.expand,g("a",{className:`${h}-expand`,onClick:Je,"aria-label":p==null?void 0:p.expand,children:O},"expand")},nt=()=>{if(!x)return;const{icon:i,tooltip:a}=f,O=Ie(a)[0]||(p==null?void 0:p.edit),I=typeof O=="string"?O:"";return k.includes("icon")?g(de,{title:a===!1?"":O,children:g(Se,{ref:A,className:`${h}-edit`,onClick:C,"aria-label":I,children:i||g(bt,{role:"button"})})},"edit"):null},ot=()=>{if(!F)return;const{tooltips:i,icon:a}=z,O=Te(i),I=Te(a),Q=U?Z(O[1],p==null?void 0:p.copied):Z(O[0],p==null?void 0:p.copy),st=U?p==null?void 0:p.copied:p==null?void 0:p.copy,lt=typeof Q=="string"?Q:st;return g(de,{title:Q,children:g(Se,{className:oe(`${h}-copy`,U&&`${h}-copy-success`),onClick:He,"aria-label":lt,children:U?Z(I[1],g(mt,{}),!0):Z(I[0],g(xt,{}),!0)})},"copy")},rt=i=>[i&&tt(),nt(),ot()],it=i=>[i&&g("span",{"aria-hidden":!0,children:tn},"ellipsis"),S.suffix,rt(i)];return g(yt,{onResize:Ze,disabled:!L||_,children:i=>g(Yt,{tooltipProps:M,enabledEllipsis:L,isEllipsis:he,children:g(ke,{...Object.assign({className:oe({[`${h}-${d}`]:d,[`${h}-disabled`]:y,[`${h}-ellipsis`]:H,[`${h}-single-line`]:L&&V===1,[`${h}-ellipsis-single-line`]:Xe,[`${h}-ellipsis-multiple-line`]:q},m),prefixCls:u,style:Object.assign(Object.assign({},c),{WebkitLineClamp:q?V:void 0}),component:E,ref:Re(i,B,t),direction:T,onClick:k.includes("text")?C:void 0,"aria-label":G==null?void 0:G.toString(),title:w},K),children:g(Gt,{enabledMeasure:L&&!_,text:l,rows:V,width:qe,fontSize:Qe,onEllipsis:et,children:(a,O)=>{let I=a;return a.length&&O&&G&&(I=g("span",{"aria-hidden":!0,children:I},"show-content")),en(e,re(ce,{children:[I,it(O)]}))}})})})})}),ie=nn;var on=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const rn=s.exports.forwardRef((e,t)=>{var{ellipsis:o,rel:n}=e,r=on(e,["ellipsis","rel"]);const u=Object.assign(Object.assign({},r),{rel:n===void 0&&r.target==="_blank"?"noopener noreferrer":n});return delete u.navigate,g(ie,{...Object.assign({},u,{ref:t,ellipsis:!!o,component:"a"})})}),sn=rn,ln=s.exports.forwardRef((e,t)=>g(ie,{...Object.assign({ref:t},e,{component:"div"})})),an=ln;var cn=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const dn=(e,t)=>{var{ellipsis:o}=e,n=cn(e,["ellipsis"]);const r=s.exports.useMemo(()=>o&&typeof o=="object"?Pe(o,["expandable","rows"]):o,[o]);return g(ie,{...Object.assign({ref:t},n,{ellipsis:r,component:"span"})})},pn=s.exports.forwardRef(dn);var un=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const fn=[1,2,3,4,5],gn=s.exports.forwardRef((e,t)=>{const{level:o=1}=e,n=un(e,["level"]);let r;return fn.includes(o)?r=`h${o}`:r="h1",g(ie,{...Object.assign({ref:t},n,{component:r})})}),yn=gn,X=ke;X.Text=pn;X.Link=sn;X.Title=yn;X.Paragraph=an;const hn=X;export{hn as T};
//# sourceMappingURL=index.4a7c6e70.js.map
