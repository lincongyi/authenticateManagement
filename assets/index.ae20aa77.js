import{w as T,l as A,X as F,Y as O,G as b,H as U,J as E,r as m,O as I,v as S,ao as L,j as h,ap as w,a as j,R as D,ad as z}from"./index.d120665a.js";function R(n){let i;const r=t=>()=>{i=null,n.apply(void 0,A(t))},e=function(){if(i==null){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];i=T(r(o))}};return e.cancel=()=>{T.cancel(i),i=null},e}const M=n=>{const{componentCls:i}=n;return{[i]:{position:"fixed",zIndex:n.zIndexPopup}}},H=F("Affix",n=>{const i=O(n,{zIndexPopup:n.zIndexBase+10});return[M(i)]});function g(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function C(n,i,r){if(r!==void 0&&i.top>n.top-r)return r+i.top}function P(n,i,r){if(r!==void 0&&i.bottom<n.bottom+r){const e=window.innerHeight-i.bottom;return r+e}}const N=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function _(){return typeof window<"u"?window:null}var p;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(p||(p={}));let B=function(n){b(r,n);var i=U(r);function r(){var e;return E(this,r),e=i.apply(this,arguments),e.state={status:p.None,lastAffix:!1,prevTarget:null},e.placeholderNodeRef=m.exports.createRef(),e.fixedNodeRef=m.exports.createRef(),e.addListeners=()=>{const t=e.getTargetFunc(),o=t==null?void 0:t(),{prevTarget:s}=e.state;s!==o&&(N.forEach(f=>{s==null||s.removeEventListener(f,e.lazyUpdatePosition),o==null||o.addEventListener(f,e.lazyUpdatePosition)}),e.updatePosition(),e.setState({prevTarget:o}))},e.removeListeners=()=>{e.timer&&(clearTimeout(e.timer),e.timer=null);const{prevTarget:t}=e.state,o=e.getTargetFunc(),s=o==null?void 0:o();N.forEach(f=>{s==null||s.removeEventListener(f,e.lazyUpdatePosition),t==null||t.removeEventListener(f,e.lazyUpdatePosition)}),e.updatePosition.cancel(),e.lazyUpdatePosition.cancel()},e.getOffsetTop=()=>{const{offsetBottom:t,offsetTop:o}=e.props;return t===void 0&&o===void 0?0:o},e.getOffsetBottom=()=>e.props.offsetBottom,e.measure=()=>{const{status:t,lastAffix:o}=e.state,{onChange:s}=e.props,f=e.getTargetFunc();if(t!==p.Prepare||!e.fixedNodeRef.current||!e.placeholderNodeRef.current||!f)return;const c=e.getOffsetTop(),u=e.getOffsetBottom(),l=f();if(l){const d={status:p.None},a=g(e.placeholderNodeRef.current);if(a.top===0&&a.left===0&&a.width===0&&a.height===0)return;const x=g(l),v=C(a,x,c),y=P(a,x,u);v!==void 0?(d.affixStyle={position:"fixed",top:v,width:a.width,height:a.height},d.placeholderStyle={width:a.width,height:a.height}):y!==void 0&&(d.affixStyle={position:"fixed",bottom:y,width:a.width,height:a.height},d.placeholderStyle={width:a.width,height:a.height}),d.lastAffix=!!d.affixStyle,s&&o!==d.lastAffix&&s(d.lastAffix),e.setState(d)}},e.prepareMeasure=()=>{e.setState({status:p.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e.updatePosition=R(()=>{e.prepareMeasure()}),e.lazyUpdatePosition=R(()=>{const t=e.getTargetFunc(),{affixStyle:o}=e.state;if(t&&o){const s=e.getOffsetTop(),f=e.getOffsetBottom(),c=t();if(c&&e.placeholderNodeRef.current){const u=g(c),l=g(e.placeholderNodeRef.current),d=C(l,u,s),a=P(l,u,f);if(d!==void 0&&o.top===d||a!==void 0&&o.bottom===a)return}}e.prepareMeasure()}),e}return I(r,[{key:"getTargetFunc",value:function(){const{getTargetContainer:t}=this.context,{target:o}=this.props;return o!==void 0?o:t!=null?t:_}},{key:"componentDidMount",value:function(){this.timer=setTimeout(this.addListeners)}},{key:"componentDidUpdate",value:function(t){this.addListeners(),(t.offsetTop!==this.props.offsetTop||t.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"render",value:function(){const{affixStyle:t,placeholderStyle:o}=this.state,{affixPrefixCls:s,rootClassName:f,children:c}=this.props,u=S(t&&f,{[s]:!!t});let l=L(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls","rootClassName"]);return h(w,{onResize:this.updatePosition,children:j("div",{...Object.assign({},l,{ref:this.placeholderNodeRef}),children:[t&&h("div",{style:o,"aria-hidden":"true"}),h("div",{className:u,ref:this.fixedNodeRef,style:t,children:h(w,{onResize:this.updatePosition,children:c})})]})})}}]),r}(D.Component);B.contextType=z;const k=m.exports.forwardRef((n,i)=>{const{prefixCls:r,rootClassName:e}=n,{getPrefixCls:t}=m.exports.useContext(z),o=t("affix",r),[s,f]=H(o),c=Object.assign(Object.assign({},n),{affixPrefixCls:o,rootClassName:S(e,f)});return s(h(B,{...Object.assign({},c,{ref:i})}))}),W=k;export{W as A};
