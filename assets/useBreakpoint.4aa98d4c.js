import{r as o,bg as a,aE as c,s as f}from"./index.15d8fadb.js";function p(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const e=o.exports.useRef({}),t=a(),s=c();return f(()=>{const n=s.subscribe(u=>{e.current=u,r&&t()});return()=>s.unsubscribe(n)},[]),e.current}export{p as u};