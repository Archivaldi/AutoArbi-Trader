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

  console.log(userID);

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
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
    open: "true",
    onClose: backAndReset,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("img", {
    width: "200",
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 53
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContent"], {
    className: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type! ", !auth && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 157
    }
  }, "*Please note, it may take up to 5 attempts."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, !auth ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, "Please type ", __jsx("span", {
    className: typos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 49
    }
  }, "(typos accepted)"), ":", " ", message[increment].substring(0, input.length), __jsx("span", {
    className: currentChar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }
  }, message[increment].charAt(input.length)), __jsx("span", {
    className: charsToBeTyped,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
      lineNumber: 118,
      columnNumber: 33
    }
  })) : __jsx("h3", {
    className: welcome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, "Welcome ", userID))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJzZXRBdXRoRGlhbG9nT3BlbiIsImhhbmRsZUdvQmFja1Jlc2V0IiwidXNlcl9pZCIsInVzZVN0eWxlcyIsImNvbnRlbnQiLCJ0eXBvcyIsImN1cnJlbnRDaGFyIiwiY2hhcnNUb0JlVHlwZWQiLCJ3ZWxjb21lIiwidXNlU3RhdGUiLCJ1c2VySUQiLCJjaGVja0lucHV0Iiwic2V0Q2hlY2tJbnB1dCIsImF1dGgiLCJzZXRBdXRoIiwiYXV0aFNlc3Npb24iLCJzZXRBdXRoU2Vzc2lvbiIsImluY3JlbWVudCIsInNldEluY3JlbWVudCIsImlucHV0Iiwic2V0SW5wdXQiLCJ0RE5BIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwibWVzc2FnZSIsImF1dGhTdGVwcyIsImhhbmRsZUluY3JlbWVudFVwIiwiY3VycmVudCIsInN0YXJ0IiwibGVuZ3RoIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwiYmFja0FuZFJlc2V0IiwicmVzZXQiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tQYXR0ZXJuIiwic3RvcCIsImdldFR5cGluZ1BhdHRlcm4iLCJ0eXBlIiwidGV4dCIsInR5cGluZ1BhdHRlcm4iLCJwYXR0ZXJuUXVhbGl0eSIsImdldFF1YWxpdHkiLCJmZXRjaCIsInJvdXRlIiwic2lnblVwIiwiaGVhZGVycyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsInVzZUVmZmVjdCIsIlR5cGluZ0ROQSIsInN1YnN0cmluZyIsImNoYXJBdCIsInNwZWxsQ2hlY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUVlLFNB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QixxRDs7O0tBZksxQixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjBhOTBkNzlhMjgxODJiNjEyNTRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIFRleHRGaWVsZCxcclxuICAgIERpYWxvZyxcclxuICAgIERpYWxvZ0FjdGlvbnMsXHJcbiAgICBEaWFsb2dDb250ZW50LFxyXG4gICAgRGlhbG9nQ29udGVudFRleHQsXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIFR5cG9ncmFwaHlcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9BdXRoRGlhbG9nU3lsZXMnO1xyXG5pbXBvcnQgeyBhdXRoU3RlcHMgfSBmcm9tICcuLi91dGlscy9hdXRoU3RlcHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtRGlhbG9nKHsgb3Blbiwgc2V0QXV0aERpYWxvZ09wZW4sIGhhbmRsZUdvQmFja1Jlc2V0LCB1c2VyX2lkIH0pIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjb250ZW50LFxyXG4gICAgICAgIHR5cG9zLFxyXG4gICAgICAgIGN1cnJlbnRDaGFyLFxyXG4gICAgICAgIGNoYXJzVG9CZVR5cGVkLFxyXG4gICAgICAgIHdlbGNvbWUsXHJcbiAgICB9ID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbdXNlcklEXSA9IHVzZVN0YXRlKHVzZXJfaWQpO1xyXG4gICAgY29uc3QgW2NoZWNrSW5wdXQsIHNldENoZWNrSW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2F1dGhTZXNzaW9uLCBzZXRBdXRoU2Vzc2lvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbmNyZW1lbnQsIHNldEluY3JlbWVudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgdEROQSA9IHVzZVJlZigpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGF1dGhTdGVwcztcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbmNyZW1lbnRVcCA9ICgpID0+IHtcclxuICAgICAgICB0RE5BLmN1cnJlbnQuc3RhcnQoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KGZhbHNlKTtcclxuICAgICAgICBzZXRJbnB1dCgnJyk7XHJcbiAgICAgICAgc2V0QXV0aFNlc3Npb24oYXV0aFNlc3Npb24gKyAxKVxyXG4gICAgICAgIGluY3JlbWVudCA9PT0gbWVzc2FnZS5sZW5ndGggLSAxID9cclxuICAgICAgICAgICAgc2V0SW5jcmVtZW50KDApIDpcclxuICAgICAgICAgICAgc2V0SW5jcmVtZW50KGluY3JlbWVudCArIDEpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQnKS5mb2N1cygpXHJcbiAgICAgICAgfSwgMTAwKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJhY2tBbmRSZXNldCA9ICgpID0+IHtcclxuICAgICAgICB0RE5BLmN1cnJlbnQucmVzZXQoKTtcclxuICAgICAgICBzZXRBdXRoRGlhbG9nT3BlbihmYWxzZSlcclxuICAgICAgICBoYW5kbGVHb0JhY2tSZXNldCgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRDaGVja0lucHV0KGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SW5jcmVtZW50KDApO1xyXG4gICAgICAgICAgICBzZXRJbnB1dCgnJylcclxuICAgICAgICB9LCAyMDApXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJJRClcclxuXHJcbiAgICBjb25zdCBjaGVja1BhdHRlcm4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnN0b3AoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHR5cGluZ1BhdHRlcm4gPSBhd2FpdCB0RE5BLmN1cnJlbnQuZ2V0VHlwaW5nUGF0dGVybih7XHJcbiAgICAgICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgICAgIHRleHQ6IGlucHV0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcGF0dGVyblF1YWxpdHkgPSB0RE5BLmN1cnJlbnQuZ2V0UXVhbGl0eSh0eXBpbmdQYXR0ZXJuKTtcclxuICAgICAgICBpZiAocGF0dGVyblF1YWxpdHkgPiAwLjMpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocm91dGUuc2lnblVwLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBpbmdQYXR0ZXJuLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5RdWFsaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhTZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdEROQS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRETkEuY3VycmVudCA9IG5ldyBUeXBpbmdETkEoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdEROQV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbnB1dC5sZW5ndGggPT09IG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGggJiYgY2hlY2tQYXR0ZXJuKClcclxuICAgIH0sIFtpbnB1dF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49XCJ0cnVlXCIgb25DbG9zZT17YmFja0FuZFJlc2V0fSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiZm9ybS1kaWFsb2ctdGl0bGVcIj48aW1nIHdpZHRoPVwiMjAwXCIgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2hpdmFsZGkvNHdoZWVsei9ibG9iL21hc3Rlci9jbGllbnQvc3JjL2ltYWdlcy9TaG9wcGVkVHlwaW5nRE5BLnBuZz9yYXc9dHJ1ZVwiIC8+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17Y29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UbyBlbnN1cmUgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VjdXJpdHksIHdlIGFyZSB1c2luZyBhIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHRlc3Qgd2hvIHlvdSBhcmUgYnkgdGhlIHdheSB5b3UgdHlwZSEgeyFhdXRoICYmICg8c3Bhbj4qUGxlYXNlIG5vdGUsIGl0IG1heSB0YWtlIHVwIHRvIDUgYXR0ZW1wdHMuPC9zcGFuPil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshYXV0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSB0eXBlIDxzcGFuIGNsYXNzTmFtZT17dHlwb3N9Pih0eXBvcyBhY2NlcHRlZCk8L3NwYW4+OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VbaW5jcmVtZW50XS5zdWJzdHJpbmcoMCwgaW5wdXQubGVuZ3RoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjdXJyZW50Q2hhcn0+e21lc3NhZ2VbaW5jcmVtZW50XS5jaGFyQXQoaW5wdXQubGVuZ3RoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2hhcnNUb0JlVHlwZWR9PnttZXNzYWdlW2luY3JlbWVudF0uc3Vic3RyaW5nKGlucHV0Lmxlbmd0aCArIDEsIG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBzcGVsbENoZWNrOiAnZmFsc2UnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBQaHJhc2UgSGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17d2VsY29tZX0+V2VsY29tZSB7dXNlcklEfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9