import{c}from"./createLucideIcon-BojQmLD8.js";import{R as e}from"./index-C5e9SFkp.js";import{B as i,V as s}from"./volume-2-XGKdIePi.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=c("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=c("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=c("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);function m({value:o,onChange:n,title:r="Cortinas",onOpen:a}){return e.createElement("section",{className:"detail-card",onClick:a,role:a?"button":void 0,tabIndex:a?0:void 0,onKeyDown:t=>{a&&t.target===t.currentTarget&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),a())}},e.createElement("div",{className:"control-row"},e.createElement("b",null,e.createElement(i,null)," ",r),e.createElement("span",null,o,"%")),e.createElement("input",{onClick:t=>t.stopPropagation(),type:"range",min:"0",max:"100",step:"5",value:o,onChange:t=>n(+t.target.value)}),e.createElement("div",{className:"button-row",onClick:t=>t.stopPropagation()},[["Cerrar",0],["50%",50],["Abrir",100]].map(([t,l])=>e.createElement("button",{key:t,onClick:()=>n(l)},t))))}m.__docgenInfo={description:"",methods:[],displayName:"CurtainControl",props:{title:{defaultValue:{value:"'Cortinas'",computed:!1},required:!1}}};function d({label:o,enabled:n,volume:r,onToggle:a,onVolumeChange:t}){return e.createElement("section",{className:"detail-card"},e.createElement("div",{className:"control-row"},e.createElement("b",null,e.createElement(s,null)," ",o||"Audio"),e.createElement("button",{className:"small-toggle "+(n?"on":""),onClick:a},n?"ON":"OFF")),e.createElement("div",{className:"sub-row"},e.createElement("span",null,"Volumen"),e.createElement("span",null,r,"%")),e.createElement("input",{type:"range",min:"0",max:"100",step:"5",value:r,onChange:l=>t(+l.target.value)}))}d.__docgenInfo={description:"",methods:[],displayName:"AudioZoneControl"};export{d as A,m as C,h as R,f as a,E as b};
