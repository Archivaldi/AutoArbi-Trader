webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./src/pages/dashboard.js":
/*!********************************!*\
  !*** ./src/pages/dashboard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AuthCheck */ "./src/components/AuthCheck.js");
/* harmony import */ var _components_MiniDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MiniDrawer */ "./src/components/MiniDrawer.js");
/* harmony import */ var _components_UserProgressCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserProgressCard */ "./src/components/UserProgressCard.js");
/* harmony import */ var _components_UserInformationDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInformationDialog */ "./src/components/UserInformationDialog.js");
/* harmony import */ var _utils_dummyData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dummyData */ "./src/utils/dummyData.js");
/* harmony import */ var _styles_GlobalDrawerStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/GlobalDrawerStyles */ "./src/styles/GlobalDrawerStyles.js");
/* harmony import */ var _utils_checkForAllDocComplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/checkForAllDocComplete */ "./src/utils/checkForAllDocComplete.js");
/* harmony import */ var _utils_appRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/appRoute */ "./src/utils/appRoute.js");



var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\pages\\dashboard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









function Dashboard() {
  _s();

  var classes = Object(_styles_GlobalDrawerStyles__WEBPACK_IMPORTED_MODULE_8__["dashboardStyles"])();
  var buyer = _utils_dummyData__WEBPACK_IMPORTED_MODULE_7__["dummyData"].buyer,
      seller = _utils_dummyData__WEBPACK_IMPORTED_MODULE_7__["dummyData"].seller;
  var userInfo = _utils_appRoute__WEBPACK_IMPORTED_MODULE_10__["appRoute"].userInfo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      values = _useState[0],
      setValues = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      infoDialogOpen = _useState2[0],
      setInfoDialogOpen = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    (function () {
      var _getUserInfo = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, message;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(userInfo, {
                  method: 'POST'
                });

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                message = _context.sent;
                setValues(message);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getUserInfo() {
        return _getUserInfo.apply(this, arguments);
      }

      return getUserInfo;
    })()();
  }, []);
  console.log(infoDialogOpen);
  return __jsx(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_components_MiniDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    allDocsComplete: Object(_utils_checkForAllDocComplete__WEBPACK_IMPORTED_MODULE_9__["checkForAllDocumentComplete"])(buyer, seller),
    classes: classes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_UserInformationDialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: infoDialogOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx(_components_UserProgressCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: 2,
    data: seller,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_UserProgressCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: 1,
    data: buyer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }))));
}

_s(Dashboard, "E7aBaScW/y0WN+00jb+8UL7AH4E=");

_c = Dashboard;

var _c;

$RefreshReg$(_c, "Dashboard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJjbGFzc2VzIiwiZGFzaGJvYXJkU3R5bGVzIiwiYnV5ZXIiLCJkdW1teURhdGEiLCJzZWxsZXIiLCJ1c2VySW5mbyIsImFwcFJvdXRlIiwidXNlU3RhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJpbmZvRGlhbG9nT3BlbiIsInNldEluZm9EaWFsb2dPcGVuIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJtZXRob2QiLCJyZXMiLCJqc29uIiwibWVzc2FnZSIsImdldFVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsImNoZWNrRm9yQWxsRG9jdW1lbnRDb21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQ2xDLE1BQU1DLE9BQU8sR0FBR0Msa0ZBQWUsRUFBL0I7QUFEa0MsTUFFMUJDLEtBRjBCLEdBRVJDLDBEQUZRLENBRTFCRCxLQUYwQjtBQUFBLE1BRW5CRSxNQUZtQixHQUVSRCwwREFGUSxDQUVuQkMsTUFGbUI7QUFBQSxNQUcxQkMsUUFIMEIsR0FHYkMseURBSGEsQ0FHMUJELFFBSDBCOztBQUFBLGtCQUlORSxzREFBUSxDQUFDLEVBQUQsQ0FKRjtBQUFBLE1BSTNCQyxNQUoyQjtBQUFBLE1BSW5CQyxTQUptQjs7QUFBQSxtQkFLVUYsc0RBQVEsQ0FBQyxJQUFELENBTGxCO0FBQUEsTUFLM0JHLGNBTDJCO0FBQUEsTUFLWEMsaUJBTFc7O0FBT2xDQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUFBLDBNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ21CQyxLQUFLLENBQUNSLFFBQUQsRUFBVztBQUNoQ1Msd0JBQU0sRUFBRTtBQUR3QixpQkFBWCxDQUR4Qjs7QUFBQTtBQUNPQyxtQkFEUDtBQUFBO0FBQUEsdUJBSXVCQSxHQUFHLENBQUNDLElBQUosRUFKdkI7O0FBQUE7QUFJT0MsdUJBSlA7QUFLQ1IseUJBQVMsQ0FBQ1EsT0FBRCxDQUFUOztBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQ7O0FBQUEsZUFBZ0JDLFdBQWhCO0FBQUE7QUFBQTs7QUFBQSxhQUFnQkEsV0FBaEI7QUFBQTtBQU9ELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlWLGNBQVo7QUFFQSxTQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFDRSxtQkFBZSxFQUFFVyxpR0FBMkIsQ0FBQ25CLEtBQUQsRUFBUUUsTUFBUixDQUQ5QztBQUVFLFdBQU8sRUFBRUosT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsbUVBQ0UsTUFBQyx5RUFBRDtBQUNFLFFBQUksRUFBRVUsY0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFJRSxNQUFDLG9FQUFEO0FBQ0UsT0FBRyxFQUFFLENBRFA7QUFFRSxRQUFJLEVBQUVOLE1BRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBSkYsRUFhRSxtRUFDRSxNQUFDLG9FQUFEO0FBQ0UsT0FBRyxFQUFFLENBRFA7QUFFRSxRQUFJLEVBQUVGLEtBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBYkYsQ0FERixDQURGO0FBd0JEOztHQTNDdUJILFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLjA4YjM5YTExNGJmNTQzYjQzMDliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF1dGhDaGVjayBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhDaGVjayc7XHJcbmltcG9ydCBNaW5pRHJhd2VyIGZyb20gJy4uL2NvbXBvbmVudHMvTWluaURyYXdlcic7XHJcbmltcG9ydCBVc2VyUHJvZ3Jlc3NDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb2dyZXNzQ2FyZCc7XHJcbmltcG9ydCBVc2VySW5mb3JtYXRpb25EaWFsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mb3JtYXRpb25EaWFsb2cnO1xyXG5pbXBvcnQgeyBkdW1teURhdGEgfSBmcm9tICcuLi91dGlscy9kdW1teURhdGEnO1xyXG5pbXBvcnQgeyBkYXNoYm9hcmRTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvR2xvYmFsRHJhd2VyU3R5bGVzJ1xyXG5pbXBvcnQgeyBjaGVja0ZvckFsbERvY3VtZW50Q29tcGxldGUgfSBmcm9tICcuLi91dGlscy9jaGVja0ZvckFsbERvY0NvbXBsZXRlJztcclxuaW1wb3J0IHsgYXBwUm91dGUgfSBmcm9tICcuLi91dGlscy9hcHBSb3V0ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IGRhc2hib2FyZFN0eWxlcygpO1xyXG4gIGNvbnN0IHsgYnV5ZXIsIHNlbGxlciB9ID0gZHVtbXlEYXRhO1xyXG4gIGNvbnN0IHsgdXNlckluZm8gfSA9IGFwcFJvdXRlO1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBbaW5mb0RpYWxvZ09wZW4sIHNldEluZm9EaWFsb2dPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1c2VySW5mbywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRWYWx1ZXMobWVzc2FnZSlcclxuICAgIH0pKClcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGluZm9EaWFsb2dPcGVuKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ2hlY2s+XHJcbiAgICAgIDxNaW5pRHJhd2VyXHJcbiAgICAgICAgYWxsRG9jc0NvbXBsZXRlPXtjaGVja0ZvckFsbERvY3VtZW50Q29tcGxldGUoYnV5ZXIsIHNlbGxlcil9XHJcbiAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cclxuICAgICAgPlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VXNlckluZm9ybWF0aW9uRGlhbG9nXHJcbiAgICAgICAgICAgIG9wZW49e2luZm9EaWFsb2dPcGVufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxVc2VyUHJvZ3Jlc3NDYXJkXHJcbiAgICAgICAgICAgIGtleT17Mn1cclxuICAgICAgICAgICAgZGF0YT17c2VsbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFVzZXJQcm9ncmVzc0NhcmRcclxuICAgICAgICAgICAga2V5PXsxfVxyXG4gICAgICAgICAgICBkYXRhPXtidXllcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvTWluaURyYXdlcj5cclxuICAgIDwvQXV0aENoZWNrPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=