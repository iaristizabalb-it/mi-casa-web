import{r as g,R as v}from"./index-C5e9SFkp.js";import{Q as p}from"./QuickScenes-Bhi4VaeD.js";import"./createLucideIcon-BojQmLD8.js";import"./sun-wVtsRykT.js";const k={title:"Inicio/Escenas rápidas",component:p,tags:["autodocs"],args:{activeScene:null,onRunScene:()=>{}}},e={},c={args:{activeScene:"cine"}},n={render:()=>{const[d,l]=g.useState(null);return v.createElement(p,{activeScene:d,onRunScene:l})}};var r,s,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var a,o,i;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    activeScene: 'cine'
  }
}`,...(i=(o=c.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var u,S,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [scene, setScene] = useState(null);
    return <QuickScenes activeScene={scene} onRunScene={setScene} />;
  }
}`,...(m=(S=n.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};const x=["SinSeleccion","ModoCine","Interactiva"];export{n as Interactiva,c as ModoCine,e as SinSeleccion,x as __namedExportsOrder,k as default};
