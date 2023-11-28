import{_ as U,f as G,g as x,h as Z,j as c,a as A,a2 as q,r as F,G as li,i as ai,k as ci,l as si,n as di,Q as mi,o as pi,v as gi,be as $i,aG as hi,bf as Si,bg as fi}from"./index.69846dde.js";import{u as ui}from"./useBreakpoint.ba81da52.js";var bi=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick","render"];function J(i){return typeof i=="string"}function k(i){var t,e=i.className,n=i.prefixCls,o=i.style,r=i.active,l=i.status,g=i.iconPrefix,a=i.icon;i.wrapperStyle;var h=i.stepNumber,I=i.disabled,u=i.description,$=i.title,S=i.subTitle,w=i.progressDot,m=i.stepIcon,T=i.tailContent,d=i.icons,f=i.stepIndex,b=i.onStepClick,z=i.onClick,N=i.render,M=U(i,bi),H=!!b&&!I,v={};H&&(v.role="button",v.tabIndex=0,v.onClick=function(C){z==null||z(C),b(f)},v.onKeyDown=function(C){var p=C.which;(p===q.ENTER||p===q.SPACE)&&b(f)});var B=function(){var p,s,P=G("".concat(n,"-icon"),"".concat(g,"icon"),(p={},x(p,"".concat(g,"icon-").concat(a),a&&J(a)),x(p,"".concat(g,"icon-check"),!a&&l==="finish"&&(d&&!d.finish||!d)),x(p,"".concat(g,"icon-cross"),!a&&l==="error"&&(d&&!d.error||!d)),p)),L=c("span",{className:"".concat(n,"-icon-dot")});return w?typeof w=="function"?s=c("span",{className:"".concat(n,"-icon"),children:w(L,{index:h-1,status:l,title:$,description:u})}):s=c("span",{className:"".concat(n,"-icon"),children:L}):a&&!J(a)?s=c("span",{className:"".concat(n,"-icon"),children:a}):d&&d.finish&&l==="finish"?s=c("span",{className:"".concat(n,"-icon"),children:d.finish}):d&&d.error&&l==="error"?s=c("span",{className:"".concat(n,"-icon"),children:d.error}):a||l==="finish"||l==="error"?s=c("span",{className:P}):s=c("span",{className:"".concat(n,"-icon"),children:h}),m&&(s=m({index:h-1,status:l,title:$,description:u,node:s})),s},X=l||"wait",W=G("".concat(n,"-item"),"".concat(n,"-item-").concat(X),e,(t={},x(t,"".concat(n,"-item-custom"),a),x(t,"".concat(n,"-item-active"),r),x(t,"".concat(n,"-item-disabled"),I===!0),t)),_=Z({},o),O=c("div",{...M,className:W,style:_,children:A("div",{onClick:z,...v,className:"".concat(n,"-item-container"),children:[c("div",{className:"".concat(n,"-item-tail"),children:T}),c("div",{className:"".concat(n,"-item-icon"),children:B()}),A("div",{className:"".concat(n,"-item-content"),children:[A("div",{className:"".concat(n,"-item-title"),children:[$,S&&c("div",{title:typeof S=="string"?S:void 0,className:"".concat(n,"-item-subtitle"),children:S})]}),u&&c("div",{className:"".concat(n,"-item-description"),children:u})]})]})});return N&&(O=N(O)||null),O}var vi=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","itemRender","items"];function V(i){var t,e=i.prefixCls,n=e===void 0?"rc-steps":e,o=i.style,r=o===void 0?{}:o,l=i.className;i.children;var g=i.direction,a=g===void 0?"horizontal":g,h=i.type,I=h===void 0?"default":h,u=i.labelPlacement,$=u===void 0?"horizontal":u,S=i.iconPrefix,w=S===void 0?"rc":S,m=i.status,T=m===void 0?"process":m,d=i.size,f=i.current,b=f===void 0?0:f,z=i.progressDot,N=z===void 0?!1:z,M=i.stepIcon,H=i.initial,v=H===void 0?0:H,B=i.icons,X=i.onChange,W=i.itemRender,_=i.items,O=_===void 0?[]:_,C=U(i,vi),p=I==="navigation",s=I==="inline",P=s||N,L=s?"horizontal":a,Y=s?void 0:d,ti=P?"vertical":$,ei=G(n,"".concat(n,"-").concat(L),l,(t={},x(t,"".concat(n,"-").concat(Y),Y),x(t,"".concat(n,"-label-").concat(ti),L==="horizontal"),x(t,"".concat(n,"-dot"),!!P),x(t,"".concat(n,"-navigation"),p),x(t,"".concat(n,"-inline"),s),t)),ni=function(R){X&&b!==R&&X(R)},oi=function(R,Q){var y=Z({},R),D=v+Q;return T==="error"&&Q===b-1&&(y.className="".concat(n,"-next-error")),y.status||(D===b?y.status=T:D<b?y.status="finish":y.status="wait"),s&&(y.icon=void 0,y.subTitle=void 0),!y.render&&W&&(y.render=function(ri){return W(y,ri)}),F.exports.createElement(k,{...y,active:D===b,stepNumber:D+1,stepIndex:D,key:D,prefixCls:n,iconPrefix:w,wrapperStyle:r,progressDot:P,stepIcon:M,icons:B,onStepClick:X&&ni})};return c("div",{className:ei,style:r,...C,children:O.filter(function(K){return K}).map(oi)})}V.Step=k;const Ci=i=>{const{componentCls:t,customIconTop:e,customIconSize:n,customIconFontSize:o}=i;return{[`${t}-item-custom`]:{[`> ${t}-item-container > ${t}-item-icon`]:{height:"auto",background:"none",border:0,[`> ${t}-icon`]:{top:e,width:n,height:n,fontSize:o,lineHeight:`${o}px`}}},[`&:not(${t}-vertical)`]:{[`${t}-item-custom`]:{[`${t}-item-icon`]:{width:"auto",background:"none"}}}}},yi=Ci,xi=i=>{const{componentCls:t,inlineDotSize:e,inlineTitleColor:n,inlineTailColor:o}=i,r=i.paddingXS+i.lineWidth,l={[`${t}-item-container ${t}-item-content ${t}-item-title`]:{color:n}};return{[`&${t}-inline`]:{width:"auto",display:"inline-flex",[`${t}-item`]:{flex:"none","&-container":{padding:`${r}px ${i.paddingXXS}px 0`,margin:`0 ${i.marginXXS/2}px`,borderRadius:i.borderRadiusSM,cursor:"pointer",transition:`background-color ${i.motionDurationMid}`,"&:hover":{background:i.controlItemBgHover},["&[role='button']:hover"]:{opacity:1}},"&-icon":{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,[`> ${t}-icon`]:{top:0},[`${t}-icon-dot`]:{borderRadius:i.fontSizeSM/4}},"&-content":{width:"auto",marginTop:i.marginXS-i.lineWidth},"&-title":{color:n,fontSize:i.fontSizeSM,lineHeight:i.lineHeightSM,fontWeight:"normal",marginBottom:i.marginXXS/2},"&-description":{display:"none"},"&-tail":{marginInlineStart:0,top:r+e/2,transform:"translateY(-50%)","&:after":{width:"100%",height:i.lineWidth,borderRadius:0,marginInlineStart:0,background:o}},[`&:first-child ${t}-item-tail`]:{width:"50%",marginInlineStart:"50%"},[`&:last-child ${t}-item-tail`]:{display:"block",width:"50%"},"&-wait":Object.assign({[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:i.colorBorderBg,border:`${i.lineWidth}px ${i.lineType} ${o}`}},l),"&-finish":Object.assign({[`${t}-item-tail::after`]:{backgroundColor:o},[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:o,border:`${i.lineWidth}px ${i.lineType} ${o}`}},l),"&-error":l,"&-active, &-process":Object.assign({[`${t}-item-icon`]:{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,top:0}},l),[`&:not(${t}-item-active) > ${t}-item-container[role='button']:hover`]:{[`${t}-item-title`]:{color:n}}}}}},Ii=xi,wi=i=>{const{componentCls:t,iconSize:e,lineHeight:n,iconSizeSM:o}=i;return{[`&${t}-label-vertical`]:{[`${t}-item`]:{overflow:"visible","&-tail":{marginInlineStart:e/2+i.controlHeightLG,padding:`${i.paddingXXS}px ${i.paddingLG}px`},"&-content":{display:"block",width:(e/2+i.controlHeightLG)*2,marginTop:i.marginSM,textAlign:"center"},"&-icon":{display:"inline-block",marginInlineStart:i.controlHeightLG},"&-title":{paddingInlineEnd:0,paddingInlineStart:0,"&::after":{display:"none"}},"&-subtitle":{display:"block",marginBottom:i.marginXXS,marginInlineStart:0,lineHeight:n}},[`&${t}-small:not(${t}-dot)`]:{[`${t}-item`]:{"&-icon":{marginInlineStart:i.controlHeightLG+(e-o)/2}}}}}},zi=wi,Ti=i=>{const{componentCls:t,navContentMaxWidth:e,navArrowColor:n,stepsNavActiveColor:o,motionDurationSlow:r}=i;return{[`&${t}-navigation`]:{paddingTop:i.paddingSM,[`&${t}-small`]:{[`${t}-item`]:{"&-container":{marginInlineStart:-i.marginSM}}},[`${t}-item`]:{overflow:"visible",textAlign:"center","&-container":{display:"inline-block",height:"100%",marginInlineStart:-i.margin,paddingBottom:i.paddingSM,textAlign:"start",transition:`opacity ${r}`,[`${t}-item-content`]:{maxWidth:e},[`${t}-item-title`]:Object.assign(Object.assign({maxWidth:"100%",paddingInlineEnd:0},li),{"&::after":{display:"none"}})},[`&:not(${t}-item-active)`]:{[`${t}-item-container[role='button']`]:{cursor:"pointer","&:hover":{opacity:.85}}},"&:last-child":{flex:1,"&::after":{display:"none"}},"&::after":{position:"absolute",top:`calc(50% - ${i.paddingSM/2}px)`,insetInlineStart:"100%",display:"inline-block",width:i.fontSizeIcon,height:i.fontSizeIcon,borderTop:`${i.lineWidth}px ${i.lineType} ${n}`,borderBottom:"none",borderInlineStart:"none",borderInlineEnd:`${i.lineWidth}px ${i.lineType} ${n}`,transform:"translateY(-50%) translateX(-50%) rotate(45deg)",content:'""'},"&::before":{position:"absolute",bottom:0,insetInlineStart:"50%",display:"inline-block",width:0,height:i.lineWidthBold,backgroundColor:o,transition:`width ${r}, inset-inline-start ${r}`,transitionTimingFunction:"ease-out",content:'""'}},[`${t}-item${t}-item-active::before`]:{insetInlineStart:0,width:"100%"}},[`&${t}-navigation${t}-vertical`]:{[`> ${t}-item`]:{marginInlineEnd:0,"&::before":{display:"none"},[`&${t}-item-active::before`]:{top:0,insetInlineEnd:0,insetInlineStart:"unset",display:"block",width:i.lineWidth*3,height:`calc(100% - ${i.marginLG}px)`},"&::after":{position:"relative",insetInlineStart:"50%",display:"block",width:i.controlHeight*.25,height:i.controlHeight*.25,marginBottom:i.marginXS,textAlign:"center",transform:"translateY(-50%) translateX(-50%) rotate(135deg)"},[`> ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}},[`&${t}-navigation${t}-horizontal`]:{[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}}},Ni=Ti,Xi=i=>{const{antCls:t,componentCls:e}=i;return{[`&${e}-with-progress`]:{[`${e}-item`]:{paddingTop:i.paddingXXS,[`&-process ${e}-item-container ${e}-item-icon ${e}-icon`]:{color:i.processIconColor}},[`&${e}-vertical > ${e}-item `]:{paddingInlineStart:i.paddingXXS,[`> ${e}-item-container > ${e}-item-tail`]:{top:i.marginXXS,insetInlineStart:i.iconSize/2-i.lineWidth+i.paddingXXS}},[`&, &${e}-small`]:{[`&${e}-horizontal ${e}-item:first-child`]:{paddingBottom:i.paddingXXS,paddingInlineStart:i.paddingXXS}},[`&${e}-small${e}-vertical > ${e}-item > ${e}-item-container > ${e}-item-tail`]:{insetInlineStart:i.iconSizeSM/2-i.lineWidth+i.paddingXXS},[`&${e}-label-vertical`]:{[`${e}-item ${e}-item-tail`]:{top:i.margin-2*i.lineWidth}},[`${e}-item-icon`]:{position:"relative",[`${t}-progress`]:{position:"absolute",insetBlockStart:(i.iconSize-i.stepsProgressSize-i.lineWidth*2)/2,insetInlineStart:(i.iconSize-i.stepsProgressSize-i.lineWidth*2)/2}}}}},Pi=Xi,Hi=i=>{const{componentCls:t,descriptionMaxWidth:e,lineHeight:n,dotCurrentSize:o,dotSize:r,motionDurationSlow:l}=i;return{[`&${t}-dot, &${t}-dot${t}-small`]:{[`${t}-item`]:{"&-title":{lineHeight:n},"&-tail":{top:Math.floor((i.dotSize-i.lineWidth*3)/2),width:"100%",marginTop:0,marginBottom:0,marginInline:`${e/2}px 0`,padding:0,"&::after":{width:`calc(100% - ${i.marginSM*2}px)`,height:i.lineWidth*3,marginInlineStart:i.marginSM}},"&-icon":{width:r,height:r,marginInlineStart:(i.descriptionMaxWidth-r)/2,paddingInlineEnd:0,lineHeight:`${r}px`,background:"transparent",border:0,[`${t}-icon-dot`]:{position:"relative",float:"left",width:"100%",height:"100%",borderRadius:100,transition:`all ${l}`,"&::after":{position:"absolute",top:-i.marginSM,insetInlineStart:(r-i.controlHeightLG*1.5)/2,width:i.controlHeightLG*1.5,height:i.controlHeight,background:"transparent",content:'""'}}},"&-content":{width:e},[`&-process ${t}-item-icon`]:{position:"relative",top:(r-o)/2,width:o,height:o,lineHeight:`${o}px`,background:"none",marginInlineStart:(i.descriptionMaxWidth-o)/2},[`&-process ${t}-icon`]:{[`&:first-child ${t}-icon-dot`]:{insetInlineStart:0}}}},[`&${t}-vertical${t}-dot`]:{[`${t}-item-icon`]:{marginTop:(i.controlHeight-r)/2,marginInlineStart:0,background:"none"},[`${t}-item-process ${t}-item-icon`]:{marginTop:(i.controlHeight-o)/2,top:0,insetInlineStart:(r-o)/2,marginInlineStart:0},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(i.controlHeight-r)/2,insetInlineStart:0,margin:0,padding:`${r+i.paddingXS}px 0 ${i.paddingXS}px`,"&::after":{marginInlineStart:(r-i.lineWidth)/2}},[`&${t}-small`]:{[`${t}-item-icon`]:{marginTop:(i.controlHeightSM-r)/2},[`${t}-item-process ${t}-item-icon`]:{marginTop:(i.controlHeightSM-o)/2},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(i.controlHeightSM-r)/2}},[`${t}-item:first-child ${t}-icon-dot`]:{insetInlineStart:0},[`${t}-item-content`]:{width:"inherit"}}}},Wi=Hi,Oi=i=>{const{componentCls:t}=i;return{[`&${t}-rtl`]:{direction:"rtl",[`${t}-item`]:{"&-subtitle":{float:"left"}},[`&${t}-navigation`]:{[`${t}-item::after`]:{transform:"rotate(-45deg)"}},[`&${t}-vertical`]:{[`> ${t}-item`]:{"&::after":{transform:"rotate(225deg)"},[`${t}-item-icon`]:{float:"right"}}},[`&${t}-dot`]:{[`${t}-item-icon ${t}-icon-dot, &${t}-small ${t}-item-icon ${t}-icon-dot`]:{float:"right"}}}}},Di=Oi,ji=i=>{const{componentCls:t,iconSizeSM:e,fontSizeSM:n,fontSize:o,colorTextDescription:r}=i;return{[`&${t}-small`]:{[`&${t}-horizontal:not(${t}-label-vertical) ${t}-item`]:{paddingInlineStart:i.paddingSM,"&:first-child":{paddingInlineStart:0}},[`${t}-item-icon`]:{width:e,height:e,marginTop:0,marginBottom:0,marginInline:`0 ${i.marginXS}px`,fontSize:n,lineHeight:`${e}px`,textAlign:"center",borderRadius:e},[`${t}-item-title`]:{paddingInlineEnd:i.paddingSM,fontSize:o,lineHeight:`${e}px`,"&::after":{top:e/2}},[`${t}-item-description`]:{color:r,fontSize:o},[`${t}-item-tail`]:{top:e/2-i.paddingXXS},[`${t}-item-custom ${t}-item-icon`]:{width:"inherit",height:"inherit",lineHeight:"inherit",background:"none",border:0,borderRadius:0,[`> ${t}-icon`]:{fontSize:e,lineHeight:`${e}px`,transform:"none"}}}}},Mi=ji,Bi=i=>{const{componentCls:t,iconSizeSM:e,iconSize:n}=i;return{[`&${t}-vertical`]:{display:"flex",flexDirection:"column",[`> ${t}-item`]:{display:"block",flex:"1 0 auto",paddingInlineStart:0,overflow:"visible",[`${t}-item-icon`]:{float:"left",marginInlineEnd:i.margin},[`${t}-item-content`]:{display:"block",minHeight:i.controlHeight*1.5,overflow:"hidden"},[`${t}-item-title`]:{lineHeight:`${n}px`},[`${t}-item-description`]:{paddingBottom:i.paddingSM}},[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:n/2-i.lineWidth,width:i.lineWidth,height:"100%",padding:`${n+i.marginXXS*1.5}px 0 ${i.marginXXS*1.5}px`,"&::after":{width:i.lineWidth,height:"100%"}},[`> ${t}-item:not(:last-child) > ${t}-item-container > ${t}-item-tail`]:{display:"block"},[` > ${t}-item > ${t}-item-container > ${t}-item-content > ${t}-item-title`]:{"&::after":{display:"none"}},[`&${t}-small ${t}-item-container`]:{[`${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:e/2-i.lineWidth,padding:`${e+i.marginXXS*1.5}px 0 ${i.marginXXS*1.5}px`},[`${t}-item-title`]:{lineHeight:`${e}px`}}}}},_i=Bi;var j;(function(i){i.wait="wait",i.process="process",i.finish="finish",i.error="error"})(j||(j={}));const E=(i,t)=>{const e=`${t.componentCls}-item`,n=`${i}IconColor`,o=`${i}TitleColor`,r=`${i}DescriptionColor`,l=`${i}TailColor`,g=`${i}IconBgColor`,a=`${i}IconBorderColor`,h=`${i}DotColor`;return{[`${e}-${i} ${e}-icon`]:{backgroundColor:t[g],borderColor:t[a],[`> ${t.componentCls}-icon`]:{color:t[n],[`${t.componentCls}-icon-dot`]:{background:t[h]}}},[`${e}-${i}${e}-custom ${e}-icon`]:{[`> ${t.componentCls}-icon`]:{color:t[h]}},[`${e}-${i} > ${e}-container > ${e}-content > ${e}-title`]:{color:t[o],"&::after":{backgroundColor:t[l]}},[`${e}-${i} > ${e}-container > ${e}-content > ${e}-description`]:{color:t[r]},[`${e}-${i} > ${e}-container > ${e}-tail::after`]:{backgroundColor:t[l]}}},Li=i=>{const{componentCls:t,motionDurationSlow:e}=i,n=`${t}-item`,o=`${n}-icon`;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[n]:{position:"relative",display:"inline-block",flex:1,overflow:"hidden",verticalAlign:"top","&:last-child":{flex:"none",[`> ${n}-container > ${n}-tail, > ${n}-container >  ${n}-content > ${n}-title::after`]:{display:"none"}}},[`${n}-container`]:{outline:"none",["&:focus-visible"]:{[o]:Object.assign({},di(i))}},[`${o}, ${n}-content`]:{display:"inline-block",verticalAlign:"top"},[o]:{width:i.iconSize,height:i.iconSize,marginTop:0,marginBottom:0,marginInlineStart:0,marginInlineEnd:i.marginXS,fontSize:i.iconFontSize,fontFamily:i.fontFamily,lineHeight:`${i.iconSize}px`,textAlign:"center",borderRadius:i.iconSize,border:`${i.lineWidth}px ${i.lineType} transparent`,transition:`background-color ${e}, border-color ${e}`,[`${t}-icon`]:{position:"relative",top:i.iconTop,color:i.colorPrimary,lineHeight:1}},[`${n}-tail`]:{position:"absolute",top:i.iconSize/2-i.paddingXXS,insetInlineStart:0,width:"100%","&::after":{display:"inline-block",width:"100%",height:i.lineWidth,background:i.colorSplit,borderRadius:i.lineWidth,transition:`background ${e}`,content:'""'}},[`${n}-title`]:{position:"relative",display:"inline-block",paddingInlineEnd:i.padding,color:i.colorText,fontSize:i.fontSizeLG,lineHeight:`${i.titleLineHeight}px`,"&::after":{position:"absolute",top:i.titleLineHeight/2,insetInlineStart:"100%",display:"block",width:9999,height:i.lineWidth,background:i.processTailColor,content:'""'}},[`${n}-subtitle`]:{display:"inline",marginInlineStart:i.marginXS,color:i.colorTextDescription,fontWeight:"normal",fontSize:i.fontSize},[`${n}-description`]:{color:i.colorTextDescription,fontSize:i.fontSize}},E(j.wait,i)),E(j.process,i)),{[`${n}-process > ${n}-container > ${n}-title`]:{fontWeight:i.fontWeightStrong}}),E(j.finish,i)),E(j.error,i)),{[`${n}${t}-next-error > ${t}-item-title::after`]:{background:i.colorError},[`${n}-disabled`]:{cursor:"not-allowed"}})},Ri=i=>{const{componentCls:t,motionDurationSlow:e}=i;return{[`& ${t}-item`]:{[`&:not(${t}-item-active)`]:{[`& > ${t}-item-container[role='button']`]:{cursor:"pointer",[`${t}-item`]:{[`&-title, &-subtitle, &-description, &-icon ${t}-icon`]:{transition:`color ${e}`}},"&:hover":{[`${t}-item`]:{["&-title, &-subtitle, &-description"]:{color:i.colorPrimary}}}},[`&:not(${t}-item-process)`]:{[`& > ${t}-item-container[role='button']:hover`]:{[`${t}-item`]:{"&-icon":{borderColor:i.colorPrimary,[`${t}-icon`]:{color:i.colorPrimary}}}}}}},[`&${t}-horizontal:not(${t}-label-vertical)`]:{[`${t}-item`]:{paddingInlineStart:i.padding,whiteSpace:"nowrap","&:first-child":{paddingInlineStart:0},[`&:last-child ${t}-item-title`]:{paddingInlineEnd:0},"&-tail":{display:"none"},"&-description":{maxWidth:i.descriptionMaxWidth,whiteSpace:"normal"}}}}},Ei=i=>{const{componentCls:t}=i;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},si(i)),{display:"flex",width:"100%",fontSize:0,textAlign:"initial"}),Li(i)),Ri(i)),yi(i)),Mi(i)),_i(i)),zi(i)),Wi(i)),Ni(i)),Di(i)),Pi(i)),Ii(i))}},Ai=ai("Steps",i=>{const{wireframe:t,colorTextDisabled:e,controlHeightLG:n,colorTextLightSolid:o,colorText:r,colorPrimary:l,colorTextLabel:g,colorTextDescription:a,colorTextQuaternary:h,colorFillContent:I,controlItemBgActive:u,colorError:$,colorBgContainer:S,colorBorderSecondary:w,colorSplit:m}=i,T=ci(i,{processIconColor:o,processTitleColor:r,processDescriptionColor:r,processIconBgColor:l,processIconBorderColor:l,processDotColor:l,processTailColor:m,waitIconColor:t?e:g,waitTitleColor:a,waitDescriptionColor:a,waitTailColor:m,waitIconBgColor:t?S:I,waitIconBorderColor:t?e:"transparent",waitDotColor:e,finishIconColor:l,finishTitleColor:r,finishDescriptionColor:a,finishTailColor:l,finishIconBgColor:t?S:u,finishIconBorderColor:t?l:u,finishDotColor:l,errorIconColor:o,errorTitleColor:$,errorDescriptionColor:$,errorTailColor:m,errorIconBgColor:$,errorIconBorderColor:$,errorDotColor:$,stepsNavActiveColor:l,stepsProgressSize:n,inlineDotSize:6,inlineTitleColor:h,inlineTailColor:w});return[Ei(T)]},i=>{const{colorTextDisabled:t,fontSize:e,controlHeightSM:n,controlHeight:o,controlHeightLG:r,fontSizeHeading3:l}=i;return{titleLineHeight:o,customIconSize:o,customIconTop:0,customIconFontSize:n,iconSize:o,iconTop:-.5,iconFontSize:e,iconSizeSM:l,dotSize:o/4,dotCurrentSize:r/4,navArrowColor:t,navContentMaxWidth:"auto",descriptionMaxWidth:140}});function Gi(i){return i.filter(t=>t)}function Fi(i,t){if(i)return i;const e=mi(t).map(n=>{if(F.exports.isValidElement(n)){const{props:o}=n;return Object.assign({},o)}return null});return Gi(e)}var Ki=globalThis&&globalThis.__rest||function(i,t){var e={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&t.indexOf(n)<0&&(e[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(i);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(i,n[o])&&(e[n[o]]=i[n[o]]);return e};const ii=i=>{const{percent:t,size:e,className:n,rootClassName:o,direction:r,items:l,responsive:g=!0,current:a=0,children:h,style:I}=i,u=Ki(i,["percent","size","className","rootClassName","direction","items","responsive","current","children","style"]),{xs:$}=ui(g),{getPrefixCls:S,direction:w,steps:m}=F.exports.useContext(pi),T=F.exports.useMemo(()=>g&&$?"vertical":r,[$,r]),d=gi(e),f=S("steps",i.prefixCls),[b,z]=Ai(f),N=i.type==="inline",M=S("",i.iconPrefix),H=Fi(l,h),v=N?void 0:t,B=Object.assign(Object.assign({},m==null?void 0:m.style),I),X=G(m==null?void 0:m.className,{[`${f}-rtl`]:w==="rtl",[`${f}-with-progress`]:v!==void 0},n,o,z),W={finish:c($i,{className:`${f}-finish-icon`}),error:c(hi,{className:`${f}-error-icon`})};return b(c(V,{...Object.assign({icons:W},u,{style:B,current:a,size:d,items:H,itemRender:N?(C,p)=>C.description?c(fi,{title:C.description,children:p}):p:void 0,stepIcon:C=>{let{node:p,status:s}=C;if(s==="process"&&v!==void 0){const P=d==="small"?32:40;return A("div",{className:`${f}-progress-icon`,children:[c(Si,{type:"circle",percent:v,size:P,strokeWidth:4,format:()=>null}),p]})}return p},direction:T,prefixCls:f,iconPrefix:M,className:X})}))};ii.Step=V.Step;const Qi=ii;export{Qi as S};
