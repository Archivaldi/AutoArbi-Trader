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
/* harmony import */ var _styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/AuthDialogSyles */ "./src/styles/AuthDialogSyles.js");
/* harmony import */ var _utils_authSteps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/authSteps */ "./src/utils/authSteps.js");



var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\UserAuthDialog.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function FormDialog(_ref) {
  _s();

  var open = _ref.open,
      setAuthDialogOpen = _ref.setAuthDialogOpen,
      handleGoBackReset = _ref.handleGoBackReset,
      user_id = _ref.user_id;

  var _useStyles = Object(_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"])(),
      content = _useStyles.content,
      typos = _useStyles.typos,
      currentChar = _useStyles.currentChar,
      charsToBeTyped = _useStyles.charsToBeTyped,
      welcome = _useStyles.welcome;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(user_id),
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
  var message = _utils_authSteps__WEBPACK_IMPORTED_MODULE_6__["authSteps"].message;

  var handleIncrementUp = function handleIncrementUp() {
    tDNA.current.start();
    setCheckInput(false);
    setInput('');
    setAuthSession(authSession + 1);
    increment === message.length - 1 ? setIncrement(0) : setIncrement(increment + 1);
    setTimeout(function () {
      document.querySelector('#input').focus();
    }, 100);
  };

  var backAndReset = function backAndReset() {
    tDNA.current.reset();
    setAuthDialogOpen(false);
    handleGoBackReset();
    setTimeout(function () {
      setCheckInput(false);
      setIncrement(0);
      setInput('');
    }, 200);
  };

  var checkPattern = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var typingPattern, patternQuality, res;
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
                _context.next = 15;
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
              console.log(res);
              _context.next = 16;
              break;

            case 15:
              handleIncrementUp();

            case 16:
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
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
    open: open,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("img", {
    width: "200",
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 53
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContent"], {
    className: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type! ", !auth && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 157
    }
  }, "*Please note, it may take up to 5 attempts."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, !auth ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, "Please type ", __jsx("span", {
    className: typos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 49
    }
  }, "(typos accepted)"), ":", " ", message[increment].substring(0, input.length), __jsx("span", {
    className: currentChar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 37
    }
  }, message[increment].charAt(input.length)), __jsx("span", {
    className: charsToBeTyped,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
      lineNumber: 116,
      columnNumber: 33
    }
  })) : __jsx("h3", {
    className: welcome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }, "Welcome ", userID))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: backAndReset,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, "Go Back"))));
}

_s(FormDialog, "32ttJAhpkRmjii/9OevedMEu/JM=", false, function () {
  return [_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJzZXRBdXRoRGlhbG9nT3BlbiIsImhhbmRsZUdvQmFja1Jlc2V0IiwidXNlcl9pZCIsInVzZVN0eWxlcyIsImNvbnRlbnQiLCJ0eXBvcyIsImN1cnJlbnRDaGFyIiwiY2hhcnNUb0JlVHlwZWQiLCJ3ZWxjb21lIiwidXNlU3RhdGUiLCJ1c2VySUQiLCJjaGVja0lucHV0Iiwic2V0Q2hlY2tJbnB1dCIsImF1dGgiLCJzZXRBdXRoIiwiYXV0aFNlc3Npb24iLCJzZXRBdXRoU2Vzc2lvbiIsImluY3JlbWVudCIsInNldEluY3JlbWVudCIsImlucHV0Iiwic2V0SW5wdXQiLCJ0RE5BIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwibWVzc2FnZSIsImF1dGhTdGVwcyIsImhhbmRsZUluY3JlbWVudFVwIiwiY3VycmVudCIsInN0YXJ0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwiYmFja0FuZFJlc2V0IiwicmVzZXQiLCJjaGVja1BhdHRlcm4iLCJzdG9wIiwiZ2V0VHlwaW5nUGF0dGVybiIsInR5cGUiLCJ0ZXh0IiwidHlwaW5nUGF0dGVybiIsInBhdHRlcm5RdWFsaXR5IiwiZ2V0UXVhbGl0eSIsImZldGNoIiwicm91dGUiLCJzaWduVXAiLCJoZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIlR5cGluZ0ROQSIsInN1YnN0cmluZyIsImNoYXJBdCIsInNwZWxsQ2hlY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUVlLFNB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REosQ0FESjtBQTRDSDs7R0EvSHVCckMsVTtVQU9oQkssaUUsRUFRV3FCLHFEOzs7S0FmSzFCLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uODRjMmI0ZWY3MmJhZTBkY2U0ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgRGlhbG9nLFxyXG4gICAgRGlhbG9nQWN0aW9ucyxcclxuICAgIERpYWxvZ0NvbnRlbnQsXHJcbiAgICBEaWFsb2dDb250ZW50VGV4dCxcclxuICAgIERpYWxvZ1RpdGxlLFxyXG4gICAgVHlwb2dyYXBoeVxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL0F1dGhEaWFsb2dTeWxlcyc7XHJcbmltcG9ydCB7IGF1dGhTdGVwcyB9IGZyb20gJy4uL3V0aWxzL2F1dGhTdGVwcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1EaWFsb2coeyBvcGVuLCBzZXRBdXRoRGlhbG9nT3BlbiwgaGFuZGxlR29CYWNrUmVzZXQsIHVzZXJfaWQgfSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgdHlwb3MsXHJcbiAgICAgICAgY3VycmVudENoYXIsXHJcbiAgICAgICAgY2hhcnNUb0JlVHlwZWQsXHJcbiAgICAgICAgd2VsY29tZSxcclxuICAgIH0gPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFt1c2VySURdID0gdXNlU3RhdGUodXNlcl9pZCk7XHJcbiAgICBjb25zdCBbY2hlY2tJbnB1dCwgc2V0Q2hlY2tJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYXV0aFNlc3Npb24sIHNldEF1dGhTZXNzaW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2luY3JlbWVudCwgc2V0SW5jcmVtZW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB0RE5BID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gYXV0aFN0ZXBzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluY3JlbWVudFVwID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdGFydCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgIHNldElucHV0KCcnKTtcclxuICAgICAgICBzZXRBdXRoU2Vzc2lvbihhdXRoU2Vzc2lvbiArIDEpXHJcbiAgICAgICAgaW5jcmVtZW50ID09PSBtZXNzYWdlLmxlbmd0aCAtIDEgP1xyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoMCkgOlxyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoaW5jcmVtZW50ICsgMSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dCcpLmZvY3VzKClcclxuICAgICAgICB9LCAxMDApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmFja0FuZFJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5yZXNldCgpO1xyXG4gICAgICAgIHNldEF1dGhEaWFsb2dPcGVuKGZhbHNlKVxyXG4gICAgICAgIGhhbmRsZUdvQmFja1Jlc2V0KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoMCk7XHJcbiAgICAgICAgICAgIHNldElucHV0KCcnKVxyXG4gICAgICAgIH0sIDIwMClcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2hlY2tQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdG9wKCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dCh0cnVlKTtcclxuICAgICAgICBjb25zdCB0eXBpbmdQYXR0ZXJuID0gYXdhaXQgdEROQS5jdXJyZW50LmdldFR5cGluZ1BhdHRlcm4oe1xyXG4gICAgICAgICAgICB0eXBlOiAwLFxyXG4gICAgICAgICAgICB0ZXh0OiBpbnB1dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5RdWFsaXR5ID0gdEROQS5jdXJyZW50LmdldFF1YWxpdHkodHlwaW5nUGF0dGVybik7XHJcbiAgICAgICAgaWYgKHBhdHRlcm5RdWFsaXR5ID4gMC4zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHJvdXRlLnNpZ25VcCwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwaW5nUGF0dGVybixcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuUXVhbGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoU2Vzc2lvbixcclxuICAgICAgICAgICAgICAgICAgICB1c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFVwKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRETkEuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0RE5BLmN1cnJlbnQgPSBuZXcgVHlwaW5nRE5BKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RETkFdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5wdXQubGVuZ3RoID09PSBtZXNzYWdlW2luY3JlbWVudF0ubGVuZ3RoICYmIGNoZWNrUGF0dGVybigpXHJcbiAgICB9LCBbaW5wdXRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXtvcGVufSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiZm9ybS1kaWFsb2ctdGl0bGVcIj48aW1nIHdpZHRoPVwiMjAwXCIgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2hpdmFsZGkvNHdoZWVsei9ibG9iL21hc3Rlci9jbGllbnQvc3JjL2ltYWdlcy9TaG9wcGVkVHlwaW5nRE5BLnBuZz9yYXc9dHJ1ZVwiIC8+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17Y29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UbyBlbnN1cmUgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VjdXJpdHksIHdlIGFyZSB1c2luZyBhIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHRlc3Qgd2hvIHlvdSBhcmUgYnkgdGhlIHdheSB5b3UgdHlwZSEgeyFhdXRoICYmICg8c3Bhbj4qUGxlYXNlIG5vdGUsIGl0IG1heSB0YWtlIHVwIHRvIDUgYXR0ZW1wdHMuPC9zcGFuPil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshYXV0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSB0eXBlIDxzcGFuIGNsYXNzTmFtZT17dHlwb3N9Pih0eXBvcyBhY2NlcHRlZCk8L3NwYW4+OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VbaW5jcmVtZW50XS5zdWJzdHJpbmcoMCwgaW5wdXQubGVuZ3RoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjdXJyZW50Q2hhcn0+e21lc3NhZ2VbaW5jcmVtZW50XS5jaGFyQXQoaW5wdXQubGVuZ3RoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2hhcnNUb0JlVHlwZWR9PnttZXNzYWdlW2luY3JlbWVudF0uc3Vic3RyaW5nKGlucHV0Lmxlbmd0aCArIDEsIG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBzcGVsbENoZWNrOiAnZmFsc2UnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBQaHJhc2UgSGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17d2VsY29tZX0+V2VsY29tZSB7dXNlcklEfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YmFja0FuZFJlc2V0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=