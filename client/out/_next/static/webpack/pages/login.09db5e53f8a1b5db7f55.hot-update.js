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
  }, "Login"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "large",
    color: "secondary",
    onClick: function onClick() {
      return handleUserSelection("seller");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 33
    }
  }, "Sign Up")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5DYXJkLmpzIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0eWxlcyIsImxhbmRpbmciLCJhdXRoU3RlcHMiLCJhcHBTY3JpcHQiLCJyb290IiwiYnJhbmQiLCJhdXRvIiwiYXJiaVRyYWRlciIsImJ1dHRvbnMiLCJsb2dvIiwidXNlU3RhdGUiLCJ1c2VyUm9sZSIsInNldFVzZXJSb2xlIiwiYXV0aERpYWxvZ09wZW4iLCJzZXRBdXRoRGlhbG9nT3BlbiIsImhhbmRsZURpYWxvZ09wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZVVzZXJTZWxlY3Rpb24iLCJ1c2VyIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFBQSxNQUNyQ0MsT0FEcUMsR0FDekJDLDBEQUFTLENBQUNDLFNBRGUsQ0FDckNGLE9BRHFDOztBQUFBLG1CQVN6Q0QsU0FBUyxFQVRnQztBQUFBLE1BR3pDSSxJQUh5QyxjQUd6Q0EsSUFIeUM7QUFBQSxNQUl6Q0MsS0FKeUMsY0FJekNBLEtBSnlDO0FBQUEsTUFLekNDLElBTHlDLGNBS3pDQSxJQUx5QztBQUFBLE1BTXpDQyxVQU55QyxjQU16Q0EsVUFOeUM7QUFBQSxNQU96Q0MsT0FQeUMsY0FPekNBLE9BUHlDO0FBQUEsTUFRekNDLElBUnlDLGNBUXpDQSxJQVJ5Qzs7QUFTN0I7O0FBVDZCLGtCQVViQyxzREFBUSxDQUFDLElBQUQsQ0FWSztBQUFBLE1BVXRDQyxRQVZzQztBQUFBLE1BVTVCQyxXQVY0Qjs7QUFBQSxtQkFXREYsc0RBQVEsQ0FBQyxLQUFELENBWFA7QUFBQSxNQVd0Q0csY0FYc0M7QUFBQSxNQVd0QkMsaUJBWHNCOztBQWE3QyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEs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O0FBRUksU0FBSyxFQUFDLFdBRlY7QUFHSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxtQkFBbUIsQ0FBQyxRQUFELENBQXpCO0FBQUEsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosQ0FkWixDQXRCSixDQUxKLENBREo7QUEyREg7O0dBekZ1QmxCLFM7O0tBQUFBLFM7QUF5RnZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjA5ZGI1ZTUzZjhhMWI1ZGI3ZjU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIENhcmQsXHJcbiAgICBDYXJkQWN0aW9ucyxcclxuICAgIENhcmRDb250ZW50LFxyXG4gICAgQnV0dG9uLFxyXG4gICAgVHlwb2dyYXBoeSxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIFNlbGVjdFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IFVzZXJBdXRoRGlhbG9nIGZyb20gJy4vVXNlckF1dGhEaWFsb2cnO1xyXG5pbXBvcnQgeyBhdXRoU3RlcHMgfSBmcm9tICcuLi91dGlscy9hdXRoU3RlcHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5DYXJkKHsgdXNlU3R5bGVzIH0pIHtcclxuICAgIGNvbnN0IHsgbGFuZGluZyB9ID0gYXV0aFN0ZXBzLmFwcFNjcmlwdDtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICByb290LFxyXG4gICAgICAgIGJyYW5kLFxyXG4gICAgICAgIGF1dG8sXHJcbiAgICAgICAgYXJiaVRyYWRlcixcclxuICAgICAgICBidXR0b25zLFxyXG4gICAgICAgIGxvZ29cclxuICAgIH0gPSB1c2VTdHlsZXMoKTs7XHJcbiAgICBjb25zdCBbdXNlclJvbGUsIHNldFVzZXJSb2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2F1dGhEaWFsb2dPcGVuLCBzZXRBdXRoRGlhbG9nT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGlhbG9nT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBzZXRBdXRoRGlhbG9nT3Blbih0cnVlKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRBdXRoRGlhbG9nT3BlbihmYWxzZSlcclxuICAgICAgICBzZXRVc2VyUm9sZShudWxsKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVVc2VyU2VsZWN0aW9uID0gKHVzZXIpID0+IHtcclxuICAgICAgICBzZXRVc2VyUm9sZSh1c2VyKVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHVzZXJSb2xlID09PSAnc2VsbGVyJyAmJiBoYW5kbGVEaWFsb2dPcGVuKClcclxuICAgIH0sIFt1c2VyUm9sZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VXNlckF1dGhEaWFsb2dcclxuICAgICAgICAgICAgICAgIG9wZW49e2F1dGhEaWFsb2dPcGVufVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlRGlhbG9nQ2xvc2U9e2hhbmRsZURpYWxvZ0Nsb3NlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3Jvb3R9PlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXticmFuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2hpdmFsZGkvNHdoZWVsei9ibG9iL21hc3Rlci9jbGllbnQvc3JjL2ltYWdlcy9BdXRvQXJiaVRyYWRlckxvZ28ucG5nP3Jhdz10cnVlXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT17bG9nb30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgbm9XcmFwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXthdXRvfT5hdXRvPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9e2FyYmlUcmFkZXJ9PmFyYmktdHJhZGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJSb2xlID09IFwiYnV5ZXJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1yZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRyYW5zYWN0aW9uIElEXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgY2xhc3NOYW1lPXtidXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlclJvbGUgPT0gXCJidXllclwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVzZXJTZWxlY3Rpb24obnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+R28gQmFjazwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlN1Ym1pdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVXNlclNlbGVjdGlvbihcImJ1eWVyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5Mb2dpbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU2VsZWN0aW9uKFwic2VsbGVyXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TaWduIFVwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==