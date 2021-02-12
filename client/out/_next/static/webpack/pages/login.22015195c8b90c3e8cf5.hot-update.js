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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      increment = _useState[0],
      setIncrement = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      checkInput = _useState2[0],
      setCheckInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      input = _useState3[0],
      setInput = _useState3[1];

  var message = _utils_authSteps__WEBPACK_IMPORTED_MODULE_4__["authSteps"].message;
  var tDNA = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleInputChange = function handleInputChange(value) {
    setInput(value);
    value.length === message[increment].length && checkPattern();
  };

  var handleIncrementUp = function handleIncrementUp() {
    tDNA.current.start();
    setIncrement(increment + 1);
    setCheckInput(false);
    setInput('');
  };

  var backAndReset = function backAndReset(failed) {
    if (failed) {
      setInput('Whoops! Something when wrong, please back-out and try again');
    }

    tDNA.current.reset();
    setCheckInput(false);
    setIncrement(0);
    handleDialogClose();
  };

  var checkPattern = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var typingPattern, res;
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
              console.log(typingPattern);
              _context.next = 8;
              return fetch('/api/typing-dna/signup', {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  typingPattern: typingPattern
                })
              });

            case 8:
              res = _context.sent;
              _context.next = 11;
              return res.json();

            case 11:
              res.status === 200 && handleIncrementUp(res);

            case 12:
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
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
    open: open,
    onClose: backAndReset,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("img", {
    width: "200",
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 53
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], {
    className: styles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type!"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "body1",
    component: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, increment < message.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, "Please type ", __jsx("span", {
    style: {
      color: 'rgba(255, 255, 255, 0.7)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 86,
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
      return handleInputChange(e.target.value);
    },
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  })) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: backAndReset,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, "Go Back"))));
}

_s(FormDialog, "KHlQo27K+xcZBQwdLfYcf0B8PbE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsInN0eWxlcyIsInVzZVN0YXRlIiwiaW5jcmVtZW50Iiwic2V0SW5jcmVtZW50IiwiY2hlY2tJbnB1dCIsInNldENoZWNrSW5wdXQiLCJpbnB1dCIsInNldElucHV0IiwibWVzc2FnZSIsImF1dGhTdGVwcyIsInRETkEiLCJ1c2VSZWYiLCJoYW5kbGVJbnB1dENoYW5nZSIsInZhbHVlIiwibGVuZ3RoIiwiY2hlY2tQYXR0ZXJuIiwiaGFuZGxlSW5jcmVtZW50VXAiLCJjdXJyZW50Iiwic3RhcnQiLCJiYWNrQW5kUmVzZXQiLCJmYWlsZWQiLCJyZXNldCIsInN0b3AiLCJnZXRUeXBpbmdQYXR0ZXJuIiwidHlwZSIsInRleHQiLCJ0eXBpbmdQYXR0ZXJuIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwiaGVhZGVycyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsInN0YXR1cyIsInVzZUVmZmVjdCIsIlR5cGluZ0ROQSIsImNvbG9yIiwic3Vic3RyaW5nIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInNwZWxsQ2hlY2siLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUVlLFNBQVNBLFVBQVQsT0FBeUQ7QUFBQTs7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsTUFBN0JDLGlCQUE2QixRQUE3QkEsaUJBQTZCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLGtCQUNsQ0Msc0RBQVEsQ0FBQyxDQUFELENBRDBCO0FBQUEsTUFDN0RDLFNBRDZEO0FBQUEsTUFDbERDLFlBRGtEOztBQUFBLG1CQUVoQ0Ysc0RBQVEsQ0FBQyxLQUFE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QUUsRUFBQyxNQUpQO0FBS0ksU0FBSyxFQUFDLG1CQUxWO0FBTUksU0FBSyxFQUFDLFdBTlY7QUFPSSxTQUFLLEVBQUVSLEtBUFg7QUFRSSxjQUFVLEVBQUU7QUFBRXNDLGdCQUFVLEVBQUU7QUFBZCxLQVJoQjtBQVNJLFlBQVEsRUFBRXhDLFVBVGQ7QUFVSSxZQUFRLEVBQUUsa0JBQUF5QyxDQUFDO0FBQUEsYUFBSWpDLGlCQUFpQixDQUFDaUMsQ0FBQyxDQUFDQyxNQUFGLENBQVNqQyxLQUFWLENBQXJCO0FBQUEsS0FWZjtBQVdJLGFBQVMsTUFYYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESCxHQWtCTyxNQUFDLGtFQUFEO0FBQWtCLFNBQUssRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJaLENBSkosQ0FGSixFQTZCSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFFTSxZQUFqQjtBQUErQixTQUFLLEVBQUMsV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBN0JKLENBREosQ0FESjtBQXVDSDs7R0FuR3VCdEIsVTs7S0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4yMjAxNTE5NWM4YjkwYzNlOGNmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIFRleHRGaWVsZCxcclxuICAgIERpYWxvZyxcclxuICAgIERpYWxvZ0FjdGlvbnMsXHJcbiAgICBEaWFsb2dDb250ZW50LFxyXG4gICAgRGlhbG9nQ29udGVudFRleHQsXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIFR5cG9ncmFwaHksXHJcbiAgICBDaXJjdWxhclByb2dyZXNzXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBhdXRoU3RlcHMgfSBmcm9tICcuLi91dGlscy9hdXRoU3RlcHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybURpYWxvZyh7IG9wZW4sIGhhbmRsZURpYWxvZ0Nsb3NlLCBzdHlsZXMgfSkge1xyXG4gICAgY29uc3QgW2luY3JlbWVudCwgc2V0SW5jcmVtZW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NoZWNrSW5wdXQsIHNldENoZWNrSW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGF1dGhTdGVwcztcclxuICAgIGNvbnN0IHRETkEgPSB1c2VSZWYoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldElucHV0KHZhbHVlKVxyXG4gICAgICAgIHZhbHVlLmxlbmd0aCA9PT0gbWVzc2FnZVtpbmNyZW1lbnRdLmxlbmd0aCAmJiBjaGVja1BhdHRlcm4oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluY3JlbWVudFVwID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdGFydCgpO1xyXG4gICAgICAgIHNldEluY3JlbWVudChpbmNyZW1lbnQgKyAxKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KGZhbHNlKTtcclxuICAgICAgICBzZXRJbnB1dCgnJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGJhY2tBbmRSZXNldCA9IChmYWlsZWQpID0+IHtcclxuICAgICAgICBpZiAoZmFpbGVkKSB7XHJcbiAgICAgICAgICAgIHNldElucHV0KCdXaG9vcHMhIFNvbWV0aGluZyB3aGVuIHdyb25nLCBwbGVhc2UgYmFjay1vdXQgYW5kIHRyeSBhZ2FpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0RE5BLmN1cnJlbnQucmVzZXQoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KGZhbHNlKTtcclxuICAgICAgICBzZXRJbmNyZW1lbnQoMCk7XHJcbiAgICAgICAgaGFuZGxlRGlhbG9nQ2xvc2UoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrUGF0dGVybiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0RE5BLmN1cnJlbnQuc3RvcCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdHlwaW5nUGF0dGVybiA9IGF3YWl0IHRETkEuY3VycmVudC5nZXRUeXBpbmdQYXR0ZXJuKHtcclxuICAgICAgICAgICAgdHlwZTogMSxcclxuICAgICAgICAgICAgdGV4dDogaW5wdXRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBpbmdQYXR0ZXJuKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvdHlwaW5nLWRuYS9zaWdudXAnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdHlwaW5nUGF0dGVybiB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgcmVzLnN0YXR1cyA9PT0gMjAwICYmIGhhbmRsZUluY3JlbWVudFVwKHJlcylcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRETkEuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0RE5BLmN1cnJlbnQgPSBuZXcgVHlwaW5nRE5BKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RETkFdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXtiYWNrQW5kUmVzZXR9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJmb3JtLWRpYWxvZy10aXRsZVwiPjxpbWcgd2lkdGg9XCIyMDBcIiBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vQXJjaGl2YWxkaS80d2hlZWx6L2Jsb2IvbWFzdGVyL2NsaWVudC9zcmMvaW1hZ2VzL1Nob3BwZWRUeXBpbmdETkEucG5nP3Jhdz10cnVlXCIgLz48L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPXtzdHlsZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG8gZW5zdXJlIHRoZSBoaWdoZXN0IGxldmVsIG9mIHNlY3VyaXR5LCB3ZSBhcmUgdXNpbmcgYSB0ZWNobm9sb2d5IHRoYXQgd2lsbCB0ZXN0IHdobyB5b3UgYXJlIGJ5IHRoZSB3YXkgeW91IHR5cGUhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJib2R5MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5jcmVtZW50IDwgbWVzc2FnZS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSB0eXBlIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJyB9fT4odHlwb3MgYWNjZXB0ZWQpPC9zcGFuPjoge21lc3NhZ2VbaW5jcmVtZW50XS5zdWJzdHJpbmcoMCwgaW5wdXQubGVuZ3RoKX08c3BhbiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnIzAwODFjYicsIGJvcmRlclJhZGl1czogJzJweCcgfX0+e21lc3NhZ2VbaW5jcmVtZW50XS5zdWJzdHJpbmcoaW5wdXQubGVuZ3RoLCBtZXNzYWdlW2luY3JlbWVudF0ubGVuZ3RoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR5cGUgTWVzc2FnZSBIZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgc3BlbGxDaGVjazogJ2ZhbHNlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlSW5wdXRDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2JhY2tBbmRSZXNldH0gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR28gQmFja1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9