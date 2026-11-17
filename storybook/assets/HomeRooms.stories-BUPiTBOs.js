import{R as n,r as l}from"./index-C5e9SFkp.js";import{R as h}from"./RoomCard-BaOkPQHk.js";import{c as v}from"./createLucideIcon-BojQmLD8.js";import"./volume-2-Cu9829pl.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=v("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);function m({rooms:s,lights:i,isAudioOn:r,onOpenRoom:c,onToggleLights:e,onToggleAudio:o}){return n.createElement("section",{className:"glass-section rooms-section"},n.createElement("h2",null,n.createElement(R,null)," Habitaciones"),n.createElement("div",{className:"room-grid"},s.map(([t,g])=>n.createElement(h,{key:t,id:t,name:g,lightsOn:!!i[t],audioOn:r(t),onOpen:()=>c(t),onToggleLights:()=>e(t),onToggleAudio:()=>o(t)}))))}m.__docgenInfo={description:"",methods:[],displayName:"HomeRooms"};const f=[["principal","Principal"],["oficina","Oficina"],["invitados","Invitados"],["cocina","Cocina"],["sala","Sala"],["balcon","Balcón"]],L={title:"Inicio/Habitaciones",component:m,tags:["autodocs"]},a={render:()=>{const[s,i]=l.useState({principal:!0}),[r,c]=l.useState({});return n.createElement(m,{rooms:f,lights:s,isAudioOn:e=>!!r[e],onOpenRoom:()=>{},onToggleLights:e=>i(o=>({...o,[e]:!o[e]})),onToggleAudio:e=>c(o=>({...o,[e]:!o[e]}))})}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [lights, setLights] = useState({
      principal: true
    });
    const [audio, setAudio] = useState({});
    return <HomeRooms rooms={rooms} lights={lights} isAudioOn={id => !!audio[id]} onOpenRoom={() => {}} onToggleLights={id => setLights(prev => ({
      ...prev,
      [id]: !prev[id]
    }))} onToggleAudio={id => setAudio(prev => ({
      ...prev,
      [id]: !prev[id]
    }))} />;
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const b=["Interactiva"];export{a as Interactiva,b as __namedExportsOrder,L as default};
