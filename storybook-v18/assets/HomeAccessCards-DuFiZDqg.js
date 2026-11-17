import{R as e}from"./index-C5e9SFkp.js";import{L as n}from"./lock-keyhole-TEazGZ6C.js";import{c}from"./createLucideIcon-BojQmLD8.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=c("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=c("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=c("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);function i({locked:a,robot:t,onOpenLock:s,onOpenRobot:l}){return e.createElement("div",{className:"access-grid"},e.createElement("button",{className:"access-card",onClick:s},e.createElement(n,{className:"access-symbol",size:28}),e.createElement("span",{className:"access-text"},e.createElement("b",null,"Puerta principal"),e.createElement("small",null,e.createElement("i",{className:"dot "+(a?"":"amber")}),a?"Cerrada":"Abierta")),e.createElement("span",{className:"access-action"},a?e.createElement(m,{size:20}):e.createElement(r,{size:20}))),e.createElement("button",{className:"access-card",onClick:l},e.createElement("span",{className:"vacuum-icon"},"◉"),e.createElement("span",{className:"access-text"},e.createElement("b",null,"Roborock"),e.createElement("small",null,e.createElement("i",{className:"dot"}),t)),e.createElement("span",{className:"access-action"},e.createElement(o,{size:20,fill:"currentColor"}))))}i.__docgenInfo={description:"",methods:[],displayName:"HomeAccessCards"};export{i as H};
