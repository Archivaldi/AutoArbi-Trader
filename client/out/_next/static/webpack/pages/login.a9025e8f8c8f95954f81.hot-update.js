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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_authSteps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/authSteps */ "./src/utils/authSteps.js");




var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\UserAuthDialog.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function FormDialog(_ref) {
  _s();

  var open = _ref.open,
      handleDialogClose = _ref.handleDialogClose,
      styles = _ref.styles;
  var tDNA = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var message = _utils_authSteps__WEBPACK_IMPORTED_MODULE_5__["authSteps"].message;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      increment = _useState[0],
      setIncrement = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      checkInput = _useState2[0],
      setCheckInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      input = _useState3[0],
      setInput = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(message[increment])),
      highlighted = _useState4[0],
      setHighlighted = _useState4[1];

  var handleInputChange = function handleInputChange(value) {
    setInput.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(value));
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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
    open: open,
    onClose: backAndReset,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogTitle"], {
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
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContent"], {
    className: styles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type!"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    component: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, increment < message.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, "Please type ", __jsx("span", {
    style: {
      color: 'rgba(255, 255, 255, 0.7)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 45
    }
  }, "(typos accepted)"), ": ", highlighted.slice(0, input.length), __jsx("span", {
    style: {
      background: '#0081cb',
      borderRadius: '2px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 158
    }
  }, highlighted.slice(input.length, highlighted.length)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    autoFocus: true,
    autoComplete: "off",
    margin: "dense",
    id: "name",
    label: "Type Message Here",
    color: "secondary",
    value: input.join(''),
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
  })) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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

_s(FormDialog, "Ogj6wqoMA3HdesiLH/X2h/TLm24=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsInN0eWxlcyIsInRETkEiLCJ1c2VSZWYiLCJtZXNzYWdlIiwiYXV0aFN0ZXBzIiwidXNlU3RhdGUiLCJpbmNyZW1lbnQiLCJzZXRJbmNyZW1lbnQiLCJjaGVja0lucHV0Iiwic2V0Q2hlY2tJbnB1dCIsImlucHV0Iiwic2V0SW5wdXQiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUluY3JlbWVudFVwIiwiY3VycmVudCIsInN0YXJ0IiwiYmFja0FuZFJlc2V0IiwiZmFpbGVkIiwicmVzZXQiLCJjaGVja1BhdHRlcm4iLCJzdG9wIiwiZ2V0VHlwaW5nUGF0dGVybiIsInR5cGUiLCJ0ZXh0IiwidHlwaW5nUGF0dGVybiIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImhlYWRlcnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJ1c2VFZmZlY3QiLCJUeXBpbmdETkEiLCJsZW5ndGgiLCJjb2xvciIsInNsaWNlIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImpvaW4iLCJzcGVsbENoZWNrIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUVlLFNBQVNBLFVBQVQsT0FBeUQ7QUFBQTs7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsTUFBN0JDLGlCQUE2QixRQUE3QkEsaUJBQTZCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQ3BFLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sRUFBbkI7QUFEb0UsTUFFNURDLE9BRjRELEdBRWhEQywwREFG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QUFJSSxNQUFFLEVBQUMsTUFKUDtBQUtJLFNBQUssRUFBQyxtQkFMVjtBQU1JLFNBQUssRUFBQyxXQU5WO0FBT0ksU0FBSyxFQUFFL0IsS0FBSyxDQUFDb0MsSUFBTixDQUFXLEVBQVgsQ0FQWDtBQVFJLGNBQVUsRUFBRTtBQUFFQyxnQkFBVSxFQUFFO0FBQWQsS0FSaEI7QUFTSSxZQUFRLEVBQUV2QyxVQVRkO0FBVUksWUFBUSxFQUFFLGtCQUFBd0MsQ0FBQztBQUFBLGFBQUlsQyxpQkFBaUIsQ0FBQ2tDLENBQUMsQ0FBQ0MsTUFBRixDQUFTbEMsS0FBVixDQUFyQjtBQUFBLEtBVmY7QUFXSSxhQUFTLE1BWGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREgsR0FrQk8sTUFBQyxrRUFBRDtBQUFrQixTQUFLLEVBQUMsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CWixDQUpKLENBRkosRUE2QkksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFRLFdBQU8sRUFBRUksWUFBakI7QUFBK0IsU0FBSyxFQUFDLFdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixDQTdCSixDQURKLENBREo7QUF1Q0g7O0dBbkd1QnRCLFU7O0tBQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYTkwMjVlOGY4YzhmOTU5NTRmODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBEaWFsb2csXHJcbiAgICBEaWFsb2dBY3Rpb25zLFxyXG4gICAgRGlhbG9nQ29udGVudCxcclxuICAgIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgQ2lyY3VsYXJQcm9ncmVzc1xyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgYXV0aFN0ZXBzIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFN0ZXBzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1EaWFsb2coeyBvcGVuLCBoYW5kbGVEaWFsb2dDbG9zZSwgc3R5bGVzIH0pIHtcclxuICAgIGNvbnN0IHRETkEgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gYXV0aFN0ZXBzO1xyXG4gICAgY29uc3QgW2luY3JlbWVudCwgc2V0SW5jcmVtZW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NoZWNrSW5wdXQsIHNldENoZWNrSW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaGlnaGxpZ2h0ZWQsIHNldEhpZ2hsaWdodGVkXSA9IHVzZVN0YXRlKFsuLi5tZXNzYWdlW2luY3JlbWVudF1dKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldElucHV0KC4uLnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluY3JlbWVudFVwID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdGFydCgpO1xyXG4gICAgICAgIHNldEluY3JlbWVudChpbmNyZW1lbnQgKyAxKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KGZhbHNlKTtcclxuICAgICAgICBzZXRJbnB1dCgnJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGJhY2tBbmRSZXNldCA9IChmYWlsZWQpID0+IHtcclxuICAgICAgICBpZiAoZmFpbGVkKSB7XHJcbiAgICAgICAgICAgIHNldElucHV0KCdXaG9vcHMhIFNvbWV0aGluZyB3aGVuIHdyb25nLCBwbGVhc2UgYmFjay1vdXQgYW5kIHRyeSBhZ2FpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0RE5BLmN1cnJlbnQucmVzZXQoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KGZhbHNlKTtcclxuICAgICAgICBzZXRJbmNyZW1lbnQoMCk7XHJcbiAgICAgICAgaGFuZGxlRGlhbG9nQ2xvc2UoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrUGF0dGVybiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0RE5BLmN1cnJlbnQuc3RvcCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdHlwaW5nUGF0dGVybiA9IGF3YWl0IHRETkEuY3VycmVudC5nZXRUeXBpbmdQYXR0ZXJuKHtcclxuICAgICAgICAgICAgdHlwZTogMSxcclxuICAgICAgICAgICAgdGV4dDogaW5wdXRcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBpbmdQYXR0ZXJuKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvdHlwaW5nLWRuYS9zaWdudXAnLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdHlwaW5nUGF0dGVybiB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgcmVzLnN0YXR1cyA9PT0gMjAwICYmIGhhbmRsZUluY3JlbWVudFVwKHJlcylcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRETkEuY3VycmVudCkge1xyXG4gICAgICAgICAgICB0RE5BLmN1cnJlbnQgPSBuZXcgVHlwaW5nRE5BKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RETkFdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXtiYWNrQW5kUmVzZXR9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJmb3JtLWRpYWxvZy10aXRsZVwiPjxpbWcgd2lkdGg9XCIyMDBcIiBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vQXJjaGl2YWxkaS80d2hlZWx6L2Jsb2IvbWFzdGVyL2NsaWVudC9zcmMvaW1hZ2VzL1Nob3BwZWRUeXBpbmdETkEucG5nP3Jhdz10cnVlXCIgLz48L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPXtzdHlsZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVG8gZW5zdXJlIHRoZSBoaWdoZXN0IGxldmVsIG9mIHNlY3VyaXR5LCB3ZSBhcmUgdXNpbmcgYSB0ZWNobm9sb2d5IHRoYXQgd2lsbCB0ZXN0IHdobyB5b3UgYXJlIGJ5IHRoZSB3YXkgeW91IHR5cGUhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJib2R5MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5jcmVtZW50IDwgbWVzc2FnZS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSB0eXBlIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJyB9fT4odHlwb3MgYWNjZXB0ZWQpPC9zcGFuPjoge2hpZ2hsaWdodGVkLnNsaWNlKDAsIGlucHV0Lmxlbmd0aCl9PHNwYW4gc3R5bGU9e3sgYmFja2dyb3VuZDogJyMwMDgxY2InLCBib3JkZXJSYWRpdXM6ICcycHgnIH19PntoaWdobGlnaHRlZC5zbGljZShpbnB1dC5sZW5ndGgsIGhpZ2hsaWdodGVkLmxlbmd0aCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUeXBlIE1lc3NhZ2UgSGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0LmpvaW4oJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7IHNwZWxsQ2hlY2s6ICdmYWxzZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NoZWNrSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGhhbmRsZUlucHV0Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtiYWNrQW5kUmVzZXR9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==