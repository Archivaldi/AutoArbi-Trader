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
      logo = _useStyles.logo,
      formControl = _useStyles.formControl;

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
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: brand,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",
    alt: "logo",
    className: logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: auto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, "auto"), " ", __jsx("span", {
    className: arbiTrader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 62,
      columnNumber: 25
    }
  }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, landing)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
    className: buttons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 78,
      columnNumber: 29
    }
  }, "Go Back"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "large",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 90,
      columnNumber: 33
    }
  }, "Buying"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    variant: "outlined",
    className: classes.formControl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], {
    htmlFor: "outlined-age-native-simple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }, "Age"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    "native": true //   value={state.age}
    //   onChange={handleChange}
    ,
    label: "Age",
    inputProps: {
      name: 'age',
      id: 'outlined-age-native-simple'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 37
    }
  }, __jsx("option", {
    "aria-label": "None",
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 41
    }
  }), __jsx("option", {
    value: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 41
    }
  }, "Ten"), __jsx("option", {
    value: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  }, "Twenty"), __jsx("option", {
    value: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
    }
  }, "Thirty")))))));
}

_s(LoginCard, "ziDMLRUdN7jVHcx/0GD88o7tjqA=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5DYXJkLmpzIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0eWxlcyIsImxhbmRpbmciLCJhdXRoU3RlcHMiLCJhcHBTY3JpcHQiLCJyb290IiwiYnJhbmQiLCJhdXRvIiwiYXJiaVRyYWRlciIsImJ1dHRvbnMiLCJsb2dvIiwiZm9ybUNvbnRyb2wiLCJ1c2VTdGF0ZSIsInVzZXJSb2xlIiwic2V0VXNlclJvbGUiLCJhdXRoRGlhbG9nT3BlbiIsInNldEF1dGhEaWFsb2dPcGVuIiwiaGFuZGxlRGlhbG9nT3BlbiIsImhhbmRsZURpYWxvZ0Nsb3NlIiwiaGFuZGxlVXNlclNlbGVjdGlvbiIsInVzZXIiLCJ1c2VFZmZlY3QiLCJjbGFzc2VzIiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFBQSxNQUNyQ0MsT0FEcUMsR0FDekJDLDBEQUFTLENBQUNDLFNBRGUsQ0FDckNGLE9BRHFDOztBQUFBLG1CQVV6Q0QsU0FBUyxFQVZnQztBQUFBLE1BR3pDSSxJQUh5QyxjQUd6Q0EsSUFIeUM7QUFBQSxNQUl6Q0MsS0FKeUMsY0FJekNBLEtBSnlDO0FBQUEsTUFLekNDLElBTHlDLGNBS3pDQSxJQUx5QztBQUFBLE1BTXpDQyxVQU55QyxjQU16Q0EsVUFOeUM7QUFBQSxNQU96Q0MsT0FQeUMsY0FPekNBLE9BUHlDO0FBQUEsTUFRekNDLElBUnlDLGNBUXpDQSxJQVJ5QztBQUFBLE1BU3pDQyxXQVR5QyxjQVN6Q0EsV0FUeUM7O0FBVTdCOztBQVY2QixrQkFXYkMsc0RBQVEsQ0FBQyxJQUFELENBWEs7QUFBQSxNQVd0Q0MsUUFYc0M7QUFBQSxNQVc1QkMsV0FYNEI7O0FBQUEsbUJBWURGLHNEQUFRLENBQUMsS0FBRCxDQVpQO0FBQUEsTUFZdENHLGNBWnNDO0FBQUEsTUFZdEJDLGlCQVpzQjs7QUFjN0MsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCRCxxQkFBaUIsQ0FBQyxJQUFELENBQWpCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUJGLHFCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDQUYsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNILEdBSEQ7O0FBS0EsTUFBTUssbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxJQUFELEVBQVU7QUFDbENOLGVBQVcsQ0FBQ00sSUFBRCxDQUFYO0FBQ0gsR0FGRDs7QUFJQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pSLFlBQVEsS0FBSyxRQUFiLElBQXlCSSxnQkFBZ0IsRUFBekM7QUFDSCxHQUZRLEVBRU4sQ0FBQ0osUUFBRCxDQUZNLENBQVQ7QUFJQSxTQUNJLG1FQUNJLE1BQUMsdURBQUQ7QUFDSSxRQUFJLEVBQUVFLGNBRFY7QUFFSSxxQkFBaUIsRUFBRUcsaUJBRnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUtJLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLEVBQUViLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUMsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLHFHQUFUO0FBQStHLE9BQUcsRUFBQyxNQUFuSDtBQUEwSCxhQUFTLEVBQUVJLElBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsVUFBTSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUVILElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixPQUN1QztBQUFNLGFBQVMsRUFBRUMsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEdkMsQ0FGSixDQURKLEVBT0tLLFFBQVEsSUFBSSxPQUFaLEdBQ0csTUFBQywyREFBRDtBQUNJLFNBQUssRUFBQyxXQURWO0FBRUksTUFBRSxFQUFDLG1CQUZQO0FBR0ksU0FBSyxFQUFDLGdCQUhWO0FBSUksWUFBUSxNQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxHQVNPLE1BQUMsNERBQUQ7QUFBWSxTQUFLLEVBQUMsZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLWCxPQURMLENBaEJaLENBREosRUFzQkksTUFBQyw2REFBRDtBQUFhLGFBQVMsRUFBRU8sT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSSxRQUFRLElBQUksT0FBWixHQUNHLG1FQUNJLE1BQUMsd0RBQUQ7QUFDSSxRQUFJLEVBQUMsT0FEVDtBQUVJLFNBQUssRUFBQyxXQUZWO0FBR0ksV0FBTyxFQUFFO0FBQUEsYUFBTU0sbUJBQW1CLENBQUMsSUFBRCxDQUF6QjtBQUFBLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBTUksTUFBQyx3REFBRDtBQUNJLFFBQUksRUFBQyxPQURUO0FBRUksU0FBSyxFQUFDLFdBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLENBREgsR0FhTyxtRUFDSSxNQUFDLHdEQUFEO0FBQ0ksUUFBSSxFQUFDLE9BRFQ7QUFFSSxTQUFLLEVBQUMsV0FGVjtBQUdJLFdBQU8sRUFBRTtBQUFBLGFBQU1BLG1CQUFtQixDQUFDLE9BQUQsQ0FBekI7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQU1JLE1BQUMsNkRBQUQ7QUFBYSxXQUFPLEVBQUMsVUFBckI7QUFBZ0MsYUFBUyxFQUFFRyxPQUFPLENBQUNYLFdBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLDRCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosRUFFSSxNQUFDLHdEQUFEO0FBQ0ksa0JBREosQ0FFSTtBQUNBO0FBSEo7QUFJSSxTQUFLLEVBQUMsS0FKVjtBQUtJLGNBQVUsRUFBRTtBQUNSWSxVQUFJLEVBQUUsS0FERTtBQUVSQyxRQUFFLEVBQUU7QUFGSSxLQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUk7QUFBUSxrQkFBVyxNQUFuQjtBQUEwQixTQUFLLEVBQUMsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0k7QUFBUSxTQUFLLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBWEosRUFZSTtBQUFRLFNBQUssRUFBRSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSixFQWFJO0FBQVEsU0FBSyxFQUFFLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKLENBRkosQ0FOSixDQWRaLENBdEJKLENBTEosQ0FESjtBQXdFSDs7R0F2R3VCeEIsUzs7S0FBQUEsUztBQXVHdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMjhmNGJiYTMzNzQwYzk2YzA2M2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIENhcmRBY3Rpb25zLFxyXG4gICAgQ2FyZENvbnRlbnQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgU2VsZWN0LFxyXG4gICAgSW5wdXRMYWJlbCxcclxuICAgIEZvcm1Db250cm9sXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgVXNlckF1dGhEaWFsb2cgZnJvbSAnLi9Vc2VyQXV0aERpYWxvZyc7XHJcbmltcG9ydCB7IGF1dGhTdGVwcyB9IGZyb20gJy4uL3V0aWxzL2F1dGhTdGVwcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkNhcmQoeyB1c2VTdHlsZXMgfSkge1xyXG4gICAgY29uc3QgeyBsYW5kaW5nIH0gPSBhdXRoU3RlcHMuYXBwU2NyaXB0O1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHJvb3QsXHJcbiAgICAgICAgYnJhbmQsXHJcbiAgICAgICAgYXV0byxcclxuICAgICAgICBhcmJpVHJhZGVyLFxyXG4gICAgICAgIGJ1dHRvbnMsXHJcbiAgICAgICAgbG9nbyxcclxuICAgICAgICBmb3JtQ29udHJvbFxyXG4gICAgfSA9IHVzZVN0eWxlcygpOztcclxuICAgIGNvbnN0IFt1c2VyUm9sZSwgc2V0VXNlclJvbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbYXV0aERpYWxvZ09wZW4sIHNldEF1dGhEaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEaWFsb2dPcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEF1dGhEaWFsb2dPcGVuKHRydWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURpYWxvZ0Nsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEF1dGhEaWFsb2dPcGVuKGZhbHNlKVxyXG4gICAgICAgIHNldFVzZXJSb2xlKG51bGwpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVzZXJTZWxlY3Rpb24gPSAodXNlcikgPT4ge1xyXG4gICAgICAgIHNldFVzZXJSb2xlKHVzZXIpXHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdXNlclJvbGUgPT09ICdzZWxsZXInICYmIGhhbmRsZURpYWxvZ09wZW4oKVxyXG4gICAgfSwgW3VzZXJSb2xlXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxVc2VyQXV0aERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgb3Blbj17YXV0aERpYWxvZ09wZW59XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVEaWFsb2dDbG9zZT17aGFuZGxlRGlhbG9nQ2xvc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17cm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2JyYW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vQXJjaGl2YWxkaS80d2hlZWx6L2Jsb2IvbWFzdGVyL2NsaWVudC9zcmMvaW1hZ2VzL0F1dG9BcmJpVHJhZGVyTG9nby5wbmc/cmF3PXRydWVcIiBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPXtsb2dvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2F1dG99PmF1dG88L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT17YXJiaVRyYWRlcn0+YXJiaS10cmFkZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlclJvbGUgPT0gXCJidXllclwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLXJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHJhbnNhY3Rpb24gSURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYW5kaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBjbGFzc05hbWU9e2J1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyUm9sZSA9PSBcImJ1eWVyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVXNlclNlbGVjdGlvbihudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5HbyBCYWNrPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U3VibWl0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVc2VyU2VsZWN0aW9uKFwiYnV5ZXJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPkJ1eWluZzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwib3V0bGluZWQtYWdlLW5hdGl2ZS1zaW1wbGVcIj5BZ2U8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB2YWx1ZT17c3RhdGUuYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhZ2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnb3V0bGluZWQtYWdlLW5hdGl2ZS1zaW1wbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBhcmlhLWxhYmVsPVwiTm9uZVwiIHZhbHVlPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezEwfT5UZW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezIwfT5Ud2VudHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezMwfT5UaGlydHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9