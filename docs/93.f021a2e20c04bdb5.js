"use strict";(self.webpackChunkangular_material_template=self.webpackChunkangular_material_template||[]).push([[93],{9093:(rt,b,i)=>{i.d(b,{$:()=>ut});var T=i(5963),x=i(727),t=i(4650),_=i(2289),C=i(4649),h=i(263),L=i(7574),M=i(2059),s=i(9299),c=i(6895),g=i(3267),d=i(7392),A=i(3683),f=i(4859),p=i(6338),Q=i(3238),y=i(4850),U=i(3162),I=i(1572),O=i(266),l=i(8255),J=i(2673),k=i(5829);function N(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(){const m=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.changeTheme(m.value))}),t.TgZ(1,"mat-icon",12),t.O4$(),t.TgZ(2,"svg",13)(3,"defs"),t._UZ(4,"path",14)(5,"path",15)(6,"path",16),t.qZA(),t._UZ(7,"use",17)(8,"use",18)(9,"use",19),t.qZA()(),t.kcU(),t.TgZ(10,"span"),t._uU(11),t.qZA()()}if(2&n){const e=u.$implicit;t.xp6(7),t.uIk("fill",e.backgroundColor),t.xp6(1),t.uIk("fill",e.buttonColor),t.xp6(1),t.uIk("fill",e.headingColor),t.xp6(2),t.Oqu(e.label)}}function D(n,u){if(1&n&&(t.TgZ(0,"button",0)(1,"mat-icon",20),t._uU(2,"notifications"),t.qZA()()),2&n){t.oxw();const e=t.MAs(8);t.Q6J("matMenuTriggerFor",e)}}function Y(n,u){if(1&n&&(t.TgZ(0,"button",21)(1,"mat-icon"),t._uU(2,"person"),t.qZA(),t.TgZ(3,"span",22),t._uU(4),t.qZA()()),2&n){const e=t.oxw(),o=t.MAs(19);t.Q6J("matMenuTriggerFor",o),t.xp6(4),t.hij(" ",e.userName," ")}}const v=function(){return["/auth/login"]};function q(n,u){1&n&&(t.TgZ(0,"button",23)(1,"mat-icon"),t._uU(2,"exit_to_app"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"\u0412\u0445\u043e\u0434"),t.qZA()()),2&n&&t.Q6J("routerLink",t.DdM(1,v))}const E=function(){return["/auth/register"]};function S(n,u){1&n&&(t.TgZ(0,"button",23)(1,"mat-icon"),t._uU(2,"app_registration"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),t.qZA()()),2&n&&t.Q6J("routerLink",t.DdM(1,E))}const F=function(){return["/account/profile"]};let H=(()=>{class n{constructor(e){this.authService=e,this.userName="",this.themeOptions=[],this.themeOptionsChange=new t.vpe,this.isLoggedIn=!1}ngOnInit(){this.authService.isLoggedIn$().subscribe(e=>{this.isLoggedIn=e})}changeTheme(e){this.themeOptionsChange.emit(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.$))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-menu"]],inputs:{userName:"userName",themeOptions:"themeOptions"},outputs:{themeOptionsChange:"themeOptionsChange"},decls:30,vars:12,consts:[["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-icon-button","",3,"matMenuTriggerFor",4,"ngIf"],["xPosition","before","yPosition","above",3,"overlapTrigger"],["notificationMenu","matMenu"],["mat-menu-item",""],["mat-button","",3,"matMenuTriggerFor",4,"ngIf"],["mat-button","",3,"routerLink",4,"ngIf"],["userMenu","matMenu"],["mat-menu-item","",3,"routerLink"],["mat-menu-item","",3,"click"],["role","img","svgicon","theme-example","aria-hidden","true"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","100%","height","100%","viewBox","0 0 80 80","fit","","preserveAspectRatio","xMidYMid meet","focusable","false"],["d","M77.87 0C79.05 0 80 .95 80 2.13v75.74c0 1.17-.95 2.13-2.13 2.13H2.13C.96 80 0 79.04 0 77.87V2.13C0 .95.96 0 2.13 0h75.74z","id","a"],["d","M54 40c3.32 0 6 2.69 6 6 0 1.2 0-1.2 0 0 0 3.31-2.68 6-6 6H26c-3.31 0-6-2.69-6-6 0-1.2 0 1.2 0 0 0-3.31 2.69-6 6-6h28z","id","b"],["d","M0 0h80v17.24H0V0z","id","c"],[0,"xlink","href","#a"],[0,"xlink","href","#b"],[0,"xlink","href","#c"],["matBadge","2","matBadgeColor","accent"],["mat-button","",3,"matMenuTriggerFor"],["fxShow","","fxHide.xs",""],["mat-button","",3,"routerLink"]],template:function(e,o){if(1&e&&(t.TgZ(0,"button",0)(1,"mat-icon"),t._uU(2,"format_color_fill"),t.qZA()(),t.TgZ(3,"mat-menu",null,1),t.YNc(5,N,12,4,"button",2),t.qZA(),t.YNc(6,D,3,1,"button",3),t.TgZ(7,"mat-menu",4,5)(9,"a",6)(10,"span"),t._uU(11,"\u0418\u043c\u0430\u0448 \u043d\u043e\u0432\u0430 \u0437\u0430\u0434\u0430\u0447\u0430"),t.qZA()(),t.TgZ(12,"a",6)(13,"span"),t._uU(14,"\u0418\u043c\u0430\u0448 \u043d\u043e\u0432\u043e \u0441\u044a\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),t.qZA()()(),t.YNc(15,Y,5,2,"button",7),t.YNc(16,q,5,2,"button",8),t.YNc(17,S,5,2,"button",8),t.TgZ(18,"mat-menu",4,9)(20,"a",10)(21,"mat-icon"),t._uU(22,"person"),t.qZA(),t.TgZ(23,"span"),t._uU(24,"\u041f\u0440\u043e\u0444\u0438\u043b"),t.qZA()(),t.TgZ(25,"a",10)(26,"mat-icon"),t._uU(27,"exit_to_app"),t.qZA(),t.TgZ(28,"span"),t._uU(29,"\u0418\u0437\u0445\u043e\u0434"),t.qZA()()()),2&e){const a=t.MAs(4);t.Q6J("matMenuTriggerFor",a),t.xp6(5),t.Q6J("ngForOf",o.themeOptions),t.xp6(1),t.Q6J("ngIf",o.isLoggedIn),t.xp6(1),t.Q6J("overlapTrigger",!1),t.xp6(8),t.Q6J("ngIf",o.isLoggedIn),t.xp6(1),t.Q6J("ngIf",!o.isLoggedIn),t.xp6(1),t.Q6J("ngIf",!o.isLoggedIn),t.xp6(1),t.Q6J("overlapTrigger",!1),t.xp6(2),t.Q6J("routerLink",t.DdM(10,F)),t.xp6(5),t.Q6J("routerLink",t.DdM(11,v))}},dependencies:[s.rH,s.yS,c.sg,c.O5,d.Hw,f.lW,l.VK,l.OP,l.p6,J.k,k.b8],encapsulation:2}),n})();const P=function(){return["/job-list"]};function $(n,u){1&n&&(t.TgZ(0,"a",10)(1,"mat-icon",11),t._uU(2," business "),t.qZA(),t.TgZ(3,"p",12),t._uU(4,"\u041e\u0442\u0432\u043e\u0440\u0435\u043d\u0438 \u043e\u0431\u044f\u0432\u0438"),t.qZA()()),2&n&&t.Q6J("routerLink",t.DdM(1,P))}const w=function(){return["/candidates"]};function B(n,u){1&n&&(t.TgZ(0,"a",10)(1,"mat-icon",11),t._uU(2," people "),t.qZA(),t.TgZ(3,"p",12),t._uU(4,"\u0412\u0441\u0438\u0447\u043a\u0438 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0438"),t.qZA()()),2&n&&t.Q6J("routerLink",t.DdM(1,w))}const V=function(){return["/interviews-list"]};function z(n,u){1&n&&(t.TgZ(0,"a",10)(1,"mat-icon",11),t._uU(2," date_range "),t.qZA(),t.TgZ(3,"p",12),t._uU(4,"\u0418\u043d\u0442\u0435\u0440\u0432\u044e\u0442\u0430"),t.qZA()()),2&n&&t.Q6J("routerLink",t.DdM(1,V))}const G=function(){return["/account/profile"]};function R(n,u){1&n&&(t.TgZ(0,"a",20)(1,"mat-icon",11),t._uU(2,"person"),t.qZA(),t.TgZ(3,"p",12),t._uU(4,"\u041f\u0440\u043e\u0444\u0438\u043b"),t.qZA()()),2&n&&t.Q6J("routerLink",t.DdM(1,G))}const Z=function(){return["/auth/login"]};function X(n,u){1&n&&(t.TgZ(0,"a",20)(1,"mat-icon",11),t._uU(2,"exit_to_app"),t.qZA(),t.TgZ(3,"p",12),t._uU(4,"\u0418\u0437\u0445\u043e\u0434"),t.qZA()()),2&n&&t.Q6J("routerLink",t.DdM(1,Z))}function j(n,u){1&n&&(t.TgZ(0,"a",20)(1,"mat-icon",11),t._uU(2,"exit_to_app"),t.qZA(),t.TgZ(3,"p",12),t._uU(4,"\u0412\u0445\u043e\u0434"),t.qZA()()),2&n&&t.Q6J("routerLink",t.DdM(1,Z))}const K=function(){return["/auth/register"]};function W(n,u){1&n&&(t.TgZ(0,"a",20)(1,"mat-icon",11),t._uU(2,"app_registration"),t.qZA(),t.TgZ(3,"p",12),t._uU(4,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),t.qZA()()),2&n&&t.Q6J("routerLink",t.DdM(1,K))}function tt(n,u){1&n&&t._UZ(0,"mat-progress-bar",21)}function nt(n,u){1&n&&t._UZ(0,"mat-spinner",22),2&n&&t.Q6J("diameter",50)}const et=function(){return["/"]},ot=function(){return["/dashboard"]},it=function(){return["/about"]};let ut=(()=>{class n{constructor(e,o,a,m,r,at){this.changeDetectorRef=e,this.media=o,this.spinnerService=a,this.authService=m,this.authGuard=r,this.themeService=at,this.showSpinner=!1,this.userName="",this.isAdmin=!1,this.isLoggedIn=!1,this.isHr=!1,this.autoLogoutSubscription=new x.w0,this.options$=this.themeService.getThemeOptions(),this.mobileQuery=this.media.matchMedia("(max-width: 1000px)"),this._mobileQueryListener=()=>e.detectChanges(),this.mobileQuery.addListener(this._mobileQueryListener)}ngOnInit(){this.authService.isHr$().subscribe(e=>this.isHr=e),this.authService.isLoggedIn$().subscribe(e=>{this.isLoggedIn=e;const o=this.authService.getCurrentUser();if(e&&o){this.isAdmin=o.isAdmin||!1,this.userName=o.fullName||"";const a=(0,T.H)(2e3,5e3);this.autoLogoutSubscription=a.subscribe(()=>{this.authGuard.canActivate()})}})}ngOnDestroy(){this.mobileQuery.removeListener(this._mobileQueryListener),this.autoLogoutSubscription.unsubscribe()}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}themeChangeHandler(e){this.themeService.setTheme(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(_.vx),t.Y36(C.V),t.Y36(h.$),t.Y36(L.a),t.Y36(M.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-layout"]],decls:42,vars:26,consts:[[1,"navbar-container"],["color","primary",1,"navbar"],["mat-icon-button","",3,"click"],["matTooltip","\u041d\u0430\u0447\u0430\u043b\u043e",1,"navbar-brand",3,"routerLink"],[1,"navbar-spacer"],[3,"userName","themeOptions","themeOptionsChange"],[1,"navbar-sidenav-container"],["fixedTopGap","56",1,"sidenav",3,"opened","mode","fixedInViewport"],["snav",""],["mat-subheader",""],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["mat-list-icon",""],["mat-line",""],["mat-list-item","","routerLinkActive","active",3,"routerLink",4,"ngIf"],["mat-list-item","",3,"routerLink",4,"ngIf"],["id","push-bottom","mat-list-item","","routerLinkActive","active",3,"routerLink"],[1,"sidenav-content"],[1,"progress-bar-container"],["color","accent","mode","indeterminate",4,"ngIf"],["class","spinner",3,"diameter",4,"ngIf"],["mat-list-item","",3,"routerLink"],["color","accent","mode","indeterminate"],[1,"spinner",3,"diameter"]],template:function(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"mat-toolbar",1)(2,"button",2),t.NdJ("click",function(){t.CHM(a);const r=t.MAs(14);return t.KtG(r.toggle())}),t.TgZ(3,"mat-icon"),t._uU(4,"menu"),t.qZA()(),t.TgZ(5,"a",3)(6,"h1"),t._uU(7,"Recruit Mint"),t.qZA()(),t._UZ(8,"span",4),t.ynx(9),t.TgZ(10,"app-menu",5),t.NdJ("themeOptionsChange",function(r){return o.themeChangeHandler(r)}),t.ALo(11,"async"),t.qZA(),t.BQk(),t.qZA(),t.TgZ(12,"mat-sidenav-container",6)(13,"mat-sidenav",7,8)(15,"mat-nav-list")(16,"h3",9),t._uU(17,"\u041c\u0435\u043d\u044e"),t.qZA(),t.TgZ(18,"a",10)(19,"mat-icon",11),t._uU(20," home "),t.qZA(),t.TgZ(21,"p",12),t._uU(22,"\u041d\u0430\u0447\u0430\u043b\u043e"),t.qZA()(),t.YNc(23,$,5,2,"a",13),t.YNc(24,B,5,2,"a",13),t.YNc(25,z,5,2,"a",13),t.YNc(26,R,5,2,"a",14),t.YNc(27,X,5,2,"a",14),t.YNc(28,j,5,2,"a",14),t.YNc(29,W,5,2,"a",14),t._UZ(30,"mat-divider"),t.TgZ(31,"a",15)(32,"mat-icon",11),t._uU(33,"call"),t.qZA(),t.TgZ(34,"p",12),t._uU(35,"\u041a\u043e\u043d\u0442\u0430\u0442\u043a\u0438"),t.qZA()()()(),t.TgZ(36,"mat-sidenav-content",16)(37,"div",17),t.YNc(38,tt,1,0,"mat-progress-bar",18),t.ALo(39,"async"),t.YNc(40,nt,1,1,"mat-spinner",19),t.qZA(),t._UZ(41,"router-outlet"),t.qZA()()()}2&e&&(t.ekj("example-is-mobile",o.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(23,et)),t.xp6(5),t.Q6J("userName",o.userName)("themeOptions",t.lcZ(11,19,o.options$)),t.xp6(3),t.Q6J("opened",!o.mobileQuery.matches)("mode",o.mobileQuery.matches?"over":"side")("fixedInViewport",o.mobileQuery.matches),t.xp6(5),t.Q6J("routerLink",t.DdM(24,ot)),t.xp6(5),t.Q6J("ngIf",o.isLoggedIn),t.xp6(1),t.Q6J("ngIf",o.isLoggedIn),t.xp6(1),t.Q6J("ngIf",o.isHr),t.xp6(1),t.Q6J("ngIf",o.isLoggedIn),t.xp6(1),t.Q6J("ngIf",o.isLoggedIn),t.xp6(1),t.Q6J("ngIf",!o.isLoggedIn),t.xp6(1),t.Q6J("ngIf",!o.isLoggedIn),t.xp6(2),t.Q6J("routerLink",t.DdM(25,it)),t.xp6(7),t.Q6J("ngIf",t.lcZ(39,21,o.spinnerService.visibility)),t.xp6(2),t.Q6J("ngIf",o.showSpinner))},dependencies:[s.lC,s.yS,s.Od,c.O5,g.JX,g.TM,g.Rh,d.Hw,A.Ye,f.lW,p.Hk,p.Tg,Q.X2,p.Nh,p.gs,y.d,U.pW,I.Ou,O.gM,H,c.Ov],styles:[".navbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.navbar[_ngcontent-%COMP%]{z-index:2}.navbar-brand[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.navbar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;inset:0}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{position:fixed;z-index:2}.navbar-sidenav-container[_ngcontent-%COMP%]{flex:1}.navbar-is-mobile[_ngcontent-%COMP%]   .navbar-sidenav-container[_ngcontent-%COMP%]{flex:1 0 auto}mat-sidenav[_ngcontent-%COMP%]{min-width:180px!important;border-right:1px solid #eee;box-shadow:6px 0 6px #0000001a}.progress-bar-container[_ngcontent-%COMP%]{height:5px}a.mat-list-item.active[_ngcontent-%COMP%]{background:rgba(0,0,0,.04)}#push-bottom[_ngcontent-%COMP%]{position:absolute;bottom:0}"]}),n})()}}]);