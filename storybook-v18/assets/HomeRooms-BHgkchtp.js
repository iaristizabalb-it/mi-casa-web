import{R as o}from"./index-C5e9SFkp.js";import{R as l}from"./RoomCard-C7VYSMA2.js";import{c as p}from"./createLucideIcon-BojQmLD8.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=p("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);function i({rooms:a,lights:n,curtains:t,onOpenRoom:s,onToggleLights:r,onToggleCurtains:c}){return o.createElement("section",{className:"glass-section rooms-section"},o.createElement("h2",null,o.createElement(h,null)," Habitaciones"),o.createElement("div",{className:"room-grid"},a.map(([e,m])=>o.createElement(l,{key:e,id:e,name:m,lightsOn:!!n[e],hasCurtains:Object.prototype.hasOwnProperty.call(t,e),curtainsOpen:t[e]>0,onOpen:()=>s(e),onToggleLights:()=>r(e),onToggleCurtains:()=>c(e)}))))}i.__docgenInfo={description:"",methods:[],displayName:"HomeRooms"};export{h as B,i as H};
