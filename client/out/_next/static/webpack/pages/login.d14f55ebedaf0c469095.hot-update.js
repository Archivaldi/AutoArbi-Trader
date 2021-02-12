webpackHotUpdate_N_E("pages/login",{

/***/ "./src/utils/authSteps.js":
/*!********************************!*\
  !*** ./src/utils/authSteps.js ***!
  \********************************/
/*! exports provided: authSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authSteps", function() { return authSteps; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");

var authSteps = {
  message: ["It's the single best piece of advice. constantly think about how you could be doing things better and questioning yourself.", "There is no shame in not knowing. The problem arises when irrational thought and attendant behavior fill the vacuum left by ignorance.", "One of the basic rules of the universe is that nothing is perfect. Perfection simply doesn't exist.....Without imperfection, neither you nor I would exist."],
  route: {
    signUp: '/api/typing-dna/signup',
    verify: '/api/typing-dna/verify'
  },
  userId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2F1dGhTdGVwcy5qcyJdLCJuYW1lcyI6WyJhdXRoU3RlcHMiLCJtZXNzYWdlIiwicm91dGUiLCJzaWduVXAiLCJ2ZXJpZnkiLCJ1c2VySWQiLCJ1dWlkdjQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFNBQVMsR0FBRztBQUNyQkMsU0FBTyxFQUFFLENBQ0wsNkhBREssRUFFTCx3SUFGSyxFQUdMLDZKQUhLLENBRFk7QUFNckJDLE9BQUssRUFBRTtBQUNIQyxVQUFNLEVBQUUsd0JBREw7QUFFSEMsVUFBTSxFQUFFO0FBRkwsR0FOYztBQVVyQkMsUUFBTSxFQUFFQywrQ0FBTTtBQVZPLENBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmQxNGY1NWViZWRhZjBjNDY5MDk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoU3RlcHMgPSB7XHJcbiAgICBtZXNzYWdlOiBbXHJcbiAgICAgICAgXCJJdCdzIHRoZSBzaW5nbGUgYmVzdCBwaWVjZSBvZiBhZHZpY2UuIGNvbnN0YW50bHkgdGhpbmsgYWJvdXQgaG93IHlvdSBjb3VsZCBiZSBkb2luZyB0aGluZ3MgYmV0dGVyIGFuZCBxdWVzdGlvbmluZyB5b3Vyc2VsZi5cIixcclxuICAgICAgICBcIlRoZXJlIGlzIG5vIHNoYW1lIGluIG5vdCBrbm93aW5nLiBUaGUgcHJvYmxlbSBhcmlzZXMgd2hlbiBpcnJhdGlvbmFsIHRob3VnaHQgYW5kIGF0dGVuZGFudCBiZWhhdmlvciBmaWxsIHRoZSB2YWN1dW0gbGVmdCBieSBpZ25vcmFuY2UuXCIsXHJcbiAgICAgICAgXCJPbmUgb2YgdGhlIGJhc2ljIHJ1bGVzIG9mIHRoZSB1bml2ZXJzZSBpcyB0aGF0IG5vdGhpbmcgaXMgcGVyZmVjdC4gUGVyZmVjdGlvbiBzaW1wbHkgZG9lc24ndCBleGlzdC4uLi4uV2l0aG91dCBpbXBlcmZlY3Rpb24sIG5laXRoZXIgeW91IG5vciBJIHdvdWxkIGV4aXN0LlwiLFxyXG4gICAgXSxcclxuICAgIHJvdXRlOiB7XHJcbiAgICAgICAgc2lnblVwOiAnL2FwaS90eXBpbmctZG5hL3NpZ251cCcsXHJcbiAgICAgICAgdmVyaWZ5OiAnL2FwaS90eXBpbmctZG5hL3ZlcmlmeSdcclxuICAgIH0sXHJcbiAgICB1c2VySWQ6IHV1aWR2NCgpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9