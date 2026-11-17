import{R as o}from"./index-C5e9SFkp.js";import{R as l}from"./RoomCard-BaOkPQHk.js";import{c as i}from"./createLucideIcon-BojQmLD8.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=i("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);function d({rooms:a,lights:t,isAudioOn:n,onOpenRoom:s,onToggleLights:m,onToggleAudio:c}){return o.createElement("section",{className:"glass-section rooms-section"},o.createElement("h2",null,o.createElement(p,null)," Habitaciones"),o.createElement("div",{className:"room-grid"},a.map(([e,r])=>o.createElement(l,{key:e,id:e,name:r,lightsOn:!!t[e],audioOn:n(e),onOpen:()=>s(e),onToggleLights:()=>m(e),onToggleAudio:()=>c(e)}))))}d.__docgenInfo={description:"",methods:[],displayName:"HomeRooms"};export{p as B,d as H};
