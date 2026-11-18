import{r as a,R as i}from"./index-C5e9SFkp.js";import{Q as Se}from"./QuickScenes-Bhi4VaeD.js";import{R as be}from"./RoomCard-C7VYSMA2.js";import{H as Ae}from"./HomeRooms-BHgkchtp.js";import{H as he}from"./HomeAccessCards-DuFiZDqg.js";import{C as Oe,H as Ce,S as fe,A as ve,a as Te,b as Ee,D as He,O as Pe,c as ke,d as Re}from"./HuePickerActions-B8_68Wu9.js";import{r as H,l as Be}from"./mockRooms-ABoDo6kd.js";import{L as je}from"./lightbulb-B8hy_FmS.js";import{B as Le,V as Ve}from"./volume-2-XGKdIePi.js";import"./createLucideIcon-BojQmLD8.js";import"./sun-wVtsRykT.js";import"./lock-keyhole-TEazGZ6C.js";import"./AudioZoneControl-n5rJSqeD.js";const Je={title:"V18 / Componentes adicionales",parameters:{layout:"fullscreen"}},P=[{id:"principal-techo-1",name:"Techo 1",room:"principal",cap:"cct",on:!0},{id:"principal-ambiente-1",name:"Ambiente 1",room:"principal",cap:"rgb",on:!1}],d={render:()=>{const[n,e]=a.useState("cine");return i.createElement(Se,{activeScene:n,onRunScene:e})}},m={render:()=>{const[n,e]=a.useState(!0),[o,r]=a.useState(!1);return i.createElement("div",{style:{width:190}},i.createElement(be,{id:"principal",name:"Principal",lightsOn:n,audioOn:o,onOpen:()=>{},onToggleLights:()=>e(s=>!s),onToggleAudio:()=>r(s=>!s)}))}},p={render:()=>{const[n,e]=a.useState({principal:!0,sala:!0}),[o,r]=a.useState({});return i.createElement(Ae,{rooms:H,lights:n,isAudioOn:s=>!!o[s],onOpenRoom:()=>{},onToggleLights:s=>e(c=>({...c,[s]:!c[s]})),onToggleAudio:s=>r(c=>({...c,[s]:!c[s]}))})}},g={render:()=>{const[n,e]=a.useState(!0);return i.createElement(he,{locked:n,robot:"En base",onOpenLock:()=>e(o=>!o),onOpenRobot:()=>{}})}},S={render:()=>i.createElement(Oe,{onOpenAll:()=>{},onCloseAll:()=>{}})},b={render:()=>{const[n,e]=a.useState({principal:40,oficina:70,sala:10});return i.createElement(Ee,{curtains:n,rooms:H,onChange:(o,r)=>e(s=>({...s,[o]:r})),onOpenAll:()=>e(o=>Object.fromEntries(Object.keys(o).map(r=>[r,100]))),onCloseAll:()=>e(o=>Object.fromEntries(Object.keys(o).map(r=>[r,0])))})}},A={render:()=>{const[n,e]=a.useState(!0);return i.createElement(ke,{enabled:n,source:"Apple TV",onToggle:()=>e(o=>!o)})}},h={render:()=>{const[n,e]=a.useState(!0),[o,r]=a.useState({sala:!0,cocina:!1,balcon:!1}),[s,c]=a.useState({sala:55,cocina:30,balcon:25});return i.createElement(ve,{avr:n,source:"Apple TV",sound:o,volumes:s,onToggleAvr:()=>e(t=>!t),onToggleZone:t=>r(l=>({...l,[t]:!l[t]})),onVolumeChange:(t,l)=>c(u=>({...u,[t]:l}))})}},O={render:()=>i.createElement(Te,{roomId:"principal",roomName:"Principal",groupName:"Ambiente",onClose:()=>{}})},C={render:()=>{const[n,e]=a.useState(P),[o,r]=a.useState([P[0].id]);return i.createElement(Re,{variant:"list",bulbs:n,selectedIds:o,onToggleSelection:s=>r(c=>c.includes(s)?c.filter(t=>t!==s):[...c,s]),onToggleBulb:s=>e(c=>c.map(t=>t.id===s?{...t,on:!t.on}:t))})}},f={render:()=>{const[n,e]=a.useState(!0),[o,r]=a.useState(!0);return i.createElement(Ce,{hasSelection:n,onSelectAll:()=>e(!0),onClearSelection:()=>e(!1),onTurnOffSelected:()=>r(!1),onTurnOnSelected:()=>r(!0)})}},v={render:()=>i.createElement(fe,{onChangePhoto:()=>{},onResetPhoto:()=>{},onNavigate:()=>{},onOpenAlerts:()=>{},onToggleFault:()=>{}})},T={render:()=>i.createElement(Pe,{rooms:H,groupCounts:Object.fromEntries(Object.entries(Be).map(([n,e])=>[n,e.length])),onOpenRoom:()=>{}})},E={render:()=>{const[n,e]=a.useState("todos"),[o,r]=a.useState(""),[s,c]=a.useState(Object.fromEntries(P.map(t=>[t.id,t])));return i.createElement(He,{categories:[["Iluminación",2,je],["Cortinas",3,Le],["Audio",3,Ve]],filter:n,search:o,bulbs:s,rooms:H,fault:!1,onFilterChange:e,onSearchChange:r,onToggleBulb:(t,l)=>c(u=>({...u,[t]:{...u[t],on:l}}))})}};var k,R,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [scene, setScene] = useState('cine');
    return <QuickScenes activeScene={scene} onRunScene={setScene} />;
  }
}`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var j,L,V;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [lights, setLights] = useState(true),
      [audio, setAudio] = useState(false);
    return <div style={{
      width: 190
    }}><RoomCard id="principal" name="Principal" lightsOn={lights} audioOn={audio} onOpen={() => {}} onToggleLights={() => setLights(v => !v)} onToggleAudio={() => setAudio(v => !v)} /></div>;
  }
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var x,I,y;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [lights, setLights] = useState({
        principal: true,
        sala: true
      }),
      [audio, setAudio] = useState({});
    return <HomeRooms rooms={rooms} lights={lights} isAudioOn={id => !!audio[id]} onOpenRoom={() => {}} onToggleLights={id => setLights(s => ({
      ...s,
      [id]: !s[id]
    }))} onToggleAudio={id => setAudio(s => ({
      ...s,
      [id]: !s[id]
    }))} />;
  }
}`,...(y=(I=p.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var D,F,N;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [locked, setLocked] = useState(true);
    return <HomeAccessCards locked={locked} robot="En base" onOpenLock={() => setLocked(v => !v)} onOpenRobot={() => {}} />;
  }
}`,...(N=(F=g.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var z,G,Z;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <CurtainGlobalActions onOpenAll={() => {}} onCloseAll={() => {}} />
}`,...(Z=(G=S.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var Q,_,w;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [curtains, setCurtains] = useState({
      principal: 40,
      oficina: 70,
      sala: 10
    });
    return <CurtainsPage curtains={curtains} rooms={rooms} onChange={(id, value) => setCurtains(x => ({
      ...x,
      [id]: value
    }))} onOpenAll={() => setCurtains(x => Object.fromEntries(Object.keys(x).map(k => [k, 100])))} onCloseAll={() => setCurtains(x => Object.fromEntries(Object.keys(x).map(k => [k, 0])))} />;
  }
}`,...(w=(_=b.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var q,J,K;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [enabled, setEnabled] = useState(true);
    return <AvrControl enabled={enabled} source="Apple TV" onToggle={() => setEnabled(v => !v)} />;
  }
}`,...(K=(J=A.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,U,W;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [avr, setAvr] = useState(true),
      [sound, setSound] = useState({
        sala: true,
        cocina: false,
        balcon: false
      }),
      [volumes, setVolumes] = useState({
        sala: 55,
        cocina: 30,
        balcon: 25
      });
    return <AudioPage avr={avr} source="Apple TV" sound={sound} volumes={volumes} onToggleAvr={() => setAvr(v => !v)} onToggleZone={id => setSound(s => ({
      ...s,
      [id]: !s[id]
    }))} onVolumeChange={(id, v) => setVolumes(s => ({
      ...s,
      [id]: v
    }))} />;
  }
}`,...(W=(U=h.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,$;O.parameters={...O.parameters,docs:{...(X=O.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <HuePickerHeader roomId="principal" roomName="Principal" groupName="Ambiente" onClose={() => {}} />
}`,...($=(Y=O.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,se,ne;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [bulbs, setBulbs] = useState(demoBulbs),
      [selected, setSelected] = useState([demoBulbs[0].id]);
    return <HueBulbSelection variant="list" bulbs={bulbs} selectedIds={selected} onToggleSelection={id => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id])} onToggleBulb={id => setBulbs(s => s.map(b => b.id === id ? {
      ...b,
      on: !b.on
    } : b))} />;
  }
}`,...(ne=(se=C.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,te,re;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(true),
      [on, setOn] = useState(true);
    return <HuePickerActions hasSelection={selected} onSelectAll={() => setSelected(true)} onClearSelection={() => setSelected(false)} onTurnOffSelected={() => setOn(false)} onTurnOnSelected={() => setOn(true)} />;
  }
}`,...(re=(te=f.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ce,ie;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <SettingsPage onChangePhoto={() => {}} onResetPhoto={() => {}} onNavigate={() => {}} onOpenAlerts={() => {}} onToggleFault={() => {}} />
}`,...(ie=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,ue,de;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <OrganizationPage rooms={rooms} groupCounts={Object.fromEntries(Object.entries(lightingGroups).map(([id, groups]) => [id, groups.length]))} onOpenRoom={() => {}} />
}`,...(de=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,pe,ge;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [filter, setFilter] = useState('todos'),
      [search, setSearch] = useState(''),
      [bulbs, setBulbs] = useState(Object.fromEntries(demoBulbs.map(b => [b.id, b])));
    return <DevicesPage categories={[['Iluminación', 2, Lightbulb], ['Cortinas', 3, Blinds], ['Audio', 3, Volume2]]} filter={filter} search={search} bulbs={bulbs} rooms={rooms} fault={false} onFilterChange={setFilter} onSearchChange={setSearch} onToggleBulb={(id, on) => setBulbs(s => ({
      ...s,
      [id]: {
        ...s[id],
        on
      }
    }))} />;
  }
}`,...(ge=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Ke=["EscenasRapidas","TarjetaHabitacion","CuadriculaHabitaciones","AccesosRapidos","AccionesCortinas","CortinasPorHabitacion","ReceptorDenon","AudioPorZonas","CabeceraHue","SeleccionBombillosHue","AccionesHue","Ajustes","Organizacion","InventarioDispositivos"];export{g as AccesosRapidos,S as AccionesCortinas,f as AccionesHue,v as Ajustes,h as AudioPorZonas,O as CabeceraHue,b as CortinasPorHabitacion,p as CuadriculaHabitaciones,d as EscenasRapidas,E as InventarioDispositivos,T as Organizacion,A as ReceptorDenon,C as SeleccionBombillosHue,m as TarjetaHabitacion,Ke as __namedExportsOrder,Je as default};
