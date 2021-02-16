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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, false ? undefined : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXV0aENoZWNrLmpzIl0sIm5hbWVzIjpbIkF1dGhDaGVjayIsImNoaWxkcmVuIiwic2Vzc2lvbiIsImF1dGhTdGVwcyIsInJvdXRlIiwidXNlU3R5bGVzIiwicGFnZSIsInVzZVN0YXRlIiwidXNlcklkIiwic2V0VXNlcklkIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwicmVzIiwianNvbiIsInVzZXJfaWQiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwiZmV0Y2hVc2VyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQUEsTUFDcENDLE9BRG9DLEdBQ3hCQywwREFBUyxDQUFDQyxLQURjLENBQ3BDRixPQURvQzs7QUFBQSxtQkFFM0JHLHlFQUFTLEVBRmtCO0FBQUEsTUFFcENDLElBRm9DLGNBRXBDQSxJQUZvQzs7QUFBQSxrQkFHaEJDLHNEQUFRLENBQUMsSUFBRCxDQUhRO0FBQUEsTUFHckNDLE1BSHFDO0FBQUEsTUFHN0JDLFNBSDZCOztBQUs1Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ1o7QUFBQSw0TUFBQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDcUJDLEtBQUssQ0FBQ1QsT0FBRCxFQUFVO0FBQzdCVSx5QkFBTyxFQUFFO0FBQ0wsOEJBQVUsa0JBREw7QUFFTCxvQ0FBZ0I7QUFGWCxtQkFEb0I7QUFLN0JDLHdCQUFNLEVBQUU7QUFMcUIsaUJBQVYsQ0FEMUI7O0FBQUE7QUFDU0MsbUJBRFQ7QUFBQTtBQUFBLHVCQVE2QkEsR0FBRyxDQUFDQyxJQUFKLEVBUjdCOztBQUFBO0FBQUE7QUFRV0MsdUJBUlgsbUJBUVdBLE9BUlg7O0FBVUcsb0JBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1ZDLDRCQUFVLENBQUMsWUFBTTtBQUNiQywwQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixHQUF4QjtBQUNILG1CQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0gsaUJBSkQsTUFJTztBQUNIWCwyQkFBUyxDQUFDTyxPQUFELENBQVQ7QUFDSDs7QUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRDs7QUFBQSxlQUFnQkssYUFBaEI7QUFBQTtBQUFBOztBQUFBLGFBQWdCQSxhQUFoQjtBQUFBO0FBa0JILEdBbkJRLEVBbUJOLEVBbkJNLENBQVQ7QUFxQkEsU0FDSSxtRUFDSyxRQUNHLFNBREgsR0FLTyxtRUFDS3BCLFFBREwsQ0FOWixDQURKO0FBYUg7O0dBdkN1QkQsUztVQUVISyxpRTs7O0tBRkdMLFM7QUF1Q3ZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5lZjUzMjdiOTNmN2NhNjRlOGQ5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGF1dGhTdGVwcyB9IGZyb20gJy4uL3V0aWxzL2F1dGhTdGVwcyc7XHJcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9BdXRoQ2hlY2tTdHlsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aENoZWNrKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgeyBzZXNzaW9uIH0gPSBhdXRoU3RlcHMucm91dGU7XHJcbiAgICBjb25zdCB7IHBhZ2UgfSA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgKGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckRhdGEoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHNlc3Npb24sIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlcl9pZCB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdXNlcl9pZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcklkKHVzZXJfaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2ZhbHNlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==