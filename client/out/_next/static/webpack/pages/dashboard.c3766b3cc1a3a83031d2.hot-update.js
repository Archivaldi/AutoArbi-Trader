webpackHotUpdate_N_E("pages/dashboard",{

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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    (function () {
      var _fetchUserData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, _yield$res$json, user_id;

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

                if (!user_id) {
                  setTimeout(function () {
                    window.location.replace('/');
                  }, 500);
                } else {
                  setUserId(user_id);
                }

              case 8:
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, flase ? __jsx("div", {
    className: page,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, children));
}

_s(AuthCheck, "C8wbnByIkWad73oiQJiAb1gaIhI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXV0aENoZWNrLmpzIl0sIm5hbWVzIjpbIkF1dGhDaGVjayIsImNoaWxkcmVuIiwic2Vzc2lvbiIsImF1dGhTdGVwcyIsInJvdXRlIiwidXNlU3R5bGVzIiwicGFnZSIsInVzZVN0YXRlIiwidXNlcklkIiwic2V0VXNlcklkIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwicmVzIiwianNvbiIsInVzZXJfaWQiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZmV0Y2hVc2VyRGF0YSIsImZsYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFBQSxNQUNwQ0MsT0FEb0MsR0FDeEJDLDBEQUFTLENBQUNDLEtBRGMsQ0FDcENGLE9BRG9DOztBQUFBLG1CQUUzQkcseUVBQVMsRUFGa0I7QUFBQSxNQUVwQ0MsSUFGb0MsY0FFcENBLElBRm9DOztBQUFBLGtCQUdoQkMsc0RBQVEsQ0FBQyxJQUFELENBSFE7QUFBQSxNQUdyQ0MsTUFIcUM7QUFBQSxNQUc3QkMsU0FINkI7O0FBSzVDQyx5REFBUyxDQUFDLFlBQU07QUFDWjtBQUFBLDRNQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNxQkMsS0FBSyxDQUFDVCxPQUFELEVBQVU7QUFDN0JVLHlCQUFPLEVBQUU7QUFDTCw4QkFBVSxrQkFETDtBQUVMLG9DQUFnQjtBQUZYLG1CQURvQjtBQUs3QkMsd0JBQU0sRUFBRTtBQUxxQixpQkFBVixDQUQxQjs7QUFBQTtBQUNTQyxtQkFEVDtBQUFBO0FBQUEsdUJBUTZCQSxHQUFHLENBQUNDLElBQUosRUFSN0I7O0FBQUE7QUFBQTtBQVFXQyx1QkFSWCxtQkFRV0EsT0FSWDs7QUFVRyxvQkFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDVkMsNEJBQVUsQ0FBQyxZQUFNO0FBQ2JDLDBCQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLEdBQXhCO0FBQ0gsbUJBRlMsRUFFUCxHQUZPLENBQVY7QUFHSCxpQkFKRCxNQUlPO0FBQ0hYLDJCQUFTLENBQUNPLE9BQUQsQ0FBVDtBQUNIOztBQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFEOztBQUFBLGVBQWdCSyxhQUFoQjtBQUFBO0FBQUE7O0FBQUEsYUFBZ0JBLGFBQWhCO0FBQUE7QUFrQkgsR0FuQlEsRUFtQk4sRUFuQk0sQ0FBVDtBQXFCQSxTQUNJLG1FQUNLQyxLQUFLLEdBQ0Y7QUFBSyxhQUFTLEVBQUVoQixJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrRUFBRDtBQUFrQixTQUFLLEVBQUMsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREUsR0FLRSxtRUFDS0wsUUFETCxDQU5aLENBREo7QUFhSDs7R0F2Q3VCRCxTO1VBRUhLLGlFOzs7S0FGR0wsUztBQXVDdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmMzNzY2YjNjYzFhM2E4MzAzMWQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgYXV0aFN0ZXBzIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFN0ZXBzJztcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL0F1dGhDaGVja1N0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoQ2hlY2soeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCB7IHNlc3Npb24gfSA9IGF1dGhTdGVwcy5yb3V0ZTtcclxuICAgIGNvbnN0IHsgcGFnZSB9ID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyRGF0YSgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goc2Vzc2lvbiwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgeyB1c2VyX2lkIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF1c2VyX2lkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLycpXHJcbiAgICAgICAgICAgICAgICB9LCA1MDApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VySWQodXNlcl9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Zmxhc2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTsiXSwic291cmNlUm9vdCI6IiJ9