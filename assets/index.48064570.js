import{k as s,a as f,q as G,O as W,ar as ye,ax as Lt,t as V,Y as I,aK as kt,$ as Ae,aL as Bt,j as ce,aM as Ot,aN as Mt,v as Q,aO as At,_ as et,U as tt,L as at,aP as zt,aQ as Dt,J as rt,aR as Ht,B as jt,ag as nt,h as Wt,m as Gt,r as ft,af as Kt,aS as bt,n as Xt,al as Vt,aT as Ut,az as Ft,av as Yt}from"./index.ce7f2286.js";const Ce=s.exports.createContext(null);var mt=s.exports.forwardRef(function(e,t){var a=e.prefixCls,r=e.className,n=e.style,o=e.id,i=e.active,l=e.tabKey,c=e.children;return f("div",{id:o&&"".concat(o,"-panel-").concat(l),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(l),"aria-hidden":!i,style:n,className:G(a,i&&"".concat(a,"-active"),r),ref:t,children:c})}),Qt=["key","forceRender","style","className"];function qt(e){var t=e.id,a=e.activeKey,r=e.animated,n=e.tabPosition,o=e.destroyInactiveTabPane,i=s.exports.useContext(Ce),l=i.prefixCls,c=i.tabs,x=r.tabPane,C="".concat(l,"-tabpane");return f("div",{className:G("".concat(l,"-content-holder")),children:f("div",{className:G("".concat(l,"-content"),"".concat(l,"-content-").concat(n),W({},"".concat(l,"-content-animated"),x)),children:c.map(function(u){var $=u.key,R=u.forceRender,P=u.style,L=u.className,B=ye(u,Qt),E=$===a;return f(Lt,{visible:E,forceRender:R,removeOnLeave:!!o,leavedClassName:"".concat(C,"-hidden"),...r.tabPaneMotion,children:function(k,S){var D=k.style,O=k.className;return f(mt,{...B,prefixCls:C,id:t,tabKey:$,animated:x,active:E,style:V(V({},P),D),className:G(L,O),ref:S})}},$)})})})}var ot={width:0,height:0,left:0,top:0};function Jt(e,t,a){return s.exports.useMemo(function(){for(var r,n=new Map,o=t.get((r=e[0])===null||r===void 0?void 0:r.key)||ot,i=o.left+o.width,l=0;l<e.length;l+=1){var c=e[l].key,x=t.get(c);if(!x){var C;x=t.get((C=e[l-1])===null||C===void 0?void 0:C.key)||ot}var u=n.get(c)||V({},x);u.right=i-u.left-u.width,n.set(c,u)}return n},[e.map(function(r){return r.key}).join("_"),t,a])}function it(e,t){var a=s.exports.useRef(e),r=s.exports.useState({}),n=I(r,2),o=n[1];function i(l){var c=typeof l=="function"?l(a.current):l;c!==a.current&&t(c,a.current),a.current=c,o({})}return[a.current,i]}var Zt=.1,st=.01,Se=20,lt=Math.pow(.995,Se);function ea(e,t){var a=s.exports.useState(),r=I(a,2),n=r[0],o=r[1],i=s.exports.useState(0),l=I(i,2),c=l[0],x=l[1],C=s.exports.useState(0),u=I(C,2),$=u[0],R=u[1],P=s.exports.useState(),L=I(P,2),B=L[0],E=L[1],k=s.exports.useRef();function S(g){var w=g.touches[0],d=w.screenX,y=w.screenY;o({x:d,y}),window.clearInterval(k.current)}function D(g){if(!!n){g.preventDefault();var w=g.touches[0],d=w.screenX,y=w.screenY;o({x:d,y});var v=d-n.x,m=y-n.y;t(v,m);var K=Date.now();x(K),R(K-c),E({x:v,y:m})}}function O(){if(!!n&&(o(null),E(null),B)){var g=B.x/$,w=B.y/$,d=Math.abs(g),y=Math.abs(w);if(Math.max(d,y)<Zt)return;var v=g,m=w;k.current=window.setInterval(function(){if(Math.abs(v)<st&&Math.abs(m)<st){window.clearInterval(k.current);return}v*=lt,m*=lt,t(v*Se,m*Se)},Se)}}var _=s.exports.useRef();function T(g){var w=g.deltaX,d=g.deltaY,y=0,v=Math.abs(w),m=Math.abs(d);v===m?y=_.current==="x"?w:d:v>m?(y=w,_.current="x"):(y=d,_.current="y"),t(-y,-y)&&g.preventDefault()}var M=s.exports.useRef(null);M.current={onTouchStart:S,onTouchMove:D,onTouchEnd:O,onWheel:T},s.exports.useEffect(function(){function g(v){M.current.onTouchStart(v)}function w(v){M.current.onTouchMove(v)}function d(v){M.current.onTouchEnd(v)}function y(v){M.current.onWheel(v)}return document.addEventListener("touchmove",w,{passive:!1}),document.addEventListener("touchend",d,{passive:!1}),e.current.addEventListener("touchstart",g,{passive:!1}),e.current.addEventListener("wheel",y),function(){document.removeEventListener("touchmove",w),document.removeEventListener("touchend",d)}},[])}function ht(e){var t=s.exports.useState(0),a=I(t,2),r=a[0],n=a[1],o=s.exports.useRef(0),i=s.exports.useRef();return i.current=e,kt(function(){var l;(l=i.current)===null||l===void 0||l.call(i)},[r]),function(){o.current===r&&(o.current+=1,n(o.current))}}function ta(e){var t=s.exports.useRef([]),a=s.exports.useState({}),r=I(a,2),n=r[1],o=s.exports.useRef(typeof e=="function"?e():e),i=ht(function(){var c=o.current;t.current.forEach(function(x){c=x(c)}),t.current=[],o.current=c,n({})});function l(c){t.current.push(c),i()}return[o.current,l]}var ct={width:0,height:0,left:0,top:0,right:0};function aa(e,t,a,r,n,o,i){var l=i.tabs,c=i.tabPosition,x=i.rtl,C,u,$;return["top","bottom"].includes(c)?(C="width",u=x?"right":"left",$=Math.abs(a)):(C="height",u="top",$=-a),s.exports.useMemo(function(){if(!l.length)return[0,0];for(var R=l.length,P=R,L=0;L<R;L+=1){var B=e.get(l[L].key)||ct;if(B[u]+B[C]>$+t){P=L-1;break}}for(var E=0,k=R-1;k>=0;k-=1){var S=e.get(l[k].key)||ct;if(S[u]<$){E=k+1;break}}return[E,P]},[e,t,r,n,o,$,c,l.map(function(R){return R.key}).join("_"),x])}function dt(e){var t;return e instanceof Map?(t={},e.forEach(function(a,r){t[r]=a})):t=e,JSON.stringify(t)}var ra="TABS_DQ";function gt(e){return String(e).replace(/"/g,ra)}function na(e,t){var a=e.prefixCls,r=e.editable,n=e.locale,o=e.style;return!r||r.showAdd===!1?null:f("button",{ref:t,type:"button",className:"".concat(a,"-nav-add"),style:o,"aria-label":(n==null?void 0:n.addAriaLabel)||"Add tab",onClick:function(l){r.onEdit("add",{event:l})},children:r.addIcon||"+"})}const xt=s.exports.forwardRef(na);var ut=s.exports.forwardRef(function(e,t){var a=e.position,r=e.prefixCls,n=e.extra;if(!n)return null;var o,i={};return Ae(n)==="object"&&!s.exports.isValidElement(n)?i=n:i.right=n,a==="right"&&(o=i.right),a==="left"&&(o=i.left),o?f("div",{className:"".concat(r,"-extra-content"),ref:t,children:o}):null});function oa(e,t){var a=e.prefixCls,r=e.id,n=e.tabs,o=e.locale,i=e.mobile,l=e.moreIcon,c=l===void 0?"More":l,x=e.moreTransitionName,C=e.style,u=e.className,$=e.editable,R=e.tabBarGutter,P=e.rtl,L=e.removeAriaLabel,B=e.onTabClick,E=e.getPopupContainer,k=e.popupClassName,S=s.exports.useState(!1),D=I(S,2),O=D[0],_=D[1],T=s.exports.useState(null),M=I(T,2),g=M[0],w=M[1],d="".concat(r,"-more-popup"),y="".concat(a,"-dropdown"),v=g!==null?"".concat(d,"-").concat(g):null,m=o==null?void 0:o.dropdownAriaLabel;function K(p,A){p.preventDefault(),p.stopPropagation(),$.onEdit("remove",{key:A,event:p})}var de=f(Bt,{onClick:function(A){var U=A.key,j=A.domEvent;B(U,j),_(!1)},prefixCls:"".concat(y,"-menu"),id:d,tabIndex:-1,role:"listbox","aria-activedescendant":v,selectedKeys:[g],"aria-label":m!==void 0?m:"expanded dropdown",children:n.map(function(p){var A=$&&p.closable!==!1&&!p.disabled;return ce(Ot,{id:"".concat(d,"-").concat(p.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(p.key),disabled:p.disabled,children:[f("span",{children:p.label}),A&&f("button",{type:"button","aria-label":L||"remove",tabIndex:0,className:"".concat(y,"-menu-item-remove"),onClick:function(j){j.stopPropagation(),K(j,p.key)},children:p.closeIcon||$.removeIcon||"\xD7"})]},p.key)})});function J(p){for(var A=n.filter(function(oe){return!oe.disabled}),U=A.findIndex(function(oe){return oe.key===g})||0,j=A.length,Z=0;Z<j;Z+=1){U=(U+p+j)%j;var se=A[U];if(!se.disabled){w(se.key);return}}}function X(p){var A=p.which;if(!O){[Q.DOWN,Q.SPACE,Q.ENTER].includes(A)&&(_(!0),p.preventDefault());return}switch(A){case Q.UP:J(-1),p.preventDefault();break;case Q.DOWN:J(1),p.preventDefault();break;case Q.ESC:_(!1);break;case Q.SPACE:case Q.ENTER:g!==null&&B(g,p);break}}s.exports.useEffect(function(){var p=document.getElementById(v);p&&p.scrollIntoView&&p.scrollIntoView(!1)},[g]),s.exports.useEffect(function(){O||w(null)},[O]);var q=W({},P?"marginRight":"marginLeft",R);n.length||(q.visibility="hidden",q.order=1);var ue=G(W({},"".concat(y,"-rtl"),P)),ne=i?null:f(Mt,{prefixCls:y,overlay:de,trigger:["hover"],visible:n.length?O:!1,transitionName:x,onVisibleChange:_,overlayClassName:G(ue,k),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:E,children:f("button",{type:"button",className:"".concat(a,"-nav-more"),style:q,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":d,id:"".concat(r,"-more"),"aria-expanded":O,onKeyDown:X,children:c})});return ce("div",{className:G("".concat(a,"-nav-operations"),u),style:C,ref:t,children:[ne,f(xt,{prefixCls:a,locale:o,editable:$})]})}const ia=s.exports.memo(s.exports.forwardRef(oa),function(e,t){return t.tabMoving});function sa(e){var t,a=e.prefixCls,r=e.id,n=e.active,o=e.tab,i=o.key,l=o.label,c=o.disabled,x=o.closeIcon,C=e.closable,u=e.renderWrapper,$=e.removeAriaLabel,R=e.editable,P=e.onClick,L=e.onFocus,B=e.style,E="".concat(a,"-tab"),k=R&&C!==!1&&!c;function S(_){c||P(_)}function D(_){_.preventDefault(),_.stopPropagation(),R.onEdit("remove",{key:i,event:_})}var O=ce("div",{"data-node-key":gt(i),className:G(E,(t={},W(t,"".concat(E,"-with-remove"),k),W(t,"".concat(E,"-active"),n),W(t,"".concat(E,"-disabled"),c),t)),style:B,onClick:S,children:[f("div",{role:"tab","aria-selected":n,id:r&&"".concat(r,"-tab-").concat(i),className:"".concat(E,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(i),"aria-disabled":c,tabIndex:c?null:0,onClick:function(T){T.stopPropagation(),S(T)},onKeyDown:function(T){[Q.SPACE,Q.ENTER].includes(T.which)&&(T.preventDefault(),S(T))},onFocus:L,children:l}),k&&f("button",{type:"button","aria-label":$||"remove",tabIndex:0,className:"".concat(E,"-remove"),onClick:function(T){T.stopPropagation(),D(T)},children:x||R.removeIcon||"\xD7"})]},i);return u?u(O):O}var le=function(t){var a=t.current||{},r=a.offsetWidth,n=r===void 0?0:r,o=a.offsetHeight,i=o===void 0?0:o;return[n,i]},$e=function(t,a){return t[a?0:1]};function la(e,t){var a,r=s.exports.useContext(Ce),n=r.prefixCls,o=r.tabs,i=e.className,l=e.style,c=e.id,x=e.animated,C=e.activeKey,u=e.rtl,$=e.extra,R=e.editable,P=e.locale,L=e.tabPosition,B=e.tabBarGutter,E=e.children,k=e.onTabClick,S=e.onTabScroll,D=s.exports.useRef(),O=s.exports.useRef(),_=s.exports.useRef(),T=s.exports.useRef(),M=s.exports.useRef(),g=s.exports.useRef(),w=s.exports.useRef(),d=L==="top"||L==="bottom",y=it(0,function(h,b){d&&S&&S({direction:h>b?"left":"right"})}),v=I(y,2),m=v[0],K=v[1],de=it(0,function(h,b){!d&&S&&S({direction:h>b?"top":"bottom"})}),J=I(de,2),X=J[0],q=J[1],ue=s.exports.useState([0,0]),ne=I(ue,2),p=ne[0],A=ne[1],U=s.exports.useState([0,0]),j=I(U,2),Z=j[0],se=j[1],oe=s.exports.useState([0,0]),pe=I(oe,2),_e=pe[0],Te=pe[1],we=s.exports.useState([0,0]),ve=I(we,2),Re=ve[0],Pe=ve[1],N=ta(new Map),ee=I(N,2),fe=ee[0],$t=ee[1],he=Jt(o,fe,Z[0]),Ee=$e(p,d),be=$e(Z,d),Ne=$e(_e,d),ze=$e(Re,d),De=Ee<be+Ne,F=De?Ee-ze:Ee-Ne,St="".concat(n,"-nav-operations-hidden"),te=0,ie=0;d&&u?(te=0,ie=Math.max(0,be-F)):(te=Math.min(0,F-be),ie=0);function Ie(h){return h<te?te:h>ie?ie:h}var He=s.exports.useRef(),yt=s.exports.useState(),je=I(yt,2),ge=je[0],We=je[1];function Le(){We(Date.now())}function ke(){window.clearTimeout(He.current)}ea(T,function(h,b){function z(H,re){H(function(Y){var It=Ie(Y+re);return It})}return De?(d?z(K,h):z(q,b),ke(),Le(),!0):!1}),s.exports.useEffect(function(){return ke(),ge&&(He.current=window.setTimeout(function(){We(0)},100)),ke},[ge]);var Ct=aa(he,F,d?m:X,be,Ne,ze,V(V({},e),{},{tabs:o})),Ge=I(Ct,2),_t=Ge[0],Tt=Ge[1],Ke=At(function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:C,b=he.get(h)||{width:0,height:0,left:0,right:0,top:0};if(d){var z=m;u?b.right<m?z=b.right:b.right+b.width>m+F&&(z=b.right+b.width-F):b.left<-m?z=-b.left:b.left+b.width>-m+F&&(z=-(b.left+b.width-F)),q(0),K(Ie(z))}else{var H=X;b.top<-X?H=-b.top:b.top+b.height>-X+F&&(H=-(b.top+b.height-F)),K(0),q(Ie(H))}}),xe={};L==="top"||L==="bottom"?xe[u?"marginRight":"marginLeft"]=B:xe.marginTop=B;var Xe=o.map(function(h,b){var z=h.key;return f(sa,{id:c,prefixCls:n,tab:h,style:b===0?void 0:xe,closable:h.closable,editable:R,active:z===C,renderWrapper:E,removeAriaLabel:P==null?void 0:P.removeAriaLabel,onClick:function(re){k(z,re)},onFocus:function(){Ke(z),Le(),T.current&&(u||(T.current.scrollLeft=0),T.current.scrollTop=0)}},z)}),Ve=function(){return $t(function(){var b=new Map;return o.forEach(function(z){var H,re=z.key,Y=(H=M.current)===null||H===void 0?void 0:H.querySelector('[data-node-key="'.concat(gt(re),'"]'));Y&&b.set(re,{width:Y.offsetWidth,height:Y.offsetHeight,left:Y.offsetLeft,top:Y.offsetTop})}),b})};s.exports.useEffect(function(){Ve()},[o.map(function(h){return h.key}).join("_")]);var Be=ht(function(){var h=le(D),b=le(O),z=le(_);A([h[0]-b[0]-z[0],h[1]-b[1]-z[1]]);var H=le(w);Te(H);var re=le(g);Pe(re);var Y=le(M);se([Y[0]-H[0],Y[1]-H[1]]),Ve()}),wt=o.slice(0,_t),Rt=o.slice(Tt+1),Ue=[].concat(et(wt),et(Rt)),Pt=s.exports.useState(),Fe=I(Pt,2),Et=Fe[0],Nt=Fe[1],ae=he.get(C),Ye=s.exports.useRef();function Qe(){tt.cancel(Ye.current)}s.exports.useEffect(function(){var h={};return ae&&(d?(u?h.right=ae.right:h.left=ae.left,h.width=ae.width):(h.top=ae.top,h.height=ae.height)),Qe(),Ye.current=tt(function(){Nt(h)}),Qe},[ae,d,u]),s.exports.useEffect(function(){Ke()},[C,te,ie,dt(ae),dt(he),d]),s.exports.useEffect(function(){Be()},[u]);var qe=!!Ue.length,me="".concat(n,"-nav-wrap"),Oe,Me,Je,Ze;return d?u?(Me=m>0,Oe=m!==ie):(Oe=m<0,Me=m!==te):(Je=X<0,Ze=X!==te),f(at,{onResize:Be,children:ce("div",{ref:zt(t,D),role:"tablist",className:G("".concat(n,"-nav"),i),style:l,onKeyDown:function(){Le()},children:[f(ut,{ref:O,position:"left",extra:$,prefixCls:n}),f("div",{className:G(me,(a={},W(a,"".concat(me,"-ping-left"),Oe),W(a,"".concat(me,"-ping-right"),Me),W(a,"".concat(me,"-ping-top"),Je),W(a,"".concat(me,"-ping-bottom"),Ze),a)),ref:T,children:f(at,{onResize:Be,children:ce("div",{ref:M,className:"".concat(n,"-nav-list"),style:{transform:"translate(".concat(m,"px, ").concat(X,"px)"),transition:ge?"none":void 0},children:[Xe,f(xt,{ref:w,prefixCls:n,locale:P,editable:R,style:V(V({},Xe.length===0?void 0:xe),{},{visibility:qe?"hidden":null})}),f("div",{className:G("".concat(n,"-ink-bar"),W({},"".concat(n,"-ink-bar-animated"),x.inkBar)),style:Et})]})})}),f(ia,{...e,removeAriaLabel:P==null?void 0:P.removeAriaLabel,ref:g,prefixCls:n,tabs:Ue,className:!qe&&St,tabMoving:!!ge}),f(ut,{ref:_,position:"right",extra:$,prefixCls:n})]})})}const pt=s.exports.forwardRef(la);var ca=["renderTabBar"],da=["label","key"];function ua(e){var t=e.renderTabBar,a=ye(e,ca),r=s.exports.useContext(Ce),n=r.tabs;if(t){var o=V(V({},a),{},{panes:n.map(function(i){var l=i.label,c=i.key,x=ye(i,da);return f(mt,{tab:l,tabKey:c,...x},c)})});return t(o,pt)}return f(pt,{...a})}function pa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=V({inkBar:!0},Ae(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var va=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],vt=0;function fa(e,t){var a,r=e.id,n=e.prefixCls,o=n===void 0?"rc-tabs":n,i=e.className,l=e.items,c=e.direction,x=e.activeKey,C=e.defaultActiveKey,u=e.editable,$=e.animated,R=e.tabPosition,P=R===void 0?"top":R,L=e.tabBarGutter,B=e.tabBarStyle,E=e.tabBarExtraContent,k=e.locale,S=e.moreIcon,D=e.moreTransitionName,O=e.destroyInactiveTabPane,_=e.renderTabBar,T=e.onChange,M=e.onTabClick,g=e.onTabScroll,w=e.getPopupContainer,d=e.popupClassName,y=ye(e,va),v=s.exports.useMemo(function(){return(l||[]).filter(function(N){return N&&Ae(N)==="object"&&"key"in N})},[l]),m=c==="rtl",K=pa($),de=s.exports.useState(!1),J=I(de,2),X=J[0],q=J[1];s.exports.useEffect(function(){q(Dt())},[]);var ue=rt(function(){var N;return(N=v[0])===null||N===void 0?void 0:N.key},{value:x,defaultValue:C}),ne=I(ue,2),p=ne[0],A=ne[1],U=s.exports.useState(function(){return v.findIndex(function(N){return N.key===p})}),j=I(U,2),Z=j[0],se=j[1];s.exports.useEffect(function(){var N=v.findIndex(function(fe){return fe.key===p});if(N===-1){var ee;N=Math.max(0,Math.min(Z,v.length-1)),A((ee=v[N])===null||ee===void 0?void 0:ee.key)}se(N)},[v.map(function(N){return N.key}).join("_"),p,Z]);var oe=rt(null,{value:r}),pe=I(oe,2),_e=pe[0],Te=pe[1];s.exports.useEffect(function(){r||(Te("rc-tabs-".concat(vt)),vt+=1)},[]);function we(N,ee){M==null||M(N,ee);var fe=N!==p;A(N),fe&&(T==null||T(N))}var ve={id:_e,activeKey:p,animated:K,tabPosition:P,rtl:m,mobile:X},Re,Pe=V(V({},ve),{},{editable:u,locale:k,moreIcon:S,moreTransitionName:D,tabBarGutter:L,onTabClick:we,onTabScroll:g,extra:E,style:B,panes:null,getPopupContainer:w,popupClassName:d});return f(Ce.Provider,{value:{tabs:v,prefixCls:o},children:ce("div",{ref:t,id:r,className:G(o,"".concat(o,"-").concat(P),(a={},W(a,"".concat(o,"-mobile"),X),W(a,"".concat(o,"-editable"),u),W(a,"".concat(o,"-rtl"),m),a),i),...y,children:[Re,f(ua,{...Pe,renderTabBar:_}),f(qt,{destroyInactiveTabPane:O,...ve,animated:K})]})})}var ba=s.exports.forwardRef(fa);const ma={motionAppear:!1,motionEnter:!0,motionLeave:!0};function ha(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},a;return t===!1?a={inkBar:!1,tabPane:!1}:t===!0?a={inkBar:!0,tabPane:!0}:a=Object.assign({inkBar:!0},typeof t=="object"?t:{}),a.tabPane&&(a.tabPaneMotion=Object.assign(Object.assign({},ma),{motionName:Ht(e,"switch")})),a}var ga=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function xa(e){return e.filter(t=>t)}function $a(e,t){if(e)return e;const a=jt(t).map(r=>{if(s.exports.isValidElement(r)){const{key:n,props:o}=r,i=o||{},{tab:l}=i,c=ga(i,["tab"]);return Object.assign(Object.assign({key:String(n)},c),{label:l})}return null});return xa(a)}const Sa=()=>null,ya=Sa,Ca=e=>{const{componentCls:t,motionDurationSlow:a}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${a}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${a}`}}}}},[nt(e,"slide-up"),nt(e,"slide-down")]]},_a=Ca,Ta=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeadBackground:r,tabsCardGutter:n,colorBorderSecondary:o}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:a,background:r,border:`${e.lineWidth}px ${e.lineType} ${o}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:e.colorPrimary,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${n}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${n}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},wa=e=>{const{componentCls:t,tabsHoverColor:a,dropdownEdgeChildVerticalPadding:r}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},ft(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${r}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},Kt),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:a}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ra=e=>{const{componentCls:t,margin:a,colorBorderSecondary:r}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:`0 0 ${a}px 0`,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${r}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${a}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:e.controlHeight*1.25,[`${t}-tab`]:{padding:`${e.paddingXS}px ${e.paddingLG}px`,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:`${e.margin}px 0 0 0`},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Pa=e=>{const{componentCls:t,padding:a}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px 0`,fontSize:e.fontSize}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${a}px 0`,fontSize:e.fontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXXS*1.5}px ${a}px`}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:`${e.paddingXS}px ${a}px ${e.paddingXXS*1.5}px`}}}}}},Ea=e=>{const{componentCls:t,tabsActiveColor:a,tabsHoverColor:r,iconCls:n,tabsHorizontalGutter:o}=e,i=`${t}-tab`;return{[i]:{position:"relative",display:"inline-flex",alignItems:"center",padding:`${e.paddingSM}px 0`,fontSize:`${e.fontSize}px`,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:a}},bt(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:r},[`&${i}-active ${i}-btn`]:{color:e.colorPrimary,textShadow:e.tabsActiveTextShadow},[`&${i}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${i}-disabled ${i}-btn, &${i}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${i}-remove ${n}`]:{margin:0},[n]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${i} + ${i}`]:{margin:{_skip_check_:!0,value:`0 0 0 ${o}px`}}}},Na=e=>{const{componentCls:t,tabsHorizontalGutter:a,iconCls:r,tabsCardGutter:n}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:`0 0 0 ${a}px`},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[r]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[r]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:`${n}px`},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Ia=e=>{const{componentCls:t,tabsCardHorizontalPadding:a,tabsCardHeight:r,tabsCardGutter:n,tabsHoverColor:o,tabsActiveColor:i,colorBorderSecondary:l}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},ft(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:a,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:`${r}px`,marginLeft:{_skip_check_:!0,value:`${n}px`},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${l}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:o},"&:active, &:focus:not(:focus-visible)":{color:i}},bt(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.colorPrimary,pointerEvents:"none"}}),Ea(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},La=Wt("Tabs",e=>{const t=e.controlHeightLG,a=Gt(e,{tabsHoverColor:e.colorPrimaryHover,tabsActiveColor:e.colorPrimaryActive,tabsCardHorizontalPadding:`${(t-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,tabsCardHeight:t,tabsCardGutter:e.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:e.colorFillAlter,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[Pa(a),Na(a),Ra(a),wa(a),Ta(a),Ia(a),_a(a)]},e=>({zIndexPopup:e.zIndexPopupBase+50}));var ka=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function Ba(e){var{type:t,className:a,rootClassName:r,size:n,onEdit:o,hideAdd:i,centered:l,addIcon:c,popupClassName:x,children:C,items:u,animated:$}=e,R=ka(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated"]);const{prefixCls:P,moreIcon:L=f(Ut,{})}=R,{direction:B,getPrefixCls:E,getPopupContainer:k}=s.exports.useContext(Xt),S=E("tabs",P),[D,O]=La(S);let _;t==="editable-card"&&(_={onEdit:(y,v)=>{let{key:m,event:K}=v;o==null||o(y==="add"?K:m,y)},removeIcon:f(Ft,{}),addIcon:c||f(Yt,{}),showAdd:i!==!0});const T=E(),M=$a(u,C),g=ha(S,$),w=s.exports.useContext(Vt),d=n!==void 0?n:w;return D(f(ba,{...Object.assign({direction:B,getPopupContainer:k,moreTransitionName:`${T}-slide-up`},R,{items:M,className:G({[`${S}-${d}`]:d,[`${S}-card`]:["card","editable-card"].includes(t),[`${S}-editable-card`]:t==="editable-card",[`${S}-centered`]:l},a,r,O),popupClassName:G(x,O),editable:_,moreIcon:L,prefixCls:S,animated:g})}))}Ba.TabPane=ya;export{Ba as T};
//# sourceMappingURL=index.48064570.js.map
