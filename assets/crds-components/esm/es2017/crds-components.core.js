/*!
 * CrdsComponents: Core, es2017
 * Built with http://stenciljs.com
 */
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function n(e,t){let n,o,i=null,l=!1,s=!1,r=arguments.length;for(;r-- >2;)w.push(arguments[r]);for(;w.length>0;){let t=w.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)w.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&l?i[i.length-1].vtext+=t:null===i?i=[s?{vtext:t}:t]:i.push(s?{vtext:t}:t),l=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&w.push(r);t.class=w.join(" "),w.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],M):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,i:!1}}function o(e,t,n={}){let o=Array.isArray(t)?t:[t];const l=e.document,s=n.hydratedCssClass||"hydrated",r=n.exclude;r&&(o=o.filter(e=>-1===r.indexOf(e[0])));const c=o.map(e=>e[0]);if(c.length>0){const e=l.createElement("style");e.innerHTML=c.join()+"{visibility:hidden}."+s+"{visibility:inherit}",e.setAttribute("data-styles",""),l.head.insertBefore(e,l.head.firstChild)}const a=n.namespace||"CrdsComponents";return L||(L=!0,function f(e,t,n){(e["s-apps"]=e["s-apps"]||[]).push(t),n.componentOnReady||(n.componentOnReady=function t(){function n(t){if(o.nodeName.indexOf("-")>0){for(var n=e["s-apps"],i=0,l=0;l<n.length;l++)if(e[n[l]].componentOnReady){if(e[n[l]].componentOnReady(o,t))return;i++}if(i<n.length)return void(e["s-cr"]=e["s-cr"]||[]).push([o,t])}t(null)}var o=this;return e.Promise?new e.Promise(n):{then:n}})}(e,a,e.HTMLElement.prototype)),applyPolyfills(e).then(()=>{if(!P[a]){const t={},r=n.resourcesUrl||"./";i(a,t,e,l,r,s),P[a]=x(a,t,e,l,r,s,o)}(function t(){o.forEach(t=>{let n;!function o(e){return/\{\s*\[native code\]\s*\}/.test(""+e)}(e.customElements.define)?(n=function(t){return e.HTMLElement.call(this,t)}).prototype=Object.create(e.HTMLElement.prototype,{constructor:{value:n,configurable:!0}}):n=new Function("w","return class extends w.HTMLElement{}")(e),P[a].l(function i(e){const t=$(e),n=t.s,o=u(e[0]);return t.s=(({mode:e,scoped:t})=>(function i(e,t,n){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
`./build/${e}${t?".sc":""}.entry.js`).then(e=>e[n])})("string"==typeof n?n:n[e],t,o)),t}(t),n)})})()})}var i=function(){};function applyPolyfills(){return Promise.resolve()}const l="$",s={},r={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},c=(t,n,o,i)=>{let s=o.t+l,r=o[s];if((2===o.u||1===o.u&&!t.v.p)&&(i["s-sc"]=r?e(o,i.mode):e(o)),r){let e=n.m.head;if(n.p)if(1===o.u)e=i.shadowRoot;else{const t=i.getRootNode();t.host&&(e=t)}let l=t.M.get(e);if(l||t.M.set(e,l={}),!l[s]){let t;{t=r.content.cloneNode(!0),l[s]=!0;const o=e.querySelectorAll("[data-styles]");n.g(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},a=e=>null!=e,f=e=>e.toLowerCase(),u=e=>f(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""),p=(e,t,n,o,i,l)=>{if("class"!==n||l)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!l&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.k(t);o&&o.C&&o.C[n]?v(t,n,i):"ref"!==n&&(v(t,n,null==i?"":i),null!=i&&!1!==i||e.v.A(t,n))}else null!=i&&"key"!==n?((e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS("http://www.w3.org/1999/xlink",f(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS("http://www.w3.org/1999/xlink",f(t),n):e.setAttribute(t,n))})(t,n,i):(l||e.v.j(t,n)&&(null==i||!1===i))&&e.v.A(t,n);else n=f(n)in t?f(n.substring(2)):f(n[2])+n.substring(3),i?i!==o&&e.v._(t,n,i):e.v.S(t,n);else if(o!==i){const e=d(o),n=d(i),l=e.filter(e=>!n.includes(e)),s=d(t.className).filter(e=>!l.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},d=e=>null==e||""===e?[]:e.trim().split(/\s+/),v=(e,t,n)=>{try{e[t]=n}catch(e){}},y=(e,t,n,o,i)=>{const l=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||s,c=n.vattrs||s;for(i in r)c&&null!=c[i]||null==r[i]||p(e,l,i,r[i],void 0,o,n.i);for(i in c)i in r&&c[i]===("value"===i||"checked"===i?l[i]:r[i])||p(e,l,i,r[i],c[i],o,n.i)};let m=!1;const b=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{b(e,t)}))},h=(e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),l=!1!==e.asyncQueue,s=Promise.resolve(),r=[],c=[],a=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(v))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},v=()=>{n++,p(c);const t=l?i()+7*Math.ceil(n*(1/22)):Infinity;d(a,t),d(f,t),a.length>0&&(f.push(...a),a.length=0),(o=c.length+a.length+f.length>0)?e.raf(v):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(c),write:u(a)}}},w=[],M={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},$=(e,t,n)=>{const[o,i,,l,s,r]=e,c={color:{O:"color"}};if(l)for(t=0;t<l.length;t++)c[(n=l[t])[0]]={W:n[1],N:!!n[2],O:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,P:n[4]};return{t:o,s:i,C:Object.assign({},c),u:s,L:r?r.map(g):void 0}},g=e=>({R:e[0],T:e[1],D:!!e[2],H:!!e[3],q:!!e[4]}),k=(e,t)=>a(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,C=(e,t,n)=>{e.B.add(t),e.F.has(t)||(e.F.set(t,!0),e.I?e.queue.write(()=>E(e,t,n)):e.queue.tick(()=>E(e,t,n)))},E=async(e,o,i,l,s,r)=>{if(e.F.delete(o),!e.U.has(o)){if(!(s=e.Y.get(o))){if((r=e.Z.get(o))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{E(e,o,i)});if(s=S(e,o,e.G.get(o),i))try{s.componentWillLoad&&await s.componentWillLoad()}catch(t){e.J(t,3,o)}}((e,o,i,l)=>{try{const s=o.K.host,r=o.K.encapsulation,c="shadow"===r&&e.v.p;let a,f=i;if(c&&(f=i.shadowRoot),!i["s-rn"]){e.V(e,e.v,o,i);const n=i["s-sc"];n&&(e.v.X(i,t(n,!0)),"scoped"===r&&e.v.X(i,t(n)))}if(l.render||l.hostData||s||a){e.ee=!0;const t=l.render&&l.render();let o;e.ee=!1;const s=n(null,o,t),a=e.te.get(i)||{};a.o=f,e.te.set(i,e.render(i,a,s,c,r))}i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(e=>e()),i["s-rc"]=null)}catch(t){e.ee=!1,e.J(t,8,i,!0)}})(e,e.k(o),o,s),o["s-init"]()}},A=(e,t,n,o,i,l,s,r,c)=>{if(t.type||t.state){const f=e.ne.get(n);t.state||(!t.attr||void 0!==f[i]&&""!==f[i]||(r=l&&l.oe)&&a(c=r[t.attr])&&(f[i]=k(t.type,c)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=k(t.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),_(o,i,function f(t){return(t=e.ne.get(e.ie.get(this)))&&t[i]},function u(n,o){(o=e.ie.get(this))&&(t.state||t.mutable)&&j(e,o,i,n,s)})}},j=(e,t,n,o,i,l,s)=>{(s=e.ne.get(t))||e.ne.set(t,s={}),o!==s[n]&&(s[n]=o,e.Y.get(t)&&!e.ee&&t["s-rn"]&&C(e,t,i))},_=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},S=(e,t,n,o,i,l,s,r)=>{try{i=new(l=e.k(t).K),((e,t,n,o,i,l)=>{e.ie.set(o,n),e.ne.has(n)||e.ne.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{A(e,s,n,o,t,i,l)})})(e,l,t,i,n,o);try{if(s=e.le.get(t)){for(r=0;r<s.length;r+=2)i[s[r]](s[r+1]);e.le.delete(t)}}catch(n){e.J(n,2,t)}}catch(n){i={},e.J(n,7,t,!0)}return e.Y.set(t,i),i},O=(e,t,n,o,i,l)=>{if(e.B.delete(t),(i=e.Z.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.Z.delete(t)),e.se.length&&!e.B.size)for(;l=e.se.shift();)l()},W=(e,t,n,o)=>{t.forEach(([t,i])=>{3&i.W&&_(n,t,function n(){return(e.ne.get(this)||{})[t]},function n(l){j(e,this,t,k(i.P,l),o)})})},N=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.re.has(n)||(e.re.set(n,!0),function o(e,t){const n=e.k(t);n.L&&n.L.forEach(n=>{n.D||e.v._(t,n.R,function o(e,t,n,i){return o=>{(i=e.Y.get(t))?i[n](o):((i=e.le.get(t)||[]).push(n,o),e.le.set(t,i))}}(e,t,n.T),n.q,n.H)})}(e,n)),e.U.delete(n),e.ce.has(n)||(e.ae=!0,e.B.add(n),e.ce.set(n,!0),((e,t,n)=>{for(n=t;n=e.v.fe(n);)if(e.ue(n)){e.pe.has(t)||(e.Z.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.G.set(n,((e,t,n,o,i)=>(n.mode||(n.mode=e.de(n)),n["s-cr"]||e.ve(n,"ssrv")||e.p&&1===t.u||(n["s-cr"]=e.ye(""),n["s-cr"]["s-cn"]=!0,e.g(n,n["s-cr"],e.me(n)[0])),1===t.u&&e.p&&!n.shadowRoot&&e.be(n,{mode:"open"}),o={oe:{}},t.C&&Object.keys(t.C).forEach(l=>{(i=t.C[l].O)&&(o.oe[i]=e.ve(n,i))}),o))(e.v,t,n)),e.he(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.we&&((e,t)=>{for(;t;){if(!e.Me(t))return 9!==e.$e(t);t=e.Me(t)}})(e.v,t)&&(e.U.set(t,!0),O(e,t),b(e.te.get(t),!0),e.v.S(t),e.re.delete(t),[e.Z,e.ge,e.G].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,i,l)=>{if(e.Y.get(t)&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.pe.set(t,!0),e.ke.has(t)||(e.ke.set(t,!0),t["s-ld"]=void 0,e.v.X(t,n));try{b(e.te.get(t)),(l=e.ge.get(t))&&(l.forEach(e=>e(t)),e.ge.delete(t))}catch(n){e.J(n,4,t)}O(e,t)}})(e,this,o)},n.forceUpdate=function(){C(e,this,i)},t.C){const o=Object.entries(t.C);{let e={};o.forEach(([t,{O:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[f(n)];i&&(t[i]=o)})(e,this,t,o)}}W(e,o,n,i)}},x=(e,t,o,i,s,u)=>{const p=o.performance,d={html:{}},v=o[e]=o[e]||{},b=((e,t,n)=>{const o=new WeakMap,i={m:n,p:!!n.documentElement.attachShadow,Ce:!1,$e:e=>e.nodeType,Ee:e=>n.createElement(e),Ae:(e,t)=>n.createElementNS(e,t),ye:e=>n.createTextNode(e),je:e=>n.createComment(e),g:(e,t,n)=>e.insertBefore(t,n),_e:e=>e.remove(),Se:(e,t)=>e.appendChild(t),X:(e,t)=>{e.classList.add(t)},me:e=>e.childNodes,Me:e=>e.parentNode,Oe:e=>e.nextSibling,We:e=>e.previousSibling,Ne:e=>f(e.nodeName),xe:e=>e.textContent,Pe:(e,t)=>e.textContent=t,ve:(e,t)=>e.getAttribute(t),Le:(e,t,n)=>e.setAttribute(t,n),A:(e,t)=>e.removeAttribute(t),j:(e,t)=>e.hasAttribute(t),de:t=>t.getAttribute("mode")||(e.Context||{}).mode,Re:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.fe(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,_:(t,n,l,s,c,a,f,u,p)=>{let d=t,v=l,y=o.get(t);p=n,y&&y[p]&&y[p](),"string"==typeof a?d=i.Re(t,a):"object"==typeof a?d=a:(u=n.split(":")).length>1&&(d=i.Re(t,u[0]),n=u[1]),d&&((u=n.split(".")).length>1&&(n=u[0],v=(e=>{e.keyCode===r[u[1]]&&l(e)})),f=i.Ce?{capture:!!s,passive:!!c}:!!s,e.ael(d,n,v,f),y||o.set(t,y={}),y[p]=(()=>{d&&e.rel(d,n,v,f),y[p]=null}))},S:(e,t,n)=>{(n=o.get(e))&&(t?n[t]&&n[t]():Object.keys(n).forEach(e=>{n[e]&&n[e]()}))},Te:(e,n,o,i)=>(i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i),fe:(e,t)=>(t=i.Me(e))&&11===i.$e(t)?t.host:t,De:(e,t,n,o)=>e.setAttributeNS(t,n,o),be:(e,t)=>e.attachShadow(t)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.Ce=!0}))}catch(e){}return i})(v,o,i),w=b.m.documentElement,M=o["s-defined"]=o["s-defined"]||{},$={v:b,l:(e,t)=>{o.customElements.get(e.t)||(N($,d[e.t]=e,t.prototype,u,p),t.observedAttributes=Object.values(e.C).map(e=>e.O).filter(e=>!!e),o.customElements.define(e.t,t))},k:e=>d[b.Ne(e)],He:e=>t[e],isClient:!0,ue:e=>!(!M[b.Ne(e)]&&!$.k(e)),J:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=h(v,o),he:(e,t)=>{{const n=!b.p,o={mode:t.mode,scoped:n};e.s(o).then(n=>{try{e.K=n,function o(e,t,n,i,s){if(i){const n=t.t+(s||l);if(!t[n]){const o=e.Ee("template");t[n]=o,o.innerHTML=`<style>${i}</style>`,e.Se(e.m.head,o)}}}(b,e,e.u,n.style,n.styleMode)}catch(t){console.error(t),e.K=class{}}C($,t,p)})}},ee:!1,I:!1,we:!1,V:c,Z:new WeakMap,M:new WeakMap,ce:new WeakMap,re:new WeakMap,ke:new WeakMap,pe:new WeakMap,ie:new WeakMap,G:new WeakMap,Y:new WeakMap,U:new WeakMap,F:new WeakMap,ge:new WeakMap,le:new WeakMap,te:new WeakMap,ne:new WeakMap,B:new Set,se:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.resourcesUrl=t.publicPath=s,t.enableListener=((e,t,n,o,i)=>(function l(e,t,n,o,i,s){if(t){const l=e.ie.get(t),r=e.k(l);if(r&&r.L)if(o){const o=r.L.find(e=>e.R===n);o&&e.v._(l,n,e=>t[o.T](e),o.q,void 0===s?o.H:!!s,i)}else e.v.S(l,n)}})($,e,t,n,o,i)),v.h=n,v.Context=t,v.onReady=(()=>new Promise(e=>$.queue.write(()=>$.B.size?$.se.push(e):e()))),$.render=((e,t)=>{let n,o,i,l,s,r,c;const f=(i,p,d,v,b,h,w,M,$)=>{if(M=p.vchildren[d],n||(l=!0,"slot"===M.vtag&&(o&&t.X(v,o+"-s"),M.vchildren?M.qe=!0:M.Be=!0)),a(M.vtext))M.o=t.ye(M.vtext);else if(M.Be)M.o=t.ye("");else{if(h=M.o=m||"svg"===M.vtag?t.Ae("http://www.w3.org/2000/svg",M.vtag):t.Ee(M.qe?"slot-fb":M.vtag),e.ue(h)&&e.pe.delete(c),m="svg"===M.vtag||"foreignObject"!==M.vtag&&m,y(e,null,M,m),a(o)&&h["s-si"]!==o&&t.X(h,h["s-si"]=o),M.vchildren)for(b=0;b<M.vchildren.length;++b)(w=f(i,M,b,h))&&t.Se(h,w);"svg"===M.vtag&&(m=!1)}return M.o["s-hn"]=r,(M.qe||M.Be)&&(M.o["s-sr"]=!0,M.o["s-cr"]=s,M.o["s-sn"]=M.vname||"",($=i&&i.vchildren&&i.vchildren[d])&&$.vtag===M.vtag&&i.o&&u(i.o)),M.o},u=(n,o,i,s)=>{e.we=!0;const c=t.me(n);for(i=c.length-1;i>=0;i--)(s=c[i])["s-hn"]!==r&&s["s-ol"]&&(t._e(s),t.g(h(s),s,b(s)),t._e(s["s-ol"]),s["s-ol"]=null,l=!0),o&&u(s,o);e.we=!1},p=(e,n,o,i,l,s,c,u)=>{const p=e["s-cr"];for((c=p&&t.Me(p)||e).shadowRoot&&t.Ne(c)===r&&(c=c.shadowRoot);l<=s;++l)i[l]&&(u=a(i[l].vtext)?t.ye(i[l].vtext):f(null,o,l,e))&&(i[l].o=u,t.g(c,u,b(n)))},d=(e,n,o,l)=>{for(;n<=o;++n)a(e[n])&&(l=e[n].o,i=!0,l["s-ol"]?t._e(l["s-ol"]):u(l,!0),t._e(l))},v=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),b=e=>e&&e["s-ol"]?e["s-ol"]:e,h=e=>t.Me(e["s-ol"]?e["s-ol"]:e),w=(n,o,i)=>{const l=o.o=n.o,s=n.vchildren,r=o.vchildren;m=o.o&&a(t.fe(o.o))&&void 0!==o.o.ownerSVGElement,m="svg"===o.vtag||"foreignObject"!==o.vtag&&m,a(o.vtext)?(i=l["s-cr"])?t.Pe(t.Me(i),o.vtext):n.vtext!==o.vtext&&t.Pe(l,o.vtext):("slot"!==o.vtag&&y(e,n,o,m),a(s)&&a(r)?((e,n,o,i,l,s,r,c)=>{let y=0,m=0,M=n.length-1,$=n[0],g=n[M],k=i.length-1,C=i[0],E=i[k];for(;y<=M&&m<=k;)if(null==$)$=n[++y];else if(null==g)g=n[--M];else if(null==C)C=i[++m];else if(null==E)E=i[--k];else if(v($,C))w($,C),$=n[++y],C=i[++m];else if(v(g,E))w(g,E),g=n[--M],E=i[--k];else if(v($,E))"slot"!==$.vtag&&"slot"!==E.vtag||u(t.Me($.o)),w($,E),t.g(e,$.o,t.Oe(g.o)),$=n[++y],E=i[--k];else if(v(g,C))"slot"!==$.vtag&&"slot"!==E.vtag||u(t.Me(g.o)),w(g,C),t.g(e,g.o,$.o),g=n[--M],C=i[++m];else{for(l=null,s=y;s<=M;++s)if(n[s]&&a(n[s].vkey)&&n[s].vkey===C.vkey){l=s;break}a(l)?((c=n[l]).vtag!==C.vtag?r=f(n&&n[m],o,l,e):(w(c,C),n[l]=void 0,r=c.o),C=i[++m]):(r=f(n&&n[m],o,m,e),C=i[++m]),r&&t.g(h($.o),r,b($.o))}y>M?p(e,null==i[k+1]?null:i[k+1].o,o,i,m,k):m>k&&d(n,y,M)})(l,s,o,r):a(r)?(a(n.vtext)&&t.Pe(l,""),p(l,null,o,r,0,r.length-1)):a(s)&&d(s,0,s.length-1)),m&&"svg"===o.vtag&&(m=!1)},M=(e,n,o,i,l,s,r,c)=>{for(i=0,l=(o=t.me(e)).length;i<l;i++)if(n=o[i],1===t.$e(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<l;s++)if(o[s]["s-hn"]!==n["s-hn"])if(c=t.$e(o[s]),""!==r){if(1===c&&r===t.ve(o[s],"slot")){n.hidden=!0;break}}else if(1===c||3===c&&""!==t.xe(o[s]).trim()){n.hidden=!0;break}M(n)}},$=[],g=(e,n,o,l,s,r,c,a,f,u)=>{for(s=0,r=(n=t.me(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(a=t.me(t.Me(l)),f=o["s-sn"],c=a.length-1;c>=0;c--)(l=a[c])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.$e(l))||8===u)&&""===f||1===u&&null===t.ve(l,"slot")&&""===f||1===u&&t.ve(l,"slot")===f)&&($.some(e=>e.Fe===l)||(i=!0,l["s-sn"]=f,$.push({Ie:o,Fe:l})));1===t.$e(o)&&g(o)}};return(a,f,u,p,d,v,y,m,b,h,k,C)=>{if(c=a,r=t.Ne(c),s=c["s-cr"],n=p,o=c["s-sc"],l=i=!1,w(f,u),l){for(g(u.o),y=0;y<$.length;y++)(m=$[y]).Fe["s-ol"]||((b=t.ye(""))["s-nr"]=m.Fe,t.g(t.Me(m.Fe),m.Fe["s-ol"]=b,m.Fe));for(e.we=!0,y=0;y<$.length;y++){for(m=$[y],k=t.Me(m.Ie),C=t.Oe(m.Ie),b=m.Fe["s-ol"];b=t.We(b);)if((h=b["s-nr"])&&h&&h["s-sn"]===m.Fe["s-sn"]&&k===t.Me(h)&&(h=t.Oe(h))&&h&&!h["s-nr"]){C=h;break}(!C&&k!==t.Me(m.Fe)||t.Oe(m.Fe)!==C)&&m.Fe!==C&&(t._e(m.Fe),t.g(k,m.Fe,C))}e.we=!1}return i&&M(u.o),$.length=0,u}})($,b),w["s-ld"]=[],w["s-rn"]=!0,w["s-init"]=(()=>{$.pe.set(w,v.loaded=$.I=!0),b.Te(o,"appload",{detail:{namespace:e}})}),((e,t,n,o,i,l)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.k(t);if(o)if(e.pe.has(t))n(t);else{const o=e.ge.get(t)||[];o.push(n),e.ge.set(t,o)}return!!o}),i){for(l=i.length-1;l>=0;l--)t.componentOnReady(i[l][0],i[l][1])&&i.splice(l,1);for(l=0;l<o.length;l++)if(!n[o[l]].componentOnReady)return;for(l=0;l<i.length;l++)i[l][1](null);i.length=0}})($,v,o,o["s-apps"],o["s-cr"]),v.initialized=!0,$},P={};let L=!1;export{o as defineCustomElement,n as h};