import{r as o,b2 as a,aQ as c,$ as f}from"./index.e1f6c22a.js";function p(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const e=o.exports.useRef({}),t=a(),r=c();return f(()=>{const n=r.subscribe(u=>{e.current=u,s&&t()});return()=>r.unsubscribe(n)},[]),e.current}export{p as u};
