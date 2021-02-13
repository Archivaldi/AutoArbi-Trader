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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_authSteps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/authSteps */ "./src/utils/authSteps.js");
/* harmony import */ var _styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/AuthDialogSyles */ "./src/styles/AuthDialogSyles.js");



var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\UserAuthDialog.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function FormDialog(_ref) {
  _s();

  var open = _ref.open,
      handleDialogClose = _ref.handleDialogClose;

  var _useStyles = Object(_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_6__["useStyles"])(),
      content = _useStyles.content,
      typos = _useStyles.typos,
      currentChar = _useStyles.currentChar,
      charsToBeTyped = _useStyles.charsToBeTyped,
      welcome = _useStyles.welcome;

  var message = _utils_authSteps__WEBPACK_IMPORTED_MODULE_5__["authSteps"].message,
      route = _utils_authSteps__WEBPACK_IMPORTED_MODULE_5__["authSteps"].route,
      userId = _utils_authSteps__WEBPACK_IMPORTED_MODULE_5__["authSteps"].userId;

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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var handleIncrementUp = function handleIncrementUp() {
    tDNA.current.start();
    setCheckInput(false);
    setInput('');
    setAuthSession(authSession + 1);
    increment === message.length - 1 ? setIncrement(0) : setIncrement(increment + 1);
    document.querySelector('#input').focus();
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
                _context.next = 17;
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

              if (res.status === 200) {
                handleIncrementUp();

                if (_message.result === 1 && _message.enrollment === 1) {
                  setAuth(true);
                  setTimeout(function () {
                    router.push('/');
                  }, 1000);
                }
              } else {
                alert("An error occurred on our end. Please refresh and try again.");
                handleIncrementUp();
              }

              _context.next = 18;
              break;

            case 17:
              handleIncrementUp();

            case 18:
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
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
    open: open,
    onClose: backAndReset,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx("img", {
    width: "200",
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 53
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContent"], {
    className: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type! ", !auth && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 157
    }
  }, "*Please note, it may take up to 5 attempts."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    component: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, !auth ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, "Please type ", __jsx("span", {
    className: typos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 49
    }
  }, "(typos accepted)"), ":", " ", message[increment].substring(0, input.length), __jsx("span", {
    className: currentChar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, message[increment].charAt(input.length)), __jsx("span", {
    className: charsToBeTyped,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  }, message[increment].substring(input.length + 1, message[increment].length))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    autoFocus: true,
    inputProps: {
      spellCheck: 'false'
    },
    autoComplete: "off",
    margin: "dense",
    id: "input",
    label: "Type Phrase Here",
    color: "secondary",
    value: input,
    disabled: checkInput,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 33
    }
  })) : __jsx("h3", {
    className: welcome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }, "Welcome ", userID))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: backAndReset,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, "Go Back"))));
}

_s(FormDialog, "0IxisCqopI3X8DGno3h4sueNssw=", false, function () {
  return [_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_6__["useStyles"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsInVzZVN0eWxlcyIsImNvbnRlbnQiLCJ0eXBvcyIsImN1cnJlbnRDaGFyIiwiY2hhcnNUb0JlVHlwZWQiLCJ3ZWxjb21lIiwibWVzc2FnZSIsImF1dGhTdGVwcyIsInJvdXRlIiwidXNlcklkIiwidXNlU3RhdGUiLCJ1c2VySUQiLCJjaGVja0lucHV0Iiwic2V0Q2hlY2tJbnB1dCIsImF1dGgiLCJzZXRBdXRoIiwiYXV0aFNlc3Npb24iLCJzZXRBdXRoU2Vzc2lvbiIsImluY3JlbWVudCIsInNldEluY3JlbWVudCIsImlucHV0Iiwic2V0SW5wdXQiLCJ0RE5BIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlSW5jcmVtZW50VXAiLCJjdXJyZW50Iiwic3RhcnQiLCJsZW5ndGgiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsImJhY2tBbmRSZXNldCIsInJlc2V0IiwiY2hlY2tQYXR0ZXJuIiwic3RvcCIsImdldFR5cGluZ1BhdHRlcm4iLCJ0eXBlIiwidGV4dCIsInR5cGluZ1BhdHRlcm4iLCJwYXR0ZXJuUXVhbGl0eSIsImdldFF1YWxpdHkiLCJmZXRjaCIsInNpZ25VcCIsImhlYWRlcnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJyZXN1bHQiLCJlbnJvbGxtZW50Iiwic2V0VGltZW91dCIsInB1c2giLCJhbGVydCIsInVzZUVmZmVjdCIsIlR5cGluZ0ROQSIsInN1YnN0cmluZyIsImNoYXJBdCIsInNwZWxsQ2hlY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFD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Q0FESCxHQXVCTztBQUFJLGFBQVMsRUFBRTVELE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUNNLE1BQWpDLENBeEJaLENBSkosQ0FGSixFQWtDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFFc0IsWUFBakI7QUFBK0IsU0FBSyxFQUFDLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQWxDSixDQURKLENBREo7QUE0Q0g7O0dBckl1QnBDLFU7VUFPaEJHLGlFLEVBVVd5QixxRDs7O0tBakJLNUIsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi42MzkzM2FkMDM4OTI5NTE1MDFhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBEaWFsb2csXHJcbiAgICBEaWFsb2dBY3Rpb25zLFxyXG4gICAgRGlhbG9nQ29udGVudCxcclxuICAgIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBUeXBvZ3JhcGh5XHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBhdXRoU3RlcHMgfSBmcm9tICcuLi91dGlscy9hdXRoU3RlcHMnO1xyXG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvQXV0aERpYWxvZ1N5bGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1EaWFsb2coeyBvcGVuLCBoYW5kbGVEaWFsb2dDbG9zZSB9KSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgICB0eXBvcyxcclxuICAgICAgICBjdXJyZW50Q2hhcixcclxuICAgICAgICBjaGFyc1RvQmVUeXBlZCxcclxuICAgICAgICB3ZWxjb21lXHJcbiAgICB9ID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCB7IG1lc3NhZ2UsIHJvdXRlLCB1c2VySWQgfSA9IGF1dGhTdGVwcztcclxuICAgIGNvbnN0IFt1c2VySURdID0gdXNlU3RhdGUodXNlcklkKTtcclxuXHJcbiAgICBjb25zdCBbY2hlY2tJbnB1dCwgc2V0Q2hlY2tJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYXV0aFNlc3Npb24sIHNldEF1dGhTZXNzaW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2luY3JlbWVudCwgc2V0SW5jcmVtZW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB0RE5BID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbmNyZW1lbnRVcCA9ICgpID0+IHtcclxuICAgICAgICB0RE5BLmN1cnJlbnQuc3RhcnQoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KGZhbHNlKTtcclxuICAgICAgICBzZXRJbnB1dCgnJyk7XHJcbiAgICAgICAgc2V0QXV0aFNlc3Npb24oYXV0aFNlc3Npb24gKyAxKVxyXG4gICAgICAgIGluY3JlbWVudCA9PT0gbWVzc2FnZS5sZW5ndGggLSAxID9cclxuICAgICAgICAgICAgc2V0SW5jcmVtZW50KDApIDpcclxuICAgICAgICAgICAgc2V0SW5jcmVtZW50KGluY3JlbWVudCArIDEpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dCcpLmZvY3VzKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiYWNrQW5kUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnJlc2V0KCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5jcmVtZW50KDApO1xyXG4gICAgICAgIGhhbmRsZURpYWxvZ0Nsb3NlKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1BhdHRlcm4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnN0b3AoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHR5cGluZ1BhdHRlcm4gPSBhd2FpdCB0RE5BLmN1cnJlbnQuZ2V0VHlwaW5nUGF0dGVybih7XHJcbiAgICAgICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgICAgIHRleHQ6IGlucHV0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcGF0dGVyblF1YWxpdHkgPSB0RE5BLmN1cnJlbnQuZ2V0UXVhbGl0eSh0eXBpbmdQYXR0ZXJuKTtcclxuICAgICAgICBpZiAocGF0dGVyblF1YWxpdHkgPiAwLjMpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocm91dGUuc2lnblVwLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBpbmdQYXR0ZXJuLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5RdWFsaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhTZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgeyBtZXNzYWdlIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnJlc3VsdCA9PT0gMSAmJiBtZXNzYWdlLmVucm9sbG1lbnQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdXRoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIG9uIG91ciBlbmQuIFBsZWFzZSByZWZyZXNoIGFuZCB0cnkgYWdhaW4uXCIpXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVJbmNyZW1lbnRVcCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kbGVJbmNyZW1lbnRVcCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0RE5BLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdEROQS5jdXJyZW50ID0gbmV3IFR5cGluZ0ROQSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0RE5BXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlucHV0Lmxlbmd0aCA9PT0gbWVzc2FnZVtpbmNyZW1lbnRdLmxlbmd0aCAmJiBjaGVja1BhdHRlcm4oKVxyXG4gICAgfSwgW2lucHV0XSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17b3Blbn0gb25DbG9zZT17YmFja0FuZFJlc2V0fSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiZm9ybS1kaWFsb2ctdGl0bGVcIj48aW1nIHdpZHRoPVwiMjAwXCIgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2hpdmFsZGkvNHdoZWVsei9ibG9iL21hc3Rlci9jbGllbnQvc3JjL2ltYWdlcy9TaG9wcGVkVHlwaW5nRE5BLnBuZz9yYXc9dHJ1ZVwiIC8+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17Y29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UbyBlbnN1cmUgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VjdXJpdHksIHdlIGFyZSB1c2luZyBhIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHRlc3Qgd2hvIHlvdSBhcmUgYnkgdGhlIHdheSB5b3UgdHlwZSEgeyFhdXRoICYmICg8c3Bhbj4qUGxlYXNlIG5vdGUsIGl0IG1heSB0YWtlIHVwIHRvIDUgYXR0ZW1wdHMuPC9zcGFuPil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiYm9keTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFhdXRoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHR5cGUgPHNwYW4gY2xhc3NOYW1lPXt0eXBvc30+KHR5cG9zIGFjY2VwdGVkKTwvc3Bhbj46e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZVtpbmNyZW1lbnRdLnN1YnN0cmluZygwLCBpbnB1dC5sZW5ndGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N1cnJlbnRDaGFyfT57bWVzc2FnZVtpbmNyZW1lbnRdLmNoYXJBdChpbnB1dC5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjaGFyc1RvQmVUeXBlZH0+e21lc3NhZ2VbaW5jcmVtZW50XS5zdWJzdHJpbmcoaW5wdXQubGVuZ3RoICsgMSwgbWVzc2FnZVtpbmNyZW1lbnRdLmxlbmd0aCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IHNwZWxsQ2hlY2s6ICdmYWxzZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUeXBlIFBocmFzZSBIZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXt3ZWxjb21lfT5XZWxjb21lIHt1c2VySUR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtiYWNrQW5kUmVzZXR9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==