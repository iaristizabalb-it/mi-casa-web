import{R as e}from"./index-C5e9SFkp.js";import{H as y}from"./HomeHeader-BxdKwvy9.js";import{Q as O}from"./QuickScenes-Cw6R9-4d.js";import{H as x}from"./HomeRooms-BHgkchtp.js";import{H as R}from"./HomeAccessCards-DuFiZDqg.js";import{C as c}from"./RoomCard-C7VYSMA2.js";import{r as a}from"./mockRooms-ABoDo6kd.js";/* empty css              *//* empty css                      */import"./house-DjhpEt4p.js";import"./createLucideIcon-BojQmLD8.js";import"./bell-ptGqBQJa.js";import"./sun-wVtsRykT.js";import"./lock-keyhole-TEazGZ6C.js";import"./lightbulb-B8hy_FmS.js";const G={title:"Inicio / Componentes",parameters:{layout:"centered",docs:{description:{component:"Componentes aprobados de Inicio V18. Estados demostrativos; no controlan dispositivos reales."}}},decorators:[S=>e.createElement("div",{className:"app-shell home-screen",style:{width:"min(390px,100vw)",minHeight:"auto",paddingBottom:16,overflow:"hidden"}},e.createElement("div",{className:"scroll-area",style:{height:"auto",overflow:"visible",display:"block",padding:"0 12px"}},e.createElement(S,null)))]},r={render:()=>e.createElement(y,{hasAlert:!0,onOpenAlerts:()=>{},onOpenSettings:()=>{}})},o={render:()=>e.createElement(O,{activeScene:"cine",onRunScene:()=>{}})},t={render:()=>e.createElement(x,{rooms:a,lights:{[a[0][0]]:!0},curtains:{[a[0][0]]:100},onOpenRoom:()=>{},onToggleLights:()=>{},onToggleCurtains:()=>{}})},n={render:()=>e.createElement(R,{locked:!0,robot:"En espera",onOpenLock:()=>{},onOpenRobot:()=>{}})},s={render:()=>e.createElement("div",{style:{display:"flex",gap:24,padding:24,alignItems:"center"}},e.createElement("div",{style:{textAlign:"center"}},e.createElement(c,{size:44,open:!0}),e.createElement("p",null,"Abierto")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(c,{size:44,open:!1}),e.createElement("p",null,"Cerrado")))};var i,m,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <HomeHeader hasAlert={true} onOpenAlerts={() => {}} onOpenSettings={() => {}} />
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <QuickScenes activeScene="cine" onRunScene={() => {}} />
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,E,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <HomeRooms rooms={rooms} lights={{
    [rooms[0][0]]: true
  }} curtains={{
    [rooms[0][0]]: 100
  }} onOpenRoom={() => {}} onToggleLights={() => {}} onToggleCurtains={() => {}} />
}`,...(v=(E=t.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var b,C,H;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <HomeAccessCards locked={true} robot="En espera" onOpenLock={() => {}} onOpenRobot={() => {}} />
}`,...(H=(C=n.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var f,A,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    padding: 24,
    alignItems: 'center'
  }}><div style={{
      textAlign: 'center'
    }}><Curtains size={44} open={true} /><p>Abierto</p></div><div style={{
      textAlign: 'center'
    }}><Curtains size={44} open={false} /><p>Cerrado</p></div></div>
}`,...(h=(A=s.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};const J=["Cabecera","Escenas","Habitaciones","Accesos","BlackoutEnrollables"];export{n as Accesos,s as BlackoutEnrollables,r as Cabecera,o as Escenas,t as Habitaciones,J as __namedExportsOrder,G as default};
