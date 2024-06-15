"use strict";(self.webpackChunkollama_gui_reactjs=self.webpackChunkollama_gui_reactjs||[]).push([[595],{904:(e,n,t)=>{t.d(n,{A:()=>a});t(43);var A,r=t(528);const o=t(464).Ay.button(A||(A=(0,r.A)(["\n  background-color: #007aff;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 500;\n  padding: 12px 24px;\n  transition: background-color 0.3s, box-shadow 0.3s;\n\n  &:hover {\n    background-color: #005bb5;\n    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.3);\n    outline: none;\n  }\n\n  &:active {\n    background-color: #004a99;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  }\n"])));var i=t(579);function a(e){let{children:n,onClick:t,style:A}=e;return(0,i.jsx)(o,{onClick:()=>t&&t(),style:A,children:n})}},628:(e,n,t)=>{t.d(n,{so:()=>h,dN:()=>g,Yq:()=>u});var A,r,o=t(43),i=t(852),a=t(528),l=t(464);const s=l.Ay.div(A||(A=(0,a.A)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  min-width: ",";\n  width: 100%;\n"])),(e=>{let{isMobile:n}=e;return n?"100vw":"360px"})),c=l.Ay.div(r||(r=(0,a.A)(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  overflow-x: ",";\n  width: 100%;\n"])),(e=>{let{isMobile:n}=e;return n?"auto":"hidden"}));var d=t(579);function h(e){let{children:n,style:t}=e;const A=(0,i.A)();return(0,d.jsx)(s,{isMobile:A,style:t,children:n})}const u=(0,o.forwardRef)(((e,n)=>{let{children:t,style:A}=e;const r=(0,i.A)();return(0,d.jsx)(c,{isMobile:r,ref:n,style:A,children:t})}));function g(e){let{children:n,height:t="100%",textAlign:A="center",width:r="100%"}=e;return(0,d.jsx)("div",{style:{height:t,textAlign:A,width:r},children:n})}},412:(e,n,t)=>{t.d(n,{A:()=>R});var A=t(43),r=t(216),o=t(724),i=t(852),a=t(545),l=t(326);var s,c,d,h,u=t(341),g=t(85),f=t(706),p=t(904),x=t(528),m=t(475),w=t(464);const v=w.Ay.div(s||(s=(0,x.A)(["\n  display: flex;\n  height: fit-content;\n  justify-content: space-between;\n  padding: 8px;\n  width: 100%;\n"]))),C=(0,w.Ay)(m.N_)(c||(c=(0,x.A)(["\n  border-radius: 4px;\n  color: rgba(255,255,255,0.25);\n  cursor: pointer;\n  display: block;\n  margin-bottom: 4px;\n  overflow: hidden;\n  padding: 4px;\n  text-overflow: ellipsis;\n  transition: 0.3s;\n  white-space: nowrap;\n  width: 100%;\n\n  &:hover {\n    background-color: rgba(255,255,255,0.25);\n    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.2);\n    color: #fff;\n  }\n"]))),y=w.Ay.div(d||(d=(0,x.A)(["\n  height: 100%;\n  overflow-y: auto;\n  padding: 8px;\n  width: 100%;\n"]))),j=w.Ay.div(h||(h=(0,x.A)(["\n  background-color: rgba(0,0,0,0.2);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-width: ",";\n"])),(e=>{let{isMobile:n}=e;return n?"100vw":"20%"}));var b=t(579);function R(e){let{loading:n,scrollRef:t}=e;const s=(0,r.Zp)(),c=(0,i.A)(),d=(0,g.RL)("chats"),h=(0,A.useRef)(!1);function x(){if(n)return null;const e=(0,a.A)();return Array.isArray(d[e])?e:null}return(0,A.useEffect)((()=>{h.current&&(h.current=!1,s(o.A.ROOT),l.A.set("chats",d))}),[d]),(0,b.jsxs)(j,{isMobile:c,children:[(0,b.jsxs)(y,{children:[d.map(((e,t)=>{const{content:A}=e[0];return(0,b.jsx)(C,{to:n?"#":"".concat(o.A.CHAT,"/").concat(++t),title:A,children:A},t)})),d.length>0&&(0,b.jsx)(C,{to:n?"#":"".concat(o.A.CHAT,"/").concat(d.length+1),title:"Create a new chat",style:{textAlign:"center"},children:"+"},"createChat")]}),(0,b.jsxs)(v,{children:[(0,b.jsx)(p.A,{style:{padding:"6px",paddingBottom:"3px"},onClick:()=>!n&&s(o.A.CONFIG),children:(0,b.jsxs)("svg",{width:"16px",height:"16px",viewBox:"0 0 32 32",fill:"#fff",stroke:"#fff",children:[(0,b.jsx)("g",{id:"SVGRepo_bgCarrier"}),(0,b.jsx)("g",{id:"SVGRepo_tracerCarrier"}),(0,b.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[(0,b.jsx)("title",{children:"Configurations"}),(0,b.jsx)("path",{d:"M23.265,24.381l.9-.894c4.164.136,4.228-.01,4.411-.438l1.144-2.785L29.805,20l-.093-.231c-.049-.122-.2-.486-2.8-2.965V15.5c3-2.89,2.936-3.038,2.765-3.461L28.538,9.225c-.171-.422-.236-.587-4.37-.474l-.9-.93a20.166,20.166,0,0,0-.141-4.106l-.116-.263-2.974-1.3c-.438-.2-.592-.272-3.4,2.786l-1.262-.019c-2.891-3.086-3.028-3.03-3.461-2.855L9.149,3.182c-.433.175-.586.237-.418,4.437l-.893.89c-4.162-.136-4.226.012-4.407.438L2.285,11.733,2.195,12l.094.232c.049.12.194.48,2.8,2.962l0,1.3c-3,2.89-2.935,3.038-2.763,3.462l1.138,2.817c.174.431.236.584,4.369.476l.9.935a20.243,20.243,0,0,0,.137,4.1l.116.265,2.993,1.308c.435.182.586.247,3.386-2.8l1.262.016c2.895,3.09,3.043,3.03,3.466,2.859l2.759-1.115C23.288,28.644,23.44,28.583,23.265,24.381ZM11.407,17.857a4.957,4.957,0,1,1,6.488,2.824A5.014,5.014,0,0,1,11.407,17.857Z"})]})]})}),(0,b.jsx)(p.A,{style:{padding:"6px",paddingBottom:"3px"},onClick:function(){const e=x();if(null===e)return;confirm("Are you sure you want to delete?")&&(h.current=!0,(0,g.ST)((0,f._e)(e)))},children:(0,b.jsxs)("svg",{fill:"#fff",width:"16px",height:"16px",viewBox:"0 0 24 24",children:[(0,b.jsx)("g",{id:"SVGRepo_bgCarrier"}),(0,b.jsx)("g",{id:"SVGRepo_tracerCarrier"}),(0,b.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[(0,b.jsx)("title",{children:"Delete Chat"}),(0,b.jsx)("path",{d:"M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"})]})]})}),(0,b.jsx)(p.A,{style:{padding:"6px",paddingBottom:"3px"},onClick:function(){const e=x();null!==e&&function(e,n){const t=l.A.get("chats")||[];Array.isArray(t[e])?t[e].push(...n):t[e]=n,l.A.set("chats",t)}(e,d[e])},children:(0,b.jsxs)("svg",{width:"16px",height:"16px",viewBox:"0 0 32 32",fill:"#fff",children:[(0,b.jsx)("g",{id:"SVGRepo_bgCarrier"}),(0,b.jsx)("g",{id:"SVGRepo_tracerCarrier"}),(0,b.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,b.jsx)("title",{children:"Save Chat"})," ",(0,b.jsx)("desc",{children:"Created with Sketch Beta."})," ",(0,b.jsx)("defs",{children:" "})," ",(0,b.jsxs)("g",{id:"Page-1",stroke:"none",fill:"none",children:[" ",(0,b.jsxs)("g",{id:"Icon-Set-Filled",transform:"translate(-154.000000, -517.000000)",fill:"#fff",children:[" ",(0,b.jsx)("path",{d:"M172,522 C172,521.447 172.448,521 173,521 C173.552,521 174,521.447 174,522 L174,526 C174,526.553 173.552,527 173,527 C172.448,527 172,526.553 172,526 L172,522 L172,522 Z M163,529 L177,529 C177.552,529 178,528.553 178,528 L178,517 L162,517 L162,528 C162,528.553 162.448,529 163,529 L163,529 Z M182,517 L180,517 L180,529 C180,530.104 179.104,531 178,531 L162,531 C160.896,531 160,530.104 160,529 L160,517 L158,517 C155.791,517 154,518.791 154,521 L154,545 C154,547.209 155.791,549 158,549 L182,549 C184.209,549 186,547.209 186,545 L186,521 C186,518.791 184.209,517 182,517 L182,517 Z",id:"save-floppy",children:" "})," "]})," "]})," "]})]})}),c&&(0,b.jsx)(p.A,{onClick:()=>(0,u.A)(t,1),style:{padding:"6px",paddingBottom:"3px"},children:(0,b.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 14",children:(0,b.jsx)("path",{fill:"#fff",d:"m15.1 6.2q0.2 0.2 0.2 0.4 0.1 0.2 0.1 0.4 0 0.2-0.1 0.4 0 0.2-0.2 0.4l-5.1 5.2c-0.3 0.2-0.6 0.3-0.9 0.3-0.2 0-0.5-0.2-0.7-0.4-0.3-0.2-0.4-0.5-0.4-0.8 0-0.3 0.1-0.5 0.3-0.8l3.2-3.2h-9.8c-0.3 0-0.6-0.1-0.8-0.3-0.2-0.2-0.3-0.5-0.3-0.8 0-0.3 0.1-0.6 0.3-0.8 0.2-0.2 0.5-0.3 0.8-0.3h9.8l-3.2-3.2c-0.2-0.2-0.3-0.5-0.3-0.8 0-0.4 0.1-0.7 0.3-0.9 0.2-0.2 0.5-0.3 0.8-0.3 0.3 0 0.6 0.1 0.9 0.3z"})})})]})]})}},852:(e,n,t)=>{t.d(n,{A:()=>r});var A=t(43);function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:768;const[n,t]=(0,A.useState)(window.innerWidth<=e);return(0,A.useEffect)((()=>{const n=()=>{t(window.innerWidth<=e)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[e]),n}},595:(e,n,t)=>{t.r(n),t.d(n,{default:()=>B});var A=t(43),r=t(216),o=t(724);function i(e){return{role:"assistant",content:e,time:Date.now()}}var a=t(545);var l=t(341),s=t(326),c=t(85),d=t(706),h=t(102),u=t(628),g=t(579);function f(){return(0,g.jsxs)(u.so,{style:{alignItems:"flex-start",padding:"8px"},children:[(0,g.jsxs)("p",{children:[(0,g.jsx)("a",{href:"https://github.com/kastorcode/ollama-gui-reactjs",target:"_blank",children:"This app"})," is a front end for the LLM (large language model) Ollama."]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("a",{href:"https://ollama.com",target:"_blank",children:"Ollama"})," is an interface created by Meta that facilitates the use of artificial intelligence."]}),(0,g.jsxs)("p",{children:["The initial setup uses the ",(0,g.jsx)("a",{href:"https://ollama.com/library/llama3",target:"_blank",children:"Llama 3"})," model."]}),(0,g.jsx)("br",{}),(0,g.jsx)(u.dN,{height:"auto",children:(0,g.jsx)("a",{href:"https://github.com/kastorcode",target:"_blank",title:"Powered by KastorCode",children:"<kastor.code/>"})})]})}var p,x=t(904),m=t(412),w=t(528),v=t(464);const C=v.Ay.textarea(p||(p=(0,w.A)(["\n  background-color: rgba(255,255,255,0.25);\n  border: 1px solid #dcdcdc;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  color: #fff;\n  margin-right: 8px;\n  outline: none;\n  overflow-y: hidden;\n  padding: 12px 16px;\n  resize: none;\n  transition: border-color 0.3s, box-shadow 0.3s;\n  width: 100%;\n\n  &:focus {\n    border-color: #007aff;\n    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.2);\n  }\n"]))),y=(0,A.forwardRef)(((e,n)=>(0,g.jsx)(C,{...e,ref:n})));var j,b,R;const L=v.Ay.div(j||(j=(0,w.A)(["\n  display: flex;\n  width: 90%;\n"]))),Z=v.Ay.img(b||(b=(0,w.A)(["\n  position: fixed;\n  right: 44px;\n  top: 22px;\n"]))),S=v.Ay.div(R||(R=(0,w.A)(["\n  height: 100%;\n  line-height: 1.6;\n  margin-bottom: 16px;\n  overflow-y: auto;\n  padding-right: 8px;\n  text-align: justify;\n  width: 100%;\n"]))),E="data:image/png;base64,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";function B(){const e=(0,r.Zp)(),{chat:n}=(0,r.g)(),[t,p]=(0,A.useState)(null),[w,v]=(0,A.useState)(!0),C=(0,c.RL)("chats"),{autoSaveChats:j,modelName:b,modelUrl:R}=(0,h.UK)("config"),B=(0,A.useRef)(i("")),U=(0,A.useRef)(0),V=(0,A.useRef)(null),W=(0,A.useRef)(null),F=(0,A.useRef)(null);function N(e){e.message.content&&(D(!1,e.message),B.current.content+=e.message.content),e.done&&(k(2),(0,c.ST)((0,d.tj)({index:t,message:B.current})),v(!1))}function T(e){alert("Something went wrong :-("),console.error(e),v(!1)}function D(e,n){let{role:t,content:A}=n;M[t](A),e&&"assistant"===t&&k(2)}const M={assistant:e=>{var n;const t=document.createElement("span");t.innerText=e,null===(n=W.current)||void 0===n||n.appendChild(t)},user:e=>{var n;!function(){var e;F.current.value="",null===(e=F.current)||void 0===e||e.focus()}();const t=document.createElement("p");t.classList.add("userMessage"),t.innerText=e,null===(n=W.current)||void 0===n||n.appendChild(t),k()}};function k(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;for(let t=0;t<e;t++){var n;null===(n=W.current)||void 0===n||n.appendChild(document.createElement("br"))}}return(0,A.useEffect)((()=>{U.current++,j&&(U.current<3||s.A.set("chats",C))}),[j,C]),(0,A.useEffect)((()=>{null!==t&&(t<0||t>C.length?e(o.A.ROOT):((0,l.A)(V,1),C[t]&&(w||v(!0),C[t].forEach((e=>{D(!0,e)}))),v(!1)))}),[t]),(0,A.useEffect)((()=>{var e,n;null===(e=F.current)||void 0===e||e.focus(),null===(n=W.current)||void 0===n||n.replaceChildren(),p((0,a.A)())}),[n]),(0,g.jsxs)(u.Yq,{ref:V,children:[(0,g.jsx)(m.A,{loading:w,scrollRef:V}),(0,g.jsxs)(u.so,{style:{padding:8,paddingRight:0},children:[w&&(0,g.jsx)(Z,{src:E}),C.length?(0,g.jsx)(S,{ref:W}):(0,g.jsx)(f,{}),(0,g.jsxs)(L,{children:[(0,g.jsx)(y,{placeholder:"Message Ollama",ref:F}),(0,g.jsx)(x.A,{onClick:function(){if(w)return;const e=function(){var e;return null===(e=F.current)||void 0===e?void 0:e.value}();if(!e)return;v(!0);const n={role:"user",content:e,time:Date.now()};D(!1,n),(0,c.ST)((0,d.tj)({index:t,message:n})),B.current=i(""),async function(e,n,t,A,r){try{var o;const i=await fetch(e,{method:"POST",body:JSON.stringify({model:n,messages:t})}),a=new TextDecoder;null===(o=i.body)||void 0===o||o.pipeTo(new WritableStream({write:e=>{try{A(JSON.parse(a.decode(e)))}catch(n){r(n)}}}))}catch(i){r(i)}}(R,b,C[t],N,T)},children:(0,g.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 14 16",children:(0,g.jsx)("path",{fill:"#fff",d:"m6.2 0.9q0.2-0.2 0.4-0.2 0.2-0.1 0.4-0.1 0.2 0 0.4 0.1 0.2 0 0.4 0.2l5.2 5.1c0.2 0.3 0.3 0.6 0.3 0.9 0 0.2-0.2 0.5-0.4 0.7-0.2 0.3-0.5 0.4-0.8 0.4-0.3 0-0.5-0.1-0.8-0.3l-3.2-3.2v9.8c0 0.3-0.1 0.6-0.3 0.8-0.2 0.2-0.5 0.3-0.8 0.3-0.3 0-0.6-0.1-0.8-0.3-0.2-0.2-0.3-0.5-0.3-0.8v-9.8l-3.2 3.2c-0.2 0.2-0.5 0.3-0.8 0.3-0.4 0-0.7-0.1-0.9-0.3-0.2-0.2-0.3-0.5-0.3-0.8 0-0.3 0.1-0.6 0.3-0.9z"})})})]})]})]})}},545:(e,n,t)=>{function A(){const e=window.location.href.split("/chat/")[1];if(!e)return 0;const n=parseInt(e);return isNaN(n)||n<1?0:n-1}t.d(n,{A:()=>A})},341:(e,n,t)=>{function A(e,n){var t;const A=[0,document.documentElement.scrollWidth];null===(t=e.current)||void 0===t||t.scrollTo({behavior:"smooth",left:A[n]})}t.d(n,{A:()=>A})},326:(e,n,t)=>{t.d(n,{A:()=>r});const A={chats:!0,config:!0};class r{static clear(){localStorage.clear()}static get(e){if(!A[e])throw new Error("Key not allowed: ".concat(e));const n=localStorage.getItem(e);return n?JSON.parse(n):null}static set(e,n){if(!A[e])throw new Error("Key not allowed: ".concat(e));localStorage.setItem(e,JSON.stringify(n))}}},706:(e,n,t)=>{function A(e){return{type:"ADD_MESSAGE",payload:e}}function r(e){return{type:"DELETE_CHAT",payload:e}}function o(e){return{type:"LOAD_CHATS",payload:e}}t.d(n,{_e:()=>r,qg:()=>o,tj:()=>A})},85:(e,n,t)=>{t.d(n,{ST:()=>r,RL:()=>o});var A=t(957);const{dispatch:r,useStoreState:o}=(0,A.y)((function(e,n){switch(n.type){case"ADD_MESSAGE":{const{index:t,message:A}=n.payload;return Array.isArray(e.chats[t])?e.chats[t].push(A):e.chats[t]=[A],{chats:[...e.chats]}}case"DELETE_CHAT":return Array.isArray(e.chats[n.payload])?(e.chats.splice(n.payload,1),{chats:[...e.chats]}):e;case"LOAD_CHATS":return{chats:[...n.payload]};default:return e}}),{chats:[]})},102:(e,n,t)=>{t.d(n,{hm:()=>r,UK:()=>o});var A=t(957);const{dispatch:r,useStoreState:o}=(0,A.y)((function(e,n){switch(n.type){case"TOGGLE_AUTO_SAVE_CHATS":return{config:{...e.config,autoSaveChats:!e.config.autoSaveChats}};case"UPDATE_CONFIG":return{config:{...n.payload}};default:return e}}),{config:{autoSaveChats:!1,modelName:"llama3",modelUrl:"http://localhost:11434/api/chat"}})}}]);
//# sourceMappingURL=595.fdded3de.chunk.js.map