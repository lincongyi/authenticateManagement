import{R as j,W as ee,a as r,n as H,M as w,ap as se,j as M,av as le,s as X,G as ce,y as ne,Y as de,_ as ue,i as $,k as ae,g as pe,m as me,b8 as fe,r as ve,bC as ge,aj as he,ba as Ce,l as q,w as Y,aZ as xe,A as be,q as Z,aG as $e,d as J,ah as ye,aE as Ae}from"./index.bd1b03b0.js";import Q from"./CompanyDescriptions.7e569ec7.js";import{b as Ie}from"./myAccount.c807f0a3.js";import{E as Ne}from"./EditOutlined.6b3d49fc.js";import"./index.22bd8aaa.js";import"./index.5100c601.js";import"./css.d6e3059f.js";import"./ExclamationCircleOutlined.1e1a9848.js";var oe=j.forwardRef(function(n,e){var a,t=n.prefixCls,c=n.forceRender,g=n.className,u=n.style,o=n.children,p=n.isActive,m=n.role,N=j.useState(p||c),i=ee(N,2),f=i[0],b=i[1];return j.useEffect(function(){(c||p)&&b(!0)},[c,p]),f?r("div",{ref:e,className:H("".concat(t,"-content"),(a={},w(a,"".concat(t,"-content-active"),p),w(a,"".concat(t,"-content-inactive"),!p),a),g),style:u,role:m,children:r("div",{className:"".concat(t,"-content-box"),children:o})}):null});oe.displayName="PanelContent";var Pe=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],_e=j.forwardRef(function(n,e){var a,t,c=n.showArrow,g=c===void 0?!0:c,u=n.headerClass,o=n.isActive,p=n.onItemClick,m=n.forceRender,N=n.className,i=n.prefixCls,f=n.collapsible,b=n.accordion,E=n.panelKey,l=n.extra,O=n.header,P=n.expandIcon,y=n.openMotion,h=n.destroyInactivePanel,F=n.children,z=se(n,Pe),A=f==="disabled",S=f==="header",d=f==="icon",s=l!=null&&typeof l!="boolean",C=function(){p==null||p(E)},x=function(_){(_.key==="Enter"||_.keyCode===X.ENTER||_.which===X.ENTER)&&C()},v=typeof P=="function"?P(n):r("i",{className:"arrow"});v&&(v=r("div",{className:"".concat(i,"-expand-icon"),onClick:["header","icon"].includes(f)?C:void 0,children:v}));var D=H((a={},w(a,"".concat(i,"-item"),!0),w(a,"".concat(i,"-item-active"),o),w(a,"".concat(i,"-item-disabled"),A),a),N),k=H((t={},w(t,"".concat(i,"-header"),!0),w(t,"headerClass",u),w(t,"".concat(i,"-header-collapsible-only"),S),w(t,"".concat(i,"-icon-collapsible-only"),d),t)),I={className:k,"aria-expanded":o,"aria-disabled":A,onKeyPress:x};return!S&&!d&&(I.onClick=C,I.role=b?"tab":"button",I.tabIndex=A?-1:0),M("div",{...z,ref:e,className:D,children:[M("div",{...I,children:[g&&v,r("span",{className:"".concat(i,"-header-text"),onClick:f==="header"?C:void 0,children:O}),s&&r("div",{className:"".concat(i,"-extra"),children:l})]}),r(le,{visible:o,leavedClassName:"".concat(i,"-content-hidden"),...y,forceRender:m,removeOnLeave:h,children:function(B,_){var K=B.className,T=B.style;return r(oe,{ref:_,prefixCls:i,className:K,style:T,isActive:o,forceRender:m,role:b?"tabpanel":void 0,children:F})}})]})});function we(n){var e=n;if(!Array.isArray(e)){var a=de(e);e=a==="number"||a==="string"?[e]:[]}return e.map(function(t){return String(t)})}var Ee=j.forwardRef(function(n,e){var a=n.prefixCls,t=a===void 0?"rc-collapse":a,c=n.destroyInactivePanel,g=c===void 0?!1:c,u=n.style,o=n.accordion,p=n.className,m=n.children,N=n.collapsible,i=n.openMotion,f=n.expandIcon,b=n.activeKey,E=n.defaultActiveKey,l=n.onChange,O=H(t,p),P=ce([],{value:b,onChange:function(s){return l==null?void 0:l(s)},defaultValue:E,postState:we}),y=ee(P,2),h=y[0],F=y[1],z=function(s){return F(function(){if(o)return h[0]===s?[]:[s];var C=h.indexOf(s),x=C>-1;return x?h.filter(function(v){return v!==s}):[].concat(ue(h),[s])})},A=function(s,C){if(!s)return null;var x=s.key||String(C),v=s.props,D=v.header,k=v.headerClass,I=v.destroyInactivePanel,B=v.collapsible,_=v.onItemClick,K=!1;o?K=h[0]===x:K=h.indexOf(x)>-1;var T=B!=null?B:N,ie=function(W){T!=="disabled"&&(z(W),_==null||_(W))},G={key:x,panelKey:x,header:D,headerClass:k,isActive:K,prefixCls:t,destroyInactivePanel:I!=null?I:g,openMotion:i,accordion:o,children:s.props.children,onItemClick:ie,expandIcon:f,collapsible:T};return typeof s.type=="string"?s:(Object.keys(G).forEach(function(L){typeof G[L]>"u"&&delete G[L]}),j.cloneElement(s,G))},S=ne(m).map(A);return r("div",{ref:e,className:O,style:u,role:o?"tablist":void 0,children:S})});const V=Object.assign(Ee,{Panel:_e});V.Panel;const Fe=$.exports.forwardRef((n,e)=>{const{getPrefixCls:a}=$.exports.useContext(ae),{prefixCls:t,className:c="",showArrow:g=!0}=n,u=a("collapse",t),o=H({[`${u}-no-arrow`]:!g},c);return r(V.Panel,{...Object.assign({ref:e},n,{prefixCls:u,className:o})})}),Se=Fe,Be=n=>{const{componentCls:e,collapseContentBg:a,padding:t,collapseContentPaddingHorizontal:c,collapseHeaderBg:g,collapseHeaderPadding:u,collapseHeaderPaddingSM:o,collapseHeaderPaddingLG:p,collapsePanelBorderRadius:m,lineWidth:N,lineType:i,colorBorder:f,colorText:b,colorTextHeading:E,colorTextDisabled:l,fontSize:O,fontSizeLG:P,lineHeight:y,marginSM:h,paddingSM:F,paddingLG:z,motionDurationSlow:A,fontSizeIcon:S}=n,d=`${N}px ${i} ${f}`;return{[e]:Object.assign(Object.assign({},ve(n)),{backgroundColor:g,border:d,borderBottom:0,borderRadius:`${m}px`,["&-rtl"]:{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:d,["&:last-child"]:{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${m}px ${m}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:u,color:E,lineHeight:y,cursor:"pointer",transition:`all ${A}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:O*y,display:"flex",alignItems:"center",paddingInlineEnd:h},[`${e}-arrow`]:Object.assign(Object.assign({},ge()),{fontSize:S,svg:{transition:`transform ${A}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}},[`&${e}-no-arrow`]:{[`> ${e}-header`]:{paddingInlineStart:F}}},[`${e}-content`]:{color:b,backgroundColor:a,borderTop:d,[`& > ${e}-content-box`]:{padding:`${t}px ${c}px`},["&-hidden"]:{display:"none"}},["&-small"]:{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:o},[`> ${e}-content > ${e}-content-box`]:{padding:F}}},["&-large"]:{[`> ${e}-item`]:{fontSize:P,[`> ${e}-header`]:{padding:p,[`> ${e}-expand-icon`]:{height:P*y}},[`> ${e}-content > ${e}-content-box`]:{padding:z}}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${m}px ${m}px`}},[`& ${e}-item-disabled > ${e}-header`]:{[`
          &,
          & > .arrow
        `]:{color:l,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:h}}}}})}},Re=n=>{const{componentCls:e}=n,a=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},Me=n=>{const{componentCls:e,collapseHeaderBg:a,paddingXXS:t,colorBorder:c}=n;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${c}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:t}}}},Oe=n=>{const{componentCls:e,paddingSM:a}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},ze=pe("Collapse",n=>{const e=me(n,{collapseContentBg:n.colorBgContainer,collapseHeaderBg:n.colorFillAlter,collapseHeaderPadding:`${n.paddingSM}px ${n.padding}px`,collapseHeaderPaddingSM:`${n.paddingXS}px ${n.paddingSM}px`,collapseHeaderPaddingLG:`${n.padding}px ${n.paddingLG}px`,collapsePanelBorderRadius:n.borderRadiusLG,collapseContentPaddingHorizontal:16});return[Be(e),Me(e),Oe(e),Re(e),fe(e)]}),ke=$.exports.forwardRef((n,e)=>{const{getPrefixCls:a,direction:t}=$.exports.useContext(ae),c=$.exports.useContext(he),{prefixCls:g,className:u,rootClassName:o,bordered:p=!0,ghost:m,size:N,expandIconPosition:i="start",children:f,expandIcon:b}=n,E=N||c||"middle",l=a("collapse",g),O=a(),[P,y]=ze(l),h=$.exports.useMemo(()=>i==="left"?"start":i==="right"?"end":i,[i]),F=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=b?b(d):r(xe,{rotate:d.isActive?90:void 0});return Y(s,()=>({className:H(s.props.className,`${l}-arrow`)}))},z=H(`${l}-icon-position-${h}`,{[`${l}-borderless`]:!p,[`${l}-rtl`]:t==="rtl",[`${l}-ghost`]:!!m,[`${l}-${E}`]:E!=="middle"},u,o,y),A=Object.assign(Object.assign({},Ce(O)),{motionAppear:!1,leavedClassName:`${l}-content-hidden`}),S=$.exports.useMemo(()=>ne(f).map((d,s)=>{var C,x;if(!((C=d.props)===null||C===void 0)&&C.disabled){const v=(x=d.key)!==null&&x!==void 0?x:String(s),{disabled:D,collapsible:k}=d.props,I=Object.assign(Object.assign({},q(d.props,["disabled"])),{key:v,collapsible:k!=null?k:D?"disabled":void 0});return Y(d,I)}return d}),[f]);return P(r(V,{...Object.assign({ref:e,openMotion:A},q(n,["rootClassName"]),{expandIcon:F,prefixCls:l,className:z}),children:S}))}),te=Object.assign(ke,{Panel:Se});var je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM640 812a32 32 0 1064 0 32 32 0 10-64 0zm12-64h40c4.4 0 8-3.6 8-8V628c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"exception",theme:"outlined"};const He=je;var re=function(e,a){return r(be,{...Z(Z({},e),{},{ref:a,icon:He})})};re.displayName="ExceptionOutlined";const U=$.exports.forwardRef(re),De="_warning_1av0a_5",Ke="_title_1av0a_39",Te="_panel_1av0a_49",R={"tool-bar":"_tool-bar_1av0a_1",warning:De,"warning-icon":"_warning-icon_1av0a_15","apply-btn":"_apply-btn_1av0a_24","is-approving":"_is-approving_1av0a_27","approve-tips":"_approve-tips_1av0a_33",title:Ke,"record-wrap":"_record-wrap_1av0a_45",panel:Te},{Panel:Ge}=te,Le=["\u7533\u8BF7\u5BA1\u6279\u901A\u8FC7\uFF0C\u5DF2\u66F4\u65B0\u5355\u4F4D\u4FE1\u606F\u3002","","\u7533\u8BF7\u5BA1\u6279\u672A\u901A\u8FC7\uFF0C\u8BF7\u91CD\u65B0\u63D0\u4EA4\u7533\u8BF7\u3002","\u7533\u8BF7\u5BA1\u6279\u5DF2\u64A4\u56DE\u3002"],Ue=()=>{var u;const[n,e]=$.exports.useState(),[a,t]=$.exports.useState(!0);$.exports.useEffect(()=>{(async()=>{const{data:o}=await Ie();e(o),t(o.hasApply)})()},[]);const c=$e(),g=()=>{a?Ae.warning({content:"\u60A8\u5DF2\u63D0\u4EA4\u4FE1\u606F\u4FEE\u6539\u7533\u8BF7\uFF0C\u4E14\u6B63\u5728\u5BA1\u6279\u73AF\u8282\uFF0C\u8BF7\u52FF\u91CD\u590D\u63D0\u4EA4\uFF01"}):c("/app/myAccount/companySettings")};return M(J,{children:[M("div",{className:R["tool-bar"],children:[M("div",{className:R.warning,children:[r("i",{className:R["warning-icon"]}),"\u4FEE\u6539\u7533\u8BF7\u5BA1\u6279\u4E2D"]}),r(ye,{type:"primary",icon:r(Ne,{}),className:`${R["apply-btn"]} ${a&&R["is-approving"]}`,onClick:g,children:"\u4FEE\u6539\u7533\u8BF7\u4FE1\u606F"})]}),r(Q,{companyInfo:n}),r("div",{className:`${R.title} font-primary-color`,children:"\u7533\u8BF7\u8BB0\u5F55"}),r("div",{className:R["record-wrap"],children:n&&((u=n.applyRecord)==null?void 0:u.reverse().map(o=>M(j.Fragment,{children:[o.state!==1&&M("div",{className:R["approve-tips"],children:[r(U,{style:{marginRight:20}}),o.completeTime," ",Le[o.state]]}),r(te,{bordered:!1,expandIconPosition:"end",ghost:!0,children:r(Ge,{style:{borderBottom:"1px solid #E8E9EA"},header:M(J,{children:[r(U,{style:{marginRight:20}}),o.addTime," \u63D0\u4EA4\u7533\u8BF7\uFF0C\u7533\u8BF7\u8868\u5355\u5982\u4E0B"]}),children:r(Q,{companyInfo:o.info})},o.id)})]},o.id)))})]})};export{Ue as default};
//# sourceMappingURL=index.3eb891b3.js.map
