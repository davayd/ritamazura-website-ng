"use strict";(self.webpackChunkritamazura_website_ng=self.webpackChunkritamazura_website_ng||[]).push([[592],{7117:(c,u,e)=>{e.d(u,{J:()=>g});var t=e(1223),h=e(9808),r=e(2432);const l=function(s){return["./../",s]};function a(s,n){if(1&s&&(t.TgZ(0,"a",3)(1,"div",4),t.O4$(),t.TgZ(2,"svg",5),t._UZ(3,"polyline",6),t.qZA()(),t.kcU(),t.TgZ(4,"span",7),t._uU(5),t.qZA()()),2&s){const o=n.ngIf;t.Q6J("routerLink",t.VKq(2,l,o.transliteratedUrl)),t.xp6(5),t.hij(" ",o.title," ")}}function p(s,n){if(1&s&&(t.TgZ(0,"a",8)(1,"span",7),t._uU(2),t.qZA(),t.TgZ(3,"div",4),t.O4$(),t.TgZ(4,"svg",9),t._UZ(5,"polyline",6),t.qZA()()()),2&s){const o=n.ngIf;t.Q6J("routerLink",t.VKq(2,l,o.transliteratedUrl)),t.xp6(2),t.hij(" ",o.title," ")}}let g=(()=>{class s{constructor(){}ngOnInit(){}}return s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-paginator"]],inputs:{session:"session"},decls:3,vars:2,consts:[[1,"flex","justify-between","items-center"],["class","paginator text-left mr-auto",3,"routerLink",4,"ngIf"],["class","paginator text-right ml-auto",3,"routerLink",4,"ngIf"],[1,"paginator","text-left","mr-auto",3,"routerLink"],[1,"w-[1em]","h-[1em]"],["viewBox","0 0 9 16","stroke-width","1px","fill","transparent",1,"w-full","h-full"],["stroke","#000","fill","none","stroke-miterlimit","10","points","7.3,14.7 2.5,8 7.3,1.2"],[1,"paginator-text"],[1,"paginator","text-right","ml-auto",3,"routerLink"],["viewBox","0 0 9 16","stroke-width","1px","fill","transparent",1,"rotate-180","w-full","h-full"]],template:function(o,i){1&o&&(t.TgZ(0,"section",0),t.YNc(1,a,6,4,"a",1),t.YNc(2,p,6,4,"a",2),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",i.session.previousSession),t.xp6(1),t.Q6J("ngIf",i.session.nextSession))},directives:[h.O5,r.yS],styles:["[_nghost-%COMP%]{margin-bottom:1rem;display:block}"],changeDetection:0}),s})()},3732:(c,u,e)=>{e.d(u,{U:()=>l});var t=e(9808),h=e(2432),r=e(1223);let l=(()=>{class a{}return a.\u0275fac=function(g){return new(g||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({providers:[],imports:[[t.ez,h.Bz]]}),a})()},8343:(c,u,e)=>{e.d(u,{V:()=>g});var t=e(6145);class h{constructor(n,o,i){this.title=n,this.transliteratedUrl=o,this.photos=i}linkPrevious(n){this.previousSession=n}linkNext(n){this.nextSession=n}}class r{constructor(n,o,i){this.title=n,this.transliteratedUrl=o,this.beforeAterterPhotos=i}linkPrevious(n){this.previousSession=n}linkNext(n){this.nextSession=n}}var p=e(1223);let g=(()=>{class s{constructor(o){this._breakpointObserver=o,this.photographySessions=[],this.retouchSessions=[];const i=this._breakpointObserver.isMatched(t.u3.XSmall)?"mobile":"desktop";this.photographySessions=function l(s){const n=new h("Session 1","session-1",[{url:`/assets/photos/masha-2021-minsk/DSC00573-${s}.jpg`,width:1e3,height:1250},{url:`/assets/photos/masha-2021-minsk/DSC00641-${s}.jpg`,width:1e3,height:1262},{url:`/assets/photos/masha-2021-minsk/DSC00577-${s}.jpg`,width:1e3,height:1500},{url:`/assets/photos/masha-2021-minsk/DSC00647-${s}.jpg`,width:1e3,height:1250},{url:`/assets/photos/masha-2021-minsk/DSC00746-${s}.jpg`,width:1e3,height:1295},{url:`/assets/photos/masha-2021-minsk/DSC00779-${s}.jpg`,width:1e3,height:1225},{url:`/assets/photos/masha-2021-minsk/DSC00750-${s}.jpg`,width:1e3,height:1421},{url:`/assets/photos/masha-2021-minsk/DSC00800-${s}.jpg`,width:1e3,height:1254}]),o=new h("Session 2","session-2",[{url:`/assets/photos/nastya-2021-grodno/DSC02844-${s}.jpg`,width:1e3,height:1440},{url:`/assets/photos/nastya-2021-grodno/DSC02654-${s}.jpg`,width:1e3,height:1438},{url:`/assets/photos/nastya-2021-grodno/DSC02889-${s}.jpg`,width:1e3,height:1500},{url:`/assets/photos/nastya-2021-grodno/DSC02880-${s}.jpg`,width:1e3,height:732},{url:`/assets/photos/nastya-2021-grodno/DSC02936-${s}.jpg`,width:1e3,height:1500},{url:`/assets/photos/nastya-2021-grodno/DSC03009-${s}.jpg`,width:1e3,height:1451},{url:`/assets/photos/nastya-2021-grodno/DSC03189-${s}.jpg`,width:1e3,height:1359}]),i=new h("Session 3","session-3",[{url:"https://images.squarespace-cdn.com/content/v1/6201d5c4d2965872151b76c3/c5930746-ce02-415b-b076-dbb6e89eb76a/220322-Vogue_TK_OLD-layoutV6-5.jpg?format=1000w",width:1e3,height:1359}]);return n.linkNext(o),o.linkPrevious(n),o.linkNext(i),i.linkPrevious(o),[n,o,i]}(i),this.retouchSessions=function a(s){const n=new r("Session 1","session-1",[[{url:`/assets/photos/masha-2021-minsk/DSC00573-${s}.jpg`,width:1e3,height:1250},{url:`/assets/photos/masha-2021-minsk/DSC00641-${s}.jpg`,width:1e3,height:1262}],[{url:`/assets/photos/masha-2021-minsk/DSC00573-${s}.jpg`,width:1e3,height:1250},{url:`/assets/photos/masha-2021-minsk/DSC00641-${s}.jpg`,width:1e3,height:1262}],[{url:`/assets/photos/nastya-2021-grodno/DSC02880-${s}.jpg`,width:1e3,height:732},{url:`/assets/photos/nastya-2021-grodno/DSC02880-${s}.jpg`,width:1e3,height:732}]]),o=new r("Session 2","session-2",[[{url:`/assets/photos/nastya-2021-grodno/DSC02844-${s}.jpg`,width:1e3,height:1440},{url:`/assets/photos/nastya-2021-grodno/DSC02654-${s}.jpg`,width:1e3,height:1438}]]),i=new r("Session 3","session-3",[[{url:`/assets/photos/masha-2021-minsk/DSC00573-${s}.jpg`,width:1e3,height:1250},{url:`/assets/photos/masha-2021-minsk/DSC00641-${s}.jpg`,width:1e3,height:1262}]]);return n.linkNext(o),o.linkPrevious(n),o.linkNext(i),i.linkPrevious(o),[n,o,i]}(i)}}return s.\u0275fac=function(o){return new(o||s)(p.LFG(t.Yg))},s.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);