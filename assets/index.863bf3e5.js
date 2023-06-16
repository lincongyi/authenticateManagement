import{ar as J,q as E,O as v,t as U,a as c,j as A,k as G,B as ri,af as li,h as si,m as ai,r as ci,n as di,M as pi,az as mi,bw as gi,G as $i}from"./index.7cefd686.js";import{u as hi}from"./useBreakpoint.dce05474.js";var Si=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick","render"];function Q(i){return typeof i=="string"}function Z(i){var t,e=i.className,n=i.prefixCls,o=i.style,r=i.active,l=i.status,g=i.iconPrefix,s=i.icon;i.wrapperStyle;var $=i.stepNumber,d=i.disabled,S=i.description,f=i.title,I=i.subTitle,z=i.progressDot,p=i.stepIcon,u=i.tailContent,a=i.icons,T=i.stepIndex,h=i.onStepClick,b=i.onClick,y=i.render,O=J(i,Si),D=function(){b&&b.apply(void 0,arguments),h(T)},M=function(){var P,m,j=E("".concat(n,"-icon"),"".concat(g,"icon"),(P={},v(P,"".concat(g,"icon-").concat(s),s&&Q(s)),v(P,"".concat(g,"icon-check"),!s&&l==="finish"&&(a&&!a.finish||!a)),v(P,"".concat(g,"icon-cross"),!s&&l==="error"&&(a&&!a.error||!a)),P)),B=c("span",{className:"".concat(n,"-icon-dot")});return z?typeof z=="function"?m=c("span",{className:"".concat(n,"-icon"),children:z(B,{index:$-1,status:l,title:f,description:S})}):m=c("span",{className:"".concat(n,"-icon"),children:B}):s&&!Q(s)?m=c("span",{className:"".concat(n,"-icon"),children:s}):a&&a.finish&&l==="finish"?m=c("span",{className:"".concat(n,"-icon"),children:a.finish}):a&&a.error&&l==="error"?m=c("span",{className:"".concat(n,"-icon"),children:a.error}):s||l==="finish"||l==="error"?m=c("span",{className:j}):m=c("span",{className:"".concat(n,"-icon"),children:$}),p&&(m=p({index:$-1,status:l,title:f,description:S,node:m})),m},_=l||"wait",x=E("".concat(n,"-item"),"".concat(n,"-item-").concat(_),e,(t={},v(t,"".concat(n,"-item-custom"),s),v(t,"".concat(n,"-item-active"),r),v(t,"".concat(n,"-item-disabled"),d===!0),t)),w=U({},o),N={};h&&!d&&(N.role="button",N.tabIndex=0,N.onClick=D);var X=c("div",{...O,className:x,style:w,children:A("div",{onClick:b,...N,className:"".concat(n,"-item-container"),children:[c("div",{className:"".concat(n,"-item-tail"),children:u}),c("div",{className:"".concat(n,"-item-icon"),children:M()}),A("div",{className:"".concat(n,"-item-content"),children:[A("div",{className:"".concat(n,"-item-title"),children:[f,I&&c("div",{title:typeof I=="string"?I:void 0,className:"".concat(n,"-item-subtitle"),children:I})]}),S&&c("div",{className:"".concat(n,"-item-description"),children:S})]})]})});return y&&(X=y(X)||null),X}var fi=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange","itemRender","items"];function V(i){var t,e=i.prefixCls,n=e===void 0?"rc-steps":e,o=i.style,r=o===void 0?{}:o,l=i.className;i.children;var g=i.direction,s=g===void 0?"horizontal":g,$=i.type,d=$===void 0?"default":$,S=i.labelPlacement,f=S===void 0?"horizontal":S,I=i.iconPrefix,z=I===void 0?"rc":I,p=i.status,u=p===void 0?"process":p,a=i.size,T=i.current,h=T===void 0?0:T,b=i.progressDot,y=b===void 0?!1:b,O=i.stepIcon,D=i.initial,M=D===void 0?0:D,_=i.icons,x=i.onChange,w=i.itemRender,N=i.items,X=N===void 0?[]:N,F=J(i,fi),P=d==="navigation",m=d==="inline",j=m||y,B=m?"horizontal":s,Y=m?void 0:a,ii=j?"vertical":f,ti=E(n,"".concat(n,"-").concat(B),l,(t={},v(t,"".concat(n,"-").concat(Y),Y),v(t,"".concat(n,"-label-").concat(ii),B==="horizontal"),v(t,"".concat(n,"-dot"),!!j),v(t,"".concat(n,"-navigation"),P),v(t,"".concat(n,"-inline"),m),t)),ei=function(L){x&&h!==L&&x(L)},ni=function(L,q){var C=U({},L),H=M+q;return u==="error"&&q===h-1&&(C.className="".concat(n,"-next-error")),C.status||(H===h?C.status=u:H<h?C.status="finish":C.status="wait"),m&&(C.icon=void 0,C.subTitle=void 0),!C.render&&w&&(C.render=function(oi){return w(C,oi)}),G.exports.createElement(Z,{...C,active:H===h,stepNumber:H+1,stepIndex:H,key:H,prefixCls:n,iconPrefix:z,wrapperStyle:r,progressDot:j,stepIcon:O,icons:_,onStepClick:x&&ei})};return c("div",{className:ti,style:r,...F,children:X.filter(function(K){return K}).map(ni)})}V.Step=Z;function ui(i){return i.filter(t=>t)}function bi(i,t){if(i)return i;const e=ri(t).map(n=>{if(G.exports.isValidElement(n)){const{props:o}=n;return Object.assign({},o)}return null});return ui(e)}const Ii=i=>{const{componentCls:t,stepsIconCustomTop:e,stepsIconCustomSize:n,stepsIconCustomFontSize:o}=i;return{[`${t}-item-custom`]:{[`> ${t}-item-container > ${t}-item-icon`]:{height:"auto",background:"none",border:0,[`> ${t}-icon`]:{top:e,width:n,height:n,fontSize:o,lineHeight:`${n}px`}}},[`&:not(${t}-vertical)`]:{[`${t}-item-custom`]:{[`${t}-item-icon`]:{width:"auto",background:"none"}}}}},Ci=Ii,vi=i=>{const{componentCls:t,stepsIconSize:e,lineHeight:n,stepsSmallIconSize:o}=i;return{[`&${t}-label-vertical`]:{[`${t}-item`]:{overflow:"visible","&-tail":{marginInlineStart:e/2+i.controlHeightLG,padding:`${i.paddingXXS}px ${i.paddingLG}px`},"&-content":{display:"block",width:(e/2+i.controlHeightLG)*2,marginTop:i.marginSM,textAlign:"center"},"&-icon":{display:"inline-block",marginInlineStart:i.controlHeightLG},"&-title":{paddingInlineEnd:0,paddingInlineStart:0,"&::after":{display:"none"}},"&-subtitle":{display:"block",marginBottom:i.marginXXS,marginInlineStart:0,lineHeight:n}},[`&${t}-small:not(${t}-dot)`]:{[`${t}-item`]:{"&-icon":{marginInlineStart:i.controlHeightLG+(e-o)/2}}}}}},yi=vi,xi=i=>{const{componentCls:t,stepsNavContentMaxWidth:e,stepsNavArrowColor:n,stepsNavActiveColor:o,motionDurationSlow:r}=i;return{[`&${t}-navigation`]:{paddingTop:i.paddingSM,[`&${t}-small`]:{[`${t}-item`]:{"&-container":{marginInlineStart:-i.marginSM}}},[`${t}-item`]:{overflow:"visible",textAlign:"center","&-container":{display:"inline-block",height:"100%",marginInlineStart:-i.margin,paddingBottom:i.paddingSM,textAlign:"start",transition:`opacity ${r}`,[`${t}-item-content`]:{maxWidth:e},[`${t}-item-title`]:Object.assign(Object.assign({maxWidth:"100%",paddingInlineEnd:0},li),{"&::after":{display:"none"}})},[`&:not(${t}-item-active)`]:{[`${t}-item-container[role='button']`]:{cursor:"pointer","&:hover":{opacity:.85}}},"&:last-child":{flex:1,"&::after":{display:"none"}},"&::after":{position:"absolute",top:`calc(50% - ${i.paddingSM/2}px)`,insetInlineStart:"100%",display:"inline-block",width:i.fontSizeIcon,height:i.fontSizeIcon,borderTop:`${i.lineWidth}px ${i.lineType} ${n}`,borderBottom:"none",borderInlineStart:"none",borderInlineEnd:`${i.lineWidth}px ${i.lineType} ${n}`,transform:"translateY(-50%) translateX(-50%) rotate(45deg)",content:'""'},"&::before":{position:"absolute",bottom:0,insetInlineStart:"50%",display:"inline-block",width:0,height:i.lineWidthBold,backgroundColor:o,transition:`width ${r}, inset-inline-start ${r}`,transitionTimingFunction:"ease-out",content:'""'}},[`${t}-item${t}-item-active::before`]:{insetInlineStart:0,width:"100%"}},[`&${t}-navigation${t}-vertical`]:{[`> ${t}-item`]:{marginInlineEnd:0,"&::before":{display:"none"},[`&${t}-item-active::before`]:{top:0,insetInlineEnd:0,insetInlineStart:"unset",display:"block",width:i.lineWidth*3,height:`calc(100% - ${i.marginLG}px)`},"&::after":{position:"relative",insetInlineStart:"50%",display:"block",width:i.controlHeight*.25,height:i.controlHeight*.25,marginBottom:i.marginXS,textAlign:"center",transform:"translateY(-50%) translateX(-50%) rotate(135deg)"},[`> ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}},[`&${t}-navigation${t}-horizontal`]:{[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{visibility:"hidden"}}}},wi=xi,zi=i=>{const{antCls:t,componentCls:e}=i;return{[`&${e}-with-progress`]:{[`${e}-item`]:{paddingTop:i.paddingXXS,[`&-process ${e}-item-container ${e}-item-icon ${e}-icon`]:{color:i.processIconColor}},[`&${e}-vertical > ${e}-item `]:{paddingInlineStart:i.paddingXXS,[`> ${e}-item-container > ${e}-item-tail`]:{top:i.marginXXS,insetInlineStart:i.stepsIconSize/2-i.lineWidth+i.paddingXXS}},[`&, &${e}-small`]:{[`&${e}-horizontal ${e}-item:first-child`]:{paddingBottom:i.paddingXXS,paddingInlineStart:i.paddingXXS}},[`&${e}-small${e}-vertical > ${e}-item > ${e}-item-container > ${e}-item-tail`]:{insetInlineStart:i.stepsSmallIconSize/2-i.lineWidth+i.paddingXXS},[`&${e}-label-vertical`]:{[`${e}-item ${e}-item-tail`]:{top:i.margin-2*i.lineWidth}},[`${e}-item-icon`]:{position:"relative",[`${t}-progress`]:{position:"absolute",insetBlockStart:(i.stepsIconSize-i.stepsProgressSize-i.lineWidth*2)/2,insetInlineStart:(i.stepsIconSize-i.stepsProgressSize-i.lineWidth*2)/2}}}}},Ti=zi,Ni=i=>{const{componentCls:t,descriptionWidth:e,lineHeight:n,stepsCurrentDotSize:o,stepsDotSize:r,motionDurationSlow:l}=i;return{[`&${t}-dot, &${t}-dot${t}-small`]:{[`${t}-item`]:{"&-title":{lineHeight:n},"&-tail":{top:Math.floor((i.stepsDotSize-i.lineWidth*3)/2),width:"100%",marginTop:0,marginBottom:0,marginInline:`${e/2}px 0`,padding:0,"&::after":{width:`calc(100% - ${i.marginSM*2}px)`,height:i.lineWidth*3,marginInlineStart:i.marginSM}},"&-icon":{width:r,height:r,marginInlineStart:(i.descriptionWidth-r)/2,paddingInlineEnd:0,lineHeight:`${r}px`,background:"transparent",border:0,[`${t}-icon-dot`]:{position:"relative",float:"left",width:"100%",height:"100%",borderRadius:100,transition:`all ${l}`,"&::after":{position:"absolute",top:-i.marginSM,insetInlineStart:(r-i.controlHeightLG*1.5)/2,width:i.controlHeightLG*1.5,height:i.controlHeight,background:"transparent",content:'""'}}},"&-content":{width:e},[`&-process ${t}-item-icon`]:{position:"relative",top:(r-o)/2,width:o,height:o,lineHeight:`${o}px`,background:"none",marginInlineStart:(i.descriptionWidth-o)/2},[`&-process ${t}-icon`]:{[`&:first-child ${t}-icon-dot`]:{insetInlineStart:0}}}},[`&${t}-vertical${t}-dot`]:{[`${t}-item-icon`]:{marginTop:(i.controlHeight-r)/2,marginInlineStart:0,background:"none"},[`${t}-item-process ${t}-item-icon`]:{marginTop:(i.controlHeight-o)/2,top:0,insetInlineStart:(r-o)/2,marginInlineStart:0},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(i.controlHeight-r)/2,insetInlineStart:0,margin:0,padding:`${r+i.paddingXS}px 0 ${i.paddingXS}px`,"&::after":{marginInlineStart:(r-i.lineWidth)/2}},[`&${t}-small`]:{[`${t}-item-icon`]:{marginTop:(i.controlHeightSM-r)/2},[`${t}-item-process ${t}-item-icon`]:{marginTop:(i.controlHeightSM-o)/2},[`${t}-item > ${t}-item-container > ${t}-item-tail`]:{top:(i.controlHeightSM-r)/2}},[`${t}-item:first-child ${t}-icon-dot`]:{insetInlineStart:0},[`${t}-item-content`]:{width:"inherit"}}}},Xi=Ni,Pi=i=>{const{componentCls:t}=i;return{[`&${t}-rtl`]:{direction:"rtl",[`${t}-item`]:{"&-subtitle":{float:"left"}},[`&${t}-navigation`]:{[`${t}-item::after`]:{transform:"rotate(-45deg)"}},[`&${t}-vertical`]:{[`> ${t}-item`]:{"&::after":{transform:"rotate(225deg)"},[`${t}-item-icon`]:{float:"right"}}},[`&${t}-dot`]:{[`${t}-item-icon ${t}-icon-dot, &${t}-small ${t}-item-icon ${t}-icon-dot`]:{float:"right"}}}}},Di=Pi,Hi=i=>{const{componentCls:t,stepsSmallIconSize:e,fontSizeSM:n,fontSize:o,colorTextDescription:r}=i;return{[`&${t}-small`]:{[`&${t}-horizontal:not(${t}-label-vertical) ${t}-item`]:{paddingInlineStart:i.paddingSM,"&:first-child":{paddingInlineStart:0}},[`${t}-item-icon`]:{width:e,height:e,marginTop:0,marginBottom:0,marginInline:`0 ${i.marginXS}px`,fontSize:n,lineHeight:`${e}px`,textAlign:"center",borderRadius:e},[`${t}-item-title`]:{paddingInlineEnd:i.paddingSM,fontSize:o,lineHeight:`${e}px`,"&::after":{top:e/2}},[`${t}-item-description`]:{color:r,fontSize:o},[`${t}-item-tail`]:{top:e/2-i.paddingXXS},[`${t}-item-custom ${t}-item-icon`]:{width:"inherit",height:"inherit",lineHeight:"inherit",background:"none",border:0,borderRadius:0,[`> ${t}-icon`]:{fontSize:e,lineHeight:`${e}px`,transform:"none"}}}}},Wi=Hi,Oi=i=>{const{componentCls:t,stepsSmallIconSize:e,stepsIconSize:n}=i;return{[`&${t}-vertical`]:{display:"flex",flexDirection:"column",[`> ${t}-item`]:{display:"block",flex:"1 0 auto",paddingInlineStart:0,overflow:"visible",[`${t}-item-icon`]:{float:"left",marginInlineEnd:i.margin},[`${t}-item-content`]:{display:"block",minHeight:i.controlHeight*1.5,overflow:"hidden"},[`${t}-item-title`]:{lineHeight:`${n}px`},[`${t}-item-description`]:{paddingBottom:i.paddingSM}},[`> ${t}-item > ${t}-item-container > ${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:i.stepsIconSize/2-i.lineWidth,width:i.lineWidth,height:"100%",padding:`${n+i.marginXXS*1.5}px 0 ${i.marginXXS*1.5}px`,"&::after":{width:i.lineWidth,height:"100%"}},[`> ${t}-item:not(:last-child) > ${t}-item-container > ${t}-item-tail`]:{display:"block"},[` > ${t}-item > ${t}-item-container > ${t}-item-content > ${t}-item-title`]:{"&::after":{display:"none"}},[`&${t}-small ${t}-item-container`]:{[`${t}-item-tail`]:{position:"absolute",top:0,insetInlineStart:i.stepsSmallIconSize/2-i.lineWidth,padding:`${e+i.marginXXS*1.5}px 0 ${i.marginXXS*1.5}px`},[`${t}-item-title`]:{lineHeight:`${e}px`}}}}},ji=Oi,Bi=i=>{const{componentCls:t,inlineDotSize:e,inlineTitleColor:n,inlineTailColor:o}=i,r=i.paddingXS+i.lineWidth,l={[`${t}-item-container ${t}-item-content ${t}-item-title`]:{color:n}};return{[`&${t}-inline`]:{width:"auto",display:"inline-flex",[`${t}-item`]:{flex:"none","&-container":{padding:`${r}px ${i.paddingXXS}px 0`,margin:`0 ${i.marginXXS/2}px`,borderRadius:i.borderRadiusSM,cursor:"pointer",transition:`background-color ${i.motionDurationMid}`,"&:hover":{background:i.controlItemBgHover},["&[role='button']:hover"]:{opacity:1}},"&-icon":{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,[`> ${t}-icon`]:{top:0},[`${t}-icon-dot`]:{borderRadius:i.fontSizeSM/4}},"&-content":{width:"auto",marginTop:i.marginXS-i.lineWidth},"&-title":{color:n,fontSize:i.fontSizeSM,lineHeight:i.lineHeightSM,fontWeight:"normal",marginBottom:i.marginXXS/2},"&-description":{display:"none"},"&-tail":{marginInlineStart:0,top:r+e/2,transform:"translateY(-50%)","&:after":{width:"100%",height:i.lineWidth,borderRadius:0,marginInlineStart:0,background:o}},[`&:first-child ${t}-item-tail`]:{width:"50%",marginInlineStart:"50%"},[`&:last-child ${t}-item-tail`]:{display:"block",width:"50%"},"&-wait":Object.assign({[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:i.colorBorderBg,border:`${i.lineWidth}px ${i.lineType} ${o}`}},l),"&-finish":Object.assign({[`${t}-item-tail::after`]:{backgroundColor:o},[`${t}-item-icon ${t}-icon ${t}-icon-dot`]:{backgroundColor:o,border:`${i.lineWidth}px ${i.lineType} ${o}`}},l),"&-error":l,"&-active, &-process":Object.assign({[`${t}-item-icon`]:{width:e,height:e,marginInlineStart:`calc(50% - ${e/2}px)`,top:0}},l),[`&:not(${t}-item-active) > ${t}-item-container[role='button']:hover`]:{[`${t}-item-title`]:{color:n}}}}}},Mi=Bi;var W;(function(i){i.wait="wait",i.process="process",i.finish="finish",i.error="error"})(W||(W={}));const R=(i,t)=>{const e=`${t.componentCls}-item`,n=`${i}IconColor`,o=`${i}TitleColor`,r=`${i}DescriptionColor`,l=`${i}TailColor`,g=`${i}IconBgColor`,s=`${i}IconBorderColor`,$=`${i}DotColor`;return{[`${e}-${i} ${e}-icon`]:{backgroundColor:t[g],borderColor:t[s],[`> ${t.componentCls}-icon`]:{color:t[n],[`${t.componentCls}-icon-dot`]:{background:t[$]}}},[`${e}-${i}${e}-custom ${e}-icon`]:{[`> ${t.componentCls}-icon`]:{color:t[$]}},[`${e}-${i} > ${e}-container > ${e}-content > ${e}-title`]:{color:t[o],"&::after":{backgroundColor:t[l]}},[`${e}-${i} > ${e}-container > ${e}-content > ${e}-description`]:{color:t[r]},[`${e}-${i} > ${e}-container > ${e}-tail::after`]:{backgroundColor:t[l]}}},_i=i=>{const{componentCls:t,motionDurationSlow:e}=i,n=`${t}-item`;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[n]:{position:"relative",display:"inline-block",flex:1,overflow:"hidden",verticalAlign:"top","&:last-child":{flex:"none",[`> ${n}-container > ${n}-tail, > ${n}-container >  ${n}-content > ${n}-title::after`]:{display:"none"}}},[`${n}-container`]:{outline:"none"},[`${n}-icon, ${n}-content`]:{display:"inline-block",verticalAlign:"top"},[`${n}-icon`]:{width:i.stepsIconSize,height:i.stepsIconSize,marginTop:0,marginBottom:0,marginInlineStart:0,marginInlineEnd:i.marginXS,fontSize:i.stepsIconFontSize,fontFamily:i.fontFamily,lineHeight:`${i.stepsIconSize}px`,textAlign:"center",borderRadius:i.stepsIconSize,border:`${i.lineWidth}px ${i.lineType} transparent`,transition:`background-color ${e}, border-color ${e}`,[`${t}-icon`]:{position:"relative",top:i.stepsIconTop,color:i.colorPrimary,lineHeight:1}},[`${n}-tail`]:{position:"absolute",top:i.stepsIconSize/2-i.paddingXXS,insetInlineStart:0,width:"100%","&::after":{display:"inline-block",width:"100%",height:i.lineWidth,background:i.colorSplit,borderRadius:i.lineWidth,transition:`background ${e}`,content:'""'}},[`${n}-title`]:{position:"relative",display:"inline-block",paddingInlineEnd:i.padding,color:i.colorText,fontSize:i.fontSizeLG,lineHeight:`${i.stepsTitleLineHeight}px`,"&::after":{position:"absolute",top:i.stepsTitleLineHeight/2,insetInlineStart:"100%",display:"block",width:9999,height:i.lineWidth,background:i.processTailColor,content:'""'}},[`${n}-subtitle`]:{display:"inline",marginInlineStart:i.marginXS,color:i.colorTextDescription,fontWeight:"normal",fontSize:i.fontSize},[`${n}-description`]:{color:i.colorTextDescription,fontSize:i.fontSize}},R(W.wait,i)),R(W.process,i)),{[`${n}-process > ${n}-container > ${n}-title`]:{fontWeight:i.fontWeightStrong}}),R(W.finish,i)),R(W.error,i)),{[`${n}${t}-next-error > ${t}-item-title::after`]:{background:i.colorError},[`${n}-disabled`]:{cursor:"not-allowed"}})},Li=i=>{const{componentCls:t,motionDurationSlow:e}=i;return{[`& ${t}-item`]:{[`&:not(${t}-item-active)`]:{[`& > ${t}-item-container[role='button']`]:{cursor:"pointer",[`${t}-item`]:{[`&-title, &-subtitle, &-description, &-icon ${t}-icon`]:{transition:`color ${e}`}},"&:hover":{[`${t}-item`]:{["&-title, &-subtitle, &-description"]:{color:i.colorPrimary}}}},[`&:not(${t}-item-process)`]:{[`& > ${t}-item-container[role='button']:hover`]:{[`${t}-item`]:{"&-icon":{borderColor:i.colorPrimary,[`${t}-icon`]:{color:i.colorPrimary}}}}}}},[`&${t}-horizontal:not(${t}-label-vertical)`]:{[`${t}-item`]:{paddingInlineStart:i.padding,whiteSpace:"nowrap","&:first-child":{paddingInlineStart:0},[`&:last-child ${t}-item-title`]:{paddingInlineEnd:0},"&-tail":{display:"none"},"&-description":{maxWidth:i.descriptionWidth,whiteSpace:"normal"}}}}},Ri=i=>{const{componentCls:t}=i;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ci(i)),{display:"flex",width:"100%",fontSize:0,textAlign:"initial"}),_i(i)),Li(i)),Ci(i)),Wi(i)),ji(i)),yi(i)),Xi(i)),wi(i)),Di(i)),Ti(i)),Mi(i))}},Ai=si("Steps",i=>{const{wireframe:t,colorTextDisabled:e,fontSizeHeading3:n,fontSize:o,controlHeight:r,controlHeightSM:l,controlHeightLG:g,colorTextLightSolid:s,colorText:$,colorPrimary:d,colorTextLabel:S,colorTextDescription:f,colorTextQuaternary:I,colorFillContent:z,controlItemBgActive:p,colorError:u,colorBgContainer:a,colorBorderSecondary:T}=i,h=i.controlHeight,b=i.colorSplit,y=ai(i,{processTailColor:b,stepsNavArrowColor:e,stepsIconSize:h,stepsIconCustomSize:h,stepsIconCustomTop:0,stepsIconCustomFontSize:l,stepsIconTop:-.5,stepsIconFontSize:o,stepsTitleLineHeight:r,stepsSmallIconSize:n,stepsDotSize:r/4,stepsCurrentDotSize:g/4,stepsNavContentMaxWidth:"auto",processIconColor:s,processTitleColor:$,processDescriptionColor:$,processIconBgColor:d,processIconBorderColor:d,processDotColor:d,waitIconColor:t?e:S,waitTitleColor:f,waitDescriptionColor:f,waitTailColor:b,waitIconBgColor:t?a:z,waitIconBorderColor:t?e:"transparent",waitDotColor:e,finishIconColor:d,finishTitleColor:$,finishDescriptionColor:f,finishTailColor:d,finishIconBgColor:t?a:p,finishIconBorderColor:t?d:p,finishDotColor:d,errorIconColor:s,errorTitleColor:u,errorDescriptionColor:u,errorTailColor:b,errorIconBgColor:u,errorIconBorderColor:u,errorDotColor:u,stepsNavActiveColor:d,stepsProgressSize:g,inlineDotSize:6,inlineTitleColor:I,inlineTailColor:T});return[Ri(y)]},{descriptionWidth:140});var Ei=globalThis&&globalThis.__rest||function(i,t){var e={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&t.indexOf(n)<0&&(e[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(i);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(i,n[o])&&(e[n[o]]=i[n[o]]);return e};const k=i=>{const{percent:t,size:e,className:n,rootClassName:o,direction:r,items:l,responsive:g=!0,current:s=0,children:$}=i,d=Ei(i,["percent","size","className","rootClassName","direction","items","responsive","current","children"]),{xs:S}=hi(g),{getPrefixCls:f,direction:I}=G.exports.useContext(di),z=G.exports.useMemo(()=>g&&S?"vertical":r,[S,r]),p=f("steps",i.prefixCls),[u,a]=Ai(p),T=i.type==="inline",h=f("",i.iconPrefix),b=bi(l,$),y=T?void 0:t,O=E({[`${p}-rtl`]:I==="rtl",[`${p}-with-progress`]:y!==void 0},n,o,a),D={finish:c(pi,{className:`${p}-finish-icon`}),error:c(mi,{className:`${p}-error-icon`})};return u(c(V,{...Object.assign({icons:D},d,{current:s,size:e,items:b,itemRender:T?(x,w)=>x.description?c($i,{title:x.description,children:w}):w:void 0,stepIcon:x=>{let{node:w,status:N}=x;if(N==="process"&&y!==void 0){const X=e==="small"?32:40;return A("div",{className:`${p}-progress-icon`,children:[c(gi,{type:"circle",percent:y,size:X,strokeWidth:4,format:()=>null}),w]})}return w},direction:z,prefixCls:p,iconPrefix:h,className:O})}))};k.Step=V.Step;const Ki=k;export{Ki as S};
//# sourceMappingURL=index.863bf3e5.js.map
