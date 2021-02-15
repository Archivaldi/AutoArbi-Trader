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
  console.log(user_id);

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
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
    open: open,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx("img", {
    width: "200",
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 53
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContent"], {
    className: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type! ", !auth && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 157
    }
  }, "*Please note, it may take up to 5 attempts."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
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
      lineNumber: 117,
      columnNumber: 33
    }
  })) : __jsx("h3", {
    className: welcome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, "Welcome ", userID))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJzZXRBdXRoRGlhbG9nT3BlbiIsImhhbmRsZUdvQmFja1Jlc2V0IiwidXNlcl9pZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdHlsZXMiLCJjb250ZW50IiwidHlwb3MiLCJjdXJyZW50Q2hhciIsImNoYXJzVG9CZVR5cGVkIiwid2VsY29tZSIsInVzZVN0YXRlIiwidXNlcklEIiwiY2hlY2tJbnB1dCIsInNldENoZWNrSW5wdXQiLCJhdXRoIiwic2V0QXV0aCIsImF1dGhTZXNzaW9uIiwic2V0QXV0aFNlc3Npb24iLCJpbmNyZW1lbnQiLCJzZXRJbmNyZW1lbnQiLCJpbnB1dCIsInNldElucHV0IiwidEROQSIsInVzZVJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsIm1lc3NhZ2UiLCJhdXRoU3RlcHMiLCJoYW5kbGVJbmNyZW1lbnRVcCIsImN1cnJlbnQiLCJzdGFydCIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsImJhY2tBbmRSZXNldCIsInJlc2V0IiwiY2hlY2tQYXR0ZXJuIiwic3RvcCIsImdldFR5cGluZ1BhdHRlcm4iLCJ0eXBlIiwidGV4dCIsInR5cGluZ1BhdHRlcm4iLCJwYXR0ZXJuUXVhbGl0eSIsImdldFF1YWxpdHkiLCJmZXRjaCIsInJvdXRlIiwic2lnblVwIiwiaGVhZGVycyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsInVzZUVmZmVjdCIsIlR5cGluZ0ROQSIsInN1YnN0cmluZyIsImNoYXJBdCIsInNwZWxsQ2hlY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUVlLFNB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosQ0FsQ0osQ0FESixDQURKO0FBNENIOztHQWhJdUJ2QyxVO1VBUWhCTyxpRSxFQVFXcUIscUQ7OztLQWhCSzVCLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNWEzNzMxZmNkYzA5OWE4NGY2ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgRGlhbG9nLFxyXG4gICAgRGlhbG9nQWN0aW9ucyxcclxuICAgIERpYWxvZ0NvbnRlbnQsXHJcbiAgICBEaWFsb2dDb250ZW50VGV4dCxcclxuICAgIERpYWxvZ1RpdGxlLFxyXG4gICAgVHlwb2dyYXBoeVxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL0F1dGhEaWFsb2dTeWxlcyc7XHJcbmltcG9ydCB7IGF1dGhTdGVwcyB9IGZyb20gJy4uL3V0aWxzL2F1dGhTdGVwcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1EaWFsb2coeyBvcGVuLCBzZXRBdXRoRGlhbG9nT3BlbiwgaGFuZGxlR29CYWNrUmVzZXQsIHVzZXJfaWQgfSkge1xyXG4gICAgY29uc29sZS5sb2codXNlcl9pZCk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgICB0eXBvcyxcclxuICAgICAgICBjdXJyZW50Q2hhcixcclxuICAgICAgICBjaGFyc1RvQmVUeXBlZCxcclxuICAgICAgICB3ZWxjb21lLFxyXG4gICAgfSA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3VzZXJJRF0gPSB1c2VTdGF0ZSh1c2VyX2lkKTtcclxuICAgIGNvbnN0IFtjaGVja0lucHV0LCBzZXRDaGVja0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthdXRoU2Vzc2lvbiwgc2V0QXV0aFNlc3Npb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaW5jcmVtZW50LCBzZXRJbmNyZW1lbnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IHRETkEgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSBhdXRoU3RlcHM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5jcmVtZW50VXAgPSAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnN0YXJ0KCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5wdXQoJycpO1xyXG4gICAgICAgIHNldEF1dGhTZXNzaW9uKGF1dGhTZXNzaW9uICsgMSlcclxuICAgICAgICBpbmNyZW1lbnQgPT09IG1lc3NhZ2UubGVuZ3RoIC0gMSA/XHJcbiAgICAgICAgICAgIHNldEluY3JlbWVudCgwKSA6XHJcbiAgICAgICAgICAgIHNldEluY3JlbWVudChpbmNyZW1lbnQgKyAxKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0JykuZm9jdXMoKVxyXG4gICAgICAgIH0sIDEwMClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiYWNrQW5kUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnJlc2V0KCk7XHJcbiAgICAgICAgc2V0QXV0aERpYWxvZ09wZW4oZmFsc2UpXHJcbiAgICAgICAgaGFuZGxlR29CYWNrUmVzZXQoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0Q2hlY2tJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEluY3JlbWVudCgwKTtcclxuICAgICAgICAgICAgc2V0SW5wdXQoJycpXHJcbiAgICAgICAgfSwgMjAwKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjaGVja1BhdHRlcm4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnN0b3AoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHR5cGluZ1BhdHRlcm4gPSBhd2FpdCB0RE5BLmN1cnJlbnQuZ2V0VHlwaW5nUGF0dGVybih7XHJcbiAgICAgICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgICAgIHRleHQ6IGlucHV0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcGF0dGVyblF1YWxpdHkgPSB0RE5BLmN1cnJlbnQuZ2V0UXVhbGl0eSh0eXBpbmdQYXR0ZXJuKTtcclxuICAgICAgICBpZiAocGF0dGVyblF1YWxpdHkgPiAwLjMpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocm91dGUuc2lnblVwLCB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBpbmdQYXR0ZXJuLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5RdWFsaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhTZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdEROQS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRETkEuY3VycmVudCA9IG5ldyBUeXBpbmdETkEoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdEROQV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbnB1dC5sZW5ndGggPT09IG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGggJiYgY2hlY2tQYXR0ZXJuKClcclxuICAgIH0sIFtpbnB1dF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49e29wZW59IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJmb3JtLWRpYWxvZy10aXRsZVwiPjxpbWcgd2lkdGg9XCIyMDBcIiBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vQXJjaGl2YWxkaS80d2hlZWx6L2Jsb2IvbWFzdGVyL2NsaWVudC9zcmMvaW1hZ2VzL1Nob3BwZWRUeXBpbmdETkEucG5nP3Jhdz10cnVlXCIgLz48L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPXtjb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRvIGVuc3VyZSB0aGUgaGlnaGVzdCBsZXZlbCBvZiBzZWN1cml0eSwgd2UgYXJlIHVzaW5nIGEgdGVjaG5vbG9neSB0aGF0IHdpbGwgdGVzdCB3aG8geW91IGFyZSBieSB0aGUgd2F5IHlvdSB0eXBlISB7IWF1dGggJiYgKDxzcGFuPipQbGVhc2Ugbm90ZSwgaXQgbWF5IHRha2UgdXAgdG8gNSBhdHRlbXB0cy48L3NwYW4+KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFhdXRoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHR5cGUgPHNwYW4gY2xhc3NOYW1lPXt0eXBvc30+KHR5cG9zIGFjY2VwdGVkKTwvc3Bhbj46e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZVtpbmNyZW1lbnRdLnN1YnN0cmluZygwLCBpbnB1dC5sZW5ndGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2N1cnJlbnRDaGFyfT57bWVzc2FnZVtpbmNyZW1lbnRdLmNoYXJBdChpbnB1dC5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjaGFyc1RvQmVUeXBlZH0+e21lc3NhZ2VbaW5jcmVtZW50XS5zdWJzdHJpbmcoaW5wdXQubGVuZ3RoICsgMSwgbWVzc2FnZVtpbmNyZW1lbnRdLmxlbmd0aCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IHNwZWxsQ2hlY2s6ICdmYWxzZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUeXBlIFBocmFzZSBIZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXt3ZWxjb21lfT5XZWxjb21lIHt1c2VySUR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtiYWNrQW5kUmVzZXR9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==