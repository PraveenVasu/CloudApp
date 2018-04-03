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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cb-slideshow,\r\n.cb-slideshow:after { \r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0px;\r\n    left: 0px;\r\n    z-index: 0; \r\n}\r\n.cb-slideshow:after { \r\n    content: '';\r\n    background: transparent url(/assets/images/pattern.png) repeat top left; \r\n}\r\n.cb-slideshow li span { \r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    color: transparent;\r\n    background-size: cover;\r\n    background-position: 50% 50%;\r\n    background-repeat: none;\r\n    opacity: 0;\r\n    z-index: 0;\r\n\tmargin:auto;\r\n\t-webkit-backface-visibility: hidden;\r\n    -webkit-animation: imageAnimation 36s linear infinite 0s;\r\n    animation: imageAnimation 36s linear infinite 0s; \r\n}\r\n\r\n.cb-slideshow li div h3 { \r\n    font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: 240px;\r\n    padding: 0;\r\n    line-height: 200px; \r\n}\r\n.cb-slideshow li:nth-child(1) span { \r\n    background-image: url(/assets/images/1.jpg) \r\n}\r\n.cb-slideshow li:nth-child(2) span { \r\n    background-image: url(/assets/images/2.jpg);\r\n    -webkit-animation-delay: 6s;\r\n    animation-delay: 6s; \r\n}\r\n.cb-slideshow li:nth-child(3) span { \r\n    background-image: url(/assets/images/3.jpg);\r\n    -webkit-animation-delay: 12s;\r\n    animation-delay: 12s; \r\n}\r\n.cb-slideshow li:nth-child(4) span { \r\n    background-image: url(/assets/images/4.jpg);\r\n    -webkit-animation-delay: 18s;\r\n    animation-delay: 18s; \r\n}\r\n.cb-slideshow li:nth-child(5) span { \r\n    background-image: url(/assets/images/5.jpg);\r\n    -webkit-animation-delay: 24s;\r\n    animation-delay: 24s; \r\n}\r\n.cb-slideshow li:nth-child(6) span { \r\n    background-image: url(/assets/images/6.jpg);\r\n    -webkit-animation-delay: 30s;\r\n    animation-delay: 30s; \r\n}\r\n\r\n/* Animation for the slideshow images */\r\n@-webkit-keyframes imageAnimation { \r\n    0% { opacity: 0;\r\n    -webkit-animation-timing-function: ease-in; }\r\n    8% { opacity: 1;\r\n         -webkit-animation-timing-function: ease-out; }\r\n    17% { opacity: 1 }\r\n    25% { opacity: 0 }\r\n    100% { opacity: 0 }\r\n}\r\n@keyframes imageAnimation { \r\n    0% { opacity: 0;\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in; }\r\n    8% { opacity: 1;\r\n         -webkit-animation-timing-function: ease-out;\r\n                 animation-timing-function: ease-out; }\r\n    17% { opacity: 1 }\r\n    25% { opacity: 0 }\r\n    100% { opacity: 0 }\r\n}\r\n/* Animation for the title */\r\n@-webkit-keyframes titleAnimation { \r\n    0% { opacity: 0 }\r\n    8% { opacity: 1 }\r\n    17% { opacity: 1 }\r\n    19% { opacity: 0 }\r\n    100% { opacity: 0 }\r\n}\r\n@keyframes titleAnimation { \r\n    0% { opacity: 0 }\r\n    8% { opacity: 1 }\r\n    17% { opacity: 1 }\r\n    19% { opacity: 0 }\r\n    100% { opacity: 0 }\r\n}\r\n/* Show at least something when animations not supported */\r\n.no-cssanimations .cb-slideshow li span{\r\n\topacity: 1;\r\n}\r\n\r\n@media screen and (max-width: 1140px) { \r\n    .cb-slideshow li div h3 { font-size: 140px }\r\n\t.alignsize  { width: 25%}\r\n}\r\n@media screen and (max-width: 600px) { \r\n    .cb-slideshow li div h3 { font-size: 80px }\r\n\t.alignsize  { width: 30%}\r\n}\r\np.codrops-demos{\r\n\tdisplay: block;\r\n\tpadding: 15px 0px;\r\n}\r\np.codrops-demos a,\r\np.codrops-demos a.current-demo,\r\np.codrops-demos a.current-demo:hover{\r\n    display: inline-block;\r\n\tborder: 1px solid #6d0019;\r\n\tpadding: 4px 10px 3px;\r\n\tfont-size: 13px;\r\n\tline-height: 18px;\r\n\tmargin: 2px 3px;\r\n\tfont-weight: 800;\r\n\tbox-shadow: 0px 1px 1px rgba(0,0,0,0.1);\r\n\tcolor:#fff;\r\n\tborder-radius: 5px;\r\n\tbackground: #a90329;\r\n\tbackground: linear-gradient(top, #a90329 0%,#8f0222 44%,#6d0019 100%);\r\n}\r\np.codrops-demos a:hover{\r\n\tbackground: #6d0019;\r\n}\r\np.codrops-demos a:active{\r\n\tbackground: #6d0019;\r\n\tbackground: linear-gradient(top, #6d0019 0%,#8f0222 56%,#a90329 100%);\r\n\tbox-shadow: 0px 1px 1px rgba(255,255,255,0.9);\r\n}\r\np.codrops-demos a.current-demo,\r\np.codrops-demos a.current-demo:hover{\r\n\tcolor: #A5727D;\r\n\tbackground: #6d0019;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<!--<div class=\"column small-12 large-2\">\n    <label >Cars:</label><br />\n    <appDropdown [values]=\"cars\" (select)=\"getModels($event)\"></appDropdown>\n</div>\n<br>\n<br>\n<div *ngIf=\"models\" class=\"column small-12 large-2\">\n    <label >Models:</label><br />\n    <appDropdown [values]=\"models\" (select)=\"getImage($event)\"></appDropdown>\n</div>\n<br>\n<br>\n<div *ngIf=\"imageUrl\" class=\"column small-12 large-2\">\n  <label >{{selectedCarModel}}</label><br />\n    <img width=\"300\" [src]=\"imageUrl\">\n</div>-->\n<body id=\"page\">\n        <ul class=\"cb-slideshow\">\n            <li><span>Image 01</span></li>\n            <li><span>Image 02</span></li>\n            <li><span>Image 03</span></li>\n            <li><span>Image 04</span></li>\n            <li><span>Image 05</span></li>\n            <li><span>Image 06</span></li>\n        </ul>\n\n\t\t\n\t\t</body>\n\t\t <div class=\"container\">\n\t\t<header>\n                <!--<h1><span>Welcome to Music World</span></h1>-->\n                <h2 style=\"text-align: center\">If I CaNt FeEl It,I DoNt WaNt To SiNg It....</h2>\n\t\t\t\t<!--<p class=\"codrops-demos\">\n\t\t\t\t\t<a href=\"#\" class=\"current-demo\">Demo 1</a>\n\t\t\t\t\t<a href=\"index2.html\">Demo 2</a>\n\t\t\t\t\t<a href=\"index3.html\">Demo 3</a>\n\t\t\t\t\t<a href=\"index4.html\">Demo 4</a>\n\t\t\t\t</p>-->\n\t\t\t\t<div *ngFor=\"let s of audioFiles\" style=\"margin:0 auto\">\n\t\t\t\t<h1 style=\"color:orange\">{{s.songName}}</h1>\n\t\t\t\t<audio controls class=\"alignsize\">\n\t\t\t\t <source [src] =\"s.fileName\" type=\"audio/mpeg\">\n\t\t\t\t</audio>\n\t\t\t</div>\n            </header>\n</div>\t\t\t\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.audioFiles = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var audioFile1 = { 'fileName': '/assets/audio/emannavo.mp3', 'songName': 'Emannavo(Nava Manmadhudu)' };
        var audioFile2 = { 'fileName': '/assets/audio/KaunTujhe.mp3', 'songName': 'KaunTujhe(Dhoni)' };
        var audioFile3 = { 'fileName': '/assets/audio/maate_mantramu.mp3', 'songName': 'MaateMantramu(SeetaKoka.. )' };
        var audioFile4 = { 'fileName': '/assets/audio/Poovullo_Dagunna.mp3', 'songName': 'PoovulloDagunna(Jeans)' };
        var audioFile5 = { 'fileName': '/assets/audio/Meri_Pyari_Ammi.mp3', 'songName': 'MeriPyariAmmi(SecretSuperStar)' };
        var audioFile6 = { 'fileName': '/assets/audio/Nannu_Kavaga_Vachina.mp3', 'songName': 'NannuKavagaVachina(NeeKrupaChalu..)' };
        this.audioFiles.push(audioFile1);
        this.audioFiles.push(audioFile2);
        this.audioFiles.push(audioFile3);
        this.audioFiles.push(audioFile4);
        this.audioFiles.push(audioFile5);
        this.audioFiles.push(audioFile6);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map