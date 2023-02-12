"use strict";(self.webpackChunkangular_material_template=self.webpackChunkangular_material_template||[]).push([[945],{4945:(G,C,s)=>{s.r(C),s.d(C,{AuthModule:()=>$});var p=s(6895),c=s(9299),o=s(4006),e=s(4650),f=s(1481),h=s(1645),w=s(263),l=s(1576),_=s(4859),a=s(3546),Z=s(3162),d=s(9549),v=s(4144),T=s(455);function A(u,i){1&u&&(e.TgZ(0,"mat-error",13),e._uU(1," \u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u0435\u043d \u0438\u043c\u0435\u0439\u043b \u0430\u0434\u0440\u0435\u0441 "),e.qZA())}function F(u,i){1&u&&(e.TgZ(0,"mat-error",14)(1,"span"),e._uU(2,"\u0418\u043c\u0435\u0439\u043b\u044a\u0442 \u0435 "),e.TgZ(3,"strong"),e._uU(4,"\u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e"),e.qZA(),e._uU(5," \u043f\u043e\u043b\u0435"),e.qZA()())}function q(u,i){1&u&&(e.TgZ(0,"mat-error",15)(1,"span"),e._uU(2,"\u041f\u0430\u0440\u043e\u043b\u0430\u0442\u0430 \u0435 "),e.TgZ(3,"strong"),e._uU(4,"\u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e"),e.qZA(),e._uU(5," \u043f\u043e\u043b\u0435"),e.qZA()())}function P(u,i){1&u&&e._UZ(0,"mat-progress-bar",16)}let b=(()=>{class u{constructor(r,t,n,m){this.router=r,this.titleService=t,this.notificationService=n,this.authenticationService=m}ngOnInit(){this.titleService.setTitle("angular-material-template - Login"),this.authenticationService.logout(),this.createForm()}createForm(){const r=localStorage.getItem("savedUserEmail");this.loginForm=new o.nJ({email:new o.p4(r,[o.kI.required,o.kI.email]),password:new o.p4("",o.kI.required),rememberMe:new o.p4(null!==r)})}login(){const r=this.loginForm.get("email")?.value,t=this.loginForm.get("password")?.value,n=this.loginForm.get("rememberMe")?.value;this.loading=!0,this.authenticationService.login$(r.toLowerCase(),t).subscribe(m=>{console.log(m),n?localStorage.setItem("savedUserEmail",r):localStorage.removeItem("savedUserEmail"),this.router.navigate(["/"]),this.loading=!1},m=>{this.notificationService.openSnackBar(m.error),this.loading=!1})}resetPassword(){this.router.navigate(["/auth/password-reset-request"])}}return u.\u0275fac=function(r){return new(r||u)(e.Y36(c.F0),e.Y36(f.Dx),e.Y36(h.g),e.Y36(w.$))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-login"]],decls:24,vars:6,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"container","login-container"],["fxFlex","30%","fxFlex.sm","50%","fxFlex.xs","90%",3,"formGroup"],[1,"full-width"],["id","emailInput","matInput","","placeholder","\u0418\u043c\u0435\u0439\u043b","formControlName","email","autocomplete","email","type","email"],["id","invalidEmailError",4,"ngIf"],["id","requiredEmailError",4,"ngIf"],["id","passwordInput","matInput","","placeholder","\u041f\u0430\u0440\u043e\u043b\u0430","formControlName","password","type","password","autocomplete","current-password"],["id","requiredPasswordError",4,"ngIf"],["formControlName","rememberMe"],[1,"login-actions"],["mat-raised-button","","id","login","color","primary",3,"disabled","click"],["mat-button","","id","resetPassword","type","button",3,"click"],["mode","indeterminate",4,"ngIf"],["id","invalidEmailError"],["id","requiredEmailError"],["id","requiredPasswordError"],["mode","indeterminate"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"form",1)(2,"mat-card")(3,"mat-card-title"),e._uU(4,"Recruit Mint"),e.qZA(),e.TgZ(5,"mat-card-subtitle"),e._uU(6,"\u0412\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430"),e.qZA(),e.TgZ(7,"mat-card-content")(8,"mat-form-field",2),e._UZ(9,"input",3),e.YNc(10,A,2,0,"mat-error",4),e.YNc(11,F,6,0,"mat-error",5),e.qZA(),e.TgZ(12,"mat-form-field",2),e._UZ(13,"input",6),e.YNc(14,q,6,0,"mat-error",7),e.qZA(),e.TgZ(15,"div",2)(16,"mat-slide-toggle",8),e._uU(17,"\u0417\u0430\u043f\u043e\u043c\u043d\u0438 \u0442\u043e\u0437\u0438 \u0438\u043c\u0435\u0439\u043b \u0430\u0434\u0440\u0435\u0441"),e.qZA()()(),e.TgZ(18,"mat-card-actions",9)(19,"button",10),e.NdJ("click",function(){return t.login()}),e._uU(20," \u041b\u043e\u0433\u0438\u043d "),e.qZA(),e.TgZ(21,"button",11),e.NdJ("click",function(){return t.resetPassword()}),e._uU(22," \u0417\u0430\u0431\u0440\u0430\u0432\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0430 "),e.qZA()()(),e.YNc(23,P,1,0,"mat-progress-bar",12),e.qZA()()),2&r&&(e.xp6(1),e.Q6J("formGroup",t.loginForm),e.xp6(9),e.Q6J("ngIf",t.loginForm.controls.email.hasError("email")),e.xp6(1),e.Q6J("ngIf",t.loginForm.controls.email.hasError("required")),e.xp6(3),e.Q6J("ngIf",t.loginForm.controls.password.hasError("required")),e.xp6(5),e.Q6J("disabled",t.loginForm.invalid||t.loading),e.xp6(4),e.Q6J("ngIf",t.loading))},dependencies:[p.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,l.xw,l.Wh,l.yH,_.lW,a.a8,a.dn,a.n5,a.$j,a.hq,Z.pW,d.TO,d.KE,v.Nt,T.Rr]}),u})();function I(u,i){1&u&&(e.TgZ(0,"mat-error",10),e._uU(1," \u0418\u043c\u0435\u0439\u043b \u0430\u0434\u0440\u0435\u0441\u044a\u0442 \u0435 \u043d\u0435\u0432\u0430\u043b\u0438\u0434\u0435\u043d "),e.qZA())}function U(u,i){1&u&&(e.TgZ(0,"mat-error",11),e._uU(1," \u0418\u043c\u0435\u0439\u043b \u0430\u0434\u0440\u0435\u0441\u044a\u0442 \u0435 "),e.TgZ(2,"strong"),e._uU(3,"\u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e"),e.qZA(),e._uU(4," \u043f\u043e\u043b\u0435 "),e.qZA())}function R(u,i){1&u&&e._UZ(0,"mat-progress-bar",12)}let B=(()=>{class u{constructor(r,t,n,m){this.authService=r,this.notificationService=t,this.titleService=n,this.router=m}ngOnInit(){this.titleService.setTitle("angular-material-template - Password Reset Request"),this.form=new o.nJ({email:new o.p4("",[o.kI.required,o.kI.email])}),this.form.get("email")?.valueChanges.subscribe(r=>{this.email=r.toLowerCase()})}resetPassword(){this.loading=!0,this.authService.passwordResetRequest(this.email).subscribe(r=>{this.router.navigate(["/auth/password-reset",{email:this.email}]),this.notificationService.openSnackBar("\u041d\u0430 \u0432\u0430\u0448\u0438\u044f \u0438\u043c\u0435\u0439\u043b \u0435 \u0438\u0437\u043f\u0440\u0430\u0442\u0435\u043d\u043e \u043f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0437\u0430 \u0441\u043c\u044f\u043d\u0430 \u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0430.")},r=>{this.loading=!1,this.notificationService.openSnackBar(r.error)})}cancel(){this.router.navigate(["/"])}}return u.\u0275fac=function(r){return new(r||u)(e.Y36(w.$),e.Y36(h.g),e.Y36(f.Dx),e.Y36(c.F0))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-password-reset-request"]],decls:18,vars:5,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"container","login-container"],["fxFlex","30%","fxFlex.sm","50%","fxFlex.xs","90%",3,"formGroup"],[1,"full-width"],["id","emailInput","matInput","","placeholder","\u0418\u043c\u0435\u0439\u043b","formControlName","email","autocomplete","email","type","email"],["id","invalidEmailError",4,"ngIf"],["id","requiredEmailError",4,"ngIf"],[1,"login-actions"],["id","submit","mat-raised-button","","color","primary",3,"disabled","click"],["id","cancel","mat-button","",3,"click"],["mode","indeterminate",4,"ngIf"],["id","invalidEmailError"],["id","requiredEmailError"],["mode","indeterminate"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"form",1)(2,"mat-card")(3,"mat-card-title"),e._uU(4,"Recruit Mint"),e.qZA(),e.TgZ(5,"mat-card-subtitle"),e._uU(6,"\u0417\u0430\u044f\u0432\u043a\u0430 \u0437\u0430 \u043f\u043e\u0434\u043d\u043e\u0432\u044f\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0430"),e.qZA(),e.TgZ(7,"mat-card-content")(8,"mat-form-field",2),e._UZ(9,"input",3),e.YNc(10,I,2,0,"mat-error",4),e.YNc(11,U,5,0,"mat-error",5),e.qZA()(),e.TgZ(12,"mat-card-actions",6)(13,"button",7),e.NdJ("click",function(){return t.resetPassword()}),e._uU(14," \u0421\u043c\u044f\u043d\u0430 \u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0430 "),e.qZA(),e.TgZ(15,"button",8),e.NdJ("click",function(){return t.cancel()}),e._uU(16,"\u041e\u0442\u043a\u0430\u0437"),e.qZA()()(),e.YNc(17,R,1,0,"mat-progress-bar",9),e.qZA()()),2&r&&(e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(9),e.Q6J("ngIf",t.form.controls.email.hasError("email")),e.xp6(1),e.Q6J("ngIf",t.form.controls.email.hasError("required")),e.xp6(2),e.Q6J("disabled",t.form.invalid||t.loading),e.xp6(4),e.Q6J("ngIf",t.loading))},dependencies:[p.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,l.xw,l.Wh,l.yH,_.lW,a.a8,a.dn,a.n5,a.$j,a.hq,Z.pW,d.TO,d.KE,v.Nt]}),u})();var E=s(7392);function N(u,i){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," \u0412\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u043d\u043e\u0432\u0430 \u043f\u0430\u0440\u043e\u043b\u0430 "),e.qZA())}function y(u,i){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," \u0412\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u043e\u0442\u043d\u043e\u0432\u043e \u043d\u043e\u0432\u0430\u0442\u0430 \u043f\u0430\u0440\u043e\u043b\u0430 "),e.qZA())}function J(u,i){1&u&&e._UZ(0,"mat-progress-bar",13)}let x=(()=>{class u{constructor(r,t,n,m,g){this.activeRoute=r,this.router=t,this.authService=n,this.notificationService=m,this.titleService=g,this.titleService.setTitle("angular-material-template - Password Reset"),this.hideNewPassword=!0,this.hideNewPasswordConfirm=!0}ngOnInit(){this.activeRoute.queryParamMap.subscribe(r=>{this.token=r.get("token")+"",this.email=r.get("email")+"",(!this.token||!this.email)&&this.router.navigate(["/"])}),this.email=this.activeRoute.snapshot.paramMap.get("email")||"",this.form=new o.nJ({newPassword:new o.p4("",o.kI.required),newPasswordConfirm:new o.p4("",o.kI.required)})}resetPassword(){const r=this.form.get("newPassword")?.value,t=this.form.get("newPasswordConfirm")?.value;r===t?(this.loading=!0,this.authService.passwordReset(this.email,this.token,r,t).subscribe(()=>{this.notificationService.openSnackBar("\u041f\u0430\u0440\u043e\u043b\u0430\u0442\u0430 \u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u0435\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e."),this.router.navigate(["/auth/login"])},n=>{this.notificationService.openSnackBar(n.error),this.loading=!1})):this.notificationService.openSnackBar("\u041f\u0430\u0440\u043e\u043b\u0438\u0442\u0435 \u043d\u0435 \u0441\u044a\u0432\u043f\u0430\u0434\u0430\u0442")}cancel(){this.router.navigate(["/auth/login"])}}return u.\u0275fac=function(r){return new(r||u)(e.Y36(c.gz),e.Y36(c.F0),e.Y36(w.$),e.Y36(h.g),e.Y36(f.Dx))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-password-reset"]],decls:26,vars:10,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"container","login-container"],["fxFlex","30%","fxFlex.sm","50%","fxFlex.xs","90%",3,"formGroup"],[1,"full-width"],["id","emailInput","matInput","","readonly","","disabled","",3,"value"],["id","passwordInput","matInput","","placeholder","\u041d\u043e\u0432\u0430 \u043f\u0430\u0440\u043e\u043b\u0430","formControlName","newPassword","autocomplete","new-password",3,"type"],["id","togglePasswordVisibility","matSuffix","",3,"click"],[4,"ngIf"],["id","passwordConfirmInput","matInput","","placeholder","\u041f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0430","formControlName","newPasswordConfirm","autocomplete","new-password",3,"type"],["id","togglePasswordConfirmVisibility","matSuffix","",3,"click"],[1,"login-actions"],["id","submit","mat-raised-button","","color","primary",3,"disabled","click"],["id","cancel","mat-button","",3,"click"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"form",1)(2,"mat-card")(3,"mat-card-title"),e._uU(4,"Recruit Mint"),e.qZA(),e.TgZ(5,"mat-card-subtitle"),e._uU(6,"\u0417\u0430\u0431\u0440\u0430\u0432\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0430"),e.qZA(),e.TgZ(7,"mat-card-content")(8,"mat-form-field",2),e._UZ(9,"input",3),e.qZA(),e.TgZ(10,"mat-form-field",2),e._UZ(11,"input",4),e.TgZ(12,"mat-icon",5),e.NdJ("click",function(){return t.hideNewPassword=!t.hideNewPassword}),e._uU(13),e.qZA(),e.YNc(14,N,2,0,"mat-error",6),e.qZA(),e.TgZ(15,"mat-form-field",2),e._UZ(16,"input",7),e.TgZ(17,"mat-icon",8),e.NdJ("click",function(){return t.hideNewPasswordConfirm=!t.hideNewPasswordConfirm}),e._uU(18),e.qZA(),e.YNc(19,y,2,0,"mat-error",6),e.qZA()(),e.TgZ(20,"mat-card-actions",9)(21,"button",10),e.NdJ("click",function(){return t.resetPassword()}),e._uU(22," \u041e\u041a "),e.qZA(),e.TgZ(23,"button",11),e.NdJ("click",function(){return t.cancel()}),e._uU(24,"\u041e\u0431\u0440\u0430\u043d\u043e \u043a\u044a\u043c \u041b\u043e\u0433\u0438\u043d"),e.qZA()()(),e.YNc(25,J,1,0,"mat-progress-bar",12),e.qZA()()),2&r&&(e.xp6(1),e.Q6J("formGroup",t.form),e.xp6(8),e.Q6J("value",t.email),e.xp6(2),e.Q6J("type",t.hideNewPassword?"password":"text"),e.xp6(2),e.hij(" ",t.hideNewPassword?"visibility":"visibility_off"," "),e.xp6(1),e.Q6J("ngIf",t.form.controls.newPassword.hasError("required")),e.xp6(2),e.Q6J("type",t.hideNewPasswordConfirm?"password":"text"),e.xp6(2),e.hij(" ",t.hideNewPasswordConfirm?"visibility":"visibility_off"," "),e.xp6(1),e.Q6J("ngIf",t.form.controls.newPasswordConfirm.hasError("required")),e.xp6(2),e.Q6J("disabled",t.form.invalid||t.loading),e.xp6(4),e.Q6J("ngIf",t.loading))},dependencies:[p.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,l.xw,l.Wh,l.yH,E.Hw,_.lW,a.a8,a.dn,a.n5,a.$j,a.hq,Z.pW,d.TO,d.KE,d.R9,v.Nt]}),u})();function S(u,i){1&u&&(e.TgZ(0,"mat-error",16),e._uU(1," \u041c\u043e\u043b\u044f \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0432\u0430\u043b\u0438\u0434\u0435\u043d \u0438\u043c\u0435\u0439\u043b \u0430\u0434\u0440\u0435\u0441 "),e.qZA())}function k(u,i){1&u&&(e.TgZ(0,"mat-error",17)(1,"span"),e._uU(2,"\u0418\u043c\u0435\u0439\u043b\u044a\u0442 \u0435 "),e.TgZ(3,"strong"),e._uU(4,"\u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e"),e.qZA(),e._uU(5," \u043f\u043e\u043b\u0435"),e.qZA()())}function Y(u,i){1&u&&(e.TgZ(0,"mat-error",18)(1,"span"),e._uU(2,"\u041f\u0430\u0440\u043e\u043b\u0430\u0442\u0430 \u0435 "),e.TgZ(3,"strong"),e._uU(4,"\u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e"),e.qZA(),e._uU(5," \u043f\u043e\u043b\u0435"),e.qZA()())}function D(u,i){1&u&&(e.TgZ(0,"mat-error"),e._uU(1," \u041f\u0430\u0440\u043e\u043b\u0430\u0442\u0430 \u0435 "),e.TgZ(2,"strong"),e._uU(3,"\u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e"),e.qZA(),e._uU(4," \u043f\u043e\u043b\u0435 "),e.qZA())}function L(u,i){1&u&&e._UZ(0,"mat-progress-bar",19)}let Q=(()=>{class u{constructor(r,t,n,m){this.router=r,this.titleService=t,this.notificationService=n,this.authenticationService=m,this.hideNewPassword=!0,this.hideNewPasswordConfirm=!0}ngOnInit(){this.titleService.setTitle("angular-material-template - Register"),this.createForm()}createForm(){const r=localStorage.getItem("savedUserEmail");this.loginForm=new o.nJ({email:new o.p4(r,[o.kI.required,o.kI.email]),password:new o.p4("",o.kI.required),passwordConfirm:new o.p4("",o.kI.required),phone:new o.p4("")})}register(){const r=this.loginForm.get("email")?.value,t=this.loginForm.get("password")?.value,n=this.loginForm.get("passwordConfirm")?.value;this.loginForm.get("phone"),t===n?(this.loading=!0,this.authenticationService.register$(r.toLowerCase(),t).subscribe(g=>{console.log(g),this.router.navigate(["/"])},g=>{this.notificationService.openSnackBar(g.error),this.loading=!1})):this.notificationService.openSnackBar("\u041f\u0430\u0440\u043e\u043b\u0438\u0442\u0435 \u043d\u0435 \u0441\u044a\u0432\u043f\u0430\u0434\u0430\u0442")}navigateToLoginPage(){this.router.navigate(["/auth/login"])}}return u.\u0275fac=function(r){return new(r||u)(e.Y36(c.F0),e.Y36(f.Dx),e.Y36(h.g),e.Y36(w.$))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-register"]],decls:28,vars:11,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"container","login-container"],["fxFlex","30%","fxFlex.sm","50%","fxFlex.xs","90%",3,"formGroup"],[1,"full-width"],["id","emailInput","matInput","","placeholder","\u0418\u043c\u0435\u0439\u043b","formControlName","email","autocomplete","email","type","email"],["id","invalidEmailError",4,"ngIf"],["id","requiredEmailError",4,"ngIf"],["id","passwordInput","matInput","","placeholder","\u041f\u0430\u0440\u043e\u043b\u0430","formControlName","password","autocomplete","current-password",3,"type"],["id","togglePasswordVisibility","matSuffix","",3,"click"],["id","requiredPasswordError",4,"ngIf"],["id","passwordConfirmInput","matInput","","placeholder","\u041f\u043e\u0442\u0432\u044a\u0440\u0436\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0430","formControlName","passwordConfirm","autocomplete","new-password",3,"type"],["id","togglePasswordConfirmVisibility","matSuffix","",3,"click"],[4,"ngIf"],[1,"login-actions"],["mat-raised-button","","id","register","color","primary",3,"disabled","click"],["mat-button","","id","resetPassword","type","button",3,"click"],["mode","indeterminate",4,"ngIf"],["id","invalidEmailError"],["id","requiredEmailError"],["id","requiredPasswordError"],["mode","indeterminate"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"form",1)(2,"mat-card")(3,"mat-card-title"),e._uU(4,"Recruit Mint"),e.qZA(),e.TgZ(5,"mat-card-subtitle"),e._uU(6,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0430"),e.qZA(),e.TgZ(7,"mat-card-content")(8,"mat-form-field",2),e._UZ(9,"input",3),e.YNc(10,S,2,0,"mat-error",4),e.YNc(11,k,6,0,"mat-error",5),e.qZA(),e.TgZ(12,"mat-form-field",2),e._UZ(13,"input",6),e.TgZ(14,"mat-icon",7),e.NdJ("click",function(){return t.hideNewPassword=!t.hideNewPassword}),e._uU(15),e.qZA(),e.YNc(16,Y,6,0,"mat-error",8),e.qZA(),e.TgZ(17,"mat-form-field",2),e._UZ(18,"input",9),e.TgZ(19,"mat-icon",10),e.NdJ("click",function(){return t.hideNewPasswordConfirm=!t.hideNewPasswordConfirm}),e._uU(20),e.qZA(),e.YNc(21,D,5,0,"mat-error",11),e.qZA()(),e.TgZ(22,"mat-card-actions",12)(23,"button",13),e.NdJ("click",function(){return t.register()}),e._uU(24," \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f "),e.qZA(),e.TgZ(25,"button",14),e.NdJ("click",function(){return t.navigateToLoginPage()}),e._uU(26," \u0412\u0445\u043e\u0434 "),e.qZA()()(),e.YNc(27,L,1,0,"mat-progress-bar",15),e.qZA()()),2&r&&(e.xp6(1),e.Q6J("formGroup",t.loginForm),e.xp6(9),e.Q6J("ngIf",t.loginForm.controls.email.hasError("email")),e.xp6(1),e.Q6J("ngIf",t.loginForm.controls.email.hasError("required")),e.xp6(2),e.Q6J("type",t.hideNewPassword?"password":"text"),e.xp6(2),e.hij(" ",t.hideNewPassword?"visibility":"visibility_off"," "),e.xp6(1),e.Q6J("ngIf",t.loginForm.controls.password.hasError("required")),e.xp6(2),e.Q6J("type",t.hideNewPasswordConfirm?"password":"text"),e.xp6(2),e.hij(" ",t.hideNewPasswordConfirm?"visibility":"visibility_off"," "),e.xp6(1),e.Q6J("ngIf",t.loginForm.controls.passwordConfirm.hasError("required")),e.xp6(2),e.Q6J("disabled",t.loginForm.invalid||t.loading),e.xp6(4),e.Q6J("ngIf",t.loading))},dependencies:[p.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,l.xw,l.Wh,l.yH,E.Hw,_.lW,a.a8,a.dn,a.n5,a.$j,a.hq,Z.pW,d.TO,d.KE,d.R9,v.Nt]}),u})();const j=[{path:"",component:s(9093).$,children:[{path:"login",component:b},{path:"register",component:Q},{path:"password-reset-request",component:B},{path:"password-reset",component:x}]}];let O=(()=>{class u{}return u.\u0275fac=function(r){return new(r||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[c.Bz.forChild(j),c.Bz]}),u})();var W=s(3927);let $=(()=>{class u{}return u.\u0275fac=function(r){return new(r||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[p.ez,W.m,O]}),u})()}}]);