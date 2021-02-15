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

  var userID = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
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
                setErrorMessage('Transaction Role Empty!');
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

              if (user_id) {
                userID.current = user_id;
                setAuthDialogOpen(true);
              } else {
                console.log("User ID not captured");
              }

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
    user_id: userID.current,
    userRole: userRole,
    open: authDialogOpen,
    setAuthDialogOpen: setAuthDialogOpen,
    handleGoBackReset: handleGoBackReset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: brand,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",
    alt: "logo",
    className: logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: auto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, "auto"), " ", __jsx("span", {
    className: arbiTrader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 60
    }
  }, "arbi-trader"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, apiCall === false ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, authType === null ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    align: "center",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
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
      lineNumber: 147,
      columnNumber: 41
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 45
    }
  }, errorMessage)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 41
    }
  }, authType === 'signup' ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 70
    }
  }, secondAuthSignUp) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 104
    }
  }, secondAuthLogin)), __jsx("div", {
    className: email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
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
      lineNumber: 156,
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
      lineNumber: 166,
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
      lineNumber: 178,
      columnNumber: 53
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: formControl,
    color: "secondary",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
      lineNumber: 189,
      columnNumber: 57
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 61
    }
  }, "Transaction Role"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "buyer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 61
    }
  }, "Buying"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "seller",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 61
    }
  }, "Selling")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormHelperText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 57
    }
  }, "Transaction Role")))))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardActions"], {
    className: buttons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
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
      lineNumber: 217,
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
      lineNumber: 222,
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
      lineNumber: 230,
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
      lineNumber: 236,
      columnNumber: 33
    }
  }, authType === 'login' ? "Login" : "Sign Up")))));
}

_s(LoginCard, "t3qTWG334omqn6jkBXCwCbWVC/I=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5DYXJkLmpzIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0eWxlcyIsImF1dGhTdGVwcyIsImFwcFNjcmlwdCIsImxhbmRpbmciLCJzZWNvbmRBdXRoTG9naW4iLCJzZWNvbmRBdXRoU2lnblVwIiwic2lnblVwIiwicm91dGUiLCJyb290IiwiYnJhbmQiLCJhdXRvIiwiYXJiaVRyYWRlciIsImJ1dHRvbnMiLCJsb2dvIiwiZW1haWwiLCJmb3JtQ29udHJvbCIsInNlbGVjdEVtcHR5IiwidXNlU3RhdGUiLCJhdXRoVHlwZSIsInNldEF1dGhUeXBlIiwidXNlclJvbGUiLCJzZXRVc2VyUm9sZSIsImF1dGhEaWFsb2dPcGVuIiwic2V0QXV0aERpYWxvZ09wZW4iLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImFwaUNhbGwiLCJzZXRBcGlDYWxsIiwidXNlRm9ybSIsImVtYWlsSW5wdXQiLCJwYXNzd29yZElucHV0IiwicGFzc3dvcmRJbnB1dFZlcmlmeSIsInZhbHVlcyIsInVwZGF0ZVZhbHVlIiwidXNlcklEIiwidXNlUmVmIiwiaGFuZGxlQXV0aFR5cGUiLCJzZWxlY3Rpb24iLCJoYW5kbGVHb0JhY2tSZXNldCIsImhhbmRsZVNlY29uZEZvcm1BdXRoIiwidmFsaWRhdGVFbWFpbCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwidXNlcl9pZCIsImN1cnJlbnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxPQUFrQztBQUFB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QUEsYUFBTW9CLGNBQWMsQ0FBQyxPQUFELENBQXBCO0FBQUEsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBTUksTUFBQyx3REFBRDtBQUNJLFFBQUksRUFBQyxPQURUO0FBRUksU0FBSyxFQUFDLFdBRlY7QUFHSSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxjQUFjLENBQUMsUUFBRCxDQUFwQjtBQUFBLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSixDQURILEdBY08sbUVBQ0ksTUFBQyx3REFBRDtBQUNJLFlBQVEsRUFBRVYsT0FEZDtBQUVJLFFBQUksRUFBQyxPQUZUO0FBR0ksU0FBSyxFQUFDLFdBSFY7QUFJSSxXQUFPLEVBQUU7QUFBQSxhQUFNVSxjQUFjLENBQUMsSUFBRCxDQUFwQjtBQUFBLEtBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBT0ksTUFBQyx3REFBRDtBQUNJLFlBQVEsRUFBRVYsT0FEZDtBQUVJLFFBQUksRUFBQyxPQUZUO0FBR0ksU0FBSyxFQUFDLFdBSFY7QUFJSSxXQUFPLEVBQUVhLG9CQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRXZCLFFBQVEsS0FBSyxPQUFiLEdBQXVCLE9BQXZCLEdBQWlDLFNBTG5DLENBUEosQ0FmWixDQW5GSixDQVJKLENBREo7QUE4SEg7O0dBbE91Qm5CLFM7VUFvQlkrQixzRDs7O0tBcEJaL0IsUztBQWtPdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNDUxYzJmMmE2YWM5ODAwZGMwYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIENhcmRBY3Rpb25zLFxyXG4gICAgQ2FyZENvbnRlbnQsXHJcbiAgICBCdXR0b24sXHJcbiAgICBUeXBvZ3JhcGh5LFxyXG4gICAgVGV4dEZpZWxkLFxyXG4gICAgU25hY2tiYXIsXHJcbiAgICBDaXJjdWxhclByb2dyZXNzLFxyXG4gICAgU2VsZWN0LFxyXG4gICAgTWVudUl0ZW0sXHJcbiAgICBGb3JtQ29udHJvbCxcclxuICAgIEZvcm1IZWxwZXJUZXh0XHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcbmltcG9ydCBVc2VyQXV0aERpYWxvZyBmcm9tICcuL1VzZXJBdXRoRGlhbG9nJztcclxuaW1wb3J0IHsgYXV0aFN0ZXBzIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFN0ZXBzJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vdXRpbHMvdXNlRm9ybSc7XHJcbmltcG9ydCB7IHZhbGlkYXRlRW1haWwgfSBmcm9tICcuLi91dGlscy92YWxpZGF0ZUVtYWlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luQ2FyZCh7IHVzZVN0eWxlcyB9KSB7XHJcbiAgICBjb25zdCB7IGxhbmRpbmcsIHNlY29uZEF1dGhMb2dpbiwgc2Vjb25kQXV0aFNpZ25VcCB9ID0gYXV0aFN0ZXBzLmFwcFNjcmlwdDtcclxuICAgIGNvbnN0IHsgc2lnblVwIH0gPSBhdXRoU3RlcHMucm91dGU7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgcm9vdCxcclxuICAgICAgICBicmFuZCxcclxuICAgICAgICBhdXRvLFxyXG4gICAgICAgIGFyYmlUcmFkZXIsXHJcbiAgICAgICAgYnV0dG9ucyxcclxuICAgICAgICBsb2dvLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIGZvcm1Db250cm9sLFxyXG4gICAgICAgIHNlbGVjdEVtcHR5XHJcbiAgICB9ID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbYXV0aFR5cGUsIHNldEF1dGhUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJSb2xlLCBzZXRVc2VyUm9sZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFthdXRoRGlhbG9nT3Blbiwgc2V0QXV0aERpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCdFcnJvciEnKTtcclxuICAgIGNvbnN0IFthcGlDYWxsLCBzZXRBcGlDYWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdmFsdWVzLCB1cGRhdGVWYWx1ZSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgZW1haWxJbnB1dDogJycsXHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dDogJycsXHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dFZlcmlmeTogJydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXNlcklEID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCB7IGVtYWlsSW5wdXQsIHBhc3N3b3JkSW5wdXQsIHBhc3N3b3JkSW5wdXRWZXJpZnkgfSA9IHZhbHVlcztcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBdXRoVHlwZSA9IChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICBzZXRBdXRoVHlwZShzZWxlY3Rpb24pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVHb0JhY2tSZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBdXRoVHlwZShudWxsKTtcclxuICAgICAgICBzZXRBcGlDYWxsKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlY29uZEZvcm1BdXRoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXQgIT09IHBhc3N3b3JkSW5wdXRWZXJpZnkgfHxcclxuICAgICAgICAgICAgYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXRWZXJpZnkgPT09ICcnIHx8XHJcbiAgICAgICAgICAgIGF1dGhUeXBlID09PSAnc2lnbnVwJyAmJiAhdXNlclJvbGUgfHxcclxuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dCA9PT0gJycgfHxcclxuICAgICAgICAgICAgZW1haWxJbnB1dCA9PT0gJycgfHxcclxuICAgICAgICAgICAgIXZhbGlkYXRlRW1haWwoZW1haWxJbnB1dClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkRXJyb3IgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXQgIT09IHBhc3N3b3JkSW5wdXRWZXJpZnkpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCEnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhdXRoVHlwZSA9PT0gJ3NpZ251cCcgJiYgcGFzc3dvcmRJbnB1dFZlcmlmeSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUmUtRW50ZXIgUGFzc3dvcmQgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09ICdzaWdudXAnICYmICF1c2VyUm9sZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdUcmFuc2FjdGlvbiBSb2xlIEVtcHR5IScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkSW5wdXQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1Bhc3N3b3JkIEVtcHR5IScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVtYWlsSW5wdXQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ0VtYWlsIEVtcHR5IScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUVtYWlsKGVtYWlsSW5wdXQpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ05vdCBhIHZhbGlkIEVtYWlsIScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09ICdzaWdudXAnKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBcGlDYWxsKHRydWUpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtzaWduVXB9LyR7dXNlclJvbGV9YClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3NpZ25VcH0vJHt1c2VyUm9sZX1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxJbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyB1c2VyX2lkIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySUQuY3VycmVudCA9IHVzZXJfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXV0aERpYWxvZ09wZW4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBJRCBub3QgY2FwdHVyZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmV0Y2ggbG9naW5gKVxyXG4gICAgICAgICAgICAgICAgc2V0QXBpQ2FsbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0QXV0aERpYWxvZ09wZW4odHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxVc2VyQXV0aERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgdXNlcl9pZD17dXNlcklELmN1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICB1c2VyUm9sZT17dXNlclJvbGV9XHJcbiAgICAgICAgICAgICAgICBvcGVuPXthdXRoRGlhbG9nT3Blbn1cclxuICAgICAgICAgICAgICAgIHNldEF1dGhEaWFsb2dPcGVuPXtzZXRBdXRoRGlhbG9nT3Blbn1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFja1Jlc2V0PXtoYW5kbGVHb0JhY2tSZXNldH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtyb290fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXticmFuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vQXJjaGl2YWxkaS80d2hlZWx6L2Jsb2IvbWFzdGVyL2NsaWVudC9zcmMvaW1hZ2VzL0F1dG9BcmJpVHJhZGVyTG9nby5wbmc/cmF3PXRydWVcIiBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPXtsb2dvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIG5vV3JhcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXthdXRvfT5hdXRvPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9e2FyYmlUcmFkZXJ9PmFyYmktdHJhZGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIHthcGlDYWxsID09PSBmYWxzZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoVHlwZSA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNuYWNrYmFyIG9wZW49e3Bhc3N3b3JkRXJyb3J9IG9uQ2xpY2s9eygpID0+IHNldFBhc3N3b3JkRXJyb3IoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhUeXBlID09PSAnc2lnbnVwJyA/IDxzcGFuPntzZWNvbmRBdXRoU2lnblVwfTwvc3Bhbj4gOiA8c3Bhbj57c2Vjb25kQXV0aExvZ2lufTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZW1haWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aFR5cGUgPT09ICdzaWdudXAnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlLUVudGVyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkSW5wdXRWZXJpZnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZElucHV0VmVyaWZ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkSW5wdXRWZXJpZnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtmb3JtQ29udHJvbH0gY29sb3I9XCJzZWNvbmRhcnlcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyUm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VXNlclJvbGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RFbXB0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdXaXRob3V0IGxhYmVsJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbiBSb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cImJ1eWVyXCI+QnV5aW5nPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwic2VsbGVyXCI+U2VsbGluZzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlRyYW5zYWN0aW9uIFJvbGU8L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBjbGFzc05hbWU9e2J1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthdXRoVHlwZSA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoVHlwZSgnbG9naW4nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5Mb2dnaW5nIEluPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aFR5cGUoJ3NpZ251cCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlNpZ25pbmcgVXA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YXBpQ2FsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoVHlwZShudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+R28gQmFjazwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FwaUNhbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2Vjb25kRm9ybUF1dGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnthdXRoVHlwZSA9PT0gJ2xvZ2luJyA/IFwiTG9naW5cIiA6IFwiU2lnbiBVcFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==