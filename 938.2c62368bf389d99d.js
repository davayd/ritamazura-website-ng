"use strict";(self.webpackChunkritamazura_website_ng=self.webpackChunkritamazura_website_ng||[]).push([[938],{3938:(S,d,o)=>{o.r(d),o.d(d,{MainModule:()=>l});var u=o(6895),p=o(9541),g=o(5731);const c={1:{routePath:"Olya-08.22-St.Petersburg"},2:{routePath:"Polina-2 08.2022-St.Petersburg"},3:{routePath:"Ayna-08.2022-St.Petersburg"},4:{routePath:"Polina-1 08.2022-St.Petersburg"},5:{routePath:"Polina.Studio,-part. 2"},6:{routePath:"Polina.Studio,-part. 1"},7:{routePath:"Anastasia-12.2022. Model test"},8:{routePath:"Miron-12.2022. Model test"},9:{routePath:"Polina-10.2022. Model test"},10:{routePath:"Kate-02.2023"},11:{routePath:"Lera-Yaskevich 02.2023"},12:{routePath:"Liza-03.2023"}};var m=o(6677),e=o(8256),b=o(7201),v=o(3135),P=o(7334),z=o(1740);class r{constructor(){this.SITE_MAP=c}transform(i){if(!i)return"/not-found";const[s]=i?.split("-")??[];return`/photography/${c[s].routePath}`}static#t=this.\u0275fac=function(s){return new(s||r)};static#e=this.\u0275pipe=e.Yjl({name:"routeToSession",type:r,pure:!0,standalone:!0})}function y(t,i){if(1&t&&(e.TgZ(0,"div",5),e._UZ(1,"img",6),e.ALo(2,"routeToSession"),e.qZA()),2&t){const s=i.$implicit,n=e.oxw();e.xp6(1),e.Q6J("src",s.url,e.LSH)("routerLink",e.lcZ(2,5,s.label)),e.uIk("width",s.sizes[n.imageMode].width)("height",s.sizes[n.imageMode].height)("alt",s.label)}}class a{constructor(i,s){this.applicationStateService=i,this.googleAnalyticsService=s,this.masonryOptions={gutter:".gutter-sizer",columnWidth:".grid-sizer",itemSelector:".grid-item",percentPosition:!0,horizontalOrder:!0},this.imageMode=this.applicationStateService.imageMode,this.SITE_MAP=c;const n=function w(t){return new g.tg("main","main",[{url:`/assets/photos/main/1-${t}.webp`,sizes:{mobile:{width:500,height:344},desktop:{width:1e3,height:689}},label:`1-${t}.webp`},{url:`/assets/photos/main/2-${t}.webp`,sizes:{mobile:{width:500,height:625},desktop:{width:1e3,height:1250}},label:`2-${t}.webp`},{url:`/assets/photos/main/3-${t}.webp`,sizes:{mobile:{width:500,height:625},desktop:{width:1e3,height:1250}},label:`3-${t}.webp`},{url:`/assets/photos/main/4-${t}.webp`,sizes:{mobile:{width:500,height:625},desktop:{width:1e3,height:1250}},label:`4-${t}.webp`},{url:`/assets/photos/main/5-${t}.webp`,sizes:{mobile:{width:500,height:625},desktop:{width:1e3,height:1250}},label:`5-${t}.webp`},{url:`/assets/photos/main/6-${t}.webp`,sizes:{mobile:{width:500,height:395},desktop:{width:1e3,height:791}},label:`6-${t}.webp`},{url:`/assets/photos/main/7-${t}.webp`,sizes:{mobile:{width:500,height:625},desktop:{width:1e3,height:1251}},label:`7-${t}.webp`},{url:`/assets/photos/main/8-${t}.webp`,sizes:{mobile:{width:500,height:448},desktop:{width:1e3,height:895}},label:`8-${t}.webp`},{url:`/assets/photos/main/9-${t}.webp`,sizes:{mobile:{width:500,height:625},desktop:{width:1e3,height:1250}},label:`9-${t}.webp`},{url:`/assets/photos/main/10-${t}.webp`,sizes:{mobile:{width:500,height:625},desktop:{width:1e3,height:1250}},label:`10-${t}.webp`},{url:`/assets/photos/main/11-${t}.webp`,sizes:{mobile:{width:500,height:625},desktop:{width:1e3,height:1250}},label:`11-${t}.webp`},{url:`/assets/photos/main/12-${t}.webp`,sizes:{mobile:{width:500,height:312},desktop:{width:1e3,height:624}},label:`12-${t}.webp`}])}(this.imageMode);this.gallery=(0,m.C)(n)}ngOnInit(){this.googleAnalyticsService.sendCustomEvent("screen_view",{screen_name:"Main"})}static#t=this.\u0275fac=function(s){return new(s||a)(e.Y36(b.V),e.Y36(v.$))};static#e=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-main"]],decls:5,vars:2,consts:[[1,"container"],[3,"options"],[1,"grid-sizer"],[1,"gutter-sizer"],["ngxMasonryItem","","class","grid-item overflow-hidden hover:drop-shadow-lg transition-all cursor-pointer",4,"ngFor","ngForOf"],["ngxMasonryItem","",1,"grid-item","overflow-hidden","hover:drop-shadow-lg","transition-all","cursor-pointer"],["masonryLazy","","loading","lazy",1,"w-full","hover:scale-[1.01]","transition-transform","ease-in",3,"src","routerLink"]],template:function(s,n){1&s&&(e.TgZ(0,"div",0)(1,"ngx-masonry",1),e._UZ(2,"div",2)(3,"div",3),e.YNc(4,y,3,7,"div",4),e.qZA()()),2&s&&(e.xp6(1),e.Q6J("options",n.masonryOptions),e.xp6(3),e.Q6J("ngForOf",n.gallery.photos))},dependencies:[u.sg,p.rH,P.g,z.C,r],styles:[".grid-item[_ngcontent-%COMP%]{margin-bottom:10px}.gutter-sizer[_ngcontent-%COMP%]{width:10px}@media screen and (max-width: 599.98px){.grid-sizer[_ngcontent-%COMP%], .grid-item[_ngcontent-%COMP%]{width:100%}}@media screen and (min-width: 600px){.grid-sizer[_ngcontent-%COMP%], .grid-item[_ngcontent-%COMP%]{width:calc(33% - 10px)}}"],changeDetection:0})}const $=[{path:"",component:a}];class h{static#t=this.\u0275fac=function(s){return new(s||h)};static#e=this.\u0275mod=e.oAB({type:h});static#s=this.\u0275inj=e.cJS({imports:[p.Bz.forChild($),p.Bz]})}var f=o(7889);class l{static#t=this.\u0275fac=function(s){return new(s||l)};static#e=this.\u0275mod=e.oAB({type:l});static#s=this.\u0275inj=e.cJS({imports:[u.ez,h,f.T]})}}}]);