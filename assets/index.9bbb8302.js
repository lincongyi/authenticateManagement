import{k as l,ar as $,J as w,Y as D,q as M,O as h,j as E,a as p,t as k}from"./index.d93c8983.js";var V=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],A=l.exports.forwardRef(function(a,g){var n,d=a.prefixCls,t=d===void 0?"rc-checkbox":d,C=a.className,x=a.style,b=a.checked,r=a.disabled,i=a.defaultChecked,_=i===void 0?!1:i,u=a.type,m=u===void 0?"checkbox":u,s=a.onChange,y=$(a,V),c=l.exports.useRef(null),N=w(_,{value:b}),o=D(N,2),f=o[0],P=o[1];l.exports.useImperativeHandle(g,function(){return{focus:function(){var e;(e=c.current)===null||e===void 0||e.focus()},blur:function(){var e;(e=c.current)===null||e===void 0||e.blur()},input:c.current}});var R=M(t,C,(n={},h(n,"".concat(t,"-checked"),f),h(n,"".concat(t,"-disabled"),r),n)),j=function(e){r||("checked"in a||P(e.target.checked),s==null||s({target:k(k({},a),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))};return E("span",{className:R,style:x,children:[p("input",{...y,className:"".concat(t,"-input"),ref:c,onChange:j,disabled:r,checked:!!f,type:m}),p("span",{className:"".concat(t,"-inner")})]})});export{A as C};
//# sourceMappingURL=index.9bbb8302.js.map
