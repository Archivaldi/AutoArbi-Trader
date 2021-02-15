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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("test"),
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

  var handleID = function handleID(user_id) {
    setUserID(user_id, function () {
      console.log({
        userID: userID
      });
    });
    handleDialogOpen();
    console.log({
      user_id: user_id
    });
  };

  var handleDialogOpen = function handleDialogOpen() {
    console.log({
      userID: userID
    });
  };

  var handleGoBackReset = function handleGoBackReset() {
    setAuthType(null);
    setApiCall(false);
  };

  var handleSecondFormAuth = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, _yield$res$json, user_id, test;

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
                test = user_id;
                handleID(test);
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
      lineNumber: 135,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: brand,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",
    alt: "logo",
    className: logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h5",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: auto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, "auto"), " ", __jsx("span", {
    className: arbiTrader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 60
    }
  }, "arbi-trader"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, apiCall === false ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, authType === null ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    align: "center",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
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
      lineNumber: 157,
      columnNumber: 41
    }
  }, __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 45
    }
  }, errorMessage)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 41
    }
  }, authType === 'signup' ? __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 70
    }
  }, secondAuthSignUp) : __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 104
    }
  }, secondAuthLogin)), __jsx("div", {
    className: email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
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
      lineNumber: 166,
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
      lineNumber: 176,
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
      lineNumber: 188,
      columnNumber: 53
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
    className: formControl,
    color: "secondary",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
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
      lineNumber: 199,
      columnNumber: 57
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "",
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 61
    }
  }, "Transaction Role"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "buyer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 61
    }
  }, "Buying"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
    value: "seller",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 61
    }
  }, "Selling")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["FormHelperText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 57
    }
  }, "Transaction Role")))))) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"], {
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardActions"], {
    className: buttons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
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
      lineNumber: 227,
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
      lineNumber: 232,
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
      lineNumber: 240,
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
      lineNumber: 246,
      columnNumber: 33
    }
  }, authType === 'login' ? "Login" : "Sign Up")))));
}

_s(LoginCard, "XkSN+YTMJXwt6Ioc94CE/Ml4R+8=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5DYXJkLmpzIl0sIm5hbWVzIjpbIkxvZ2luQ2FyZCIsInVzZVN0eWxlcyIsImF1dGhTdGVwcyIsImFwcFNjcmlwdCIsImxhbmRpbmciLCJzZWNvbmRBdXRoTG9naW4iLCJzZWNvbmRBdXRoU2lnblVwIiwic2lnblVwIiwicm91dGUiLCJyb290IiwiYnJhbmQiLCJhdXRvIiwiYXJiaVRyYWRlciIsImJ1dHRvbnMiLCJsb2dvIiwiZW1haWwiLCJmb3JtQ29udHJvbCIsInNlbGVjdEVtcHR5IiwidXNlU3RhdGUiLCJ1c2VySUQiLCJzZXRVc2VySUQiLCJhdXRoVHlwZSIsInNldEF1dGhUeXBlIiwidXNlclJvbGUiLCJzZXRVc2VyUm9sZSIsImF1dGhEaWFsb2dPcGVuIiwic2V0QXV0aERpYWxvZ09wZW4iLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImFwaUNhbGwiLCJzZXRBcGlDYWxsIiwidXNlRm9ybSIsImVtYWlsSW5wdXQiLCJwYXNzd29yZElucHV0IiwicGFzc3dvcmRJbnB1dFZlcmlmeSIsInZhbHVlcyIsInVwZGF0ZVZhbHVlIiwiaGFuZGxlQXV0aFR5cGUiLCJzZWxlY3Rpb24iLCJoYW5kbGVJRCIsInVzZXJfaWQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRGlhbG9nT3BlbiIsImhhbmRsZUdvQmFja1Jlc2V0IiwiaGFuZGxlU2Vjb25kRm9ybUF1dGgiLCJ2YWxpZGF0ZUVtYWlsIiwic2V0VGltZW91dCIsImZldGNoIiwiaGVhZGVycyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsInRlc3QiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtB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QixPQUF2QixHQUFpQyxTQUxuQyxDQVBKLENBZlosQ0FuRkosQ0FQSixDQURKO0FBNkhIOztHQTVPdUJyQixTO1VBcUJZaUMsc0Q7OztLQXJCWmpDLFM7QUE0T3ZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmE3MWI4NzJmMWIwZWIzODQ4ZDRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIENhcmQsXHJcbiAgICBDYXJkQWN0aW9ucyxcclxuICAgIENhcmRDb250ZW50LFxyXG4gICAgQnV0dG9uLFxyXG4gICAgVHlwb2dyYXBoeSxcclxuICAgIFRleHRGaWVsZCxcclxuICAgIFNuYWNrYmFyLFxyXG4gICAgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICAgIFNlbGVjdCxcclxuICAgIE1lbnVJdGVtLFxyXG4gICAgRm9ybUNvbnRyb2wsXHJcbiAgICBGb3JtSGVscGVyVGV4dFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5pbXBvcnQgVXNlckF1dGhEaWFsb2cgZnJvbSAnLi9Vc2VyQXV0aERpYWxvZyc7XHJcbmltcG9ydCB7IGF1dGhTdGVwcyB9IGZyb20gJy4uL3V0aWxzL2F1dGhTdGVwcyc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL3V0aWxzL3VzZUZvcm0nO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUVtYWlsIH0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdGVFbWFpbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkNhcmQoeyB1c2VTdHlsZXMgfSkge1xyXG4gICAgY29uc3QgeyBsYW5kaW5nLCBzZWNvbmRBdXRoTG9naW4sIHNlY29uZEF1dGhTaWduVXAgfSA9IGF1dGhTdGVwcy5hcHBTY3JpcHQ7XHJcbiAgICBjb25zdCB7IHNpZ25VcCB9ID0gYXV0aFN0ZXBzLnJvdXRlO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHJvb3QsXHJcbiAgICAgICAgYnJhbmQsXHJcbiAgICAgICAgYXV0byxcclxuICAgICAgICBhcmJpVHJhZGVyLFxyXG4gICAgICAgIGJ1dHRvbnMsXHJcbiAgICAgICAgbG9nbyxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBmb3JtQ29udHJvbCxcclxuICAgICAgICBzZWxlY3RFbXB0eVxyXG4gICAgfSA9IHVzZVN0eWxlcygpO1xyXG4gICAgY29uc3QgW3VzZXJJRCwgc2V0VXNlcklEXSA9IHVzZVN0YXRlKFwidGVzdFwiKVxyXG4gICAgY29uc3QgW2F1dGhUeXBlLCBzZXRBdXRoVHlwZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyUm9sZSwgc2V0VXNlclJvbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbYXV0aERpYWxvZ09wZW4sIHNldEF1dGhEaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnRXJyb3IhJyk7XHJcbiAgICBjb25zdCBbYXBpQ2FsbCwgc2V0QXBpQ2FsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IHZhbHVlcywgdXBkYXRlVmFsdWUgfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgIGVtYWlsSW5wdXQ6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQ6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkSW5wdXRWZXJpZnk6ICcnXHJcbiAgICB9KVxyXG4gICAgY29uc3QgeyBlbWFpbElucHV0LCBwYXNzd29yZElucHV0LCBwYXNzd29yZElucHV0VmVyaWZ5IH0gPSB2YWx1ZXM7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQXV0aFR5cGUgPSAoc2VsZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc2V0QXV0aFR5cGUoc2VsZWN0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSUQgPSAodXNlcl9pZCkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJJRCh1c2VyX2lkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgdXNlcklEIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBoYW5kbGVEaWFsb2dPcGVuKClcclxuICAgICAgICBjb25zb2xlLmxvZyh7IHVzZXJfaWQgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURpYWxvZ09wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyB1c2VySUQgfSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVHb0JhY2tSZXNldCA9ICgpID0+IHtcclxuICAgICAgICBzZXRBdXRoVHlwZShudWxsKTtcclxuICAgICAgICBzZXRBcGlDYWxsKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlY29uZEZvcm1BdXRoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXQgIT09IHBhc3N3b3JkSW5wdXRWZXJpZnkgfHxcclxuICAgICAgICAgICAgYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXRWZXJpZnkgPT09ICcnIHx8XHJcbiAgICAgICAgICAgIGF1dGhUeXBlID09PSAnc2lnbnVwJyAmJiAhdXNlclJvbGUgfHxcclxuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dCA9PT0gJycgfHxcclxuICAgICAgICAgICAgZW1haWxJbnB1dCA9PT0gJycgfHxcclxuICAgICAgICAgICAgIXZhbGlkYXRlRW1haWwoZW1haWxJbnB1dClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKHBhc3N3b3JkRXJyb3IgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZEVycm9yKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09ICdzaWdudXAnICYmIHBhc3N3b3JkSW5wdXQgIT09IHBhc3N3b3JkSW5wdXRWZXJpZnkpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCEnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhdXRoVHlwZSA9PT0gJ3NpZ251cCcgJiYgcGFzc3dvcmRJbnB1dFZlcmlmeSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUmUtRW50ZXIgUGFzc3dvcmQgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXV0aFR5cGUgPT09ICdzaWdudXAnICYmICF1c2VyUm9sZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdUcmFuc2F0aW9uIFJvbGUgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFzc3dvcmRJbnB1dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnUGFzc3dvcmQgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW1haWxJbnB1dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnRW1haWwgRW1wdHkhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWxJbnB1dCkpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnTm90IGEgdmFsaWQgRW1haWwhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChhdXRoVHlwZSA9PT0gJ3NpZ251cCcpIHtcclxuICAgICAgICAgICAgICAgIHNldEFwaUNhbGwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3NpZ25VcH0vJHt1c2VyUm9sZX1gKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2lnblVwfS8ke3VzZXJSb2xlfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbElucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHVzZXJfaWQgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcl9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gdXNlcl9pZFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUlEKHRlc3QpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmV0Y2ggbG9naW5gKVxyXG4gICAgICAgICAgICAgICAgc2V0QXBpQ2FsbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgc2V0QXV0aERpYWxvZ09wZW4odHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxVc2VyQXV0aERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgdXNlcl9pZD17dXNlcklEfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17YXV0aERpYWxvZ09wZW59XHJcbiAgICAgICAgICAgICAgICBzZXRBdXRoRGlhbG9nT3Blbj17c2V0QXV0aERpYWxvZ09wZW59XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVHb0JhY2tSZXNldD17aGFuZGxlR29CYWNrUmVzZXR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17cm9vdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnJhbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyY2hpdmFsZGkvNHdoZWVsei9ibG9iL21hc3Rlci9jbGllbnQvc3JjL2ltYWdlcy9BdXRvQXJiaVRyYWRlckxvZ28ucG5nP3Jhdz10cnVlXCIgYWx0PVwibG9nb1wiIGNsYXNzTmFtZT17bG9nb30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YXV0b30+YXV0bzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPXthcmJpVHJhZGVyfT5hcmJpLXRyYWRlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICB7YXBpQ2FsbCA9PT0gZmFsc2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXV0aFR5cGUgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhbmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbmFja2JhciBvcGVuPXtwYXNzd29yZEVycm9yfSBvbkNsaWNrPXsoKSA9PiBzZXRQYXNzd29yZEVycm9yKGZhbHNlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbmFja2Jhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoVHlwZSA9PT0gJ3NpZ251cCcgPyA8c3Bhbj57c2Vjb25kQXV0aFNpZ25VcH08L3NwYW4+IDogPHNwYW4+e3NlY29uZEF1dGhMb2dpbn08L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2VtYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhUeXBlID09PSAnc2lnbnVwJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZS1FbnRlciBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0VmVyaWZ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRJbnB1dFZlcmlmeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZElucHV0VmVyaWZ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17Zm9ybUNvbnRyb2x9IGNvbG9yPVwic2Vjb25kYXJ5XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlclJvbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFVzZXJSb2xlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVtcHR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0RW1wdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnV2l0aG91dCBsYWJlbCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24gUm9sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJidXllclwiPkJ1eWluZzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInNlbGxlclwiPlNlbGxpbmc8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSGVscGVyVGV4dD5UcmFuc2FjdGlvbiBSb2xlPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnMgY2xhc3NOYW1lPXtidXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICB7YXV0aFR5cGUgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aFR5cGUoJ2xvZ2luJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+TG9nZ2luZyBJbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGhUeXBlKCdzaWdudXAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TaWduaW5nIFVwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FwaUNhbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aFR5cGUobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPkdvIEJhY2s8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthcGlDYWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlY29uZEZvcm1BdXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YXV0aFR5cGUgPT09ICdsb2dpbicgPyBcIkxvZ2luXCIgOiBcIlNpZ24gVXBcIn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=