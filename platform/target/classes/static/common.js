"use strict";
(self["webpackChunkplatform"] = self["webpackChunkplatform"] || []).push([["common"],{

/***/ 2956:
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/admin/admin-task/service/admin-task.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTaskService": () => (/* binding */ AdminTaskService)
/* harmony export */ });
/* harmony import */ var _core_request_request_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/request/request-util */ 5929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/application-config.service */ 1082);




class AdminTaskService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        // extra resourceUrl for the DTO Object
        this.resourceUrlDTO = this.applicationConfigService.getEndpointFor('api/admin/admin_task_meta');
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/admin/admin_task');
    }
    create(adminTask) {
        return this.http.post(this.resourceUrl, adminTask);
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }
    query(req) {
        const options = (0,_core_request_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)(req);
        return this.http.get(this.resourceUrlDTO, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
}
AdminTaskService.ɵfac = function AdminTaskService_Factory(t) { return new (t || AdminTaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationConfigService)); };
AdminTaskService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AdminTaskService, factory: AdminTaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4218:
/*!************************************************************!*\
  !*** ./src/main/webapp/app/config/pagination.constants.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITEMS_PER_PAGE": () => (/* binding */ ITEMS_PER_PAGE),
/* harmony export */   "ASC": () => (/* binding */ ASC),
/* harmony export */   "DESC": () => (/* binding */ DESC),
/* harmony export */   "SORT": () => (/* binding */ SORT)
/* harmony export */ });
const ITEMS_PER_PAGE = 20;
const ASC = 'asc';
const DESC = 'desc';
const SORT = 'sort';


/***/ }),

/***/ 5929:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/core/request/request-util.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequestOption": () => (/* binding */ createRequestOption)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);

const createRequestOption = (req) => {
    let options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach((val) => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};


/***/ })

}]);
//# sourceMappingURL=common.js.map