import{a as ie,c as ye,d as yt,e as bt,f as Et,g as Lt,h as Ct,i as Tt,k as Oe}from"./chunk-WK5RHFND.js";import{$ as E,A as se,B as re,C as Qe,D as ne,E as Ie,F as qe,G as et,H as tt,K as ot,L as st,M as rt,N as nt,O as it,P as at,Q as ct,R as lt,S as dt,T as ut,U as mt,V as ht,W as ft,X as pt,Y as gt,Z as vt,_ as wt,a as b,aa as H,c as $,e as W,f as Ze,j as Q,k as Ve,l as v,m as ee,n as te,p as oe,q as ve,r as Je,s as D,t as S,u as we,v as U,w as He,x as f,y as Ke,z as k}from"./chunk-DXABQQ77.js";import{c as m}from"./chunk-ZQNAPXCS.js";m();m();m();Ve();var Y=(e,t)=>{f.hasClass("on")?(f.removeClass("on"),U.removeClass("close"),t?f.style="":E(f,"slideRightOut")):t?f.style="":E(f,"slideRightIn",()=>{f.addClass("on"),U.addClass("close")})},At=()=>{let e=f.querySelector(".inner");f.querySelector(".tab")&&e.removeChild(f.querySelector(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let r=f.querySelector(".panel."+s);if(r.innerHTML.trim().length<1){s==="contents"&&Q(ne,"none");return}s==="contents"&&Q(ne,"");let i=document.createElement("li"),c=document.createElement("span"),n=document.createTextNode(r.getAttribute("data-title"));c.appendChild(n),i.appendChild(c),i.addClass(s+" item"),o?(r.addClass(o),i.addClass(o)):r.removeClass("active"),i.addEventListener("click",a=>{let d=a.currentTarget;d.hasClass("active")||(f.find(".tab .item").forEach(l=>{l.removeClass("active")}),f.find(".panel").forEach(l=>{l.removeClass("active")}),f.querySelector(".panel."+d.className.replace(" item","")).addClass("active"),d.addClass("active"))}),t.appendChild(i),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),f.querySelector(".panels").style.paddingTop=""):f.querySelector(".panels").style.paddingTop=".625rem"},St=()=>{let e=n=>{let a=t[n];if(!a||a.hasClass("current"))return;b.each(".toc .active",l=>{l&&l.removeClass("active current")}),o.forEach(l=>{l&&l.removeClass("active")}),a.addClass("active current"),o[n]&&o[n].addClass("active");let d=a.parentNode;for(;!d.matches(".contents");){if(d.matches("li")){d.addClass("active");let l=document.getElementById(decodeURIComponent(d.querySelector("a.toc-link").getAttribute("href").replace("#","")));l&&l.addClass("active")}d=d.parentNode}getComputedStyle(f).display!=="none"&&r.hasClass("active")&&H(r,a.offsetTop-r.offsetHeight/4)},t=b.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((n,a)=>{let d=n.querySelector("a.toc-link"),l=document.getElementById(decodeURI(d.getAttribute("href").replace("#","")));if(!l)return null;let p=l.querySelector("a.anchor"),u=g=>{g.preventDefault();let O=document.getElementById(decodeURI(g.currentTarget.getAttribute("href").replace("#","")));s=a,H(O,null,()=>{e(a),s=null})};return d.addEventListener("click",u),p&&p.addEventListener("click",g=>{u(g),bt(v.hostname+"/"+LOCAL.path+g.currentTarget.getAttribute("href"))}),l});let r=f.querySelector(".contents.panel"),i=n=>{let a=0,d=n[a];if(d.boundingClientRect.top>0)return a=o.indexOf(d.target),a===0?0:a-1;for(;a<n.length;a++)if(n[a].boundingClientRect.top<=0)d=n[a];else return o.indexOf(d.target);return o.indexOf(d.target)};(()=>{let n=new IntersectionObserver(a=>{let d=i(a)+(te<0?1:0);s===null&&e(d)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(a=>{a&&n.observe(a)})})()},Me=()=>{H(0)},xt=()=>{H(parseInt(String(W(Je))))},_t=()=>{H(document.getElementById("comments"))},kt=()=>{b.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),r=!v.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),i=!t.onclick&&t.hostname===location.hostname&&(s||r);e.toggleClass("active",i),e.parentNode.querySelector(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};m();var I={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),D.setAttribute("style","display:block"),I.lock=!1},hide(e){v.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){I.lock||(v.loader.start&&E(D,0),document.body.addClass("loaded"),I.lock=!0)}};function Re(){b.each(".overview .menu > .item",t=>{S.querySelector(".menu").appendChild(t.cloneNode(!0))}),D.addEventListener("click",I.vanish),U.addEventListener("click",Y),document.querySelector(".dimmer").addEventListener("click",Y),He.querySelector(".down").addEventListener("click",xt),He.querySelector(".up").addEventListener("click",Me),k||vt($(we,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),ht(k.querySelector(".player")),ft(k.querySelector(".back-to-top")),pt(k.querySelector(".chat")),gt(k.querySelector(".contents")),re.addEventListener("click",Me),Qe.addEventListener("click",_t),ne.addEventListener("click",Y),Lt(se),document.querySelector("main").addEventListener("click",()=>{se.player.mini()}),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}m();m();var Ht=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});b.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),b.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{let s=document.querySelector(".cards .item.active");s&&s.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};m();m();var x=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(ve.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(ve.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},It=()=>{v.auto_dark.enable&&(new Date().getHours()>=v.auto_dark.start||new Date().getHours()<=v.auto_dark.end?x("dark"):x())},Ne=e=>{ve.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},qt=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?x("dark"):x()});let e=ie.get("theme");e?x(e):v.darkmode&&x("dark")};var to=document.getElementById("waves"),be=()=>{st(W(S)),rt(W(we)),nt(qe+W(to)),tt!==window.innerWidth&&Y(null,1),it(window.innerHeight),at(window.innerWidth)},Ot=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>qe,r=window.scrollY>0;s?Ne("#FFF"):Ne("#222"),S.toggleClass("show",s),k.toggleClass("affix",r),Ke.toggleClass("affix",r),f.toggleClass("affix",window.scrollY>et&&document.body.offsetWidth>=991),typeof ee.y>"u"&&(ee.y=window.scrollY),ct(ee.y-window.scrollY),te<0?(S.removeClass("up"),S.toggleClass("down",s)):te>0&&(S.removeClass("down"),S.toggleClass("up",s)),ee.y=window.scrollY;let i=Math.round(Math.min(100*window.scrollY/o,100))+"%";re.querySelector("span").innerText!==i&&(re.querySelector("span").innerText=i),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&Ze(document.querySelector(".percent"),i)};m();m();m();m();function Ee(e,t,o){let s=e*4+1,r=6+t*(5+s),i=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,e>>8,e&255,0,0,t>>8,t&255,8,6,0,0,0,0,0,0,0,r>>>24,r>>16&255,r>>8&255,r&255,73,68,65,84,120,1],c=[0,498536548,997073096,651767980,1994146192,1802195444,1303535960,1342533948,-306674912,-267414716,-690576408,-882789492,-1687895376,-2032938284,-1609899400,-1111625188],n=1,a=0;for(let l=0,p=0,u=s-1;l<t;l++,u+=s-1)for(i.push(l+1<t?0:1,s&255,s>>8,~s&255,s>>8^255,0),a=(a+n)%65521;p<u;p++){let g=o[p]&255;i.push(g),n=(n+g)%65521,a=(a+n)%65521}i.push(a>>8,a&255,n>>8,n&255,0,0,0,0,0,0,0,0,73,69,78,68,174,66,96,130);for(let[l,p]of[[12,29],[37,41+r]]){let u=-1;for(let g=l;g<p;g++)u^=i[g],u=u>>>4^c[u&15],u=u>>>4^c[u&15];u=~u,i[p++]=u>>>24,i[p++]=u>>16&255,i[p++]=u>>8&255,i[p++]=u&255}return`data:image/png;base64,${globalThis.btoa(String.fromCharCode(...i))}`}var Ce=32,Rt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Nt=typeof window>"u",Be=!Nt&&"loading"in HTMLImageElement.prototype,De=!Nt&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function Pt(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function oo(e,t){let o,s;return e>=1?(o=t,s=Math.round(t/e)):(o=Math.round(t*e),s=t),{width:o,height:s}}function Bt(e,t){let o;return function(...s){o&&clearTimeout(o),o=setTimeout(()=>{o=void 0,e(...s)},t)}}var so="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~",Le=(e,t,o)=>{let s=0;for(;t<o;)s*=83,s+=so.indexOf(e[t++]);return s},Dt=Math.pow,ce=Math.PI,ro=ce*2,Ut=3294.6,jt=269.025,no=e=>e>10.31475?Dt(e/jt+.052132,2.4):e/Ut,Pe=e=>~~(e>1227e-8?jt*Dt(e,.416666)-13.025:e*Ut+1),ae=e=>(e<0?-1:1)*e*e,Mt=e=>{for(e+=ce/2;e>ce;)e-=ro;let t=1.27323954*e-.405284735*ae(e);return .225*(ae(t)-t)+t};function io(e){let t=Le(e,2,6);return[t>>16,t>>8&255,t&255]}function ao(e,t,o,s){let r=Le(e,0,1),i=r%9+1,c=~~(r/9)+1,n=i*c,a=0,d=0,l=0,p=0,u=0,g=0,O=0,M=0,G=0,C=0,R=0,le=0,de=0,N=0,_=(Le(e,1,2)+1)/13446*(s|1),T=new Float64Array(n*3),ke=io(e);for(a=0;a<3;a++)T[a]=no(ke[a]);for(a=1;a<n;a++)N=Le(e,4+a*2,6+a*2),T[a*3]=ae(~~(N/(19*19))-9)*_,T[a*3+1]=ae(~~(N/19)%19-9)*_,T[a*3+2]=ae(N%19-9)*_;let ue=t*4,P=new Uint8ClampedArray(ue*o);for(p=0;p<o;p++)for(le=ce*p/o,l=0;l<t;l++){for(u=0,g=0,O=0,de=ce*l/t,d=0;d<c;d++)for(G=Mt(le*d),a=0;a<i;a++)M=Mt(de*a)*G,C=(a+d*i)*3,u+=T[C]*M,g+=T[C+1]*M,O+=T[C+2]*M;R=4*l+p*ue,P[R]=Pe(u),P[R+1]=Pe(g),P[R+2]=Pe(O),P[R+3]=255}return P}function Gt(e,{ratio:t=1,size:o=Ce}={}){let{width:s,height:r}=oo(t,o),i=ao(e,s,r);return Ee(s,r,i)}m();function co(e){let{PI:t,min:o,max:s,cos:r,round:i}=Math,c=e[0]|e[1]<<8|e[2]<<16,n=e[3]|e[4]<<8,a=(c&63)/63,d=(c>>6&63)/31.5-1,l=(c>>12&63)/31.5-1,p=(c>>18&31)/31,u=c>>23,g=(n>>3&63)/63,O=(n>>9&63)/63,M=n>>15,G=s(3,M?u?5:7:n&7),C=s(3,M?n&7:u?5:7),R=u?(e[5]&15)/15:1,le=(e[5]>>4)/15,de=u?6:5,N=0,_=(V,A,J)=>{let z=[];for(let B=0;B<A;B++)for(let F=B?0:1;F*A<V*(A-B);F++)z.push(((e[de+(N>>1)]>>((N++&1)<<2)&15)/7.5-1)*J);return z},T=_(G,C,p),ke=_(3,3,g*1.25),ue=_(3,3,O*1.25),P=u&&_(5,5,le),me=lo(e),he=i(me>1?32:32*me),fe=i(me>1?32/me:32),Z=new Uint8Array(he*fe*4),pe=[],ge=[];for(let V=0,A=0;V<fe;V++)for(let J=0;J<he;J++,A+=4){let z=a,B=d,F=l,$e=R;for(let h=0,y=s(G,u?5:3);h<y;h++)pe[h]=r(t/he*(J+.5)*h);for(let h=0,y=s(C,u?5:3);h<y;h++)ge[h]=r(t/fe*(V+.5)*h);for(let h=0,y=0;h<C;h++)for(let L=h?0:1,K=ge[h]*2;L*C<G*(C-h);L++,y++)z+=T[y]*pe[L]*K;for(let h=0,y=0;h<3;h++)for(let L=h?0:1,K=ge[h]*2;L<3-h;L++,y++){let Xe=pe[L]*K;B+=ke[y]*Xe,F+=ue[y]*Xe}if(u)for(let h=0,y=0;h<5;h++)for(let L=h?0:1,K=ge[h]*2;L<5-h;L++,y++)$e+=P[y]*pe[L]*K;let We=z-2/3*B,Ye=(3*z-We+F)/2,eo=Ye-F;Z[A]=s(0,255*o(1,Ye)),Z[A+1]=s(0,255*o(1,eo)),Z[A+2]=s(0,255*o(1,We)),Z[A+3]=s(0,255*o(1,$e))}return{w:he,h:fe,rgba:Z}}function lo(e){let t=e[3],o=e[2]&128,s=e[4]&128,r=s?o?5:7:t&7,i=s?t&7:o?5:7;return r/i}function zt(e){let t=uo(e),{w:o,h:s,rgba:r}=co(t);return Ee(o,s,r)}function uo(e){return Uint8Array.from(globalThis.atob(mo(e)),t=>t.charCodeAt(0))}function mo(e){return e.replaceAll("-","+").replaceAll("_","/")}function Ge(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=Ce,updateSizesOnResize:r=!1,onImageLoad:i}={}){let c=new Set;for(let n of Pt(e)){let a=je(n,{updateOnResize:r});if(r&&a&&c.add(a),t){let l=Ft({image:n,hash:typeof t=="string"?t:void 0,hashType:o,size:s});l&&(n.src=l)}if(!n.dataset.src&&!n.dataset.srcset)continue;if(De||!Be){$t(n),Se(n),Ae(n);continue}if(n.src||(n.src=Rt),n.complete&&n.naturalWidth>0){Ue(n,i);continue}let d=()=>Ue(n,i);n.addEventListener("load",d,{once:!0}),c.add(()=>n.removeEventListener("load",d))}return()=>{for(let n of c)n();c.clear()}}function Ue(e,t){if(e.parentElement?.tagName.toLowerCase()==="picture"){$t(e),Se(e),Ae(e),t?.(e);return}let s=new Image,{srcset:r,src:i,sizes:c}=e.dataset;if(c==="auto"){let n=Wt(e);n&&(s.sizes=`${n}px`)}else e.sizes&&(s.sizes=e.sizes);r&&(s.srcset=r),i&&(s.src=i),s.addEventListener("load",()=>{Se(e),Ae(e),t?.(e)},{once:!0})}function Ft({image:e,hash:t,hashType:o="blurhash",size:s=Ce,ratio:r}={}){if(!t&&e){let{blurhash:i,thumbhash:c}=e.dataset;t=c||i,o=c?"thumbhash":"blurhash"}if(t)try{if(o==="thumbhash")return zt(t);if(!r&&e){let i=e.width||e.offsetWidth||s,c=e.height||e.offsetHeight||s;r=i/c}return Gt(t,{ratio:r,size:s})}catch{}}var Te=new WeakMap;function je(e,t){if(e.dataset.sizes!=="auto")return;let o=Wt(e);if(o&&(e.sizes=`${o}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(s=>je(s,{skipChildren:!0})),t?.updateOnResize){if(!Te.has(e)){let s=Bt(()=>je(e),500),r=new ResizeObserver(s);Te.set(e,r),r.observe(e)}return()=>{let s=Te.get(e);s&&(s.disconnect(),Te.delete(e))}}}function Ae(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function Se(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function $t(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(Se),[...t.querySelectorAll("source[data-src]")].forEach(Ae))}function Wt(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var Yt=()=>{ye(),f.hasClass("on")&&E(f,0,()=>{f.removeClass("on"),U.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(D.lastChild.cloneNode(!0)),H(0)},ze=async e=>{lt(0),dt(window.location.href),Oe("katex"),await import("./copy-tex-BTID36VG.js"),Oe("mermaid");let t=new IntersectionObserver(function(s,r){s.forEach(i=>{if(i.isIntersecting){let c=i.target;c.style.backgroundImage=`url("${c.getAttribute("data-background-image")}")`,c.removeAttribute("data-background-image"),r.unobserve(c)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&b.each("script[data-pjax]",Tt),mt(document.title),be(),kt(),At(),St(),import("./post-IDK3YNFG.js").then(({postBeauty:s})=>{s()});let o=document.getElementById("copyright");if(o){let s=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting&&s.disconnect()})},{root:null,threshold:.2});s.observe(o)}Ge(),Et(),se.player.load(LOCAL.audio||v.audio||{}),I.hide(100),setTimeout(()=>{yt()},500),Ht()};m();function j(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var Jt=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function Fe(e,t,o,s){Jt(t,r=>{j(e,i=>{i.addEventListener(r,o,s)})})}function X(e,t,o={}){Jt(t,s=>{let r=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});j(e,i=>{i.dispatchEvent(r)})})}function Xt(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,r=document.createElement("script");return t.match("document.write")?!1:(r.type="text/javascript",r.id=e.id,o!==""&&(r.src=o,r.async=!1),t!==""&&r.appendChild(document.createTextNode(t)),s.appendChild(r),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(r)&&s.removeChild(r),!0)}function ho(e){e.tagName.toLowerCase()==="script"&&Xt(e),j(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),Xt(o))})}function fo(e,t,o,s=document){e.forEach(r=>{j(s.querySelectorAll(r),t,o)})}var xe=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function Kt(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function po(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function Zt(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function go({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:r=!0,scrollTo:i=0,scrollRestoration:c=!0,cacheBust:n=!0,timeout:a=0,currentUrlFullReload:d=!1}={}){let l={elements:e,selectors:t,switches:o,switchesOptions:s,history:r,scrollTo:i,scrollRestoration:c,cacheBust:n,timeout:a,currentUrlFullReload:d};return l.switches.head||(l.switches.head=Zt),l.switches.body||(l.switches.body=Zt),l}var _e="data-pjax-state";function Vt(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=vo(e,t);if(s){e.setAttribute(_e,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(_e,"reload"),this.reload();return}e.setAttribute(_e,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function vo(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function wo(e){e.setAttribute(_e,""),Fe(e,"click",t=>Vt.call(this,e,t)),Fe(e,"keyup",t=>{let o=t;o.keyCode===13&&Vt.call(this,e,o)})}function yo(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){X(document,"pjax:complete pjax:error",s);return}let r=window.history.state||{};window.history.replaceState({url:r.url||window.location.href,title:r.title||document.title,uid:r.uid||xe(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let i=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=i;let n=c.hash;c.href=o,n&&!c.hash&&(c.hash=n,o=c.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(a){return X(document,"pjax:error",s),console.error("Pjax switch fail: ",a),this.latestChance(o)}}function bo(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Eo(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),r=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+r+t+"="+o}function Lo(e,t={},o){let s=t.requestOptions||{},r=(s.requestMethod||"GET").toUpperCase(),i=s.requestParams||null,c=null,n=new XMLHttpRequest,a=t.timeout;if(n.onreadystatechange=()=>{n.readyState===4&&(n.status===200?o(n.responseText,n,e,t):n.status!==0&&o(null,n,e,t))},n.onerror=d=>{console.error(d),o(null,n,e,t)},n.ontimeout=()=>{o(null,n,e,t)},i&&i.length){let d=i.map(l=>l.name+"="+l.value).join("&");switch(r){case"GET":e=e.split("?")[0],e+="?"+d;break;case"POST":c=d;break}}return t.cacheBust&&(e=Eo(e,"t",Date.now())),n.open(r,e,!0),n.timeout=a,n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-PJAX","true"),n.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),n.send(c),n}function Co(e,t,o,s,r,i){let c=[];o.forEach(n=>{let a=s.querySelectorAll(n),d=r.querySelectorAll(n);if(a.length!==d.length)throw new Error(`DOM doesn't look the same on new loaded page: '${n}' - new ${a.length}, old ${d.length}`);j(a,(l,p)=>{let u=d[p],g=e[n]?e[n].bind(this,u,l,i,t[n]):Kt.bind(this,u,l,i);c.push(g)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(n=>{n()})}function To(e,t,o){for(let s of t){let r=e.querySelectorAll(s);for(let i=0;i<r.length;i++)if(r[i].contains(o))return!0}return!1}var q=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=go(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=xe(),this.parseDOM(document),Fe(window,"popstate",o=>{let s=o;if(s.state){let r={...this.options};r.url=s.state.url,r.title=s.state.title,r.history=!1,r.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?r.backward=!0:r.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,r)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){j(this.getElements(t),bo,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return fo.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,r){return Co.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,r)}latestChance(t){window.location=t}onSwitch(){X(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){X(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),r=/<html[^>]+>/gi,i=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(r);if(c&&c.length&&(c=c[0].match(i),c.length&&(c.shift(),c.forEach(n=>{let a=n.trim().split("=");a.length===1?s.documentElement.setAttribute(a[0],"true"):s.documentElement.setAttribute(a[0],a[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&To(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),X(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(i=>{j(document.querySelectorAll(i),c=>{ho(c)})});let r=this.state;if(!((t=r.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=xe(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=xe(),window.history.pushState({url:r.href,title:r.options.title,uid:this.maxUid,scrollPos:[0,0]},r.options.title,r.href)),this.forEachSelectors(i=>{this.parseDOM(i)},this),X(document,"pjax:complete pjax:success",r.options),!((o=r.options)===null||o===void 0)&&o.history){let i=document.createElement("a");if(i.href=this.state.href,i.hash){let c=i.hash.slice(1);c=decodeURIComponent(c);let n=0,a=document.getElementById(c)||document.getElementsByName(c)[0];if(a&&a.offsetParent)do n+=a.offsetTop,a=a.offsetParent;while(a);window.scrollTo(0,n)}else r.options.scrollTo!==!1&&(Array.isArray(r.options.scrollTo)?window.scrollTo(r.options.scrollTo[0],r.options.scrollTo[1]):window.scrollTo(0,r.options.scrollTo))}else!((s=r.options)===null||s===void 0)&&s.scrollRestoration&&r.options.scrollPos&&window.scrollTo(r.options.scrollPos[0],r.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};q.prototype.attachLink=wo;q.prototype.doRequest=Lo;q.prototype.handleResponse=yo;q.switches={innerHTML:po,outerHTML:Kt};m();function Qt(){function e(){let t,o=document.querySelector(".theme").querySelector(".ic"),s=$(oe,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),r=()=>{E(s,{delay:2500,opacity:0},()=>{oe.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),x("dark"),ie.set("theme","dark"),r()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),x(),ie.set("theme","light"),r()}),E(s,1,()=>{setTimeout(t,210)},()=>{Q(s,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var Ao=async()=>{Qt(),Re(),ut(new q({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),v.quicklink.ignores=LOCAL.ignores,import("./quicklink-OZFTTTMB.js").then(({listen:e})=>{e(v.quicklink)}),It(),qt(),document.querySelector("li.item.search > i").addEventListener("click",()=>{v.search!==null&&(Ie||wt($(oe,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-YPXJJIIM.js").then(({algoliaSearch:e})=>{e(ot)}),b.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",E(Ie,"shrinkIn",()=>{document.querySelector(".search-input").focus()})})}))},{once:!0,capture:!0}),window.addEventListener("scroll",Ot,{passive:!0}),window.addEventListener("resize",be,{passive:!0}),window.addEventListener("pjax:send",Yt,{passive:!0}),window.addEventListener("pjax:success",ze,{passive:!0}),window.addEventListener("beforeunload",()=>{ye()}),await ze(1)};Ct();window.addEventListener("DOMContentLoaded",Ao,{passive:!0});console.log("%c Theme.ShokaX v"+v.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
