(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(e,r,t){},12:function(e,r,t){"use strict";t.r(r);var n=t(1),c=t.n(n),a=t(4),s=t.n(a),o=(t(9),t(2)),d=(t(10),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),i=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],u=t(0);function m(){var e=Object(n.useState)(!1),r=Object(o.a)(e,2),t=r[0],c=r[1],a=Object(n.useState)(!0),s=Object(o.a)(a,2),m=s[0],l=s[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),j=h[0],k=h[1],y=Object(n.useState)(0),b=Object(o.a)(y,2),f=b[0],g=b[1];Object(n.useEffect)((function(){return document.addEventListener("keydown",C),function(){document.removeEventListener("keydown",C)}}));var C=function(e){!0===t&&!0===m?d.forEach((function(r){e.keyCode===r.keyCode&&(new Audio(r.url).play(),k(r.id))})):!0===t&&!1===m&&i.forEach((function(r){e.keyCode===r.keyCode&&(new Audio(r.url).play(),k(r.id))}))},v=function(e){!0===t&&!0===m?d.forEach((function(r){e.target.value===r.keyTrigger&&(new Audio(r.url).play(),k(r.id))})):!0===t&&!1===m&&i.forEach((function(r){e.target.value===r.keyTrigger&&(new Audio(r.url).play(),k(r.id))})),console.log(e.target.value)};return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{id:"drum-machine",children:[Object(u.jsx)("div",{id:"display",children:j}),Object(u.jsxs)("div",{id:"btn-container",children:[Object(u.jsxs)("div",{className:"powerSwitch",children:[Object(u.jsx)("p",{children:"Power"}),Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",{type:"checkbox",value:t,onClick:function(){c(!1===t),k(!1===t?"Heater Kit":""),console.log(t)}}),Object(u.jsx)("span",{className:"slider round"})]})]}),Object(u.jsxs)("div",{className:"bankSwitch",children:[Object(u.jsx)("p",{children:"Banks"}),Object(u.jsxs)("label",{className:"switch",children:[Object(u.jsx)("input",{type:"checkbox",value:m,onClick:function(){l(!1===m),!1===m&&!0===t?k("Heater Kit"):!0===m&&!0===t?k("Smooth Piano Kit"):!1===t&&k(""),console.log(m)}}),Object(u.jsx)("span",{className:"slider round"})]})]})]}),Object(u.jsxs)("div",{id:"pad-container",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"drum-pad",value:"Q",onKeyPress:function(e){return C(e,"value")},onClick:function(e){return v(e)},children:"Q"}),Object(u.jsx)("button",{className:"drum-pad",value:"W",onKeyPress:function(e){return C(e,"value")},onClick:function(e){return v(e)},children:"W"}),Object(u.jsx)("button",{className:"drum-pad",value:"E",onKeyPress:function(e){return C(e,"value")},onClick:function(e){return v(e)},children:"E"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"drum-pad",value:"A",onKeyPress:function(e){return C(e,"value")},onClick:function(e){return v(e)},children:"A"}),Object(u.jsx)("button",{className:"drum-pad",value:"S",onKeyPress:function(e){return C(e,"value")},onClick:function(e){return v(e)},children:"S"}),Object(u.jsx)("button",{className:"drum-pad",value:"D",onKeyPress:function(e){return C(e,"value")},onClick:function(e){return v(e)},children:"D"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"drum-pad",value:"Z",onKeyPress:function(e){return C(e,"value")},onClick:function(e){return v(e)},children:"Z"}),Object(u.jsx)("button",{className:"drum-pad",value:"X",onKeyPress:function(e){return C(e,"value")},onClick:function(e){return v(e)},children:"X"}),Object(u.jsx)("button",{className:"drum-pad",value:"C",onKeyPress:function(e){return C(e,"value")},onClick:function(e){return v(e)},children:"C"})]})]}),Object(u.jsxs)("div",{id:"volume",children:[Object(u.jsx)("input",{type:"range",min:0,max:100,step:1,value:f,onChange:function(e){return g(e.target.valueAsNumber)}}),Object(u.jsx)("p",{children:f})]})]})})}var l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(r){var t=r.getCLS,n=r.getFID,c=r.getFCP,a=r.getLCP,s=r.getTTFB;t(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),l()},9:function(e,r,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.6e62a52b.chunk.js.map