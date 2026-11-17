import{r as i,R as u}from"./index-C5e9SFkp.js";import{H as a}from"./HomeRooms-CJv-Etms.js";import"./RoomCard-CW3kpk4i.js";import"./lightbulb-B8hy_FmS.js";import"./createLucideIcon-BojQmLD8.js";const l=[["principal","Principal"],["oficina","Oficina"],["invitados","Invitados"],["cocina","Cocina"],["sala","Sala"],["balcon","Balcón"]],O={title:"Inicio/Habitaciones",component:a,tags:["autodocs"]},e={render:()=>{const[c,d]=i.useState({principal:!0}),[p,m]=i.useState({});return u.createElement(a,{rooms:l,lights:c,isAudioOn:o=>!!p[o],onOpenRoom:()=>{},onToggleLights:o=>d(t=>({...t,[o]:!t[o]})),onToggleAudio:o=>m(t=>({...t,[o]:!t[o]}))})}};var s,n,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const S=["Interactiva"];export{e as Interactiva,S as __namedExportsOrder,O as default};
