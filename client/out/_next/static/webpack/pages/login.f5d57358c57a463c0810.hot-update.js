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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      input = _useState3[0],
      setInput = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(message[increment])),
      highlighted = _useState4[0],
      setHighlighted = _useState4[1];

  var handleInputChange = function handleInputChange(value) {
    setInput(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(value));
  };

  var handleIncrementUp = function handleIncrementUp() {
    tDNA.current.start();
    setIncrement(increment + 1);
    setCheckInput(false);
    setInput([]);
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

_s(FormDialog, "s34RrjsAplCIBtjY9DZZnX4clGM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsInN0eWxlcyIsInRETkEiLCJ1c2VSZWYiLCJtZXNzYWdlIiwiYXV0aFN0ZXBzIiwidXNlU3RhdGUiLCJpbmNyZW1lbnQiLCJzZXRJbmNyZW1lbnQiLCJjaGVja0lucHV0Iiwic2V0Q2hlY2tJbnB1dCIsImlucHV0Iiwic2V0SW5wdXQiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUluY3JlbWVudFVwIiwiY3VycmVudCIsInN0YXJ0IiwiYmFja0FuZFJlc2V0IiwiZmFpbGVkIiwicmVzZXQiLCJjaGVja1BhdHRlcm4iLCJzdG9wIiwiZ2V0VHlwaW5nUGF0dGVybiIsInR5cGUiLCJ0ZXh0IiwidHlwaW5nUGF0dGVybiIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsImhlYWRlcnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJzdGF0dXMiLCJ1c2VFZmZlY3QiLCJUeXBpbmdETkEiLCJsZW5ndGgiLCJjb2xvciIsInNsaWNlIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImpvaW4iLCJzcGVsbENoZWNrIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTtBQUVlLFNBQVNBLFVBQVQsT0FBeUQ7QUFBQTs7QUFBQSxNQUFuQ0MsSUFBbUMsUUFBbkNBLElBQW1DO0FBQUEsTUFBN0JDLGlCQUE2QixRQUE3QkEsaUJBQTZCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQ3BFLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sRUFBbkI7QUFEb0UsTUFFNURDLE9BRjRELEdBRWhEQywwREFG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T0FIWDtBQUlJLE1BQUUsRUFBQyxNQUpQO0FBS0ksU0FBSyxFQUFDLG1CQUxWO0FBTUksU0FBSyxFQUFDLFdBTlY7QUFPSSxTQUFLLEVBQUUvQixLQUFLLENBQUNvQyxJQUFOLENBQVcsRUFBWCxDQVBYO0FBUUksY0FBVSxFQUFFO0FBQUVDLGdCQUFVLEVBQUU7QUFBZCxLQVJoQjtBQVNJLFlBQVEsRUFBRXZDLFVBVGQ7QUFVSSxZQUFRLEVBQUUsa0JBQUF3QyxDQUFDO0FBQUEsYUFBSWxDLGlCQUFpQixDQUFDa0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNsQyxLQUFWLENBQXJCO0FBQUEsS0FWZjtBQVdJLGFBQVMsTUFYYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESCxHQWtCTyxNQUFDLGtFQUFEO0FBQWtCLFNBQUssRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJaLENBSkosQ0FGSixFQTZCSSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFFSSxZQUFqQjtBQUErQixTQUFLLEVBQUMsV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBN0JKLENBREosQ0FESjtBQXVDSDs7R0FuR3VCdEIsVTs7S0FBQUEsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5mNWQ1NzM1OGM1N2E0NjNjMDgxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIFRleHRGaWVsZCxcclxuICAgIERpYWxvZyxcclxuICAgIERpYWxvZ0FjdGlvbnMsXHJcbiAgICBEaWFsb2dDb250ZW50LFxyXG4gICAgRGlhbG9nQ29udGVudFRleHQsXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIFR5cG9ncmFwaHksXHJcbiAgICBDaXJjdWxhclByb2dyZXNzXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBhdXRoU3RlcHMgfSBmcm9tICcuLi91dGlscy9hdXRoU3RlcHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybURpYWxvZyh7IG9wZW4sIGhhbmRsZURpYWxvZ0Nsb3NlLCBzdHlsZXMgfSkge1xyXG4gICAgY29uc3QgdEROQSA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSBhdXRoU3RlcHM7XHJcbiAgICBjb25zdCBbaW5jcmVtZW50LCBzZXRJbmNyZW1lbnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY2hlY2tJbnB1dCwgc2V0Q2hlY2tJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoWy4uLm1lc3NhZ2VbaW5jcmVtZW50XV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0SW5wdXQoWy4uLnZhbHVlXSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVJbmNyZW1lbnRVcCA9ICgpID0+IHtcclxuICAgICAgICB0RE5BLmN1cnJlbnQuc3RhcnQoKTtcclxuICAgICAgICBzZXRJbmNyZW1lbnQoaW5jcmVtZW50ICsgMSk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5wdXQoW10pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBiYWNrQW5kUmVzZXQgPSAoZmFpbGVkKSA9PiB7XHJcbiAgICAgICAgaWYgKGZhaWxlZCkge1xyXG4gICAgICAgICAgICBzZXRJbnB1dCgnV2hvb3BzISBTb21ldGhpbmcgd2hlbiB3cm9uZywgcGxlYXNlIGJhY2stb3V0IGFuZCB0cnkgYWdhaW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnJlc2V0KCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dChmYWxzZSk7XHJcbiAgICAgICAgc2V0SW5jcmVtZW50KDApO1xyXG4gICAgICAgIGhhbmRsZURpYWxvZ0Nsb3NlKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja1BhdHRlcm4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdEROQS5jdXJyZW50LnN0b3AoKTtcclxuICAgICAgICBzZXRDaGVja0lucHV0KHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHR5cGluZ1BhdHRlcm4gPSBhd2FpdCB0RE5BLmN1cnJlbnQuZ2V0VHlwaW5nUGF0dGVybih7XHJcbiAgICAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgICAgIHRleHQ6IGlucHV0XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codHlwaW5nUGF0dGVybik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3R5cGluZy1kbmEvc2lnbnVwJywge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHR5cGluZ1BhdHRlcm4gfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMgPT09IDIwMCAmJiBoYW5kbGVJbmNyZW1lbnRVcChyZXMpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0RE5BLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdEROQS5jdXJyZW50ID0gbmV3IFR5cGluZ0ROQSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFt0RE5BXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxEaWFsb2cgb3Blbj17b3Blbn0gb25DbG9zZT17YmFja0FuZFJlc2V0fSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiZm9ybS1kaWFsb2ctdGl0bGVcIj48aW1nIHdpZHRoPVwiMjAwXCIgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2hpdmFsZGkvNHdoZWVsei9ibG9iL21hc3Rlci9jbGllbnQvc3JjL2ltYWdlcy9TaG9wcGVkVHlwaW5nRE5BLnBuZz9yYXc9dHJ1ZVwiIC8+PC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17c3R5bGVzfT5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvIGVuc3VyZSB0aGUgaGlnaGVzdCBsZXZlbCBvZiBzZWN1cml0eSwgd2UgYXJlIHVzaW5nIGEgdGVjaG5vbG9neSB0aGF0IHdpbGwgdGVzdCB3aG8geW91IGFyZSBieSB0aGUgd2F5IHlvdSB0eXBlIVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiYm9keTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2luY3JlbWVudCA8IG1lc3NhZ2UubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgdHlwZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KScgfX0+KHR5cG9zIGFjY2VwdGVkKTwvc3Bhbj46IHtoaWdobGlnaHRlZC5zbGljZSgwLCBpbnB1dC5sZW5ndGgpfTxzcGFuIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjMDA4MWNiJywgYm9yZGVyUmFkaXVzOiAnMnB4JyB9fT57aGlnaGxpZ2h0ZWQuc2xpY2UoaW5wdXQubGVuZ3RoLCBoaWdobGlnaHRlZC5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHlwZSBNZXNzYWdlIEhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dC5qb2luKCcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBzcGVsbENoZWNrOiAnZmFsc2UnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVJbnB1dENoYW5nZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cInNlY29uZGFyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17YmFja0FuZFJlc2V0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=