webpackJsonp([1],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmCategoriaPageModule", function() { return AdmCategoriaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_categoria__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmCategoriaPageModule = /** @class */ (function () {
    function AdmCategoriaPageModule() {
    }
    AdmCategoriaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adm_categoria__["a" /* AdmCategoriaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adm_categoria__["a" /* AdmCategoriaPage */]),
            ],
        })
    ], AdmCategoriaPageModule);
    return AdmCategoriaPageModule;
}());

//# sourceMappingURL=adm-categoria.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmCategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_alert_alert__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_categoria_categoria__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_categoriaModel__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera__ = __webpack_require__(207);
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






var AdmCategoriaPage = /** @class */ (function () {
    function AdmCategoriaPage(navCtrl, navParams, actionSheetCtrl, platform, cameraSrv, categoriaSrv, alertSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.cameraSrv = cameraSrv;
        this.categoriaSrv = categoriaSrv;
        this.alertSrv = alertSrv;
        var _categ = this.navParams.get('_categoria');
        if (_categ)
            this.categoria = _categ;
        else
            this.categoria = new __WEBPACK_IMPORTED_MODULE_4__app_models_categoriaModel__["a" /* CategoriaModel */]();
    }
    AdmCategoriaPage.prototype.salvar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sucesso, cadastroResult, updateResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sucesso = false;
                        if (!!this.categoria._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.categoriaSrv.post(this.categoria)];
                    case 1:
                        cadastroResult = _a.sent();
                        sucesso = cadastroResult.success;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.categoriaSrv.put(this.categoria._id, this.categoria)];
                    case 3:
                        updateResult = _a.sent();
                        sucesso = updateResult.success;
                        _a.label = 4;
                    case 4:
                        if (sucesso) {
                            this.alertSrv.toast('Categoria salva com sucesso!', 'bottom');
                            this.navCtrl.setRoot('AdmCategoriasPage');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdmCategoriaPage.prototype.getPictureOption = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Adicionar foto',
            buttons: [
                {
                    text: 'Tirar Foto', handler: function () {
                        _this.cameraSrv.takePicture(function (photo) {
                            _this.categoria.foto = photo;
                        });
                    },
                    icon: this.platform.is('ios') ? null : 'camera'
                },
                {
                    text: 'Pegar galeria',
                    handler: (function () {
                        _this.cameraSrv.getPictureFromGalery(function (photo) {
                            _this.categoria.foto = photo;
                        });
                    }),
                    icon: this.platform.is('ios') ? null : 'images'
                },
                {
                    text: 'Cancelar',
                    role: 'destructive',
                    icon: this.platform.is('ios') ? null : 'close',
                    handler: function () {
                        //Cancela a ação
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AdmCategoriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-adm-categoria',template:/*ion-inline-start:"E:\NoFood\NoFood.Ionic\src\pages\adm-categoria\adm-categoria.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Categoria</ion-title>\n    <ion-buttons right>\n      <button ion-button clear (click)="salvar()">\n        Salvar\n      </button>\n      <button ion-button icon-only>\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-list no-lines>\n    <ion-item>\n      <ion-label floating>Título</ion-label>\n      <ion-input [(ngModel)]="categoria.titulo" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Descrição</ion-label>\n      <ion-textarea [(ngModel)]="categoria.descricao" rows="4"></ion-textarea>\n    </ion-item>\n    <ion-item text-center>\n      <button ion-button clear (click)="getPictureOption()">\n        <ion-icon name="camera" item-left></ion-icon>\n        Selecionar Foto\n      </button>\n    </ion-item>\n    <ion-item *ngIf="categoria.foto">\n      <img [src]="categoria.foto">\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\NoFood\NoFood.Ionic\src\pages\adm-categoria\adm-categoria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_categoria_categoria__["a" /* CategoriaProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_alert_alert__["a" /* AlertProvider */]])
    ], AdmCategoriaPage);
    return AdmCategoriaPage;
}());

//# sourceMappingURL=adm-categoria.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaModel; });
var CategoriaModel = /** @class */ (function () {
    function CategoriaModel() {
    }
    return CategoriaModel;
}());

//# sourceMappingURL=categoriaModel.js.map

/***/ })

});
//# sourceMappingURL=1.js.map