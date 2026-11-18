import{r as s,R as e}from"./index-C5e9SFkp.js";import{L as w,a as B,b,R as y}from"./RoomLightPanel-CxRoP2oY.js";import"./createLucideIcon-BojQmLD8.js";import"./lightbulb-B8hy_FmS.js";const R={title:"Iluminacion/Controles reutilizables",tags:["autodocs"]},i={render:()=>e.createElement("div",{className:"room-light-panel hue-room-light",style:{padding:18,width:160}},e.createElement(B,{onOpen:()=>{}}))},l={render:()=>{const[t,n]=s.useState(!0);return e.createElement("div",{className:"room-light-panel hue-room-light",style:{padding:18,width:160}},e.createElement(b,{isOn:t,onToggle:()=>n(r=>!r)}))}},d={render:()=>{const[t,n]=s.useState(60),[r,o]=s.useState(!1);return e.createElement("div",{className:"room-light-panel hue-room-light"+(r?" hue-room-light-editing":""),style:{padding:18,width:320,"--hue-brightness":t+"%","--hue-track":"linear-gradient(90deg,#ffe2a0,#8e9cff,#fa9ed5)"}},e.createElement(w,{level:t,onBrightnessChange:n,onEditingChange:o}),e.createElement("p",{style:{color:"#fff",fontSize:12}},t,"%"))}},c={render:()=>{const[t,n]=s.useState(60),[r,o]=s.useState(!0);return e.createElement("div",{style:{width:360}},e.createElement(y,{level:t,isOn:r,colors:[{color:"#ffe2a0",brightness:100},{color:"#8e9cff",brightness:80},{color:"#fa9ed5",brightness:65}],onOpenGroups:()=>{},onOpenPicker:()=>{},onToggle:()=>o(a=>!a),onBrightnessChange:a=>{n(a),a>0&&o(!0)}}))}};var g,h,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="room-light-panel hue-room-light" style={{
    padding: 18,
    width: 160
  }}>
    <LightColorButton onOpen={() => {}} />
  </div>
}`,...(m=(h=i.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var u,p,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [isOn, setOn] = useState(true);
    return <div className="room-light-panel hue-room-light" style={{
      padding: 18,
      width: 160
    }}>
      <LightPowerSwitch isOn={isOn} onToggle={() => setOn(v => !v)} />
    </div>;
  }
}`,...(f=(p=l.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,O,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(O=d.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var E,L,C;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(L=c.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};const k=["BotonColores","Interruptor","BarraIntensidad","TarjetaCompleta"];export{d as BarraIntensidad,i as BotonColores,l as Interruptor,c as TarjetaCompleta,k as __namedExportsOrder,R as default};
