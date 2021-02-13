webpackHotUpdate_N_E("pages/login",{

/***/ "./src/components/LoginCard.js":
/*!*************************************!*\
  !*** ./src/components/LoginCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _UserAuthDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserAuthDialog */ "./src/components/UserAuthDialog.js");
/* harmony import */ var _utils_authSteps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/authSteps */ "./src/utils/authSteps.js");
var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\LoginCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function LoginCard(_ref) {
  _s();

  var useStyles = _ref.useStyles;
  var landing = _utils_authSteps__WEBPACK_IMPORTED_MODULE_3__["authSteps"].appScript.landing;

  var _useStyles = useStyles(),
      root = _useStyles.root,
      brand = _useStyles.brand,
      auto = _useStyles.auto,
      arbiTrader = _useStyles.arbiTrader,
      buttons = _useStyles.buttons,
      logo = _useStyles.logo;

  ;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      userRole = _useState[0],
      setUserRole = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      authDialogOpen = _useState2[0],
      setAuthDialogOpen = _useState2[1];

  var handleDialogOpen = function handleDialogOpen() {
    setAuthDialogOpen(true);
  };

  var handleDialogClose = function handleDialogClose() {
    setAuthDialogOpen(false);
    setUserRole(null);
  };

  var handleUserSelection = function handleUserSelection(user) {
    setUserRole(user);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    userRole === 'seller' && handleDialogOpen();
  }, [userRole]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_UserAuthDialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: authDialogOpen,
    handleDialogClose: handleDialogClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: brand,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",
    alt: "logo",
    className: logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: auto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, "auto"), " ", __jsx("span", {
    className: arbiTrader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 64
    }
  }, "arbi-trader"))), userRole == "buyer" ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    color: "secondary",
    id: "standard-required",
    label: "Transaction ID",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, landing)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: buttons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, userRole == "buyer" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "large",
    color: "secondary",
    onClick: function onClick() {
      return handleUserSelection(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, "Go Back"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "large",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }, "Submit")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "large",
    color: "secondary",
    onClick: function onClick() {
      return handleUserSelection("buyer");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, "Buying"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    "native": true,
    value: "none",
    onChange: handleChange,
    inputProps: {
      name: 'age',
      id: 'age-native-simple'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  })))));
}

_s(LoginCard, "wBWLqi4ZYCCPsUWGczd//QF1AZ8=", true);

_c = LoginCard;
;

var _c;

$RefreshReg$(_c, "LoginCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5DYXJkLmpzIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0eWxlcyIsImxhbmRpbmciLCJhdXRoU3RlcHMiLCJhcHBTY3JpcHQiLCJyb290IiwiYnJhbmQiLCJhdXRvIiwiYXJiaVRyYWRlciIsImJ1dHRvbnMiLCJsb2dvIiwidXNlU3RhdGUiLCJ1c2VyUm9sZSIsInNldFVzZXJSb2xlIiwiYXV0aERpYWxvZ09wZW4iLCJzZXRBdXRoRGlhbG9nT3BlbiIsImhhbmRsZURpYWxvZ09wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZVVzZXJTZWxlY3Rpb24iLCJ1c2VyIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFBQSxNQUNyQ0MsT0FEcUMsR0FDekJDLDBEQUFTLENBQUNDLFNBRGUsQ0FDckNGLE9BRHFDOztBQUFBLG1CQVN6Q0QsU0FBUyxFQVRnQztBQUFBLE1BR3pDSSxJQUh5QyxjQUd6Q0EsSUFIeUM7QUFBQSxNQUl6Q0MsS0FKeUMsY0FJekNBLEtBSnlDO0FBQUEsTUFLekNDLElBTHlDLGNBS3pDQSxJQUx5QztBQUFBLE1BTXpDQyxVQU55QyxjQU16Q0EsVUFOeUM7QUFBQSxNQU96Q0MsT0FQeUMsY0FPekNBLE9BUHlDO0FBQUEsTUFRekNDLElBUnlDLGNBUXpDQSxJQVJ5Qzs7QUFTN0I7O0FBVDZCLGtCQVViQyxzREFBUSxDQUFDLElBQUQsQ0FWSztBQUFBLE1BVXRDQyxRQVZzQztBQUFBLE1BVTVCQyxXQVY0Qjs7QUFBQSxtQkFXREYsc0RBQVEsQ0FBQyxLQUFELENBWFA7QUFBQSxNQVd0Q0csY0FYc0M7QUFBQSxNQVd0QkMsaUJBWHNCOztBQWE3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Qyx3REFBRDtBQUNJLGtCQURKO0FBRUksU0FBSyxFQUFDLE1BRlY7QUFHSSxZQUFRLEVBQUVHLFlBSGQ7QUFJSSxjQUFVLEVBQUU7QUFDUkMsVUFBSSxFQUFFLEtBREU7QUFFUkMsUUFBRSxFQUFFO0FBRkksS0FKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLENBZFosQ0F0QkosQ0FMSixDQURKO0FBK0RIOztHQTdGdUJ2QixTOztLQUFBQSxTO0FBNkZ2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5kNWU2NTNmMzhhMDczODliOWYyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBDYXJkLFxyXG4gICAgQ2FyZEFjdGlvbnMsXHJcbiAgICBDYXJkQ29udGVudCxcclxuICAgIEJ1dHRvbixcclxuICAgIFR5cG9ncmFwaHksXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBTZWxlY3RcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBVc2VyQXV0aERpYWxvZyBmcm9tICcuL1VzZXJBdXRoRGlhbG9nJztcclxuaW1wb3J0IHsgYXV0aFN0ZXBzIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFN0ZXBzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luQ2FyZCh7IHVzZVN0eWxlcyB9KSB7XHJcbiAgICBjb25zdCB7IGxhbmRpbmcgfSA9IGF1dGhTdGVwcy5hcHBTY3JpcHQ7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgcm9vdCxcclxuICAgICAgICBicmFuZCxcclxuICAgICAgICBhdXRvLFxyXG4gICAgICAgIGFyYmlUcmFkZXIsXHJcbiAgICAgICAgYnV0dG9ucyxcclxuICAgICAgICBsb2dvXHJcbiAgICB9ID0gdXNlU3R5bGVzKCk7O1xyXG4gICAgY29uc3QgW3VzZXJSb2xlLCBzZXRVc2VyUm9sZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFthdXRoRGlhbG9nT3Blbiwgc2V0QXV0aERpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURpYWxvZ09wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QXV0aERpYWxvZ09wZW4odHJ1ZSlcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGlhbG9nQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QXV0aERpYWxvZ09wZW4oZmFsc2UpXHJcbiAgICAgICAgc2V0VXNlclJvbGUobnVsbClcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXNlclNlbGVjdGlvbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlclJvbGUodXNlcilcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB1c2VyUm9sZSA9PT0gJ3NlbGxlcicgJiYgaGFuZGxlRGlhbG9nT3BlbigpXHJcbiAgICB9LCBbdXNlclJvbGVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFVzZXJBdXRoRGlhbG9nXHJcbiAgICAgICAgICAgICAgICBvcGVuPXthdXRoRGlhbG9nT3Blbn1cclxuICAgICAgICAgICAgICAgIGhhbmRsZURpYWxvZ0Nsb3NlPXtoYW5kbGVEaWFsb2dDbG9zZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtyb290fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnJhbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9BcmNoaXZhbGRpLzR3aGVlbHovYmxvYi9tYXN0ZXIvY2xpZW50L3NyYy9pbWFnZXMvQXV0b0FyYmlUcmFkZXJMb2dvLnBuZz9yYXc9dHJ1ZVwiIGFsdD1cImxvZ29cIiBjbGFzc05hbWU9e2xvZ299IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIG5vV3JhcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YXV0b30+YXV0bzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPXthcmJpVHJhZGVyfT5hcmJpLXRyYWRlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyUm9sZSA9PSBcImJ1eWVyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUcmFuc2FjdGlvbiBJRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zIGNsYXNzTmFtZT17YnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJSb2xlID09IFwiYnV5ZXJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU2VsZWN0aW9uKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPkdvIEJhY2s8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVzZXJTZWxlY3Rpb24oXCJidXllclwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+QnV5aW5nPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ2FnZS1uYXRpdmUtc2ltcGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=