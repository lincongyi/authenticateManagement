import{U as _,_ as oe,h as ne,m as re,aH as se,a1 as ie,a2 as ae,a3 as ue,k as m,a5 as ce,q as K,p as fe,a as l,L as H,j as P,R as le,n as Q,u as de,aI as pe,aJ as me,e as k,S as he,aj as M,aG as A}from"./index.a49703b8.js";import{d as ge}from"./zh-cn.9a48d670.js";import Fe from"./index.539c2f1d.js";import xe from"./index.3b03b764.js";import ye from"./index.c81d8ce2.js";import ve from"./index.44a5acfc.js";import Re from"./index.f22c7183.js";import Be from"./index.fb832a98.js";import{d as Ce}from"./date.69f91935.js";import{R as we}from"./index.d9e1eaed.js";import"./index.b6f5ff1b.js";import"./index.702cfafd.js";import"./index.eebbc702.js";import"./EditOutlined.71f319fe.js";import"./styleChecker.133adc76.js";import"./index.2785864f.js";import"./index.5c7d8daa.js";import"./index.3a7ae777.js";import"./SwapRightOutlined.13a712e5.js";import"./index.5fded359.js";import"./getDataOrAriaProps.fd89ab75.js";import"./UploadOutlined.b749a76c.js";import"./ExclamationCircleOutlined.4d4f6ed3.js";import"./index.001b61d3.js";function G(t){let r;const n=o=>()=>{r=null,t.apply(void 0,oe(o))},e=function(){if(r==null){for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];r=_(n(s))}};return e.cancel=()=>{_.cancel(r),r=null},e}const Te=t=>{const{componentCls:r}=t;return{[r]:{position:"fixed",zIndex:t.zIndexPopup}}},Ae=ne("Affix",t=>{const r=re(t,{zIndexPopup:t.zIndexBase+10});return[Te(r)]});function D(t){return t!==window?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function W(t,r,n){if(n!==void 0&&r.top>t.top-n)return n+r.top}function q(t,r,n){if(n!==void 0&&r.bottom<t.bottom+n){const e=window.innerHeight-r.bottom;return n+e}}const X=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];let S=[];function J(t,r){if(!t)return;let n=S.find(e=>e.target===t);n?n.affixList.push(r):(n={target:t,affixList:[r],eventHandlers:{}},S.push(n),X.forEach(e=>{n.eventHandlers[e]=se(t,e,()=>{n.affixList.forEach(o=>{o.lazyUpdatePosition()})})}))}function $(t){const r=S.find(n=>{const e=n.affixList.some(o=>o===t);return e&&(n.affixList=n.affixList.filter(o=>o!==t)),e});r&&r.affixList.length===0&&(S=S.filter(n=>n!==r),X.forEach(n=>{const e=r.eventHandlers[n];e&&e.remove&&e.remove()}))}function Pe(){return typeof window<"u"?window:null}var R;(function(t){t[t.None=0]="None",t[t.Prepare=1]="Prepare"})(R||(R={}));let Y=function(t){ie(n,t);var r=ae(n);function n(){var e;return ue(this,n),e=r.apply(this,arguments),e.state={status:R.None,lastAffix:!1,prevTarget:null},e.placeholderNodeRef=m.exports.createRef(),e.fixedNodeRef=m.exports.createRef(),e.getOffsetTop=()=>{const{offsetBottom:o,offsetTop:s}=e.props;return o===void 0&&s===void 0?0:s},e.getOffsetBottom=()=>e.props.offsetBottom,e.measure=()=>{const{status:o,lastAffix:s}=e.state,{onChange:a}=e.props,u=e.getTargetFunc();if(o!==R.Prepare||!e.fixedNodeRef.current||!e.placeholderNodeRef.current||!u)return;const d=e.getOffsetTop(),f=e.getOffsetBottom(),h=u();if(!h)return;const p={status:R.None},x=D(h),c=D(e.placeholderNodeRef.current),b=W(c,x,d),E=q(c,x,f);c.top===0&&c.left===0&&c.width===0&&c.height===0||(b!==void 0?(p.affixStyle={position:"fixed",top:b,width:c.width,height:c.height},p.placeholderStyle={width:c.width,height:c.height}):E!==void 0&&(p.affixStyle={position:"fixed",bottom:E,width:c.width,height:c.height},p.placeholderStyle={width:c.width,height:c.height}),p.lastAffix=!!p.affixStyle,a&&s!==p.lastAffix&&a(p.lastAffix),e.setState(p))},e.prepareMeasure=()=>{e.setState({status:R.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e.updatePosition=G(()=>{e.prepareMeasure()}),e.lazyUpdatePosition=G(()=>{const o=e.getTargetFunc(),{affixStyle:s}=e.state;if(o&&s){const a=e.getOffsetTop(),u=e.getOffsetBottom(),d=o();if(d&&e.placeholderNodeRef.current){const f=D(d),h=D(e.placeholderNodeRef.current),p=W(h,f,a),x=q(h,f,u);if(p!==void 0&&s.top===p||x!==void 0&&s.bottom===x)return}}e.prepareMeasure()}),e}return ce(n,[{key:"getTargetFunc",value:function(){const{getTargetContainer:o}=this.context,{target:s}=this.props;return s!==void 0?s:o!=null?o:Pe}},{key:"componentDidMount",value:function(){const o=this.getTargetFunc();o&&(this.timer=setTimeout(()=>{J(o(),this),this.updatePosition()}))}},{key:"componentDidUpdate",value:function(o){const{prevTarget:s}=this.state,a=this.getTargetFunc(),u=(a==null?void 0:a())||null;s!==u&&($(this),u&&(J(u,this),this.updatePosition()),this.setState({prevTarget:u})),(o.offsetTop!==this.props.offsetTop||o.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null),$(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"render",value:function(){const{affixStyle:o,placeholderStyle:s}=this.state,{affixPrefixCls:a,rootClassName:u,children:d}=this.props,f=K(o&&u,{[a]:!!o});let h=fe(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls","rootClassName"]);return l(H,{onResize:this.updatePosition,children:P("div",{...Object.assign({},h,{ref:this.placeholderNodeRef}),children:[o&&l("div",{style:s,"aria-hidden":"true"}),l("div",{className:f,ref:this.fixedNodeRef,style:o,children:l(H,{onResize:this.updatePosition,children:d})})]})})}}]),n}(le.Component);Y.contextType=Q;const Se=m.exports.forwardRef((t,r)=>{const{prefixCls:n,rootClassName:e}=t,{getPrefixCls:o}=m.exports.useContext(Q),s=o("affix",n),[a,u]=Ae(s),d=Object.assign(Object.assign({},t),{affixPrefixCls:s,rootClassName:K(e,u)});return a(l(Y,{...Object.assign({},d,{ref:r})}))}),be=Se,Ee="_header_1ilm8_1",De={header:Ee},Ie=64,nt=()=>{const{accessFormStore:t}=de(),r=pe(),[n,e]=m.exports.useState(0);m.exports.useEffect(()=>{const{state:i,id:g}=t.current;e(i),i||r(-1),t.dictionary||(async()=>{const{data:F}=await me({showType:"appAccess"});t.setDictionary(F)})()},[]);const o=[{label:"\u57FA\u672C\u4FE1\u606F",value:"0"},{label:"\u57FA\u7840\u80FD\u529B\u4FE1\u606F",value:"1"},{label:"\u5E76\u53D1\u914D\u7F6E",value:"2"},{label:"\u4E0A\u4F20\u7533\u8BF7\u8868",value:"3"},{label:"\u6B63\u5F0F\u8D26\u53F7\u4FE1\u606F",value:"4"}],[s,a]=m.exports.useState(),u=m.exports.useRef(null),d=m.exports.useRef(null),f=m.exports.useRef(null),h=m.exports.useRef(null),p=m.exports.useRef(null),x=i=>P(k,{children:[l(Fe,{ref:u,params:{value:i}}),l(xe,{ref:d,params:{value:i}}),l(ye,{ref:f,params:{value:i}}),l(ve,{ref:h,params:{value:i}}),l(Re,{ref:p,params:{value:i}})]}),[c,b]=m.exports.useState("0"),E=i=>{const{value:g}=i.target;b(g)},B=async i=>{if(!i||!i.current)return!1;try{return await i.current.validateFields(),!0}catch{return!1}},Z=async()=>await B(u)?await B(d)?await B(f.current.sitRef)?await B(f.current.sitRef)?await B(h)?!0:(A.warning("\u8BF7\u8865\u5145\u3010\u4E0A\u4F20\u7533\u8BF7\u8868\u3011\u4E2D\u7684\u5185\u5BB9"),!1):(A.warning("\u8BF7\u8865\u5145\u3010\u5E76\u53D1\u914D\u7F6E\u3011\u6B63\u5F0F\u73AF\u5883\u4E2D\u7684\u5FC5\u586B\u9879"),!1):(A.warning("\u8BF7\u8865\u5145\u3010\u5E76\u53D1\u914D\u7F6E\u3011\u6D4B\u8BD5\u73AF\u5883\u4E2D\u7684\u5FC5\u586B\u9879"),!1):(A.warning("\u8BF7\u8865\u5145\u3010\u57FA\u7840\u80FD\u529B\u4FE1\u606F\u3011\u4E2D\u7684\u5FC5\u586B\u9879"),!1):(A.warning("\u8BF7\u8865\u5145\u3010\u57FA\u672C\u4FE1\u606F\u3011\u4E2D\u7684\u5FC5\u586B\u9879"),!1),ee=async()=>{var g,F,y,v,C,w,T;const i={...(g=u.current)==null?void 0:g.getFieldsValue(),...(F=d.current)==null?void 0:F.getFieldsValue(),...(v=(y=f.current)==null?void 0:y.sitRef.current)==null?void 0:v.getFieldsValue(),...(w=(C=f.current)==null?void 0:C.prodRef.current)==null?void 0:w.getFieldsValue(),...(T=h.current)==null?void 0:T.getFieldsValue()};i.serviceVaildEnd=ge(i.serviceVaildEnd).format(Ce),console.log(i)},[I,N]=m.exports.useState(!1),te=()=>{var i,g,F,y,v,C,w,T,V,O,z,U,j,L;if(!Z())return!1;console.log({basicInfo:(i=u.current)==null?void 0:i.getFieldsValue(),abilityInfo:(g=d.current)==null?void 0:g.getFieldsValue(),concurrency:{sit:(y=(F=f.current)==null?void 0:F.sitRef.current)==null?void 0:y.getFieldsValue(),prod:(C=(v=f.current)==null?void 0:v.prodRef.current)==null?void 0:C.getFieldsValue()},uploadForm:(w=h.current)==null?void 0:w.getFieldsValue()}),a({basicInfo:(T=u.current)==null?void 0:T.getFieldsValue(),abilityInfo:(V=d.current)==null?void 0:V.getFieldsValue(),concurrency:{sit:(z=(O=f.current)==null?void 0:O.sitRef.current)==null?void 0:z.getFieldsValue(),prod:(j=(U=f.current)==null?void 0:U.prodRef.current)==null?void 0:j.getFieldsValue()},uploadForm:(L=h.current)==null?void 0:L.getFieldsValue()}),N(!0)};return P(k,{children:[l(be,{offsetTop:Ie,children:P("div",{className:De.header,children:[l(we.Group,{options:o,onChange:E,value:c,optionType:"button",buttonStyle:"solid"}),n!==2&&P(he,{children:[l(M,{type:"primary",onClick:te,children:"\u63D0\u4EA4\u5BA1\u6838"}),l(M,{onClick:()=>ee(),children:"\u4FDD\u5B58\u8349\u7A3F"})]})]})}),x(c),I&&l(Be,{open:I,setOpen:N,data:s})]})};export{nt as default};
//# sourceMappingURL=index.c7d90bfd.js.map
