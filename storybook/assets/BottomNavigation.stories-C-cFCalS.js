import{R as e,r as N}from"./index-C5e9SFkp.js";import{H as M}from"./house-DjhpEt4p.js";import{L as B,V as E}from"./volume-2-Cu9829pl.js";import{c as k}from"./createLucideIcon-BojQmLD8.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=k("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=k("Projector",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]),L=[[M,"Inicio","inicio"],[B,"Luces","luces"],[I,"Cortinas","cortinas"],[E,"Audio","audio"],[H,"Proyector","proyector"]];function n({page:r,onNavigate:s}){return e.createElement("nav",{className:"bottom-nav"},L.map(([v,f,c])=>e.createElement("button",{key:c,className:(r===c?"selected ":"")+"nav-item",onClick:()=>s(c)},e.createElement(v,{size:24,strokeWidth:1.8}),e.createElement("span",null,f))))}n.__docgenInfo={description:"",methods:[],displayName:"BottomNavigation"};const _={title:"Navegación/Barra inferior",component:n,tags:["autodocs"],args:{page:"inicio",onNavigate:()=>{}},parameters:{layout:"fullscreen"}},a={},t={args:{page:"luces"}},o={render:()=>{const[r,s]=N.useState("inicio");return e.createElement(n,{page:r,onNavigate:s})}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    page: 'luces'
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var l,y,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState('inicio');
    return <BottomNavigation page={page} onNavigate={setPage} />;
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const b=["Inicio","Luces","Interactiva"];export{a as Inicio,o as Interactiva,t as Luces,b as __namedExportsOrder,_ as default};
