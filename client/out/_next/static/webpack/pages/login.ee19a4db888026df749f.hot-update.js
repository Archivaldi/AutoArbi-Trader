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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _UserAuthDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserAuthDialog */ "./src/components/UserAuthDialog.js");
/* harmony import */ var _utils_authSteps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/authSteps */ "./src/utils/authSteps.js");
/* harmony import */ var _utils_useForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useForm */ "./src/utils/useForm.js");
/* harmony import */ var _utils_validateEmail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/validateEmail */ "./src/utils/validateEmail.js");



var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\LoginCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function LoginCard(_ref) {
  _s();

  var useStyles = _ref.useStyles;
  var _authSteps$appScript = _utils_authSteps__WEBPACK_IMPORTED_MODULE_6__["authSteps"].appScript,
      landing = _authSteps$appScript.landing,
      secondAuthLogin = _authSteps$appScript.secondAuthLogin,
      secondAuthSignUp = _authSteps$appScript.secondAuthSignUp;
  var signUp = _utils_authSteps__WEBPACK_IMPORTED_MODULE_6__["authSteps"].route.signUp;

  var _useStyles = useStyles(),
      root = _useStyles.root,
      brand = _useStyles.brand,
      auto = _useStyles.auto,
      arbiTrader = _useStyles.arbiTrader,
      buttons = _useStyles.buttons,
      logo = _useStyles.logo,
      email = _useStyles.email,
      formControl = _useStyles.formControl,
      selectEmpty = _useStyles.selectEmpty;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      authType = _useState[0],
      setAuthType = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      userRole = _useState2[0],
      setUserRole = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      authDialogOpen = _useState3[0],
      setAuthDialogOpen = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      passwordError = _useState4[0],
      setPasswordError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Error!'),
      errorMessage = _useState5[0],
      setErrorMessage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      apiCall = _useState6[0],
      setApiCall = _useState6[1];

  var _useForm = Object(_utils_useForm__WEBPACK_IMPORTED_MODULE_7__["default"])({
    emailInput: '',
    passwordInput: '',
    passwordInputVerify: ''
  }),
      values = _useForm.values,
      updateValue = _useForm.updateValue;

  var emailInput = values.emailInput,
      passwordInput = values.passwordInput,
      passwordInputVerify = values.passwordInputVerify;

  var handleAuthType = function handleAuthType(selection) {
    setAuthType(selection);
  };

  var handleGoBackReset = function handleGoBackReset() {
    setAuthType(null);
    setApiCall(false);
  };

  var handleSecondFormAuth = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, _yield$res$json, user_id;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(authType === 'signup' && passwordInput !== passwordInputVerify || authType === 'signup' && passwordInputVerify === '' || authType === 'signup' && !userRole || passwordInput === '' || emailInput === '' || !Object(_utils_validateEmail__WEBPACK_IMPORTED_MODULE_8__["validateEmail"])(emailInput))) {
                _context.next = 10;
                break;
              }

              if (passwordError === false) {
                setPasswordError(true);
                setTimeout(function () {
                  setPasswordError(false);
                }, 3000);
              }

              if (authType === 'signup' && passwordInput !== passwordInputVerify) {
                setErrorMessage('Passwords do not match!');
              }

              if (authType === 'signup' && passwordInputVerify === '') {
                setErrorMessage('Re-Enter Password Empty!');
              }

              if (authType === 'signup' && !userRole) {
                setErrorMessage('Transation Role Empty!');
              }

              if (passwordInput === '') {
                setErrorMessage('Password Empty!');
              }

              if (emailInput === '') {
                setErrorMessage('Email Empty!');
              }

              if (!Object(_utils_validateEmail__WEBPACK_IMPORTED_MODULE_8__["validateEmail"])(emailInput)) {
                setErrorMessage('Not a valid Email!');
              }

              _context.next = 26;
              break;

            case 10:
              if (!(authType === 'signup')) {
                _context.next = 23;
                break;
              }

              setApiCall(true);
              console.log("".concat(signUp, "/").concat(userRole));
              _context.next = 15;
              return fetch("".concat(signUp, "/").concat(userRole), {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  emailInput: emailInput,
                  passwordInput: passwordInput
                })
              });

            case 15:
              res = _context.sent;
              _context.next = 18;
              return res.json();

            case 18:
              _yield$res$json = _context.sent;
              user_id = _yield$res$json.user_id;

              if (user_id) {}

              _context.next = 26;
              break;

            case 23:
              console.log("fetch login");
              setApiCall(true);
              setAuthDialogOpen(true);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSecondFormAuth() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_UserAuthDialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    user_id: userID,
    open: authDialogOpen,
    setAuthDialogOpen: setAuthDialogOpen,
    handleGoBackReset: handleGoBackReset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: brand,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",
    alt: "logo",
    className: logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: auto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, "auto"), " ", __jsx("span", {
    className: arbiTrader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 60
    }
  }, "arbi-trader"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, apiCall === false ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, authType === null ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    align: "center",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }, landing) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Snackbar"], {
    open: passwordError,
    onClick: function onClick() {
      return setPasswordError(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 41
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 45
    }
  }, errorMessage)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 41
    }
  }, authType === 'signup' ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 70
    }
  }, secondAuthSignUp) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 104
    }
  }, secondAuthLogin)), __jsx("div", {
    className: email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 41
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    color: "secondary",
    type: "email",
    label: "Email",
    id: "emailInput",
    name: "emailInput",
    value: emailInput,
    onChange: updateValue,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 45
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    color: "secondary",
    type: "password",
    label: "Password",
    id: "passwordInput",
    name: "passwordInput",
    onChange: updateValue,
    value: passwordInput,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 45
    }
  }), authType === 'signup' && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    color: "secondary",
    type: "password",
    label: "Re-Enter Password",
    id: "passwordInputVerify",
    name: "passwordInputVerify",
    onChange: updateValue,
    value: passwordInputVerify,
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 53
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: formControl,
    color: "secondary",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 53
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    value: userRole,
    onChange: function onChange(e) {
      return setUserRole(e.target.value);
    },
    displayEmpty: true,
    className: selectEmpty,
    inputProps: {
      'aria-label': 'Without label'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 57
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 61
    }
  }, "Transaction Role"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "buyer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 61
    }
  }, "Buying"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "seller",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 61
    }
  }, "Selling")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormHelperText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 57
    }
  }, "Transaction Role")))))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardActions"], {
    className: buttons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, authType === null ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    size: "large",
    color: "secondary",
    onClick: function onClick() {
      return handleAuthType('login');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 29
    }
  }, "Logging In"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    size: "large",
    color: "secondary",
    onClick: function onClick() {
      return handleAuthType('signup');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 29
    }
  }, "Signing Up")) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: apiCall,
    size: "large",
    color: "secondary",
    onClick: function onClick() {
      return handleAuthType(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 33
    }
  }, "Go Back"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    disabled: apiCall,
    size: "large",
    color: "secondary",
    onClick: handleSecondFormAuth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 33
    }
  }, authType === 'login' ? "Login" : "Sign Up")))));
}

_s(LoginCard, "DDQfKALmRnPsLG5V/dI1KjTOpdA=", true, function () {
  return [_utils_useForm__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5DYXJkLmpzIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0eWxlcyIsImF1dGhTdGVwcyIsImFwcFNjcmlwdCIsImxhbmRpbmciLCJzZWNvbmRBdXRoTG9naW4iLCJzZWNvbmRBdXRoU2lnblVwIiwic2lnblVwIiwicm91dGUiLCJyb290IiwiYnJhbmQiLCJhdXRvIiwiYXJiaVRyYWRlciIsImJ1dHRvbnMiLCJsb2dvIiwiZW1haWwiLCJmb3JtQ29udHJvbCIsInNlbGVjdEVtcHR5IiwidXNlU3RhdGUiLCJhdXRoVHlwZSIsInNldEF1dGhUeXBlIiwidXNlclJvbGUiLCJzZXRVc2VyUm9sZSIsImF1dGhEaWFsb2dPcGVuIiwic2V0QXV0aERpYWxvZ09wZW4iLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImFwaUNhbGwiLCJzZXRBcGlDYWxsIiwidXNlRm9ybSIsImVtYWlsSW5wdXQiLCJwYXNzd29yZElucHV0IiwicGFzc3dvcmRJbnB1dFZlcmlmeSIsInZhbHVlcyIsInVwZGF0ZVZhbHVlIiwiaGFuZGxlQXV0aFR5cGUiLCJzZWxlY3Rpb24iLCJoYW5kbGVHb0JhY2tSZXNldCIsImhhbmRsZVNlY29uZEZvcm1BdXRoIiwidmFsaWRhdGVFbWFpbCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwidXNlcl9pZCIsInVzZXJJRCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxR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QUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KLENBREgsR0FjTyxtRUFDSSxNQUFDLHdEQUFEO0FBQ0ksWUFBUSxFQUFFUixPQURkO0FBRUksUUFBSSxFQUFDLE9BRlQ7QUFHSSxTQUFLLEVBQUMsV0FIVjtBQUlJLFdBQU8sRUFBRTtBQUFBLGFBQU1RLGNBQWMsQ0FBQyxJQUFELENBQXBCO0FBQUEsS0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFPSSxNQUFDLHdEQUFEO0FBQ0ksWUFBUSxFQUFFUixPQURkO0FBRUksUUFBSSxFQUFDLE9BRlQ7QUFHSSxTQUFLLEVBQUMsV0FIVjtBQUlJLFdBQU8sRUFBRVcsb0JBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFckIsUUFBUSxLQUFLLE9BQWIsR0FBdUIsT0FBdkIsR0FBaUMsU0FMbkMsQ0FQSixDQWZaLENBbkZKLENBUEosQ0FESjtBQTZISDs7R0E3TnVCbkIsUztVQW9CWStCLHNEOzs7S0FwQlovQixTO0FBNk52QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5lZTE5YTRkYjg4ODAyNmRmNzQ5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIENhcmRBY3Rpb25zLFxyXG4gICAgQ2FyZENvbnRlbnQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgU25hY2tiYXIsXHJcbiAgICBDaXJjdWxhclByb2dyZXNzLFxyXG4gICAgU2VsZWN0LFxyXG4gICAgTWVudUl0ZW0sXHJcbiAgICBGb3JtQ29udHJvbCxcclxuICAgIEZvcm1IZWxwZXJUZXh0XHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcbmltcG9ydCBVc2VyQXV0aERpYWxvZyBmcm9tICcuL1VzZXJBdXRoRGlhbG9nJztcclxuaW1wb3J0IHsgYXV0aFN0ZXBzIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFN0ZXBzJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vdXRpbHMvdXNlRm9ybSc7XHJcbmltcG9ydCB7IHZhbGlkYXRlRW1haWwgfSBmcm9tICcuLi91dGlscy92YWxpZGF0ZUVtYWlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luQ2FyZCh7IHVzZVN0eWxlcyB9KSB7XHJcbiAgICBjb25zdCB7IGxhbmRpbmcsIHNlY29uZEF1dGhMb2dpbiwgc2Vjb25kQXV0aFNpZ25VcCB9ID0gYXV0aFN0ZXBzLmFwcFNjcmlwdDtcclxuICAgIGNvbnN0IHsgc2lnblVwIH0gPSBhdXRoU3RlcHMucm91dGU7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgcm9vdCxcclxuICAgICAgICBicmFuZCxcclxuICAgICAgICBhdXRvLFxyXG4gICAgICAgIGFyYmlUcmFkZXIsXHJcbiAgICAgICAgYnV0dG9ucyxcclxuICAgICAgICBsb2dvLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGZvcm1Db250cm9sLFxyXG4gICAgICAgIHNlbGVjdEVtcHR5XHJcbiAgICB9ID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbYXV0aFR5cGUsIHNldEF1dGhUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJSb2xlLCBzZXRVc2VyUm9sZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFthdXRoRGlhbG9nT3Blbiwgc2V0QXV0aERpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCdFcnJvciEnKTtcclxuICAgIGNvbnN0IFthcGlDYWxsLCBzZXRBcGlDYWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdmFsdWVzLCB1cGRhdGVWYWx1ZSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgZW1haWxJbnB1dDogJycsXHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dDogJycsXHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dFZlcmlmeTogJydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBlbWFpbElucHV0LCBwYXNzd29yZElucHV0LCBwYXNzd29yZElucHV0VmVyaWZ5IH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQXV0aFR5cGUgPSAoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc2V0QXV0aFR5cGUoc2VsZWN0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlR29CYWNrUmVzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QXV0aFR5cGUobnVsbCk7XHJcbiAgICAgICAgc2V0QXBpQ2FsbChmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWNvbmRGb3JtQXV0aCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGF1dGhUeXBlID09PSAnc2lnbnVwJyAmJiBwYXNzd29yZElucHV0ICE9PSBwYXNzd29yZElucHV0VmVyaWZ5IHx8XHJcbiAgICAgICAgICAgIGF1dGhUeXBlID09PSAnc2lnbnVwJyAmJiBwYXNzd29yZElucHV0VmVyaWZ5ID09PSAnJyB8fFxyXG4gICAgICAgICAgICBhdXRoVHlwZSA9PT0gJ3NpZ251cCcgJiYgIXVzZXJSb2xlIHx8XHJcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQgPT09ICcnIHx8XHJcbiAgICAgICAgICAgIGVtYWlsSW5wdXQgPT09ICcnIHx8XHJcbiAgICAgICAgICAgICF2YWxpZGF0ZUVtYWlsKGVtYWlsSW5wdXQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXNzd29yZEVycm9yID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcih0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0sIDMwMDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGF1dGhUeXBlID09PSAnc2lnbnVwJyAmJiBwYXNzd29yZElucHV0ICE9PSBwYXNzd29yZElucHV0VmVyaWZ5KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2ghJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXRWZXJpZnkgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1JlLUVudGVyIFBhc3N3b3JkIEVtcHR5IScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGF1dGhUeXBlID09PSAnc2lnbnVwJyAmJiAhdXNlclJvbGUpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnVHJhbnNhdGlvbiBSb2xlIEVtcHR5IScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkSW5wdXQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1Bhc3N3b3JkIEVtcHR5IScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVtYWlsSW5wdXQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ0VtYWlsIEVtcHR5IScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUVtYWlsKGVtYWlsSW5wdXQpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ05vdCBhIHZhbGlkIEVtYWlsIScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09ICdzaWdudXAnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBcGlDYWxsKHRydWUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtzaWduVXB9LyR7dXNlclJvbGV9YClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3NpZ25VcH0vJHt1c2VyUm9sZX1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyB1c2VyX2lkIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJfaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmV0Y2ggbG9naW5gKVxyXG4gICAgICAgICAgICAgICAgc2V0QXBpQ2FsbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0QXV0aERpYWxvZ09wZW4odHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxVc2VyQXV0aERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgdXNlcl9pZD17dXNlcklEfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17YXV0aERpYWxvZ09wZW59XHJcbiAgICAgICAgICAgICAgICBzZXRBdXRoRGlhbG9nT3Blbj17c2V0QXV0aERpYWxvZ09wZW59XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVHb0JhY2tSZXNldD17aGFuZGxlR29CYWNrUmVzZXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17cm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnJhbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2hpdmFsZGkvNHdoZWVsei9ibG9iL21hc3Rlci9jbGllbnQvc3JjL2ltYWdlcy9BdXRvQXJiaVRyYWRlckxvZ28ucG5nP3Jhdz10cnVlXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT17bG9nb30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YXV0b30+YXV0bzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPXthcmJpVHJhZGVyfT5hcmJpLXRyYWRlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICB7YXBpQ2FsbCA9PT0gZmFsc2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aFR5cGUgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbmFja2JhciBvcGVuPXtwYXNzd29yZEVycm9yfSBvbkNsaWNrPXsoKSA9PiBzZXRQYXNzd29yZEVycm9yKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoVHlwZSA9PT0gJ3NpZ251cCcgPyA8c3Bhbj57c2Vjb25kQXV0aFNpZ25VcH08L3NwYW4+IDogPHNwYW4+e3NlY29uZEF1dGhMb2dpbn08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2VtYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhUeXBlID09PSAnc2lnbnVwJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZS1FbnRlciBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0VmVyaWZ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRJbnB1dFZlcmlmeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZElucHV0VmVyaWZ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Zm9ybUNvbnRyb2x9IGNvbG9yPVwic2Vjb25kYXJ5XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlclJvbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFVzZXJSb2xlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0RW1wdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnV2l0aG91dCBsYWJlbCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24gUm9sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJidXllclwiPkJ1eWluZzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInNlbGxlclwiPlNlbGxpbmc8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5UcmFuc2FjdGlvbiBSb2xlPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgY2xhc3NOYW1lPXtidXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXV0aFR5cGUgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aFR5cGUoJ2xvZ2luJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+TG9nZ2luZyBJbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGhUeXBlKCdzaWdudXAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TaWduaW5nIFVwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FwaUNhbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aFR5cGUobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPkdvIEJhY2s8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthcGlDYWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlY29uZEZvcm1BdXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YXV0aFR5cGUgPT09ICdsb2dpbicgPyBcIkxvZ2luXCIgOiBcIlNpZ24gVXBcIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=