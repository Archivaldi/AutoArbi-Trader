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
      handleDialogClose = _ref.handleDialogClose;

  var _useStyles = Object(_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"])(),
      content = _useStyles.content,
      typos = _useStyles.typos,
      currentChar = _useStyles.currentChar,
      charsToBeTyped = _useStyles.charsToBeTyped,
      welcome = _useStyles.welcome;

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
                type: 1,
                text: input
              });

            case 4:
              typingPattern = _context.sent;
              patternQuality = tDNA.current.getQuality(typingPattern);
              console.log(patternQuality);

              if (!(patternQuality > 0.3)) {
                _context.next = 19;
                break;
              }

              _context.next = 10;
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

            case 10:
              res = _context.sent;
              _context.next = 13;
              return res.json();

            case 13:
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

              _context.next = 20;
              break;

            case 19:
              handleIncrementUp();

            case 20:
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
      TypingDNA.addTarget(document.querySelector('#Tdna'));
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
    open: open,
    onClose: backAndReset,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogTitle"], {
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
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], {
    className: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContentText"], {
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
  }, "Please note, it may take up to 5 attempts."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
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
  }, message[increment].substring(input.length + 1, message[increment].length))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    autoFocus: true,
    inputProps: {
      spellCheck: 'false'
    },
    autoComplete: "off",
    margin: "dense",
    id: "Tdna",
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
  }, "Welcome ", userID))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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

_s(FormDialog, "Lwcg1Y4S3DaJKTyNnfHV6OsY2yo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsInVzZVN0eWxlcyIsImNvbnRlbnQiLCJ0eXBvcyIsImN1cnJlbnRDaGFyIiwiY2hhcnNUb0JlVHlwZWQiLCJ3ZWxjb21lIiwibWVzc2FnZSIsImF1dGhTdGVwcyIsInJvdXRlIiwidXNlcklkIiwidXNlU3RhdGUiLCJ1c2VySUQiLCJjaGVja0lucHV0Iiwic2V0Q2hlY2tJbnB1dCIsImF1dGgiLCJzZXRBdXRoIiwiYXV0aFNlc3Npb24iLCJzZXRBdXRoU2Vzc2lvbiIsImluY3JlbWVudCIsInNldEluY3JlbWVudCIsImlucHV0Iiwic2V0SW5wdXQiLCJ0RE5BIiwidXNlUmVmIiwiaGFuZGxlSW5jcmVtZW50VXAiLCJjdXJyZW50Iiwic3RhcnQiLCJsZW5ndGgiLCJiYWNrQW5kUmVzZXQiLCJyZXNldCIsImNoZWNrUGF0dGVybiIsInN0b3AiLCJnZXRUeXBpbmdQYXR0ZXJuIiwidHlwZSIsInRleHQiLCJ0eXBpbmdQYXR0ZXJuIiwicGF0dGVyblF1YWxpdHkiLCJnZXRRdWFsaXR5IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwic2lnblVwIiwiaGVhZGVycyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsInN0YXR1cyIsInJlc3VsdCIsImVucm9sbG1lbnQiLCJhbGVydCIsInVzZUVmZmVjdCIsIlR5cGluZ0ROQSIsImFkZFRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN1YnN0cmluZyIsImNoYXJBdCIsInNwZWxsQ2hlY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBR2UsU0FBU0EsVUFBVCxPQUFpRDtBQUFB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QUE7QUFBQSxpQkFBaUNNLE1BQWpDLENBeEJaLENBSkosQ0FGSixFQWtDSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFFaUIsWUFBakI7QUFBK0IsU0FBSyxFQUFDLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQWxDSixDQURKLENBREo7QUE0Q0g7O0dBckl1Qi9CLFU7VUFPaEJHLGlFOzs7S0FQZ0JILFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uOTZkMzBjYWVhZmIwNTZhYmZmODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBEaWFsb2csXHJcbiAgICBEaWFsb2dBY3Rpb25zLFxyXG4gICAgRGlhbG9nQ29udGVudCxcclxuICAgIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBUeXBvZ3JhcGh5XHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBhdXRoU3RlcHMgfSBmcm9tICcuLi91dGlscy9hdXRoU3RlcHMnO1xyXG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvQXV0aERpYWxvZ1N5bGVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtRGlhbG9nKHsgb3BlbiwgaGFuZGxlRGlhbG9nQ2xvc2UgfSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgdHlwb3MsXHJcbiAgICAgICAgY3VycmVudENoYXIsXHJcbiAgICAgICAgY2hhcnNUb0JlVHlwZWQsXHJcbiAgICAgICAgd2VsY29tZVxyXG4gICAgfSA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgeyBtZXNzYWdlLCByb3V0ZSwgdXNlcklkIH0gPSBhdXRoU3RlcHM7XHJcbiAgICBjb25zdCBbdXNlcklEXSA9IHVzZVN0YXRlKHVzZXJJZCk7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrSW5wdXQsIHNldENoZWNrSW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2F1dGhTZXNzaW9uLCBzZXRBdXRoU2Vzc2lvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbmNyZW1lbnQsIHNldEluY3JlbWVudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgdEROQSA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluY3JlbWVudFVwID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdGFydCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgIHNldElucHV0KCcnKTtcclxuICAgICAgICBzZXRBdXRoU2Vzc2lvbihhdXRoU2Vzc2lvbiArIDEpXHJcbiAgICAgICAgaW5jcmVtZW50ID09PSBtZXNzYWdlLmxlbmd0aCAtIDEgP1xyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoMCkgOlxyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoaW5jcmVtZW50ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmFja0FuZFJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5yZXNldCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgIHNldEluY3JlbWVudCgwKTtcclxuICAgICAgICBoYW5kbGVEaWFsb2dDbG9zZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdG9wKCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dCh0cnVlKTtcclxuICAgICAgICBjb25zdCB0eXBpbmdQYXR0ZXJuID0gYXdhaXQgdEROQS5jdXJyZW50LmdldFR5cGluZ1BhdHRlcm4oe1xyXG4gICAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgICB0ZXh0OiBpbnB1dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5RdWFsaXR5ID0gdEROQS5jdXJyZW50LmdldFF1YWxpdHkodHlwaW5nUGF0dGVybik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGF0dGVyblF1YWxpdHkpXHJcblxyXG4gICAgICAgIGlmIChwYXR0ZXJuUXVhbGl0eSA+IDAuMykge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChyb3V0ZS5zaWduVXAsIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGluZ1BhdHRlcm4sXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblF1YWxpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFNlc3Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklELFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnJlc3VsdCA9PT0gMSAmJiBtZXNzYWdlLmVucm9sbG1lbnQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBdXRoKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBvbiBvdXIgZW5kLiBQbGVhc2UgcmVmcmVzaCBhbmQgdHJ5IGFnYWluLlwiKVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdEROQS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRETkEuY3VycmVudCA9IG5ldyBUeXBpbmdETkEoKTtcclxuICAgICAgICAgICAgVHlwaW5nRE5BLmFkZFRhcmdldChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVGRuYScpKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt0RE5BXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlucHV0Lmxlbmd0aCA9PT0gbWVzc2FnZVtpbmNyZW1lbnRdLmxlbmd0aCAmJiBjaGVja1BhdHRlcm4oKVxyXG4gICAgfSwgW2lucHV0XSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17b3Blbn0gb25DbG9zZT17YmFja0FuZFJlc2V0fSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiZm9ybS1kaWFsb2ctdGl0bGVcIj48aW1nIHdpZHRoPVwiMjAwXCIgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2hpdmFsZGkvNHdoZWVsei9ibG9iL21hc3Rlci9jbGllbnQvc3JjL2ltYWdlcy9TaG9wcGVkVHlwaW5nRE5BLnBuZz9yYXc9dHJ1ZVwiIC8+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17Y29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UbyBlbnN1cmUgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VjdXJpdHksIHdlIGFyZSB1c2luZyBhIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHRlc3Qgd2hvIHlvdSBhcmUgYnkgdGhlIHdheSB5b3UgdHlwZSEgeyFhdXRoICYmICg8c3Bhbj5QbGVhc2Ugbm90ZSwgaXQgbWF5IHRha2UgdXAgdG8gNSBhdHRlbXB0cy48L3NwYW4+KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJib2R5MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWF1dGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgdHlwZSA8c3BhbiBjbGFzc05hbWU9e3R5cG9zfT4odHlwb3MgYWNjZXB0ZWQpPC9zcGFuPjp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlW2luY3JlbWVudF0uc3Vic3RyaW5nKDAsIGlucHV0Lmxlbmd0aCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3VycmVudENoYXJ9PnttZXNzYWdlW2luY3JlbWVudF0uY2hhckF0KGlucHV0Lmxlbmd0aCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NoYXJzVG9CZVR5cGVkfT57bWVzc2FnZVtpbmNyZW1lbnRdLnN1YnN0cmluZyhpbnB1dC5sZW5ndGggKyAxLCBtZXNzYWdlW2luY3JlbWVudF0ubGVuZ3RoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgc3BlbGxDaGVjazogJ2ZhbHNlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiVGRuYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBQaHJhc2UgSGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17d2VsY29tZX0+V2VsY29tZSB7dXNlcklEfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YmFja0FuZFJlc2V0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=