import{c as o}from"./createLucideIcon-BojQmLD8.js";import{R as e}from"./index-C5e9SFkp.js";import{B as m}from"./blinds-DQusz9Vt.js";import{V as s}from"./volume-2-Cu9829pl.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=o("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=o("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=o("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);function i({value:n,onChange:a}){return e.createElement("section",{className:"detail-card"},e.createElement("div",{className:"control-row"},e.createElement("b",null,e.createElement(m,null)," Cortinas"),e.createElement("span",null,n,"%")),e.createElement("input",{type:"range",min:"0",max:"100",step:"5",value:n,onChange:t=>a(+t.target.value)}),e.createElement("div",{className:"button-row"},[["Cerrar",0],["50%",50],["Abrir",100]].map(([t,r])=>e.createElement("button",{key:t,onClick:()=>a(r)},t))))}i.__docgenInfo={description:"",methods:[],displayName:"CurtainControl"};function d({label:n,enabled:a,volume:t,onToggle:r,onVolumeChange:l}){return e.createElement("section",{className:"detail-card"},e.createElement("div",{className:"control-row"},e.createElement("b",null,e.createElement(s,null)," ",n||"Audio"),e.createElement("button",{className:"small-toggle "+(a?"on":""),onClick:r},a?"ON":"OFF")),e.createElement("div",{className:"sub-row"},e.createElement("span",null,"Volumen"),e.createElement("span",null,t,"%")),e.createElement("input",{type:"range",min:"0",max:"100",step:"5",value:t,onChange:c=>l(+c.target.value)}))}d.__docgenInfo={description:"",methods:[],displayName:"AudioZoneControl"};export{d as A,i as C,y as R,f as a,E as b};
