webpackHotUpdate_N_E("pages/login",{

/***/ "./src/components/UserAuthDialog.js":
/*!******************************************!*\
  !*** ./src/components/UserAuthDialog.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormDialog; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/authSteps */ "./src/utils/authSteps.js");
/* harmony import */ var _styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/AuthDialogSyles */ "./src/styles/AuthDialogSyles.js");



var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\UserAuthDialog.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function FormDialog(_ref) {
  _s();

  var open = _ref.open,
      handleDialogClose = _ref.handleDialogClose,
      styles = _ref.styles;

  var _useStyles = Object(_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"])(),
      content = _useStyles.content,
      typos = _useStyles.typos,
      currentChar = _useStyles.currentChar,
      charsToBeTyped = _useStyles.charsToBeTyped;

  var message = _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__["authSteps"].message,
      route = _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__["authSteps"].route,
      userId = _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__["authSteps"].userId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(userId),
      userID = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      checkInput = _useState2[0],
      setCheckInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      auth = _useState3[0],
      setAuth = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      authSession = _useState4[0],
      setAuthSession = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      increment = _useState5[0],
      setIncrement = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      input = _useState6[0],
      setInput = _useState6[1];

  var tDNA = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleIncrementUp = function handleIncrementUp() {
    tDNA.current.start();
    setCheckInput(false);
    setInput('');
    setAuthSession(authSession + 1);
    increment === message.length - 1 ? setIncrement(0) : setIncrement(increment + 1);
  };

  var backAndReset = function backAndReset() {
    tDNA.current.reset();
    setCheckInput(false);
    setIncrement(0);
    handleDialogClose();
  };

  var checkPattern = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var typingPattern, patternQuality, res, _yield$res$json, _message;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tDNA.current.stop();
              setCheckInput(true);
              _context.next = 4;
              return tDNA.current.getTypingPattern({
                type: 0,
                text: input
              });

            case 4:
              typingPattern = _context.sent;
              patternQuality = tDNA.current.getQuality(typingPattern);

              if (!(patternQuality > 0.3)) {
                _context.next = 18;
                break;
              }

              _context.next = 9;
              return fetch(route.signUp, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  typingPattern: typingPattern,
                  patternQuality: patternQuality,
                  authSession: authSession,
                  userID: userID,
                  input: input
                })
              });

            case 9:
              res = _context.sent;
              _context.next = 12;
              return res.json();

            case 12:
              _yield$res$json = _context.sent;
              _message = _yield$res$json.message;
              console.log(_message);

              if (res.status === 200) {
                handleIncrementUp();

                if (_message.result === 1 && _message.enrollment === 1) {
                  setAuth(true);
                }
              } else {
                alert("An error occurred on our end. Please refresh and try again.");
                handleIncrementUp();
              }

              _context.next = 19;
              break;

            case 18:
              handleIncrementUp();

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkPattern() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!tDNA.current) {
      tDNA.current = new TypingDNA();
    }
  }, [tDNA]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    input.length === message[increment].length && checkPattern();
  }, [input]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
    open: open,
    onClose: backAndReset,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("img", {
    width: "200",
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 53
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], {
    className: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, !auth && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type! Please note, it may take up to 5 attempts.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    component: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, !auth ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 33
    }
  }, "Please type ", __jsx("span", {
    className: typos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 49
    }
  }, "(typos accepted)"), ":", " ", message[increment].substring(0, input.length), __jsx("span", {
    className: currentChar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 37
    }
  }, message[increment].charAt(input.length)), __jsx("span", {
    className: charsToBeTyped,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }
  }, message[increment].substring(input.length + 1, message[increment].length))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    autoFocus: true,
    autoComplete: "off",
    margin: "dense",
    id: "name",
    label: "Type Message Here",
    color: "secondary",
    value: input,
    inputProps: {
      spellCheck: 'false'
    },
    disabled: checkInput,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  })) : __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, "Welcome ", userID))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: backAndReset,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, "Go Back"))));
}

_s(FormDialog, "byB7yWxEOriTyfuRL2zX0lgch9g=", false, function () {
  return [_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"]];
});

_c = FormDialog;

var _c;

$RefreshReg$(_c, "FormDialog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsInN0eWxlcyIsInVzZVN0eWxlcyIsImNvbnRlbnQiLCJ0eXBvcyIsImN1cnJlbnRDaGFyIiwiY2hhcnNUb0JlVHlwZWQiLCJtZXNzYWdlIiwiYXV0aFN0ZXBzIiwicm91dGUiLCJ1c2VySWQiLCJ1c2VTdGF0ZSIsInVzZXJJRCIsImNoZWNrSW5wdXQiLCJzZXRDaGVja0lucHV0IiwiYXV0aCIsInNldEF1dGgiLCJhdXRoU2Vzc2lvbiIsInNldEF1dGhTZXNzaW9uIiwiaW5jcmVtZW50Iiwic2V0SW5jcmVtZW50IiwiaW5wdXQiLCJzZXRJbnB1dCIsInRETkEiLCJ1c2VSZWYiLCJoYW5kbGVJbmNyZW1lbnRVcCIsImN1cnJlbnQiLCJzdGFydCIsImxlbmd0aCIsImJhY2tBbmRSZXNldCIsInJlc2V0IiwiY2hlY2tQYXR0ZXJuIiwic3RvcCIsImdldFR5cGluZ1BhdHRlcm4iLCJ0eXBlIiwidGV4dCIsInR5cGluZ1BhdHRlcm4iLCJwYXR0ZXJuUXVhbGl0eSIsImdldFF1YWxpdHkiLCJmZXRjaCIsInNpZ25VcCIsImhlYWRlcnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwicmVzdWx0IiwiZW5yb2xsbWVudCIsImFsZXJ0IiwidXNlRWZmZWN0IiwiVHlwaW5nRE5BIiwic3Vic3RyaW5nIiwiY2hhckF0Iiwic3BlbGxDaGVjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFHZSxTQUFTQSxVQUFULE9BQXlEO0FBQUE7O0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1B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L0h1Qi9CLFU7VUFDb0NJLGlFOzs7S0FEcENKLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZjFlZDFhYjMwYjJmODBlZjBkNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBEaWFsb2csXHJcbiAgICBEaWFsb2dBY3Rpb25zLFxyXG4gICAgRGlhbG9nQ29udGVudCxcclxuICAgIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgQ2lyY3VsYXJQcm9ncmVzc1xyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgYXV0aFN0ZXBzIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFN0ZXBzJztcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL0F1dGhEaWFsb2dTeWxlcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybURpYWxvZyh7IG9wZW4sIGhhbmRsZURpYWxvZ0Nsb3NlLCBzdHlsZXMgfSkge1xyXG4gICAgY29uc3QgeyBjb250ZW50LCB0eXBvcywgY3VycmVudENoYXIsIGNoYXJzVG9CZVR5cGVkIH0gPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgbWVzc2FnZSwgcm91dGUsIHVzZXJJZCB9ID0gYXV0aFN0ZXBzO1xyXG4gICAgY29uc3QgW3VzZXJJRF0gPSB1c2VTdGF0ZSh1c2VySWQpO1xyXG5cclxuICAgIGNvbnN0IFtjaGVja0lucHV0LCBzZXRDaGVja0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthdXRoU2Vzc2lvbiwgc2V0QXV0aFNlc3Npb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaW5jcmVtZW50LCBzZXRJbmNyZW1lbnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IHRETkEgPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbmNyZW1lbnRVcCA9ICgpID0+IHtcclxuICAgICAgICB0RE5BLmN1cnJlbnQuc3RhcnQoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KGZhbHNlKTtcclxuICAgICAgICBzZXRJbnB1dCgnJyk7XHJcbiAgICAgICAgc2V0QXV0aFNlc3Npb24oYXV0aFNlc3Npb24gKyAxKVxyXG4gICAgICAgIGluY3JlbWVudCA9PT0gbWVzc2FnZS5sZW5ndGggLSAxID9cclxuICAgICAgICAgICAgc2V0SW5jcmVtZW50KDApIDpcclxuICAgICAgICAgICAgc2V0SW5jcmVtZW50KGluY3JlbWVudCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJhY2tBbmRSZXNldCA9ICgpID0+IHtcclxuICAgICAgICB0RE5BLmN1cnJlbnQucmVzZXQoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KGZhbHNlKTtcclxuICAgICAgICBzZXRJbmNyZW1lbnQoMCk7XHJcbiAgICAgICAgaGFuZGxlRGlhbG9nQ2xvc2UoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrUGF0dGVybiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0RE5BLmN1cnJlbnQuc3RvcCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdHlwaW5nUGF0dGVybiA9IGF3YWl0IHRETkEuY3VycmVudC5nZXRUeXBpbmdQYXR0ZXJuKHtcclxuICAgICAgICAgICAgdHlwZTogMCxcclxuICAgICAgICAgICAgdGV4dDogaW5wdXRcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwYXR0ZXJuUXVhbGl0eSA9IHRETkEuY3VycmVudC5nZXRRdWFsaXR5KHR5cGluZ1BhdHRlcm4pO1xyXG5cclxuICAgICAgICBpZiAocGF0dGVyblF1YWxpdHkgPiAwLjMpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocm91dGUuc2lnblVwLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBpbmdQYXR0ZXJuLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5RdWFsaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhTZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSlcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFVwKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yZXN1bHQgPT09IDEgJiYgbWVzc2FnZS5lbnJvbGxtZW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXV0aCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgb24gb3VyIGVuZC4gUGxlYXNlIHJlZnJlc2ggYW5kIHRyeSBhZ2Fpbi5cIilcclxuICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFVwKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFVwKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRETkEuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0RE5BLmN1cnJlbnQgPSBuZXcgVHlwaW5nRE5BKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RETkFdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5wdXQubGVuZ3RoID09PSBtZXNzYWdlW2luY3JlbWVudF0ubGVuZ3RoICYmIGNoZWNrUGF0dGVybigpXHJcbiAgICB9LCBbaW5wdXRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXtiYWNrQW5kUmVzZXR9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJmb3JtLWRpYWxvZy10aXRsZVwiPjxpbWcgd2lkdGg9XCIyMDBcIiBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vQXJjaGl2YWxkaS80d2hlZWx6L2Jsb2IvbWFzdGVyL2NsaWVudC9zcmMvaW1hZ2VzL1Nob3BwZWRUeXBpbmdETkEucG5nP3Jhdz10cnVlXCIgLz48L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPXtjb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshYXV0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UbyBlbnN1cmUgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VjdXJpdHksIHdlIGFyZSB1c2luZyBhIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHRlc3Qgd2hvIHlvdSBhcmUgYnkgdGhlIHdheSB5b3UgdHlwZSEgUGxlYXNlIG5vdGUsIGl0IG1heSB0YWtlIHVwIHRvIDUgYXR0ZW1wdHMuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiYm9keTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFhdXRoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHR5cGUgPHNwYW4gY2xhc3NOYW1lPXt0eXBvc30+KHR5cG9zIGFjY2VwdGVkKTwvc3Bhbj46e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZVtpbmNyZW1lbnRdLnN1YnN0cmluZygwLCBpbnB1dC5sZW5ndGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N1cnJlbnRDaGFyfT57bWVzc2FnZVtpbmNyZW1lbnRdLmNoYXJBdChpbnB1dC5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjaGFyc1RvQmVUeXBlZH0+e21lc3NhZ2VbaW5jcmVtZW50XS5zdWJzdHJpbmcoaW5wdXQubGVuZ3RoICsgMSwgbWVzc2FnZVtpbmNyZW1lbnRdLmxlbmd0aCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBNZXNzYWdlIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBzcGVsbENoZWNrOiAnZmFsc2UnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+V2VsY29tZSB7dXNlcklEfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YmFja0FuZFJlc2V0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=