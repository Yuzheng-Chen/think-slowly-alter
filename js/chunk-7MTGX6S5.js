import{c as h,d as y}from"./chunk-ZQNAPXCS.js";h();var b=(t,e=document)=>t[0]==="#"?e.getElementById(t.substring(1)):e.querySelector(t);b.all=(t,e=document)=>e.querySelectorAll(t);b.each=(t,e,n)=>{b.all(t,n).forEach(e)};h();var P=function(t,e){let n=t.parentNode;n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling)},it=function(t,e,n,l){let o=document.createElement(e);switch(Object.assign(o,n),l){case"after":P(t,o);break;case"replace":t.innerHTML="",t.appendChild(o);break;default:t.appendChild(o)}return o},rt=function(t,e){let n=document.createElement("div");Object.assign(n,e),t.parentNode.insertBefore(n,t),t.parentNode.removeChild(t),n.appendChild(t)},lt=function(t){return t.getBoundingClientRect().height},at=function(t,e){t.style.width=typeof e=="number"?e+"rem":e},ct=function(t){return t.getBoundingClientRect().width},S=function(t){return t.getBoundingClientRect().top},ut=function(t){return t.getBoundingClientRect().left},dt=function(t){return t.style.display},T=function(t,e){return t.style.display=e,t};function w(){Object.assign(HTMLElement.prototype,{find(t){return b.all(t,this)},_class(t,e,n){(e.indexOf(" ")?e.split(" "):[e]).forEach(o=>{t==="toggle"?this.classList.toggle(o,n):this.classList[t](o)})},addClass(t){return this._class("add",t),this},removeClass(t){return this._class("remove",t),this},toggleClass(t,e){return this._class("toggle",t,e),this},hasClass(t){return this.classList.contains(t)}})}h();var C=y;w();var gt=C.statics.indexOf("//")>0?C.statics:C.root,ht={x:0,y:0},W=0,q,D,yt=document.getElementsByTagName("body")[0],xt=document.documentElement,bt=document.getElementById("container"),Tt=document.getElementById("loading"),F=document.getElementById("nav"),Et=document.getElementById("header"),vt=F.querySelector(".toggle"),Ht=document.getElementById("quick"),Lt=document.getElementById("sidebar"),Mt=document.getElementById("brand"),$=document.getElementById("tool"),R,_,Y,Q,G=document.getElementById("search"),O,K,U,V=window.innerHeight,X=window.innerWidth,J=0,Z=window.location.href,z;function wt(t){O=t}function Ct(t){K=t}function Ot(t){U=t}function Bt(t){V=t}function It(t){X=t}function kt(t){W=t}function St(t){D=t}function Nt(t){J=t}function jt(t){Z=t}function At(t){z=t}function Pt(t){q=t}function Wt(t){R=t}function qt(t){_=t}function Dt(t){Y=t}function Ft(t){Q=t}function $t(t){$=t}function Rt(t){G=t}h();h();var I=class{constructor(){this.queue=[]}add(e){return this.queue.push(new L(e)),this}play(){this.queue.forEach(e=>e.play())}},N={targets:null,duration:1/0,easing:"linear",delay:0,begin:null,update:null,complete:null},B=()=>{let t={linear:()=>n=>n},e={Sine:()=>n=>1-Math.cos(n*Math.PI/2),Expo:()=>n=>n?Math.pow(2,10*n-10):0,Circ:()=>n=>1-Math.sqrt(1-n*n),Back:()=>n=>n*n*(3*n-2),Bounce:()=>n=>{let l,o=4;for(;n<((l=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((l*3-2)/22-n,2)}};return["Quad","Cubic","Quart","Quint"].forEach((n,l)=>{e[n]=()=>o=>Math.pow(o,l+2)}),Object.keys(e).forEach(n=>{let l=e[n];t["easeIn"+n]=l,t["easeOut"+n]=()=>o=>1-l()(1-o),t["easeInOut"+n]=()=>o=>o<.5?l()(o*2)/2:1-l()(o*-2+2)/2,t["easeOutIn"+n]=()=>o=>o<.5?(1-l()(1-o*2))/2:(l()(o*2-1)+1)/2}),t},tt=["translateX","translateY","translateZ"],j=(t,e)=>t instanceof HTMLElement?"transform"in t.style&&tt.includes(e)?"transform":e in t.style?"style":"attribute":"attribute",et=t=>{let e=Date.now()+t.delay,n=e+t.duration,l=!!t.targets,o=[],m=()=>{if(l){Array.isArray(t.targets)||(t.targets=[t.targets]);for(let s of t.targets){let a={};for(let r in t.dest){let i=t.dest[r],d=j(s,r);if(Array.isArray(i))if(i.length===2&&typeof i[0]!="object")d==="transform"?s.style.transform=`${r}(${typeof i[0]=="string"?i[0]:i[0]+"px"})`:d==="style"?s.style[r]=i[0]:s[r]=i[0],a[r]=i[0],t.dest[r]=i[1];else{let p=0;for(let c of i)c.startTimeStamp=p,p+=c.duration;a[r]=s[r]}else d==="transform"?a[r]=s.style.transform.match(new RegExp(`${r}\\((\\w+)\\)`))[1]:d==="style"?a[r]=s.style[r]:a[r]=s[r]}o.push(a)}}},g=(s,a,r,i,d,p=!1)=>{let c;if(typeof i=="string")if(c=i.endsWith("%")?"%":i.endsWith("px")?"px":null,c)i=parseFloat(i);else throw new TypeError("string value must ends with '%' or 'px'");let u=p?i:(i-a)*r+a;c&&(u+=c);let f=j(s,d);f==="transform"?s.style.transform=`${d}(${u}${c?"":"px"})`:f==="style"?s.style[d]=u:s[d]=u},E=(s,a,r=!1)=>{t.targets.forEach((i,d)=>{Object.keys(t.dest).forEach(p=>{let c=parseFloat(o[d][p]),u=t.dest[p];if(typeof u=="object")if(Array.isArray(u)){let f=0;for(;f<u.length&&a-e>=u[f].startTimeStamp;)f++;let{value:x,duration:H,easing:A=t.easing,startTimeStamp:k}=u[f-1];c=f<=1?c:u[f-2].value,a<=e+H+k?(s=B()[A]()((a-e-k)/H),g(i,c,s,x,p)):r&&g(i,c,s,x,p,r)}else{let{value:f,duration:x,easing:H=t.easing}=u;a<=e+x?(s=B()[H]()((a-e)/x),g(i,c,s,f,p)):r&&g(i,c,s,f,p,r)}else typeof u=="function"&&(u=u(i,d)),g(i,c,s,u,p,r)})})},v=()=>{let s=Date.now();if(s>n)E(1,s,!0),typeof t.complete=="function"&&t.complete(t.targets),t.isPlay=!1;else{if(s>=e){let a=B()[t.easing]()((s-e)/t.duration);l&&E(a,s),typeof t.update=="function"&&t.update(t.targets)}requestAnimationFrame(v)}};m(),typeof t.begin=="function"&&t.begin(t.targets),v()},L=class{constructor(e=N){e={...N,...e};let{targets:n,duration:l,easing:o,delay:m,begin:g,update:E,complete:v,...s}=e;this.targets=n,this.duration=l,this.easing=o,this.delay=m,this.begin=g,this.update=E,this.complete=v,this.dest=s||{},this.tl=null,this.isPlay=!1}timeline(){return this.tl||(this.tl=new I),this.tl}play(){this.isPlay||(this.isPlay=!0,et(this))}},M=t=>new L(t);M.random=(t,e)=>Math.floor(Math.random()*(e-t+1))+t;var Xt=(t,e,n,l)=>{let o,m="none";switch(e){case 0:o={opacity:[1,0]};break;case 1:o={opacity:[0,1]},m="block";break;case"bounceUpIn":o={begin(g){T(t,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},m="block";break;case"shrinkIn":o={begin(g){T(t,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},m="block";break;case"slideRightIn":o={begin(g){T(t,"block")},translateX:["100%","0%"],opacity:[0,1]},m="block";break;case"slideRightOut":o={translateX:["0%","100%"],opacity:[1,0]};break;default:o=e,m=e.display;break}M(Object.assign({targets:t,duration:200,easing:"linear",begin(){l&&l()},complete(){T(t,m),n&&n()}},o)).play()},Jt=(t,e,n)=>{M({targets:typeof e=="number"&&typeof t!="number"?t.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:e||(typeof t=="number"?t:t?S(t)+document.documentElement.scrollTop-O:0),complete(){n&&n()}}).play()};export{b as a,P as b,it as c,rt as d,lt as e,at as f,ct as g,ut as h,dt as i,T as j,w as k,C as l,gt as m,ht as n,W as o,q as p,D as q,yt as r,xt as s,bt as t,Tt as u,F as v,Et as w,vt as x,Ht as y,Lt as z,Mt as A,$ as B,R as C,_ as D,Y as E,Q as F,G,K as H,U as I,X as J,J as K,Z as L,z as M,wt as N,Ct as O,Ot as P,Bt as Q,It as R,kt as S,St as T,Nt as U,jt as V,At as W,Pt as X,Wt as Y,qt as Z,Dt as _,Ft as $,$t as aa,Rt as ba,Xt as ca,Jt as da};
/*! For license information please see chunk-7MTGX6S5.js.LEGAL.txt */
