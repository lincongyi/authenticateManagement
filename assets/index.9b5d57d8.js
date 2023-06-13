import{K,m as q,h as J,r as T,i as Q,k as l,n as F,p as U,a as g,q as _,_ as R,s as Y,D as Z,j as ee}from"./index.a5d6ee18.js";import{C as re}from"./index.d0c6bdb5.js";const oe=new K("antCheckboxEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),te=e=>{const{checkboxCls:r}=e,o=`${r}-wrapper`;return[{[`${r}-group`]:Object.assign(Object.assign({},T(e)),{display:"inline-flex"}),[o]:Object.assign(Object.assign({},T(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${o}`]:{marginInlineStart:e.marginXS},[`&${o}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[r]:Object.assign(Object.assign({},T(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",alignSelf:"start",transform:`translate(0, ${e.lineHeight*e.fontSize/2-e.checkboxSize/2}px)`,[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${r}-inner`]:Object.assign({},Q(e))},[`${r}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:`${e.lineWidthBold}px solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[r]:{"&-indeterminate":{[`${r}-inner`]:{"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${o}:hover ${r}:after`]:{visibility:"visible"},[`
        ${o}:not(${o}-disabled),
        ${r}:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{borderColor:e.colorPrimary}},[`${o}:not(${o}-disabled)`]:{[`&:hover ${r}-checked:not(${r}-disabled) ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${r}-checked:not(${r}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${r}-checked`]:{[`${r}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}},"&:after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderRadius:e.borderRadiusSM,visibility:"hidden",border:`${e.lineWidthBold}px solid ${e.colorPrimary}`,animationName:oe,animationDuration:e.motionDurationSlow,animationTimingFunction:"ease-in-out",animationFillMode:"backwards",content:'""',transition:`all ${e.motionDurationSlow}`}},[`
        ${o}-checked:not(${o}-disabled),
        ${r}-checked:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${r}:after`]:{borderColor:e.colorPrimaryHover}}},{[`${o}-disabled`]:{cursor:"not-allowed"},[`${r}-disabled`]:{[`&, ${r}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${r}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${r}-indeterminate ${r}-inner::after`]:{background:e.colorTextDisabled}}}]};function ae(e,r){const o=q(r,{checkboxCls:`.${e}`,checkboxSize:r.controlInteractiveSize});return[te(o)]}const H=J("Checkbox",(e,r)=>{let{prefixCls:o}=r;return[ae(o,e)]});var ne=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]]);return o};const k=l.exports.createContext(null),ie=(e,r)=>{var{defaultValue:o,children:t,options:i=[],prefixCls:w,className:f,rootClassName:v,style:I,onChange:h}=e,d=ne(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]);const{getPrefixCls:C,direction:P}=l.exports.useContext(F),[s,$]=l.exports.useState(d.value||o||[]),[j,a]=l.exports.useState([]);l.exports.useEffect(()=>{"value"in d&&$(d.value||[])},[d.value]);const y=()=>i.map(n=>typeof n=="string"||typeof n=="number"?{label:n,value:n}:n),D=n=>{a(b=>b.filter(p=>p!==n))},S=n=>{a(b=>[].concat(R(b),[n]))},x=n=>{const b=s.indexOf(n.value),p=R(s);b===-1?p.push(n.value):p.splice(b,1),"value"in d||$(p);const M=y();h==null||h(p.filter(N=>j.includes(N)).sort((N,W)=>{const X=M.findIndex(V=>V.value===N),A=M.findIndex(V=>V.value===W);return X-A}))},c=C("checkbox",w),m=`${c}-group`,[O,u]=H(c),z=U(d,["value","disabled"]);i&&i.length>0&&(t=y().map(n=>g(L,{prefixCls:c,disabled:"disabled"in n?n.disabled:d.disabled,value:n.value,checked:s.includes(n.value),onChange:n.onChange,className:`${m}-item`,style:n.style,children:n.label},n.value.toString())));const E={toggleOption:x,value:s,disabled:d.disabled,name:d.name,registerValue:S,cancelValue:D},G=_(m,{[`${m}-rtl`]:P==="rtl"},f,v,u);return O(g("div",{...Object.assign({className:G,style:I},z,{ref:r}),children:g(k.Provider,{value:E,children:t})}))},se=l.exports.forwardRef(ie),le=l.exports.memo(se);var ce=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(o[t[i]]=e[t[i]]);return o};const de=(e,r)=>{var o,{prefixCls:t,className:i,rootClassName:w,children:f,indeterminate:v=!1,style:I,onMouseEnter:h,onMouseLeave:d,skipGroup:C=!1,disabled:P}=e,s=ce(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]);const{getPrefixCls:$,direction:j}=l.exports.useContext(F),a=l.exports.useContext(k),{isFormItemInput:y}=l.exports.useContext(Y),D=l.exports.useContext(Z),S=(o=(a==null?void 0:a.disabled)||P)!==null&&o!==void 0?o:D,x=l.exports.useRef(s.value);l.exports.useEffect(()=>{a==null||a.registerValue(s.value)},[]),l.exports.useEffect(()=>{if(!C)return s.value!==x.current&&(a==null||a.cancelValue(x.current),a==null||a.registerValue(s.value),x.current=s.value),()=>a==null?void 0:a.cancelValue(s.value)},[s.value]);const c=$("checkbox",t),[m,O]=H(c),u=Object.assign({},s);a&&!C&&(u.onChange=function(){s.onChange&&s.onChange.apply(s,arguments),a.toggleOption&&a.toggleOption({label:f,value:s.value})},u.name=a.name,u.checked=a.value.includes(s.value));const z=_({[`${c}-wrapper`]:!0,[`${c}-rtl`]:j==="rtl",[`${c}-wrapper-checked`]:u.checked,[`${c}-wrapper-disabled`]:S,[`${c}-wrapper-in-form-item`]:y},i,w,O),E=_({[`${c}-indeterminate`]:v},O);return m(ee("label",{className:z,style:I,onMouseEnter:h,onMouseLeave:d,children:[g(re,{...Object.assign({"aria-checked":v?"mixed":void 0},u,{prefixCls:c,className:E,disabled:S,ref:r})}),f!==void 0&&g("span",{children:f})]}))},ue=l.exports.forwardRef(de),L=ue,B=L;B.Group=le;B.__ANT_CHECKBOX=!0;const fe=B;export{fe as C,ae as g};
//# sourceMappingURL=index.9b5d57d8.js.map
