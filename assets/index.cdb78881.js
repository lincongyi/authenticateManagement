import{o as y,u as R,r as s,bn as S,aE as B,a as c,d as r,j as e,b0 as G,B as U,D as v,aF as I,bo as Q}from"./index.c52fca20.js";import{L as i}from"./index.2b1eec84.js";import{P as w}from"./Pagination.fdfbd77b.js";import"./useBreakpoint.00aa8cd3.js";const V="_item_19ny8_1",D="_content_19ny8_9",T="_active_19ny8_14",t={item:V,content:D,active:T,"pagination-wrap":"_pagination-wrap_19ny8_25"},f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGaADAAQAAAABAAAAGgAAAAAfU+2OAAADN0lEQVRIDcVWTUwTQRR+M7u0lD9FIGJTIFX50YJe0AQPYNTozWBMK8SDB4kHTTyoVzUIR6MXE3+iB+WA0APoSS8mEhMT5CJQLURbgVgIilEEraW745ulu0zbXUA42LSdN9/33vdm3sy+LIFVfjzeQM5vSp2KulAg0YwZh6pGAn7P3GrCyXJO27yB7XGinGIAjcCgOs2XwDAK9MpMevjR7/mQxicA0yQVzSOFf5RYK2PsDPrJVsECHieE3LNLtqujnZVfBVwz05K4m4d2qXF4yoCVpTqvNCdAxqgMR8OdNYOib1IStzewVyHKCyxNtuj0TzaBeYlJB8J+T78eZySpbAo6o8rCAO5gi06udcQdTWZKGbUjj6siXIPqQpjg7koJbDKBihK7HmI5ch2upztoO3H73tUrLP5SB83GQ7W54NufD/W7c+FWzzQ8efUdJqYXzFwNTCJyQ7h7Z5+WpMw31IM3qdFgU4wb51xwvCE/CY3GVDjZHoaB4K8kXJzgjesd6645Ruu8Ew5McFgkRZuXJzUB5zNtFC76NouuaTbX5fr0szS7D9msNI8EUO7KtKKg3LXi+WRFYLaOUpW5LFWQ4Idt9bHJxr2xcgFCWAkFpq77ylpmQEIFtZhiX1q2yeU4rFdrtxGQrGktN2EwT4ES7YExWw0vVdPBTWaUhvHDN7sUSQGoTyWQh5PAxITiCm9fKIVqt8OMNrD2FifsqbK8N8D15VDXjtEy71AQn9IqIxINvotPUzHoe/sT8rIlsGfw0uAlwC9TAWJxrENUgalvcTxcMXLJxvYS5PpaG8cEnUi1LtEA0RiDtkeTIgRnG4ugIE+G529+QP9764dQD0roLvYuR67tJi7mi05ajcHxKEgSQCgSs3IxcK7HdTlgbBRLdhoz3ze81mlgqVrG/DUPuIxxATWAkDvr1F4MRx09QVISPinaWH0eV9Cx6Lm2fx7PdcRoo1wiiF35Es7bsMFZNy4xAG3suFEcLmPXvZ5CLZ1JKrHVGyjFN5VruLITyyXj4niWXfjGciXk94yn6vC56U5ER/6+NUfYEXw66vDnZIwUYNObwVDsFOT1Bnvhs8GO4nkx5r/YfwEPif/E/L+peAAAAABJRU5ErkJggg==",L="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGaADAAQAAAABAAAAGgAAAAAfU+2OAAADlklEQVRIDa1WWWhTURCduUnTRFOsS7poSxe11Tai4gKCuH+IWhc0bVX8UFFEEP9EBCXSLwVF8NcF/NE2iB8q+OH+YUHFhTa2llYtrW1FRG1aa2veu87c9MX05b1EwQvJ3JlzZubeufPuewj/achAwDHQ27sXEFeokFI+9ObnX8RQSMN0OWZsD1eOaHI9SH06Ak5lvgTZAyg6XA683X61MkwJPJG+vnsg5ZIx8RAbs/LyVlsmkVJicW3TDtDhuAQoH+NoUijA2ytfzrbNH2mvMkFKFQCnkpIU17YU61o0ROtdaOVkZbv1+SQURz9ZQUDla3MmIqWB8NKoHr1BCaYk2tPNJ+mRVJQc2k1slARayzXQblFd/ykBe7dkFI5GSRZUqhcONi8JdHn6cfAR1X9aMi29pcuRA1uGGsFce9J1hxC71E564ethKaEsVThBzLq9U2HZXG8S7aWrFA5NPACfxYQ49gPd/eSyadzjx0+wfE9r1s/ISBft4g8jTgVw0l6P7syDHWsmwXi32ji0df+EExd7oDE8mMCMTY0G6HTmfndnuQrfXpoVEcORX+vsErDb/iof7NvgiydgW1mBGy4cKYKc7DF9wxB8cOaqH8fk2GwTEuUmntiN1QuyLCGvxwGLK8ZbYobRiC3oLPyG0Ur6JiSv1uClwphjxKaziV0VhuP/lbHYgtosuV0SMiGaGzMRTJhbTMlV1VMAyl4LXJmyvQ7In5xhB0NFkdsWiwGyjyWdCXZbMTOcCOcPFwJLu7Ft+URYOd+6MdiHzqSLJe0E7vLEPA5u9tGDZx+A+YKKfe5QAbjsFoJ4j3lYUtM8V9P1V6yYx8yCTPDRs+DJFOD1CHC7BK8Ovg9qMDSsK9nxcRgGhnSzq9LpSpn3vt7/WtWiqLrpPr1DVloyR40LysZBfbAU3nwYgo3HOlJRFUYN86CzYc4qVlSS0tqmhVENnlIV7Q+AyNwI/T800K0XroLH/lDSdbT43bU5z1mn5wSAFTqcOp6nGt8G/iaBOug6IwHHi6+cX7lFNc3XqOjVqRKlxRAbOuv9tVQuOr3YUDvhKRv3VPi3kzwziv2zYN/RGPEEKrZVpJLq5ipdytP0VTLLCjfb6CumVSAeed/gv2nGWI+XywwGAtLxTIQDUte3SsC11BSm6wcHEOQdFOL6Ir0yFAqhZo5h6LZJDALLYFCKy+0tuXI4qr67MNPZs3vG7E/BIKbtM/b/DdCYGXijQA1YAAAAAElFTkSuQmCC",x=()=>{const{unreadCountStore:n}=R();s.exports.useEffect(()=>{(async()=>{const{data:A}=await S();!A||n.setUnreadCount(A.unRead)})()},[]);const[g,d]=s.exports.useState(),u=async()=>{const{data:A}=await Q({pageNum:a.pageNum,pageSize:a.pageSize});if(!A)return;const{list:C,pageNum:N,pageSize:p,total:F}=A;d(C),o({pageNum:N,pageSize:p,total:F})},[a,o]=s.exports.useState({pageNum:1,pageSize:10,total:0});s.exports.useEffect(()=>{u()},[a.pageNum]);const l=A=>{o({...a,pageNum:A})},E=B(),m=async A=>{E(`./messageDetail?id=${A}`)};return c(r,{children:[e(G,{count:n.unreadCount,children:e(U,{type:"primary",size:"large",children:"\u7CFB\u7EDF\u6D88\u606F"})}),e(v,{}),e(i,{itemLayout:"horizontal",dataSource:g,renderItem:A=>e(i.Item,{className:t.item,onClick:()=>m(A.id),children:e(i.Item.Meta,{avatar:e(I,{width:25,preview:!1,src:A.isRead?f:L}),title:e(r,{children:c("div",{className:`${t.content} ${!A.isRead&&t.active}`,children:[e("div",{className:t.title,children:A.title}),e("div",{className:t.date,children:A.sendTime})]})})})})}),e("div",{className:t["pagination-wrap"],children:e(w,{...a,onChange:l})})]})},z=y(x);export{z as default};
