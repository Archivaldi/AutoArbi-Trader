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
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
    open: open,
    onClose: backAndReset,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("img", {
    width: "200",
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 53
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], {
    className: styles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type!"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    component: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, increment < message.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "Please type ", __jsx("span", {
    style: {
      color: 'rgba(255, 255, 255, 0.7)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 95,
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
      lineNumber: 96,
      columnNumber: 33
    }
  })) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 33
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: backAndReset,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsInN0eWxlcyIsIm1lc3NhZ2UiLCJhdXRoU3RlcHMiLCJyb3V0ZSIsInVzZXJJZCIsInVzZVN0YXRlIiwiY2hlY2tJbnB1dCIsInNldENoZWNrSW5wdXQiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJhdXRoU2Vzc2lvbiIsInNldEF1dGhTZXNzaW9uIiwiaW5jcmVtZW50Iiwic2V0SW5jcmVtZW50IiwiaW5wdXQiLCJzZXRJbnB1dCIsInRETkEiLCJ1c2VSZWYiLCJoYW5kbGVJbmNyZW1lbnRVcCIsImN1cnJlbnQiLCJzdGFydCIsImxlbmd0aCIsImJhY2tBbmRSZXNldCIsInJlc2V0IiwiY2hlY2tQYXR0ZXJuIiwic3RvcCIsImdldFR5cGluZ1BhdHRlcm4iLCJ0eXBlIiwidGV4dCIsInR5cGluZ1BhdHRlcm4iLCJwYXR0ZXJuUXVhbGl0eSIsImdldFF1YWxpdHkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJzaWduVXAiLCJoZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwic2VydmVyIiwic3RhdHVzIiwidXNlRWZmZWN0IiwiVHlwaW5nRE5BIiwiY29sb3IiLCJzdWJzdHJpbmciLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwic3BlbGxDaGVjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0E7QUFFZSxTQUFTQSxVQUFULE9BQXlEO0FBQUE7O0FBQUEsTUFBbkNDLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTdCQyxpQkFBNkIsUUFBN0JBLGlCQUE2QjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUFBLE1BQzVEQyxP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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQlosQ0FKSixDQUZKLEVBNkJJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBUSxXQUFPLEVBQUVoQyxZQUFqQjtBQUErQixTQUFLLEVBQUMsV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBN0JKLENBREosQ0FESjtBQXVDSDs7R0E1R3VCekIsVTs7S0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi42NTg4ZWEyMDg5ZGEyN2Y5OGMwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIFRleHRGaWVsZCxcclxuICAgIERpYWxvZyxcclxuICAgIERpYWxvZ0FjdGlvbnMsXHJcbiAgICBEaWFsb2dDb250ZW50LFxyXG4gICAgRGlhbG9nQ29udGVudFRleHQsXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIFR5cG9ncmFwaHksXHJcbiAgICBDaXJjdWxhclByb2dyZXNzXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBhdXRoU3RlcHMgfSBmcm9tICcuLi91dGlscy9hdXRoU3RlcHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybURpYWxvZyh7IG9wZW4sIGhhbmRsZURpYWxvZ0Nsb3NlLCBzdHlsZXMgfSkge1xyXG4gICAgY29uc3QgeyBtZXNzYWdlLCByb3V0ZSwgdXNlcklkIH0gPSBhdXRoU3RlcHM7XHJcblxyXG4gICAgY29uc3QgW2NoZWNrSW5wdXQsIHNldENoZWNrSW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJJRCwgc2V0VXNlcklEXSA9IHVzZVN0YXRlKHVzZXJJZCk7XHJcbiAgICBjb25zdCBbYXV0aFNlc3Npb24sIHNldEF1dGhTZXNzaW9uXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2luY3JlbWVudCwgc2V0SW5jcmVtZW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB0RE5BID0gdXNlUmVmKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW5jcmVtZW50VXAgPSAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnN0YXJ0KCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5wdXQoJycpO1xyXG4gICAgICAgIHNldEF1dGhTZXNzaW9uKGF1dGhTZXNzaW9uICsgMSlcclxuICAgICAgICBpbmNyZW1lbnQgPT09IG1lc3NhZ2UubGVuZ3RoIC0gMSA/XHJcbiAgICAgICAgICAgIHNldEluY3JlbWVudCgwKSA6XHJcbiAgICAgICAgICAgIHNldEluY3JlbWVudChpbmNyZW1lbnQgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBiYWNrQW5kUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnJlc2V0KCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5jcmVtZW50KDApO1xyXG4gICAgICAgIGhhbmRsZURpYWxvZ0Nsb3NlKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1BhdHRlcm4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnN0b3AoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHR5cGluZ1BhdHRlcm4gPSBhd2FpdCB0RE5BLmN1cnJlbnQuZ2V0VHlwaW5nUGF0dGVybih7XHJcbiAgICAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgICAgIHRleHQ6IGlucHV0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcGF0dGVyblF1YWxpdHkgPSB0RE5BLmN1cnJlbnQuZ2V0UXVhbGl0eSh0eXBpbmdQYXR0ZXJuKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codHlwaW5nUGF0dGVybik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGF0dGVyblF1YWxpdHkpO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChyb3V0ZS5zaWduVXAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdHlwaW5nUGF0dGVybixcclxuICAgICAgICAgICAgICAgIGF1dGhTZXNzaW9uLFxyXG4gICAgICAgICAgICAgICAgdXNlcklELFxyXG4gICAgICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IHNlcnZlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlcnZlcilcclxuXHJcbiAgICAgICAgcmVzLnN0YXR1cyA9PT0gMjAwICYmIGhhbmRsZUluY3JlbWVudFVwKClcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdEROQS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRETkEuY3VycmVudCA9IG5ldyBUeXBpbmdETkEoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdEROQV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbnB1dC5sZW5ndGggPT09IG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGggJiYgY2hlY2tQYXR0ZXJuKClcclxuICAgIH0sIFtpbnB1dF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49e29wZW59IG9uQ2xvc2U9e2JhY2tBbmRSZXNldH0gYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImZvcm0tZGlhbG9nLXRpdGxlXCI+PGltZyB3aWR0aD1cIjIwMFwiIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9BcmNoaXZhbGRpLzR3aGVlbHovYmxvYi9tYXN0ZXIvY2xpZW50L3NyYy9pbWFnZXMvU2hvcHBlZFR5cGluZ0ROQS5wbmc/cmF3PXRydWVcIiAvPjwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9e3N0eWxlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUbyBlbnN1cmUgdGhlIGhpZ2hlc3QgbGV2ZWwgb2Ygc2VjdXJpdHksIHdlIGFyZSB1c2luZyBhIHRlY2hub2xvZ3kgdGhhdCB3aWxsIHRlc3Qgd2hvIHlvdSBhcmUgYnkgdGhlIHdheSB5b3UgdHlwZSFcclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImJvZHkxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmNyZW1lbnQgPCBtZXNzYWdlLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHR5cGUgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknIH19Pih0eXBvcyBhY2NlcHRlZCk8L3NwYW4+OiB7bWVzc2FnZVtpbmNyZW1lbnRdLnN1YnN0cmluZygwLCBpbnB1dC5sZW5ndGgpfTxzcGFuIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMDA4MWNiJywgYm9yZGVyUmFkaXVzOiAnMnB4JyB9fT57bWVzc2FnZVtpbmNyZW1lbnRdLnN1YnN0cmluZyhpbnB1dC5sZW5ndGgsIG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBNZXNzYWdlIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBzcGVsbENoZWNrOiAnZmFsc2UnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInNlY29uZGFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YmFja0FuZFJlc2V0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=