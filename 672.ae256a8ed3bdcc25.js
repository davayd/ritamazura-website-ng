(self.webpackChunkritamazura_website_ng=self.webpackChunkritamazura_website_ng||[]).push([[672],{6672:(F,B,L)=>{"use strict";L.r(B),L.d(B,{PhotographySessionModule:()=>Ct});var C=L(9808),A=L(2432),P=L(7579),x=L(2722),o=L(1223),p=L(6893);const f=["ngx-masonry",""],E=["*"];let n,a=(()=>{class l{constructor(s,g){this.platformId=s,this._element=g,this.updateLayout=!1,this.ordered=!1,this.layoutComplete=new o.vpe,this.removeComplete=new o.vpe,this.itemsLoaded=new o.vpe,this.pendingItems=[]}ngOnInit(){(0,C.NF)(this.platformId)&&void 0===n&&(n=p),this.options||(this.options={}),this.options.itemSelector||(this.options.itemSelector="[ngxMasonryItem], ngxMasonryItem"),this.options.transitionDuration="0s",(0,C.NF)(this.platformId)&&null!=n&&(this.masonryInstance=new n(this._element.nativeElement,this.options),this.masonryInstance.on("layoutComplete",s=>{this.layoutComplete.emit(s)}),this.masonryInstance.on("removeComplete",s=>{this.removeComplete.emit(s)}),this.masonryInstance.items=[])}ngOnChanges(s){s.updateLayout&&(s.updateLayout.firstChange||this.layout())}ngOnDestroy(){this.masonryInstance&&this.masonryInstance.destroy()}layout(){setTimeout(()=>{this.masonryInstance.layout()})}reloadItems(){setTimeout(()=>{this.masonryInstance.reloadItems()})}destroy(){setTimeout(()=>{this.masonryInstance.destroy()})}addPendingItem(s){this.pendingItems.push(s)}add(s){if(this.ordered){for(const[g,O]of this.pendingItems.entries())if(O){if(!O.images||0!==O.images.size)return;this.pendingItems[g]=void 0,this.itemLoaded(O),g+1===this.pendingItems.length&&(this.itemsLoaded.emit(this.pendingItems.length),this.pendingItems=[])}}else this.itemLoaded(s)}itemLoaded(s){(0,C.NF)(this.platformId)&&(s.prepend?this.masonryInstance.prepended(s.element.nativeElement):this.masonryInstance.appended(s.element.nativeElement),1===this.masonryInstance.items.length&&this.masonryInstance.layout(),s.playAnimation(!0))}remove(s){(0,C.NF)(this.platformId)&&(this.masonryInstance.remove(s),this.layout())}}return l.\u0275fac=function(s){return new(s||l)(o.Y36(o.Lbi),o.Y36(o.SBq))},l.\u0275cmp=o.Xpm({type:l,selectors:[["","ngx-masonry",""],["ngx-masonry"]],inputs:{options:"options",updateLayout:"updateLayout",ordered:"ordered"},outputs:{layoutComplete:"layoutComplete",removeComplete:"removeComplete",itemsLoaded:"itemsLoaded"},features:[o.TTD],attrs:f,ngContentSelectors:E,decls:1,vars:0,template:function(s,g){1&s&&(o.F$t(),o.Hsn(0))},styles:["[_nghost-%COMP%]{display:block}"]}),l})();var h=Object.assign||function(l){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var g in s)Object.prototype.hasOwnProperty.call(s,g)&&(l[g]=s[g])}return l},y=function(c){return"IMG"===c.tagName},d=function(c){return c&&1===c.nodeType},r=function(c){return".svg"===(c.currentSrc||c.src).substr(-4).toLowerCase()},z=function(c){try{return Array.isArray(c)?c.filter(y):function(c){return NodeList.prototype.isPrototypeOf(c)}(c)?[].slice.call(c).filter(y):d(c)?[c].filter(y):"string"==typeof c?[].slice.call(document.querySelectorAll(c)).filter(y):[]}catch(s){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},v=function(c){var s=document.createElement("div");return s.classList.add("medium-zoom-overlay"),s.style.background=c,s},H=function(c){var s=c.getBoundingClientRect(),g=s.top,O=s.left,et=s.width,dt=s.height,Z=c.cloneNode(),ut=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,nt=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return Z.removeAttribute("id"),Z.style.position="absolute",Z.style.top=g+ut+"px",Z.style.left=O+nt+"px",Z.style.width=et+"px",Z.style.height=dt+"px",Z.style.transform="",Z},t=function(c,s){var g=h({bubbles:!1,cancelable:!1,detail:void 0},s);if("function"==typeof window.CustomEvent)return new CustomEvent(c,g);var O=document.createEvent("CustomEvent");return O.initCustomEvent(c,g.bubbles,g.cancelable,g.detail),O};!function i(l,c){void 0===c&&(c={});var s=c.insertAt;if(l&&"undefined"!=typeof document){var g=document.head||document.getElementsByTagName("head")[0],O=document.createElement("style");O.type="text/css","top"===s&&g.firstChild?g.insertBefore(O,g.firstChild):g.appendChild(O),O.styleSheet?O.styleSheet.cssText=l:O.appendChild(document.createTextNode(l))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");const b=function l(c){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},g=window.Promise||function(_){function I(){}_(I,I)},O=function(_){var I=_.target;I!==rt?-1!==K.indexOf(I)&&ct({target:I}):G()},et=function(){if(!q&&u.original){var _=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(ft-_)>M.scrollOffset&&setTimeout(G,150)}},dt=function(_){var I=_.key||_.keyCode;("Escape"===I||"Esc"===I||27===I)&&G()},Z=function(){var _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},I=_;if(_.background&&(rt.style.background=_.background),_.container&&_.container instanceof Object&&(I.container=h({},M.container,_.container)),_.template){var W=d(_.template)?_.template:document.querySelector(_.template);I.template=W}return M=h({},M,I),K.forEach(function(D){D.dispatchEvent(t("medium-zoom:update",{detail:{zoom:N}}))}),N},ut=function(){var _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l(h({},M,_))},nt=function(){for(var _=arguments.length,I=Array(_),W=0;W<_;W++)I[W]=arguments[W];var D=I.reduce(function(S,j){return[].concat(S,z(j))},[]);return D.filter(function(S){return-1===K.indexOf(S)}).forEach(function(S){K.push(S),S.classList.add("medium-zoom-image")}),ot.forEach(function(S){var j=S.type,Q=S.listener,tt=S.options;D.forEach(function(k){k.addEventListener(j,Q,tt)})}),N},It=function(){for(var _=arguments.length,I=Array(_),W=0;W<_;W++)I[W]=arguments[W];u.zoomed&&G();var D=I.length>0?I.reduce(function(S,j){return[].concat(S,z(j))},[]):K;return D.forEach(function(S){S.classList.remove("medium-zoom-image"),S.dispatchEvent(t("medium-zoom:detach",{detail:{zoom:N}}))}),K=K.filter(function(S){return-1===D.indexOf(S)}),N},xt=function(_,I){var W=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return K.forEach(function(D){D.addEventListener("medium-zoom:"+_,I,W)}),ot.push({type:"medium-zoom:"+_,listener:I,options:W}),N},St=function(_,I){var W=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return K.forEach(function(D){D.removeEventListener("medium-zoom:"+_,I,W)}),ot=ot.filter(function(D){return!(D.type==="medium-zoom:"+_&&D.listener.toString()===I.toString())}),N},mt=function(){var _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},I=_.target,W=function(){var S={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},j=void 0,Q=void 0;if(M.container)if(M.container instanceof Object)j=(S=h({},S,M.container)).width-S.left-S.right-2*M.margin,Q=S.height-S.top-S.bottom-2*M.margin;else{var k=(d(M.container)?M.container:document.querySelector(M.container)).getBoundingClientRect();S=h({},S,{width:k.width,height:k.height,left:k.left,top:k.top})}j=j||S.width-2*M.margin,Q=Q||S.height-2*M.margin;var it=u.zoomedHd||u.original,wt=r(it)?j:it.naturalWidth||j,Pt=r(it)?Q:it.naturalHeight||Q,st=it.getBoundingClientRect(),Wt=st.top,Rt=st.left,pt=st.width,gt=st.height,Dt=Math.min(wt,j)/pt,Bt=Math.min(Pt,Q)/gt,lt=Math.min(Dt,Bt),vt="scale("+lt+") translate3d("+((j-pt)/2-Rt+M.margin+S.left)/lt+"px, "+((Q-gt)/2-Wt+M.margin+S.top)/lt+"px, 0)";u.zoomed.style.transform=vt,u.zoomedHd&&(u.zoomedHd.style.transform=vt)};return new g(function(D){if(I&&-1===K.indexOf(I))D(N);else if(u.zoomed)D(N);else{if(I)u.original=I;else{if(!(K.length>0))return void D(N);u.original=K[0]}if(u.original.dispatchEvent(t("medium-zoom:open",{detail:{zoom:N}})),ft=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,q=!0,u.zoomed=H(u.original),document.body.appendChild(rt),M.template){var Q=d(M.template)?M.template:document.querySelector(M.template);u.template=document.createElement("div"),u.template.appendChild(Q.content.cloneNode(!0)),document.body.appendChild(u.template)}if(document.body.appendChild(u.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),u.original.classList.add("medium-zoom-image--hidden"),u.zoomed.classList.add("medium-zoom-image--opened"),u.zoomed.addEventListener("click",G),u.zoomed.addEventListener("transitionend",function ht(){q=!1,u.zoomed.removeEventListener("transitionend",ht),u.original.dispatchEvent(t("medium-zoom:opened",{detail:{zoom:N}})),D(N)}),u.original.getAttribute("data-zoom-src")){u.zoomedHd=u.zoomed.cloneNode(),u.zoomedHd.removeAttribute("srcset"),u.zoomedHd.removeAttribute("sizes"),u.zoomedHd.src=u.zoomed.getAttribute("data-zoom-src"),u.zoomedHd.onerror=function(){clearInterval(tt),console.warn("Unable to reach the zoom image target "+u.zoomedHd.src),u.zoomedHd=null,W()};var tt=setInterval(function(){u.zoomedHd.complete&&(clearInterval(tt),u.zoomedHd.classList.add("medium-zoom-image--opened"),u.zoomedHd.addEventListener("click",G),document.body.appendChild(u.zoomedHd),W())},10)}else if(u.original.hasAttribute("srcset")){u.zoomedHd=u.zoomed.cloneNode(),u.zoomedHd.removeAttribute("sizes"),u.zoomedHd.removeAttribute("loading");var k=u.zoomedHd.addEventListener("load",function(){u.zoomedHd.removeEventListener("load",k),u.zoomedHd.classList.add("medium-zoom-image--opened"),u.zoomedHd.addEventListener("click",G),document.body.appendChild(u.zoomedHd),W()})}else W()}})},G=function(){return new g(function(_){!q&&u.original?(q=!0,document.body.classList.remove("medium-zoom--opened"),u.zoomed.style.transform="",u.zoomedHd&&(u.zoomedHd.style.transform=""),u.template&&(u.template.style.transition="opacity 150ms",u.template.style.opacity=0),u.original.dispatchEvent(t("medium-zoom:close",{detail:{zoom:N}})),u.zoomed.addEventListener("transitionend",function W(){u.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(u.zoomed),u.zoomedHd&&document.body.removeChild(u.zoomedHd),document.body.removeChild(rt),u.zoomed.classList.remove("medium-zoom-image--opened"),u.template&&document.body.removeChild(u.template),q=!1,u.zoomed.removeEventListener("transitionend",W),u.original.dispatchEvent(t("medium-zoom:closed",{detail:{zoom:N}})),u.original=null,u.zoomed=null,u.zoomedHd=null,u.template=null,_(N)})):_(N)})},ct=function(){var _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},I=_.target;return u.original?G():mt({target:I})},bt=function(){return M},Lt=function(){return K},Tt=function(){return u.original},K=[],ot=[],q=!1,ft=0,M=s,u={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(c)?M=c:(c||"string"==typeof c)&&nt(c),M=h({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},M);var rt=v(M.background);document.addEventListener("click",O),document.addEventListener("keyup",dt),document.addEventListener("scroll",et),window.addEventListener("resize",G);var N={open:mt,close:G,toggle:ct,update:Z,clone:ut,attach:nt,detach:It,on:xt,off:St,getOptions:bt,getImages:Lt,getZoomedImage:Tt};return N};var R=L(5538),w=L(1777);let Y=(()=>{class l{constructor(s,g,O,et){this.element=s,this.builder=g,this.parent=O,this.renderer=et,this.prepend=!1,this.animations={show:[(0,w.oB)({opacity:0}),(0,w.jt)("400ms ease-in",(0,w.oB)({opacity:1}))],hide:[(0,w.oB)({opacity:"*"}),(0,w.jt)("400ms ease-in",(0,w.oB)({opacity:0}))]}}ngOnInit(){var s;void 0!==(null===(s=this.parent.options)||void 0===s?void 0:s.animations)&&(this.animations=this.parent.options.animations),this.renderer.setStyle(this.element.nativeElement,"position","fixed"),this.renderer.setStyle(this.element.nativeElement,"right","-150vw"),this.parent.addPendingItem(this)}ngAfterViewInit(){const s=Array.from(this.element.nativeElement.getElementsByTagName("img"));if(this.images=new Set(s),0===s.length)setTimeout(()=>{this.parent.add(this)});else for(const g of s)g.hasAttribute("masonryLazy")?this.imageLoaded(g):(this.renderer.listen(g,"load",O=>{this.imageLoaded(g)}),this.renderer.listen(g,"error",O=>{this.imageLoaded(g)}))}ngOnDestroy(){this.images&&0===this.images.size&&this.element.nativeElement.parentNode&&(this.playAnimation(!1),this.parent.remove(this.element.nativeElement))}imageLoaded(s){!s||(this.images.delete(s),0===this.images.size&&this.parent.add(this))}playAnimation(s){const g=s?this.animations.show:this.animations.hide;g&&this.builder.build(g).create(this.element.nativeElement).play()}}return l.\u0275fac=function(s){return new(s||l)(o.Y36(o.SBq),o.Y36(w._j),o.Y36((0,o.Gpc)(()=>a)),o.Y36(o.Qsj))},l.\u0275dir=o.lG2({type:l,selectors:[["","ngxMasonryItem",""],["ngxMasonryItem"]],inputs:{prepend:"prepend"}}),l})();var V=L(7117);function X(l,c){if(1&l&&(o.TgZ(0,"div",10),o._UZ(1,"img",11),o.qZA()),2&l){const s=c.$implicit,g=o.oxw(2);o.xp6(1),o.Q6J("src",s.url,o.LSH),o.uIk("width",s.sizes[g.imageMode].width)("height",s.sizes[g.imageMode].height)("alt",s.label)}}function J(l,c){if(1&l&&(o.ynx(0),o.TgZ(1,"h2",3),o._uU(2),o.qZA(),o.TgZ(3,"div",4)(4,"ngx-masonry",5),o._UZ(5,"div",6)(6,"div",7),o.YNc(7,X,2,4,"div",8),o.qZA()(),o._UZ(8,"app-paginator",9),o.BQk()),2&l){const s=o.oxw();o.xp6(2),o.hij(" ",s.session.title," "),o.xp6(2),o.Q6J("options",s.masonryOptions),o.xp6(3),o.Q6J("ngForOf",s.session.photos),o.xp6(1),o.Q6J("session",s.session)}}function $(l,c){1&l&&o._uU(0," Not found ")}const yt=[{path:"",component:(()=>{class l{constructor(s,g){this.activateRoute=s,this.applicationStateService=g,this.masonryOptions={gutter:".gutter-sizer",columnWidth:".grid-sizer",itemSelector:".grid-item",percentPosition:!0,horizontalOrder:!0},this.isNotFound=!1,this.imageMode=this.applicationStateService.imageMode,this.destroy$=new P.x}ngOnInit(){this.activateRoute.paramMap.pipe((0,x.R)(this.destroy$)).subscribe(s=>{const g=s.get("id");this.session=this.applicationStateService.photographySessions.find(O=>O.transliteratedUrl===g),setTimeout(()=>{b("[data-zoomable]")})})}ngOnDestroy(){this.destroy$.next(),this.destroy$.unsubscribe()}ngAfterViewInit(){}}return l.\u0275fac=function(s){return new(s||l)(o.Y36(A.gz),o.Y36(R.V))},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-photography-session"]],viewQuery:function(s,g){if(1&s&&o.Gf(a,5),2&s){let O;o.iGM(O=o.CRH())&&(g.ngxMasonry=O.first)}},decls:4,vars:2,consts:[["id","main-wrapper",1,"container"],[4,"ngIf","ngIfElse"],["notFound",""],[1,"detail-title"],[1,"mb-4"],[3,"options"],[1,"grid-sizer"],[1,"gutter-sizer"],["ngxMasonryItem","","class","grid-item",4,"ngFor","ngForOf"],[3,"session"],["ngxMasonryItem","",1,"grid-item"],["data-zoomable","","masonryLazy","","loading","lazy",1,"w-full",3,"src"]],template:function(s,g){if(1&s&&(o.TgZ(0,"div",0),o.YNc(1,J,9,4,"ng-container",1),o.YNc(2,$,1,0,"ng-template",null,2,o.W1O),o.qZA()),2&s){const O=o.MAs(3);o.xp6(1),o.Q6J("ngIf",g.session)("ngIfElse",O)}},directives:[C.O5,a,C.sg,Y,V.J],styles:[".grid-item[_ngcontent-%COMP%]{margin-bottom:10px}.gutter-sizer[_ngcontent-%COMP%]{width:10px}@media screen and (max-width: 599.98px){.grid-sizer[_ngcontent-%COMP%], .grid-item[_ngcontent-%COMP%]{width:100%}}@media screen and (min-width: 600px){.grid-sizer[_ngcontent-%COMP%], .grid-item[_ngcontent-%COMP%]{width:calc(50% - 10px)}}"],changeDetection:0}),l})()}];let Et=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[[A.Bz.forChild(yt)],A.Bz]}),l})(),_t=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[[]]}),l})();var zt=L(3732);let Ct=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=o.oAB({type:l}),l.\u0275inj=o.cJS({imports:[[C.ez,Et,_t,zt.U]]}),l})()},1349:(F,B,L)=>{var C,A;!function(P,x){"use strict";C=function(){var x=function(){var o=window.Element.prototype;if(o.matches)return"matches";if(o.matchesSelector)return"matchesSelector";for(var p=["webkit","moz","ms","o"],f=0;f<p.length;f++){var n=p[f]+"MatchesSelector";if(o[n])return n}}();return function(p,f){return p[x](f)}},void 0!==(A=C.call(B,L,B,F))&&(F.exports=A)}(window)},9665:function(F,B,L){var A;"undefined"!=typeof window&&window,void 0!==(A=function(){"use strict";function P(){}var x=P.prototype;return x.on=function(o,p){if(o&&p){var f=this._events=this._events||{},E=f[o]=f[o]||[];return-1==E.indexOf(p)&&E.push(p),this}},x.once=function(o,p){if(o&&p){this.on(o,p);var f=this._onceEvents=this._onceEvents||{};return(f[o]=f[o]||{})[p]=!0,this}},x.off=function(o,p){var f=this._events&&this._events[o];if(f&&f.length){var E=f.indexOf(p);return-1!=E&&f.splice(E,1),this}},x.emitEvent=function(o,p){var f=this._events&&this._events[o];if(f&&f.length){f=f.slice(0),p=p||[];for(var E=this._onceEvents&&this._onceEvents[o],n=0;n<f.length;n++){var a=f[n];E&&E[a]&&(this.off(o,a),delete E[a]),a.apply(this,p)}return this}},x.allOff=function(){delete this._events,delete this._onceEvents},P}.call(B,L,B,F))&&(F.exports=A)},9777:(F,B,L)=>{var C,A,P;P=window,C=[L(1349)],void 0!==(A=function(o){return function(x,o){"use strict";var p={extend:function(n,a){for(var h in a)n[h]=a[h];return n},modulo:function(n,a){return(n%a+a)%a}},f=Array.prototype.slice;p.makeArray=function(n){return Array.isArray(n)?n:null==n?[]:"object"==typeof n&&"number"==typeof n.length?f.call(n):[n]},p.removeFrom=function(n,a){var h=n.indexOf(a);-1!=h&&n.splice(h,1)},p.getParent=function(n,a){for(;n.parentNode&&n!=document.body;)if(o(n=n.parentNode,a))return n},p.getQueryElement=function(n){return"string"==typeof n?document.querySelector(n):n},p.handleEvent=function(n){var a="on"+n.type;this[a]&&this[a](n)},p.filterFindElements=function(n,a){n=p.makeArray(n);var h=[];return n.forEach(function(y){if(y instanceof HTMLElement){if(!a)return void h.push(y);o(y,a)&&h.push(y);for(var T=y.querySelectorAll(a),d=0;d<T.length;d++)h.push(T[d])}}),h},p.debounceMethod=function(n,a,h){h=h||100;var y=n.prototype[a],T=a+"Timeout";n.prototype[a]=function(){clearTimeout(this[T]);var r=arguments,z=this;this[T]=setTimeout(function(){y.apply(z,r),delete z[T]},h)}},p.docReady=function(n){var a=document.readyState;"complete"==a||"interactive"==a?setTimeout(n):document.addEventListener("DOMContentLoaded",n)},p.toDashed=function(n){return n.replace(/(.)([A-Z])/g,function(a,h,y){return h+"-"+y}).toLowerCase()};var E=x.console;return p.htmlInit=function(n,a){p.docReady(function(){var h=p.toDashed(a),y="data-"+h,T=document.querySelectorAll("["+y+"]"),d=document.querySelectorAll(".js-"+h),r=p.makeArray(T).concat(p.makeArray(d)),z=y+"-options",v=x.jQuery;r.forEach(function(H){var e,t=H.getAttribute(y)||H.getAttribute(z);try{e=t&&JSON.parse(t)}catch(m){return void(E&&E.error("Error parsing "+y+" on "+H.className+": "+m))}var i=new n(H,e);v&&v.data(H,a,i)})})},p}(P,o)}.apply(B,C))&&(F.exports=A)},7390:(F,B,L)=>{var A;window,void 0!==(A=function(){"use strict";function x(r){var z=parseFloat(r);return-1==r.indexOf("%")&&!isNaN(z)&&z}var p="undefined"==typeof console?function o(){}:function(r){console.error(r)},f=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],E=f.length;function a(r){var z=getComputedStyle(r);return z||p("Style returned "+z+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),z}var y,h=!1;function d(r){if(function T(){if(!h){h=!0;var r=document.createElement("div");r.style.width="200px",r.style.padding="1px 2px 3px 4px",r.style.borderStyle="solid",r.style.borderWidth="1px 2px 3px 4px",r.style.boxSizing="border-box";var z=document.body||document.documentElement;z.appendChild(r);var v=a(r);y=200==Math.round(x(v.width)),d.isBoxSizeOuter=y,z.removeChild(r)}}(),"string"==typeof r&&(r=document.querySelector(r)),r&&"object"==typeof r&&r.nodeType){var z=a(r);if("none"==z.display)return function n(){for(var r={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},z=0;z<E;z++)r[f[z]]=0;return r}();var v={};v.width=r.offsetWidth,v.height=r.offsetHeight;for(var H=v.isBorderBox="border-box"==z.boxSizing,t=0;t<E;t++){var e=f[t],m=parseFloat(z[e]);v[e]=isNaN(m)?0:m}var b=v.paddingLeft+v.paddingRight,R=v.paddingTop+v.paddingBottom,w=v.marginLeft+v.marginRight,Y=v.marginTop+v.marginBottom,V=v.borderLeftWidth+v.borderRightWidth,X=v.borderTopWidth+v.borderBottomWidth,J=H&&y,$=x(z.width);!1!==$&&(v.width=$+(J?0:b+V));var at=x(z.height);return!1!==at&&(v.height=at+(J?0:R+X)),v.innerWidth=v.width-(b+V),v.innerHeight=v.height-(R+X),v.outerWidth=v.width+w,v.outerHeight=v.height+Y,v}}return d}.call(B,L,B,F))&&(F.exports=A)},6893:(F,B,L)=>{var A,P;window,A=[L(1898),L(7390)],void 0!==(P=function(o,p){"use strict";var f=o.create("masonry");f.compatOptions.fitWidth="isFitWidth";var E=f.prototype;return E._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var n=0;n<this.cols;n++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},E.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var n=this.items[0],a=n&&n.element;this.columnWidth=a&&p(a).outerWidth||this.containerWidth}var h=this.columnWidth+=this.gutter,y=this.containerWidth+this.gutter,T=y/h,d=h-y%h;T=Math[d&&d<1?"round":"floor"](T),this.cols=Math.max(T,1)},E.getContainerWidth=function(){var n=this._getOption("fitWidth"),h=p(n?this.element.parentNode:this.element);this.containerWidth=h&&h.innerWidth},E._getItemLayoutPosition=function(n){n.getSize();var a=n.size.outerWidth%this.columnWidth,y=Math[a&&a<1?"round":"ceil"](n.size.outerWidth/this.columnWidth);y=Math.min(y,this.cols);for(var d=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](y,n),r={x:this.columnWidth*d.col,y:d.y},z=d.y+n.size.outerHeight,v=y+d.col,H=d.col;H<v;H++)this.colYs[H]=z;return r},E._getTopColPosition=function(n){var a=this._getTopColGroup(n),h=Math.min.apply(Math,a);return{col:a.indexOf(h),y:h}},E._getTopColGroup=function(n){if(n<2)return this.colYs;for(var a=[],h=this.cols+1-n,y=0;y<h;y++)a[y]=this._getColGroupY(y,n);return a},E._getColGroupY=function(n,a){if(a<2)return this.colYs[n];var h=this.colYs.slice(n,n+a);return Math.max.apply(Math,h)},E._getHorizontalColPosition=function(n,a){var h=this.horizontalColIndex%this.cols;return h=n>1&&h+n>this.cols?0:h,this.horizontalColIndex=a.size.outerWidth&&a.size.outerHeight?h+n:this.horizontalColIndex,{col:h,y:this._getColGroupY(h,n)}},E._manageStamp=function(n){var a=p(n),h=this._getElementOffset(n),T=this._getOption("originLeft")?h.left:h.right,d=T+a.outerWidth,r=Math.floor(T/this.columnWidth);r=Math.max(0,r);var z=Math.floor(d/this.columnWidth);z-=d%this.columnWidth?0:1,z=Math.min(this.cols-1,z);for(var H=(this._getOption("originTop")?h.top:h.bottom)+a.outerHeight,t=r;t<=z;t++)this.colYs[t]=Math.max(H,this.colYs[t])},E._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var n={height:this.maxY};return this._getOption("fitWidth")&&(n.width=this._getContainerFitWidth()),n},E._getContainerFitWidth=function(){for(var n=0,a=this.cols;--a&&0===this.colYs[a];)n++;return(this.cols-n)*this.columnWidth-this.gutter},E.needsResizeLayout=function(){var n=this.containerWidth;return this.getContainerWidth(),n!=this.containerWidth},f}.apply(B,A))&&(F.exports=P)},2544:(F,B,L)=>{var A,P;window,A=[L(9665),L(7390)],void 0!==(P=function(o,p){"use strict";var E=document.documentElement.style,n="string"==typeof E.transition?"transition":"WebkitTransition",a="string"==typeof E.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[n],y={transform:a,transition:n,transitionDuration:n+"Duration",transitionProperty:n+"Property",transitionDelay:n+"Delay"};function T(t,e){!t||(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var d=T.prototype=Object.create(o.prototype);d.constructor=T,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=p(this.element)},d.css=function(t){var e=this.element.style;for(var i in t)e[y[i]||i]=t[i]},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),m=t[e?"left":"right"],b=t[i?"top":"bottom"],R=parseFloat(m),w=parseFloat(b),Y=this.layout.size;-1!=m.indexOf("%")&&(R=R/100*Y.width),-1!=b.indexOf("%")&&(w=w/100*Y.height),R=isNaN(R)?0:R,w=isNaN(w)?0:w,w-=i?Y.paddingTop:Y.paddingBottom,this.position.x=R-=e?Y.paddingLeft:Y.paddingRight,this.position.y=w},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),m=this.layout._getOption("originTop"),w=i?"right":"left";e[i?"left":"right"]=this.getXValue(this.position.x+t[i?"paddingLeft":"paddingRight"]),e[w]="";var J=m?"bottom":"top";e[m?"top":"bottom"]=this.getYValue(this.position.y+t[m?"paddingTop":"paddingBottom"]),e[J]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,m=this.position.y,b=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),!b||this.isTransitioning){var Y={};Y.transform=this.getTranslate(t-i,e-m),this.transition({to:Y,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},d.getTranslate=function(t,e){return"translate3d("+(t=this.layout._getOption("originLeft")?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);t.from&&this.css(t.from),this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var z="opacity,"+function r(t){return t.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;this.css({transitionProperty:z,transitionDuration:t="number"==typeof t?t+"ms":t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var v={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=v[t.propertyName]||t.propertyName;delete e.ingProperties[i],function f(t){for(var e in t)return!1;return!0}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd&&(e.onEnd[i].call(this),delete e.onEnd[i]),this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var H={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(H)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){n&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),this.hide()):this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},T}.apply(B,A))&&(F.exports=P)},1898:(F,B,L)=>{var C,A;!function(P,x){"use strict";C=[L(9665),L(7390),L(9777),L(2544)],A=function(o,p,f,E){return function(x,o,p,f,E){var n=x.console,a=x.jQuery,h=function(){},y=0,T={};function d(t,e){var i=f.getQueryElement(t);if(i){this.element=i,a&&(this.$element=a(this.element)),this.options=f.extend({},this.constructor.defaults),this.option(e);var m=++y;this.element.outlayerGUID=m,T[m]=this,this._create(),this._getOption("initLayout")&&this.layout()}else n&&n.error("Bad element for "+this.constructor.namespace+": "+(i||t))}d.namespace="outlayer",d.Item=E,d.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var r=d.prototype;function z(t){function e(){t.apply(this,arguments)}return(e.prototype=Object.create(t.prototype)).constructor=e,e}f.extend(r,o.prototype),r.option=function(t){f.extend(this.options,t)},r._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},d.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},r._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),f.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},r.reloadItems=function(){this.items=this._itemize(this.element.children)},r._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,m=[],b=0;b<e.length;b++){var w=new i(e[b],this);m.push(w)}return m},r._filterFindItemElements=function(t){return f.filterFindElements(t,this.options.itemSelector)},r.getItemElements=function(){return this.items.map(function(t){return t.element})},r.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant");this.layoutItems(this.items,void 0!==t?t:!this._isLayoutInited),this._isLayoutInited=!0},r._init=r.layout,r._resetLayout=function(){this.getSize()},r.getSize=function(){this.size=p(this.element)},r._getMeasurement=function(t,e){var m,i=this.options[t];i?("string"==typeof i?m=this.element.querySelector(i):i instanceof HTMLElement&&(m=i),this[t]=m?p(m)[e]:i):this[t]=0},r.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},r._getItemsForLayout=function(t){return t.filter(function(e){return!e.isIgnored})},r._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(m){var b=this._getItemLayoutPosition(m);b.item=m,b.isInstant=e||m.isLayoutInstant,i.push(b)},this),this._processLayoutQueue(i)}},r._getItemLayoutPosition=function(){return{x:0,y:0}},r._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(e,i){this._positionItem(e.item,e.x,e.y,e.isInstant,i)},this)},r.updateStagger=function(){var t=this.options.stagger;if(null!=t)return this.stagger=function H(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],m=e&&e[2];return i.length?(i=parseFloat(i))*(v[m]||1):0}(t),this.stagger;this.stagger=0},r._positionItem=function(t,e,i,m,b){m?t.goTo(e,i):(t.stagger(b*this.stagger),t.moveTo(e,i))},r._postLayout=function(){this.resizeContainer()},r.resizeContainer=function(){if(this._getOption("resizeContainer")){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},r._getContainerSize=h,r._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},r._emitCompleteOnItems=function(t,e){var i=this;function m(){i.dispatchEvent(t+"Complete",null,[e])}var b=e.length;if(e&&b){var R=0;e.forEach(function(Y){Y.once(t,w)})}else m();function w(){++R==b&&m()}},r.dispatchEvent=function(t,e,i){var m=e?[e].concat(i):i;if(this.emitEvent(t,m),a)if(this.$element=this.$element||a(this.element),e){var b=a.Event(e);b.type=t,this.$element.trigger(b,i)}else this.$element.trigger(t,i)},r.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},r.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},r.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},r.unstamp=function(t){(t=this._find(t))&&t.forEach(function(e){f.removeFrom(this.stamps,e),this.unignore(e)},this)},r._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),f.makeArray(t)},r._manageStamps=function(){!this.stamps||!this.stamps.length||(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},r._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},r._manageStamp=h,r._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,m=p(t);return{left:e.left-i.left-m.marginLeft,top:e.top-i.top-m.marginTop,right:i.right-e.right-m.marginRight,bottom:i.bottom-e.bottom-m.marginBottom}},r.handleEvent=f.handleEvent,r.bindResize=function(){x.addEventListener("resize",this),this.isResizeBound=!0},r.unbindResize=function(){x.removeEventListener("resize",this),this.isResizeBound=!1},r.onresize=function(){this.resize()},f.debounceMethod(d,"onresize",100),r.resize=function(){!this.isResizeBound||!this.needsResizeLayout()||this.layout()},r.needsResizeLayout=function(){var t=p(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},r.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},r.appended=function(t){var e=this.addItems(t);!e.length||(this.layoutItems(e,!0),this.reveal(e))},r.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},r.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(i,m){i.stagger(m*e),i.reveal()})}},r.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(i,m){i.stagger(m*e),i.hide()})}},r.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},r.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},r.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},r.getItems=function(t){t=f.makeArray(t);var e=[];return t.forEach(function(i){var m=this.getItem(i);m&&e.push(m)},this),e},r.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(i){i.remove(),f.removeFrom(this.items,i)},this)},r.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(i){i.destroy()}),this.unbindResize(),delete T[this.element.outlayerGUID],delete this.element.outlayerGUID,a&&a.removeData(this.element,this.constructor.namespace)},d.data=function(t){var e=(t=f.getQueryElement(t))&&t.outlayerGUID;return e&&T[e]},d.create=function(t,e){var i=z(d);return i.defaults=f.extend({},d.defaults),f.extend(i.defaults,e),i.compatOptions=f.extend({},d.compatOptions),i.namespace=t,i.data=d.data,i.Item=z(E),f.htmlInit(i,t),a&&a.bridget&&a.bridget(t,i),i};var v={ms:1,s:1e3};return d.Item=E,d}(P,o,p,f,E)}.apply(B,C),void 0!==A&&(F.exports=A)}(window)}}]);