import{a7 as R,e as Q,j as s,f as O,g as E,_ as q,a as k,a0 as oe,a2 as T,Q as J,r as S,d as te,O as ie,P as re,y as le,o as U,i as se,k as ce,a3 as de,l as ue,bi as pe,v as ve,a8 as me,x as G,a6 as L,a_ as fe,A as ge,m as Ce,u as xe,F as V,B as he,b4 as ye,T as be}from"./index.904a2463.js";import X from"./CompanyDescriptions.0f5aa846.js";import{d as $e}from"./myAccount.971e50fb.js";import"./index.a1d07257.js";import"./ExclamationCircleOutlined.6918ea81.js";var Y=R.forwardRef(function(n,e){var a,o=n.prefixCls,i=n.forceRender,g=n.className,C=n.style,p=n.children,c=n.isActive,r=n.role,A=R.useState(c||i),t=Q(A,2),d=t[0],m=t[1];return R.useEffect(function(){(i||c)&&m(!0)},[i,c]),d?s("div",{ref:e,className:O("".concat(o,"-content"),(a={},E(a,"".concat(o,"-content-active"),c),E(a,"".concat(o,"-content-inactive"),!c),a),g),style:C,role:r,children:s("div",{className:"".concat(o,"-content-box"),children:p})}):null});Y.displayName="PanelContent";var Ie=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],Z=R.forwardRef(function(n,e){var a,o,i=n.showArrow,g=i===void 0?!0:i,C=n.headerClass,p=n.isActive,c=n.onItemClick,r=n.forceRender,A=n.className,t=n.prefixCls,d=n.collapsible,m=n.accordion,N=n.panelKey,f=n.extra,u=n.header,h=n.expandIcon,y=n.openMotion,$=n.destroyInactivePanel,v=n.children,w=q(n,Ie),b=d==="disabled",I=d==="header",P=d==="icon",l=f!=null&&typeof f!="boolean",x=function(){c==null||c(N)},M=function(K){(K.key==="Enter"||K.keyCode===T.ENTER||K.which===T.ENTER)&&x()},F=typeof h=="function"?h(n):s("i",{className:"arrow"});F&&(F=s("div",{className:"".concat(t,"-expand-icon"),onClick:["header","icon"].includes(d)?x:void 0,children:F}));var z=O((a={},E(a,"".concat(t,"-item"),!0),E(a,"".concat(t,"-item-active"),p),E(a,"".concat(t,"-item-disabled"),b),a),A),j=O(C,(o={},E(o,"".concat(t,"-header"),!0),E(o,"".concat(t,"-header-collapsible-only"),I),E(o,"".concat(t,"-icon-collapsible-only"),P),o)),_={className:j,"aria-expanded":p,"aria-disabled":b,onKeyDown:M};return!I&&!P&&(_.onClick=x,_.role=m?"tab":"button",_.tabIndex=b?-1:0),k("div",{...w,ref:e,className:z,children:[k("div",{..._,children:[g&&F,s("span",{className:"".concat(t,"-header-text"),onClick:d==="header"?x:void 0,children:u}),l&&s("div",{className:"".concat(t,"-extra"),children:f})]}),s(oe,{visible:p,leavedClassName:"".concat(t,"-content-hidden"),...y,forceRender:r,removeOnLeave:$,children:function(D,K){var ne=D.className,ae=D.style;return s(Y,{ref:K,prefixCls:t,className:ne,style:ae,isActive:p,forceRender:r,role:m?"tabpanel":void 0,children:v})}})]})}),Pe=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],Ae=function(e,a){var o=a.prefixCls,i=a.accordion,g=a.collapsible,C=a.destroyInactivePanel,p=a.onItemClick,c=a.activeKey,r=a.openMotion,A=a.expandIcon;return e.map(function(t,d){var m=t.children,N=t.label,f=t.key,u=t.collapsible,h=t.onItemClick,y=t.destroyInactivePanel,$=q(t,Pe),v=String(f!=null?f:d),w=u!=null?u:g,b=y!=null?y:C,I=function(x){w!=="disabled"&&(p(x),h==null||h(x))},P=!1;return i?P=c[0]===v:P=c.indexOf(v)>-1,S.exports.createElement(Z,{...$,prefixCls:o,key:v,panelKey:v,isActive:P,accordion:i,openMotion:r,expandIcon:A,header:N,collapsible:w,onItemClick:I,destroyInactivePanel:b},m)})},we=function(e,a,o){if(!e)return null;var i=o.prefixCls,g=o.accordion,C=o.collapsible,p=o.destroyInactivePanel,c=o.onItemClick,r=o.activeKey,A=o.openMotion,t=o.expandIcon,d=e.key||String(a),m=e.props,N=m.header,f=m.headerClass,u=m.destroyInactivePanel,h=m.collapsible,y=m.onItemClick,$=!1;g?$=r[0]===d:$=r.indexOf(d)>-1;var v=h!=null?h:C,w=function(P){v!=="disabled"&&(c(P),y==null||y(P))},b={key:d,panelKey:d,header:N,headerClass:f,isActive:$,prefixCls:i,destroyInactivePanel:u!=null?u:p,openMotion:A,accordion:g,children:e.props.children,onItemClick:w,expandIcon:t,collapsible:v};return typeof e.type=="string"?e:(Object.keys(b).forEach(function(I){typeof b[I]>"u"&&delete b[I]}),R.cloneElement(e,b))};function Ne(n,e,a){return Array.isArray(n)?Ae(n,a):J(e).map(function(o,i){return we(o,i,a)})}function Se(n){var e=n;if(!Array.isArray(e)){var a=re(e);e=a==="number"||a==="string"?[e]:[]}return e.map(function(o){return String(o)})}var Fe=R.forwardRef(function(n,e){var a=n.prefixCls,o=a===void 0?"rc-collapse":a,i=n.destroyInactivePanel,g=i===void 0?!1:i,C=n.style,p=n.accordion,c=n.className,r=n.children,A=n.collapsible,t=n.openMotion,d=n.expandIcon,m=n.activeKey,N=n.defaultActiveKey,f=n.onChange,u=n.items,h=O(o,c),y=te([],{value:m,onChange:function(l){return f==null?void 0:f(l)},defaultValue:N,postState:Se}),$=Q(y,2),v=$[0],w=$[1],b=function(l){return w(function(){if(p)return v[0]===l?[]:[l];var x=v.indexOf(l),M=x>-1;return M?v.filter(function(F){return F!==l}):[].concat(le(v),[l])})};ie(!r,"`children` will be removed in next major version. Please use `items` instead.");var I=Ne(u,r,{prefixCls:o,accordion:p,openMotion:t,expandIcon:d,collapsible:A,destroyInactivePanel:g,onItemClick:b,activeKey:v});return s("div",{ref:e,className:h,style:C,role:p?"tablist":void 0,children:I})});const H=Object.assign(Fe,{Panel:Z});H.Panel;const _e=S.exports.forwardRef((n,e)=>{const{getPrefixCls:a}=S.exports.useContext(U),{prefixCls:o,className:i,showArrow:g=!0}=n,C=a("collapse",o),p=O({[`${C}-no-arrow`]:!g},i);return s(H.Panel,{...Object.assign({ref:e},n,{prefixCls:C,className:p})})}),Be=_e,Ee=n=>{const{componentCls:e,collapseContentBg:a,padding:o,collapseContentPaddingHorizontal:i,collapseHeaderBg:g,collapseHeaderPadding:C,collapseHeaderPaddingSM:p,collapseHeaderPaddingLG:c,collapsePanelBorderRadius:r,lineWidth:A,lineType:t,colorBorder:d,colorText:m,colorTextHeading:N,colorTextDisabled:f,fontSize:u,fontSizeLG:h,lineHeight:y,marginSM:$,paddingSM:v,paddingLG:w,paddingXS:b,motionDurationSlow:I,fontSizeIcon:P}=n,l=`${A}px ${t} ${d}`;return{[e]:Object.assign(Object.assign({},ue(n)),{backgroundColor:g,border:l,borderBottom:0,borderRadius:`${r}px`,["&-rtl"]:{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:l,["&:last-child"]:{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${r}px ${r}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:C,paddingInlineStart:v,color:N,lineHeight:y,cursor:"pointer",transition:`all ${I}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:u*y,display:"flex",alignItems:"center",paddingInlineEnd:$,marginInlineStart:o-v},[`${e}-arrow`]:Object.assign(Object.assign({},pe()),{fontSize:P,svg:{transition:`transform ${I}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:m,backgroundColor:a,borderTop:l,[`& > ${e}-content-box`]:{padding:`${o}px ${i}px`},["&-hidden"]:{display:"none"}},["&-small"]:{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:p,paddingInlineStart:b,[`> ${e}-expand-icon`]:{marginInlineStart:v-b}},[`> ${e}-content > ${e}-content-box`]:{padding:v}}},["&-large"]:{[`> ${e}-item`]:{fontSize:h,[`> ${e}-header`]:{padding:c,paddingInlineStart:o,[`> ${e}-expand-icon`]:{height:h*y,marginInlineStart:w-o}},[`> ${e}-content > ${e}-content-box`]:{padding:w}}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${r}px ${r}px`}},[`& ${e}-item-disabled > ${e}-header`]:{[`
          &,
          & > .arrow
        `]:{color:f,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:$}}}}})}},ke=n=>{const{componentCls:e}=n,a=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},Me=n=>{const{componentCls:e,collapseHeaderBg:a,paddingXXS:o,colorBorder:i}=n;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${i}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:o}}}},Re=n=>{const{componentCls:e,paddingSM:a}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},Oe=se("Collapse",n=>{const e=ce(n,{collapseContentBg:n.colorBgContainer,collapseHeaderBg:n.colorFillAlter,collapseHeaderPadding:`${n.paddingSM}px ${n.padding}px`,collapseHeaderPaddingSM:`${n.paddingXS}px ${n.paddingSM}px`,collapseHeaderPaddingLG:`${n.padding}px ${n.paddingLG}px`,collapsePanelBorderRadius:n.borderRadiusLG,collapseContentPaddingHorizontal:16});return[Ee(e),Me(e),Re(e),ke(e),de(e)]}),De=S.exports.forwardRef((n,e)=>{const{getPrefixCls:a,direction:o,collapse:i}=S.exports.useContext(U),{prefixCls:g,className:C,rootClassName:p,style:c,bordered:r=!0,ghost:A,size:t,expandIconPosition:d="start",children:m,expandIcon:N}=n,f=ve(l=>{var x;return(x=t!=null?t:l)!==null&&x!==void 0?x:"middle"}),u=a("collapse",g),h=a(),[y,$]=Oe(u),v=S.exports.useMemo(()=>d==="left"?"start":d==="right"?"end":d,[d]),w=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const x=N?N(l):s(fe,{rotate:l.isActive?90:void 0});return L(x,()=>({className:O(x.props.className,`${u}-arrow`)}))},b=O(`${u}-icon-position-${v}`,{[`${u}-borderless`]:!r,[`${u}-rtl`]:o==="rtl",[`${u}-ghost`]:!!A,[`${u}-${f}`]:f!=="middle"},i==null?void 0:i.className,C,p,$),I=Object.assign(Object.assign({},me(h)),{motionAppear:!1,leavedClassName:`${u}-content-hidden`}),P=S.exports.useMemo(()=>m?J(m).map((l,x)=>{var M,F;if(!((M=l.props)===null||M===void 0)&&M.disabled){const z=(F=l.key)!==null&&F!==void 0?F:String(x),{disabled:j,collapsible:_}=l.props,D=Object.assign(Object.assign({},G(l.props,["disabled"])),{key:z,collapsible:_!=null?_:j?"disabled":void 0});return L(l,D)}return l}):null,[m]);return y(s(H,{...Object.assign({ref:e,openMotion:I},G(n,["rootClassName"]),{expandIcon:w,prefixCls:u,className:b,style:Object.assign(Object.assign({},i==null?void 0:i.style),c)}),children:P}))}),ee=Object.assign(De,{Panel:Be});var Ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM640 812a32 32 0 1064 0 32 32 0 10-64 0zm12-64h40c4.4 0 8-3.6 8-8V628c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"exception",theme:"outlined"};const ze=Ke;var je=function(e,a){return s(ge,{...e,ref:a,icon:ze})};const W=S.exports.forwardRef(je),He="_warning_52d2v_6",Te="_title_52d2v_40",Ge="_panel_52d2v_50",B={"tool-bar":"_tool-bar_52d2v_1",warning:He,"warning-icon":"_warning-icon_52d2v_16","apply-btn":"_apply-btn_52d2v_25","is-approving":"_is-approving_52d2v_28","approve-tips":"_approve-tips_52d2v_34",title:Te,"record-wrap":"_record-wrap_52d2v_46",panel:Ge},{Panel:Le}=ee,Ve=["\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\uFF0C\u5DF2\u66F4\u65B0\u5355\u4F4D\u4FE1\u606F\u3002","","\u7533\u8BF7\u5BA1\u6279\u672A\u901A\u8FC7\uFF0C\u8BF7\u91CD\u65B0\u63D0\u4EA4\u7533\u8BF7\u3002","\u7533\u8BF7\u5BA1\u6279\u5DF2\u64A4\u56DE\u3002"],Ue=()=>{var c;const[n,e]=S.exports.useState(),[a,o]=S.exports.useState(!1);S.exports.useEffect(()=>{(async()=>{const{data:r}=await $e();e(r),o(r.hasApply)})()},[]);const[i,g]=Ce.useMessage(),C=xe(),p=()=>{a?i.warning({content:"\u60A8\u5DF2\u63D0\u4EA4\u4FE1\u606F\u4FEE\u6539\u7533\u8BF7\uFF0C\u4E14\u6B63\u5728\u5BA1\u6279\u73AF\u8282\uFF0C\u8BF7\u52FF\u91CD\u590D\u63D0\u4EA4\uFF01"}):C("/app/myAccount/companySettings")};return k(V,{children:[g,k("div",{className:B["tool-bar"],children:[a&&k("div",{className:B.warning,children:[s("i",{className:B["warning-icon"]}),"\u4FEE\u6539\u7533\u8BF7\u5BA1\u6279\u4E2D"]}),s(he,{type:"primary",icon:s(ye,{}),className:`${B["apply-btn"]} ${a&&B["is-approving"]}`,onClick:p,children:"\u4FEE\u6539\u7533\u8BF7\u4FE1\u606F"})]}),s(X,{companyInfo:n}),s("div",{className:`${B.title} font-primary-color`,children:"\u7533\u8BF7\u8BB0\u5F55"}),s("div",{className:B["record-wrap"],children:n&&n.applyRecord?(c=n.applyRecord)==null?void 0:c.map(r=>k(R.Fragment,{children:[r.state!==1&&k("div",{className:B["approve-tips"],children:[s(W,{style:{marginRight:20}}),r.completeTime," ",Ve[r.state]]}),s(ee,{bordered:!1,expandIconPosition:"end",ghost:!0,children:s(Le,{style:{borderBottom:"1px solid #E8E9EA"},header:k(V,{children:[s(W,{style:{marginRight:20}}),r.addTime," \u63D0\u4EA4\u7533\u8BF7\uFF0C\u7533\u8BF7\u8868\u5355\u5982\u4E0B"]}),children:s(X,{companyInfo:r.info})},r.id)})]},r.id)):s(be.Text,{type:"secondary",style:{marginTop:20,display:"block"},children:"\u6682\u65E0\u7533\u8BF7\u8BB0\u5F55"})})]})};export{Ue as default};