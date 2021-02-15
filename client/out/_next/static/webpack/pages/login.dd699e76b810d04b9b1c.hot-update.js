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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      userID = _useState[0],
      setUserID = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      authType = _useState2[0],
      setAuthType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      userRole = _useState3[0],
      setUserRole = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      authDialogOpen = _useState4[0],
      setAuthDialogOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      passwordError = _useState5[0],
      setPasswordError = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Error!'),
      errorMessage = _useState6[0],
      setErrorMessage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      apiCall = _useState7[0],
      setApiCall = _useState7[1];

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
      lineNumber: 121,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: brand,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",
    alt: "logo",
    className: logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: auto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  }, "auto"), " ", __jsx("span", {
    className: arbiTrader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 60
    }
  }, "arbi-trader"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, apiCall === false ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, authType === null ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    align: "center",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 143,
      columnNumber: 41
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 45
    }
  }, errorMessage)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 41
    }
  }, authType === 'signup' ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 70
    }
  }, secondAuthSignUp) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 104
    }
  }, secondAuthLogin)), __jsx("div", {
    className: email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
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
      lineNumber: 152,
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
      lineNumber: 162,
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
      lineNumber: 174,
      columnNumber: 53
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: formControl,
    color: "secondary",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
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
      lineNumber: 185,
      columnNumber: 57
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 61
    }
  }, "Transaction Role"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "buyer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 61
    }
  }, "Buying"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "seller",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 61
    }
  }, "Selling")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormHelperText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 57
    }
  }, "Transaction Role")))))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardActions"], {
    className: buttons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
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
      lineNumber: 213,
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
      lineNumber: 218,
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
      lineNumber: 226,
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
      lineNumber: 232,
      columnNumber: 33
    }
  }, authType === 'login' ? "Login" : "Sign Up")))));
}

_s(LoginCard, "u1mMMiR4fbGyFt60u+3vs6wNdnA=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5DYXJkLmpzIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0eWxlcyIsImF1dGhTdGVwcyIsImFwcFNjcmlwdCIsImxhbmRpbmciLCJzZWNvbmRBdXRoTG9naW4iLCJzZWNvbmRBdXRoU2lnblVwIiwic2lnblVwIiwicm91dGUiLCJyb290IiwiYnJhbmQiLCJhdXRvIiwiYXJiaVRyYWRlciIsImJ1dHRvbnMiLCJsb2dvIiwiZW1haWwiLCJmb3JtQ29udHJvbCIsInNlbGVjdEVtcHR5IiwidXNlU3RhdGUiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJhdXRoVHlwZSIsInNldEF1dGhUeXBlIiwidXNlclJvbGUiLCJzZXRVc2VyUm9sZSIsImF1dGhEaWFsb2dPcGVuIiwic2V0QXV0aERpYWxvZ09wZW4iLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImFwaUNhbGwiLCJzZXRBcGlDYWxsIiwidXNlRm9ybSIsImVtYWlsSW5wdXQiLCJwYXNzd29yZElucHV0IiwicGFzc3dvcmRJbnB1dFZlcmlmeSIsInZhbHVlcyIsInVwZGF0ZVZhbHVlIiwiaGFuZGxlQXV0aFR5cGUiLCJzZWxlY3Rpb24iLCJoYW5kbGVHb0JhY2tSZXNldCIsImhhbmRsZVNlY29uZEZvcm1BdXRoIiwidmFsaWRhdGVFbWFpbCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwidXNlcl9pZCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQUEsNkJBQ1VDLDBEQUFTLENBQUNDLFNBRHBCO0FBQUEsTUFDckNDLE9BRHFDLHdCQUNyQ0EsT0FEcUM7QUFBQSxNQUM1QkMsZUFENEIsd0JBQzVCQSxlQUQ0QjtBQUFBLE1BQ1hDLGdCQURXLHdCQUNYQSxnQkFEVztBQUFBLE1BRXJDQyxNQUZxQyxHQUUxQkwsMERBQVMsQ0FBQ00sS0FGZ0IsQ0FFckNELE1BRnFDOztBQUFBLG1CQWF6Q04sU0FBUyxFQWJnQztBQUFBLE1BSXpDUSxJQUp5QyxjQUl6Q0EsSUFKeUM7QUFBQSxNQUt6Q0MsS0FMeUMsY0FLekNBLEtBTHlDO0FBQUEsTUFNekNDLElBTnlDLGNBTXpDQSxJQU55QztBQUFBLE1BT3pDQyxVQVB5QyxjQU96Q0EsVUFQeUM7QUFBQSxNQVF6Q0MsT0FSeUMsY0FRekNBLE9BUnlDO0FBQUEsTUFTekNDLElBVHlDLGNBU3pDQSxJQVR5QztBQUFBLE1BVXpDQyxLQVZ5QyxjQVV6Q0EsS0FWeUM7QUFBQSxNQVd6Q0MsV0FYeUMsY0FXekNBLFdBWHlDO0FBQUEsTUFZekNDLFdBWnlDLGNBWXpDQSxXQVp5Qzs7QUFBQSxrQkFjakJDLHNEQUFRLENBQUMsRUFBRCxDQWRTO0FBQUEsTUFjdENDLE1BZHNDO0FBQUEsTUFjOUJDLFNBZDhCOztBQUFBLG1CQWViRixzREFBUSxDQUFDLElBQUQsQ0FmSztBQUFBLE1BZXRDRyxRQWZzQztBQUFBLE1BZTVCQyxXQWY0Qjs7QUFBQSxtQkFnQmJKLHNEQUFRLENBQUMsSUFBRCxDQWhCSztBQUFBLE1BZ0J0Q0ssUUFoQnNDO0FBQUEsTUFnQjVCQyxXQWhCNEI7O0FBQUEsbUJBaUJETixzREFBUSxDQUFDLEtBQUQsQ0FqQlA7QUFBQSxNQWlCdENPLGNBakJzQztBQUFBLE1BaUJ0QkMsaUJBakJzQjs7QUFBQSxtQkFrQkhSLHNEQUFRLENBQUMsS0FBRCxDQWxCTDtBQUFBLE1Ba0J0Q1MsYUFsQnNDO0FBQUEsTUFrQnZCQyxnQkFsQnVCOztBQUFBLG1CQW1CTFYsc0RBQVEsQ0FBQyxRQUFELENBbkJIO0FBQUEsTUFtQnRDVyxZQW5Cc0M7QUFBQSxNQW1CeEJDLGVBbkJ3Qjs7QUFBQSxtQkFvQmZaLHNEQUFRLENBQUMsS0FBRCxDQXBCTztBQUFBLE1Bb0J0Q2EsT0FwQnNDO0FBQUEsTUFvQjdCQyxVQXBCNkI7O0FBQUEsaUJBcUJiQyw4REFBTyxDQUFDO0FBQ3BDQyxjQUFVLEVBQUUsRUFEd0I7QUFFcENDLGlCQUFhLEVBQUUsRUFGcUI7QUFHcENDLHVCQUFtQixFQUFFO0FBSGUsR0FBRCxDQXJCTTtBQUFBLE1BcUJyQ0MsTUFyQnFDLFlBcUJyQ0EsTUFyQnFDO0FBQUEsTUFxQjdCQyxXQXJCNkIsWUFxQjdCQSxXQXJCNkI7O0FBQUEsTUEwQnJDSixVQTFCcUMsR0EwQmNHLE1BMUJkLENBMEJyQ0gsVUExQnFDO0FBQUEsTUEwQnpCQyxhQTFCeUIsR0EwQmNFLE1BMUJkLENBMEJ6QkYsYUExQnlCO0FBQUEsTUEwQlZDLG1CQTFCVSxHQTBCY0MsTUExQmQsQ0EwQlZELG1CQTFCVTs7QUE0QjdDLE1BQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsU0FBRCxFQUFlO0FBQ2xDbEIsZUFBVyxDQUFDa0IsU0FBRCxDQUFYO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUJuQixlQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FVLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxHQUhEOztBQUtBLE1BQU1VLG9CQUFvQjtBQUFBLGlNQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFckJyQixRQUFRLEtBQUssUUFBYixJQUF5QmMsYUFBYSxLQUFLQyxtQkFBM0MsSUFDQWYsUUFBUSxLQUFLLFFBQWIsSUFBeUJlLG1CQUFtQixLQUFLLEVBRGpELElBRUFmLFFBQVEsS0FBSyxRQUFiLElBQXlCLENBQUNFLFFBRjFCLElBR0FZLGFBQWEsS0FBSyxFQUhsQixJQUlBRCxVQUFVLEtBQUssRUFKZixJQUtBLENBQUNTLDBFQUFhLENBQUNULFVBQUQsQ0FQTztBQUFBO0FBQUE7QUFBQTs7QUFTckIsa0JBQUlQLGFBQWEsS0FBSyxLQUF0QixFQUE2QjtBQUN6QkMsZ0NBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNBZ0IsMEJBQVUsQ0FBQyxZQUFNO0FBQ2JoQixrQ0FBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0gsaUJBRlMsRUFFUCxJQUZPLENBQVY7QUFHSDs7QUFDRCxrQkFBSVAsUUFBUSxLQUFLLFFBQWIsSUFBeUJjLGFBQWEsS0FBS0MsbUJBQS9DLEVBQW9FO0FBQ2hFTiwrQkFBZSxDQUFDLHlCQUFELENBQWY7QUFDSDs7QUFDRCxrQkFBSVQsUUFBUSxLQUFLLFFBQWIsSUFBeUJlLG1CQUFtQixLQUFLLEVBQXJELEVBQXlEO0FBQ3JETiwrQkFBZSxDQUFDLDBCQUFELENBQWY7QUFDSDs7QUFDRCxrQkFBSVQsUUFBUSxLQUFLLFFBQWIsSUFBeUIsQ0FBQ0UsUUFBOUIsRUFBd0M7QUFDcENPLCtCQUFlLENBQUMsd0JBQUQsQ0FBZjtBQUNIOztBQUNELGtCQUFJSyxhQUFhLEtBQUssRUFBdEIsRUFBMEI7QUFDdEJMLCtCQUFlLENBQUMsaUJBQUQsQ0FBZjtBQUNIOztBQUNELGtCQUFJSSxVQUFVLEtBQUssRUFBbkIsRUFBdUI7QUFDbkJKLCtCQUFlLENBQUMsY0FBRCxDQUFmO0FBQ0g7O0FBQ0Qsa0JBQUksQ0FBQ2EsMEVBQWEsQ0FBQ1QsVUFBRCxDQUFsQixFQUFnQztBQUM1QkosK0JBQWUsQ0FBQyxvQkFBRCxDQUFmO0FBQ0g7O0FBaENvQjtBQUFBOztBQUFBO0FBQUEsb0JBa0NqQlQsUUFBUSxLQUFLLFFBbENJO0FBQUE7QUFBQTtBQUFBOztBQW1DakJXLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FhLHFCQUFPLENBQUNDLEdBQVIsV0FBZXZDLE1BQWYsY0FBeUJnQixRQUF6QjtBQXBDaUI7QUFBQSxxQkFxQ0N3QixLQUFLLFdBQUl4QyxNQUFKLGNBQWNnQixRQUFkLEdBQTBCO0FBQzdDeUIsdUJBQU8sRUFBRTtBQUNMLDRCQUFVLGtCQURMO0FBRUwsa0NBQWdCO0FBRlgsaUJBRG9DO0FBSzdDQyxzQkFBTSxFQUFFLE1BTHFDO0FBTTdDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQmxCLDRCQUFVLEVBQVZBLFVBRGlCO0FBRWpCQywrQkFBYSxFQUFiQTtBQUZpQixpQkFBZjtBQU51QyxlQUExQixDQXJDTjs7QUFBQTtBQXFDWGtCLGlCQXJDVztBQUFBO0FBQUEscUJBZ0RTQSxHQUFHLENBQUNDLElBQUosRUFoRFQ7O0FBQUE7QUFBQTtBQWdEVEMscUJBaERTLG1CQWdEVEEsT0FoRFM7O0FBaURqQixrQkFBSUEsT0FBSixFQUFhLENBRVo7O0FBbkRnQjtBQUFBOztBQUFBO0FBcURqQlYscUJBQU8sQ0FBQ0MsR0FBUjtBQUNBZCx3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBTiwrQkFBaUIsQ0FBQyxJQUFELENBQWpCOztBQXZEaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBcEJnQixvQkFBb0I7QUFBQTtBQUFBO0FBQUEsS0FBMUI7O0FBNERBLFNBQ0ksbUVBQ0ksTUFBQyx1REFBRDtBQUNJLFdBQU8sRUFBRXZCLE1BRGI7QUFFSSxRQUFJLEVBQUVNLGNBRlY7QUFHSSxxQkFBaUIsRUFBRUMsaUJBSHZCO0FBSUkscUJBQWlCLEVBQUVlLGlCQUp2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFPSSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxFQUFFaEMsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFQyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMscUdBQVQ7QUFBK0csT0FBRyxFQUFDLE1BQW5IO0FBQTBILGFBQVMsRUFBRUksSUFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixVQUFNLE1BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBRUgsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLE9BQ3VDO0FBQU0sYUFBUyxFQUFFQyxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUR2QyxDQUZKLENBREosRUFPSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS21CLE9BQU8sS0FBSyxLQUFaLEdBQ0csbUVBQ0tWLFFBQVEsS0FBSyxJQUFiLEdBQ0csTUFBQyw0REFBRDtBQUFZLFNBQUssRUFBQyxRQUFsQjtBQUEyQixTQUFLLEVBQUMsZUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLakIsT0FETCxDQURILEdBS08sbUVBQ0ksTUFBQywwREFBRDtBQUFVLFFBQUksRUFBRXVCLGFBQWhCO0FBQStCLFdBQU8sRUFBRTtBQUFBLGFBQU1DLGdCQUFnQixDQUFDLEtBQUQsQ0FBdEI7QUFBQSxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFPLFlBQVEsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tDLFlBREwsQ0FESixDQURKLEVBTUksTUFBQyw0REFBRDtBQUFZLFNBQUssRUFBQyxlQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tSLFFBQVEsS0FBSyxRQUFiLEdBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT2YsZ0JBQVAsQ0FBeEIsR0FBMEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRCxlQUFQLENBRC9ELENBTkosRUFTSTtBQUFLLGFBQVMsRUFBRVUsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFDSSxTQUFLLEVBQUMsV0FEVjtBQUVJLFFBQUksRUFBQyxPQUZUO0FBR0ksU0FBSyxFQUFDLE9BSFY7QUFJSSxNQUFFLEVBQUMsWUFKUDtBQUtJLFFBQUksRUFBQyxZQUxUO0FBTUksU0FBSyxFQUFFbUIsVUFOWDtBQU9JLFlBQVEsRUFBRUksV0FQZDtBQVFJLFlBQVEsTUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFXSSxNQUFDLDJEQUFEO0FBQ0ksU0FBSyxFQUFDLFdBRFY7QUFFSSxRQUFJLEVBQUMsVUFGVDtBQUdJLFNBQUssRUFBQyxVQUhWO0FBSUksTUFBRSxFQUFDLGVBSlA7QUFLSSxRQUFJLEVBQUMsZUFMVDtBQU1JLFlBQVEsRUFBRUEsV0FOZDtBQU9JLFNBQUssRUFBRUgsYUFQWDtBQVFJLFlBQVEsTUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosRUFxQktkLFFBQVEsS0FBSyxRQUFiLElBQ0csbUVBQ0ksTUFBQywyREFBRDtBQUNJLFNBQUssRUFBQyxXQURWO0FBRUksUUFBSSxFQUFDLFVBRlQ7QUFHSSxTQUFLLEVBQUMsbUJBSFY7QUFJSSxNQUFFLEVBQUMscUJBSlA7QUFLSSxRQUFJLEVBQUMscUJBTFQ7QUFNSSxZQUFRLEVBQUVpQixXQU5kO0FBT0ksU0FBSyxFQUFFRixtQkFQWDtBQVFJLFlBQVEsTUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFXSSxNQUFDLDZEQUFEO0FBQWEsYUFBUyxFQUFFcEIsV0FBeEI7QUFBcUMsU0FBSyxFQUFDLFdBQTNDO0FBQXVELFlBQVEsTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFDSSxTQUFLLEVBQUVPLFFBRFg7QUFFSSxZQUFRLEVBQUUsa0JBQUFpQyxDQUFDO0FBQUEsYUFBSWhDLFdBQVcsQ0FBQ2dDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxLQUZmO0FBR0ksZ0JBQVksTUFIaEI7QUFJSSxhQUFTLEVBQUV6QyxXQUpmO0FBS0ksY0FBVSxFQUFFO0FBQUUsb0JBQWM7QUFBaEIsS0FMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JLE1BQUMsMERBQUQ7QUFBVSxTQUFLLEVBQUMsRUFBaEI7QUFBbUIsWUFBUSxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVBKLEVBVUksTUFBQywwREFBRDtBQUFVLFNBQUssRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkosRUFXSSxNQUFDLDBEQUFEO0FBQVUsU0FBSyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSixDQURKLEVBY0ksTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWRKLENBWEosQ0F0QlIsQ0FUSixDQU5aLENBREgsR0F3RU8sTUFBQyxrRUFBRDtBQUFrQixTQUFLLEVBQUMsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpFWixDQVBKLEVBbUZJLE1BQUMsNkRBQUQ7QUFBYSxhQUFTLEVBQUVKLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1EsUUFBUSxLQUFLLElBQWIsR0FDRyxtRUFDSSxNQUFDLHdEQUFEO0FBQ0ksUUFBSSxFQUFDLE9BRFQ7QUFFSSxTQUFLLEVBQUMsV0FGVjtBQUdJLFdBQU8sRUFBRTtBQUFBLGFBQU1rQixjQUFjLENBQUMsT0FBRCxDQUFwQjtBQUFBLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQU1JLE1BQUMsd0RBQUQ7QUFDSSxRQUFJLEVBQUMsT0FEVDtBQUVJLFNBQUssRUFBQyxXQUZWO0FBR0ksV0FBTyxFQUFFO0FBQUEsYUFBTUEsY0FBYyxDQUFDLFFBQUQsQ0FBcEI7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkosQ0FESCxHQWNPLG1FQUNJLE1BQUMsd0RBQUQ7QUFDSSxZQUFRLEVBQUVSLE9BRGQ7QUFFSSxRQUFJLEVBQUMsT0FGVDtBQUdJLFNBQUssRUFBQyxXQUhWO0FBSUksV0FBTyxFQUFFO0FBQUEsYUFBTVEsY0FBYyxDQUFDLElBQUQsQ0FBcEI7QUFBQSxLQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQU9JLE1BQUMsd0RBQUQ7QUFDSSxZQUFRLEVBQUVSLE9BRGQ7QUFFSSxRQUFJLEVBQUMsT0FGVDtBQUdJLFNBQUssRUFBQyxXQUhWO0FBSUksV0FBTyxFQUFFVyxvQkFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0VyQixRQUFRLEtBQUssT0FBYixHQUF1QixPQUF2QixHQUFpQyxTQUxuQyxDQVBKLENBZlosQ0FuRkosQ0FQSixDQURKO0FBNkhIOztHQTlOdUJyQixTO1VBcUJZaUMsc0Q7OztLQXJCWmpDLFM7QUE4TnZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmRkNjk5ZTc2YjgxMGQwNGI5YjFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBDYXJkLFxyXG4gICAgQ2FyZEFjdGlvbnMsXHJcbiAgICBDYXJkQ29udGVudCxcclxuICAgIEJ1dHRvbixcclxuICAgIFR5cG9ncmFwaHksXHJcbiAgICBUZXh0RmllbGQsXHJcbiAgICBTbmFja2JhcixcclxuICAgIENpcmN1bGFyUHJvZ3Jlc3MsXHJcbiAgICBTZWxlY3QsXHJcbiAgICBNZW51SXRlbSxcclxuICAgIEZvcm1Db250cm9sLFxyXG4gICAgRm9ybUhlbHBlclRleHRcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcclxuaW1wb3J0IFVzZXJBdXRoRGlhbG9nIGZyb20gJy4vVXNlckF1dGhEaWFsb2cnO1xyXG5pbXBvcnQgeyBhdXRoU3RlcHMgfSBmcm9tICcuLi91dGlscy9hdXRoU3RlcHMnO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi91dGlscy91c2VGb3JtJztcclxuaW1wb3J0IHsgdmFsaWRhdGVFbWFpbCB9IGZyb20gJy4uL3V0aWxzL3ZhbGlkYXRlRW1haWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5DYXJkKHsgdXNlU3R5bGVzIH0pIHtcclxuICAgIGNvbnN0IHsgbGFuZGluZywgc2Vjb25kQXV0aExvZ2luLCBzZWNvbmRBdXRoU2lnblVwIH0gPSBhdXRoU3RlcHMuYXBwU2NyaXB0O1xyXG4gICAgY29uc3QgeyBzaWduVXAgfSA9IGF1dGhTdGVwcy5yb3V0ZTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICByb290LFxyXG4gICAgICAgIGJyYW5kLFxyXG4gICAgICAgIGF1dG8sXHJcbiAgICAgICAgYXJiaVRyYWRlcixcclxuICAgICAgICBidXR0b25zLFxyXG4gICAgICAgIGxvZ28sXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgZm9ybUNvbnRyb2wsXHJcbiAgICAgICAgc2VsZWN0RW1wdHlcclxuICAgIH0gPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IFt1c2VySUQsIHNldFVzZXJJRF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbYXV0aFR5cGUsIHNldEF1dGhUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJSb2xlLCBzZXRVc2VyUm9sZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFthdXRoRGlhbG9nT3Blbiwgc2V0QXV0aERpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCdFcnJvciEnKTtcclxuICAgIGNvbnN0IFthcGlDYWxsLCBzZXRBcGlDYWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgdmFsdWVzLCB1cGRhdGVWYWx1ZSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgZW1haWxJbnB1dDogJycsXHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dDogJycsXHJcbiAgICAgICAgcGFzc3dvcmRJbnB1dFZlcmlmeTogJydcclxuICAgIH0pXHJcbiAgICBjb25zdCB7IGVtYWlsSW5wdXQsIHBhc3N3b3JkSW5wdXQsIHBhc3N3b3JkSW5wdXRWZXJpZnkgfSA9IHZhbHVlcztcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBdXRoVHlwZSA9IChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICBzZXRBdXRoVHlwZShzZWxlY3Rpb24pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVHb0JhY2tSZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBdXRoVHlwZShudWxsKTtcclxuICAgICAgICBzZXRBcGlDYWxsKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlY29uZEZvcm1BdXRoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXQgIT09IHBhc3N3b3JkSW5wdXRWZXJpZnkgfHxcclxuICAgICAgICAgICAgYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXRWZXJpZnkgPT09ICcnIHx8XHJcbiAgICAgICAgICAgIGF1dGhUeXBlID09PSAnc2lnbnVwJyAmJiAhdXNlclJvbGUgfHxcclxuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dCA9PT0gJycgfHxcclxuICAgICAgICAgICAgZW1haWxJbnB1dCA9PT0gJycgfHxcclxuICAgICAgICAgICAgIXZhbGlkYXRlRW1haWwoZW1haWxJbnB1dClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkRXJyb3IgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXQgIT09IHBhc3N3b3JkSW5wdXRWZXJpZnkpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCEnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhdXRoVHlwZSA9PT0gJ3NpZ251cCcgJiYgcGFzc3dvcmRJbnB1dFZlcmlmeSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUmUtRW50ZXIgUGFzc3dvcmQgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09ICdzaWdudXAnICYmICF1c2VyUm9sZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdUcmFuc2F0aW9uIFJvbGUgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFzc3dvcmRJbnB1dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUGFzc3dvcmQgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW1haWxJbnB1dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnRW1haWwgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWxJbnB1dCkpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnTm90IGEgdmFsaWQgRW1haWwhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChhdXRoVHlwZSA9PT0gJ3NpZ251cCcpIHtcclxuICAgICAgICAgICAgICAgIHNldEFwaUNhbGwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3NpZ25VcH0vJHt1c2VyUm9sZX1gKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2lnblVwfS8ke3VzZXJSb2xlfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbElucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVzZXJfaWQgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcl9pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBmZXRjaCBsb2dpbmApXHJcbiAgICAgICAgICAgICAgICBzZXRBcGlDYWxsKHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRBdXRoRGlhbG9nT3Blbih0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFVzZXJBdXRoRGlhbG9nXHJcbiAgICAgICAgICAgICAgICB1c2VyX2lkPXt1c2VySUR9XHJcbiAgICAgICAgICAgICAgICBvcGVuPXthdXRoRGlhbG9nT3Blbn1cclxuICAgICAgICAgICAgICAgIHNldEF1dGhEaWFsb2dPcGVuPXtzZXRBdXRoRGlhbG9nT3Blbn1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFja1Jlc2V0PXtoYW5kbGVHb0JhY2tSZXNldH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtyb290fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXticmFuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vQXJjaGl2YWxkaS80d2hlZWx6L2Jsb2IvbWFzdGVyL2NsaWVudC9zcmMvaW1hZ2VzL0F1dG9BcmJpVHJhZGVyTG9nby5wbmc/cmF3PXRydWVcIiBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPXtsb2dvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIG5vV3JhcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXthdXRvfT5hdXRvPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9e2FyYmlUcmFkZXJ9PmFyYmktdHJhZGVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIHthcGlDYWxsID09PSBmYWxzZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoVHlwZSA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFuZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNuYWNrYmFyIG9wZW49e3Bhc3N3b3JkRXJyb3J9IG9uQ2xpY2s9eygpID0+IHNldFBhc3N3b3JkRXJyb3IoZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NuYWNrYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhUeXBlID09PSAnc2lnbnVwJyA/IDxzcGFuPntzZWNvbmRBdXRoU2lnblVwfTwvc3Bhbj4gOiA8c3Bhbj57c2Vjb25kQXV0aExvZ2lufTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZW1haWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWxJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aFR5cGUgPT09ICdzaWdudXAnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlLUVudGVyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkSW5wdXRWZXJpZnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZElucHV0VmVyaWZ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkSW5wdXRWZXJpZnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtmb3JtQ29udHJvbH0gY29sb3I9XCJzZWNvbmRhcnlcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyUm9sZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VXNlclJvbGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RW1wdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RFbXB0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdXaXRob3V0IGxhYmVsJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2FjdGlvbiBSb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cImJ1eWVyXCI+QnV5aW5nPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwic2VsbGVyXCI+U2VsbGluZzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1IZWxwZXJUZXh0PlRyYW5zYWN0aW9uIFJvbGU8L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucyBjbGFzc05hbWU9e2J1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHthdXRoVHlwZSA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoVHlwZSgnbG9naW4nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5Mb2dnaW5nIEluPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aFR5cGUoJ3NpZ251cCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlNpZ25pbmcgVXA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YXBpQ2FsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoVHlwZShudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+R28gQmFjazwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FwaUNhbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2Vjb25kRm9ybUF1dGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnthdXRoVHlwZSA9PT0gJ2xvZ2luJyA/IFwiTG9naW5cIiA6IFwiU2lnbiBVcFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==