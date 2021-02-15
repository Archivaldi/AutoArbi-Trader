webpackHotUpdate_N_E("pages/upload",{

/***/ "./src/components/AuthCheck.js":
/*!*************************************!*\
  !*** ./src/components/AuthCheck.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthCheck; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/authSteps */ "./src/utils/authSteps.js");
/* harmony import */ var _styles_AuthCheckStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/AuthCheckStyles */ "./src/styles/AuthCheckStyles.js");



var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\AuthCheck.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function AuthCheck(_ref) {
  _s();

  var children = _ref.children;
  var session = _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__["authSteps"].route.session;

  var _useStyles = Object(_styles_AuthCheckStyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"])(),
      page = _useStyles.page;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      userId = _useState[0],
      setUserId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      userRole = _useState2[0],
      setUserRole = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    (function () {
      var _fetchUserData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, _yield$res$json, user_id, role;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(session, {
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST"
                });

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                _yield$res$json = _context.sent;
                user_id = _yield$res$json.user_id;
                role = _yield$res$json.role;
                setUserRole(role);
                setUserId(user_id);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetchUserData() {
        return _fetchUserData.apply(this, arguments);
      }

      return fetchUserData;
    })()();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, !userId || !userRole ? __jsx("div", {
    className: page,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, children));
}

_s(AuthCheck, "gMVzJhdthSrsZmLcTMTSPUh+XcA=", false, function () {
  return [_styles_AuthCheckStyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"]];
});

_c = AuthCheck;
;

var _c;

$RefreshReg$(_c, "AuthCheck");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXV0aENoZWNrLmpzIl0sIm5hbWVzIjpbIkF1dGhDaGVjayIsImNoaWxkcmVuIiwic2Vzc2lvbiIsImF1dGhTdGVwcyIsInJvdXRlIiwidXNlU3R5bGVzIiwicGFnZSIsInVzZVN0YXRlIiwidXNlcklkIiwic2V0VXNlcklkIiwidXNlclJvbGUiLCJzZXRVc2VyUm9sZSIsInVzZUVmZmVjdCIsImZldGNoIiwiaGVhZGVycyIsIm1ldGhvZCIsInJlcyIsImpzb24iLCJ1c2VyX2lkIiwicm9sZSIsImZldGNoVXNlckRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQUFpQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUFBLE1BQ3BDQyxPQURvQyxHQUN4QkMsMERBQVMsQ0FBQ0MsS0FEYyxDQUNwQ0YsT0FEb0M7O0FBQUEsbUJBRTNCRyx5RUFBUyxFQUZrQjtBQUFBLE1BRXBDQyxJQUZvQyxjQUVwQ0EsSUFGb0M7O0FBQUEsa0JBR2hCQyxzREFBUSxDQUFDLElBQUQsQ0FIUTtBQUFBLE1BR3JDQyxNQUhxQztBQUFBLE1BRzdCQyxTQUg2Qjs7QUFBQSxtQkFJWkYsc0RBQVEsQ0FBQyxJQUFELENBSkk7QUFBQSxNQUlyQ0csUUFKcUM7QUFBQSxNQUkzQkMsV0FKMkI7O0FBTTVDQyx5REFBUyxDQUFDLFlBQU07QUFDWjtBQUFBLDRNQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNxQkMsS0FBSyxDQUFDWCxPQUFELEVBQVU7QUFDN0JZLHlCQUFPLEVBQUU7QUFDTCw4QkFBVSxrQkFETDtBQUVMLG9DQUFnQjtBQUZYLG1CQURvQjtBQUs3QkMsd0JBQU0sRUFBRTtBQUxxQixpQkFBVixDQUQxQjs7QUFBQTtBQUNTQyxtQkFEVDtBQUFBO0FBQUEsdUJBUW1DQSxHQUFHLENBQUNDLElBQUosRUFSbkM7O0FBQUE7QUFBQTtBQVFXQyx1QkFSWCxtQkFRV0EsT0FSWDtBQVFvQkMsb0JBUnBCLG1CQVFvQkEsSUFScEI7QUFVR1IsMkJBQVcsQ0FBQ1EsSUFBRCxDQUFYO0FBQ0FWLHlCQUFTLENBQUNTLE9BQUQsQ0FBVDs7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFEOztBQUFBLGVBQWdCRSxhQUFoQjtBQUFBO0FBQUE7O0FBQUEsYUFBZ0JBLGFBQWhCO0FBQUE7QUFhSCxHQWRRLEVBY04sRUFkTSxDQUFUO0FBZ0JBLFNBQ0ksbUVBQ0ssQ0FBQ1osTUFBRCxJQUFXLENBQUNFLFFBQVosR0FDRztBQUFLLGFBQVMsRUFBRUosSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0VBQUQ7QUFBa0IsU0FBSyxFQUFDLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURILEdBS08sbUVBQ01MLFFBRE4sQ0FOWixDQURKO0FBYUg7O0dBbkN1QkQsUztVQUVISyxpRTs7O0tBRkdMLFM7QUFtQ3ZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VwbG9hZC4xZjdjZGExMzBlZDE4MTA2OTZjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGF1dGhTdGVwcyB9IGZyb20gJy4uL3V0aWxzL2F1dGhTdGVwcyc7XHJcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9BdXRoQ2hlY2tTdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aENoZWNrKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgeyBzZXNzaW9uIH0gPSBhdXRoU3RlcHMucm91dGU7XHJcbiAgICBjb25zdCB7IHBhZ2UgfSA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJSb2xlLCBzZXRVc2VyUm9sZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChhc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJEYXRhKCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChzZXNzaW9uLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCB7IHVzZXJfaWQsIHJvbGUgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRVc2VyUm9sZShyb2xlKTtcclxuICAgICAgICAgICAgc2V0VXNlcklkKHVzZXJfaWQpO1xyXG4gICAgICAgIH0pKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgeyF1c2VySWQgfHwgIXVzZXJSb2xlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=