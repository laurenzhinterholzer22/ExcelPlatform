"use strict";
(self["webpackChunkplatform"] = self["webpackChunkplatform"] || []).push([["src_main_webapp_app_admin_admin-task_admin-task_module_ts"],{

/***/ 2518:
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/admin/admin-task/admin-task.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTask": () => (/* binding */ AdminTask)
/* harmony export */ });
class AdminTask {
    constructor(id, name, instruction_excel, instruction_pdf, solution_excel) {
        this.id = id;
        this.name = name;
        this.instruction_excel = instruction_excel;
        this.instruction_pdf = instruction_pdf;
        this.solution_excel = solution_excel;
    }
}


/***/ }),

/***/ 9026:
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/admin/admin-task/admin-task.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTaskModule": () => (/* binding */ AdminTaskModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 2267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_task_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-task.route */ 637);
/* harmony import */ var _list_admin_task_comonent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/admin-task.comonent */ 5714);
/* harmony import */ var _update_admin_task_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/admin-task-update.component */ 1880);
/* harmony import */ var _delete_admin_task_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete/admin-task-delete-dialog.component */ 6809);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);









class AdminTaskModule {
}
AdminTaskModule.ɵfac = function AdminTaskModule_Factory(t) { return new (t || AdminTaskModule)(); };
AdminTaskModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AdminTaskModule });
AdminTaskModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_admin_task_route__WEBPACK_IMPORTED_MODULE_1__.adminTaskRoute), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdminTaskModule, { declarations: [_list_admin_task_comonent__WEBPACK_IMPORTED_MODULE_2__.AdminTaskComponent,
        _update_admin_task_update_component__WEBPACK_IMPORTED_MODULE_3__.AdminTaskUpdateComponent,
        _delete_admin_task_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__.AdminTaskDeleteDialogComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule], exports: [_list_admin_task_comonent__WEBPACK_IMPORTED_MODULE_2__.AdminTaskComponent] }); })();


/***/ }),

/***/ 637:
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/admin/admin-task/admin-task.route.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTaskResolve": () => (/* binding */ AdminTaskResolve),
/* harmony export */   "adminTaskRoute": () => (/* binding */ adminTaskRoute)
/* harmony export */ });
/* harmony import */ var _admin_task_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-task.model */ 2518);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _list_admin_task_comonent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/admin-task.comonent */ 5714);
/* harmony import */ var _update_admin_task_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update/admin-task-update.component */ 1880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_admin_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/admin-task.service */ 2956);






class AdminTaskResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route) {
        const id = route.params['id'];
        if (id) {
            return this.service.find(id);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(new _admin_task_model__WEBPACK_IMPORTED_MODULE_0__.AdminTask());
    }
}
AdminTaskResolve.ɵfac = function AdminTaskResolve_Factory(t) { return new (t || AdminTaskResolve)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_service_admin_task_service__WEBPACK_IMPORTED_MODULE_3__.AdminTaskService)); };
AdminTaskResolve.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AdminTaskResolve, factory: AdminTaskResolve.ɵfac, providedIn: 'root' });
const adminTaskRoute = [
    {
        path: '',
        component: _list_admin_task_comonent__WEBPACK_IMPORTED_MODULE_1__.AdminTaskComponent,
        data: {
            defaultSort: 'id,asc',
        },
    },
    {
        path: 'new',
        component: _update_admin_task_update_component__WEBPACK_IMPORTED_MODULE_2__.AdminTaskUpdateComponent,
        resolve: {
            adminTask: AdminTaskResolve,
        },
    },
    {
        path: 'login/edit',
        component: _update_admin_task_update_component__WEBPACK_IMPORTED_MODULE_2__.AdminTaskUpdateComponent,
        resolve: {
            adminTask: AdminTaskResolve,
        },
    },
];


/***/ }),

/***/ 6809:
/*!*******************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/admin-task/delete/admin-task-delete-dialog.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTaskDeleteDialogComponent": () => (/* binding */ AdminTaskDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_admin_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/admin-task.service */ 2956);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);







function AdminTaskDeleteDialogComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdminTaskDeleteDialogComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.confirmDelete(ctx_r1.adminTask.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "L\u00F6schung best\u00E4tigen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminTaskDeleteDialogComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "jhi-alert-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n      Wollen Sie diesen Admin-Task l\u00F6schen?\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminTaskDeleteDialogComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Abbrechen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "L\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AdminTaskDeleteDialogComponent {
    constructor(adminTaskService, activeModal) {
        this.adminTaskService = adminTaskService;
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.adminTaskService.delete(id).subscribe(() => {
            this.activeModal.close('deleted');
        });
    }
}
AdminTaskDeleteDialogComponent.ɵfac = function AdminTaskDeleteDialogComponent_Factory(t) { return new (t || AdminTaskDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_admin_task_service__WEBPACK_IMPORTED_MODULE_0__.AdminTaskService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal)); };
AdminTaskDeleteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminTaskDeleteDialogComponent, selectors: [["jhi-admin-task-delete-dialog"]], decls: 2, vars: 1, consts: [["name", "deleteForm", 3, "ngSubmit", 4, "ngIf"], ["name", "deleteForm", 3, "ngSubmit"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["type", "submit", 1, "btn", "btn-danger"], ["icon", "times"]], template: function AdminTaskDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AdminTaskDeleteDialogComponent_form_0_Template, 38, 0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.adminTask);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_1__.AlertErrorComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent], encapsulation: 2 });


/***/ }),

/***/ 5714:
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/admin/admin-task/list/admin-task.comonent.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTaskComponent": () => (/* binding */ AdminTaskComponent)
/* harmony export */ });
/* harmony import */ var _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/pagination.constants */ 4218);
/* harmony import */ var _delete_admin_task_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delete/admin-task-delete-dialog.component */ 6809);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_admin_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/admin-task.service */ 2956);
/* harmony import */ var _core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/auth/account.service */ 9199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 9003);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/sort/sort.directive */ 1427);
/* harmony import */ var _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sort/sort-by.directive */ 1408);
/* harmony import */ var _shared_file_file_download_file_download_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/file/file-download/file-download.component */ 3252);
/* harmony import */ var _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pagination/item-count.component */ 8133);
















function AdminTaskComponent_div_31_tbody_34_tr_2_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "jhi-file-download", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adminTask_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fileId", adminTask_r4.instruction_excel);
} }
function AdminTaskComponent_div_31_tbody_34_tr_2_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "jhi-file-download", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adminTask_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fileId", adminTask_r4.instruction_pdf);
} }
function AdminTaskComponent_div_31_tbody_34_tr_2_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "jhi-file-download", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adminTask_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fileId", adminTask_r4.solution_excel);
} }
function AdminTaskComponent_div_31_tbody_34_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, AdminTaskComponent_div_31_tbody_34_tr_2_td_11_Template, 5, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, AdminTaskComponent_div_31_tbody_34_tr_2_td_13_Template, 5, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, AdminTaskComponent_div_31_tbody_34_tr_2_td_15_Template, 5, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminTaskComponent_div_31_tbody_34_tr_2_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); const adminTask_r4 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r11.deleteAdminTask(adminTask_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "L\u00F6schen");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adminTask_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](adminTask_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](adminTask_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", adminTask_r4.instruction_excel != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", adminTask_r4.instruction_pdf != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", adminTask_r4.solution_excel != undefined);
} }
function AdminTaskComponent_div_31_tbody_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, AdminTaskComponent_div_31_tbody_34_tr_2_Template, 31, 5, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.adminTasks);
} }
function AdminTaskComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("predicateChange", function AdminTaskComponent_div_31_Template_tr_predicateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r13.predicate = $event; })("ascendingChange", function AdminTaskComponent_div_31_Template_tr_ascendingChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r15.ascending = $event; })("sortChange", function AdminTaskComponent_div_31_Template_tr_sortChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r16.transition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Beispiel Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Angabe Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Angabe PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "L\u00F6sung Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](30, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, AdminTaskComponent_div_31_tbody_34_Template, 4, 1, "tbody", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("predicate", ctx_r0.predicate)("ascending", ctx_r0.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.adminTasks);
} }
const _c0 = function (a0, a1, a2) { return { page: a0, totalItems: a1, itemsPerPage: a2 }; };
function AdminTaskComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "jhi-item-count", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ngb-pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function AdminTaskComponent_div_33_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r17.page = $event; })("pageChange", function AdminTaskComponent_div_33_Template_ngb_pagination_pageChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r19.transition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](7, _c0, ctx_r1.page, ctx_r1.totalItems, ctx_r1.itemsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", ctx_r1.totalItems)("page", ctx_r1.page)("pageSize", ctx_r1.itemsPerPage)("maxSize", 5)("rotate", true)("boundaryLinks", true);
} }
const _c1 = function () { return ["./new"]; };
class AdminTaskComponent {
    constructor(adminTaskService, accountService, activatedRoute, router, modalService) {
        this.adminTaskService = adminTaskService;
        this.accountService = accountService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
        this.currentAccount = null;
        this.adminTasks = null;
        this.isLoading = false;
        this.totalItems = 0;
        this.itemsPerPage = _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ITEMS_PER_PAGE;
    }
    ngOnInit() {
        this.accountService.identity().subscribe(account => (this.currentAccount = account));
        this.handleNavigation();
    }
    deleteAdminTask(adminTask) {
        const modalRef = this.modalService.open(_delete_admin_task_delete_dialog_component__WEBPACK_IMPORTED_MODULE_1__.AdminTaskDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.adminTask = adminTask;
        modalRef.closed.subscribe(reason => {
            if (reason === 'deleted') {
                this.loadAll();
            }
        });
    }
    loadAll() {
        this.isLoading = true;
        this.adminTaskService
            .query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
        })
            .subscribe({
            next: (res) => {
                this.isLoading = false;
                this.onSuccess(res.body, res.headers);
            },
            error: () => (this.isLoading = false),
        });
    }
    transition() {
        this.router.navigate(['./'], {
            relativeTo: this.activatedRoute.parent,
            queryParams: {
                page: this.page,
                sort: `${this.predicate},${this.ascending ? _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ASC : _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.DESC}`,
            },
        });
    }
    handleNavigation() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
            var _a;
            const page = params.get('page');
            this.page = +(page !== null && page !== void 0 ? page : 1);
            const sort = ((_a = params.get(_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.SORT)) !== null && _a !== void 0 ? _a : data['defaultSort']).split(',');
            this.predicate = sort[0];
            this.ascending = sort[1] === _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ASC;
            this.loadAll();
        });
    }
    sort() {
        const result = [`${this.predicate},${this.ascending ? _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ASC : _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.DESC}`];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    onSuccess(adminTasks, headers) {
        this.totalItems = Number(headers.get('X-Total-Count'));
        this.adminTasks = adminTasks;
    }
}
AdminTaskComponent.ɵfac = function AdminTaskComponent_Factory(t) { return new (t || AdminTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_admin_task_service__WEBPACK_IMPORTED_MODULE_2__.AdminTaskService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal)); };
AdminTaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: AdminTaskComponent, selectors: [["jhi-admin-task"]], decls: 36, vars: 6, consts: [["id", "admin-task-page-heading", "data-cy", "adminTaskPageHeading"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info", "mr-2", 3, "disabled", "click"], ["icon", "sync", 3, "spin"], [1, "btn", "btn-primary", "jh-create-entity", 3, "routerLink"], ["icon", "plus"], ["class", "table-responsive", 4, "ngIf"], [4, "ngIf"], [1, "table-responsive"], ["aria-describedby", "admin-task-page-heading", 1, "table", "table-striped"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["scope", "col", "jhiSortBy", "id"], ["icon", "sort"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "text-right"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["icon", "times"], [1, "d-none", "d-md-inline"], [3, "fileId"], [1, "row", "justify-content-center"], [3, "params"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"]], template: function AdminTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Admin Beispiele");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AdminTaskComponent_Template_button_click_9_listener() { return ctx.loadAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Refresh List");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "neues Beispiel erstellen");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "jhi-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, AdminTaskComponent_div_31_Template, 37, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, AdminTaskComponent_div_33_Template, 12, 11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("spin", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.adminTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.adminTasks);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__.AlertErrorComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_6__.SortDirective, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__.SortByDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _shared_file_file_download_file_download_component__WEBPACK_IMPORTED_MODULE_8__.FileDownloadComponent, _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_9__.ItemCountComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPagination], encapsulation: 2 });


/***/ }),

/***/ 1880:
/*!************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/admin-task/update/admin-task-update.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTaskUpdateComponent": () => (/* binding */ AdminTaskUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_admin_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/admin-task.service */ 2956);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_file_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/file/file-upload/file-upload.component */ 8540);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);










function AdminTaskUpdateComponent_div_9_div_19_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n              Diese Feld ist notwendig!\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminTaskUpdateComponent_div_9_div_19_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n              Dieses Feld darf nicht mehr als 100 Zeichen beinhalten!\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminTaskUpdateComponent_div_9_div_19_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n              Dieses Feld darf maximal 100 Zeichen beinhalten!\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminTaskUpdateComponent_div_9_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AdminTaskUpdateComponent_div_9_div_19_small_2_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AdminTaskUpdateComponent_div_9_div_19_small_4_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AdminTaskUpdateComponent_div_9_div_19_small_6_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.editForm.get("name")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r2.editForm.get("name")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r2.editForm.get("name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.pattern);
} }
function AdminTaskUpdateComponent_div_9_small_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n          Bitte Laden Sie alle 3 Files hoch\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AdminTaskUpdateComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "jhi-alert-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AdminTaskUpdateComponent_div_9_div_19_Template, 8, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\n\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Upload Angabe Excel: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "jhi-file-upload", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fileAdded", function AdminTaskUpdateComponent_div_9_Template_jhi_file_upload_fileAdded_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.handleFileAddedInstructionExcel($event); })("fileRemoved", function AdminTaskUpdateComponent_div_9_Template_jhi_file_upload_fileRemoved_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.handleFileRemovedInstructionExcel($event); })("fileModified", function AdminTaskUpdateComponent_div_9_Template_jhi_file_upload_fileModified_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.handleFileMovedInstructionExcel($event[0], $event[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Upload Angabe PDF: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "jhi-file-upload", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fileAdded", function AdminTaskUpdateComponent_div_9_Template_jhi_file_upload_fileAdded_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.handleFileAddedInstructionPdf($event); })("fileRemoved", function AdminTaskUpdateComponent_div_9_Template_jhi_file_upload_fileRemoved_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.handleFileRemovedInstructionPdf($event); })("fileModified", function AdminTaskUpdateComponent_div_9_Template_jhi_file_upload_fileModified_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.handleFileMovedInstructionPdf($event[0], $event[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Upload L\u00F6sung Excel: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "jhi-file-upload", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("fileAdded", function AdminTaskUpdateComponent_div_9_Template_jhi_file_upload_fileAdded_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14.handleFileAddedSolutionExcel($event); })("fileRemoved", function AdminTaskUpdateComponent_div_9_Template_jhi_file_upload_fileRemoved_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.handleFileRemovedSolutionExcel($event); })("fileModified", function AdminTaskUpdateComponent_div_9_Template_jhi_file_upload_fileModified_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.handleFileMovedSolutionExcel($event[0], $event[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, AdminTaskUpdateComponent_div_9_small_43_Template, 2, 0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\n\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx_r0.adminTask.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.editForm.get("name").invalid && (ctx_r0.editForm.get("name").dirty || ctx_r0.editForm.get("name").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", false)("fileId", ctx_r0.uploadFileIdInstructionExcel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", false)("fileId", ctx_r0.uploadFileIdInstructionPdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", false)("fileId", ctx_r0.uploadFileIdSolutionExcel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.uploadFileIdInstructionExcel == -1 || ctx_r0.uploadFileIdInstructionPdf == -1 || ctx_r0.uploadFileIdSolutionExcel == -1);
} }
function AdminTaskUpdateComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminTaskUpdateComponent_div_11_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r17.previousState(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.editForm.invalid || ctx_r1.isSaving || ctx_r1.uploadFileIdInstructionExcel == -1 || ctx_r1.uploadFileIdInstructionPdf == -1 || ctx_r1.uploadFileIdSolutionExcel == -1);
} }
class AdminTaskUpdateComponent {
    constructor(adminTaskService, route, fb) {
        this.adminTaskService = adminTaskService;
        this.route = route;
        this.fb = fb;
        this.isSaving = false;
        this.files = null;
        // public uploadFileId = -1;
        this.uploadFileIdInstructionExcel = -1;
        this.uploadFileIdInstructionPdf = -1;
        this.uploadFileIdSolutionExcel = -1;
        this.editForm = this.fb.group({
            id: [],
            name: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(100)
                ],
            ],
        });
    }
    ngOnInit() {
        this.route.data.subscribe(({ adminTask }) => {
            if (adminTask) {
                this.adminTask = adminTask;
                // this.updateForm(adminTask);
            }
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        this.updateAdminTask(this.adminTask);
        this.adminTaskService.create(this.adminTask).subscribe({
            next: () => this.onSaveSuccess(),
            error: () => this.onSaveError(),
        });
    }
    updateForm(adminTask) {
        this.editForm.patchValue({
            id: adminTask.id,
            name: adminTask.name,
            // instruction_excel: adminTask.instruction_excel,
            // instruction_pdf: adminTask.instruction_pdf,
            // solution_excel: adminTask.solution_excel,
        });
    }
    updateAdminTask(adminTask) {
        adminTask.name = this.editForm.get(['name']).value;
        adminTask.instruction_excel = this.uploadFileIdInstructionExcel;
        adminTask.instruction_pdf = this.uploadFileIdInstructionPdf;
        adminTask.solution_excel = this.uploadFileIdSolutionExcel;
        // adminTask.instruction_pdf = this.editForm.get(['instruction_pdf'])!.value;
        // adminTask.solution_excel = this.editForm.get(['solution_excel'])!.value;
    }
    onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }
    onSaveError() {
        this.isSaving = false;
    }
    // public handleFileAdded(fileId: number): void {
    //   this.uploadFileId = fileId;
    // }
    //
    //
    // public handleFileRemoved(fileId: number): void {
    //   this.uploadFileId = -1;
    // }
    //
    //
    //
    // public handleFileMoved(oldFileId: number, newFileId: number): void {
    //   this.uploadFileId = newFileId;
    // }
    handleFileAddedInstructionExcel(fileId) {
        this.uploadFileIdInstructionExcel = fileId;
    }
    handleFileRemovedInstructionExcel(fileId) {
        this.uploadFileIdInstructionExcel = -1;
    }
    handleFileMovedInstructionExcel(oldFileId, newFileId) {
        this.uploadFileIdInstructionExcel = newFileId;
    }
    handleFileAddedInstructionPdf(fileId) {
        this.uploadFileIdInstructionPdf = fileId;
    }
    handleFileRemovedInstructionPdf(fileId) {
        this.uploadFileIdInstructionPdf = -1;
    }
    handleFileMovedInstructionPdf(oldFileId, newFileId) {
        this.uploadFileIdInstructionPdf = newFileId;
    }
    handleFileAddedSolutionExcel(fileId) {
        this.uploadFileIdSolutionExcel = fileId;
    }
    handleFileRemovedSolutionExcel(fileId) {
        this.uploadFileIdSolutionExcel = -1;
    }
    handleFileMovedSolutionExcel(oldFileId, newFileId) {
        this.uploadFileIdSolutionExcel = newFileId;
    }
}
AdminTaskUpdateComponent.ɵfac = function AdminTaskUpdateComponent_Factory(t) { return new (t || AdminTaskUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_admin_task_service__WEBPACK_IMPORTED_MODULE_0__.AdminTaskService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
AdminTaskUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AdminTaskUpdateComponent, selectors: [["jhi-admin-task-update"]], decls: 16, vars: 3, consts: [[1, "row", "justify-content-center"], [1, "col-8"], ["name", "editForm", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["id", "myAdminTaskLabel"], [4, "ngIf"], [1, "form-group", 3, "hidden"], ["type", "text", "name", "id", "formControlName", "id", "readonly", "", 1, "form-control"], [1, "form-group"], [1, "form-control-label"], ["type", "text", "name", "name", "formControlName", "name", 1, "form-control"], ["for", "fileUploadInstructionExcel", 1, "form-control-label"], ["id", "fileUploadInstructionExcel", 3, "disabled", "fileId", "fileAdded", "fileRemoved", "fileModified"], ["for", "fileUploadInstructionPdf", 1, "form-control-label"], ["id", "fileUploadInstructionPdf", 3, "disabled", "fileId", "fileAdded", "fileRemoved", "fileModified"], ["for", "fileUploadSolutionExcel", 1, "form-control-label"], ["id", "fileUploadSolutionExcel", 3, "disabled", "fileId", "fileAdded", "fileRemoved", "fileModified"], ["class", "form-text text-danger", 4, "ngIf"], [1, "form-text", "text-danger"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["icon", "save"], ["jhiTranslate", "entity.action.save"]], template: function AdminTaskUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AdminTaskUpdateComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Admin Task erstellen");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AdminTaskUpdateComponent_div_9_Template, 45, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AdminTaskUpdateComponent_div_11_Template, 18, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.adminTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.adminTask);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_1__.AlertErrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_file_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_2__.FileUploadComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_admin-task_admin-task_module_ts.js.map