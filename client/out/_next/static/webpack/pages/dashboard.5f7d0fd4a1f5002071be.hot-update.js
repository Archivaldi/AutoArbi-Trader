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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
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
  return __jsx(_components_AuthCheck__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_components_MiniDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    allDocsComplete: Object(_utils_checkForAllDocComplete__WEBPACK_IMPORTED_MODULE_9__["checkForAllDocumentComplete"])(buyer, seller),
    classes: classes,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_UserInformationDialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx(_components_UserProgressCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: 2,
    data: seller,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })), __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_UserProgressCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: 1,
    data: buyer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }))));
}

_s(Dashboard, "XE+fA3pDltzipDH7zfypewtJTZ8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJjbGFzc2VzIiwiZGFzaGJvYXJkU3R5bGVzIiwiYnV5ZXIiLCJkdW1teURhdGEiLCJzZWxsZXIiLCJ1c2VySW5mbyIsImFwcFJvdXRlIiwidXNlU3RhdGUiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJpbmZvRGlhbG9nT3BlbiIsInNldEluZm9EaWFsb2dPcGVuIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJtZXRob2QiLCJyZXMiLCJqc29uIiwibWVzc2FnZSIsImdldFVzZXJJbmZvIiwiY2hlY2tGb3JBbGxEb2N1bWVudENvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFDbEMsTUFBTUMsT0FBTyxHQUFHQyxrRkFBZSxFQUEvQjtBQURrQyxNQUUxQkMsS0FGMEIsR0FFUkMsMERBRlEsQ0FFMUJELEtBRjBCO0FBQUEsTUFFbkJFLE1BRm1CLEdBRVJELDBEQUZRLENBRW5CQyxNQUZtQjtBQUFBLE1BRzFCQyxRQUgwQixHQUdiQyx5REFIYSxDQUcxQkQsUUFIMEI7O0FBQUEsa0JBSU5FLHNEQUFRLENBQUMsRUFBRCxDQUpGO0FBQUEsTUFJM0JDLE1BSjJCO0FBQUEsTUFJbkJDLFNBSm1COztBQUFBLG1CQUtVRixzREFBUSxDQUFDLEtBQUQsQ0FMbEI7QUFBQSxNQUszQkcsY0FMMkI7QUFBQSxNQUtYQyxpQkFMVzs7QUFPbENDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQUEsME1BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDbUJDLEtBQUssQ0FBQ1IsUUFBRCxFQUFXO0FBQ2hDUyx3QkFBTSxFQUFFO0FBRHdCLGlCQUFYLENBRHhCOztBQUFBO0FBQ09DLG1CQURQO0FBQUE7QUFBQSx1QkFJdUJBLEdBQUcsQ0FBQ0MsSUFBSixFQUp2Qjs7QUFBQTtBQUlPQyx1QkFKUDtBQUtDUix5QkFBUyxDQUFDUSxPQUFELENBQVQ7O0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRDs7QUFBQSxlQUFnQkMsV0FBaEI7QUFBQTtBQUFBOztBQUFBLGFBQWdCQSxXQUFoQjtBQUFBO0FBT0QsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLFNBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUNFLG1CQUFlLEVBQUVDLGlHQUEyQixDQUFDakIsS0FBRCxFQUFRRSxNQUFSLENBRDlDO0FBRUUsV0FBTyxFQUFFSixPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxtRUFDRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0VBQUQ7QUFDRSxPQUFHLEVBQUUsQ0FEUDtBQUVFLFFBQUksRUFBRUksTUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FKRixFQVdFLG1FQUNFLE1BQUMsb0VBQUQ7QUFDRSxPQUFHLEVBQUUsQ0FEUDtBQUVFLFFBQUksRUFBRUYsS0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FYRixDQURGLENBREY7QUFzQkQ7O0dBdkN1QkgsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuNWY3ZDBmZDRhMWY1MDAyMDcxYmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0aENoZWNrIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aENoZWNrJztcclxuaW1wb3J0IE1pbmlEcmF3ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NaW5pRHJhd2VyJztcclxuaW1wb3J0IFVzZXJQcm9ncmVzc0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyUHJvZ3Jlc3NDYXJkJztcclxuaW1wb3J0IFVzZXJJbmZvcm1hdGlvbkRpYWxvZyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvcm1hdGlvbkRpYWxvZyc7XHJcbmltcG9ydCB7IGR1bW15RGF0YSB9IGZyb20gJy4uL3V0aWxzL2R1bW15RGF0YSc7XHJcbmltcG9ydCB7IGRhc2hib2FyZFN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxEcmF3ZXJTdHlsZXMnXHJcbmltcG9ydCB7IGNoZWNrRm9yQWxsRG9jdW1lbnRDb21wbGV0ZSB9IGZyb20gJy4uL3V0aWxzL2NoZWNrRm9yQWxsRG9jQ29tcGxldGUnO1xyXG5pbXBvcnQgeyBhcHBSb3V0ZSB9IGZyb20gJy4uL3V0aWxzL2FwcFJvdXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gZGFzaGJvYXJkU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBidXllciwgc2VsbGVyIH0gPSBkdW1teURhdGE7XHJcbiAgY29uc3QgeyB1c2VySW5mbyB9ID0gYXBwUm91dGU7XHJcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IFtpbmZvRGlhbG9nT3Blbiwgc2V0SW5mb0RpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1c2VySW5mbywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXRWYWx1ZXMobWVzc2FnZSlcclxuICAgIH0pKClcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENoZWNrPlxyXG4gICAgICA8TWluaURyYXdlclxyXG4gICAgICAgIGFsbERvY3NDb21wbGV0ZT17Y2hlY2tGb3JBbGxEb2N1bWVudENvbXBsZXRlKGJ1eWVyLCBzZWxsZXIpfVxyXG4gICAgICAgIGNsYXNzZXM9e2NsYXNzZXN9XHJcbiAgICAgID5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPFVzZXJJbmZvcm1hdGlvbkRpYWxvZyAvPlxyXG4gICAgICAgICAgPFVzZXJQcm9ncmVzc0NhcmRcclxuICAgICAgICAgICAga2V5PXsyfVxyXG4gICAgICAgICAgICBkYXRhPXtzZWxsZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8VXNlclByb2dyZXNzQ2FyZFxyXG4gICAgICAgICAgICBrZXk9ezF9XHJcbiAgICAgICAgICAgIGRhdGE9e2J1eWVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9NaW5pRHJhd2VyPlxyXG4gICAgPC9BdXRoQ2hlY2s+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==