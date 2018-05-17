webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setup_setup_component__ = __webpack_require__("../../../../../src/app/setup/setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_chart_history_chart_component__ = __webpack_require__("../../../../../src/app/history-chart/history-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */] },
    { path: 'setup', component: __WEBPACK_IMPORTED_MODULE_3__setup_setup_component__["a" /* SetupComponent */] },
    { path: 'app-history-chart', component: __WEBPACK_IMPORTED_MODULE_4__history_chart_history_chart_component__["a" /* HistoryChartComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*input#message {\r\n    background:#fff;\r\n    border:none;\r\n    outline:none;\r\n    box-shadow:none;\r\n    font-size:1.6em;\r\n    font-weight:300;\r\n    margin-bottom: 3em;\r\n    padding:1.2em .7em;\r\n}\r\n*/\r\n\r\n.details-container  {\r\n    background:#F3F3F3;\r\n    width:100%;\r\n    height: 100%;\r\n    \r\n    \r\n}\r\n/*width:auto;\r\nheight:inherit;\r\npadding:10px;\r\n    margin: 1px;\r\n    height: 100%;*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--<div  fxLayout=\"column\" fxLayoutAlign=\"stretch start\">  <!-- style=\"position:absolute;top:0;left:0;right:0;bottom:0;\"  -->\n  <mat-toolbar style=\"min-height:64px;\" color=\"primary\"  >\n      <button mat-icon-button (click)=\"sidenav.toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <div fxFlex=\"1 1 auto\"></div>\n      <span><i class=\"fa fa-beer\"></i> Sykes Brewing</span>\n  </mat-toolbar>    \n\n  <mat-sidenav-container #sidenav style=\"height:100%;width:100%;\">  <!--style=\"height:100%;width:100%;\"-->\n      <mat-sidenav #sidenav mode=\"push\" opened=\"false\" style=\"min-width:220px;\">\n         <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\">\n          <button mat-button (click)=\"openDialog(); sidenav.toggle();\">\n            <mat-icon>account_box</mat-icon>\n            <span>Login       </span>\n          </button>\n          <button mat-button routerLink=\"/main\" (click)=\"sidenav.toggle()\">\n            <mat-icon>home</mat-icon>\n            <span>Main</span>\n          </button>\n          <button mat-button routerLink=\"/setup\" (click)=\"sidenav.toggle()\">\n            <mat-icon>settings</mat-icon>\n            <span>Setup</span>\n          </button>\n          <button mat-button routerLink=\"/app-history-chart\" (click)=\"sidenav.toggle()\">\n            <mat-icon>show_chart</mat-icon>\n            <span>Chart</span>\n          </button>\n          <button mat-button (click)=\"sidenav.toggle()\">\n            <mat-icon>cancel</mat-icon>\n            <span>Close</span>\n          </button>\n        </div>\n      </mat-sidenav>\n  \n      \n      <div class ='details-container'>\n        <router-outlet ></router-outlet>\n      </div> \n      \n    </mat-sidenav-container>\n  \n\n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_particle_service__ = __webpack_require__("../../../../../src/app/services/particle.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(particleService, dialogsService) {
        this.particleService = particleService;
        this.dialogsService = dialogsService;
    }
    AppComponent.prototype.openDialog = function () {
        this.dialogsService.login();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('tempFormat') == null) {
            localStorage.setItem('tempFormat', 'F');
        }
        this.particleService.CheckLogin()
            .subscribe(function (res) {
            var islog = res;
            console.log('init login check', islog);
            if (!islog) {
                _this.openDialog();
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_particle_service__["a" /* ParticleService */], __WEBPACK_IMPORTED_MODULE_1__services_dialogs_service__["a" /* DialogsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_particle_service__ = __webpack_require__("../../../../../src/app/services/particle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_dialogs_service__ = __webpack_require__("../../../../../src/app/services/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_dialog_login_dialog_component__ = __webpack_require__("../../../../../src/app/login-dialog/login-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__setup_setup_component__ = __webpack_require__("../../../../../src/app/setup/setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__beerconstant_beerconstant_component__ = __webpack_require__("../../../../../src/app/beerconstant/beerconstant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__change_temp_dialog_change_temp_dialog_component__ = __webpack_require__("../../../../../src/app/change-temp-dialog/change-temp-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__chamber_constant_chamber_constant_component__ = __webpack_require__("../../../../../src/app/chamber-constant/chamber-constant.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__off_off_component__ = __webpack_require__("../../../../../src/app/off/off.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__beer_profile_beer_profile_component__ = __webpack_require__("../../../../../src/app/beer-profile/beer-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__profile_chart_profile_chart_component__ = __webpack_require__("../../../../../src/app/profile-chart/profile-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__profile_dialog_profile_dialog_component__ = __webpack_require__("../../../../../src/app/profile-dialog/profile-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__history_chart_history_chart_component__ = __webpack_require__("../../../../../src/app/history-chart/history-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tab_change_dialog_tab_change_dialog_component__ = __webpack_require__("../../../../../src/app/tab-change-dialog/tab-change-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var firebaseConfig = {
    apiKey: "AIzaSyC5tA-38qkvkFKQdGlxwh2GkdYtOyHT_Z8",
    authDomain: "fermentor-e69ac.firebaseapp.com",
    databaseURL: "https://fermentor-e69ac.firebaseio.com",
    projectId: "fermentor-e69ac",
    storageBucket: "fermentor-e69ac.appspot.com",
    messagingSenderId: "700960236201"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_dialog_login_dialog_component__["a" /* LoginDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__setup_setup_component__["a" /* SetupComponent */],
                __WEBPACK_IMPORTED_MODULE_19__beerconstant_beerconstant_component__["a" /* BeerConstantComponent */],
                __WEBPACK_IMPORTED_MODULE_20__change_temp_dialog_change_temp_dialog_component__["a" /* ChangeTempDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_21__chamber_constant_chamber_constant_component__["a" /* ChamberConstantComponent */],
                __WEBPACK_IMPORTED_MODULE_22__off_off_component__["a" /* OffComponent */],
                __WEBPACK_IMPORTED_MODULE_23__beer_profile_beer_profile_component__["a" /* BeerProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__profile_chart_profile_chart_component__["a" /* ProfileChartComponent */],
                __WEBPACK_IMPORTED_MODULE_25__profile_dialog_profile_dialog_component__["a" /* ProfileDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_26__history_chart_history_chart_component__["a" /* HistoryChartComponent */],
                __WEBPACK_IMPORTED_MODULE_27__tab_change_dialog_tab_change_dialog_component__["a" /* TabChangeDialogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11_ng2_google_charts__["a" /* Ng2GoogleChartsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatExpansionModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_13__services_particle_service__["a" /* ParticleService */],
                __WEBPACK_IMPORTED_MODULE_14__services_dialogs_service__["a" /* DialogsService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__login_dialog_login_dialog_component__["a" /* LoginDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__change_temp_dialog_change_temp_dialog_component__["a" /* ChangeTempDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_25__profile_dialog_profile_dialog_component__["a" /* ProfileDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__tab_change_dialog_tab_change_dialog_component__["a" /* TabChangeDialogComponent */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/beer-profile/beer-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!profileRunning\" fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutWrap.gt-xs>\n  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n    <form novalidate #f=\"ngForm\" (ngSubmit)=\"createNewProfile(f.value.profile)\">\n      <mat-form-field>\n        <input matInput placeholder=\"Enter New Profile Name\" name=\"profile\" ngModel>\n      </mat-form-field>\n      <button mat-raised-button color='primary' type=\"submit\">Create Profile</button>\n    </form>\n  </div>\n  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n    <mat-form-field>\n      <mat-select placeholder=\"Select Profile\" [(ngModel)]=\"currentProfile\" (change)=\"profileChange($event.value)\">\n        <mat-option *ngFor=\"let profile of profilelist\" [value]=\"profile.key\">\n          {{ profile.key}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\n      <button class='button' mat-raised-button color='primary' (click)=\"startProfile()\">Start Profile&nbsp;&nbsp;&nbsp;</button>\n      <button class='button' mat-raised-button color='accent' (click)=\"deleteProfile()\">Delete Profile</button>\n    </div>\n    <br>\n    <br>\n\n  </div>\n  <br>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table #table [dataSource]=\"dataSource\">\n\n      <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n      <!-- Kay Column Hidden -->\n      <ng-container matColumnDef=\"key\">\n        <mat-header-cell *matHeaderCellDef> Key </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.key}} </mat-cell>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n      </ng-container>\n\n      <!-- Day Column -->\n      <ng-container matColumnDef=\"day\">\n        <mat-header-cell *matHeaderCellDef> Day </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.day}} </mat-cell>\n      </ng-container>\n\n      <!-- Temperature Column -->\n      <ng-container matColumnDef=\"temperature\">\n        <mat-header-cell *matHeaderCellDef> Temperature </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.temperature}} </mat-cell>\n      </ng-container>\n\n      <!-- Edit Row Column -->\n      <ng-container matColumnDef=\"edit\">\n        <mat-header-cell *matHeaderCellDef> Edit </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <button mat-button color='primary' (click)=\"openDialogEdit(element)\">\n            <i class=\"fa fa-pencil-square fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n        </mat-cell>\n      </ng-container>\n\n      <!-- Delete Row Column -->\n      <ng-container matColumnDef=\"delete\">\n        <mat-header-cell *matHeaderCellDef> Delete </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <button mat-button color='primary' (click)=\"deleteRow(element)\">\n            <i class=\"fa fa-trash fa-2x\" aria-hidden=\"true\"></i>\n          </button>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <button mat-raised-button color='primary' (click)=\"openDialogAdd()\">Add Row</button>\n  </div>\n  <br>\n</div>\n\n<div *ngIf=\"profileRunning\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n<mat-card class='temperaturecard' fxFlex=\"grow\">\n  <mat-card-content align=\"center\">\n    Running Profile: {{ (item | async)?.profileName }}\n  </mat-card-content>\n</mat-card>\n</div>\n<app-profile-chart class='googleChart' [currentProfile]=\"currentProfile\"></app-profile-chart>\n\n\n\n  <div *ngIf=\"profileRunning\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n    <div fxLayout='row' fxLayoutAlign=\"start start\">\n      <mat-card class='temperaturecard' fxFlex=\"grow\">\n        <mat-card-header>\n          <i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Beer</mat-card-header>\n        <mat-card-content align=\"center\">\n          <h2>{{ (item | async)?.beerTemp }}</h2>\n        </mat-card-content>\n      </mat-card>\n      <mat-card class='temperaturecard' fxFlex=\"grow\">\n        <mat-card-header>\n          <i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Chamber</mat-card-header>\n        <mat-card-content align=\"center\">\n          <h2>{{ (item | async)?.fridgeTemp }}</h2>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    <div fxLayout='row' fxLayoutAlign=\"start start\">\n      <mat-card class='temperaturecard' fxFlex=\"grow\">\n        <mat-card-header>\n          <i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Beer\n          <br>&nbsp;&nbsp;Target</mat-card-header>\n        <mat-card-content align=\"center\">\n          <div style='height:2px'></div>\n          <h2>{{ ((item | async)?.targetTemp ) }}</h2>\n        </mat-card-content>\n\n      </mat-card>\n      <mat-card class='temperaturecard' fxFlex=\"grow\">\n        <mat-card-header>\n          <i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Chamber\n          <br>&nbsp;&nbsp;Target</mat-card-header>\n        <mat-card-content align=\"center\">\n          <div style='height:2px'></div>\n          <h2>{{ ((item | async)?.fridgeTarget ) }}</h2>\n        </mat-card-content>\n\n      </mat-card>\n    </div>\n    <mat-card class='temperaturecard' fxFlex=\"auto\">\n      <mat-card-header>\n        <i class=\"fa fa-clock-o fa-2x\"></i>\n        &nbsp;&nbsp;Current State: {{ ((item | async)?.currentState) }}\n        <br>&nbsp;&nbsp;For: {{ ((item | async)?.stateTime ) }}\n      </mat-card-header>\n      <mat-card-content align=\"left\">\n\n      </mat-card-content>\n    </mat-card>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/beer-profile/beer-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #607d8b; }\n  .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #00838f; }\n  .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #ff5722; }\n  .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n  .mat-pseudo-checkbox::after {\n    color: #fafafa; }\n\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #00838f; }\n\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #607d8b; }\n\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #ff5722; }\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n\n.mat-app-background {\n  background-color: #fafafa; }\n\n.mat-theme-loaded-marker {\n  display: none; }\n\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n    .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n\n.mat-button, .mat-icon-button {\n  background: transparent; }\n  .mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(96, 125, 139, 0.12); }\n  .mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(0, 131, 143, 0.12); }\n  .mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(255, 87, 34, 0.12); }\n  .mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n  .mat-button.mat-primary, .mat-icon-button.mat-primary {\n    color: #607d8b; }\n  .mat-button.mat-accent, .mat-icon-button.mat-accent {\n    color: #00838f; }\n  .mat-button.mat-warn, .mat-icon-button.mat-warn {\n    color: #ff5722; }\n  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #607d8b; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #00838f; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #ff5722; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.1); }\n\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.1); }\n\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.1); }\n\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.2); }\n\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.2); }\n\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.2); }\n\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #607d8b; }\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #00838f; }\n\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #ff5722; }\n\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.26); }\n\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-primary {\n  background-color: #607d8b;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-warn {\n  background-color: #ff5722;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-accent {\n  background-color: #00838f;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-table {\n  background: white; }\n\n.mat-row, .mat-header-row {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-cell {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-next-button,\n.mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    color: rgba(0, 0, 0, 0.38); }\n\n:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-calendar-body-selected {\n  background-color: #607d8b;\n  color: white; }\n\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(96, 125, 139, 0.4); }\n\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-focused .mat-form-field-label {\n  color: #607d8b; }\n  .mat-focused .mat-form-field-label.mat-accent {\n    color: #00838f; }\n  .mat-focused .mat-form-field-label.mat-warn {\n    color: #ff5722; }\n\n.mat-focused .mat-form-field-required-marker {\n  color: #00838f; }\n\n.mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n\n.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 1px;\n  background-repeat: repeat-x; }\n\n.mat-form-field-ripple {\n  background-color: #607d8b; }\n  .mat-form-field-ripple.mat-accent {\n    background-color: #00838f; }\n  .mat-form-field-ripple.mat-warn {\n    background-color: #ff5722; }\n\n.mat-form-field-invalid .mat-form-field-label {\n  color: #ff5722; }\n  .mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #ff5722; }\n\n.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #ff5722; }\n\n.mat-error {\n  color: #ff5722; }\n\n.mat-icon.mat-primary {\n  color: #607d8b; }\n\n.mat-icon.mat-accent {\n  color: #00838f; }\n\n.mat-icon.mat-warn {\n  color: #ff5722; }\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-nav-list .mat-list-item {\n  outline: none; }\n  .mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-list-option {\n  outline: none; }\n  .mat-list-option:hover, .mat-list-option.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-menu-panel {\n  background: white; }\n\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-menu-item[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item:focus:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-paginator {\n  background: white; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-paginator-increment,\n.mat-paginator-decrement {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-decrement {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23cfd8dc%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar-buffer {\n  background-color: #cfd8dc; }\n\n.mat-progress-bar-fill::after {\n  background-color: #607d8b; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23006064%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #006064; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #00838f; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffccbc%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffccbc; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #ff5722; }\n\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #607d8b; }\n\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #00838f; }\n\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #ff5722; }\n\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #607d8b; }\n\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #607d8b; }\n\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.26); }\n\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #00838f; }\n\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #00838f; }\n\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.26); }\n\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff5722; }\n\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #ff5722; }\n\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.26); }\n\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #607d8b; }\n\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #00838f; }\n\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #ff5722; }\n\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #ff5722; }\n\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-drawer.mat-drawer-push {\n    background-color: white; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #00bcd4; }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(0, 188, 212, 0.5); }\n\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(0, 188, 212, 0.12); }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ff5722; }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(255, 87, 34, 0.5); }\n\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.12); }\n\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #607d8b; }\n\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #00838f; }\n\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #ff5722; }\n\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-slider-focus-ring {\n  background-color: rgba(0, 131, 143, 0.2); }\n\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-step-header .mat-step-icon {\n  background-color: #607d8b;\n  color: white; }\n\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n\n.mat-tab-group.mat-primary .mat-tab-label:focus, .mat-tab-group.mat-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-primary .mat-tab-link:focus {\n  background-color: rgba(207, 216, 220, 0.3); }\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #607d8b; }\n\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-accent .mat-tab-label:focus, .mat-tab-group.mat-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-accent .mat-tab-link:focus {\n  background-color: rgba(0, 96, 100, 0.3); }\n\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #00838f; }\n\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-warn .mat-tab-label:focus, .mat-tab-group.mat-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-warn .mat-tab-link:focus {\n  background-color: rgba(255, 204, 188, 0.3); }\n\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #ff5722; }\n\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label:focus, .mat-tab-group.mat-background-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-link:focus {\n  background-color: rgba(207, 216, 220, 0.3); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #607d8b; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-tab-group.mat-background-accent .mat-tab-label:focus, .mat-tab-group.mat-background-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-link:focus {\n  background-color: rgba(0, 96, 100, 0.3); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #00838f; }\n\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-tab-group.mat-background-warn .mat-tab-label:focus, .mat-tab-group.mat-background-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-link:focus {\n  background-color: rgba(255, 204, 188, 0.3); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #ff5722; }\n\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-primary {\n    background: #607d8b;\n    color: white; }\n  .mat-toolbar.mat-accent {\n    background: #00838f;\n    color: white; }\n  .mat-toolbar.mat-warn {\n    background: #ff5722;\n    color: white; }\n\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n\n.mat-simple-snackbar-action {\n  color: #00838f; }\n\n.color-primary {\n  color: #607d8b; }\n\n.temperaturecard {\n  background-color: #607d8b;\n  color: white;\n  margin-top: 5px;\n  margin-left: 2.5px;\n  margin-right: 2.5px; }\n\n.button {\n  margin-top: 5px; }\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 800px;\n  min-width: 300px;\n  width: 100%; }\n\n.googleChart {\n  min-height: 100px;\n  max-height: 600px;\n  width: 100%; }\n\n.mat-table {\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/beer-profile/beer-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerProfileComponent; });
/* unused harmony export chartDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_particle_service__ = __webpack_require__("../../../../../src/app/services/particle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_dialog_profile_dialog_component__ = __webpack_require__("../../../../../src/app/profile-dialog/profile-dialog.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



////import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/startWith';
//import 'rxjs/add/observable/merge';
//import 'rxjs/add/operator/map';


//dialog

var BeerProfileComponent = (function () {
    function BeerProfileComponent(fb, particleService, mdDialog) {
        this.fb = fb;
        this.particleService = particleService;
        this.mdDialog = mdDialog;
        this.profilelist = [];
        this.currentProfile = 'null';
        this.profileRunning = false;
        this.displayedColumns = ['day', 'temperature', 'edit', 'delete'];
    }
    BeerProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fb.profileList.subscribe(function (res) { return _this.profilelist = res; });
        this.item.first().subscribe(function (res) {
            _this.currentProfile = res.profileName;
        });
        this.item.subscribe(function (res) {
            if (res.mode == '3')
                _this.profileRunning = true;
            else
                _this.profileRunning = false;
        });
    };
    // the particle function expects a sting of format {profileName,0,66,3,70,4,65,} the numbers are day temperature 
    // pairs.  the trailing comma is required.  
    BeerProfileComponent.prototype.startProfile = function () {
        var _this = this;
        var profile;
        var profileString = this.currentProfile;
        var tempFormat = localStorage.getItem('tempFormat');
        this.fb.table(this.currentProfile).subscribe(function (res) {
            profile = res;
            console.log('start profile', profile);
            profile.forEach(function (eachObj) {
                if (tempFormat == 'F') {
                    eachObj.temperature = ((eachObj.temperature - 32) / 1.8).toFixed(1);
                }
                profileString = profileString + ',' + eachObj.day + ',' + eachObj.temperature;
            });
            profileString = profileString + ',';
            console.log('profile string check', profileString);
            console.log('profile length', profileString.length);
            _this.particleService.CallFunction('profileSetup', profileString)
                .subscribe(function (res) {
                console.log('function profilesetup response', res);
                _this.particleService.CallFunction('setMode', '3')
                    .subscribe(function (res) {
                    console.log('function call response', res);
                });
            });
        });
    };
    BeerProfileComponent.prototype.createNewProfile = function (profile) {
        this.fb.createNewProfile(profile);
        this.profileChange(profile);
    };
    BeerProfileComponent.prototype.profileChange = function (profile) {
        this.currentProfile = profile;
        this.dataSource = new chartDataSource(this.fb, profile);
    };
    BeerProfileComponent.prototype.openDialogEdit = function (row) {
        var _this = this;
        var dialogRef = this.mdDialog.open(__WEBPACK_IMPORTED_MODULE_5__profile_dialog_profile_dialog_component__["a" /* ProfileDialogComponent */], {
            width: '250px',
            data: { row: row }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.row = result;
            _this.fb.updateRow(_this.currentProfile, _this.row.key, { 'temperature': _this.row.temperature, 'day': _this.row.day });
        });
    };
    BeerProfileComponent.prototype.openDialogAdd = function () {
        var _this = this;
        this.row = { day: null, temperature: null };
        var dialogRef = this.mdDialog.open(__WEBPACK_IMPORTED_MODULE_5__profile_dialog_profile_dialog_component__["a" /* ProfileDialogComponent */], {
            width: '250px',
            data: { row: this.row }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.row = result;
            _this.fb.addRow(_this.currentProfile, _this.row);
        });
    };
    BeerProfileComponent.prototype.deleteRow = function (row) {
        this.fb.deleteRow(this.currentProfile, row.key);
    };
    BeerProfileComponent.prototype.deleteProfile = function () {
        this.fb.deleteList('Profile/' + this.currentProfile);
        this.profileChange('null');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], BeerProfileComponent.prototype, "item", void 0);
    BeerProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-beer-profile',
            template: __webpack_require__("../../../../../src/app/beer-profile/beer-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/beer-profile/beer-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_4__services_particle_service__["a" /* ParticleService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], BeerProfileComponent);
    return BeerProfileComponent;
}());

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var chartDataSource = (function (_super) {
    __extends(chartDataSource, _super);
    //@Input() parent:BeerProfileComponent;
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    function chartDataSource(fb, currentPro) {
        var _this = _super.call(this) || this;
        _this.fb = fb;
        _this.currentPro = currentPro;
        return _this;
    }
    chartDataSource.prototype.connect = function () {
        return this.fb.table(this.currentPro);
    };
    chartDataSource.prototype.disconnect = function () { };
    return chartDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/beerconstant/beerconstant.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout =\"column\"  fxLayoutAlign =\"start stretch\"  >\n  <div fxLayout = 'row' fxLayoutAlign=\"start start\">\n    <mat-card class='temperaturecard' fxFlex=\"grow\">\n      <mat-card-header><i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Beer</mat-card-header>\n      <mat-card-content align=\"center\">\n        <h2>{{ (item | async)?.beerTemp }}</h2>\n      </mat-card-content>\n    </mat-card>\n    <mat-card class='temperaturecard' fxFlex=\"grow\">\n      <mat-card-header><i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Chamber</mat-card-header>\n      <mat-card-content align=\"center\">\n        <h2>{{ (item | async)?.fridgeTemp }}</h2>\n      </mat-card-content>\n    </mat-card>\n  </div>\n  <div fxLayout = 'row' fxLayoutAlign=\"start start\">\n    <mat-card class='temperaturecard' fxFlex=\"grow\">   \n      <mat-card-header><i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Beer<br>&nbsp;&nbsp;Target</mat-card-header>\n      <mat-card-content align=\"center\">\n        <div style = 'height:2px'></div>\n        <h2>{{ ((item | async)?.targetTemp ) }}</h2>\n      </mat-card-content>\n      <mat-card-actions align=\"center\">\n        <button  mat-raised-button color='accent' (click)=\"openDialog()\">&nbsp;&nbsp;Change Target</button>\n      </mat-card-actions>\n    </mat-card>\n    <mat-card class='temperaturecard' fxFlex=\"grow\">   \n      <mat-card-header><i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Chamber<br>&nbsp;&nbsp;Target</mat-card-header>\n      <mat-card-content align=\"center\">\n          <div style = 'height:2px'></div>\n        <h2>{{ ((item | async)?.fridgeTarget ) }}</h2>\n      </mat-card-content>  \n      <mat-card-actions>\n        <div style = 'height:36px'></div>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n  <mat-card class='temperaturecard' fxFlex=\"auto\"> \n    <mat-card-header><i class=\"fa fa-clock-o fa-2x\"></i>\n      &nbsp;&nbsp;Current State:  {{ ((item | async)?.currentState) }}\n      <br>&nbsp;&nbsp;For:  {{ ((item | async)?.stateTime ) }}\n    </mat-card-header>\n    <mat-card-content align=\"left\">\n      \n    </mat-card-content>\n  </mat-card>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/beerconstant/beerconstant.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #607d8b; }\n  .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #00838f; }\n  .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #ff5722; }\n  .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n  .mat-pseudo-checkbox::after {\n    color: #fafafa; }\n\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #00838f; }\n\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #607d8b; }\n\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #ff5722; }\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n\n.mat-app-background {\n  background-color: #fafafa; }\n\n.mat-theme-loaded-marker {\n  display: none; }\n\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n    .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n\n.mat-button, .mat-icon-button {\n  background: transparent; }\n  .mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(96, 125, 139, 0.12); }\n  .mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(0, 131, 143, 0.12); }\n  .mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(255, 87, 34, 0.12); }\n  .mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n  .mat-button.mat-primary, .mat-icon-button.mat-primary {\n    color: #607d8b; }\n  .mat-button.mat-accent, .mat-icon-button.mat-accent {\n    color: #00838f; }\n  .mat-button.mat-warn, .mat-icon-button.mat-warn {\n    color: #ff5722; }\n  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #607d8b; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #00838f; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #ff5722; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.1); }\n\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.1); }\n\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.1); }\n\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.2); }\n\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.2); }\n\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.2); }\n\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #607d8b; }\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #00838f; }\n\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #ff5722; }\n\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.26); }\n\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-primary {\n  background-color: #607d8b;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-warn {\n  background-color: #ff5722;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-accent {\n  background-color: #00838f;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-table {\n  background: white; }\n\n.mat-row, .mat-header-row {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-cell {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-next-button,\n.mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    color: rgba(0, 0, 0, 0.38); }\n\n:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-calendar-body-selected {\n  background-color: #607d8b;\n  color: white; }\n\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(96, 125, 139, 0.4); }\n\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-focused .mat-form-field-label {\n  color: #607d8b; }\n  .mat-focused .mat-form-field-label.mat-accent {\n    color: #00838f; }\n  .mat-focused .mat-form-field-label.mat-warn {\n    color: #ff5722; }\n\n.mat-focused .mat-form-field-required-marker {\n  color: #00838f; }\n\n.mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n\n.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 1px;\n  background-repeat: repeat-x; }\n\n.mat-form-field-ripple {\n  background-color: #607d8b; }\n  .mat-form-field-ripple.mat-accent {\n    background-color: #00838f; }\n  .mat-form-field-ripple.mat-warn {\n    background-color: #ff5722; }\n\n.mat-form-field-invalid .mat-form-field-label {\n  color: #ff5722; }\n  .mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #ff5722; }\n\n.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #ff5722; }\n\n.mat-error {\n  color: #ff5722; }\n\n.mat-icon.mat-primary {\n  color: #607d8b; }\n\n.mat-icon.mat-accent {\n  color: #00838f; }\n\n.mat-icon.mat-warn {\n  color: #ff5722; }\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-nav-list .mat-list-item {\n  outline: none; }\n  .mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-list-option {\n  outline: none; }\n  .mat-list-option:hover, .mat-list-option.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-menu-panel {\n  background: white; }\n\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-menu-item[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item:focus:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-paginator {\n  background: white; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-paginator-increment,\n.mat-paginator-decrement {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-decrement {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23cfd8dc%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar-buffer {\n  background-color: #cfd8dc; }\n\n.mat-progress-bar-fill::after {\n  background-color: #607d8b; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23006064%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #006064; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #00838f; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffccbc%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffccbc; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #ff5722; }\n\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #607d8b; }\n\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #00838f; }\n\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #ff5722; }\n\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #607d8b; }\n\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #607d8b; }\n\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.26); }\n\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #00838f; }\n\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #00838f; }\n\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.26); }\n\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff5722; }\n\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #ff5722; }\n\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.26); }\n\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #607d8b; }\n\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #00838f; }\n\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #ff5722; }\n\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #ff5722; }\n\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-drawer.mat-drawer-push {\n    background-color: white; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #00bcd4; }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(0, 188, 212, 0.5); }\n\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(0, 188, 212, 0.12); }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ff5722; }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(255, 87, 34, 0.5); }\n\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.12); }\n\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #607d8b; }\n\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #00838f; }\n\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #ff5722; }\n\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-slider-focus-ring {\n  background-color: rgba(0, 131, 143, 0.2); }\n\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-step-header .mat-step-icon {\n  background-color: #607d8b;\n  color: white; }\n\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n\n.mat-tab-group.mat-primary .mat-tab-label:focus, .mat-tab-group.mat-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-primary .mat-tab-link:focus {\n  background-color: rgba(207, 216, 220, 0.3); }\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #607d8b; }\n\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-accent .mat-tab-label:focus, .mat-tab-group.mat-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-accent .mat-tab-link:focus {\n  background-color: rgba(0, 96, 100, 0.3); }\n\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #00838f; }\n\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-warn .mat-tab-label:focus, .mat-tab-group.mat-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-warn .mat-tab-link:focus {\n  background-color: rgba(255, 204, 188, 0.3); }\n\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #ff5722; }\n\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label:focus, .mat-tab-group.mat-background-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-link:focus {\n  background-color: rgba(207, 216, 220, 0.3); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #607d8b; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-tab-group.mat-background-accent .mat-tab-label:focus, .mat-tab-group.mat-background-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-link:focus {\n  background-color: rgba(0, 96, 100, 0.3); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #00838f; }\n\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-tab-group.mat-background-warn .mat-tab-label:focus, .mat-tab-group.mat-background-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-link:focus {\n  background-color: rgba(255, 204, 188, 0.3); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #ff5722; }\n\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-primary {\n    background: #607d8b;\n    color: white; }\n  .mat-toolbar.mat-accent {\n    background: #00838f;\n    color: white; }\n  .mat-toolbar.mat-warn {\n    background: #ff5722;\n    color: white; }\n\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n\n.mat-simple-snackbar-action {\n  color: #00838f; }\n\n.color-primary {\n  color: #607d8b; }\n\n.temperaturecard {\n  background-color: #607d8b;\n  color: white;\n  margin-top: 5px;\n  margin-left: 2.5px;\n  margin-right: 2.5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/beerconstant/beerconstant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerConstantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_temp_dialog_change_temp_dialog_component__ = __webpack_require__("../../../../../src/app/change-temp-dialog/change-temp-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeerConstantComponent = (function () {
    function BeerConstantComponent(dialog) {
        this.dialog = dialog;
        this.changeTemp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ;
    BeerConstantComponent.prototype.callParent = function (arg) {
        this.changeTemp.next(arg);
    };
    BeerConstantComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__change_temp_dialog_change_temp_dialog_component__["a" /* ChangeTempDialogComponent */], {
            width: '250px',
            data: { temperature: this.temperature }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.temperature = result;
            if (_this.temperature != "") {
                _this.callParent(_this.temperature);
            }
        });
    };
    BeerConstantComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */])
    ], BeerConstantComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], BeerConstantComponent.prototype, "changeTemp", void 0);
    BeerConstantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-beer-constant',
            template: __webpack_require__("../../../../../src/app/beerconstant/beerconstant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/beerconstant/beerconstant.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], BeerConstantComponent);
    return BeerConstantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chamber-constant/chamber-constant.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout =\"column\"  fxLayoutAlign =\"start stretch\"  >\n    <div fxLayout = 'row' fxLayoutAlign=\"start start\">\n      <mat-card class='temperaturecard' fxFlex=\"grow\">\n        <mat-card-header><i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Beer</mat-card-header>\n        <mat-card-content align=\"center\">\n          <h2>{{ (item | async)?.beerTemp }}</h2>\n        </mat-card-content>\n      </mat-card>\n      <mat-card class='temperaturecard' fxFlex=\"grow\">\n        <mat-card-header><i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Chamber</mat-card-header>\n        <mat-card-content align=\"center\">\n          <h2>{{ (item | async)?.fridgeTemp }}</h2>\n        </mat-card-content>\n      </mat-card>\n    </div>\n    <div fxLayout = 'row' fxLayoutAlign=\"start start\">\n      <mat-card class='temperaturecard' fxFlex=\"grow\"> \n        <mat-card-header><i class=\"fa fa-clock-o fa-2x\"></i>\n        </mat-card-header>\n        <mat-card-content align=\"left\">\n          Current State:  {{ ((item | async)?.currentState) }}\n          <br><font size=\"1\">For:  {{ ((item | async)?.stateTime ) }}</font>\n        </mat-card-content>\n        <mat-card-actions>\n          <div style = 'height:50px'></div>\n        </mat-card-actions>\n      </mat-card>\n      <mat-card class='temperaturecard' fxFlex=\"grow\">   \n        <mat-card-header><i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Chamber<br>&nbsp;&nbsp;Target</mat-card-header>\n        <mat-card-content align=\"center\">\n            <div style = 'height:2px'></div>\n          <h2>{{ ((item | async)?.targetTemp ) }}</h2>\n        </mat-card-content>  \n        <mat-card-actions align=\"center\" >\n            <button  mat-raised-button color='accent' (click)=\"openDialog()\">&nbsp;&nbsp;Change Target</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    \n  \n  \n  \n  </div>\n  \n\n"

/***/ }),

/***/ "../../../../../src/app/chamber-constant/chamber-constant.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #607d8b; }\n  .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #00838f; }\n  .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #ff5722; }\n  .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n  .mat-pseudo-checkbox::after {\n    color: #fafafa; }\n\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #00838f; }\n\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #607d8b; }\n\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #ff5722; }\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n\n.mat-app-background {\n  background-color: #fafafa; }\n\n.mat-theme-loaded-marker {\n  display: none; }\n\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n    .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n\n.mat-button, .mat-icon-button {\n  background: transparent; }\n  .mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(96, 125, 139, 0.12); }\n  .mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(0, 131, 143, 0.12); }\n  .mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(255, 87, 34, 0.12); }\n  .mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n  .mat-button.mat-primary, .mat-icon-button.mat-primary {\n    color: #607d8b; }\n  .mat-button.mat-accent, .mat-icon-button.mat-accent {\n    color: #00838f; }\n  .mat-button.mat-warn, .mat-icon-button.mat-warn {\n    color: #ff5722; }\n  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #607d8b; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #00838f; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #ff5722; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.1); }\n\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.1); }\n\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.1); }\n\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.2); }\n\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.2); }\n\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.2); }\n\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #607d8b; }\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #00838f; }\n\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #ff5722; }\n\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.26); }\n\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-primary {\n  background-color: #607d8b;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-warn {\n  background-color: #ff5722;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-accent {\n  background-color: #00838f;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-table {\n  background: white; }\n\n.mat-row, .mat-header-row {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-cell {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-next-button,\n.mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    color: rgba(0, 0, 0, 0.38); }\n\n:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-calendar-body-selected {\n  background-color: #607d8b;\n  color: white; }\n\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(96, 125, 139, 0.4); }\n\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-focused .mat-form-field-label {\n  color: #607d8b; }\n  .mat-focused .mat-form-field-label.mat-accent {\n    color: #00838f; }\n  .mat-focused .mat-form-field-label.mat-warn {\n    color: #ff5722; }\n\n.mat-focused .mat-form-field-required-marker {\n  color: #00838f; }\n\n.mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n\n.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 1px;\n  background-repeat: repeat-x; }\n\n.mat-form-field-ripple {\n  background-color: #607d8b; }\n  .mat-form-field-ripple.mat-accent {\n    background-color: #00838f; }\n  .mat-form-field-ripple.mat-warn {\n    background-color: #ff5722; }\n\n.mat-form-field-invalid .mat-form-field-label {\n  color: #ff5722; }\n  .mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #ff5722; }\n\n.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #ff5722; }\n\n.mat-error {\n  color: #ff5722; }\n\n.mat-icon.mat-primary {\n  color: #607d8b; }\n\n.mat-icon.mat-accent {\n  color: #00838f; }\n\n.mat-icon.mat-warn {\n  color: #ff5722; }\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-nav-list .mat-list-item {\n  outline: none; }\n  .mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-list-option {\n  outline: none; }\n  .mat-list-option:hover, .mat-list-option.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-menu-panel {\n  background: white; }\n\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-menu-item[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item:focus:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-paginator {\n  background: white; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-paginator-increment,\n.mat-paginator-decrement {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-decrement {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23cfd8dc%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar-buffer {\n  background-color: #cfd8dc; }\n\n.mat-progress-bar-fill::after {\n  background-color: #607d8b; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23006064%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #006064; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #00838f; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffccbc%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffccbc; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #ff5722; }\n\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #607d8b; }\n\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #00838f; }\n\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #ff5722; }\n\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #607d8b; }\n\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #607d8b; }\n\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.26); }\n\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #00838f; }\n\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #00838f; }\n\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.26); }\n\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff5722; }\n\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #ff5722; }\n\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.26); }\n\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #607d8b; }\n\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #00838f; }\n\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #ff5722; }\n\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #ff5722; }\n\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-drawer.mat-drawer-push {\n    background-color: white; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #00bcd4; }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(0, 188, 212, 0.5); }\n\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(0, 188, 212, 0.12); }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ff5722; }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(255, 87, 34, 0.5); }\n\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.12); }\n\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #607d8b; }\n\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #00838f; }\n\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #ff5722; }\n\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-slider-focus-ring {\n  background-color: rgba(0, 131, 143, 0.2); }\n\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-step-header .mat-step-icon {\n  background-color: #607d8b;\n  color: white; }\n\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n\n.mat-tab-group.mat-primary .mat-tab-label:focus, .mat-tab-group.mat-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-primary .mat-tab-link:focus {\n  background-color: rgba(207, 216, 220, 0.3); }\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #607d8b; }\n\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-accent .mat-tab-label:focus, .mat-tab-group.mat-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-accent .mat-tab-link:focus {\n  background-color: rgba(0, 96, 100, 0.3); }\n\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #00838f; }\n\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-warn .mat-tab-label:focus, .mat-tab-group.mat-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-warn .mat-tab-link:focus {\n  background-color: rgba(255, 204, 188, 0.3); }\n\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #ff5722; }\n\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label:focus, .mat-tab-group.mat-background-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-link:focus {\n  background-color: rgba(207, 216, 220, 0.3); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #607d8b; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-tab-group.mat-background-accent .mat-tab-label:focus, .mat-tab-group.mat-background-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-link:focus {\n  background-color: rgba(0, 96, 100, 0.3); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #00838f; }\n\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-tab-group.mat-background-warn .mat-tab-label:focus, .mat-tab-group.mat-background-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-link:focus {\n  background-color: rgba(255, 204, 188, 0.3); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #ff5722; }\n\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-primary {\n    background: #607d8b;\n    color: white; }\n  .mat-toolbar.mat-accent {\n    background: #00838f;\n    color: white; }\n  .mat-toolbar.mat-warn {\n    background: #ff5722;\n    color: white; }\n\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n\n.mat-simple-snackbar-action {\n  color: #00838f; }\n\n.color-primary {\n  color: #607d8b; }\n\n.temperaturecard {\n  background-color: #607d8b;\n  color: white;\n  margin-top: 5px;\n  margin-left: 2.5px;\n  margin-right: 2.5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chamber-constant/chamber-constant.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChamberConstantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_temp_dialog_change_temp_dialog_component__ = __webpack_require__("../../../../../src/app/change-temp-dialog/change-temp-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChamberConstantComponent = (function () {
    function ChamberConstantComponent(dialog) {
        this.dialog = dialog;
        this.changeTemp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ;
    ChamberConstantComponent.prototype.callParent = function (arg) {
        this.changeTemp.next(arg);
    };
    ChamberConstantComponent.prototype.openDialog = function () {
        var _this = this;
        console.log('item test', this.temperature);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__change_temp_dialog_change_temp_dialog_component__["a" /* ChangeTempDialogComponent */], {
            width: '250px',
            data: { temperature: this.temperature }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.temperature = result;
            console.log('The dialog was closed', _this.temperature);
            if (_this.temperature != "") {
                console.log('if passed', _this.temperature);
                _this.callParent(_this.temperature);
            }
        });
    };
    ChamberConstantComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], ChamberConstantComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ChamberConstantComponent.prototype, "changeTemp", void 0);
    ChamberConstantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chamber-constant',
            template: __webpack_require__("../../../../../src/app/chamber-constant/chamber-constant.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chamber-constant/chamber-constant.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], ChamberConstantComponent);
    return ChamberConstantComponent;
}());



/***/ }),

/***/ "../../../../../src/app/change-temp-dialog/change-temp-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/change-temp-dialog/change-temp-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n    <h2 mat-dialog-title fxFlex fxFlexAlign=\"center\">Change Target Temperature</h2>\n    \n    <mat-dialog-content fxLayout = \"column\"> \n        \n        <mat-form-field>\n            <input matInput type=\"number\" [(ngModel)]=\"data.temperature\" >\n        </mat-form-field>\n        \n    </mat-dialog-content>\n    <mat-dialog-actions fxLayoutGap = \"10px\">\n        <button mat-raised-button [mat-dialog-close]=\"data.temperature\"color='primary' >Ok</button>\n        <button mat-raised-button mat-dialog-close color='accent' >Cancel</button>\n    </mat-dialog-actions>\n   \n </div> \n"

/***/ }),

/***/ "../../../../../src/app/change-temp-dialog/change-temp-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeTempDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ChangeTempDialogComponent = (function () {
    function ChangeTempDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ChangeTempDialogComponent.prototype.ngOnInit = function () {
    };
    ChangeTempDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-change-temp-dialog',
            template: __webpack_require__("../../../../../src/app/change-temp-dialog/change-temp-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/change-temp-dialog/change-temp-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], ChangeTempDialogComponent);
    return ChangeTempDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/history-chart/history-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history-chart/history-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='load' *ngIf=\"loading\" div fxLayout =\"column\"  fxLayoutAlign=\"center center\">\n    <div style='height:100px'></div>\n    <mat-spinner></mat-spinner>\n  </div>\n<google-chart *ngIf = \"!loading\" [data]=\"lineChartData\"></google-chart>\n"

/***/ }),

/***/ "../../../../../src/app/history-chart/history-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryChartComponent = (function () {
    function HistoryChartComponent(fb) {
        var _this = this;
        this.fb = fb;
        // @Input() currentProfile: string; 
        this.loading = true;
        this.rowCount = 4;
        this.lineChartData = {
            chartType: 'Line',
            dataTable: {
                cols: [
                    { id: '1', label: 'Date', type: 'date' },
                    { id: '2', label: 'Beer', type: 'number' },
                    { id: '3', label: 'Chamber', type: 'number' },
                ],
                rows: []
            },
            options: { title: 'Fermentation Log',
                hAxis: {
                    title: 'Day',
                    gridlines: {
                        count: -1,
                        units: {
                            days: { format: ['MMM dd'] },
                            hours: { format: ['HH:mm', 'ha'] },
                        }
                    },
                    minorGridlines: {
                        units: {
                            hours: { format: ['hh:mm:ss a', 'ha'] },
                            minutes: { format: ['HH:mm a Z', ':mm'] }
                        }
                    },
                },
                backgroundColor: '#F3F3F3',
                tooltip: { isHtml: true }
            },
        };
        this.fb.chart
            .subscribe(function (res) {
            //console.log('map testing',res);
            _this.data = res;
            _this.updateChart();
            _this.loading = false;
        });
    }
    HistoryChartComponent.prototype.ngOnChanges = function () {
        this.updateChart();
        console.log('profile changessss');
    };
    HistoryChartComponent.prototype.ngOnInit = function () {
    };
    HistoryChartComponent.prototype.updateChart = function () {
        this.lineChartData = {
            chartType: 'LineChart',
            dataTable: this.data,
            options: { title: 'Fermentation Log',
                hAxis: {
                    title: 'Date',
                    gridlines: {
                        count: -1,
                        units: {
                            days: { format: ['MMM dd'] },
                            hours: { format: ['HH:mm', 'ha'] },
                        }
                    },
                    minorGridlines: {
                        units: {
                            hours: { format: ['hh:mm:ss a', 'ha'] },
                            minutes: { format: ['HH:mm a Z', ':mm'] }
                        }
                    },
                },
                backgroundColor: '#F3F3F3',
                tooltip: { isHtml: true }
            },
        };
        var tempFormat = localStorage.getItem('tempFormat');
        if (tempFormat == "C") {
            //this.yAxisLabel = 'Temperature \xB0C';
        }
        else {
            //this.yAxisLabel = 'Temperature \xB0F';
        }
    };
    HistoryChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-history-chart',
            template: __webpack_require__("../../../../../src/app/history-chart/history-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/history-chart/history-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]])
    ], HistoryChartComponent);
    return HistoryChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-dialog/login-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n   <div fxLayout=\"column\">\r\n    <h2 mat-dialog-title fxFlex fxFlexAlign=\"center\">Particle Login</h2>\r\n    \r\n    <form novalidate (ngSubmit)=\"login(loginForm.value)\" #loginForm=\"ngForm\">\r\n    <mat-dialog-content fxLayout = \"column\"> \r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Username\" type =\"text\" name=\"username\" ngModel>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Password\" type =\"password\" name=\"password\" ngModel>\r\n        </mat-form-field>   \r\n    </mat-dialog-content>\r\n    <mat-dialog-actions fxLayoutGap = \"10px\">\r\n        <button type=\"submit\" mat-raised-button color='primary' >Login</button>\r\n        <button mat-raised-button mat-dialog-close color='accent' >Cancel</button>\r\n    </mat-dialog-actions>\r\n    </form><br><br><br>\r\n     \r\n    <form fxLayout=\"column\" *ngIf=\"loginSuccess\">\r\n        <strong>Select Device</strong>\r\n        <mat-form-field>\r\n        <mat-select placeholder = {{selectedDevice}} (change) =\"onChange($event.value)\"  [(ngModel)]=\"selectedDevice\" name=\"device\">\r\n            <mat-option *ngFor=\"let device of devices\" [value]=\"device\">\r\n                {{ device}}\r\n            </mat-option>\r\n        </mat-select> \r\n        </mat-form-field>\r\n    </form>\r\n    \r\n  \r\n  </div>  "

/***/ }),

/***/ "../../../../../src/app/login-dialog/login-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_particle_service__ = __webpack_require__("../../../../../src/app/services/particle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginDialogComponent = (function () {
    function LoginDialogComponent(fbService, particleService, dialogRef) {
        this.fbService = fbService;
        this.particleService = particleService;
        this.dialogRef = dialogRef;
        this.loginSuccess = false;
    }
    LoginDialogComponent.prototype.login = function (form) {
        var _this = this;
        var username = form.username;
        var password = form.password;
        this.particleService.Login(username, password)
            .subscribe(function (res) {
            var deviceCheck = localStorage.getItem('Device');
            _this.loginSuccess = true;
            _this.selectedDevice = "Click to Select Device";
            _this.particleService.ListDevices()
                .subscribe(function (res) { return _this.devices = res; });
        }, function (err) {
            console.log('login failed', err);
            alert('Login Failed: ' + err);
        });
    };
    LoginDialogComponent.prototype.ngOnInit = function () {
        var deviceCheck = localStorage.getItem('Device');
        if (deviceCheck === null) {
            this.selectedDevice = "Click to Select Device";
        }
        else
            this.selectedDevice = localStorage.getItem('Device');
    };
    LoginDialogComponent.prototype.onChange = function (value) {
        console.log('devisce change');
        this.particleService.NewDevice(value);
        this.dialogRef.close();
    };
    LoginDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'login-dialog',
            template: __webpack_require__("../../../../../src/app/login-dialog/login-dialog.component.html"),
            styles: ["\n        .head {\n      background-color : #ffc4c4;\n        }"
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_2__services_particle_service__["a" /* ParticleService */], __WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatDialogRef */]])
    ], LoginDialogComponent);
    return LoginDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".load{\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='load' *ngIf=\"loading\" div fxLayout =\"column\"  fxLayoutAlign=\"center center\">\r\n  <div style='height:100px'></div>\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n    \r\n  <mat-tab-group *ngIf = \"!loading\" #modeTab  [selectedIndex]=\"currentMode\" dynamicHeight=\"false\" (selectedIndexChange) =\"onChange($event)\">\r\n  <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            Off\r\n          </ng-template>\r\n    <app-off [item]=\"item\"></app-off>\r\n  </mat-tab>\r\n  <mat-tab >\r\n      <ng-template mat-tab-label>\r\n          Beer<br>Constant\r\n        </ng-template>\r\n    <app-beer-constant [item]=\"item\" (changeTemp)=\"CallFunction($event)\"></app-beer-constant>\r\n  </mat-tab>\r\n  <mat-tab>\r\n      <ng-template mat-tab-label>\r\n          Chamber<br>Constant\r\n        </ng-template>\r\n    <app-chamber-constant [item]=\"item\" (changeTemp)=\"CallFunction($event)\" ></app-chamber-constant>\r\n  </mat-tab>\r\n  <mat-tab >\r\n      <ng-template mat-tab-label>\r\n          Profile\r\n        </ng-template>\r\n    <app-beer-profile [item]=\"item\"></app-beer-profile>\r\n  </mat-tab>\r\n  <mat-tab disabled>\r\n    <ng-template mat-tab-label >\r\n        \r\n      </ng-template>\r\n      <app-beer-constant [item]=\"item\" (changeTemp)=\"CallFunction($event)\"></app-beer-constant>\r\n</mat-tab>\r\n</mat-tab-group>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_particle_service__ = __webpack_require__("../../../../../src/app/services/particle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_change_dialog_tab_change_dialog_component__ = __webpack_require__("../../../../../src/app/tab-change-dialog/tab-change-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {DialogsService} from '../services/dialogs.service';



var MainComponent = (function () {
    function MainComponent(fbService, particleService, dialog) {
        this.fbService = fbService;
        this.particleService = particleService;
        this.dialog = dialog;
        this.devices = [];
        this.loading = true;
        this.currentMode = 0;
        this.lastTab = 0;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.item = this.fbService.data;
        this.item.subscribe(function (res) {
            if (res != undefined) {
                _this.currentMode = +res.mode;
                _this.loading = false;
            }
        });
    };
    /*
    openDialog() {
      let dialogRef= this.dialog.open(TabChangeDialogComponent, {
        width: '250px',
        
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('dialog closed',result);
        }
      );
    }*/
    MainComponent.prototype.onChange = function (newMode) {
        var _this = this;
        console.log('tab change newmode/currentmode', newMode, this.currentMode);
        if (newMode == this.currentMode)
            return; //do nothing if attempting to change to currentMode.
        if (this.currentMode != 3) {
            if (newMode != 3) {
                var arg = newMode.toString();
                this.particleService.CallFunction('setMode', arg)
                    .subscribe(function (res) {
                    console.log('function call response', res);
                    console.log('function call response current tab', _this.currentMode);
                });
            }
            return;
        }
        var lastTab = this.currentMode;
        this.currentMode = newMode;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__tab_change_dialog_tab_change_dialog_component__["a" /* TabChangeDialogComponent */], {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('dialog closed', result);
            var arg = newMode.toString();
            if (result == true) {
                if (arg == '0') {
                    _this.fbService.deleteList('TemperatureData');
                    console.log('delete history');
                }
                console.log('tabchange test curretn tab', _this.currentMode);
                if (arg == '3') {
                    return;
                }
                _this.particleService.CallFunction('setMode', arg)
                    .subscribe(function (res) {
                    console.log('function call response', res);
                    console.log('function call response current tab', _this.currentMode);
                });
            }
            else {
                console.log('cancel', _this.currentMode, lastTab);
                _this.currentMode = lastTab;
            }
        });
    };
    MainComponent.prototype.CallFunction = function (arg) {
        var _this = this;
        console.log('callfunction', arg);
        if (localStorage.getItem('tempFormat') == 'F') {
            var Ftemp = +arg;
            Ftemp = (Ftemp - 32) / 1.8;
            arg = Ftemp.toString();
        }
        this.particleService.CallFunction('setSetpoint', arg)
            .subscribe(function (res) {
            _this.funcres = res;
            console.log('function call response', res);
        });
    };
    /*
      GetVariable() {
        this.particleService.GetVariable('fridgeTemp')
          .subscribe(res => this.fridgeTemp = res);
      }
    */
    MainComponent.prototype.ListDevices = function () {
        var _this = this;
        this.particleService.ListDevices()
            .subscribe(function (devices) { return _this.devices = devices; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('modeTab'),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "modeTab", void 0);
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_1__services_particle_service__["a" /* ParticleService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/off/off.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div fxLayout =\"column\"  fxLayoutAlign =\"start stretch\"  > \n  <div fxLayout = 'row' fxLayoutAlign=\"start start\"> -->\n    <mat-card class='temperaturecard' >\n      <mat-card-header><i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Beer</mat-card-header>\n      <mat-card-content align=\"center\">\n        <h2>{{ (item | async)?.beerTemp }}</h2>\n      </mat-card-content>\n    </mat-card>\n    <mat-card class='temperaturecard' >\n      <mat-card-header><i class=\"fa fa-thermometer-half fa-2x\"></i>&nbsp;&nbsp;Chamber</mat-card-header>\n      <mat-card-content align=\"center\">\n        <h2>{{ (item | async)?.fridgeTemp }}</h2>\n      </mat-card-content>\n    </mat-card>\n  <!--</div>\n  \n </div>  -->\n\n"

/***/ }),

/***/ "../../../../../src/app/off/off.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between mat-menu and mat-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #607d8b; }\n  .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #00838f; }\n  .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #ff5722; }\n  .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n  .mat-pseudo-checkbox::after {\n    color: #fafafa; }\n\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #00838f; }\n\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #607d8b; }\n\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #ff5722; }\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n\n.mat-app-background {\n  background-color: #fafafa; }\n\n.mat-theme-loaded-marker {\n  display: none; }\n\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n    .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n\n.mat-button, .mat-icon-button {\n  background: transparent; }\n  .mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(96, 125, 139, 0.12); }\n  .mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(0, 131, 143, 0.12); }\n  .mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(255, 87, 34, 0.12); }\n  .mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n  .mat-button.mat-primary, .mat-icon-button.mat-primary {\n    color: #607d8b; }\n  .mat-button.mat-accent, .mat-icon-button.mat-accent {\n    color: #00838f; }\n  .mat-button.mat-warn, .mat-icon-button.mat-warn {\n    color: #ff5722; }\n  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #607d8b; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #00838f; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #ff5722; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.1); }\n\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.1); }\n\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.1); }\n\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.2); }\n\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.2); }\n\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.2); }\n\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #607d8b; }\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #00838f; }\n\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #ff5722; }\n\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.26); }\n\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-primary {\n  background-color: #607d8b;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-warn {\n  background-color: #ff5722;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-accent {\n  background-color: #00838f;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-table {\n  background: white; }\n\n.mat-row, .mat-header-row {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-cell {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-next-button,\n.mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    color: rgba(0, 0, 0, 0.38); }\n\n:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-calendar-body-selected {\n  background-color: #607d8b;\n  color: white; }\n\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(96, 125, 139, 0.4); }\n\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-focused .mat-form-field-label {\n  color: #607d8b; }\n  .mat-focused .mat-form-field-label.mat-accent {\n    color: #00838f; }\n  .mat-focused .mat-form-field-label.mat-warn {\n    color: #ff5722; }\n\n.mat-focused .mat-form-field-required-marker {\n  color: #00838f; }\n\n.mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n\n.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 1px;\n  background-repeat: repeat-x; }\n\n.mat-form-field-ripple {\n  background-color: #607d8b; }\n  .mat-form-field-ripple.mat-accent {\n    background-color: #00838f; }\n  .mat-form-field-ripple.mat-warn {\n    background-color: #ff5722; }\n\n.mat-form-field-invalid .mat-form-field-label {\n  color: #ff5722; }\n  .mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #ff5722; }\n\n.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #ff5722; }\n\n.mat-error {\n  color: #ff5722; }\n\n.mat-icon.mat-primary {\n  color: #607d8b; }\n\n.mat-icon.mat-accent {\n  color: #00838f; }\n\n.mat-icon.mat-warn {\n  color: #ff5722; }\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-nav-list .mat-list-item {\n  outline: none; }\n  .mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-list-option {\n  outline: none; }\n  .mat-list-option:hover, .mat-list-option.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-menu-panel {\n  background: white; }\n\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-menu-item[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item:focus:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-paginator {\n  background: white; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-paginator-increment,\n.mat-paginator-decrement {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-decrement {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23cfd8dc%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar-buffer {\n  background-color: #cfd8dc; }\n\n.mat-progress-bar-fill::after {\n  background-color: #607d8b; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23006064%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #006064; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #00838f; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffccbc%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffccbc; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #ff5722; }\n\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #607d8b; }\n\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #00838f; }\n\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #ff5722; }\n\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #607d8b; }\n\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #607d8b; }\n\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.26); }\n\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #00838f; }\n\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #00838f; }\n\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(0, 131, 143, 0.26); }\n\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff5722; }\n\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #ff5722; }\n\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.26); }\n\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #607d8b; }\n\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #00838f; }\n\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #ff5722; }\n\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #ff5722; }\n\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-drawer.mat-drawer-push {\n    background-color: white; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #00bcd4; }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(0, 188, 212, 0.5); }\n\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(0, 188, 212, 0.12); }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ff5722; }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(255, 87, 34, 0.5); }\n\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 87, 34, 0.12); }\n\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #607d8b; }\n\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #00838f; }\n\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #ff5722; }\n\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-slider-focus-ring {\n  background-color: rgba(0, 131, 143, 0.2); }\n\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-step-header .mat-step-icon {\n  background-color: #607d8b;\n  color: white; }\n\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n\n.mat-tab-group.mat-primary .mat-tab-label:focus, .mat-tab-group.mat-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-primary .mat-tab-link:focus {\n  background-color: rgba(207, 216, 220, 0.3); }\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #607d8b; }\n\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-accent .mat-tab-label:focus, .mat-tab-group.mat-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-accent .mat-tab-link:focus {\n  background-color: rgba(0, 96, 100, 0.3); }\n\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #00838f; }\n\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-warn .mat-tab-label:focus, .mat-tab-group.mat-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-warn .mat-tab-link:focus {\n  background-color: rgba(255, 204, 188, 0.3); }\n\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #ff5722; }\n\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label:focus, .mat-tab-group.mat-background-primary .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-link:focus {\n  background-color: rgba(207, 216, 220, 0.3); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #607d8b; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-tab-group.mat-background-accent .mat-tab-label:focus, .mat-tab-group.mat-background-accent .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-link:focus {\n  background-color: rgba(0, 96, 100, 0.3); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #00838f; }\n\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-tab-group.mat-background-warn .mat-tab-label:focus, .mat-tab-group.mat-background-warn .mat-tab-link:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-link:focus {\n  background-color: rgba(255, 204, 188, 0.3); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #ff5722; }\n\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-primary {\n    background: #607d8b;\n    color: white; }\n  .mat-toolbar.mat-accent {\n    background: #00838f;\n    color: white; }\n  .mat-toolbar.mat-warn {\n    background: #ff5722;\n    color: white; }\n\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n\n.mat-simple-snackbar-action {\n  color: #00838f; }\n\n.color-primary {\n  color: #607d8b; }\n\n.temperaturecard {\n  background-color: #607d8b;\n  color: white;\n  margin-top: 5px;\n  margin-left: 2.5px;\n  margin-right: 2.5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/off/off.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OffComponent = (function () {
    function OffComponent() {
        this.item = 'NULL';
    }
    OffComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], OffComponent.prototype, "item", void 0);
    OffComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-off',
            template: __webpack_require__("../../../../../src/app/off/off.component.html"),
            styles: [__webpack_require__("../../../../../src/app/off/off.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OffComponent);
    return OffComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile-chart/profile-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-chart/profile-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<google-chart [data]=\"lineChartData\"></google-chart>"

/***/ }),

/***/ "../../../../../src/app/profile-chart/profile-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileChartComponent = (function () {
    function ProfileChartComponent(fb) {
        this.fb = fb;
        this.data = [];
        this.rowCount = 4;
        this.options = { title: this.currentProfile,
            hAxis: { title: 'Day', gridlines: { count: this.rowCount } },
            backgroundColor: '#F3F3F3',
        };
        this.lineChartData = {
            chartType: 'LineChart',
            dataTable: [
                [{ 'number': 'Day' }, 'Temperature', 'current'],
                [0, 55, null], [5, 66, null], [8, 70, null], [4, null, 55]
            ],
            options: { title: this.currentProfile,
                hAxis: { title: 'Day', gridlines: { count: this.rowCount } },
                backgroundColor: '#F3F3F3',
                seriesType: 'line',
                series: { 1: { type: 'bars' } },
                bar: { groupWidth: 5 }
            },
        };
    }
    /*
     dataTable: [
      ['Task', 'Hours per Day'],
      [1,     11],
      [2,      2],
      [3,  2],
      [4, 2],
      [5,    7]
    */
    ProfileChartComponent.prototype.ngOnChanges = function () {
        if (this.currentProfile != '') {
            this.updateChart();
            console.log('profile changessss', this.currentProfile);
        }
    };
    ProfileChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var day;
        this.fb.data.subscribe(function (res) {
            // console.log('day',res.mode);
            if (res.mode == '3') {
                day = (Date.now() - (parseInt(res.profileStartTime) * 1000)) / 86400000;
                _this.currentBeer = [day, null, parseFloat(res.beerTemp)];
                _this.updateChart();
            }
            else {
                day = 0;
                _this.currentBeer = [day, null, parseFloat(res.beerTemp)];
            }
            //console.log('day',day);
        });
    };
    /*
    {
      cols:[
        {id: '1', label: 'Date', type: 'date'},
        {id: '2', label: 'Beer', type: 'number'},
        {id: '3', label: 'Chamber', type: 'number'},
      ],
      rows:item,
    }
    item.beer={c:[{v: new Date(item.ts), f:'February 28, 2008'},
    {v: parseFloat(item.beerTemp).toFixed(2)},
    {v: parseFloat(item.chamberTemp).toFixed(2)}]};
    */
    ProfileChartComponent.prototype.updateChart = function () {
        var _this = this;
        this.fb.table(this.currentProfile).subscribe(function (res) {
            _this.data = [[{ 'number': 'Day' }, "Temperature", "Current"]];
            res.forEach(function (element) {
                _this.data.push([element.day, element.temperature, null]);
            });
            _this.data.push(_this.currentBeer);
            //this.data.push([4,null,55]);
            _this.rowCount = _this.data.length - 2;
            _this.lineChartData = {
                chartType: 'ComboChart',
                dataTable: _this.data,
                options: { title: _this.currentProfile,
                    hAxis: { title: 'Day', gridlines: { count: _this.data[_this.rowCount][0] } },
                    backgroundColor: '#F3F3F3',
                    seriesType: 'line',
                    series: { 1: { type: 'bars' } },
                    bar: { groupWidth: 5 }
                },
            };
        });
        var tempFormat = localStorage.getItem('tempFormat');
        if (tempFormat == "C") {
            //this.yAxisLabel = 'Temperature \xB0C';
        }
        else {
            //this.yAxisLabel = 'Temperature \xB0F';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ProfileChartComponent.prototype, "currentProfile", void 0);
    ProfileChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-chart',
            template: __webpack_require__("../../../../../src/app/profile-chart/profile-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile-chart/profile-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_service__["a" /* FirebaseService */]])
    ], ProfileChartComponent);
    return ProfileChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile-dialog/profile-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-dialog/profile-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  <h2 mat-dialog-title fxFlex fxFlexAlign=\"center\">Change Target Temperature</h2>\n  \n  <mat-dialog-content fxLayout = \"column\"> \n        <mat-form-field>\n          <input matInput type=\"number\" [(ngModel)]=\"row.day\" >\n        </mat-form-field>\n    <mat-form-field>\n        <input matInput type=\"number\" [(ngModel)]=\"row.temperature\" >\n    </mat-form-field>\n  </mat-dialog-content>\n  <mat-dialog-actions fxLayoutGap = \"10px\">\n      <button mat-raised-button [mat-dialog-close]=\"row\"color='primary' >Ok</button>\n      <button mat-raised-button mat-dialog-close color='accent' >Cancel</button>\n  </mat-dialog-actions>\n \n</div> "

/***/ }),

/***/ "../../../../../src/app/profile-dialog/profile-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProfileDialogComponent = (function () {
    function ProfileDialogComponent(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
    }
    ProfileDialogComponent.prototype.ngOnInit = function () {
        this.row = this.data.row;
    };
    ProfileDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-profile-dialog',
            template: __webpack_require__("../../../../../src/app/profile-dialog/profile-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile-dialog/profile-dialog.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_0__angular_material__["f" /* MatDialogRef */]])
    ], ProfileDialogComponent);
    return ProfileDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/dialogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_dialog_login_dialog_component__ = __webpack_require__("../../../../../src/app/login-dialog/login-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogsService = (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.login = function () {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__login_dialog_login_dialog_component__["a" /* LoginDialogComponent */]);
        return dialogRef.afterClosed();
    };
    DialogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], DialogsService);
    return DialogsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseService = (function () {
    function FirebaseService(af) {
        this.af = af;
        this.tempFormat = localStorage.getItem('tempFormat');
        this.dataStore = { photonData: this.photonData };
        this._photonData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.photonData);
        this.init();
    }
    FirebaseService.prototype.init = function () {
        var _this = this;
        //let tempFormat = localStorage.getItem('tempFormat');
        this.afPhoton = this.af.object('/Photon/data').valueChanges();
        this.afPhoton.subscribe(function (res) {
            _this.dataStore.photonData = res;
            _this.ConfigureData();
            setInterval(function () { _this.timeUpdate(_this.dataStore.photonData.stateStartTime); }, 1000, 1000);
        });
    };
    FirebaseService.prototype.updateRow = function (profile, key, item) {
        var items = this.af.list('/Profile/' + profile);
        // to get a key, check the Example app below
        console.log('row update', key, item);
        items.update(key, item);
    };
    FirebaseService.prototype.addRow = function (profile, item) {
        var items = this.af.list('/Profile/' + profile);
        items.push(item);
    };
    FirebaseService.prototype.deleteRow = function (profile, key) {
        var items = this.af.list('/Profile/' + profile);
        items.remove(key);
    };
    FirebaseService.prototype.deleteList = function (list) {
        var items = this.af.list('/' + list);
        items.remove();
    };
    FirebaseService.prototype.createNewProfile = function (name) {
        console.log('profile passed to service', name);
        var items = this.af.list('/Profile/' + name);
        items.push({ day: 0, temperature: 0 });
    };
    Object.defineProperty(FirebaseService.prototype, "profileList", {
        get: function () {
            return this.af.list('/Profile', function (ref) { return ref.orderByKey(); }).snapshotChanges().map(function (changes) {
                return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
            });
            // .map(res => res);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseService.prototype, "chart", {
        get: function () {
            var _this = this;
            return this.af.list('/TemperatureData', function (ref) { return ref; }).snapshotChanges().map(function (changes) {
                var rows = changes.map(function (ch) {
                    var mode = ch.payload.val().currentState;
                    if (mode == 0)
                        mode = 'Off';
                    if (mode == 1)
                        mode = 'Cool';
                    if (mode == 2)
                        mode = 'Heat';
                    var options = {
                        month: "short",
                        day: "numeric", hour: "2-digit", minute: "2-digit"
                    };
                    var toolTipDate = new Date(ch.payload.val().ts).toLocaleDateString("en-US", options);
                    if (_this.tempFormat == "C") {
                        var temp = { c: [
                                { v: new Date(ch.payload.val().ts) },
                                { v: parseFloat(ch.payload.val().beerTemp).toFixed(2) },
                                { v: parseFloat(ch.payload.val().chamberTemp).toFixed(2) },
                                { v: _this.customToolTip(toolTipDate, parseFloat(ch.payload.val().chamberTemp).toFixed(2), mode) }
                            ] };
                        return temp;
                    }
                    else {
                        var temp = { c: [{ v: new Date(ch.payload.val().ts) },
                                { v: (parseFloat(ch.payload.val().beerTemp) * 1.8 + 32).toFixed(2) },
                                { v: (parseFloat(ch.payload.val().chamberTemp) * 1.8 + 32).toFixed(2) },
                                { v: _this.customToolTip(toolTipDate, (parseFloat(ch.payload.val().chamberTemp) * 1.8 + 32).toFixed(2), mode) }
                            ] };
                        return temp;
                    }
                });
                return { cols: [
                        { id: '1', label: 'Date', type: 'date' },
                        { id: '2', label: 'Beer', type: 'number' },
                        { id: '3', label: 'Chamber', type: 'number' },
                        { id: '4', label: 'Tooltip', type: 'string', role: 'tooltip', p: { 'html': true } },
                    ],
                    rows: rows };
            });
        },
        enumerable: true,
        configurable: true
    });
    FirebaseService.prototype.customToolTip = function (dates, temp, mode) {
        return '<div style="padding:5px 5px 5px 5px;">'
            + dates
            + '<br>'
            + 'Chamber: '
            + temp
            + '<br>'
            + 'State: '
            + mode
            + '</div>';
    };
    FirebaseService.prototype.table = function ($key) {
        return this.af.list('/Profile/' + $key, function (ref) { return ref.orderByChild('day'); }).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        //.map(res => res);
    };
    Object.defineProperty(FirebaseService.prototype, "data", {
        get: function () {
            return this._photonData.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    FirebaseService.prototype.timeUpdate = function (Time) {
        var currentTime = Date.now();
        var startTime = +Time;
        startTime *= 1000;
        var d = new Date(currentTime - startTime);
        // Hours part from the timestamp
        var hours = "0" + d.getUTCHours();
        // Minutes part from the timestamp
        var minutes = "0" + d.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + d.getSeconds();
        // Will display time in 10:30:23 format
        var formattedTime = hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        this.dataStore.photonData.stateTime = ((d.getTime() / 8.64e+7).toFixed(0) + " Days" + " " + formattedTime + " Hours");
        this._photonData.next(Object.assign({}, this.dataStore).photonData);
    };
    FirebaseService.prototype.ConfigureData = function () {
        switch (this.dataStore.photonData.currentState) {
            case '0':
                {
                    if (this.dataStore.photonData.pastState == '1') {
                        this.dataStore.photonData.currentState = 'Wait for Peak';
                    }
                    else {
                        this.dataStore.photonData.currentState = 'Idle';
                    }
                }
                break;
            case '1':
                {
                    this.dataStore.photonData.currentState = 'Cool';
                }
                break;
            case '2':
                {
                    this.dataStore.photonData.currentState = 'Heat';
                }
                break;
            default:
                this.dataStore.photonData.currentState = 'Error';
        }
        var beerTemp = parseFloat(this.dataStore.photonData.beerTemp);
        var fridgeTemp = parseFloat(this.dataStore.photonData.fridgeTemp);
        var fridgeTarget = parseFloat(this.dataStore.photonData.fridgeTarget);
        var targetTemp = parseFloat(this.dataStore.photonData.targetTemp);
        var tempFormat = localStorage.getItem('tempFormat');
        if (tempFormat == "C") {
            this.dataStore.photonData.beerTemp = (beerTemp.toFixed(2).toString() + " \xB0C");
            this.dataStore.photonData.fridgeTemp = (fridgeTemp.toFixed(2).toString() + " \xB0C");
            this.dataStore.photonData.fridgeTarget = (fridgeTarget.toFixed(2).toString() + " \xB0C");
            this.dataStore.photonData.targetTemp = (targetTemp.toFixed(2).toString() + " \xB0C");
        }
        else {
            this.dataStore.photonData.beerTemp = (((beerTemp * 1.8 + 32).toFixed(2)).toString() + " \xB0F");
            this.dataStore.photonData.fridgeTemp = (((fridgeTemp * 1.8 + 32).toFixed(2)).toString() + " \xB0F");
            this.dataStore.photonData.fridgeTarget = (((fridgeTarget * 1.8 + 32).toFixed(2)).toString() + " \xB0F");
            this.dataStore.photonData.targetTemp = (((targetTemp * 1.8 + 32).toFixed(2)).toString() + " \xB0F");
        }
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "../../../../../src/app/services/particle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_eventsource__ = __webpack_require__("../../../../eventsource/lib/eventsource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_eventsource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_eventsource__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import {FirebaseService} from './firebase.service';
//import {DialogsService} from './dialogs.service';

//declare var EventSource:any;
var ParticleService = (function () {
    //  private dialogsService: DialogsService,private fbService: FirebaseService, 
    function ParticleService(http) {
        this.http = http;
        this.accessToken = localStorage.getItem('AccessToken');
        this.device = localStorage.getItem('Device');
        this.URL = 'https://api.particle.io/oauth/token';
        this.URLDevice = 'https://api.particle.io/v1/devices/';
        this.URLSubscribe = 'https://api.particle.io/v1/devices/';
    }
    ParticleService.prototype.CheckLogin = function () {
        var _this = this;
        var devices = [];
        var errorMessage = {};
        console.log('checklogin', this.accessToken, this.device);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.ListDevices()
                .subscribe(function (devices) {
                observer.next(true);
                console.log('checklogin true');
            }, function (error) {
                errorMessage = error;
                console.log('loginerror', errorMessage);
                observer.next(false);
            });
            return function () {
                observer.close();
            };
        });
    };
    ParticleService.prototype.Subscribe = function (eventName) {
        var _this = this;
        var deviceId = this.device;
        var accessToken = this.accessToken;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var eventSource = new __WEBPACK_IMPORTED_MODULE_6_eventsource__(_this.URLSubscribe + deviceId + '/events/' + eventName + '?history_limit=30&access_token=' + accessToken);
            eventSource.addEventListener("status", function (e) { return observer.next(JSON.parse(JSON.parse(e.data).data)); });
            eventSource.onerror = function (x) { return observer.error(_this.handleError); };
            return function () {
                eventSource.close();
            };
        });
    };
    ParticleService.prototype.GetVariable = function (varname) {
        var deviceId = this.device;
        var accessToken = this.accessToken;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + accessToken });
        headers.append('content-type', "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.URLDevice + deviceId + '/' + varname, options)
            .map(function (res) { return res.json().result; })
            .catch(this.handleError);
    };
    ParticleService.prototype.CallFunction = function (funcname, arg) {
        var deviceId = this.device;
        var accessToken = this.accessToken;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + accessToken });
        headers.append('content-type', "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = { args: arg };
        return this.http.post(this.URLDevice + deviceId + '/' + funcname, body, options)
            .map(function (res) { return res.json().return_value; })
            .catch(this.handleError);
    };
    ParticleService.prototype.Login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('grant_type', 'password');
        urlSearchParams.append('client_id', 'particle');
        urlSearchParams.append('client_secret', 'particle');
        urlSearchParams.append('expires_in', '7776000');
        var body = urlSearchParams.toString();
        return this.http.post(this.URL, body, options)
            .map(function (res) {
            body = res.json().access_token;
            localStorage.setItem('AccessToken', body);
            _this.accessToken = localStorage.getItem('AccessToken');
        })
            .catch(this.handleError);
    };
    ParticleService.prototype.NewDevice = function (device) {
        localStorage.setItem('Device', device);
        this.device = localStorage.getItem('Device');
    };
    ParticleService.prototype.ListDevices = function () {
        var accessToken = this.accessToken;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + accessToken });
        headers.append('content-type', "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.URLDevice, options)
            .map(this.extractDeviceData)
            .catch(this.handleError);
    };
    ParticleService.prototype.extractDeviceData = function (res) {
        var device = [];
        var body = res.json();
        for (var i in body) {
            device[i] = body[i].name;
        }
        return device;
    };
    ParticleService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error('error response:', errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    ParticleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ParticleService);
    return ParticleService;
}());



/***/ }),

/***/ "../../../../../src/app/setup/setup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setup/setup.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Temperature Format Preference</h3>\n<mat-radio-group [(ngModel)]=\"userTempPreference\" name=\"userTempPreference\" type=\"string\" (change)=\"tempChange($event)\">\n    <mat-radio-button value=\"F\" >Fahrenheit </mat-radio-button><br>\n    <mat-radio-button value=\"C\">Celsius </mat-radio-button>\n  </mat-radio-group>\n<h2>PID Settings</h2>\n<div class=\"container\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"center\"\n     fxLayoutGap=\"10px\">\n    <form novalidate (ngSubmit)=\"setPIDButtonHandler(settingData.value)\" #settingForm=\"ngForm\" *ngIf =\"settingData\">\n      <mat-input-container >\n        <label>Main Kp:</label>\n        <input matInput  required name=\"Kp\" type=\"number\" [(ngModel)]=\"settingData.Kp\">\n      </mat-input-container>\n      <mat-input-container >\n        <label>Main Ki:</label>\n        <input matInput  required name=\"Ki\" type=\"number\" [(ngModel)]=\"settingData.Ki\">\n      </mat-input-container>\n      <mat-input-container >\n        <label>Main Kd:</label>\n        <input matInput  required name=\"Kd\" type=\"number\" [(ngModel)]=\"settingData.Kd\">\n      </mat-input-container>\n      <mat-input-container >\n        <label>Heat Kp:</label>\n        <input matInput  required name=\"hKp\" type=\"number\" [(ngModel)]=\"settingData.hKp\">\n      </mat-input-container>\n      <mat-input-container >\n        <label>Heat Ki:</label>\n        <input matInput  required name=\"hKi\" type=\"number\" [(ngModel)]=\"settingData.hKi\">\n      </mat-input-container>\n      <mat-input-container >\n        <label>Heat Kd:</label>\n        <input matInput  required name=\"hKd\" type=\"number\" [(ngModel)]=\"settingData.hKd\">\n      </mat-input-container>\n      <br>\n      <button type=\"submit\" mat-raised-button color='primary' >Submit PID Changes</button>\n    </form>\n</div>\n<h2>PID Tuning Control</h2>\n<div class=\"container\"\n    fxLayout\n    fxLayout.xs=\"column\"\n    fxLayoutAlign=\"start\"\n    fxLayoutGap=\"10px\">\n    \n    \n    <form  novalidate (ngSubmit)=\"ManualPIDButtonHandler(settingData.value)\" #manualPIDForm=\"ngForm\" *ngIf =\"settingData\">\n      <h4>Main PID Mode</h4>\n      <mat-radio-group [(ngModel)]=\"settingData.mainMode\" name=\"mainMode\" type=\"number\">\n        <mat-radio-button value=\"1\" >Automatic</mat-radio-button><br>\n        <mat-radio-button value=\"0\">Manual</mat-radio-button>\n      </mat-radio-group>\n      <br>\n      <mat-input-container >\n        <label>Main Output: </label>\n        <input matInput required name=\"output\" type=\"number\" [(ngModel)]=\"settingData.output\">\n      </mat-input-container>\n      <h4>Heat PID Mode</h4>\n\n      <mat-radio-group [(ngModel)]=\"settingData.heatMode\" name=\"heatMode\" >\n        <mat-radio-button value=\"1\" >Automatic</mat-radio-button><br>\n        <mat-radio-button value=\"0\">Manual</mat-radio-button>\n      </mat-radio-group><br>\n\n      <mat-input-container >\n        <label>Heat Output: </label>\n        <input matInput required name=\"hOutput\"  [(ngModel)]=\"settingData.hOutput\">\n      </mat-input-container>\n      <br>\n      <button type=\"submit\" mat-raised-button color='primary' >Submit</button>\n  </form>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/setup/setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SettingData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_particle_service__ = __webpack_require__("../../../../../src/app/services/particle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__("../../../../../src/app/services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingData = (function () {
    function SettingData() {
    }
    return SettingData;
}());

var SetupComponent = (function () {
    function SetupComponent(fbService, particleService) {
        this.fbService = fbService;
        this.particleService = particleService;
    }
    SetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tempFormat = localStorage.getItem('tempFormat');
        this.userTempPreference = localStorage.getItem('tempFormat');
        this.particleService.GetVariable('PIDsetting')
            .subscribe(function (res) {
            _this.settingData = JSON.parse(res);
            if (_this.tempFormat == "F") {
                _this.settingData.output = (parseFloat(_this.settingData.output) * 1.8 + 32).toFixed(2);
            }
            console.log('setting response', _this.settingData);
        });
    };
    SetupComponent.prototype.setPIDButtonHandler = function () {
        console.log('PID setting response', this.settingData);
        var PIDString = '';
        PIDString = this.settingData.Kp + ',';
        PIDString += this.settingData.Ki + ',';
        PIDString += this.settingData.Kd + ',';
        PIDString += this.settingData.hKp + ',';
        PIDString += this.settingData.hKi + ',';
        PIDString += this.settingData.hKd + ',';
        console.log('PID setting string', PIDString);
        this.particleService.CallFunction('PIDSetup', PIDString).subscribe(function (res) { return console.log('pid man res', res); });
    };
    SetupComponent.prototype.ManualPIDButtonHandler = function () {
        console.log('PID Mode response', this.settingData);
        var PIDString = '';
        PIDString = this.settingData.mainMode + ',';
        PIDString += this.settingData.heatMode + ',';
        if (this.tempFormat == 'F') {
            var output = ((parseFloat(this.settingData.output) - 32) / 1.8).toFixed(2);
            PIDString += output + ',';
        }
        else {
            PIDString += this.settingData.output + ',';
        }
        PIDString += this.settingData.hOutput + ',';
        console.log('PID setting string', PIDString);
        this.particleService.CallFunction('PIDSetMode', PIDString).subscribe(function (res) { return console.log('pid man res', res); });
    };
    SetupComponent.prototype.tempChange = function (event) {
        console.log('tempchange', event.value);
        localStorage.setItem('tempFormat', event.value);
    };
    SetupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-setup',
            template: __webpack_require__("../../../../../src/app/setup/setup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setup/setup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */], __WEBPACK_IMPORTED_MODULE_1__services_particle_service__["a" /* ParticleService */]])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tab-change-dialog/tab-change-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tab-change-dialog/tab-change-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n  <h2 mat-dialog-title fxFlex fxFlexAlign=\"center\">Exit Current Profile</h2>\n  <h4>Profile current status will be lost!!</h4>\n  \n  \n  <mat-dialog-actions fxLayoutGap = \"10px\">\n      <button mat-raised-button [mat-dialog-close]='true' color='primary' >Ok</button>\n      <button mat-raised-button [mat-dialog-close]='false' color='accent' >Cancel</button>\n  </mat-dialog-actions>\n \n</div> "

/***/ }),

/***/ "../../../../../src/app/tab-change-dialog/tab-change-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabChangeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabChangeDialogComponent = (function () {
    function TabChangeDialogComponent() {
    }
    TabChangeDialogComponent.prototype.ngOnInit = function () {
    };
    TabChangeDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tab-change-dialog',
            template: __webpack_require__("../../../../../src/app/tab-change-dialog/tab-change-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tab-change-dialog/tab-change-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabChangeDialogComponent);
    return TabChangeDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map