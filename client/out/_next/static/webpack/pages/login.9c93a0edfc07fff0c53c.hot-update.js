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
      userRole = _ref.userRole,
      user_id = _ref.user_id;

  var _useStyles = Object(_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_5__["useStyles"])(),
      content = _useStyles.content,
      typos = _useStyles.typos,
      currentChar = _useStyles.currentChar,
      charsToBeTyped = _useStyles.charsToBeTyped,
      welcome = _useStyles.welcome;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      checkInput = _useState[0],
      setCheckInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      auth = _useState2[0],
      setAuth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      authSession = _useState3[0],
      setAuthSession = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      increment = _useState4[0],
      setIncrement = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      input = _useState5[0],
      setInput = _useState5[1];

  var tDNA = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var message = _utils_authSteps__WEBPACK_IMPORTED_MODULE_6__["authSteps"].message,
      route = _utils_authSteps__WEBPACK_IMPORTED_MODULE_6__["authSteps"].route;

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
              return fetch(route.verify, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  typingPattern: typingPattern,
                  user_id: user_id,
                  userRole: userRole
                })
              });

            case 9:
              res = _context.sent;
              _context.next = 12;
              return res.json();

            case 12:
              _yield$res$json = _context.sent;
              _message = _yield$res$json.message;

              if (_message === 'not verified') {
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
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
    open: open,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogTitle"], {
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
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContent"], {
    className: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 25
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type! ", !auth && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 157
    }
  }, "*Please note, it may take up to 5 attempts."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, !auth ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 33
    }
  }, "Please type ", __jsx("span", {
    className: typos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 49
    }
  }, "(typos accepted)"), ":", " ", message[increment].substring(0, input.length), __jsx("span", {
    className: currentChar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 37
    }
  }, message[increment].charAt(input.length)), __jsx("span", {
    className: charsToBeTyped,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
      lineNumber: 115,
      columnNumber: 33
    }
  })) : __jsx("h3", {
    className: welcome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 33
    }
  }, "Welcome ", userID))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: backAndReset,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, "Go Back"))));
}

_s(FormDialog, "voxeDVDQ3KzaC3B6mSjtEdYe0U8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJzZXRBdXRoRGlhbG9nT3BlbiIsImhhbmRsZUdvQmFja1Jlc2V0IiwidXNlclJvbGUiLCJ1c2VyX2lkIiwidXNlU3R5bGVzIiwiY29udGVudCIsInR5cG9zIiwiY3VycmVudENoYXIiLCJjaGFyc1RvQmVUeXBlZCIsIndlbGNvbWUiLCJ1c2VTdGF0ZSIsImNoZWNrSW5wdXQiLCJzZXRDaGVja0lucHV0IiwiYXV0aCIsInNldEF1dGgiLCJhdXRoU2Vzc2lvbiIsInNldEF1dGhTZXNzaW9uIiwiaW5jcmVtZW50Iiwic2V0SW5jcmVtZW50IiwiaW5wdXQiLCJzZXRJbnB1dCIsInRETkEiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtZXNzYWdlIiwiYXV0aFN0ZXBzIiwicm91dGUiLCJoYW5kbGVJbmNyZW1lbnRVcCIsImN1cnJlbnQiLCJzdGFydCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsImJhY2tBbmRSZXNldCIsInJlc2V0IiwiY2hlY2tQYXR0ZXJuIiwic3RvcCIsImdldFR5cGluZ1BhdHRlcm4iLCJ0eXBlIiwidGV4dCIsInR5cGluZ1BhdHRlcm4iLCJwYXR0ZXJuUXVhbGl0eSIsImdldFF1YWxpdHkiLCJmZXRjaCIsInZlcmlmeSIsImhlYWRlcnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJ1c2VFZmZlY3QiLCJUeXBpbmdETkEiLCJzdWJzdHJpbmciLCJjaGFyQXQiLCJzcGVsbENoZWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwidXNlcklEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFFZSxTQUFTQSxV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O0FBQUEsZUFESixDQWxDSixDQURKLENBREo7QUE0Q0g7O0dBOUh1QnRDLFU7VUFPaEJNLGlFLEVBT1dvQixxRDs7O0tBZEsxQixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjljOTNhMGVkZmMwN2ZmZjBjNTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIFRleHRGaWVsZCxcclxuICAgIERpYWxvZyxcclxuICAgIERpYWxvZ0FjdGlvbnMsXHJcbiAgICBEaWFsb2dDb250ZW50LFxyXG4gICAgRGlhbG9nQ29udGVudFRleHQsXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIFR5cG9ncmFwaHlcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9BdXRoRGlhbG9nU3lsZXMnO1xyXG5pbXBvcnQgeyBhdXRoU3RlcHMgfSBmcm9tICcuLi91dGlscy9hdXRoU3RlcHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtRGlhbG9nKHsgb3Blbiwgc2V0QXV0aERpYWxvZ09wZW4sIGhhbmRsZUdvQmFja1Jlc2V0LCB1c2VyUm9sZSwgdXNlcl9pZCB9KSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgICB0eXBvcyxcclxuICAgICAgICBjdXJyZW50Q2hhcixcclxuICAgICAgICBjaGFyc1RvQmVUeXBlZCxcclxuICAgICAgICB3ZWxjb21lLFxyXG4gICAgfSA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW2NoZWNrSW5wdXQsIHNldENoZWNrSW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2F1dGhTZXNzaW9uLCBzZXRBdXRoU2Vzc2lvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbmNyZW1lbnQsIHNldEluY3JlbWVudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgdEROQSA9IHVzZVJlZigpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IG1lc3NhZ2UsIHJvdXRlIH0gPSBhdXRoU3RlcHM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5jcmVtZW50VXAgPSAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnN0YXJ0KCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5wdXQoJycpO1xyXG4gICAgICAgIHNldEF1dGhTZXNzaW9uKGF1dGhTZXNzaW9uICsgMSlcclxuICAgICAgICBpbmNyZW1lbnQgPT09IG1lc3NhZ2UubGVuZ3RoIC0gMSA/XHJcbiAgICAgICAgICAgIHNldEluY3JlbWVudCgwKSA6XHJcbiAgICAgICAgICAgIHNldEluY3JlbWVudChpbmNyZW1lbnQgKyAxKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0JykuZm9jdXMoKVxyXG4gICAgICAgIH0sIDEwMClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiYWNrQW5kUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnJlc2V0KCk7XHJcbiAgICAgICAgc2V0QXV0aERpYWxvZ09wZW4oZmFsc2UpXHJcbiAgICAgICAgaGFuZGxlR29CYWNrUmVzZXQoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0Q2hlY2tJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEluY3JlbWVudCgwKTtcclxuICAgICAgICAgICAgc2V0SW5wdXQoJycpXHJcbiAgICAgICAgfSwgMjAwKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjaGVja1BhdHRlcm4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnN0b3AoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHR5cGluZ1BhdHRlcm4gPSBhd2FpdCB0RE5BLmN1cnJlbnQuZ2V0VHlwaW5nUGF0dGVybih7XHJcbiAgICAgICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgICAgIHRleHQ6IGlucHV0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcGF0dGVyblF1YWxpdHkgPSB0RE5BLmN1cnJlbnQuZ2V0UXVhbGl0eSh0eXBpbmdQYXR0ZXJuKTtcclxuICAgICAgICBpZiAocGF0dGVyblF1YWxpdHkgPiAwLjMpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocm91dGUudmVyaWZ5LCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBpbmdQYXR0ZXJuLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclJvbGVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSAnbm90IHZlcmlmaWVkJykge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFVwKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRETkEuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0RE5BLmN1cnJlbnQgPSBuZXcgVHlwaW5nRE5BKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RETkFdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5wdXQubGVuZ3RoID09PSBtZXNzYWdlW2luY3JlbWVudF0ubGVuZ3RoICYmIGNoZWNrUGF0dGVybigpXHJcbiAgICB9LCBbaW5wdXRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXtvcGVufSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiZm9ybS1kaWFsb2ctdGl0bGVcIj48aW1nIHdpZHRoPVwiMjAwXCIgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2hpdmFsZGkvNHdoZWVsei9ibG9iL21hc3Rlci9jbGllbnQvc3JjL2ltYWdlcy9TaG9wcGVkVHlwaW5nRE5BLnBuZz9yYXc9dHJ1ZVwiIC8+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17Y29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UbyBlbnN1cmUgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VjdXJpdHksIHdlIGFyZSB1c2luZyBhIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHRlc3Qgd2hvIHlvdSBhcmUgYnkgdGhlIHdheSB5b3UgdHlwZSEgeyFhdXRoICYmICg8c3Bhbj4qUGxlYXNlIG5vdGUsIGl0IG1heSB0YWtlIHVwIHRvIDUgYXR0ZW1wdHMuPC9zcGFuPil9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshYXV0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSB0eXBlIDxzcGFuIGNsYXNzTmFtZT17dHlwb3N9Pih0eXBvcyBhY2NlcHRlZCk8L3NwYW4+OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VbaW5jcmVtZW50XS5zdWJzdHJpbmcoMCwgaW5wdXQubGVuZ3RoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjdXJyZW50Q2hhcn0+e21lc3NhZ2VbaW5jcmVtZW50XS5jaGFyQXQoaW5wdXQubGVuZ3RoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2hhcnNUb0JlVHlwZWR9PnttZXNzYWdlW2luY3JlbWVudF0uc3Vic3RyaW5nKGlucHV0Lmxlbmd0aCArIDEsIG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBzcGVsbENoZWNrOiAnZmFsc2UnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBQaHJhc2UgSGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17d2VsY29tZX0+V2VsY29tZSB7dXNlcklEfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YmFja0FuZFJlc2V0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=