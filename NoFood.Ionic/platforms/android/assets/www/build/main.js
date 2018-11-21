webpackJsonp([10],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    AlertProvider.prototype.toast = function (title, position) {
        var toast = this.toastCtrl.create({ message: title, position: position, duration: 3000 });
        toast.present();
    };
    AlertProvider.prototype.alert = function (title, message) {
        this.alertCtrl.create({
            title: title,
            message: message,
            buttons: ['Ok'],
            enableBackdropDismiss: false
        }).present();
    };
    AlertProvider.prototype.confirm = function (title, message, callback) {
        this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                { text: "Não", role: 'Cancel', handler: function () { console.log('Confirm:Say:No'); } },
                {
                    text: "Sim",
                    handler: function () {
                        callback();
                    }
                }
            ]
        })
            .present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adm-categoria/adm-categoria.module": [
		284,
		1
	],
	"../pages/adm-categorias/adm-categorias.module": [
		285,
		9
	],
	"../pages/cadastro/cadastro.module": [
		286,
		0
	],
	"../pages/categoria/categoria.module": [
		287,
		8
	],
	"../pages/login/login.module": [
		288,
		7
	],
	"../pages/meus-pedidos/meus-pedidos.module": [
		289,
		6
	],
	"../pages/minha-conta/minha-conta.module": [
		290,
		5
	],
	"../pages/produtos/produtos.module": [
		291,
		4
	],
	"../pages/tab-categoria/tab-categoria.module": [
		292,
		3
	],
	"../pages/tabs/tabs.module": [
		293,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderBase; });
var ProviderBase = /** @class */ (function () {
    function ProviderBase(url, http) {
        this.url = url;
        this.http = http;
    }
    ProviderBase.prototype.get = function () {
        return this.http.get(this.url);
    };
    ProviderBase.prototype.getByUid = function (uid) {
        return this.http.get(this.url + "/" + uid);
    };
    ProviderBase.prototype.post = function (model) {
        return this.http.post(this.url, model);
    };
    ProviderBase.prototype.put = function (uid, model) {
        return this.http.put(this.url + "/" + uid, model);
    };
    ProviderBase.prototype.delete = function (uid) {
        return this.http.delete(this.url + "/" + uid);
    };
    return ProviderBase;
}());

//# sourceMappingURL=providerBase.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigHelper; });
var ConfigHelper = /** @class */ (function () {
    function ConfigHelper() {
    }
    ConfigHelper.Url = '/v1/';
    //public static Url: string = 'http://localhost:3000/api/'
    ConfigHelper.storageKeys = {
        token: 'nofood.token',
        user: 'nofood.user'
    };
    return ConfigHelper;
}());

//# sourceMappingURL=configHelper.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerProvider = /** @class */ (function () {
    function SpinnerProvider(loading) {
        this.loading = loading;
        this.spinner = null;
    }
    SpinnerProvider.prototype.Show = function (message) {
        if (this.spinner == null) {
            this.spinner = this.loading.create({ content: (message || 'Carregando...') });
            this.spinner.present();
        }
        else {
            this.spinner.data.content = message;
        }
    };
    SpinnerProvider.prototype.Hide = function () {
        if (this.spinner != null) {
            this.spinner.dismiss();
            this.spinner = null;
        }
    };
    SpinnerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], SpinnerProvider);
    return SpinnerProvider;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(platform) {
        this.platform = platform;
    }
    Object.defineProperty(NetworkProvider.prototype, "IsOnline", {
        get: function () {
            if (this.platform.is('cordova')) {
                if (navigator.connection && navigator.connection.type) {
                    return (navigator.connection.type != Connection.UNKKONW && navigator.connection.type != Connection.NONE);
                }
                else
                    return true;
            }
            else {
                return navigator.onLine;
            }
        },
        enumerable: true,
        configurable: true
    });
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Platform */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http__ = __webpack_require__(79);
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




var CategoriaProvider = /** @class */ (function (_super) {
    __extends(CategoriaProvider, _super);
    function CategoriaProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "categoria", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "categoria";
        return _this;
    }
    CategoriaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_http__["a" /* HttpProvider */]])
    ], CategoriaProvider);
    return CategoriaProvider;
}(__WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraProvider = /** @class */ (function () {
    function CameraProvider(camera, platform) {
        this.camera = camera;
        this.platform = platform;
    }
    CameraProvider.prototype._getPicture = function (source, callback) {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
                try {
                    var options = {
                        quality: 70,
                        destinationType: _this.camera.DestinationType.DATA_URL,
                        sourceType: source,
                        allowEdit: false,
                        encodingType: _this.camera.EncodingType.JPEG,
                        saveToPhotoAlbum: false,
                        correctOrientation: true
                    };
                    _this.camera.getPicture(options).then(function (imgData) {
                        var base64Image = "data:image/jpeg;base64," + imgData;
                        callback(base64Image);
                    }, function (err) {
                        console.log('Problema ao capturar a foto', err);
                    });
                }
                catch (error) {
                    console.log('problema o tirar a foto', error);
                }
            });
        }
        else {
            alert('Funcionalidade disponível somente no device');
        }
    };
    CameraProvider.prototype.getPictureFromGalery = function (callback) {
        this._getPicture(this.camera.PictureSourceType.PHOTOLIBRARY, function (photo) {
            callback(photo);
        });
    };
    CameraProvider.prototype.takePicture = function (callback) {
        this._getPicture(this.camera.PictureSourceType.CAMERA, function (photo) {
            callback(photo);
        });
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_spinner_spinner__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_http_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_network_network__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_usuario_usuario__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_categoria_categoria__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_camera_camera__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adm-categoria/adm-categoria.module#AdmCategoriaPageModule', name: 'AdmCategoriaPage', segment: 'adm-categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adm-categorias/adm-categorias.module#AdmCategoriasPageModule', name: 'AdmCategoriasPage', segment: 'adm-categorias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categoria/categoria.module#CategoriaPageModule', name: 'CategoriaPage', segment: 'categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meus-pedidos/meus-pedidos.module#MeusPedidosPageModule', name: 'MeusPedidosPage', segment: 'meus-pedidos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/minha-conta/minha-conta.module#MinhaContaPageModule', name: 'MinhaContaPage', segment: 'minha-conta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produtos/produtos.module#ProdutosPageModule', name: 'ProdutosPage', segment: 'produtos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-categoria/tab-categoria.module#TabCategoriaPageModule', name: 'TabCategoriaPage', segment: 'tab-categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_categoria_categoria__["a" /* CategoriaProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_camera_camera__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_usuario_usuario__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__providers_usuario_usuario__["a" /* UsuarioProvider */].IsLogado ? 'CategoriaPage' : 'LoginPage';
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\NoFood\NoFood.Ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\NoFood\NoFood.Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__ = __webpack_require__(159);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var UsuarioProvider = /** @class */ (function (_super) {
    __extends(UsuarioProvider, _super);
    function UsuarioProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "usuario", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "usuario";
        return _this;
    }
    UsuarioProvider.prototype.autenticate = function (email, senha) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.url + "/autenticar", { email: email, senha: senha })];
            });
        });
    };
    UsuarioProvider.prototype.register = function (usuario) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.url + "/register", usuario)];
            });
        });
    };
    UsuarioProvider.RegisterLogin = function (result) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token, result.token);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.user, JSON.stringify(result.usuario));
    };
    Object.defineProperty(UsuarioProvider, "GetTokenAccess", {
        get: function () {
            return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioProvider, "IsLogado", {
        get: function () {
            return (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token) != undefined);
        },
        enumerable: true,
        configurable: true
    });
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_http__["a" /* HttpProvider */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}(__WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usuario_usuario__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner_spinner__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__network_network__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpProvider = /** @class */ (function () {
    function HttpProvider(http, spinnerSrv, alertSrv, networkSrv) {
        this.http = http;
        this.spinnerSrv = spinnerSrv;
        this.alertSrv = alertSrv;
        this.networkSrv = networkSrv;
    }
    HttpProvider.prototype.createHeader = function (header) {
        if (!header) {
            header = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        }
        header = header.append('Content-Type', 'application/json');
        header = header.append('Accept', 'application/json');
        var token = __WEBPACK_IMPORTED_MODULE_0__usuario_usuario__["a" /* UsuarioProvider */].GetTokenAccess;
        if (token) {
            header = header.append('x-access-token', token);
        }
        return header;
    };
    HttpProvider.prototype.get = function (url) {
        var _this = this;
        this.spinnerSrv.Show("Carregando os dados...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.get(url, { headers: header })
                    .subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    _this.alertSrv.toast('Não foi possível consultar os dados, verifique sua conexão e tente novamente', 'bottom');
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast('Você está Offline, e infelizmente não pode ser carregado os dados!', 'bottom');
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.post = function (url, model) {
        var _this = this;
        this.spinnerSrv.Show("Salvando informações...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.post(url, model, { headers: header })
                    .subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    console.log(err);
                    if (err.status == 400) {
                        var msg_1 = '';
                        err.error.validation.forEach(function (_err) {
                            msg_1 += "<li>" + _err.message + "</li>";
                        });
                        _this.alertSrv.alert(err.error.message, msg_1);
                    }
                    else if (err.status == 404) {
                        _this.alertSrv.alert('Informação', err.error.message);
                    }
                    else
                        _this.alertSrv.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente', 'bottom');
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast('Você está Offline, e infelizmente não pode ser enviado os dados!', 'bottom');
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.put = function (url, model) {
        var _this = this;
        this.spinnerSrv.Show("Atualizando informações...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.put(url, model, { headers: header })
                    .subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    console.log(err);
                    if (err.status == 400) {
                        var msg_2 = '';
                        err.error.validation.forEach(function (_err) {
                            msg_2 += "<li>" + _err.message + "</li>";
                        });
                        _this.alertSrv.alert(err.error.message, msg_2);
                    }
                    else if (err.status == 404) {
                        _this.alertSrv.alert('Informação', err.error.message);
                    }
                    else
                        _this.alertSrv.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente', 'bottom');
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast('Você está Offline, e infelizmente não pode ser enviado os dados!', 'bottom');
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.delete = function (url) {
        var _this = this;
        this.spinnerSrv.Show("Removendo registro...");
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.delete(url).subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    _this.alertSrv.toast('Não foi possível realizar a exclusão do registro!', 'bottom');
                    resolve({ success: true, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast('Você está Offline, e infelizmente não pode ser enviado os dados!', 'bottom');
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__network_network__["a" /* NetworkProvider */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map