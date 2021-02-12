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



var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\UserAuthDialog.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function FormDialog(_ref) {
  _s();

  var open = _ref.open,
      handleDialogClose = _ref.handleDialogClose,
      styles = _ref.styles;
  var message = _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__["authSteps"].message,
      route = _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__["authSteps"].route,
      userId = _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__["authSteps"].userId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      checkInput = _useState[0],
      setCheckInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(userId),
      userID = _useState2[0],
      setUserID = _useState2[1];

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
      var typingPattern, patternQuality, res, server;
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
              console.log(typingPattern);
              console.log(patternQuality);
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
              server = _context.sent;
              console.log(server);
              res.status === 200 && handleIncrementUp();

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
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
    open: open,
    onClose: backAndReset,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("img", {
    width: "200",
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 53
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], {
    className: styles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type!"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    component: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, increment < message.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "Please type ", __jsx("span", {
    style: {
      color: 'rgba(255, 255, 255, 0.7)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 45
    }
  }, "(typos accepted)"), ": ", message[increment].substring(0, input.length), __jsx("span", {
    style: {
      background: '#0081cb',
      borderRadius: '2px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 169
    }
  }, message[increment].substring(input.length, message[increment].length)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
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
      lineNumber: 97,
      columnNumber: 33
    }
  })) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: backAndReset,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, "Go Back"))));
}

_s(FormDialog, "pRVCHrbxlqS+mBUAP+7eJcLBFmU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsInN0eWxlcyIsIm1lc3NhZ2UiLCJhdXRoU3RlcHMiLCJyb3V0ZSIsInVzZXJJZCIsInVzZVN0YXRlIiwiY2hlY2tJbnB1dCIsInNldENoZWNrSW5wdXQiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJhdXRoU2Vzc2lvbiIsInNldEF1dGhTZXNzaW9uIiwiaW5jcmVtZW50Iiwic2V0SW5jcmVtZW50IiwiaW5wdXQiLCJzZXRJbnB1dCIsInRETkEiLCJ1c2VSZWYiLCJoYW5kbGVJbmNyZW1lbnRVcCIsImN1cnJlbnQiLCJzdGFydCIsImxlbmd0aCIsImJhY2tBbmRSZXNldCIsInJlc2V0IiwiY2hlY2tQYXR0ZXJuIiwic3RvcCIsImdldFR5cGluZ1BhdHRlcm4iLCJ0eXBlIiwidGV4dCIsInR5cGluZ1BhdHRlcm4iLCJwYXR0ZXJuUXVhbGl0eSIsImdldFF1YWxpdHkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJzaWduVXAiLCJoZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwic2VydmVyIiwic3RhdHVzIiwidXNlRWZmZWN0IiwiVHlwaW5nRE5BIiwiY29sb3IiLCJzdWJzdHJpbmciLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwic3BlbGxDaGVjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0E7QUFFZSxTQUFTQSxVQUFULE9BQXlEO0FBQUE7O0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTdCQyxpQkFBNkIsUUFBN0JBLGlCQUE2QjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUFBLE1BQzVEQyxP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QWtCLFNBQUssRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJaLENBSkosQ0FGSixFQTZCSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFFaEMsWUFBakI7QUFBK0IsU0FBSyxFQUFDLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQTdCSixDQURKLENBREo7QUF1Q0g7O0dBN0d1QnpCLFU7O0tBQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZjM0NTE2ZWE2MjRkMzVmZDczODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBEaWFsb2csXHJcbiAgICBEaWFsb2dBY3Rpb25zLFxyXG4gICAgRGlhbG9nQ29udGVudCxcclxuICAgIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgQ2lyY3VsYXJQcm9ncmVzc1xyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgYXV0aFN0ZXBzIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFN0ZXBzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1EaWFsb2coeyBvcGVuLCBoYW5kbGVEaWFsb2dDbG9zZSwgc3R5bGVzIH0pIHtcclxuICAgIGNvbnN0IHsgbWVzc2FnZSwgcm91dGUsIHVzZXJJZCB9ID0gYXV0aFN0ZXBzO1xyXG5cclxuICAgIGNvbnN0IFtjaGVja0lucHV0LCBzZXRDaGVja0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VySUQsIHNldFVzZXJJRF0gPSB1c2VTdGF0ZSh1c2VySWQpO1xyXG4gICAgY29uc3QgW2F1dGhTZXNzaW9uLCBzZXRBdXRoU2Vzc2lvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbmNyZW1lbnQsIHNldEluY3JlbWVudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgdEROQSA9IHVzZVJlZigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluY3JlbWVudFVwID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdGFydCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgIHNldElucHV0KCcnKTtcclxuICAgICAgICBzZXRBdXRoU2Vzc2lvbihhdXRoU2Vzc2lvbiArIDEpXHJcbiAgICAgICAgaW5jcmVtZW50ID09PSBtZXNzYWdlLmxlbmd0aCAtIDEgP1xyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoMCkgOlxyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoaW5jcmVtZW50ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmFja0FuZFJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5yZXNldCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgIHNldEluY3JlbWVudCgwKTtcclxuICAgICAgICBoYW5kbGVEaWFsb2dDbG9zZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdG9wKCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dCh0cnVlKTtcclxuICAgICAgICBjb25zdCB0eXBpbmdQYXR0ZXJuID0gYXdhaXQgdEROQS5jdXJyZW50LmdldFR5cGluZ1BhdHRlcm4oe1xyXG4gICAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgICB0ZXh0OiBpbnB1dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5RdWFsaXR5ID0gdEROQS5jdXJyZW50LmdldFF1YWxpdHkodHlwaW5nUGF0dGVybik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGluZ1BhdHRlcm4pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhdHRlcm5RdWFsaXR5KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocm91dGUuc2lnblVwLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHR5cGluZ1BhdHRlcm4sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuUXVhbGl0eSxcclxuICAgICAgICAgICAgICAgIGF1dGhTZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgdXNlcklELFxyXG4gICAgICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHNlcnZlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlcnZlcilcclxuXHJcbiAgICAgICAgcmVzLnN0YXR1cyA9PT0gMjAwICYmIGhhbmRsZUluY3JlbWVudFVwKClcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdEROQS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRETkEuY3VycmVudCA9IG5ldyBUeXBpbmdETkEoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdEROQV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbnB1dC5sZW5ndGggPT09IG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGggJiYgY2hlY2tQYXR0ZXJuKClcclxuICAgIH0sIFtpbnB1dF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49e29wZW59IG9uQ2xvc2U9e2JhY2tBbmRSZXNldH0gYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImZvcm0tZGlhbG9nLXRpdGxlXCI+PGltZyB3aWR0aD1cIjIwMFwiIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9BcmNoaXZhbGRpLzR3aGVlbHovYmxvYi9tYXN0ZXIvY2xpZW50L3NyYy9pbWFnZXMvU2hvcHBlZFR5cGluZ0ROQS5wbmc/cmF3PXRydWVcIiAvPjwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9e3N0eWxlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUbyBlbnN1cmUgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VjdXJpdHksIHdlIGFyZSB1c2luZyBhIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHRlc3Qgd2hvIHlvdSBhcmUgYnkgdGhlIHdheSB5b3UgdHlwZSFcclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImJvZHkxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmNyZW1lbnQgPCBtZXNzYWdlLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHR5cGUgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknIH19Pih0eXBvcyBhY2NlcHRlZCk8L3NwYW4+OiB7bWVzc2FnZVtpbmNyZW1lbnRdLnN1YnN0cmluZygwLCBpbnB1dC5sZW5ndGgpfTxzcGFuIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMDA4MWNiJywgYm9yZGVyUmFkaXVzOiAnMnB4JyB9fT57bWVzc2FnZVtpbmNyZW1lbnRdLnN1YnN0cmluZyhpbnB1dC5sZW5ndGgsIG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBNZXNzYWdlIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBzcGVsbENoZWNrOiAnZmFsc2UnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInNlY29uZGFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YmFja0FuZFJlc2V0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=