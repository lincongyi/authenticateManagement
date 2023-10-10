import{W as a,V as n,$ as i,ao as t}from"./index.318fb3af.js";const l=r=>{const{checkboxCls:o}=r,e=`${o}-wrapper`;return[{[`${o}-group`]:Object.assign(Object.assign({},i(r)),{display:"inline-flex",flexWrap:"wrap",columnGap:r.marginXS,[`> ${r.antCls}-row`]:{flex:1}}),[e]:Object.assign(Object.assign({},i(r)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${e}`]:{marginInlineStart:0},[`&${e}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[o]:Object.assign(Object.assign({},i(r)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:r.borderRadiusSM,alignSelf:"center",[`${o}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${o}-inner`]:Object.assign({},t(r))},[`${o}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:r.checkboxSize,height:r.checkboxSize,direction:"ltr",backgroundColor:r.colorBgContainer,border:`${r.lineWidth}px ${r.lineType} ${r.colorBorder}`,borderRadius:r.borderRadiusSM,borderCollapse:"separate",transition:`all ${r.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:r.checkboxSize/14*5,height:r.checkboxSize/14*8,border:`${r.lineWidthBold}px solid ${r.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${r.motionDurationFast} ${r.motionEaseInBack}, opacity ${r.motionDurationFast}`}},"& + span":{paddingInlineStart:r.paddingXS,paddingInlineEnd:r.paddingXS}})},{[`
        ${e}:not(${e}-disabled),
        ${o}:not(${o}-disabled)
      `]:{[`&:hover ${o}-inner`]:{borderColor:r.colorPrimary}},[`${e}:not(${e}-disabled)`]:{[`&:hover ${o}-checked:not(${o}-disabled) ${o}-inner`]:{backgroundColor:r.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${o}-checked:not(${o}-disabled):after`]:{borderColor:r.colorPrimaryHover}}},{[`${o}-checked`]:{[`${o}-inner`]:{backgroundColor:r.colorPrimary,borderColor:r.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${r.motionDurationMid} ${r.motionEaseOutBack} ${r.motionDurationFast}`}}},[`
        ${e}-checked:not(${e}-disabled),
        ${o}-checked:not(${o}-disabled)
      `]:{[`&:hover ${o}-inner`]:{backgroundColor:r.colorPrimaryHover,borderColor:"transparent"}}},{[o]:{"&-indeterminate":{[`${o}-inner`]:{backgroundColor:r.colorBgContainer,borderColor:r.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:r.fontSizeLG/2,height:r.fontSizeLG/2,backgroundColor:r.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${e}-disabled`]:{cursor:"not-allowed"},[`${o}-disabled`]:{[`&, ${o}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${o}-inner`]:{background:r.colorBgContainerDisabled,borderColor:r.colorBorder,"&:after":{borderColor:r.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:r.colorTextDisabled},[`&${o}-indeterminate ${o}-inner::after`]:{background:r.colorTextDisabled}}}]};function s(r,o){const e=a(o,{checkboxCls:`.${r}`,checkboxSize:o.controlInteractiveSize});return[l(e)]}const d=n("Checkbox",(r,o)=>{let{prefixCls:e}=o;return[s(e,r)]});export{s as g,d as u};
