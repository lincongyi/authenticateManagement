import{r,J as c,bs as f}from"./index.904a2463.js";const d=(t,s)=>{const e=r.exports.useRef(!1);r.exports.useEffect(()=>{e.current?t&&t():e.current=!0},s)},p=()=>{const{dictionaryStore:t}=c();return r.exports.useEffect(()=>{t.dictionary||(async()=>{const{data:e}=await f({showType:"appInfo"});t.setDictionary(e)})()},[]),{dictionaryStore:t,getDictionaryItemName:(e,n)=>{const o=t.getDictionaryItem(e);if(!o)return!1;const a=o.find(i=>i.dictValue===n);return a?a.dictName:!1}}};export{d as a,p as u};
