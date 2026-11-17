import{R as e}from"./index-C5e9SFkp.js";import{c as a}from"./createLucideIcon-BojQmLD8.js";import{S as s}from"./sun-wVtsRykT.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=a("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=a("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=a("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=a("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),u=[{id:"cine",name:e.createElement(e.Fragment,null,"Modo",e.createElement("br",null),"cine"),icon:r},{id:"noche",name:e.createElement(e.Fragment,null,"Buenas",e.createElement("br",null),"noches"),icon:i},{id:"todo",name:e.createElement(e.Fragment,null,"Encender",e.createElement("br",null),"todo"),icon:s},{id:"salir",name:e.createElement(e.Fragment,null,"Salir",e.createElement("br",null),"de casa"),icon:m}];function p({activeScene:t,onRunScene:l}){return e.createElement("section",{className:"glass-section scenes"},e.createElement("h2",null,e.createElement(d,null)," Escenas rápidas"),e.createElement("div",{className:"scene-grid"},u.map(({id:n,name:c,icon:o})=>e.createElement("button",{key:n,onClick:()=>l(n),className:"scene "+n+(t===n?" chosen":"")},e.createElement(o,{size:28,strokeWidth:1.8}),e.createElement("span",null,c)))))}p.__docgenInfo={description:"",methods:[],displayName:"QuickScenes"};export{i as M,p as Q,d as Z};
