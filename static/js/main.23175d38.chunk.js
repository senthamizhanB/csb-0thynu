(this["webpackJsonpstore-payload"]=this["webpackJsonpstore-payload"]||[]).push([[0],{70:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(52),r=c(20),s=c(11),o=(c(70),c(56)),i=c(117),l=c(118),u=c(116),j=c(1);function b(e){return Object(j.jsxs)(u.a,{sx:{marginTop:"20px",position:"relative",display:"inline-flex"},children:[Object(j.jsx)(i.a,Object(o.a)({style:{color:"#ffc107"},thickness:5,size:70,variant:"determinate"},e)),Object(j.jsx)(u.a,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(j.jsx)(l.a,{style:{color:"white",fontSize:"12px"},variant:"caption",component:"div",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}var d=c(115),O=c(113),h=c(111),f=c(121),x=c(125),g=c(124),m=c(119),p=c(122),v=c(123),y=c(120);function k(e){return Object(j.jsx)(m.a,{style:{margin:"10px auto",width:"600px",height:"200px",background:"linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)"},component:y.a,children:Object(j.jsxs)(f.a,{stickyHeader:!0,size:"small","aria-label":"a dense table",children:[Object(j.jsx)(p.a,{children:Object(j.jsxs)(v.a,{children:[Object(j.jsx)(g.a,{style:{background:"rgba(250, 250, 252, 0.75)"},align:"center",children:"Truck Number"}),Object(j.jsx)(g.a,{style:{background:"rgba(250, 250, 252, 0.75)"},align:"center",children:"Truck PayLoad"}),Object(j.jsx)(g.a,{style:{background:"rgba(250, 250, 252, 0.75)"},align:"center",children:"Bucket Weight"}),Object(j.jsx)(g.a,{style:{background:"rgba(250, 250, 252, 0.75)"},align:"center",children:"Pass count"})]})}),Object(j.jsx)(x.a,{children:e.value.map((function(e,t){return Object(j.jsxs)(v.a,{style:{color:"#fafafc"},sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(j.jsx)(g.a,{style:{color:"rgba(250, 250, 252, 0.75)"},align:"center",children:e.truckNum}),Object(j.jsx)(g.a,{style:{color:"rgba(250, 250, 252, 0.75)"},align:"center",children:e.truckPayload}),Object(j.jsx)(g.a,{style:{color:"rgba(250, 250, 252, 0.75)"},align:"center",children:e.bucketWeight}),Object(j.jsx)(g.a,{style:{color:"rgba(250, 250, 252, 0.75)"},align:"center",children:e.passCount})]},t)}))})]})})}function S(){var e=Object(n.useState)(500),t=Object(s.a)(e,2),c=t[0],a=(t[1],Object(n.useState)(400)),o=Object(s.a)(a,2),i=o[0],l=(o[1],Object(n.useState)(100)),f=Object(s.a)(l,2),x=f[0],g=(f[1],Object(n.useState)(40)),m=Object(s.a)(g,2),p=m[0],v=(m[1],Object(n.useState)(!1)),y=Object(s.a)(v,2),S=y[0],N=y[1],T=Object(n.useState)(""),I=Object(s.a)(T,2),M=I[0],w=I[1],C=Object(n.useState)(!0),P=Object(s.a)(C,2),E=P[0],W=P[1],z=Object(n.useState)([]),B=Object(s.a)(z,2),H=B[0],J=B[1],A=Object(n.useState)(0),D=Object(s.a)(A,2),F=D[0],L=D[1],R=Object(n.useState)(1),q=Object(s.a)(R,2),G=q[0],K=q[1],Q=Object(n.useState)(!1),U=Object(s.a)(Q,2),V=U[0],X=U[1],Y=Object(n.useState)(0),Z=Object(s.a)(Y,2),$=Z[0],_=Z[1],ee=Object(n.useState)(0),te=Object(s.a)(ee,2),ce=te[0],ne=te[1],ae=Object(n.useState)(0),re=Object(s.a)(ae,2),se=re[0],oe=re[1],ie=Object(n.useState)(0),le=Object(s.a)(ie,2),ue=le[0],je=le[1],be=Object(n.useState)(0),de=Object(s.a)(be,2),Oe=de[0],he=de[1],fe=Object(n.useState)(0),xe=Object(s.a)(fe,2),ge=xe[0],me=xe[1],pe=function(){N(!1)};return Object(n.useEffect)((function(){if(ce)return ce+$===i?(console.log("yes"),X(!0),void je((function(e){return e+1}))):void(ce+$>i?he((function(e){return e+1})):ce>p&&je((function(e){return e+1})))}),[ce]),Object(n.useEffect)((function(){ue&&(clearInterval(ge),me(0),V?(_((function(e){return e+ce})),oe((function(e){return e+1})),ne(0),setTimeout((function(){L((function(e){return e+1}))}),c),X(!1)):setTimeout((function(){_((function(e){return e+ce})),oe((function(e){return e+1})),ne(0);var e=setInterval((function(){ne((function(e){return e+(1+Math.floor(10*Math.random()))}))}),c);me(e)}),2*c))}),[ue]),Object(n.useEffect)((function(){Oe&&(w("error"),N(!0),W(!1),setTimeout((function(){w("")}),2*c),ge&&(clearInterval(ge),me(0)),setTimeout((function(){ce&&ne((function(e){return e-1}))}),2*c))}),[Oe]),Object(n.useEffect)((function(){F&&setTimeout((function(){console.log("next truck..."),_(0),K((function(e){return e+1}));var e=setInterval((function(){ne((function(e){return e+(1+Math.floor(10*Math.random()))}))}),c);me(e)}),c)}),[F]),Object(n.useEffect)((function(){se>19&&(clearInterval(ge),me(0),oe(0)),se&&J((function(e){w("success"),N(!0),W(!0),setTimeout((function(){w("")}),2*c);var t={truckNum:G,truckPayload:$,bucketWeight:e.length&&e[e.length-1].truckNum===G?$-e[e.length-1].truckPayload:$,passCount:se};return[].concat(Object(r.a)(e),[t])}))}),[se]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)(u.a,{sx:{margin:"0",width:"100%",height:"700px"},children:[Object(j.jsx)("h1",{className:"heading1",children:"Store Feature Payload System"}),Object(j.jsxs)("h4",{className:"heading4",children:["Truck no: ",G]}),Object(j.jsxs)("div",{className:"progress-container",children:[Object(j.jsxs)("div",{className:"progress-bar",children:[Object(j.jsx)("h5",{className:"heading5",children:"Bucket weight:"}),Object(j.jsxs)("h3",{children:[ce," / ",x," tons"]}),Object(j.jsx)(b,{value:100*ce/x})]}),Object(j.jsxs)("div",{className:"progress-bar",children:[Object(j.jsx)("h5",{className:"heading5",children:"Truck payload:"}),Object(j.jsxs)("h3",{children:[$," / ",i," tons"]}),Object(j.jsx)(b,{value:100*$/i})]}),Object(j.jsxs)("div",{className:"progress-bar",children:[Object(j.jsx)("h5",{className:"heading5",children:"Pass count:"}),Object(j.jsxs)("h3",{children:[se," / ",20]}),Object(j.jsx)(b,{value:100*se/20})]})]}),Object(j.jsx)(d.a,{className:M,style:{backgroundColor:"#ffc107",color:"#000",fontWeight:"bold",letterSpacing:"2.3px",margin:"20px",padding:"10px 20px"},variant:"contained",onClick:function(){if(ge)return clearInterval(ge),void me(0);var e=setInterval((function(){ne((function(e){return e+(1+Math.floor(10*Math.random()))}))}),c);me(e)},children:"Store"}),Object(j.jsx)(k,{value:H})]}),Object(j.jsx)(O.a,{open:S,autoHideDuration:1500,onClose:pe,style:{left:"50%",bottom:"8%",transform:"translate(-50%,0%)"},children:Object(j.jsx)(h.a,{onClose:pe,severity:E?"success":"error",sx:{width:"100%"},children:E?"Stored":"Truck Overload"})})]})}var N=document.getElementById("root");Object(a.createRoot)(N).render(Object(j.jsx)(n.StrictMode,{children:Object(j.jsx)(S,{})}))}},[[76,1,2]]]);
//# sourceMappingURL=main.23175d38.chunk.js.map