import{r as i,j as p,v as H,t as j,aG as Ce,ay as zt,x as U,_ as N,aX as Bt,y as Ae,aY as Ot,a as ve,aZ as At,a_ as kt,K as q,O as Dt,l as et,w as tt,an as at,a$ as Gt,b0 as Wt,z as rt,aU as jt,av as Ht,a8 as nt,V as Kt,W as Xt,$ as ft,a7 as Vt,b1 as bt,ab as Ft,ad as Ut,b2 as Yt,aA as Zt,e as Qt}from"./index.f6c89b72.js";const Te=i.exports.createContext(null);var mt=i.exports.forwardRef(function(e,t){var r=e.prefixCls,a=e.className,n=e.style,o=e.id,s=e.active,l=e.tabKey,c=e.children;return p("div",{id:o&&"".concat(o,"-panel-").concat(l),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(l),"aria-hidden":!s,style:n,className:H(r,s&&"".concat(r,"-active"),a),ref:t,children:c})}),qt=["key","forceRender","style","className"];function Jt(e){var t=e.id,r=e.activeKey,a=e.animated,n=e.tabPosition,o=e.destroyInactiveTabPane,s=i.exports.useContext(Te),l=s.prefixCls,c=s.tabs,x=a.tabPane,_="".concat(l,"-tabpane");return p("div",{className:H("".concat(l,"-content-holder")),children:p("div",{className:H("".concat(l,"-content"),"".concat(l,"-content-").concat(n),j({},"".concat(l,"-content-animated"),x)),children:c.map(function(d){var S=d.key,E=d.forceRender,y=d.style,M=d.className,B=Ce(d,qt),R=S===r;return p(zt,{visible:R,forceRender:E,removeOnLeave:!!o,leavedClassName:"".concat(_,"-hidden"),...a.tabPaneMotion,children:function($,z){var D=$.style,w=$.className;return p(mt,{...B,prefixCls:_,id:t,tabKey:S,animated:x,active:R,style:U(U({},y),D),className:H(M,w),ref:z})}},S)})})})}var ot={width:0,height:0,left:0,top:0};function ea(e,t,r){return i.exports.useMemo(function(){for(var a,n=new Map,o=t.get((a=e[0])===null||a===void 0?void 0:a.key)||ot,s=o.left+o.width,l=0;l<e.length;l+=1){var c=e[l].key,x=t.get(c);if(!x){var _;x=t.get((_=e[l-1])===null||_===void 0?void 0:_.key)||ot}var d=n.get(c)||U({},x);d.right=s-d.left-d.width,n.set(c,d)}return n},[e.map(function(a){return a.key}).join("_"),t,r])}function it(e,t){var r=i.exports.useRef(e),a=i.exports.useState({}),n=N(a,2),o=n[1];function s(l){var c=typeof l=="function"?l(r.current):l;c!==r.current&&t(c,r.current),r.current=c,o({})}return[r.current,s]}var ta=.1,st=.01,ye=20,lt=Math.pow(.995,ye);function aa(e,t){var r=i.exports.useState(),a=N(r,2),n=a[0],o=a[1],s=i.exports.useState(0),l=N(s,2),c=l[0],x=l[1],_=i.exports.useState(0),d=N(_,2),S=d[0],E=d[1],y=i.exports.useState(),M=N(y,2),B=M[0],R=M[1],$=i.exports.useRef();function z(g){var P=g.touches[0],u=P.screenX,T=P.screenY;o({x:u,y:T}),window.clearInterval($.current)}function D(g){if(!!n){g.preventDefault();var P=g.touches[0],u=P.screenX,T=P.screenY;o({x:u,y:T});var v=u-n.x,b=T-n.y;t(v,b);var K=Date.now();x(K),E(K-c),R({x:v,y:b})}}function w(){if(!!n&&(o(null),R(null),B)){var g=B.x/S,P=B.y/S,u=Math.abs(g),T=Math.abs(P);if(Math.max(u,T)<ta)return;var v=g,b=P;$.current=window.setInterval(function(){if(Math.abs(v)<st&&Math.abs(b)<st){window.clearInterval($.current);return}v*=lt,b*=lt,t(v*ye,b*ye)},ye)}}var I=i.exports.useRef();function C(g){var P=g.deltaX,u=g.deltaY,T=0,v=Math.abs(P),b=Math.abs(u);v===b?T=I.current==="x"?P:u:v>b?(T=P,I.current="x"):(T=u,I.current="y"),t(-T,-T)&&g.preventDefault()}var O=i.exports.useRef(null);O.current={onTouchStart:z,onTouchMove:D,onTouchEnd:w,onWheel:C},i.exports.useEffect(function(){function g(v){O.current.onTouchStart(v)}function P(v){O.current.onTouchMove(v)}function u(v){O.current.onTouchEnd(v)}function T(v){O.current.onWheel(v)}return document.addEventListener("touchmove",P,{passive:!1}),document.addEventListener("touchend",u,{passive:!1}),e.current.addEventListener("touchstart",g,{passive:!1}),e.current.addEventListener("wheel",T),function(){document.removeEventListener("touchmove",P),document.removeEventListener("touchend",u)}},[])}function ht(e){var t=i.exports.useState(0),r=N(t,2),a=r[0],n=r[1],o=i.exports.useRef(0),s=i.exports.useRef();return s.current=e,Bt(function(){var l;(l=s.current)===null||l===void 0||l.call(s)},[a]),function(){o.current===a&&(o.current+=1,n(o.current))}}function ra(e){var t=i.exports.useRef([]),r=i.exports.useState({}),a=N(r,2),n=a[1],o=i.exports.useRef(typeof e=="function"?e():e),s=ht(function(){var c=o.current;t.current.forEach(function(x){c=x(c)}),t.current=[],o.current=c,n({})});function l(c){t.current.push(c),s()}return[o.current,l]}var ct={width:0,height:0,left:0,top:0,right:0};function na(e,t,r,a,n,o,s){var l=s.tabs,c=s.tabPosition,x=s.rtl,_,d,S;return["top","bottom"].includes(c)?(_="width",d=x?"right":"left",S=Math.abs(r)):(_="height",d="top",S=-r),i.exports.useMemo(function(){if(!l.length)return[0,0];for(var E=l.length,y=E,M=0;M<E;M+=1){var B=e.get(l[M].key)||ct;if(B[d]+B[_]>S+t){y=M-1;break}}for(var R=0,$=E-1;$>=0;$-=1){var z=e.get(l[$].key)||ct;if(z[d]<S){R=$+1;break}}return R>=y?[0,0]:[R,y]},[e,t,a,n,o,S,c,l.map(function(E){return E.key}).join("_"),x])}function dt(e){var t;return e instanceof Map?(t={},e.forEach(function(r,a){t[a]=r})):t=e,JSON.stringify(t)}var oa="TABS_DQ";function gt(e){return String(e).replace(/"/g,oa)}function xt(e,t,r,a){return!(!r||a||e===!1||e===void 0&&(t===!1||t===null))}function ia(e,t){var r=e.prefixCls,a=e.editable,n=e.locale,o=e.style;return!a||a.showAdd===!1?null:p("button",{ref:t,type:"button",className:"".concat(r,"-nav-add"),style:o,"aria-label":(n==null?void 0:n.addAriaLabel)||"Add tab",onClick:function(l){a.onEdit("add",{event:l})},children:a.addIcon||"+"})}const $t=i.exports.forwardRef(ia);var ut=i.exports.forwardRef(function(e,t){var r=e.position,a=e.prefixCls,n=e.extra;if(!n)return null;var o,s={};return Ae(n)==="object"&&!i.exports.isValidElement(n)?s=n:s.right=n,r==="right"&&(o=s.right),r==="left"&&(o=s.left),o?p("div",{className:"".concat(a,"-extra-content"),ref:t,children:o}):null});function sa(e,t){var r=e.prefixCls,a=e.id,n=e.tabs,o=e.locale,s=e.mobile,l=e.moreIcon,c=l===void 0?"More":l,x=e.moreTransitionName,_=e.style,d=e.className,S=e.editable,E=e.tabBarGutter,y=e.rtl,M=e.removeAriaLabel,B=e.onTabClick,R=e.getPopupContainer,$=e.popupClassName,z=i.exports.useState(!1),D=N(z,2),w=D[0],I=D[1],C=i.exports.useState(null),O=N(C,2),g=O[0],P=O[1],u="".concat(a,"-more-popup"),T="".concat(r,"-dropdown"),v=g!==null?"".concat(u,"-").concat(g):null,b=o==null?void 0:o.dropdownAriaLabel;function K(m,A){m.preventDefault(),m.stopPropagation(),S.onEdit("remove",{key:A,event:m})}var ie=p(Ot,{onClick:function(A){var F=A.key,W=A.domEvent;B(F,W),I(!1)},prefixCls:"".concat(T,"-menu"),id:u,tabIndex:-1,role:"listbox","aria-activedescendant":v,selectedKeys:[g],"aria-label":b!==void 0?b:"expanded dropdown",children:n.map(function(m){var A=m.closable,F=m.disabled,W=m.closeIcon,X=m.key,te=m.label,ee=xt(A,W,S,F);return ve(At,{id:"".concat(u,"-").concat(X),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(X),disabled:F,children:[p("span",{children:te}),ee&&p("button",{type:"button","aria-label":M||"remove",tabIndex:0,className:"".concat(T,"-menu-item-remove"),onClick:function(de){de.stopPropagation(),K(de,X)},children:W||S.removeIcon||"\xD7"})]},X)})});function Y(m){for(var A=n.filter(function(ee){return!ee.disabled}),F=A.findIndex(function(ee){return ee.key===g})||0,W=A.length,X=0;X<W;X+=1){F=(F+m+W)%W;var te=A[F];if(!te.disabled){P(te.key);return}}}function V(m){var A=m.which;if(!w){[q.DOWN,q.SPACE,q.ENTER].includes(A)&&(I(!0),m.preventDefault());return}switch(A){case q.UP:Y(-1),m.preventDefault();break;case q.DOWN:Y(1),m.preventDefault();break;case q.ESC:I(!1);break;case q.SPACE:case q.ENTER:g!==null&&B(g,m);break}}i.exports.useEffect(function(){var m=document.getElementById(v);m&&m.scrollIntoView&&m.scrollIntoView(!1)},[g]),i.exports.useEffect(function(){w||P(null)},[w]);var J=j({},y?"marginRight":"marginLeft",E);n.length||(J.visibility="hidden",J.order=1);var pe=H(j({},"".concat(T,"-rtl"),y)),se=s?null:p(kt,{prefixCls:T,overlay:ie,trigger:["hover"],visible:n.length?w:!1,transitionName:x,onVisibleChange:I,overlayClassName:H(pe,$),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:R,children:p("button",{type:"button",className:"".concat(r,"-nav-more"),style:J,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":u,id:"".concat(a,"-more"),"aria-expanded":w,onKeyDown:V,children:c})});return ve("div",{className:H("".concat(r,"-nav-operations"),d),style:_,ref:t,children:[se,p($t,{prefixCls:r,locale:o,editable:S})]})}const la=i.exports.memo(i.exports.forwardRef(sa),function(e,t){return t.tabMoving});function ca(e){var t,r=e.prefixCls,a=e.id,n=e.active,o=e.tab,s=o.key,l=o.label,c=o.disabled,x=o.closeIcon,_=e.closable,d=e.renderWrapper,S=e.removeAriaLabel,E=e.editable,y=e.onClick,M=e.onFocus,B=e.style,R="".concat(r,"-tab"),$=xt(_,x,E,c);function z(I){c||y(I)}function D(I){I.preventDefault(),I.stopPropagation(),E.onEdit("remove",{key:s,event:I})}var w=ve("div",{"data-node-key":gt(s),className:H(R,(t={},j(t,"".concat(R,"-with-remove"),$),j(t,"".concat(R,"-active"),n),j(t,"".concat(R,"-disabled"),c),t)),style:B,onClick:z,children:[p("div",{role:"tab","aria-selected":n,id:a&&"".concat(a,"-tab-").concat(s),className:"".concat(R,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(s),"aria-disabled":c,tabIndex:c?null:0,onClick:function(C){C.stopPropagation(),z(C)},onKeyDown:function(C){[q.SPACE,q.ENTER].includes(C.which)&&(C.preventDefault(),z(C))},onFocus:M,children:l}),$&&p("button",{type:"button","aria-label":S||"remove",tabIndex:0,className:"".concat(R,"-remove"),onClick:function(C){C.stopPropagation(),D(C)},children:x||E.removeIcon||"\xD7"})]},s);return d?d(w):w}var ue=function(t){var r=t.current||{},a=r.offsetWidth,n=a===void 0?0:a,o=r.offsetHeight,s=o===void 0?0:o;return[n,s]},Se=function(t,r){return t[r?0:1]};function da(e,t){var r,a=i.exports.useContext(Te),n=a.prefixCls,o=a.tabs,s=e.className,l=e.style,c=e.id,x=e.animated,_=e.activeKey,d=e.rtl,S=e.extra,E=e.editable,y=e.locale,M=e.tabPosition,B=e.tabBarGutter,R=e.children,$=e.onTabClick,z=e.onTabScroll,D=i.exports.useRef(),w=i.exports.useRef(),I=i.exports.useRef(),C=i.exports.useRef(),O=i.exports.useRef(),g=i.exports.useRef(),P=i.exports.useRef(),u=M==="top"||M==="bottom",T=it(0,function(h,f){u&&z&&z({direction:h>f?"left":"right"})}),v=N(T,2),b=v[0],K=v[1],ie=it(0,function(h,f){!u&&z&&z({direction:h>f?"top":"bottom"})}),Y=N(ie,2),V=Y[0],J=Y[1],pe=i.exports.useState([0,0]),se=N(pe,2),m=se[0],A=se[1],F=i.exports.useState([0,0]),W=N(F,2),X=W[0],te=W[1],ee=i.exports.useState([0,0]),ce=N(ee,2),de=ce[0],_e=ce[1],we=i.exports.useState([0,0]),fe=N(we,2),Pe=fe[0],Re=fe[1],L=ra(new Map),ae=N(L,2),be=ae[0],yt=ae[1],ge=ea(o,be,X[0]),Ie=Se(m,u),me=Se(X,u),Ee=Se(de,u),ke=Se(Pe,u),De=Ie<me+Ee,Z=De?Ie-ke:Ie-Ee,Ct="".concat(n,"-nav-operations-hidden"),re=0,le=0;u&&d?(re=0,le=Math.max(0,me-Z)):(re=Math.min(0,Z-me),le=0);function Le(h){return h<re?re:h>le?le:h}var Ge=i.exports.useRef(),Tt=i.exports.useState(),We=N(Tt,2),xe=We[0],je=We[1];function Ne(){je(Date.now())}function Me(){window.clearTimeout(Ge.current)}aa(C,function(h,f){function k(G,oe){G(function(Q){var Mt=Le(Q+oe);return Mt})}return De?(u?k(K,h):k(J,f),Me(),Ne(),!0):!1}),i.exports.useEffect(function(){return Me(),xe&&(Ge.current=window.setTimeout(function(){je(0)},100)),Me},[xe]);var _t=na(ge,Z,u?b:V,me,Ee,ke,U(U({},e),{},{tabs:o})),He=N(_t,2),wt=He[0],Pt=He[1],Ke=Dt(function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_,f=ge.get(h)||{width:0,height:0,left:0,right:0,top:0};if(u){var k=b;d?f.right<b?k=f.right:f.right+f.width>b+Z&&(k=f.right+f.width-Z):f.left<-b?k=-f.left:f.left+f.width>-b+Z&&(k=-(f.left+f.width-Z)),J(0),K(Le(k))}else{var G=V;f.top<-V?G=-f.top:f.top+f.height>-V+Z&&(G=-(f.top+f.height-Z)),K(0),J(Le(G))}}),$e={};M==="top"||M==="bottom"?$e[d?"marginRight":"marginLeft"]=B:$e.marginTop=B;var Xe=o.map(function(h,f){var k=h.key;return p(ca,{id:c,prefixCls:n,tab:h,style:f===0?void 0:$e,closable:h.closable,editable:E,active:k===_,renderWrapper:R,removeAriaLabel:y==null?void 0:y.removeAriaLabel,onClick:function(oe){$(k,oe)},onFocus:function(){Ke(k),Ne(),C.current&&(d||(C.current.scrollLeft=0),C.current.scrollTop=0)}},k)}),Ve=function(){return yt(function(){var f=new Map;return o.forEach(function(k){var G,oe=k.key,Q=(G=O.current)===null||G===void 0?void 0:G.querySelector('[data-node-key="'.concat(gt(oe),'"]'));Q&&f.set(oe,{width:Q.offsetWidth,height:Q.offsetHeight,left:Q.offsetLeft,top:Q.offsetTop})}),f})};i.exports.useEffect(function(){Ve()},[o.map(function(h){return h.key}).join("_")]);var ze=ht(function(){var h=ue(D),f=ue(w),k=ue(I);A([h[0]-f[0]-k[0],h[1]-f[1]-k[1]]);var G=ue(P);_e(G);var oe=ue(g);Re(oe);var Q=ue(O);te([Q[0]-G[0],Q[1]-G[1]]),Ve()}),Rt=o.slice(0,wt),It=o.slice(Pt+1),Fe=[].concat(et(Rt),et(It)),Et=i.exports.useState(),Ue=N(Et,2),Lt=Ue[0],Nt=Ue[1],ne=ge.get(_),Ye=i.exports.useRef();function Ze(){tt.cancel(Ye.current)}i.exports.useEffect(function(){var h={};return ne&&(u?(d?h.right=ne.right:h.left=ne.left,h.width=ne.width):(h.top=ne.top,h.height=ne.height)),Ze(),Ye.current=tt(function(){Nt(h)}),Ze},[ne,u,d]),i.exports.useEffect(function(){Ke()},[_,re,le,dt(ne),dt(ge),u]),i.exports.useEffect(function(){ze()},[d]);var Qe=!!Fe.length,he="".concat(n,"-nav-wrap"),Be,Oe,qe,Je;return u?d?(Oe=b>0,Be=b!==le):(Be=b<0,Oe=b!==re):(qe=V<0,Je=V!==re),p(at,{onResize:ze,children:ve("div",{ref:Gt(t,D),role:"tablist",className:H("".concat(n,"-nav"),s),style:l,onKeyDown:function(){Ne()},children:[p(ut,{ref:w,position:"left",extra:S,prefixCls:n}),p("div",{className:H(he,(r={},j(r,"".concat(he,"-ping-left"),Be),j(r,"".concat(he,"-ping-right"),Oe),j(r,"".concat(he,"-ping-top"),qe),j(r,"".concat(he,"-ping-bottom"),Je),r)),ref:C,children:p(at,{onResize:ze,children:ve("div",{ref:O,className:"".concat(n,"-nav-list"),style:{transform:"translate(".concat(b,"px, ").concat(V,"px)"),transition:xe?"none":void 0},children:[Xe,p($t,{ref:P,prefixCls:n,locale:y,editable:E,style:U(U({},Xe.length===0?void 0:$e),{},{visibility:Qe?"hidden":null})}),p("div",{className:H("".concat(n,"-ink-bar"),j({},"".concat(n,"-ink-bar-animated"),x.inkBar)),style:Lt})]})})}),p(la,{...e,removeAriaLabel:y==null?void 0:y.removeAriaLabel,ref:g,prefixCls:n,tabs:Fe,className:!Qe&&Ct,tabMoving:!!xe}),p(ut,{ref:I,position:"right",extra:S,prefixCls:n})]})})}const vt=i.exports.forwardRef(da);var ua=["renderTabBar"],va=["label","key"];function pa(e){var t=e.renderTabBar,r=Ce(e,ua),a=i.exports.useContext(Te),n=a.tabs;if(t){var o=U(U({},r),{},{panes:n.map(function(s){var l=s.label,c=s.key,x=Ce(s,va);return p(mt,{tab:l,tabKey:c,...x},c)})});return t(o,vt)}return p(vt,{...r})}function fa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},t;return e===!1?t={inkBar:!1,tabPane:!1}:e===!0?t={inkBar:!0,tabPane:!1}:t=U({inkBar:!0},Ae(e)==="object"?e:{}),t.tabPaneMotion&&t.tabPane===void 0&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}var ba=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],pt=0;function ma(e,t){var r,a=e.id,n=e.prefixCls,o=n===void 0?"rc-tabs":n,s=e.className,l=e.items,c=e.direction,x=e.activeKey,_=e.defaultActiveKey,d=e.editable,S=e.animated,E=e.tabPosition,y=E===void 0?"top":E,M=e.tabBarGutter,B=e.tabBarStyle,R=e.tabBarExtraContent,$=e.locale,z=e.moreIcon,D=e.moreTransitionName,w=e.destroyInactiveTabPane,I=e.renderTabBar,C=e.onChange,O=e.onTabClick,g=e.onTabScroll,P=e.getPopupContainer,u=e.popupClassName,T=Ce(e,ba),v=i.exports.useMemo(function(){return(l||[]).filter(function(L){return L&&Ae(L)==="object"&&"key"in L})},[l]),b=c==="rtl",K=fa(S),ie=i.exports.useState(!1),Y=N(ie,2),V=Y[0],J=Y[1];i.exports.useEffect(function(){J(Wt())},[]);var pe=rt(function(){var L;return(L=v[0])===null||L===void 0?void 0:L.key},{value:x,defaultValue:_}),se=N(pe,2),m=se[0],A=se[1],F=i.exports.useState(function(){return v.findIndex(function(L){return L.key===m})}),W=N(F,2),X=W[0],te=W[1];i.exports.useEffect(function(){var L=v.findIndex(function(be){return be.key===m});if(L===-1){var ae;L=Math.max(0,Math.min(X,v.length-1)),A((ae=v[L])===null||ae===void 0?void 0:ae.key)}te(L)},[v.map(function(L){return L.key}).join("_"),m,X]);var ee=rt(null,{value:a}),ce=N(ee,2),de=ce[0],_e=ce[1];i.exports.useEffect(function(){a||(_e("rc-tabs-".concat(pt)),pt+=1)},[]);function we(L,ae){O==null||O(L,ae);var be=L!==m;A(L),be&&(C==null||C(L))}var fe={id:de,activeKey:m,animated:K,tabPosition:y,rtl:b,mobile:V},Pe,Re=U(U({},fe),{},{editable:d,locale:$,moreIcon:z,moreTransitionName:D,tabBarGutter:M,onTabClick:we,onTabScroll:g,extra:R,style:B,panes:null,getPopupContainer:P,popupClassName:u});return p(Te.Provider,{value:{tabs:v,prefixCls:o},children:ve("div",{ref:t,id:a,className:H(o,"".concat(o,"-").concat(y),(r={},j(r,"".concat(o,"-mobile"),V),j(r,"".concat(o,"-editable"),d),j(r,"".concat(o,"-rtl"),b),r),s),...T,children:[Pe,p(pa,{...Re,renderTabBar:I}),p(Jt,{destroyInactiveTabPane:w,...fe,animated:K})]})})}var ha=i.exports.forwardRef(ma);const ga=()=>null,xa=ga,$a={motionAppear:!1,motionEnter:!0,motionLeave:!0};function Sa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},r;return t===!1?r={inkBar:!1,tabPane:!1}:t===!0?r={inkBar:!0,tabPane:!0}:r=Object.assign({inkBar:!0},typeof t=="object"?t:{}),r.tabPane&&(r.tabPaneMotion=Object.assign(Object.assign({},$a),{motionName:jt(e,"switch")})),r}var ya=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};function Ca(e){return e.filter(t=>t)}function Ta(e,t){if(e)return e;const r=Ht(t).map(a=>{if(i.exports.isValidElement(a)){const{key:n,props:o}=a,s=o||{},{tab:l}=s,c=ya(s,["tab"]);return Object.assign(Object.assign({key:String(n)},c),{label:l})}return null});return Ca(r)}const _a=e=>{const{componentCls:t,motionDurationSlow:r}=e;return[{[t]:{[`${t}-switch`]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:`opacity ${r}`}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:`opacity ${r}`}}}}},[nt(e,"slide-up"),nt(e,"slide-down")]]},wa=_a,Pa=e=>{const{componentCls:t,tabsCardPadding:r,cardBg:a,cardGutter:n,colorBorderSecondary:o,itemSelectedColor:s}=e;return{[`${t}-card`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{margin:0,padding:r,background:a,border:`${e.lineWidth}px ${e.lineType} ${o}`,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`},[`${t}-tab-active`]:{color:s,background:e.colorBgContainer},[`${t}-ink-bar`]:{visibility:"hidden"}},[`&${t}-top, &${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginLeft:{_skip_check_:!0,value:`${n}px`}}}},[`&${t}-top`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},[`${t}-tab-active`]:{borderBottomColor:e.colorBgContainer}}},[`&${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},[`${t}-tab-active`]:{borderTopColor:e.colorBgContainer}}},[`&${t}-left, &${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginTop:`${n}px`}}},[`&${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`}},[`${t}-tab-active`]:{borderRightColor:{_skip_check_:!0,value:e.colorBgContainer}}}},[`&${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`}},[`${t}-tab-active`]:{borderLeftColor:{_skip_check_:!0,value:e.colorBgContainer}}}}}}},Ra=e=>{const{componentCls:t,itemHoverColor:r,dropdownEdgeChildVerticalPadding:a}=e;return{[`${t}-dropdown`]:Object.assign(Object.assign({},ft(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:e.zIndexPopup,display:"block","&-hidden":{display:"none"},[`${t}-dropdown-menu`]:{maxHeight:e.tabsDropdownHeight,margin:0,padding:`${a}px 0`,overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:e.colorBgContainer,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary,"&-item":Object.assign(Object.assign({},Vt),{display:"flex",alignItems:"center",minWidth:e.tabsDropdownWidth,margin:0,padding:`${e.paddingXXS}px ${e.paddingSM}px`,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:e.marginSM},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:r}},"&:hover":{background:e.controlItemBgHover},"&-disabled":{"&, &:hover":{color:e.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},Ia=e=>{const{componentCls:t,margin:r,colorBorderSecondary:a,horizontalMargin:n,verticalItemPadding:o,verticalItemMargin:s}=e;return{[`${t}-top, ${t}-bottom`]:{flexDirection:"column",[`> ${t}-nav, > div > ${t}-nav`]:{margin:n,"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:`${e.lineWidth}px ${e.lineType} ${a}`,content:"''"},[`${t}-ink-bar`]:{height:e.lineWidthBold,"&-animated":{transition:`width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`}},[`${t}-nav-wrap`]:{"&::before, &::after":{top:0,bottom:0,width:e.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:e.boxShadowTabsOverflowRight},[`&${t}-nav-wrap-ping-left::before`]:{opacity:1},[`&${t}-nav-wrap-ping-right::after`]:{opacity:1}}}},[`${t}-top`]:{[`> ${t}-nav,
        > div > ${t}-nav`]:{"&::before":{bottom:0},[`${t}-ink-bar`]:{bottom:0}}},[`${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,marginTop:`${r}px`,marginBottom:0,"&::before":{top:0},[`${t}-ink-bar`]:{top:0}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0}},[`${t}-left, ${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{flexDirection:"column",minWidth:e.controlHeight*1.25,[`${t}-tab`]:{padding:o,textAlign:"center"},[`${t}-tab + ${t}-tab`]:{margin:s},[`${t}-nav-wrap`]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:e.controlHeight},"&::before":{top:0,boxShadow:e.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:e.boxShadowTabsOverflowBottom},[`&${t}-nav-wrap-ping-top::before`]:{opacity:1},[`&${t}-nav-wrap-ping-bottom::after`]:{opacity:1}},[`${t}-ink-bar`]:{width:e.lineWidthBold,"&-animated":{transition:`height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`}},[`${t}-nav-list, ${t}-nav-operations`]:{flex:"1 0 auto",flexDirection:"column"}}},[`${t}-left`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-ink-bar`]:{right:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{marginLeft:{_skip_check_:!0,value:`-${e.lineWidth}px`},borderLeft:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingLeft:{_skip_check_:!0,value:e.paddingLG}}}},[`${t}-right`]:{[`> ${t}-nav, > div > ${t}-nav`]:{order:1,[`${t}-ink-bar`]:{left:{_skip_check_:!0,value:0}}},[`> ${t}-content-holder, > div > ${t}-content-holder`]:{order:0,marginRight:{_skip_check_:!0,value:-e.lineWidth},borderRight:{_skip_check_:!0,value:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},[`> ${t}-content > ${t}-tabpane`]:{paddingRight:{_skip_check_:!0,value:e.paddingLG}}}}}},Ea=e=>{const{componentCls:t,cardPaddingSM:r,cardPaddingLG:a,horizontalItemPaddingSM:n,horizontalItemPaddingLG:o}=e;return{[t]:{"&-small":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:n,fontSize:e.titleFontSizeSM}}},"&-large":{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:o,fontSize:e.titleFontSizeLG}}}},[`${t}-card`]:{[`&${t}-small`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:r}},[`&${t}-bottom`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`0 0 ${e.borderRadius}px ${e.borderRadius}px`}},[`&${t}-top`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:`${e.borderRadius}px ${e.borderRadius}px 0 0`}},[`&${t}-right`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`0 ${e.borderRadius}px ${e.borderRadius}px 0`}}},[`&${t}-left`]:{[`> ${t}-nav ${t}-tab`]:{borderRadius:{_skip_check_:!0,value:`${e.borderRadius}px 0 0 ${e.borderRadius}px`}}}},[`&${t}-large`]:{[`> ${t}-nav`]:{[`${t}-tab`]:{padding:a}}}}}},La=e=>{const{componentCls:t,itemActiveColor:r,itemHoverColor:a,iconCls:n,tabsHorizontalItemMargin:o,horizontalItemPadding:s,itemSelectedColor:l}=e,c=`${t}-tab`;return{[c]:{position:"relative",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",display:"inline-flex",alignItems:"center",padding:s,fontSize:e.titleFontSize,background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:r}},bt(e)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-e.marginXXS},marginLeft:{_skip_check_:!0,value:e.marginXS},color:e.colorTextDescription,fontSize:e.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:`all ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextHeading}},"&:hover":{color:a},[`&${c}-active ${c}-btn`]:{color:l,textShadow:e.tabsActiveTextShadow},[`&${c}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed"},[`&${c}-disabled ${c}-btn, &${c}-disabled ${t}-remove`]:{"&:focus, &:active":{color:e.colorTextDisabled}},[`& ${c}-remove ${n}`]:{margin:0},[n]:{marginRight:{_skip_check_:!0,value:e.marginSM}}},[`${c} + ${c}`]:{margin:{_skip_check_:!0,value:o}}}},Na=e=>{const{componentCls:t,tabsHorizontalItemMarginRTL:r,iconCls:a,cardGutter:n}=e;return{[`${t}-rtl`]:{direction:"rtl",[`${t}-nav`]:{[`${t}-tab`]:{margin:{_skip_check_:!0,value:r},[`${t}-tab:last-of-type`]:{marginLeft:{_skip_check_:!0,value:0}},[a]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:`${e.marginSM}px`}},[`${t}-tab-remove`]:{marginRight:{_skip_check_:!0,value:`${e.marginXS}px`},marginLeft:{_skip_check_:!0,value:`-${e.marginXXS}px`},[a]:{margin:0}}}},[`&${t}-left`]:{[`> ${t}-nav`]:{order:1},[`> ${t}-content-holder`]:{order:0}},[`&${t}-right`]:{[`> ${t}-nav`]:{order:0},[`> ${t}-content-holder`]:{order:1}},[`&${t}-card${t}-top, &${t}-card${t}-bottom`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-tab + ${t}-tab`]:{marginRight:{_skip_check_:!0,value:n},marginLeft:{_skip_check_:!0,value:0}}}}},[`${t}-dropdown-rtl`]:{direction:"rtl"},[`${t}-menu-item`]:{[`${t}-dropdown-rtl`]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Ma=e=>{const{componentCls:t,tabsCardPadding:r,cardHeight:a,cardGutter:n,itemHoverColor:o,itemActiveColor:s,colorBorderSecondary:l}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({},ft(e)),{display:"flex",[`> ${t}-nav, > div > ${t}-nav`]:{position:"relative",display:"flex",flex:"none",alignItems:"center",[`${t}-nav-wrap`]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:`opacity ${e.motionDurationSlow}`,content:"''",pointerEvents:"none"}},[`${t}-nav-list`]:{position:"relative",display:"flex",transition:`opacity ${e.motionDurationSlow}`},[`${t}-nav-operations`]:{display:"flex",alignSelf:"stretch"},[`${t}-nav-operations-hidden`]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},[`${t}-nav-more`]:{position:"relative",padding:r,background:"transparent",border:0,color:e.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:e.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},[`${t}-nav-add`]:Object.assign({minWidth:a,marginLeft:{_skip_check_:!0,value:n},padding:`0 ${e.paddingXS}px`,background:"transparent",border:`${e.lineWidth}px ${e.lineType} ${l}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,outline:"none",cursor:"pointer",color:e.colorText,transition:`all ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&:hover":{color:o},"&:active, &:focus:not(:focus-visible)":{color:s}},bt(e))},[`${t}-extra-content`]:{flex:"none"},[`${t}-ink-bar`]:{position:"absolute",background:e.inkBarColor,pointerEvents:"none"}}),La(e)),{[`${t}-content`]:{position:"relative",width:"100%"},[`${t}-content-holder`]:{flex:"auto",minWidth:0,minHeight:0},[`${t}-tabpane`]:{outline:"none","&-hidden":{display:"none"}}}),[`${t}-centered`]:{[`> ${t}-nav, > div > ${t}-nav`]:{[`${t}-nav-wrap`]:{[`&:not([class*='${t}-nav-wrap-ping'])`]:{justifyContent:"center"}}}}}},za=Kt("Tabs",e=>{const t=Xt(e,{tabsCardPadding:e.cardPadding||`${(e.cardHeight-Math.round(e.fontSize*e.lineHeight))/2-e.lineWidth}px ${e.padding}px`,dropdownEdgeChildVerticalPadding:e.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120,tabsHorizontalItemMargin:`0 0 0 ${e.horizontalItemGutter}px`,tabsHorizontalItemMarginRTL:`0 0 0 ${e.horizontalItemGutter}px`});return[Ea(t),Na(t),Ia(t),Ra(t),Pa(t),Ma(t),wa(t)]},e=>{const t=e.controlHeightLG;return{zIndexPopup:e.zIndexPopupBase+50,cardBg:e.colorFillAlter,cardHeight:t,cardPadding:"",cardPaddingSM:`${e.paddingXXS*1.5}px ${e.padding}px`,cardPaddingLG:`${e.paddingXS}px ${e.padding}px ${e.paddingXXS*1.5}px`,titleFontSize:e.fontSize,titleFontSizeLG:e.fontSizeLG,titleFontSizeSM:e.fontSize,inkBarColor:e.colorPrimary,horizontalMargin:`0 0 ${e.margin}px 0`,horizontalItemGutter:32,horizontalItemMargin:"",horizontalItemMarginRTL:"",horizontalItemPadding:`${e.paddingSM}px 0`,horizontalItemPaddingSM:`${e.paddingXS}px 0`,horizontalItemPaddingLG:`${e.padding}px 0`,verticalItemPadding:`${e.paddingXS}px ${e.paddingLG}px`,verticalItemMargin:`${e.margin}px 0 0 0`,itemSelectedColor:e.colorPrimary,itemHoverColor:e.colorPrimaryHover,itemActiveColor:e.colorPrimaryActive,cardGutter:e.marginXXS/2}});var Ba=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r};const St=e=>{const{type:t,className:r,rootClassName:a,size:n,onEdit:o,hideAdd:s,centered:l,addIcon:c,popupClassName:x,children:_,items:d,animated:S,style:E}=e,y=Ba(e,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated","style"]),{prefixCls:M,moreIcon:B=p(Yt,{})}=y,{direction:R,tabs:$,getPrefixCls:z,getPopupContainer:D}=i.exports.useContext(Ft),w=z("tabs",M),[I,C]=za(w);let O;t==="editable-card"&&(O={onEdit:(b,K)=>{let{key:ie,event:Y}=K;o==null||o(b==="add"?Y:ie,b)},removeIcon:p(Zt,{}),addIcon:c||p(Qt,{}),showAdd:s!==!0});const g=z(),P=Ta(d,_),u=Sa(w,S),T=Ut(n),v=Object.assign(Object.assign({},$==null?void 0:$.style),E);return I(p(ha,{...Object.assign({direction:R,getPopupContainer:D,moreTransitionName:`${g}-slide-up`},y,{items:P,className:H({[`${w}-${T}`]:T,[`${w}-card`]:["card","editable-card"].includes(t),[`${w}-editable-card`]:t==="editable-card",[`${w}-centered`]:l},$==null?void 0:$.className,r,a,C),popupClassName:H(x,C),style:v,editable:O,moreIcon:B,prefixCls:w,animated:u})}))};St.TabPane=xa;const Aa=St;export{Aa as T};
