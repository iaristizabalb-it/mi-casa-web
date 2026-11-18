import{r as o,R as r}from"./index-C5e9SFkp.js";import{B as pe}from"./BottomNavigation-Drdt3upk.js";import{H as be,R as Se,P as fe,A as Ce,L as ve,a as he,b as Pe,c as ke,d as Ee,e as Te}from"./PageHeading-D2GV0j7n.js";import{C as Ae,A as Be}from"./AudioZoneControl-n5rJSqeD.js";import"./house-DjhpEt4p.js";import"./createLucideIcon-BojQmLD8.js";import"./lightbulb-B8hy_FmS.js";import"./volume-2-XGKdIePi.js";import"./lock-keyhole-TEazGZ6C.js";import"./sun-wVtsRykT.js";import"./bell-ptGqBQJa.js";const l=()=>{},Ne={title:"V18 / Catálogo",parameters:{layout:"fullscreen"}},g={render:()=>{const[n,e]=o.useState("inicio");return r.createElement("div",{style:{minHeight:650,position:"relative"}},r.createElement(pe,{page:n,onNavigate:e}))}},m={render:()=>r.createElement(fe,{title:"Iluminación",onBack:l,onOpenPicker:l,onToggleGroup:l})},p={render:()=>r.createElement(Se,{roomId:"principal",title:"Habitación principal",onBack:l})},b={render:()=>{const[n,e]=o.useState(70);return r.createElement(ke,{level:n,isOn:n>0,onOpenGroups:l,onOpenPicker:l,onToggle:()=>e(t=>t?0:70),onBrightnessChange:e})}},S={render:()=>{const[n,e]=o.useState({a:{name:"Techo 1",on:!0,cap:"cct"},b:{name:"Techo 2",on:!1,cap:"cct"},c:{name:"Ambiente 1",on:!0,cap:"rgb"}}),[t,a]=o.useState("techo"),i=[{id:"techo",name:"Techo",count:2,capability:"cct",on:n.a.on||n.b.on,bulbIds:["a","b"]},{id:"ambiente",name:"Ambiente",count:1,capability:"rgb",on:n.c.on,bulbIds:["c"]}],d=s=>e(c=>({...c,[s]:{...c[s],on:!c[s].on}}));return r.createElement(Pe,{groups:i,bulbs:n,expanded:t,onToggleExpanded:s=>a(c=>c===s?null:s),onOpenPicker:l,onToggleGroup:(s,c)=>e(u=>Object.fromEntries(Object.entries(u).map(([A,B])=>{var x;return[A,(x=i.find(me=>me.id===s))!=null&&x.bulbIds.includes(A)?{...B,on:!c}:B]}))),onToggleBulb:d})}},f={render:()=>{const[n,e]=o.useState(!0),[t,a]=o.useState(70);return r.createElement(be,{visible:n,brightness:t,sliderValue:t,hasSelection:!0,onToggle:()=>e(i=>!i),onChange:a})}},C={render:()=>{const[n,e]=o.useState(!1),t=[{id:"a",name:"Bombillo 1",on:!0,color:"#f7a855"},{id:"b",name:"Bombillo 2",on:!0,color:"#5f8dff"}];return r.createElement(Te,{mode:"color",bulbs:t,selectedIds:["a","b"],markerPosition:a=>({left:a==="a"?"30%":"65%",top:"42%"}),dragging:n,onDragStart:()=>e(!0),onPick:l,onDragEnd:()=>e(!1)})}},v={render:()=>{const[n,e]=o.useState(50);return r.createElement(Ae,{value:n,onChange:e})}},h={render:()=>{const[n,e]=o.useState(!0),[t,a]=o.useState(45);return r.createElement(Be,{label:"Zona 1 · Sala",enabled:n,volume:t,onToggle:()=>e(i=>!i),onVolumeChange:a})}},P={render:()=>{const[n,e]=o.useState(!1),[t,a]=o.useState(!1),[i,d]=o.useState(!1),[s,c]=o.useState("Apple TV");return r.createElement(he,{projector:n,screen:t,avr:i,source:s,onCinemaScene:()=>{e(!0),a(!0),d(!0)},onToggleProjector:()=>e(u=>!u),onToggleScreen:()=>a(u=>!u),onToggleAvr:()=>d(u=>!u),onSourceChange:c})}},k={render:()=>{const[n,e]=o.useState(!0),[t,a]=o.useState(!1);return r.createElement(ve,{locked:n,confirming:t,onRequestUnlock:()=>a(!0),onCancelUnlock:()=>a(!1),onConfirmUnlock:()=>{e(!1),a(!1)},onLock:()=>e(!0)})}},E={render:()=>{const[n,e]=o.useState("En base");return r.createElement(Ee,{status:n,onChangeStatus:e})}},T={render:()=>{const[n,e]=o.useState(!0);return r.createElement(r.Fragment,null,r.createElement("button",{onClick:()=>e(!0)},"Abrir alertas"),r.createElement(Ce,{open:n,fault:!0,onClose:()=>e(!1),onOpenProblems:l}))}};var I,O,H;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState('inicio');
    return <div style={{
      minHeight: 650,
      position: 'relative'
    }}><BottomNavigation page={page} onNavigate={setPage} /></div>;
  }
}`,...(H=(O=g.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var L,V,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <PageHeading title="Iluminación" onBack={noop} onOpenPicker={noop} onToggleGroup={noop} />
}`,...(j=(V=m.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var D,R,y;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <RoomHeader roomId="principal" title="Habitación principal" onBack={noop} />
}`,...(y=(R=p.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var G,N,U;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [level, setLevel] = useState(70);
    return <RoomLightPanel level={level} isOn={level > 0} onOpenGroups={noop} onOpenPicker={noop} onToggle={() => setLevel(x => x ? 0 : 70)} onBrightnessChange={setLevel} />;
  }
}`,...(U=(N=b.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var Z,_,q;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [bulbs, setBulbs] = useState({
      a: {
        name: 'Techo 1',
        on: true,
        cap: 'cct'
      },
      b: {
        name: 'Techo 2',
        on: false,
        cap: 'cct'
      },
      c: {
        name: 'Ambiente 1',
        on: true,
        cap: 'rgb'
      }
    });
    const [expanded, setExpanded] = useState('techo');
    const groups = [{
      id: 'techo',
      name: 'Techo',
      count: 2,
      capability: 'cct',
      on: bulbs.a.on || bulbs.b.on,
      bulbIds: ['a', 'b']
    }, {
      id: 'ambiente',
      name: 'Ambiente',
      count: 1,
      capability: 'rgb',
      on: bulbs.c.on,
      bulbIds: ['c']
    }];
    const toggle = id => setBulbs(old => ({
      ...old,
      [id]: {
        ...old[id],
        on: !old[id].on
      }
    }));
    return <LightingGroups groups={groups} bulbs={bulbs} expanded={expanded} onToggleExpanded={id => setExpanded(x => x === id ? null : id)} onOpenPicker={noop} onToggleGroup={(id, on) => setBulbs(old => Object.fromEntries(Object.entries(old).map(([key, value]) => [key, groups.find(g => g.id === id)?.bulbIds.includes(key) ? {
      ...value,
      on: !on
    } : value])))} onToggleBulb={toggle} />;
  }
}`,...(q=(_=S.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var W,Y,F;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true),
      [brightness, setBrightness] = useState(70);
    return <HueBrightnessControl visible={visible} brightness={brightness} sliderValue={brightness} hasSelection onToggle={() => setVisible(v => !v)} onChange={setBrightness} />;
  }
}`,...(F=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var w,z,J;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [dragging, setDragging] = useState(false);
    const bulbs = [{
      id: 'a',
      name: 'Bombillo 1',
      on: true,
      color: '#f7a855'
    }, {
      id: 'b',
      name: 'Bombillo 2',
      on: true,
      color: '#5f8dff'
    }];
    return <HueColorWheel mode="color" bulbs={bulbs} selectedIds={['a', 'b']} markerPosition={id => ({
      left: id === 'a' ? '30%' : '65%',
      top: '42%'
    })} dragging={dragging} onDragStart={() => setDragging(true)} onPick={noop} onDragEnd={() => setDragging(false)} />;
  }
}`,...(J=(z=C.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var K,M,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(50);
    return <CurtainControl value={value} onChange={setValue} />;
  }
}`,...(Q=(M=v.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,$,ee;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const [enabled, setEnabled] = useState(true),
      [volume, setVolume] = useState(45);
    return <AudioZoneControl label="Zona 1 · Sala" enabled={enabled} volume={volume} onToggle={() => setEnabled(x => !x)} onVolumeChange={setVolume} />;
  }
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,oe,re;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [projector, setProjector] = useState(false),
      [screen, setScreen] = useState(false),
      [avr, setAvr] = useState(false),
      [source, setSource] = useState('Apple TV');
    return <ProjectorPage projector={projector} screen={screen} avr={avr} source={source} onCinemaScene={() => {
      setProjector(true);
      setScreen(true);
      setAvr(true);
    }} onToggleProjector={() => setProjector(x => !x)} onToggleScreen={() => setScreen(x => !x)} onToggleAvr={() => setAvr(x => !x)} onSourceChange={setSource} />;
  }
}`,...(re=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,ae,se;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [locked, setLocked] = useState(true),
      [confirming, setConfirming] = useState(false);
    return <LockPage locked={locked} confirming={confirming} onRequestUnlock={() => setConfirming(true)} onCancelUnlock={() => setConfirming(false)} onConfirmUnlock={() => {
      setLocked(false);
      setConfirming(false);
    }} onLock={() => setLocked(true)} />;
  }
}`,...(se=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,le,ie;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [status, setStatus] = useState('En base');
    return <RobotPage status={status} onChangeStatus={setStatus} />;
  }
}`,...(ie=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,de,ge;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <><button onClick={() => setOpen(true)}>Abrir alertas</button><AlertCenter open={open} fault onClose={() => setOpen(false)} onOpenProblems={noop} /></>;
  }
}`,...(ge=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};const Ue=["NavegacionInferior","CabeceraPagina","CabeceraHabitacion","IluminacionIndividual","GruposDeIluminacion","BrilloHue","RuedaDeColorHue","CortinaIndividual","ZonaDeAudio","CineYProyector","Cerradura","RobotAspirador","CentroDeAlertas"];export{f as BrilloHue,p as CabeceraHabitacion,m as CabeceraPagina,T as CentroDeAlertas,k as Cerradura,P as CineYProyector,v as CortinaIndividual,S as GruposDeIluminacion,b as IluminacionIndividual,g as NavegacionInferior,E as RobotAspirador,C as RuedaDeColorHue,h as ZonaDeAudio,Ue as __namedExportsOrder,Ne as default};
