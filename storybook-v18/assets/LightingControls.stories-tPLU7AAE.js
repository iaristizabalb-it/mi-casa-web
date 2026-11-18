import{r as s,R as e}from"./index-C5e9SFkp.js";import{L as C,a as N,b as B,R as b}from"./RoomLightPanel-fMS_v7d2.js";import"./createLucideIcon-BojQmLD8.js";import"./lightbulb-B8hy_FmS.js";const R={title:"Iluminacion/Controles reutilizables",tags:["autodocs"]},i={render:()=>e.createElement("div",{className:"room-light-panel hue-room-light",style:{padding:18,width:160}},e.createElement("div",{className:"control-row"},e.createElement("div",{className:"light-top-actions group-heading-actions"},e.createElement(N,{onOpen:()=>{}}))))},l={render:()=>{const[t,n]=s.useState(!0);return e.createElement("div",{className:"room-light-panel hue-room-light",style:{padding:18,width:160}},e.createElement("div",{className:"control-row"},e.createElement("div",{className:"light-top-actions group-heading-actions"},e.createElement(B,{isOn:t,onToggle:()=>n(r=>!r)}))))}},c={render:()=>{const[t,n]=s.useState(60),[r,o]=s.useState(!1);return e.createElement("div",{className:"room-light-panel hue-room-light"+(r?" hue-room-light-editing":""),style:{padding:18,width:320,"--hue-brightness":t+"%","--hue-track":"linear-gradient(90deg,#ffe2a0,#8e9cff,#fa9ed5)"}},e.createElement(C,{level:t,onBrightnessChange:n,onEditingChange:o}),e.createElement("p",{style:{color:"#fff",fontSize:12}},t,"%"))}},d={render:()=>{const[t,n]=s.useState(60),[r,o]=s.useState(!0);return e.createElement("div",{style:{width:360}},e.createElement(b,{level:t,isOn:r,colors:[{color:"#ffe2a0",brightness:100},{color:"#8e9cff",brightness:80},{color:"#fa9ed5",brightness:65}],onOpenGroups:()=>{},onOpenPicker:()=>{},onToggle:()=>o(a=>!a),onBrightnessChange:a=>{n(a),a>0&&o(!0)}}))}};var g,h,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="room-light-panel hue-room-light" style={{
    padding: 18,
    width: 160
  }}>
    <div className="control-row"><div className="light-top-actions group-heading-actions"><LightColorButton onOpen={() => {}} /></div></div>
  </div>
}`,...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var u,p,v;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [isOn, setOn] = useState(true);
    return <div className="room-light-panel hue-room-light" style={{
      padding: 18,
      width: 160
    }}>
      <div className="control-row"><div className="light-top-actions group-heading-actions"><LightPowerSwitch isOn={isOn} onToggle={() => setOn(v => !v)} /></div></div>
    </div>;
  }
}`,...(v=(p=l.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var f,O,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [level, setLevel] = useState(60);
    const [editing, setEditing] = useState(false);
    return <div className={'room-light-panel hue-room-light' + (editing ? ' hue-room-light-editing' : '')} style={{
      padding: 18,
      width: 320,
      '--hue-brightness': level + '%',
      '--hue-track': 'linear-gradient(90deg,#ffe2a0,#8e9cff,#fa9ed5)'
    }}>
      <LightBrightnessSlider level={level} onBrightnessChange={setLevel} onEditingChange={setEditing} />
      <p style={{
        color: '#fff',
        fontSize: 12
      }}>{level}%</p>
    </div>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var S,w,L;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [level, setLevel] = useState(60);
    const [isOn, setOn] = useState(true);
    return <div style={{
      width: 360
    }}>
      <RoomLightPanel level={level} isOn={isOn} colors={[{
        color: '#ffe2a0',
        brightness: 100
      }, {
        color: '#8e9cff',
        brightness: 80
      }, {
        color: '#fa9ed5',
        brightness: 65
      }]} onOpenGroups={() => {}} onOpenPicker={() => {}} onToggle={() => setOn(v => !v)} onBrightnessChange={v => {
        setLevel(v);
        if (v > 0) setOn(true);
      }} />
    </div>;
  }
}`,...(L=(w=d.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const k=["BotonColores","Interruptor","BarraIntensidad","TarjetaCompleta"];export{c as BarraIntensidad,i as BotonColores,l as Interruptor,d as TarjetaCompleta,k as __namedExportsOrder,R as default};
