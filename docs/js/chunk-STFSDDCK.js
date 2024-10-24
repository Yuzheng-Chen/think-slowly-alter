import{a as w}from"./chunk-JU4SRBOT.js";var S=(e,o=document)=>e[0]==="#"?o.getElementById(e.substring(1)):o.querySelector(e);S.all=(e,o=document)=>o.querySelectorAll(e);S.each=(e,o,i)=>{S.all(e,i).forEach(o)};var se=function(e,o){let i=e.parentNode;i.lastChild===e?i.appendChild(o):i.insertBefore(o,e.nextSibling)},v=function(e,o,i,c){let s=document.createElement(o);switch(Object.assign(s,i),c){case"after":se(e,s);break;case"replace":e.innerHTML="",e.appendChild(s);break;default:e.appendChild(s)}return s},we=function(e,o){let i=document.createElement("div");Object.assign(i,o),e.parentNode.insertBefore(i,e),e.parentNode.removeChild(e),i.appendChild(e)},Le=function(e){return e.getBoundingClientRect().height},j=function(e,o){e.style.width=typeof o=="number"?o+"rem":o},_=function(e){return e.getBoundingClientRect().width},X=function(e){return e.getBoundingClientRect().top},D=function(e){return e.getBoundingClientRect().left},Ce=function(e){return e.style.display},N=function(e,o){return e.style.display=o,e};function $(){Object.assign(HTMLElement.prototype,{find(e){return S.all(e,this)},_class(e,o,i){(o.indexOf(" ")?o.split(" "):[o]).forEach(s=>{e==="toggle"?this.classList.toggle(s,i):this.classList[e](s)})},addClass(e){return this._class("add",e),this},removeClass(e){return this._class("remove",e),this},toggleClass(e,o){return this._class("toggle",e,o),this},hasClass(e){return this.classList.contains(e)}})}var L=w;$();var Oe=L.statics.indexOf("//")>0?L.statics:L.root,J={x:0,y:0},ie=0,k,ae,F=document.getElementsByTagName("body")[0],ke=document.documentElement,Ie=document.getElementById("container"),Ae=document.getElementById("loading"),le=document.getElementById("nav"),qe=document.getElementById("header"),Be=le.querySelector(".toggle"),Pe=document.getElementById("quick"),je=document.getElementById("sidebar"),_e=document.getElementById("brand"),ce=document.getElementById("tool"),de,ue,pe,me,De=document.getElementById("search"),W,fe,he,ge=window.innerHeight,ye=window.innerWidth,A=0,I=window.location.href,ve;function $e(e){W=e}function Fe(e){fe=e}function We(e){he=e}function Re(e){ge=e}function Ue(e){ye=e}function Ye(e){ie=e}function Ge(e){ae=e}function R(e){A=e}function Xe(e){I=e}function Je(e){ve=e}function Ve(e){k=e}function Qe(e){de=e}function Ke(e){ue=e}function Ze(e){pe=e}function ze(e){me=e}function et(e){ce=e}var Y=class{constructor(){this.queue=[]}add(o){return this.queue.push(new q(o)),this}play(){this.queue.forEach(o=>o.play())}},V={targets:null,duration:1/0,easing:"linear",delay:0,begin:null,update:null,complete:null},U=()=>{let e={linear:()=>i=>i},o={Sine:()=>i=>1-Math.cos(i*Math.PI/2),Expo:()=>i=>i?Math.pow(2,10*i-10):0,Circ:()=>i=>1-Math.sqrt(1-i*i),Back:()=>i=>i*i*(3*i-2),Bounce:()=>i=>{let c,s=4;for(;i<((c=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((c*3-2)/22-i,2)}};return["Quad","Cubic","Quart","Quint"].forEach((i,c)=>{o[i]=()=>s=>Math.pow(s,c+2)}),Object.keys(o).forEach(i=>{let c=o[i];e["easeIn"+i]=c,e["easeOut"+i]=()=>s=>1-c()(1-s),e["easeInOut"+i]=()=>s=>s<.5?c()(s*2)/2:1-c()(s*-2+2)/2,e["easeOutIn"+i]=()=>s=>s<.5?(1-c()(1-s*2))/2:(c()(s*2-1)+1)/2}),e},be=["translateX","translateY","translateZ"],Q=(e,o)=>e instanceof HTMLElement?"transform"in e.style&&be.includes(o)?"transform":o in e.style?"style":"attribute":"attribute",xe=e=>{let o=Date.now()+e.delay,i=o+e.duration,c=!!e.targets,s=[],y=()=>{if(c){Array.isArray(e.targets)||(e.targets=[e.targets]);for(let u of e.targets){let f={};for(let g in e.dest){let h=e.dest[g],T=Q(u,g);if(Array.isArray(h))if(h.length===2&&typeof h[0]!="object")T==="transform"?u.style.transform=`${g}(${typeof h[0]=="string"?h[0]:h[0]+"px"})`:T==="style"?u.style[g]=h[0]:u[g]=h[0],f[g]=h[0],e.dest[g]=h[1];else{let t=0;for(let r of h)r.startTimeStamp=t,t+=r.duration;f[g]=u[g]}else T==="transform"?f[g]=u.style.transform.match(new RegExp(`${g}\\((\\w+)\\)`))[1]:T==="style"?f[g]=u.style[g]:f[g]=u[g]}s.push(f)}}},a=(u,f,g,h,T,t=!1)=>{let r;if(typeof h=="string")if(r=h.endsWith("%")?"%":h.endsWith("px")?"px":null,r)h=parseFloat(h);else throw new TypeError("string value must ends with '%' or 'px'");let n=t?h:(h-f)*g+f;r&&(n+=r);let m=Q(u,T);m==="transform"?u.style.transform=`${T}(${n}${r?"":"px"})`:m==="style"?u.style[T]=n:u[T]=n},d=(u,f,g=!1)=>{e.targets.forEach((h,T)=>{Object.keys(e.dest).forEach(t=>{let r=parseFloat(s[T][t]),n=e.dest[t];if(typeof n=="object")if(Array.isArray(n)){let m=0;for(;m<n.length&&f-o>=n[m].startTimeStamp;)m++;let{value:l,duration:p,easing:C=e.easing,startTimeStamp:M}=n[m-1];r=m<=1?r:n[m-2].value,f<=o+p+M?(u=U()[C]()((f-o-M)/p),a(h,r,u,l,t)):g&&a(h,r,u,l,t,g)}else{let{value:m,duration:l,easing:p=e.easing}=n;f<=o+l?(u=U()[p]()((f-o)/l),a(h,r,u,m,t)):g&&a(h,r,u,m,t,g)}else typeof n=="function"&&(n=n(h,T)),a(h,r,u,n,t,g)})})},b=()=>{let u=Date.now();if(u>i)d(1,u,!0),typeof e.complete=="function"&&e.complete(e.targets),e.isPlay=!1;else{if(u>=o){let f=U()[e.easing]()((u-o)/e.duration);c&&d(f,u),typeof e.update=="function"&&e.update(e.targets)}requestAnimationFrame(b)}};y(),typeof e.begin=="function"&&e.begin(e.targets),b()},q=class{constructor(o=V){o={...V,...o};let{targets:i,duration:c,easing:s,delay:y,begin:a,update:d,complete:b,...u}=o;this.targets=i,this.duration=c,this.easing=s,this.delay=y,this.begin=a,this.update=d,this.complete=b,this.dest=u||{},this.tl=null,this.isPlay=!1}timeline(){return this.tl||(this.tl=new Y),this.tl}play(){this.isPlay||(this.isPlay=!0,xe(this))}},B=e=>new q(e);B.random=(e,o)=>Math.floor(Math.random()*(o-e+1))+e;var lt=(e,o,i,c)=>{let s,y="none";switch(o){case 0:s={opacity:[1,0]};break;case 1:s={opacity:[0,1]},y="block";break;case"bounceUpIn":s={begin(a){N(e,"block")},translateY:[{value:-60,duration:200},{value:10,duration:200},{value:-5,duration:200},{value:0,duration:200}],opacity:[0,1]},y="block";break;case"shrinkIn":s={begin(a){N(e,"block")},scale:[{value:1.1,duration:300},{value:1,duration:200}],opacity:1},y="block";break;case"slideRightIn":s={begin(a){N(e,"block")},translateX:["100%","0%"],opacity:[0,1]},y="block";break;case"slideRightOut":s={translateX:["0%","100%"],opacity:[1,0]};break;default:s=o,y=o.display;break}B(Object.assign({targets:e,duration:200,easing:"linear",begin(){c&&c()},complete(){N(e,y),i&&i()}},s)).play()},O=(e,o,i)=>{B({targets:typeof o=="number"&&typeof e!="number"?e.parentNode:document.scrollingElement,duration:500,easing:"easeInOutQuad",scrollTop:o||(typeof e=="number"?e:e?X(e)+document.documentElement.scrollTop-W:0),complete(){i&&i()}}).play()};var x={set(e,o){localStorage.setItem(e,o)},get(e){return localStorage.getItem(e)},del(e){localStorage.removeItem(e)}};var K=e=>{if(!e)return;let o=v(F,"div",{innerHTML:e,className:"tip"});setTimeout(()=>{o.addClass("hide"),setTimeout(()=>{F.removeChild(o)},300)},3e3)},yt=()=>{L.auto_scroll&&x.set(I,String(J.y))},vt=e=>{let o=window.location.hash,i=null;if(A){x.del(I);return}o?i=document.querySelector(decodeURI(o)):i=L.auto_scroll?parseInt(x.get(I)):0,i&&(O(i),R(1)),e&&o&&!A&&(O(i),R(1))},bt=(e,o)=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(e).then(()=>{o&&o(!0)},()=>{o&&o(!1)}):(console.error("Too old browser, clipborad API not supported."),o&&o(!1))};var Z=()=>{let e;S.each("div.tab",o=>{if(o.getAttribute("data-ready"))return;let i=o.getAttribute("data-id"),c=o.getAttribute("data-title"),s=document.getElementById(i);s?e=!1:(s=document.createElement("div"),s.className="tabs",s.id=i,s.innerHTML='<div class="show-btn"></div>',s.querySelector(".show-btn").addEventListener("click",()=>{O(s)}),o.parentNode.insertBefore(s,o),e=!0);let y=s.querySelector(".nav ul");y||(y=v(s,"div",{className:"nav",innerHTML:"<ul></ul>"}).querySelector("ul"));let a=v(y,"li",{innerHTML:c});e&&(a.addClass("active"),o.addClass("active")),a.addEventListener("click",d=>{let b=d.currentTarget;s.find(".active").forEach(u=>{u.removeClass("active")}),o.addClass("active"),b.addClass("active")}),s.appendChild(o),o.setAttribute("data-ready",String(!0))})};var P=null,G=/mobile/i.test(window.navigator.userAgent),At=(e,o)=>{let i={el:{},create(){e.player.options.btns&&e.player.options.btns.forEach(t=>{i.el[t]||(i.el[t]=v(e,"div",{className:t+" btn",onclick(r){e.player.fetch().then(()=>{e.player.options.events[t](r)})}}))})}},c={el:null,btns:{mode:void 0,volume:void 0},step:"next",create:()=>{if(!e.player.options.controls)return;let t=c;e.player.options.controls.forEach(r=>{if(t.btns[r])return;let n={onclick(m){t.events[r]?t.events[r](m):e.player.options.events[r](m)}};switch(r){case"volume":n.className=" "+(a.muted?"off":"on"),n.innerHTML='<div class="bar"></div>',n["on"+f.nameMap.dragStart]=t.events.volume,n.onclick=null;break;case"mode":n.className=" "+e.player.options.mode;break;default:n.className="";break}n.className=r+n.className+" btn",t.btns[r]=v(t.el,"div",n)}),t.btns.volume.bar=t.btns.volume.querySelector(".bar")},events:{mode(t){switch(e.player.options.mode){case"loop":e.player.options.mode="random";break;case"random":e.player.options.mode="order";break;default:e.player.options.mode="loop"}c.btns.mode.className="mode "+e.player.options.mode+" btn",x.set("_PlayerMode",e.player.options.mode)},volume(t){t.preventDefault();let r=t.currentTarget,n=!1,m=p=>{p.preventDefault(),e.player.volume(c.percent(p,r)),n=!0},l=p=>{p.preventDefault(),r.removeEventListener(f.nameMap.dragEnd,l),r.removeEventListener(f.nameMap.dragMove,m),n?(e.player.muted(),e.player.volume(c.percent(p,r))):a.muted?(e.player.muted(),e.player.volume(a.volume)):(e.player.muted("muted"),c.update(0))};r.addEventListener(f.nameMap.dragMove,m),r.addEventListener(f.nameMap.dragEnd,l)},backward(t){c.step="prev",e.player.mode()},forward(t){c.step="next",e.player.mode()}},update(t){c.btns.volume.className="volume "+(!a.muted&&t>0?"on":"off")+" btn",j(c.btns.volume.bar,Math.floor(t*100)+"%")},percent(t,r){let n=((t.clientX||t.changedTouches[0].clientX)-D(r))/_(r);return n=Math.max(n,0),Math.min(n,1)}},s={el:null,bar:null,create(){let t=d.current().el;t&&(s.el&&(s.el.parentNode.removeClass("current").removeEventListener(f.nameMap.dragStart,s.drag),s.el.remove()),s.el=v(t,"div",{className:"progress"}),s.el.setAttribute("data-dtime",f.secondToTime(0)),s.bar=v(s.el,"div",{className:"bar"}),t.addClass("current"),t.addEventListener(f.nameMap.dragStart,s.drag),d.scroll())},update(t){j(s.bar,Math.floor(t*100)+"%"),s.el.setAttribute("data-ptime",f.secondToTime(t*a.duration))},seeking(t){t?s.el.addClass("seeking"):s.el.removeClass("seeking")},percent(t,r){let n=((t.clientX||t.changedTouches[0].clientX)-D(r))/_(r);return n=Math.max(n,0),Math.min(n,1)},drag(t){t.preventDefault();let r=d.current().el,n=l=>{l.preventDefault();let p=s.percent(l,r);s.update(p),g.update(p*a.duration)},m=l=>{l.preventDefault(),r.removeEventListener(f.nameMap.dragEnd,m),r.removeEventListener(f.nameMap.dragMove,n);let p=s.percent(l,r);s.update(p),e.player.seek(p*a.duration),a.disableTimeupdate=!1,s.seeking(!1)};a.disableTimeupdate=!0,s.seeking(!0),r.addEventListener(f.nameMap.dragMove,n),r.addEventListener(f.nameMap.dragEnd,m)}},y={el:null,create(){let t=d.current();y.el.innerHTML='<div class="cover"><div class="disc"><img src="'+t.cover+'" class="blur"  alt="music cover"/></div></div><div class="info"><h4 class="title">'+t.name+"</h4><span>"+t.artist+'</span><div class="lrc"></div></div>',y.el.querySelector(".cover").addEventListener("click",e.player.options.events["play-pause"]),g.create(y.el.querySelector(".lrc"))}},a,d={el:null,data:[],index:-1,errnum:0,add:(t,r)=>{r.forEach(n=>{n.group=t,n.name=n.name||n.title||"Meida name",n.artist=n.artist||n.author||"Anonymous",n.cover=n.cover||n.pic,n.type=n.type||"normal",d.data.push(n)})},clear(){d.data=[],d.el.innerHTML="",d.index!==-1&&(d.index=-1,e.player.fetch())},create(){let t=d.el;d.data.map((r,n)=>{if(r.el)return null;let m="list-"+e.player._id+"-"+r.group,l=document.getElementById(m);return l||(l=v(t,"div",{id:m,className:e.player.group?"tab":"",innerHTML:"<ol></ol>"}),e.player.group&&(l.setAttribute("data-title",e.player.options.rawList[r.group].title),l.setAttribute("data-id",e.player._id))),r.el=v(l.querySelector("ol"),"li",{title:r.name+" - "+r.artist,innerHTML:'<span class="info"><span>'+r.name+"</span><span>"+r.artist+"</span></span>",onclick(p){let C=p.currentTarget;if(d.index===n&&s.el){a.paused?e.player.play():e.player.seek(a.duration*s.percent(p,C));return}e.player.switch(n),e.player.play()}}),r}),Z()},current(){return this.data[this.index]},scroll(){let t=this.current(),r=this.el.querySelector("li.active");r&&r.removeClass("active");let n=this.el.querySelector(".tab.active");return n&&n.removeClass("active"),r=this.el.querySelectorAll(".nav li")[t.group],r&&r.addClass("active"),n=this.el.querySelectorAll(".tab")[t.group],n&&n.addClass("active"),O(t.el,t.el.offsetTop),this},title(){if(a.paused)return;let t=this.current();document.title="Now Playing..."+t.name+" - "+t.artist+" | "+k},error(){let t=this.current();t.el.removeClass("current").addClass("error"),t.error=!0,this.errnum++}},b={el:null,create(){this.el||(this.el=v(e,"div",{className:"player-info",innerHTML:(e.player.options.type==="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),y.el=this.el.querySelector(".preview"),d.el=this.el.querySelector(".playlist"),c.el=this.el.querySelector(".controller"))},hide(){let t=this.el;t.addClass("hide"),window.setTimeout(()=>{t.removeClass("show hide")},300)}},u={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause"(t){a.paused?e.player.play():e.player.pause()},music(t){b.el.hasClass("show")?b.hide():(b.el.addClass("show"),d.scroll().title())}}},f={random(t){return Math.floor(Math.random()*t)},parse(t){let r=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+)(.html)?","tencent","song"],["y.qq.com.*album/(\\w+)(.html)?","tencent","album"],["y.qq.com.*singer/(\\w+)(.html)?","tencent","artist"],["y.qq.com.*playsquare/(\\w+)(.html)?","tencent","playlist"],["y.qq.com.*playlist/(\\w+)(.html)?","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(n=>{let l=new RegExp(n[0]).exec(t);l!==null&&(r=[n[1],n[2],l[1]])}),r},fetch(t){let r=[];return new Promise((n,m)=>{t.forEach(l=>{let p=f.parse(l);if(p[0]){let C=JSON.stringify(p),M=x.get(C);M?(r.push(...JSON.parse(M)),n(r)):fetch(`${L.playerAPI}/meting/?server=`+p[0]+"&type="+p[1]+"&id="+p[2]+"&r="+Math.random()).then(E=>E.json()).then(E=>{x.set(C,JSON.stringify(E)),r.push(...E),n(r)}).catch(E=>{})}else r.push(l),n(r)})})},secondToTime(t){let r=p=>isNaN(p)?"00":p<10?"0"+p:""+p,n=Math.floor(t/3600),m=Math.floor((t-n*3600)/60),l=Math.floor(t-n*3600-m*60);return(n>0?[n,m,l]:[m,l]).map(r).join(":")},nameMap:{dragStart:G?"touchstart":"mousedown",dragMove:G?"touchmove":"mousemove",dragEnd:G?"touchend":"mouseup"}};a=null,e.player={_id:f.random(999999),group:!0,load(t){let r="";t&&t.length>0?this.options.rawList!==t&&(this.options.rawList=t,d.clear(),this.fetch()):(r="none",this.pause());for(let n in i.el)N(i.el[n],r);return this},fetch(){return new Promise((t,r)=>{if(d.data.length>0)t(!1);else if(this.options.rawList){let n=[];this.options.rawList.forEach((m,l)=>{n.push(new Promise((p,C)=>{let M=l,E;m.list?(this.group=!0,E=m.list):(M=0,this.group=!1,E=[m]),f.fetch(E).then(H=>{d.add(M,H),p(0)})}))}),Promise.all(n).then(()=>{t(!0)})}}).then(t=>{t&&(d.create(),c.create(),this.mode())})},mode(){let t=d.data.length;if(!t||d.errnum===t)return;let r=c.step==="next"?1:-1,n=()=>{let l=d.index+r;(l>t||l<0)&&(l=c.step==="next"?0:t-1),d.index=l},m=()=>{let l=f.random(t);d.index!==l?d.index=l:n()};switch(this.options.mode){case"random":m();break;case"order":n();break;case"loop":c.step&&n(),d.index===-1&&m();break}this.init()},switch(t){typeof t=="number"&&t!==d.index&&d.current()&&!d.current().error&&(d.index=t,this.init())},init(){let t=d.current();if(!t||t.error){this.mode();return}let r=!1;a.paused||(r=!0,this.stop()),a.setAttribute("src",t.url),a.setAttribute("title",t.name+" - "+t.artist),this.volume(x.get("_PlayerVolume")||"0.7"),this.muted(x.get("_PlayerMuted")),s.create(),this.options.type==="audio"&&y.create(),r===!0&&this.play()},play(){if(P&&P.player.pause(),d.current().error){this.mode();return}a.play().then(()=>{d.scroll()}).catch(t=>{})},pause(){a.pause(),document.title=k},stop(){a.pause(),a.currentTime=0,document.title=k},seek(t){t=Math.max(t,0),t=Math.min(t,a.duration),a.currentTime=t,s.update(t/a.duration)},muted(t){t==="muted"?(a.muted=t,x.set("_PlayerMuted",t),c.update(0)):(x.del("_PlayerMuted"),a.muted=!1,c.update(a.volume))},volume(t){isNaN(t)||(c.update(t),x.set("_PlayerVolume",t),a.volume=t)},mini(){b.hide()}};let g={el:null,data:null,index:0,create(t){let r=d.index,n=d.current().lrc,m=l=>{if(r!==d.index)return;this.data=this.parse(l);let p="";this.data.forEach((C,M)=>{p+="<p"+(M===0?' class="current"':"")+">"+C[1]+"</p>"}),this.el=v(t,"div",{className:"inner",innerHTML:p},"replace"),this.index=0};n.startsWith("http")?this.fetch(n,m):m(n)},update(t){if(this.data&&(this.index>this.data.length-1||t<this.data[this.index][0]||!this.data[this.index+1]||t>=this.data[this.index+1][0])){for(let r=0;r<this.data.length;r++)if(t>=this.data[r][0]&&(!this.data[r+1]||t<this.data[r+1][0])){this.index=r;let n=-(this.index-1);this.el.style.transform="translateY("+n+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[r].addClass("current")}}},parse(t){if(t){t=t.replace(/([^\]^\n])\[/g,(l,p)=>p+`
[`);let r=t.split(`
`),n=[],m=r.length;for(let l=0;l<m;l++){let p=r[l].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),C=r[l].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").trim();if(p){let M=p.length;for(let E=0;E<M;E++){let H=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(p[E]),te=H[1]*60,ne=parseInt(H[2]),re=H[4]?parseInt(H[4])/((H[4]+"").length===2?100:1e3):0,oe=te+ne+re;n.push([oe,C])}}}return n=n.filter(l=>l[1]),n.sort((l,p)=>l[0]-p[0]),n}else return[]},fetch(t,r){fetch(t).then(n=>n.text()).then(n=>{r(n)}).catch(n=>{})}},h={onerror(){d.error(),e.player.mode()},ondurationchange(){a.duration!==1&&s.el.setAttribute("data-dtime",f.secondToTime(a.duration))},onloadedmetadata(){e.player.seek(0),s.el.setAttribute("data-dtime",f.secondToTime(a.duration))},onplay(){e.parentNode.addClass("playing"),K(this.getAttribute("title")),P=e},onpause(){e.parentNode.removeClass("playing"),P=null},ontimeupdate(){this.disableTimeupdate||(s.update(this.currentTime/this.duration),g.update(this.currentTime))},onended(t){e.player.mode(),e.player.play()}};return(t=>{e.player.created||(e.player.options=Object.assign(u,t),e.player.options.mode=x.get("_PlayerMode")||e.player.options.mode,i.create(),a=v(e,e.player.options.type,h),b.create(),e.parentNode.addClass(e.player.options.type),e.player.created=!0)})(o),e};function Pt(){let e=!0;window.addEventListener("DOMContentLoaded",function(){e=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){e&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}var z=(e,o,i,c)=>{if(c)i();else{let s=document.createElement("script");s.onload=function(y,a){(a||!s.readyState)&&(console.log("abort!"),s.onload=null,s=void 0,!a&&i&&setTimeout(i,0))},s.src=e,s.integrity=o,s.crossOrigin="anonymous",document.head.appendChild(s)}},jt=e=>{let{text:o,parentNode:i,id:c,className:s,type:y,src:a,dataset:d}=e,b=o||e.textContent||e.innerHTML||"";i.removeChild(e);let u=document.createElement("script");c&&(u.id=c),s&&(u.className=s),y&&(u.type=y),a&&(u.src=a,u.async=!1),d.pjax!==void 0&&(u.dataset.pjax=""),b!==""&&u.appendChild(document.createTextNode(b)),i.appendChild(u)};var ee=(e,o)=>{let i=L[e][o].url;return i.startsWith("https")?i:i.startsWith("http")?(console.warn(`Upgrade vendor ${e}/${o} to HTTPS, Please use HTTPS url instead of HTTP url.`),i.replace("http","https")):`/${i}`},Rt=(e,o,i)=>{LOCAL[e]&&z(ee("js",e),L.js[e].sri,o||function(){window[e]=!0},i||window[e])},Ut=(e,o)=>{if(!window["css"+e]&&LOCAL[e]){let i={rel:"stylesheet",href:ee("css",e)},c=L.css[e];c.local||(i.integrity=c.sri,i.crossOrigin="anonymous"),v(document.head,"link",i),window["css"+e]=!0}};export{S as a,se as b,v as c,we as d,Le as e,j as f,Ce as g,N as h,$ as i,L as j,Oe as k,J as l,ie as m,k as n,ae as o,F as p,ke as q,Ie as r,Ae as s,le as t,qe as u,Be as v,Pe as w,je as x,_e as y,ce as z,de as A,ue as B,pe as C,me as D,fe as E,he as F,ye as G,$e as H,Fe as I,We as J,Re as K,Ue as L,Ye as M,Ge as N,R as O,Xe as P,Je as Q,Ve as R,Qe as S,Ke as T,Ze as U,ze as V,et as W,lt as X,O as Y,x as Z,K as _,yt as $,vt as aa,bt as ba,Z as ca,At as da,Pt as ea,jt as fa,Rt as ga,Ut as ha};
/*! For license information please see chunk-STFSDDCK.js.LEGAL.txt */
