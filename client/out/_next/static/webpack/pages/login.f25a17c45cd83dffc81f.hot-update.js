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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('test'),
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

  var handleDialogOpen = function handleDialogOpen(user_id) {
    console.log("userID in hdo ".concat(user_id));
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

              if (user_id) {
                console.log("user_id in res ".concat(user_id));
                handleDialogOpen(user_id);
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
    user_id: userID,
    open: authDialogOpen,
    setAuthDialogOpen: setAuthDialogOpen,
    handleGoBackReset: handleGoBackReset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: brand,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",
    alt: "logo",
    className: logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: auto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, "auto"), " ", __jsx("span", {
    className: arbiTrader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 60
    }
  }, "arbi-trader"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, apiCall === false ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, authType === null ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    align: "center",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
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
      lineNumber: 148,
      columnNumber: 41
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 45
    }
  }, errorMessage)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 41
    }
  }, authType === 'signup' ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 70
    }
  }, secondAuthSignUp) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 104
    }
  }, secondAuthLogin)), __jsx("div", {
    className: email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
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
      lineNumber: 157,
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
      lineNumber: 167,
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
      lineNumber: 179,
      columnNumber: 53
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: formControl,
    color: "secondary",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
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
      lineNumber: 190,
      columnNumber: 57
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 61
    }
  }, "Transaction Role"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "buyer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 61
    }
  }, "Buying"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "seller",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 61
    }
  }, "Selling")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormHelperText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 57
    }
  }, "Transaction Role")))))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardActions"], {
    className: buttons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
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
      lineNumber: 218,
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
      lineNumber: 223,
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
      lineNumber: 231,
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
      lineNumber: 237,
      columnNumber: 33
    }
  }, authType === 'login' ? "Login" : "Sign Up")))));
}

_s(LoginCard, "jdkKB4aAiERS9yl/0qY44S6dNH4=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5DYXJkLmpzIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0eWxlcyIsImF1dGhTdGVwcyIsImFwcFNjcmlwdCIsImxhbmRpbmciLCJzZWNvbmRBdXRoTG9naW4iLCJzZWNvbmRBdXRoU2lnblVwIiwic2lnblVwIiwicm91dGUiLCJyb290IiwiYnJhbmQiLCJhdXRvIiwiYXJiaVRyYWRlciIsImJ1dHRvbnMiLCJsb2dvIiwiZW1haWwiLCJmb3JtQ29udHJvbCIsInNlbGVjdEVtcHR5IiwidXNlU3RhdGUiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJhdXRoVHlwZSIsInNldEF1dGhUeXBlIiwidXNlclJvbGUiLCJzZXRVc2VyUm9sZSIsImF1dGhEaWFsb2dPcGVuIiwic2V0QXV0aERpYWxvZ09wZW4iLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImFwaUNhbGwiLCJzZXRBcGlDYWxsIiwidXNlRm9ybSIsImVtYWlsSW5wdXQiLCJwYXNzd29yZElucHV0IiwicGFzc3dvcmRJbnB1dFZlcmlmeSIsInZhbHVlcyIsInVwZGF0ZVZhbHVlIiwiaGFuZGxlQXV0aFR5cGUiLCJzZWxlY3Rpb24iLCJoYW5kbGVEaWFsb2dPcGVuIiwidXNlcl9pZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVHb0JhY2tSZXNldCIsImhhbmRsZVNlY29uZEZvcm1BdXRoIiwidmFsaWRhdGVFbWFpbCIsInNldFRpbWVvdXQiLCJmZXRjaCIsImhlYWRlcnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FB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SSxNQUFDLHdEQUFEO0FBQ0ksUUFBSSxFQUFDLE9BRFQ7QUFFSSxTQUFLLEVBQUMsV0FGVjtBQUdJLFdBQU8sRUFBRTtBQUFBLGFBQU1rQixjQUFjLENBQUMsT0FBRCxDQUFwQjtBQUFBLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQU1JLE1BQUMsd0RBQUQ7QUFDSSxRQUFJLEVBQUMsT0FEVDtBQUVJLFNBQUssRUFBQyxXQUZWO0FBR0ksV0FBTyxFQUFFO0FBQUEsYUFBTUEsY0FBYyxDQUFDLFFBQUQsQ0FBcEI7QUFBQSxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkosQ0FESCxHQWNPLG1FQUNJLE1BQUMsd0RBQUQ7QUFDSSxZQUFRLEVBQUVSLE9BRGQ7QUFFSSxRQUFJLEVBQUMsT0FGVDtBQUdJLFNBQUssRUFBQyxXQUhWO0FBSUksV0FBTyxFQUFFO0FBQUEsYUFBTVEsY0FBYyxDQUFDLElBQUQsQ0FBcEI7QUFBQSxLQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQU9JLE1BQUMsd0RBQUQ7QUFDSSxZQUFRLEVBQUVSLE9BRGQ7QUFFSSxRQUFJLEVBQUMsT0FGVDtBQUdJLFNBQUssRUFBQyxXQUhWO0FBSUksV0FBTyxFQUFFZSxvQkFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0V6QixRQUFRLEtBQUssT0FBYixHQUF1QixPQUF2QixHQUFpQyxTQUxuQyxDQVBKLENBZlosQ0FuRkosQ0FQSixDQURKO0FBNkhIOztHQW5PdUJyQixTO1VBcUJZaUMsc0Q7OztLQXJCWmpDLFM7QUFtT3ZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmYyNWExN2M0NWNkODNkZmZjODFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIENhcmQsXHJcbiAgICBDYXJkQWN0aW9ucyxcclxuICAgIENhcmRDb250ZW50LFxyXG4gICAgQnV0dG9uLFxyXG4gICAgVHlwb2dyYXBoeSxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIFNuYWNrYmFyLFxyXG4gICAgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICAgIFNlbGVjdCxcclxuICAgIE1lbnVJdGVtLFxyXG4gICAgRm9ybUNvbnRyb2wsXHJcbiAgICBGb3JtSGVscGVyVGV4dFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5pbXBvcnQgVXNlckF1dGhEaWFsb2cgZnJvbSAnLi9Vc2VyQXV0aERpYWxvZyc7XHJcbmltcG9ydCB7IGF1dGhTdGVwcyB9IGZyb20gJy4uL3V0aWxzL2F1dGhTdGVwcyc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL3V0aWxzL3VzZUZvcm0nO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUVtYWlsIH0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdGVFbWFpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkNhcmQoeyB1c2VTdHlsZXMgfSkge1xyXG4gICAgY29uc3QgeyBsYW5kaW5nLCBzZWNvbmRBdXRoTG9naW4sIHNlY29uZEF1dGhTaWduVXAgfSA9IGF1dGhTdGVwcy5hcHBTY3JpcHQ7XHJcbiAgICBjb25zdCB7IHNpZ25VcCB9ID0gYXV0aFN0ZXBzLnJvdXRlO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHJvb3QsXHJcbiAgICAgICAgYnJhbmQsXHJcbiAgICAgICAgYXV0byxcclxuICAgICAgICBhcmJpVHJhZGVyLFxyXG4gICAgICAgIGJ1dHRvbnMsXHJcbiAgICAgICAgbG9nbyxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBmb3JtQ29udHJvbCxcclxuICAgICAgICBzZWxlY3RFbXB0eVxyXG4gICAgfSA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3VzZXJJRCwgc2V0VXNlcklEXSA9IHVzZVN0YXRlKCd0ZXN0JylcclxuICAgIGNvbnN0IFthdXRoVHlwZSwgc2V0QXV0aFR5cGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlclJvbGUsIHNldFVzZXJSb2xlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2F1dGhEaWFsb2dPcGVuLCBzZXRBdXRoRGlhbG9nT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJ0Vycm9yIScpO1xyXG4gICAgY29uc3QgW2FwaUNhbGwsIHNldEFwaUNhbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyB2YWx1ZXMsIHVwZGF0ZVZhbHVlIH0gPSB1c2VGb3JtKHtcclxuICAgICAgICBlbWFpbElucHV0OiAnJyxcclxuICAgICAgICBwYXNzd29yZElucHV0OiAnJyxcclxuICAgICAgICBwYXNzd29yZElucHV0VmVyaWZ5OiAnJ1xyXG4gICAgfSlcclxuICAgIGNvbnN0IHsgZW1haWxJbnB1dCwgcGFzc3dvcmRJbnB1dCwgcGFzc3dvcmRJbnB1dFZlcmlmeSB9ID0gdmFsdWVzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUF1dGhUeXBlID0gKHNlbGVjdGlvbikgPT4ge1xyXG4gICAgICAgIHNldEF1dGhUeXBlKHNlbGVjdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURpYWxvZ09wZW4gPSAodXNlcl9pZCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGB1c2VySUQgaW4gaGRvICR7dXNlcl9pZH1gKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVHb0JhY2tSZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBdXRoVHlwZShudWxsKTtcclxuICAgICAgICBzZXRBcGlDYWxsKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlY29uZEZvcm1BdXRoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXQgIT09IHBhc3N3b3JkSW5wdXRWZXJpZnkgfHxcclxuICAgICAgICAgICAgYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXRWZXJpZnkgPT09ICcnIHx8XHJcbiAgICAgICAgICAgIGF1dGhUeXBlID09PSAnc2lnbnVwJyAmJiAhdXNlclJvbGUgfHxcclxuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dCA9PT0gJycgfHxcclxuICAgICAgICAgICAgZW1haWxJbnB1dCA9PT0gJycgfHxcclxuICAgICAgICAgICAgIXZhbGlkYXRlRW1haWwoZW1haWxJbnB1dClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkRXJyb3IgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXQgIT09IHBhc3N3b3JkSW5wdXRWZXJpZnkpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCEnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhdXRoVHlwZSA9PT0gJ3NpZ251cCcgJiYgcGFzc3dvcmRJbnB1dFZlcmlmeSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUmUtRW50ZXIgUGFzc3dvcmQgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09ICdzaWdudXAnICYmICF1c2VyUm9sZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdUcmFuc2F0aW9uIFJvbGUgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFzc3dvcmRJbnB1dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUGFzc3dvcmQgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW1haWxJbnB1dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnRW1haWwgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWxJbnB1dCkpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnTm90IGEgdmFsaWQgRW1haWwhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChhdXRoVHlwZSA9PT0gJ3NpZ251cCcpIHtcclxuICAgICAgICAgICAgICAgIHNldEFwaUNhbGwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3NpZ25VcH0vJHt1c2VyUm9sZX1gKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2lnblVwfS8ke3VzZXJSb2xlfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbElucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVzZXJfaWQgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcl9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1c2VyX2lkIGluIHJlcyAke3VzZXJfaWR9YClcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVEaWFsb2dPcGVuKHVzZXJfaWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmV0Y2ggbG9naW5gKVxyXG4gICAgICAgICAgICAgICAgc2V0QXBpQ2FsbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0QXV0aERpYWxvZ09wZW4odHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxVc2VyQXV0aERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgdXNlcl9pZD17dXNlcklEfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17YXV0aERpYWxvZ09wZW59XHJcbiAgICAgICAgICAgICAgICBzZXRBdXRoRGlhbG9nT3Blbj17c2V0QXV0aERpYWxvZ09wZW59XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVHb0JhY2tSZXNldD17aGFuZGxlR29CYWNrUmVzZXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17cm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnJhbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2hpdmFsZGkvNHdoZWVsei9ibG9iL21hc3Rlci9jbGllbnQvc3JjL2ltYWdlcy9BdXRvQXJiaVRyYWRlckxvZ28ucG5nP3Jhdz10cnVlXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT17bG9nb30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YXV0b30+YXV0bzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPXthcmJpVHJhZGVyfT5hcmJpLXRyYWRlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICB7YXBpQ2FsbCA9PT0gZmFsc2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aFR5cGUgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbmFja2JhciBvcGVuPXtwYXNzd29yZEVycm9yfSBvbkNsaWNrPXsoKSA9PiBzZXRQYXNzd29yZEVycm9yKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoVHlwZSA9PT0gJ3NpZ251cCcgPyA8c3Bhbj57c2Vjb25kQXV0aFNpZ25VcH08L3NwYW4+IDogPHNwYW4+e3NlY29uZEF1dGhMb2dpbn08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2VtYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhUeXBlID09PSAnc2lnbnVwJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZS1FbnRlciBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0VmVyaWZ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRJbnB1dFZlcmlmeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZElucHV0VmVyaWZ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Zm9ybUNvbnRyb2x9IGNvbG9yPVwic2Vjb25kYXJ5XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlclJvbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFVzZXJSb2xlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0RW1wdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnV2l0aG91dCBsYWJlbCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24gUm9sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJidXllclwiPkJ1eWluZzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInNlbGxlclwiPlNlbGxpbmc8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5UcmFuc2FjdGlvbiBSb2xlPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgY2xhc3NOYW1lPXtidXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXV0aFR5cGUgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aFR5cGUoJ2xvZ2luJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+TG9nZ2luZyBJbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGhUeXBlKCdzaWdudXAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TaWduaW5nIFVwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FwaUNhbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aFR5cGUobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPkdvIEJhY2s8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthcGlDYWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlY29uZEZvcm1BdXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YXV0aFR5cGUgPT09ICdsb2dpbicgPyBcIkxvZ2luXCIgOiBcIlNpZ24gVXBcIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=