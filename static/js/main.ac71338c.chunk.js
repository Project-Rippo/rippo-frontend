(this["webpackJsonprippo-frontend"]=this["webpackJsonprippo-frontend"]||[]).push([[0],{303:function(n,e){},305:function(n,e){},316:function(n,e){},318:function(n,e){},345:function(n,e){},347:function(n,e){},348:function(n,e){},353:function(n,e){},355:function(n,e){},374:function(n,e){},386:function(n,e){},389:function(n,e){},440:function(n,e,t){"use strict";t.r(e);var r=t(3),i=t(1),c=t.n(i),a=t(20),o=t.n(a),s=t(36),l=t.n(s),d=t(66),u=t(40),f=t(57),b=t(253),j="query($id:String!) {\n    getChild(id:$id) {\n        birthdate\n        createdAt\n        email\n        height\n        history {\n            asthmaAttack\n            chiado\n            createdAt\n            fluxoAr\n            tosse\n        }\n        id\n        name\n        parentId\n        status {\n            asthmaAttack\n            chiado\n            createdAt\n            fluxoAr\n            tosse\n        }\n        surname\n        weight\n        asthmaClassification\n    }\n}",x=t(491),h=t(7),p=t(8);function g(){var n=Object(h.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body{\n    font-family: 'Nunito', sans-serif;\n    font-size: 1em;\n    background: #f8f8f8;\n  }\n"]);return g=function(){return n},n}var m=Object(p.a)(g()),O=t(17);function v(){var n=Object(h.a)(["\n  margin-top: 10px;\n  font-weight: 300;\n\n  display: flex;\n  align-items: center;\n\n  color: #8c8c8c;\n"]);return v=function(){return n},n}function y(){var n=Object(h.a)(["\n  background: rgba(196, 196, 196, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  min-width: 30px;\n  min-height: 30px;\n"]);return y=function(){return n},n}function w(){var n=Object(h.a)(["\n  min-width: 20px;\n  min-height: 20px;\n\n  color: ",";\n"]);return w=function(){return n},n}function k(){var n=Object(h.a)(["\n  margin: 0 16px;\n  width: 100%;\n\n  font-weight: 600;\n  font-size: ",";\n  color: ",";\n  text-align: center;\n\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n"]);return k=function(){return n},n}function S(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]);return S=function(){return n},n}function C(){var n=Object(h.a)(["\n  background: #ffffff;\n  border-radius: 11px;\n  padding: 16px;\n  margin: 16px 0;\n"]);return C=function(){return n},n}var I=p.b.div(C()),A=p.b.div(S()),z=p.b.h1(k(),(function(n){return n.size||"20px"}),(function(n){return n.color||"#000"}),(function(n){return n.center||"flex-start"})),N=p.b.img(w(),(function(n){return n.color||"#000"})),E=p.b.div(y()),T=p.b.div(v()),D=t(127),q=t.n(D),B=function(n){return n.disableNavigation?Object(r.jsx)(I,{children:n.children}):Object(r.jsx)(f.b,{to:n.to,style:{textDecoration:"none"},children:Object(r.jsx)(I,{children:n.children})})},L=function(n){return Object(r.jsx)(z,{color:n.color,center:n.center,size:n.size,children:n.children})},M=function(n){return Object(r.jsx)(N,{src:n.icon})},W=function(n){return Object(r.jsxs)(A,{children:[Object(r.jsx)(M,{icon:n.icon}),n.children,n.disableNavigation?null:Object(r.jsx)(F,{children:Object(r.jsx)(q.a,{style:{color:"#fff"},fontSize:"small"})})]})},F=function(n){return Object(r.jsx)(E,{children:n.children})},J=function(n){return Object(r.jsx)(T,{children:n.children})},Y=t(487),_=t(260),G=t.n(_),P=t(484),H=Object(P.a)((function(n){return{appBar:{padding:n.spacing(2),display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},column:{display:"flex",flexDirection:"column"},root:{flexGrow:1},iconMenu:{color:"#C1C1C1",width:"35px",height:"35px"},title:{flexGrow:1,fontWeight:"bold",fontSize:"36px"},subtitle:{flexGrow:1,fontSize:"24px"}}})),R=t(490),$=t(485),U=t(489),K=t(486),V=t(492),Q=t(493),X=Object(P.a)((function(n){return{link:{textDecoration:"none",color:"black"},container:{minWidth:"250px",height:"100%",paddingTop:"70px",position:"relative"},marsSideBar:{position:"absolute",bottom:"0"},childImage:{borderRadius:"50%",width:"70px"}}})),Z=t.p+"static/media/mars-sidebar.71f93ade.svg",nn=t.p+"static/media/child.5e05ab71.png",en=function(n){var e=n.open,t=n.toggleDrawer,i=JSON.parse(localStorage.getItem("childInformation")),c=X();return Object(r.jsxs)(R.a,{anchor:"right",open:e,onClose:t,children:[Object(r.jsxs)($.a,{fixed:!0,className:c.container,children:[Object(r.jsxs)(U.a,{pl:2,children:[Object(r.jsx)("img",{src:nn,className:c.childImage,alt:"Child"}),Object(r.jsxs)("h3",{mt:2,children:[i.name," ",i.surname]})]}),Object(r.jsxs)(K.a,{children:[Object(r.jsx)(f.b,{to:"/",className:c.link,onClick:t,children:Object(r.jsx)(V.a,{button:!0,children:Object(r.jsx)(Q.a,{children:"Home"})})}),Object(r.jsx)(f.b,{to:"rippo-frotend/dashboard",className:c.link,onClick:t,children:Object(r.jsx)(V.a,{button:!0,children:Object(r.jsx)(Q.a,{children:"Dashboard"})})})]})]}),Object(r.jsx)("img",{src:Z,className:c.marsSideBar,alt:"Logo do mars"})]})},tn=Object(O.f)((function(n){var e=H(),t=Object(i.useState)(!1),c=Object(u.a)(t,2),a=c[0],o=c[1],s=function(){o(!a)};return Object(r.jsxs)("div",{className:e.root,children:[Object(r.jsxs)("div",{className:e.appBar,children:[Object(r.jsxs)("div",{className:e.column,children:[Object(r.jsx)("p",{className:e.title,children:"Ol\xe1,"}),Object(r.jsx)("p",{className:e.subtitle,children:"acompanhe a crian\xe7a"})]}),Object(r.jsx)(Y.a,{onClick:s,"aria-label":"menu",style:{padding:"0"},className:e.iconMenu,children:Object(r.jsx)(G.a,{className:e.iconMenu})})]}),Object(r.jsx)(en,{open:a,toggleDrawer:s})]})}));function rn(){var n=Object(h.a)(["\n  width: 50px;\n  height: 50px;\n"]);return rn=function(){return n},n}function cn(){var n=Object(h.a)(["\n  margin: 80px 0;\n  width: 95.31px;\n  height: 95.31px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background: ",";\n\n  border-radius: 50%;\n  animation: "," 2s infinite;\n"]);return cn=function(){return n},n}function an(){var n=Object(h.a)(["\n    0% {\n        box-shadow: 0 0 0 0rem ",",\n                    0 0 0 2rem ",",\n                    0 0 0 3.5rem ",";\n\n    }\n    100% {\n        box-shadow: 0 0 0 2rem ",",\n                    0 0 0 3.5rem ",",\n                    0 0 0 5rem ",";\n    }\n\n"]);return an=function(){return n},n}var on=p.b.div(cn(),(function(n){return n.color||"#ffffff"}),(function(n){return e=n.color,Object(p.c)(an(),String(e+"66")||"rgba(0, 0, 0, 0.1)",String(e+"66")||"rgba(0, 0, 0, 0.1)",String(e+"40")||"rgba(0, 0, 0, 0.1)",String(e+"66")||"rgba(0, 0, 0, 0.1)",String(e+"40")||"rgba(0, 0, 0, 0.1)",String(e+"00")||"rgba(0, 0, 0, 0.1)");var e})),sn=p.b.img(rn()),ln=t.p+"static/media/heartIcon.2b3681e4.svg",dn=function(n){return Object(r.jsx)("div",{children:Object(r.jsx)(on,{color:n.color,children:Object(r.jsx)(sn,{src:ln})})})},un=t.p+"static/media/barGraph.fc7766a0.svg",fn=t.p+"static/media/hearth.2e64f35b.svg",bn=function(n){return n.asthmaAttack||n.chiado||0==n.fluxoAr||4==n.tosse?3:1==n.fluxoAr||n.tosse>=2?2:n.tosse<2?1:0},jn=function(n){switch(n){case 1:return"Foram identificados sintomas leves e espa\xe7ados";case 2:return"A crian\xe7a apresentou sintomas de intensidade moderada, mas sem registro de sibilo";case 3:return"A crian\xe7a apresentou sintomas graves e de alta intensidade, com registro de sibilo";default:return"A crian\xe7a n\xe3o apresentou sintomas"}},xn=function(n){switch(n){case 1:return"#EAC91B";case 2:return"#FF9800";case 3:return"#CA1E3D";default:return"#A3C744"}},hn=function(){var n=Object(d.a)(l.a.mark((function n(){var e,t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.graphql({query:j,variables:{id:"0b3f25f8-964e-4557-8985-3b4d7626d6a6"}});case 3:return e=n.sent,n.next=6,e.data.getChild;case 6:return t=n.sent,localStorage.setItem("childInformation",JSON.stringify(t)),n.abrupt("return",t);case 11:n.prev=11,n.t0=n.catch(0),console.log("Error fetching child Information: ",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),pn=function(){var n=Object(i.useState)(JSON.parse(localStorage.getItem("childInformation"))),e=Object(u.a)(n,2),t=e[0],c=e[1];return Object(i.useEffect)((function(){var n=setInterval(Object(d.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,hn();case 2:e=n.sent,c(e);case 4:case"end":return n.stop()}}),n)}))),3e3);return function(){return clearInterval(n)}}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(tn,{}),Object(r.jsxs)(U.a,{m:2,children:[Object(r.jsxs)(B,{disableNavigation:!0,children:[Object(r.jsx)(W,{icon:fn,disableNavigation:!0,children:Object(r.jsx)(L,{color:"#323232",center:!0,size:"24px",children:"Status atual da crian\xe7a"})}),Object(r.jsx)(J,{children:jn(bn(t.status))}),Object(r.jsx)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center"},children:Object(r.jsx)(dn,{color:xn(bn(t.status))})})]}),Object(r.jsxs)(B,{to:"rippo-frotend/dashboard",children:[Object(r.jsx)(W,{icon:un,children:Object(r.jsx)(L,{color:"#A3C744",children:"Estat\xedsticas"})}),Object(r.jsx)(J,{children:Object(r.jsxs)("p",{children:["Veja mais detalhes sobre o ",Object(r.jsx)("br",{}),"acompanhamento"]})})]})]})]})};function gn(){var n=Object(h.a)(["\n  background: rgba(196, 196, 196, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n"]);return gn=function(){return n},n}function mn(){var n=Object(h.a)(["\n  font-weight: bold;\n  font-size: 40px;\n  display: flex;\n  align-items: center;\n\n  color: ",";\n"]);return mn=function(){return n},n}function On(){var n=Object(h.a)(["\n  /* padding: 16px; */\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]);return On=function(){return n},n}var vn=p.b.div(On()),yn=p.b.h1(mn(),(function(n){return n.color||"#000"})),wn=p.b.div(gn()),kn=t(267),Sn=t.n(kn),Cn=function(n){switch(n){case"Estat\xedsticas":return"#A3C744";default:return"#000"}},In=Object(O.f)((function(n){var e=function(n){switch(n){case"rippo-frotend/dashboard":return"Estat\xedsticas";default:return"Home"}}(n.location.pathname);return Object(r.jsxs)(vn,{children:[Object(r.jsx)(wn,{onClick:n.history.goBack,children:Object(r.jsx)(Sn.a,{style:{color:"white"}})}),Object(r.jsx)(yn,{color:Cn(e),children:e})]})})),An=t(61),zn=t.n(An);function Nn(){var n=Object(h.a)(["\n  margin-left: 5px;\n  font-size: 18px;\n  color: #323232;\n"]);return Nn=function(){return n},n}function En(){var n=Object(h.a)(["\n  height: 25px;\n  width: 25px;\n"]);return En=function(){return n},n}function Tn(){var n=Object(h.a)(["\n  margin: 15px 0;\n  display: flex;\n  flex-direction: row;\n\n  align-items: flex-end;\n"]);return Tn=function(){return n},n}function Dn(){var n=Object(h.a)(["\n  font-weight: bold;\n  font-size: 24px;\n\n  color: #323232;\n"]);return Dn=function(){return n},n}function qn(){var n=Object(h.a)(["\n  width: 100%;\n\n  display: flex;\n\n  flex-direction: column;\n  padding: 12px;\n"]);return qn=function(){return n},n}function Bn(){var n=Object(h.a)(["\n  width: 100%;\n\n  padding: 16px;\n  background-color: #ffffff;\n  display: flex;\n\n  flex-direction: column;\n\n  align-items: flex-start;\n  border-radius: 46px 46px 0 0;\n\n  /* position: absolute; */\n\n  height: 100%;\n"]);return Bn=function(){return n},n}function Ln(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n\n  width: 100%;\n\n  justify-content: space-between;\n  align-items: flex-end;\n"]);return Ln=function(){return n},n}var Mn=p.b.div(Ln()),Wn=p.b.div(Bn()),Fn=p.b.div(qn()),Jn=p.b.h1(Dn()),Yn=p.b.div(Tn()),_n=p.b.img(En()),Gn=p.b.p(Nn()),Pn=function(n){return Object(r.jsxs)(Yn,{children:[Object(r.jsx)(_n,{src:n.image}),Object(r.jsx)(Gn,{children:n.children})]})};function Hn(){var n=Object(h.a)(["\n  background: rgba(196, 196, 196, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  min-width: 30px;\n  min-height: 30px;\n"]);return Hn=function(){return n},n}function Rn(){var n=Object(h.a)(["\n  font-weight: bold;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n\n  margin: 0 20px;\n  width: 100%;\n  color: #4490c7;\n"]);return Rn=function(){return n},n}function $n(){var n=Object(h.a)(["\n  min-width: 30px;\n  min-height: 30px;\n"]);return $n=function(){return n},n}function Un(){var n=Object(h.a)(["\n  width: 100%;\n  background: #f8f8f8;\n  border-radius: 11px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));\n  margin: 7px 0;\n"]);return Un=function(){return n},n}var Kn=p.b.div(Un()),Vn=p.b.img($n()),Qn=p.b.h1(Rn()),Xn=p.b.div(Hn()),Zn=t(445),ne=function(n){return Object(r.jsx)(Kn,{children:Object(r.jsxs)(Zn.a,{onClick:n.onClick,style:{display:"flex",flex:1,padding:12},children:[Object(r.jsx)(Vn,{src:n.icon}),Object(r.jsx)(Qn,{children:n.children}),Object(r.jsx)(Xn,{children:Object(r.jsx)(q.a,{style:{color:"white"},fontSize:"small"})})]})})};function ee(){var n=Object(h.a)(["\n  background: rgba(196, 196, 196, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  min-width: 30px;\n  min-height: 30px;\n"]);return ee=function(){return n},n}function te(){var n=Object(h.a)(["\n  width: 100%;\n\n  display: flex;\n\n  flex-direction: column;\n  padding: 12px 12px 0px 12px;\n"]);return te=function(){return n},n}function re(){var n=Object(h.a)(["\n  font-weight: bold;\n  font-size: 18px;\n\n  color: #323232;\n"]);return re=function(){return n},n}function ie(){var n=Object(h.a)(["\n  width: 100%;\n  border-radius: 11px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));\n  margin: 24px 0;\n"]);return ie=function(){return n},n}function ce(){var n=Object(h.a)(["\n  width: 100%;\n\n  background: #f8f8f8;\n\n  display: flex;\n  border-radius: 11px;\n\n  flex-direction: column;\n\n  align-items: flex-start;\n\n  /* position: absolute; */\n\n  height: 100%;\n"]);return ce=function(){return n},n}function ae(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n\n  width: 100%;\n\n  justify-content: space-between;\n  align-items: center;\n"]);return ae=function(){return n},n}var oe=p.b.div(ae()),se=p.b.div(ce()),le=p.b.div(ie()),de=p.b.h2(re()),ue=(p.b.div(te()),p.b.div(ee())),fe=t(268),be=t.n(fe),je=t(269),xe=t.n(je),he=function(n){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],o=n.date;return Object(r.jsx)(le,{children:Object(r.jsxs)(se,{children:[Object(r.jsx)(Zn.a,{onClick:function(){return a(!c)},style:{width:"100%",padding:12,paddingBottom:c?0:12},children:Object(r.jsxs)(oe,{children:[Object(r.jsxs)(de,{children:["Crise dia ",zn()(o,"x").format("DD/MM")]}),Object(r.jsx)(ue,{children:c?Object(r.jsx)(be.a,{style:{color:"white"}}):Object(r.jsx)(xe.a,{style:{color:"white"}})})]})}),c&&Object(r.jsx)("div",{style:{paddingLeft:12},children:Object(r.jsx)("p",{style:{fontSize:"13px",color:"#323232"},children:zn()(o,"x").format("HH:mm")})}),c&&Object(r.jsx)("div",{style:{padding:12},children:Object(r.jsx)(oe,{children:n.children})})]})})},pe=t(75);t(433);function ge(){var n=Object(h.a)(["\n  margin-left: 5px;\n  font-size: 18px;\n  color: #323232;\n"]);return ge=function(){return n},n}function me(){var n=Object(h.a)(["\n  height: 25px;\n  width: 25px;\n"]);return me=function(){return n},n}function Oe(){var n=Object(h.a)(["\n  margin: 15px 0;\n  display: flex;\n  flex-direction: row;\n\n  align-items: flex-end;\n"]);return Oe=function(){return n},n}function ve(){var n=Object(h.a)(["\n  font-weight: bold;\n  font-size: 24px;\n\n  color: #323232;\n"]);return ve=function(){return n},n}function ye(){var n=Object(h.a)(["\n  width: 100%;\n\n  display: flex;\n\n  flex-direction: column;\n  padding: 12px 12px 0px 12px;\n"]);return ye=function(){return n},n}function we(){var n=Object(h.a)(["\n  width: 100%;\n\n  padding: 16px;\n  background-color: #ffffff;\n  display: flex;\n\n  flex-direction: column;\n\n  align-items: flex-start;\n  border-radius: 46px 46px 0 0;\n\n  /* position: absolute; */\n\n  height: 100%;\n"]);return we=function(){return n},n}function ke(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: row;\n\n  width: 100%;\n\n  justify-content: space-between;\n  align-items: flex-end;\n"]);return ke=function(){return n},n}var Se=p.b.div(ke()),Ce=(p.b.div(we()),p.b.div(ye())),Ie=p.b.h1(ve()),Ae=(p.b.div(Oe()),p.b.img(me()),p.b.p(ge()),function(n){return n<100?"#EAC91B":"#CA1E3D"}),ze=function(n){var e=n.crises;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ce,{children:Object(r.jsx)(Ie,{children:"Crises"})}),Object(r.jsxs)(Ce,{children:[Object(r.jsx)("p",{style:{fontSize:"13px",color:"#323232"},children:"Atualiza\xe7\xe3o em tempo real"}),Object(r.jsx)("div",{children:e.map((function(n){var e=n.chiado?100:0,t=n.fluxoAr?Math.round(n.fluxoAr/3*100):0,i=n.tosse?Math.round(n.tosse/3*100):0;return Object(r.jsx)(he,{id:n.createdAt,date:n.createdAt,children:Object(r.jsxs)(Se,{children:[Object(r.jsxs)("div",{style:{margin:16},children:[Object(r.jsx)("p",{style:{fontSize:"12px",color:"#323232",marginBottom:8},children:"Chiado"}),Object(r.jsx)(pe.a,{value:e,text:"".concat(e,"%"),styles:Object(pe.b)({strokeLinecap:"butt",pathColor:Ae(e)})})]}),Object(r.jsxs)("div",{style:{margin:16},children:[Object(r.jsx)("p",{style:{fontSize:"12px",color:"#323232",marginBottom:8},children:"Fluxo do ar"}),Object(r.jsx)(pe.a,{value:t,text:"".concat(t,"%"),styles:Object(pe.b)({strokeLinecap:"butt",pathColor:Ae(t)})})]}),Object(r.jsxs)("div",{style:{margin:16},children:[Object(r.jsx)("p",{style:{fontSize:"12px",color:"#323232",marginBottom:8},children:"Tosse"}),Object(r.jsx)(pe.a,{value:i,text:"".concat(i,"%"),styles:Object(pe.b)({strokeLinecap:"butt",pathColor:Ae(i)})})]})]})})}))})]})]})},Ne=t(270),Ee=t(138),Te=t.n(Ee),De=function(n){var e=Object(i.useRef)(null);return Object(i.useLayoutEffect)((function(){new Te.a(e.current,function(n,e,t,r,i){var c=document.getElementById("myChart").getContext("2d").createLinearGradient(0,0,0,170);return c.addColorStop(0,"#f7f7f7"),c.addColorStop(1,"#eae6f8"),{type:"line",data:{labels:e,datasets:[Object(Ne.a)({label:n,data:t,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:"#10c83c"},"backgroundColor",c)]},options:{scales:{yAxes:[{ticks:{max:3,min:0,stepSize:1},scaleLabel:{display:!0,labelString:r}}],xAxes:[{scaleLabel:{display:!0,labelString:i}}]},legend:{display:!1}}}}(n.title,n.labels,n.data,n.ytitle,n.xtitle))}),[]),Object(r.jsx)("canvas",{ref:e,id:"myChart",style:{height:"100%",maxWidth:"100%",padding:0,margin:0}})},qe=function(n){var e=Object(i.useRef)(null);return Object(i.useLayoutEffect)((function(){new Te.a(e.current,function(n,e,t,r,i){var c=document.getElementById("myChart").getContext("2d").createLinearGradient(0,0,0,170);return c.addColorStop(0,"#f7f7f7"),c.addColorStop(1,"#eae6f8"),{type:"doughnut",data:{labels:e,datasets:[{label:n,data:t,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"]}]},options:{legend:{position:"right"}}}}(n.title,n.labels,n.data,n.ytitle,n.xtitle))}),[]),Object(r.jsx)("canvas",{ref:e,id:"myChart",style:{height:"100%",maxWidth:"100%"}})};function Be(){var n=Object(h.a)(["\n  background: rgba(196, 196, 196, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  min-width: 30px;\n  min-height: 30px;\n"]);return Be=function(){return n},n}function Le(){var n=Object(h.a)(["\n  /* margin-left: 5px; */\n  font-size: 13px;\n  color: #323232;\n"]);return Le=function(){return n},n}function Me(){var n=Object(h.a)(["\n  font-weight: bold;\n  font-size: 24px;\n\n  color: #323232;\n"]);return Me=function(){return n},n}function We(){var n=Object(h.a)(["\n  min-width: 30px;\n  min-height: 30px;\n"]);return We=function(){return n},n}function Fe(){var n=Object(h.a)(["\n  width: 100%;\n\n  padding: 16px;\n  background-color: #ffffff;\n  display: flex;\n\n  flex-direction: ",";\n\n  align-items: flex-start;\n  border-radius: 46px 46px 0 0;\n\n  /* position: absolute; */\n\n  height: 100%;\n"]);return Fe=function(){return n},n}var Je=p.b.div(Fe(),(function(n){return n.direction||"row"})),Ye=(p.b.img(We()),p.b.h1(Me())),_e=p.b.p(Le()),Ge=(p.b.div(Be()),function(){return Object(r.jsxs)(Je,{direction:"column",children:[Object(r.jsx)(Ye,{children:"Intensidade da tosse"}),Object(r.jsx)(_e,{children:"Atualiza\xe7\xe3o em tempo real"}),Object(r.jsx)("div",{style:{marginTop:"25px",background:"#f7f7f7",outline:"10px solid #f7f7f7",padding:0},children:Object(r.jsx)(De,{title:"Intensidade da tosse",labels:[0,1,2,3,4,5],data:[0,1,2,3,1,2],ytitle:"N\xedvel da Tosse",xtitle:"Hor\xe1rios do dia"})}),Object(r.jsx)(Ye,{style:{marginTop:"25px"},children:"Incid\xeancia de Tosse"}),Object(r.jsx)(_e,{children:"Atualiza\xe7\xe3o em tempo real"}),Object(r.jsx)("div",{style:{marginTop:"25px",background:"#f7f7f7",outline:"10px solid #f7f7f7"},children:Object(r.jsx)(qe,{title:"Intensidade da tosse",labels:["Sem Tosse","Tosse Leve","Tosse Moderada","Tosse Intensa"],data:[10,20,30,40],ytitle:"N\xedvel da Tosse",xtitle:"Hor\xe1rios do dia"})})]})}),Pe=t.p+"static/media/Weight.1d36c689.svg",He=t.p+"static/media/height.5b725cb3.svg",Re=t.p+"static/media/childIcon.cc175dc2.svg",$e=t.p+"static/media/ar.bd8ef2cd.svg",Ue=t.p+"static/media/bombinha.816edad3.svg",Ke=t.p+"static/media/pulmao.325d57bb.svg",Ve=t.p+"static/media/tosse.5a196c28.svg",Qe=function(n){var e=Object(i.useState)(JSON.parse(localStorage.getItem("childInformation"))),t=Object(u.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(),s=Object(u.a)(o,2),f=s[0],x=s[1],h=zn()().startOf("month").format("x"),p=zn()().endOf("month").format("x"),g=function(){var n=Object(d.a)(l.a.mark((function n(){var e,t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.graphql({query:j,variables:{id:"0b3f25f8-964e-4557-8985-3b4d7626d6a6"}});case 3:return e=n.sent,n.next=6,e.data.getChild;case 6:return t=n.sent,localStorage.setItem("childInformation",JSON.stringify(t)),n.abrupt("return",t);case 11:n.prev=11,n.t0=n.catch(0),console.log("Error fetching child Information: ",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();Object(i.useEffect)((function(){var n=setInterval(Object(d.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g();case 2:e=n.sent,a(e);case 4:case"end":return n.stop()}}),n)}))),3e3);return function(){return clearInterval(n)}}),[]);var m=null===c||void 0===c?void 0:c.history.filter((function(n){return n.asthmaAttack>0})).reverse();return Object(r.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:[console.log(m),Object(r.jsx)("div",{style:{padding:"21px"},children:Object(r.jsx)(In,{})}),!f&&Object(r.jsxs)(Wn,{children:[Object(r.jsx)(Fn,{children:Object(r.jsx)(Jn,{children:"Registro di\xe1rio"})}),Object(r.jsxs)(Fn,{children:[Object(r.jsx)("p",{style:{fontSize:"13px",color:"#323232"},children:"Total de crises"}),Object(r.jsxs)("p",{style:{color:"#4490C7",fontSize:"18px"},children:[(c.history?c.history:[]).reduce((function(n,e){return e.asthmaAttack&&e.createdAt>h&&e.createdAt<p?n+1:n}),0)," crises no m\xeas"]}),Object(r.jsxs)(Mn,{children:[Object(r.jsxs)(Pn,{image:Pe,children:[c.weight," kg"]}),Object(r.jsxs)(Pn,{image:He,children:[c.height," cm"]}),Object(r.jsxs)(Pn,{image:Re,children:[function(){var n=c.birthdate;return zn()(new Date,"DD/MM/YYYY").diff(zn()(n,"DD/MM/YYYY"),"years")}()," anos"]})]})]}),Object(r.jsx)(ne,{onClick:function(){return x("crises")},icon:$e,children:"Crises"}),Object(r.jsx)(ne,{onClick:function(){return x("tosse")},icon:Ue,children:"Tosse"}),Object(r.jsx)(ne,{onClick:function(){return x("sibilo")},icon:Ke,children:"Sibilo"}),Object(r.jsx)(ne,{onClick:function(){return x("fluxoAr")},icon:Ve,children:"Fluxo de Ar"})]}),Object(r.jsxs)(Wn,{children:["crises"===f&&Object(r.jsx)(ze,{crises:m}),"tosse"===f&&Object(r.jsx)(Ge,{}),"sibilo"===f&&Object(r.jsx)(ze,{}),"fluxoAr"===f&&Object(r.jsx)(ze,{})]})]})},Xe=function(){return Object(r.jsxs)(O.c,{children:[Object(r.jsx)(O.a,{path:"rippo-frotend/",exact:!0,children:Object(r.jsx)(pn,{})}),Object(r.jsx)(O.a,{path:"rippo-frotend/dashboard",children:Object(r.jsx)(Qe,{})})]})},Ze=t.p+"static/media/ripple-animated.03e815ef.gif",nt=Object(P.a)((function(n){return{backdrop:{zIndex:n.zIndex.drawer+1,backgroundColor:"#fff"},logo:{width:"322px"}}})),et=function(){var n=Object(i.useState)(!1),e=Object(u.a)(n,2),t=e[0],c=e[1],a=Object(i.useState)(!1),o=Object(u.a)(a,2),s=o[0],h=o[1],p=nt(),g=function(){var n=Object(d.a)(l.a.mark((function n(){var e,t,r,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return O(!0),n.prev=1,n.next=4,b.a.graphql({query:"query($id:String!) {\n    getParent(id:$id) {\n        birthdate\n        childsId\n        createdAt\n        email\n        id\n        name\n        surname\n    }\n}",variables:{id:"8cc20854-45ca-43f0-84ce-e9c4fa0ec98f"}});case 4:return e=n.sent,n.next=7,e.data.getParent;case 7:t=n.sent,localStorage.setItem("parentInformation",JSON.stringify(t)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log("Error fetching parent Information: ",n.t0);case 14:return n.prev=14,n.next=17,b.a.graphql({query:j,variables:{id:"0b3f25f8-964e-4557-8985-3b4d7626d6a6"}});case 17:return r=n.sent,n.next=20,r.data.getChild;case 20:i=n.sent,console.log("childRequest: ",i),localStorage.setItem("childInformation",JSON.stringify(i)),n.next=28;break;case 25:n.prev=25,n.t1=n.catch(14),console.log("Error fetching child Information: ",n.t1);case 28:h(!0),O(!1);case 30:case"end":return n.stop()}}),n,null,[[1,11],[14,25]])})));return function(){return n.apply(this,arguments)}}(),O=function(n){c(n)};return Object(i.useEffect)((function(){g()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x.a,{className:p.backdrop,open:t,children:Object(r.jsx)("img",{src:Ze,className:p.logo,alt:"Gif projeto rippo"})}),s?Object(r.jsxs)(f.a,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(Xe,{})]}):null]})},tt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function rt(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}var it=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,496)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))},ct={aws_project_region:"us-east-1",aws_appsync_graphqlEndpoint:"https://2qapomwr2nhpxef45yodtb7tte.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-wqdveyfx3vbuzedai3qfo5muiy"};t(104).default.configure(ct),o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(et,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/rippo-frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/rippo-frontend","/service-worker.js");tt?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):rt(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):rt(e,n)}))}}(),it()}},[[440,1,2]]]);
//# sourceMappingURL=main.ac71338c.chunk.js.map