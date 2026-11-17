import{r as n,R as r}from"./index-C5e9SFkp.js";import{R as O}from"./RoomCard-Bh4iIHD3.js";import"./lightbulb-B8hy_FmS.js";import"./createLucideIcon-BojQmLD8.js";const x={title:"Inicio/Tarjeta de habitación",component:O,tags:["autodocs"],args:{id:"principal",name:"Habitación principal",lightsOn:!1,audioOn:!1,onOpen:()=>{},onToggleLights:()=>{},onToggleAudio:()=>{}},decorators:[s=>r.createElement("div",{style:{maxWidth:190}},r.createElement(s,null))]},e={},a={args:{lightsOn:!0,audioOn:!0}},t={render:s=>{const[f,A]=n.useState(!1),[v,E]=n.useState(!1);return r.createElement(O,{...s,lightsOn:f,audioOn:v,onToggleLights:()=>A(o=>!o),onToggleAudio:()=>E(o=>!o)})}};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,u,l;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    lightsOn: true,
    audioOn: true
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [lights, setLights] = useState(false);
    const [audio, setAudio] = useState(false);
    return <RoomCard {...args} lightsOn={lights} audioOn={audio} onToggleLights={() => setLights(v => !v)} onToggleAudio={() => setAudio(v => !v)} />;
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const C=["Apagada","Encendida","Interactiva"];export{e as Apagada,a as Encendida,t as Interactiva,C as __namedExportsOrder,x as default};
