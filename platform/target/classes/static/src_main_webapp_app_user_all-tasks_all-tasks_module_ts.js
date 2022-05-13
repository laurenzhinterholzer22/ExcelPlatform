"use strict";
(self["webpackChunkplatform"] = self["webpackChunkplatform"] || []).push([["src_main_webapp_app_user_all-tasks_all-tasks_module_ts"],{

/***/ 571:
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/user/all-tasks/all-tasks.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllTasksComponent": () => (/* binding */ AllTasksComponent)
/* harmony export */ });
/* harmony import */ var _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/pagination.constants */ 4218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _admin_admin_task_service_admin_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/admin-task/service/admin-task.service */ 2956);
/* harmony import */ var _core_auth_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth/account.service */ 9199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 9003);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sort/sort.directive */ 1427);
/* harmony import */ var _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sort/sort-by.directive */ 1408);
/* harmony import */ var _shared_file_file_download_file_download_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/file/file-download/file-download.component */ 3252);
/* harmony import */ var _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pagination/item-count.component */ 8133);















function AllTasksComponent_div_23_tbody_30_tr_2_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "jhi-file-download", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adminTask_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fileId", adminTask_r4.instruction_excel);
} }
function AllTasksComponent_div_23_tbody_30_tr_2_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "jhi-file-download", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adminTask_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fileId", adminTask_r4.instruction_pdf);
} }
function AllTasksComponent_div_23_tbody_30_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, AllTasksComponent_div_23_tbody_30_tr_2_td_11_Template, 5, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, AllTasksComponent_div_23_tbody_30_tr_2_td_13_Template, 5, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\n\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adminTask_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](adminTask_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](adminTask_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", adminTask_r4.instruction_excel != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", adminTask_r4.instruction_pdf != undefined);
} }
function AllTasksComponent_div_23_tbody_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AllTasksComponent_div_23_tbody_30_tr_2_Template, 15, 4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.adminTasks);
} }
function AllTasksComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("predicateChange", function AllTasksComponent_div_23_Template_tr_predicateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r9.predicate = $event; })("ascendingChange", function AllTasksComponent_div_23_Template_tr_ascendingChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r11.ascending = $event; })("sortChange", function AllTasksComponent_div_23_Template_tr_sortChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r12.transition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Beispiel Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Angabe Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Angabe PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, AllTasksComponent_div_23_tbody_30_Template, 4, 1, "tbody", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("predicate", ctx_r0.predicate)("ascending", ctx_r0.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.adminTasks);
} }
const _c0 = function (a0, a1, a2) { return { page: a0, totalItems: a1, itemsPerPage: a2 }; };
function AllTasksComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "jhi-item-count", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ngb-pagination", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function AllTasksComponent_div_25_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r13.page = $event; })("pageChange", function AllTasksComponent_div_25_Template_ngb_pagination_pageChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r15.transition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](7, _c0, ctx_r1.page, ctx_r1.totalItems, ctx_r1.itemsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("collectionSize", ctx_r1.totalItems)("page", ctx_r1.page)("pageSize", ctx_r1.itemsPerPage)("maxSize", 5)("rotate", true)("boundaryLinks", true);
} }
class AllTasksComponent {
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
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
AllTasksComponent.ɵfac = function AllTasksComponent_Factory(t) { return new (t || AllTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_admin_admin_task_service_admin_task_service__WEBPACK_IMPORTED_MODULE_1__.AdminTaskService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal)); };
AllTasksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AllTasksComponent, selectors: [["jhi-all-tasks"]], decls: 28, vars: 4, consts: [["id", "all-tasks-page-heading", "data-cy", "allTasksPageHeading"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info", "mr-2", 3, "disabled", "click"], ["icon", "sync", 3, "spin"], ["class", "table-responsive", 4, "ngIf"], [4, "ngIf"], [1, "table-responsive"], ["aria-describedby", "all-tasks-page-heading", 1, "table", "table-striped"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["scope", "col", "jhiSortBy", "id"], ["icon", "sort"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "fileId"], [1, "row", "justify-content-center"], [3, "params"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"]], template: function AllTasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Alle Beispiele");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AllTasksComponent_Template_button_click_9_listener() { return ctx.loadAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Refresh List");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "jhi-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, AllTasksComponent_div_23_Template, 33, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](25, AllTasksComponent_div_25_Template, 12, 11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("spin", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.adminTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.adminTasks);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FaIconComponent, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_3__.AlertErrorComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_5__.SortDirective, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_6__.SortByDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _shared_file_file_download_file_download_component__WEBPACK_IMPORTED_MODULE_7__.FileDownloadComponent, _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_8__.ItemCountComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPagination], encapsulation: 2 });


/***/ }),

/***/ 8030:
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/user/all-tasks/all-tasks.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllTasksModule": () => (/* binding */ AllTasksModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 2267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _all_tasks_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-tasks.route */ 8988);
/* harmony import */ var _all_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-tasks.component */ 571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class AllTasksModule {
}
AllTasksModule.ɵfac = function AllTasksModule_Factory(t) { return new (t || AllTasksModule)(); };
AllTasksModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AllTasksModule });
AllTasksModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_all_tasks_route__WEBPACK_IMPORTED_MODULE_1__.allTasksRoute), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AllTasksModule, { declarations: [_all_tasks_component__WEBPACK_IMPORTED_MODULE_2__.AllTasksComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule] }); })();


/***/ }),

/***/ 8988:
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/user/all-tasks/all-tasks.route.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allTasksRoute": () => (/* binding */ allTasksRoute)
/* harmony export */ });
/* harmony import */ var _all_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-tasks.component */ 571);

const allTasksRoute = [
    {
        path: '',
        component: _all_tasks_component__WEBPACK_IMPORTED_MODULE_0__.AllTasksComponent,
        data: {
            defaultSort: 'id,asc',
        },
    },
];


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_user_all-tasks_all-tasks_module_ts.js.map