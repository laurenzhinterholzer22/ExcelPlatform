"use strict";
(self["webpackChunkplatform"] = self["webpackChunkplatform"] || []).push([["src_main_webapp_app_user_done-tasks_done-tasks_module_ts"],{

/***/ 7582:
/*!*********************************************************************!*\
  !*** ./src/main/webapp/app/user/done-tasks/done-tasks.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoneTasksComponent": () => (/* binding */ DoneTasksComponent)
/* harmony export */ });
/* harmony import */ var _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/pagination.constants */ 4218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _admin_admin_task_service_admin_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/admin-task/service/admin-task.service */ 2956);
/* harmony import */ var _user_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-task.service */ 2848);
/* harmony import */ var _core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth/account.service */ 9199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/alert/alert.component */ 9003);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sort/sort.directive */ 1427);
/* harmony import */ var _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/sort/sort-by.directive */ 1408);
/* harmony import */ var _shared_file_file_download_file_download_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/file/file-download/file-download.component */ 3252);
/* harmony import */ var _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pagination/item-count.component */ 8133);
















function DoneTasksComponent_div_23_tbody_38_tr_2_ng_container_2_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "jhi-file-download", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userTaskMeta_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fileId", userTaskMeta_r4.instruction_excel);
} }
function DoneTasksComponent_div_23_tbody_38_tr_2_ng_container_2_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "jhi-file-download", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userTaskMeta_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fileId", userTaskMeta_r4.instruction_pdf);
} }
function DoneTasksComponent_div_23_tbody_38_tr_2_ng_container_2_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "jhi-file-download", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userTaskMeta_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fileId", userTaskMeta_r4.submission_excel);
} }
function DoneTasksComponent_div_23_tbody_38_tr_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, DoneTasksComponent_div_23_tbody_38_tr_2_ng_container_2_td_8_Template, 5, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, DoneTasksComponent_div_23_tbody_38_tr_2_ng_container_2_td_10_Template, 5, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, DoneTasksComponent_div_23_tbody_38_tr_2_ng_container_2_td_12_Template, 5, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const userTaskMeta_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](userTaskMeta_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](userTaskMeta_r4.admin_task_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", userTaskMeta_r4.instruction_excel != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", userTaskMeta_r4.instruction_pdf != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", userTaskMeta_r4.submission_excel != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](userTaskMeta_r4.is_correct);
} }
function DoneTasksComponent_div_23_tbody_38_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DoneTasksComponent_div_23_tbody_38_tr_2_ng_container_2_Template, 17, 6, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userTaskMeta_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (userTaskMeta_r4 == null ? null : userTaskMeta_r4.user_id) == (ctx_r3.currentAccount == null ? null : ctx_r3.currentAccount.id));
} }
function DoneTasksComponent_div_23_tbody_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DoneTasksComponent_div_23_tbody_38_tr_2_Template, 16, 1, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.userTasksMeta);
} }
function DoneTasksComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("predicateChange", function DoneTasksComponent_div_23_Template_tr_predicateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r13.predicate = $event; })("ascendingChange", function DoneTasksComponent_div_23_Template_tr_ascendingChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r15.ascending = $event; })("sortChange", function DoneTasksComponent_div_23_Template_tr_sortChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r16.transition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "fa-icon", 10);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Abgabe Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Beispiel richtig?");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, DoneTasksComponent_div_23_tbody_38_Template, 4, 1, "tbody", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("predicate", ctx_r0.predicate)("ascending", ctx_r0.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.userTasksMeta);
} }
const _c0 = function (a0, a1, a2) { return { page: a0, totalItems: a1, itemsPerPage: a2 }; };
function DoneTasksComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "jhi-item-count", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ngb-pagination", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function DoneTasksComponent_div_25_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r17.page = $event; })("pageChange", function DoneTasksComponent_div_25_Template_ngb_pagination_pageChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r19.transition(); });
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
class DoneTasksComponent {
    constructor(adminTaskService, userTaskService, accountService, activatedRoute, router, modalService) {
        this.adminTaskService = adminTaskService;
        this.userTaskService = userTaskService;
        this.accountService = accountService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
        this.currentAccount = null;
        this.adminTasks = null;
        this.userTasks = null;
        this.userTasksMeta = null;
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
        this.userTaskService
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
    onSuccess(userTasksMeta, headers) {
        this.totalItems = Number(headers.get('X-Total-Count'));
        this.userTasksMeta = userTasksMeta;
    }
}
DoneTasksComponent.ɵfac = function DoneTasksComponent_Factory(t) { return new (t || DoneTasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_admin_admin_task_service_admin_task_service__WEBPACK_IMPORTED_MODULE_1__.AdminTaskService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_user_task_service__WEBPACK_IMPORTED_MODULE_2__.UserTaskService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal)); };
DoneTasksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DoneTasksComponent, selectors: [["jhi-done-tasks"]], decls: 28, vars: 4, consts: [["id", "done-task-page-heading", "data-cy", "doneTaskPageHeading"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info", "mr-2", 3, "disabled", "click"], ["icon", "sync", 3, "spin"], ["class", "table-responsive", 4, "ngIf"], [4, "ngIf"], [1, "table-responsive"], ["aria-describedby", "admin-task-page-heading", 1, "table", "table-striped"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["scope", "col", "jhiSortBy", "id"], ["icon", "sort"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "fileId"], [1, "row", "justify-content-center"], [3, "params"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"]], template: function DoneTasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Gel\u00F6ste Beispiele");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DoneTasksComponent_Template_button_click_9_listener() { return ctx.loadAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Refresh List");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "jhi-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, DoneTasksComponent_div_23_Template, 41, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, DoneTasksComponent_div_25_Template, 12, 11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("spin", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.userTasksMeta);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.adminTasks);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__.AlertErrorComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_6__.SortDirective, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__.SortByDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _shared_file_file_download_file_download_component__WEBPACK_IMPORTED_MODULE_8__.FileDownloadComponent, _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_9__.ItemCountComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPagination], encapsulation: 2 });


/***/ }),

/***/ 6161:
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/user/done-tasks/done-tasks.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoneTasksModule": () => (/* binding */ DoneTasksModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 2267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _done_tasks_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./done-tasks.route */ 1797);
/* harmony import */ var _done_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./done-tasks.component */ 7582);
/* harmony import */ var _update_done_tasks_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/done-tasks-update.component */ 3965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








class DoneTasksModule {
}
DoneTasksModule.ɵfac = function DoneTasksModule_Factory(t) { return new (t || DoneTasksModule)(); };
DoneTasksModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DoneTasksModule });
DoneTasksModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(_done_tasks_route__WEBPACK_IMPORTED_MODULE_1__.doneTasksRoute), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DoneTasksModule, { declarations: [_done_tasks_component__WEBPACK_IMPORTED_MODULE_2__.DoneTasksComponent,
        _update_done_tasks_update_component__WEBPACK_IMPORTED_MODULE_3__.DoneTasksUpdateComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule] }); })();


/***/ }),

/***/ 1797:
/*!*****************************************************************!*\
  !*** ./src/main/webapp/app/user/done-tasks/done-tasks.route.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoneUserTaskResolve": () => (/* binding */ DoneUserTaskResolve),
/* harmony export */   "doneTasksRoute": () => (/* binding */ doneTasksRoute)
/* harmony export */ });
/* harmony import */ var _done_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./done-tasks.component */ 7582);
/* harmony import */ var _update_done_tasks_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update/done-tasks-update.component */ 3965);
/* harmony import */ var _user_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-task.model */ 9723);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-task.service */ 2848);






class DoneUserTaskResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route) {
        const id = route.params['id'];
        if (id) {
            return this.service.find(id);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(new _user_task_model__WEBPACK_IMPORTED_MODULE_2__.UserTask());
    }
}
DoneUserTaskResolve.ɵfac = function DoneUserTaskResolve_Factory(t) { return new (t || DoneUserTaskResolve)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_user_task_service__WEBPACK_IMPORTED_MODULE_3__.UserTaskService)); };
DoneUserTaskResolve.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: DoneUserTaskResolve, factory: DoneUserTaskResolve.ɵfac, providedIn: 'root' });
const doneTasksRoute = [
    {
        path: '',
        component: _done_tasks_component__WEBPACK_IMPORTED_MODULE_0__.DoneTasksComponent, data: {
            defaultSort: 'id,asc',
        },
    },
    {
        path: 'edit',
        component: _update_done_tasks_update_component__WEBPACK_IMPORTED_MODULE_1__.DoneTasksUpdateComponent,
        resolve: {
            adminTask: DoneUserTaskResolve,
        },
    },
];


/***/ }),

/***/ 3965:
/*!***********************************************************************************!*\
  !*** ./src/main/webapp/app/user/done-tasks/update/done-tasks-update.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoneTasksUpdateComponent": () => (/* binding */ DoneTasksUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_task_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user-task.service */ 2848);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




class DoneTasksUpdateComponent {
    constructor(userTaskService, route, fb) {
        this.userTaskService = userTaskService;
        this.route = route;
        this.fb = fb;
        this.isSaving = false;
        this.authorities = [];
        this.editForm = this.fb.group({
            id: [],
        });
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        this.updateUserTask(this.userTask);
        if (this.userTask.id !== undefined) {
            this.userTaskService.update(this.userTask).subscribe({
                next: () => this.onSaveSuccess(),
                error: () => this.onSaveError(),
            });
        }
        else {
            this.userTaskService.create(this.userTask).subscribe({
                next: () => this.onSaveSuccess(),
                error: () => this.onSaveError(),
            });
        }
    }
    updateUserTask(userTask) {
        userTask.submission_excel = this.submissionExcel;
    }
    onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }
    onSaveError() {
        this.isSaving = false;
    }
}
DoneTasksUpdateComponent.ɵfac = function DoneTasksUpdateComponent_Factory(t) { return new (t || DoneTasksUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_user_task_service__WEBPACK_IMPORTED_MODULE_0__.UserTaskService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
DoneTasksUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DoneTasksUpdateComponent, selectors: [["jhi-done-tasks-update"]], decls: 0, vars: 0, template: function DoneTasksUpdateComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 9723:
/*!*****************************************************!*\
  !*** ./src/main/webapp/app/user/user-task.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTask": () => (/* binding */ UserTask)
/* harmony export */ });
class UserTask {
    constructor(id, isCorrect, adminTask, instruction_user_excel, submission_excel, user) {
        this.id = id;
        this.isCorrect = isCorrect;
        this.adminTask = adminTask;
        this.instruction_user_excel = instruction_user_excel;
        this.submission_excel = submission_excel;
        this.user = user;
    }
}


/***/ }),

/***/ 2848:
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/user/user-task.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTaskService": () => (/* binding */ UserTaskService)
/* harmony export */ });
/* harmony import */ var _core_request_request_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/request/request-util */ 5929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/config/application-config.service */ 1082);




class UserTaskService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        // extra resourceUrl for the DTO Object
        this.resourceUrlDTO = this.applicationConfigService.getEndpointFor('api/user_task_meta');
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/user_task');
    }
    create(userTask) {
        return this.http.post(this.resourceUrl, userTask);
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }
    query(req) {
        const options = (0,_core_request_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)(req);
        return this.http.get(this.resourceUrlDTO, { params: options, observe: 'response' });
    }
    update(userTask) {
        return this.http.put(this.resourceUrl, userTask);
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
}
UserTaskService.ɵfac = function UserTaskService_Factory(t) { return new (t || UserTaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationConfigService)); };
UserTaskService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserTaskService, factory: UserTaskService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_user_done-tasks_done-tasks_module_ts.js.map