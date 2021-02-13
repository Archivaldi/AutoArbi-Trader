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
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: brand,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",
    alt: "logo",
    className: logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: auto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, "auto"), " ", __jsx("span", {
    className: arbiTrader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 60,
      columnNumber: 25
    }
  }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, landing)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: buttons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 76,
      columnNumber: 29
    }
  }, "Go Back"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "large",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 88,
      columnNumber: 33
    }
  }, "Buying"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    "native": true // value={state.age}
    // onChange={handleChange}
    ,
    label: "Age",
    inputProps: {
      name: 'age',
      id: 'outlined-age-native-simple'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 33
    }
  }, __jsx("option", {
    "aria-label": "None",
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 37
    }
  }), __jsx("option", {
    value: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 37
    }
  }, "Ten"), __jsx("option", {
    value: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  }, "Twenty"), __jsx("option", {
    value: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 37
    }
  }, "Thirty"))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5DYXJkLmpzIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0eWxlcyIsImxhbmRpbmciLCJhdXRoU3RlcHMiLCJhcHBTY3JpcHQiLCJyb290IiwiYnJhbmQiLCJhdXRvIiwiYXJiaVRyYWRlciIsImJ1dHRvbnMiLCJsb2dvIiwidXNlU3RhdGUiLCJ1c2VyUm9sZSIsInNldFVzZXJSb2xlIiwiYXV0aERpYWxvZ09wZW4iLCJzZXRBdXRoRGlhbG9nT3BlbiIsImhhbmRsZURpYWxvZ09wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZVVzZXJTZWxlY3Rpb24iLCJ1c2VyIiwidXNlRWZmZWN0IiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFBQSxNQUNyQ0MsT0FEcUMsR0FDekJDLDBEQUFTLENBQUNDLFNBRGUsQ0FDckNGLE9BRHFDOztBQUFBLG1CQVN6Q0QsU0FBUyxFQVRnQztBQUFBLE1BR3pDSSxJQUh5QyxjQUd6Q0EsSUFIeUM7QUFBQSxNQUl6Q0MsS0FKeUMsY0FJekNBLEtBSnlDO0FBQUEsTUFLekNDLElBTHlDLGNBS3pDQSxJQUx5QztBQUFBLE1BTXpDQyxVQU55QyxjQU16Q0EsVUFOeUM7QUFBQSxNQU96Q0MsT0FQeUMsY0FPekNBLE9BUHlDO0FBQUEsTUFRekNDLElBUnlDLGNBUXpDQSxJQVJ5Qzs7QUFTN0I7O0FBVDZCLGtCQVViQyxzREFBUSxDQUFDLElBQUQsQ0FWSztBQUFBLE1BVXRDQyxRQVZzQztBQUFBLE1BVTVCQyxXQVY0Qjs7QUFBQSxtQkFXREYsc0RBQVEsQ0FBQyxLQUFELENBWFA7QUFBQSxNQVd0Q0csY0FYc0M7QUFBQSxNQVd0QkMsaUJBWHNCOztBQWE3QyxNQUFNQyxnQkFBZ0Is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QURKLENBRUk7QUFDQTtBQUhKO0FBSUksU0FBSyxFQUFDLEtBSlY7QUFLSSxjQUFVLEVBQUU7QUFDUkcsVUFBSSxFQUFFLEtBREU7QUFFUkMsUUFBRSxFQUFFO0FBRkksS0FMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVJO0FBQVEsa0JBQVcsTUFBbkI7QUFBMEIsU0FBSyxFQUFDLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVdJO0FBQVEsU0FBSyxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVhKLEVBWUk7QUFBUSxTQUFLLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosRUFhSTtBQUFRLFNBQUssRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiSixDQU5KLENBZFosQ0F0QkosQ0FMSixDQURKO0FBcUVIOztHQW5HdUJ0QixTOztLQUFBQSxTO0FBbUd2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi44ZmFlZTZhMjUzMjQ1MDYwNzIyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBDYXJkLFxyXG4gICAgQ2FyZEFjdGlvbnMsXHJcbiAgICBDYXJkQ29udGVudCxcclxuICAgIEJ1dHRvbixcclxuICAgIFR5cG9ncmFwaHksXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBTZWxlY3QsXHJcbiAgICBJbnB1dExhYmVsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgVXNlckF1dGhEaWFsb2cgZnJvbSAnLi9Vc2VyQXV0aERpYWxvZyc7XHJcbmltcG9ydCB7IGF1dGhTdGVwcyB9IGZyb20gJy4uL3V0aWxzL2F1dGhTdGVwcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkNhcmQoeyB1c2VTdHlsZXMgfSkge1xyXG4gICAgY29uc3QgeyBsYW5kaW5nIH0gPSBhdXRoU3RlcHMuYXBwU2NyaXB0O1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHJvb3QsXHJcbiAgICAgICAgYnJhbmQsXHJcbiAgICAgICAgYXV0byxcclxuICAgICAgICBhcmJpVHJhZGVyLFxyXG4gICAgICAgIGJ1dHRvbnMsXHJcbiAgICAgICAgbG9nb1xyXG4gICAgfSA9IHVzZVN0eWxlcygpOztcclxuICAgIGNvbnN0IFt1c2VyUm9sZSwgc2V0VXNlclJvbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbYXV0aERpYWxvZ09wZW4sIHNldEF1dGhEaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEaWFsb2dPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEF1dGhEaWFsb2dPcGVuKHRydWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEF1dGhEaWFsb2dPcGVuKGZhbHNlKVxyXG4gICAgICAgIHNldFVzZXJSb2xlKG51bGwpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVzZXJTZWxlY3Rpb24gPSAodXNlcikgPT4ge1xyXG4gICAgICAgIHNldFVzZXJSb2xlKHVzZXIpXHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdXNlclJvbGUgPT09ICdzZWxsZXInICYmIGhhbmRsZURpYWxvZ09wZW4oKVxyXG4gICAgfSwgW3VzZXJSb2xlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxVc2VyQXV0aERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgb3Blbj17YXV0aERpYWxvZ09wZW59XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVEaWFsb2dDbG9zZT17aGFuZGxlRGlhbG9nQ2xvc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17cm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2JyYW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vQXJjaGl2YWxkaS80d2hlZWx6L2Jsb2IvbWFzdGVyL2NsaWVudC9zcmMvaW1hZ2VzL0F1dG9BcmJpVHJhZGVyTG9nby5wbmc/cmF3PXRydWVcIiBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPXtsb2dvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2F1dG99PmF1dG88L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT17YXJiaVRyYWRlcn0+YXJiaS10cmFkZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlclJvbGUgPT0gXCJidXllclwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHJhbnNhY3Rpb24gSURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBjbGFzc05hbWU9e2J1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyUm9sZSA9PSBcImJ1eWVyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVXNlclNlbGVjdGlvbihudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5HbyBCYWNrPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U3VibWl0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU2VsZWN0aW9uKFwiYnV5ZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPkJ1eWluZzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtzdGF0ZS5hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2FnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogJ291dGxpbmVkLWFnZS1uYXRpdmUtc2ltcGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gYXJpYS1sYWJlbD1cIk5vbmVcIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEwfT5UZW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MjB9PlR3ZW50eTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXszMH0+VGhpcnR5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==