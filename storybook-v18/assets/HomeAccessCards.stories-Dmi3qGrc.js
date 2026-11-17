import{r as a,R as g}from"./index-C5e9SFkp.js";import{H as b}from"./HomeAccessCards-DuFiZDqg.js";import"./lock-keyhole-TEazGZ6C.js";import"./createLucideIcon-BojQmLD8.js";const f={title:"Inicio/Accesos de casa",component:b,tags:["autodocs"],args:{locked:!0,robot:"En la base",onOpenLock:()=>{},onOpenRobot:()=>{}}},e={},o={args:{locked:!1}},s={render:()=>{const[k,E]=a.useState(!0),[L,R]=a.useState("En la base");return g.createElement(b,{locked:k,robot:L,onOpenLock:()=>E(r=>!r),onOpenRobot:()=>R(r=>r==="En la base"?"Limpiando":"En la base")})}};var t,c,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    locked: false
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,i,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [locked, setLocked] = useState(true);
    const [robot, setRobot] = useState('En la base');
    return <HomeAccessCards locked={locked} robot={robot} onOpenLock={() => setLocked(v => !v)} onOpenRobot={() => setRobot(v => v === 'En la base' ? 'Limpiando' : 'En la base')} />;
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const H=["EstadoNormal","PuertaAbierta","Interactiva"];export{e as EstadoNormal,s as Interactiva,o as PuertaAbierta,H as __namedExportsOrder,f as default};
