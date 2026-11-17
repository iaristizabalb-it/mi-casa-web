import{R as e,r as M}from"./index-C5e9SFkp.js";import{c as n}from"./createLucideIcon-BojQmLD8.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=n("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=n("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=n("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=n("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=n("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),C=[{id:"cine",name:e.createElement(e.Fragment,null,"Modo",e.createElement("br",null),"cine"),icon:v},{id:"noche",name:e.createElement(e.Fragment,null,"Buenas",e.createElement("br",null),"noches"),icon:x},{id:"todo",name:e.createElement(e.Fragment,null,"Encender",e.createElement("br",null),"todo"),icon:f},{id:"salir",name:e.createElement(e.Fragment,null,"Salir",e.createElement("br",null),"de casa"),icon:b}];function l({activeScene:r,onRunScene:o}){return e.createElement("section",{className:"glass-section scenes"},e.createElement("h2",null,e.createElement(z,null)," Escenas rápidas"),e.createElement("div",{className:"scene-grid"},C.map(({id:t,name:E,icon:g})=>e.createElement("button",{key:t,onClick:()=>o(t),className:"scene "+t+(r===t?" chosen":"")},e.createElement(g,{size:28,strokeWidth:1.8}),e.createElement("span",null,E)))))}l.__docgenInfo={description:"",methods:[],displayName:"QuickScenes"};const Z={title:"Inicio/Escenas rápidas",component:l,tags:["autodocs"],args:{activeScene:null,onRunScene:()=>{}}},a={},c={args:{activeScene:"cine"}},s={render:()=>{const[r,o]=M.useState(null);return e.createElement(l,{activeScene:r,onRunScene:o})}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,p,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    activeScene: 'cine'
  }
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var k,S,y;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [scene, setScene] = useState(null);
    return <QuickScenes activeScene={scene} onRunScene={setScene} />;
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const _=["SinSeleccion","ModoCine","Interactiva"];export{s as Interactiva,c as ModoCine,a as SinSeleccion,_ as __namedExportsOrder,Z as default};
