import{R as e,r as i}from"./index-C5e9SFkp.js";import{c as o}from"./createLucideIcon-BojQmLD8.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=o("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=o("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=o("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);function d({locked:a,robot:r,onOpenLock:n,onOpenRobot:l}){return e.createElement("div",{className:"access-grid"},e.createElement("button",{className:"access-card",onClick:n},e.createElement(g,{className:"access-symbol",size:28}),e.createElement("span",{className:"access-text"},e.createElement("b",null,"Puerta principal"),e.createElement("small",null,e.createElement("i",{className:"dot "+(a?"":"amber")}),a?"Cerrada":"Abierta")),e.createElement("span",{className:"access-action"},a?e.createElement(v,{size:20}):e.createElement(x,{size:20}))),e.createElement("button",{className:"access-card",onClick:l},e.createElement("span",{className:"vacuum-icon"},"◉"),e.createElement("span",{className:"access-text"},e.createElement("b",null,"Roborock"),e.createElement("small",null,e.createElement("i",{className:"dot"}),r)),e.createElement("span",{className:"access-action"},e.createElement(f,{size:20,fill:"currentColor"}))))}d.__docgenInfo={description:"",methods:[],displayName:"HomeAccessCards"};const R={title:"Inicio/Accesos de casa",component:d,tags:["autodocs"],args:{locked:!0,robot:"En la base",onOpenLock:()=>{},onOpenRobot:()=>{}}},t={},s={args:{locked:!1}},c={render:()=>{const[a,r]=i.useState(!0),[n,l]=i.useState("En la base");return e.createElement(d,{locked:a,robot:n,onOpenLock:()=>r(m=>!m),onOpenRobot:()=>l(m=>m==="En la base"?"Limpiando":"En la base")})}};var p,u,E;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(E=(u=t.parameters)==null?void 0:u.docs)==null?void 0:E.source}}};var b,k,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    locked: false
  }
}`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var h,L,N;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [locked, setLocked] = useState(true);
    const [robot, setRobot] = useState('En la base');
    return <HomeAccessCards locked={locked} robot={robot} onOpenLock={() => setLocked(v => !v)} onOpenRobot={() => setRobot(v => v === 'En la base' ? 'Limpiando' : 'En la base')} />;
  }
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const A=["EstadoNormal","PuertaAbierta","Interactiva"];export{t as EstadoNormal,c as Interactiva,s as PuertaAbierta,A as __namedExportsOrder,R as default};
