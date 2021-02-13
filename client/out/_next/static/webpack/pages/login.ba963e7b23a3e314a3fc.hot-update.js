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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_authSteps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/authSteps */ "./src/utils/authSteps.js");
/* harmony import */ var _styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/AuthDialogSyles */ "./src/styles/AuthDialogSyles.js");



var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\UserAuthDialog.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function FormDialog(_ref) {
  _s();

  var open = _ref.open,
      handleDialogClose = _ref.handleDialogClose;

  var _useStyles = Object(_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_6__["useStyles"])(),
      content = _useStyles.content,
      typos = _useStyles.typos,
      currentChar = _useStyles.currentChar,
      charsToBeTyped = _useStyles.charsToBeTyped,
      welcome = _useStyles.welcome;

  var message = _utils_authSteps__WEBPACK_IMPORTED_MODULE_5__["authSteps"].message,
      route = _utils_authSteps__WEBPACK_IMPORTED_MODULE_5__["authSteps"].route,
      userId = _utils_authSteps__WEBPACK_IMPORTED_MODULE_5__["authSteps"].userId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(userId),
      userID = _useState[0];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      checkInput = _useState2[0],
      setCheckInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      auth = _useState3[0],
      setAuth = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      authSession = _useState4[0],
      setAuthSession = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      increment = _useState5[0],
      setIncrement = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      input = _useState6[0],
      setInput = _useState6[1];

  var tDNA = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var handleIncrementUp = function handleIncrementUp() {
    tDNA.current.start();
    setCheckInput(false);
    setInput('');
    setAuthSession(authSession + 1);
    increment === message.length - 1 ? setIncrement(0) : setIncrement(increment + 1);
  };

  var backAndReset = function backAndReset() {
    tDNA.current.reset();
    setCheckInput(false);
    setIncrement(0);
    handleDialogClose();
  };

  var checkPattern = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var typingPattern, patternQuality, res, _yield$res$json, _message;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tDNA.current.stop();
              setCheckInput(true);
              _context.next = 4;
              return tDNA.current.getTypingPattern({
                type: 0,
                text: input
              });

            case 4:
              typingPattern = _context.sent;
              patternQuality = tDNA.current.getQuality(typingPattern);

              if (!(patternQuality > 0.3)) {
                _context.next = 17;
                break;
              }

              _context.next = 9;
              return fetch(route.signUp, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                  typingPattern: typingPattern,
                  patternQuality: patternQuality,
                  authSession: authSession,
                  userID: userID,
                  input: input
                })
              });

            case 9:
              res = _context.sent;
              _context.next = 12;
              return res.json();

            case 12:
              _yield$res$json = _context.sent;
              _message = _yield$res$json.message;

              if (res.status === 200) {
                handleIncrementUp();

                if (_message.result === 1 && _message.enrollment === 1) {
                  setAuth(true);
                  setTimeout(function () {
                    router.push('/');
                  }, 1000);
                }
              } else {
                alert("An error occurred on our end. Please refresh and try again.");
                handleIncrementUp();
              }

              _context.next = 18;
              break;

            case 17:
              handleIncrementUp();

            case 18:
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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!tDNA.current) {
      tDNA.current = new TypingDNA();
    }
  }, [tDNA]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    input.length === message[increment].length && checkPattern();
  }, [input]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Dialog"], {
    open: open,
    onClose: backAndReset,
    "aria-labelledby": "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogTitle"], {
    id: "form-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("img", {
    width: "200",
    src: "https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 53
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContent"], {
    className: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, "To ensure the highest level of security, we are using a technology that will test who you are by the way you type! ", !auth && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 157
    }
  }, "*Please note, it may take up to 5 attempts."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "body1",
    component: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, !auth ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, "Please type ", __jsx("span", {
    className: typos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 49
    }
  }, "(typos accepted)"), ":", " ", message[increment].substring(0, input.length), __jsx("span", {
    className: currentChar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  }, message[increment].charAt(input.length)), __jsx("span", {
    className: charsToBeTyped,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 37
    }
  }, message[increment].substring(input.length + 1, message[increment].length))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    autoFocus: true,
    inputProps: {
      spellCheck: 'false'
    },
    autoComplete: "off",
    margin: "dense",
    id: "Tdna",
    label: "Type Phrase Here",
    color: "secondary",
    value: input,
    disabled: checkInput,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 33
    }
  })) : __jsx("h3", {
    className: welcome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 33
    }
  }, "Welcome ", userID))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: backAndReset,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, "Go Back"))));
}

_s(FormDialog, "0IxisCqopI3X8DGno3h4sueNssw=", false, function () {
  return [_styles_AuthDialogSyles__WEBPACK_IMPORTED_MODULE_6__["useStyles"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckF1dGhEaWFsb2cuanMiXSwibmFtZXMiOlsiRm9ybURpYWxvZyIsIm9wZW4iLCJoYW5kbGVEaWFsb2dDbG9zZSIsInVzZVN0eWxlcyIsImNvbnRlbnQiLCJ0eXBvcyIsImN1cnJlbnRDaGFyIiwiY2hhcnNUb0JlVHlwZWQiLCJ3ZWxjb21lIiwibWVzc2FnZSIsImF1dGhTdGVwcyIsInJvdXRlIiwidXNlcklkIiwidXNlU3RhdGUiLCJ1c2VySUQiLCJjaGVja0lucHV0Iiwic2V0Q2hlY2tJbnB1dCIsImF1dGgiLCJzZXRBdXRoIiwiYXV0aFNlc3Npb24iLCJzZXRBdXRoU2Vzc2lvbiIsImluY3JlbWVudCIsInNldEluY3JlbWVudCIsImlucHV0Iiwic2V0SW5wdXQiLCJ0RE5BIiwidXNlUmVmIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlSW5jcmVtZW50VXAiLCJjdXJyZW50Iiwic3RhcnQiLCJsZW5ndGgiLCJiYWNrQW5kUmVzZXQiLCJyZXNldCIsImNoZWNrUGF0dGVybiIsInN0b3AiLCJnZXRUeXBpbmdQYXR0ZXJuIiwidHlwZSIsInRleHQiLCJ0eXBpbmdQYXR0ZXJuIiwicGF0dGVyblF1YWxpdHkiLCJnZXRRdWFsaXR5IiwiZmV0Y2giLCJzaWduVXAiLCJoZWFkZXJzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJqc29uIiwic3RhdHVzIiwicmVzdWx0IiwiZW5yb2xsbWVudCIsInNldFRpbWVvdXQiLCJwdXNoIiwiYWxlcnQiLCJ1c2VFZmZlY3QiLCJUeXBpbmdETkEiLCJzdWJzdHJpbmciLCJjaGFyQXQiLCJzcGVsbENoZWNrIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQWlEO0FBQUE7O0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxpQkFBcUIsUUFBckJBLGlCQUFxQjs7QUFBQSxtQkFPeERDLHlFQUFTLEVBUCtDO0FBQUEsTUFFeERDLE9BRndELGNBRXhEQSxPQUZ3RDtBQUFBLE1BR3hEQyxLQUh3RCxjQUd4REEsS0FId0Q7QUFBQSxNQUl4REMsV0FKd0QsY0FJeERBLFdBSndEO0FBQUEsTUFLeERDLGNBTHdELGNBS3hEQSxjQUx3RDtBQUFBLE1BTXhEQyxPQU53RCxjQU14REEsT0FOd0Q7O0FBQUEsTUFRcERDLE9BUm9ELEdBUXpCQywwREFSeUIsQ0FRcERELE9BUm9EO0FBQUEsTUFRM0NFLEtBUjJDLEdBUXpCRCwwREFSeUIsQ0FRM0NDLEtBUjJDO0FBQUEsTUFRcENDLE1BUm9DLEdBUXpCRiwwREFSeUIsQ0FRcENFLE1BUm9DOztBQUFBLGtCQVMzQ0Msc0RBQVEsQ0FBQ0QsTUFBRCxDQVRtQztBQUFBLE1BU3JERSxNQVRxRDs7QUFBQSxtQkFXeEJELHNEQUFRLENBQUMsS0FBRCxDQVhnQjtBQUFBLE1BV3JERSxVQVhxRDtBQUFBLE1BV3pDQyxhQVh5Qzs7QUFBQSxtQkFZcENILHNEQUFRLENBQUMsS0FBRCxDQVo0QjtBQUFBLE1BWXJESSxJQVpxRDtBQUFBLE1BWS9DQyxPQVorQzs7QUFBQSxtQkFhdEJMLHNEQUFRLENBQUMsQ0FBRCxDQWJjO0FBQUEsTUFhckRNLFdBYnFEO0FBQUEsTUFheENDLGNBYndDOztBQUFBLG1CQWMxQlAsc0RBQVEsQ0FBQyxDQUFELENBZGtCO0FBQUEsTUFjckRRLFNBZHFEO0FBQUEsTUFjMUNDLFlBZDBDOztBQUFBLG1CQWVsQ1Qsc0RBQVEsQ0FBQyxFQUFELENBZjBCO0FBQUEsTUFlckRVLEtBZnFEO0FBQUEsTUFlOUNDLFFBZjhDOztBQWdCNUQsTUFBTUMsSUFBSSxHQUFHQyxvREFBTSxFQUFuQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzVCSixRQUFJLENBQUNLLE9BQUwsQ0FBYUMsS0FBYjtBQUNBZixpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBUSxZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FKLGtCQUFjLENBQUNELFdBQVcsR0FBRyxDQUFmLENBQWQ7QUFDQUUsYUFBUyxLQUFLWixPQUFPLENBQUN1QixNQUFSLEdBQWlCLENBQS9CLEdBQ0lWLFlBQVksQ0FBQyxDQUFELENBRGhCLEdBRUlBLFlBQVksQ0FBQ0QsU0FBUyxHQUFHLENBQWIsQ0FGaEI7QUFHSCxHQVJEOztBQVVBLE1BQU1ZLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJSLFFBQUksQ0FBQ0ssT0FBTCxDQUFhSSxLQUFiO0FBQ0FsQixpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBTSxnQkFBWSxDQUFDLENBQUQsQ0FBWjtBQUNBcEIscUJBQWlCO0FBQ3BCLEdBTEQ7O0FBT0EsTUFBTWlDLFlBQVk7QUFBQSxpTUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCVixrQkFBSSxDQUFDSyxPQUFMLENBQWFNLElBQWI7QUFDQXBCLDJCQUFhLENBQUMsSUFBRCxDQUFiO0FBRmlCO0FBQUEscUJBR1dTLElBQUksQ0FBQ0ssT0FBTCxDQUFhTyxnQkFBYixDQUE4QjtBQUN0REMsb0JBQUksRUFBRSxDQURnRDtBQUV0REMsb0JBQUksRUFBRWhCO0FBRmdELGVBQTlCLENBSFg7O0FBQUE7QUFHWGlCLDJCQUhXO0FBT1hDLDRCQVBXLEdBT01oQixJQUFJLENBQUNLLE9BQUwsQ0FBYVksVUFBYixDQUF3QkYsYUFBeEIsQ0FQTjs7QUFBQSxvQkFRYkMsY0FBYyxHQUFHLEdBUko7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFTS0UsS0FBSyxDQUFDaEMsS0FBSyxDQUFDaUMsTUFBUCxFQUFlO0FBQ2xDQyx1QkFBTyxFQUFFO0FBQ0wsNEJBQVUsa0JBREw7QUFFTCxrQ0FBZ0I7QUFGWCxpQkFEeUI7QUFLbENDLHNCQUFNLEVBQUUsTUFMMEI7QUFNbENDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCVCwrQkFBYSxFQUFiQSxhQURpQjtBQUVqQkMsZ0NBQWMsRUFBZEEsY0FGaUI7QUFHakJ0Qiw2QkFBVyxFQUFYQSxXQUhpQjtBQUlqQkwsd0JBQU0sRUFBTkEsTUFKaUI7QUFLakJTLHVCQUFLLEVBQUxBO0FBTGlCLGlCQUFmO0FBTjRCLGVBQWYsQ0FUVjs7QUFBQTtBQVNQMkIsaUJBVE87QUFBQTtBQUFBLHFCQXVCYUEsR0FBRyxDQUFDQyxJQUFKLEVBdkJiOztBQUFBO0FBQUE7QUF1QkwxQyxzQkF2QkssbUJBdUJMQSxPQXZCSzs7QUF5QmIsa0JBQUl5QyxHQUFHLENBQUNFLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUNwQnZCLGlDQUFpQjs7QUFDakIsb0JBQUlwQixRQUFPLENBQUM0QyxNQUFSLEtBQW1CLENBQW5CLElBQXdCNUMsUUFBTyxDQUFDNkMsVUFBUixLQUF1QixDQUFuRCxFQUFzRDtBQUNsRHBDLHlCQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FxQyw0QkFBVSxDQUFDLFlBQU07QUFDYjVCLDBCQUFNLENBQUM2QixJQUFQLENBQVksR0FBWjtBQUNILG1CQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7QUFDSixlQVJELE1BUU87QUFDSEMscUJBQUssQ0FBQyw2REFBRCxDQUFMO0FBQ0E1QixpQ0FBaUI7QUFDcEI7O0FBcENZO0FBQUE7O0FBQUE7QUFzQ2JBLCtCQUFpQjs7QUF0Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWk0sWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUEwQ0F1Qix5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLENBQUNqQyxJQUFJLENBQUNLLE9BQVYsRUFBbUI7QUFDZkwsVUFBSSxDQUFDSyxPQUFMLEdBQWUsSUFBSTZCLFNBQUosRUFBZjtBQUNIO0FBQ0osR0FKUSxFQUlOLENBQUNsQyxJQUFELENBSk0sQ0FBVDtBQU1BaUMseURBQVMsQ0FBQyxZQUFNO0FBQ1puQyxTQUFLLENBQUNTLE1BQU4sS0FBaUJ2QixPQUFPLENBQUNZLFNBQUQsQ0FBUCxDQUFtQlcsTUFBcEMsSUFBOENHLFlBQVksRUFBMUQ7QUFDSCxHQUZRLEVBRU4sQ0FBQ1osS0FBRCxDQUZNLENBQVQ7QUFJQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVEsUUFBSSxFQUFFdEIsSUFBZDtBQUFvQixXQUFPLEVBQUVnQyxZQUE3QjtBQUEyQyx1QkFBZ0IsbUJBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQWEsTUFBRSxFQUFDLG1CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9DO0FBQUssU0FBSyxFQUFDLEtBQVg7QUFBaUIsT0FBRyxFQUFDLG1HQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXBDLENBREosRUFFSSxNQUFDLCtEQUFEO0FBQWUsYUFBUyxFQUFFN0IsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEhBQTBILENBQUNhLElBQUQsSUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQUFwSSxDQURKLENBREosRUFJSSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLGFBQVMsRUFBQyxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ssQ0FBQ0EsSUFBRCxHQUNHLG1FQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2dCO0FBQU0sYUFBUyxFQUFFWixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURoQixPQUNpRSxHQURqRSxFQUVLSSxPQUFPLENBQUNZLFNBQUQsQ0FBUCxDQUFtQnVDLFNBQW5CLENBQTZCLENBQTdCLEVBQWdDckMsS0FBSyxDQUFDUyxNQUF0QyxDQUZMLEVBR0k7QUFBTSxhQUFTLEVBQUUxQixXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCRyxPQUFPLENBQUNZLFNBQUQsQ0FBUCxDQUFtQndDLE1BQW5CLENBQTBCdEMsS0FBSyxDQUFDUyxNQUFoQyxDQUEvQixDQUhKLEVBSUk7QUFBTSxhQUFTLEVBQUV6QixjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDRSxPQUFPLENBQUNZLFNBQUQsQ0FBUCxDQUFtQnVDLFNBQW5CLENBQTZCckMsS0FBSyxDQUFDUyxNQUFOLEdBQWUsQ0FBNUMsRUFBK0N2QixPQUFPLENBQUNZLFNBQUQsQ0FBUCxDQUFtQlcsTUFBbEUsQ0FBbEMsQ0FKSixDQURKLEVBT0ksTUFBQywyREFBRDtBQUNJLGFBQVMsTUFEYjtBQUVJLGNBQVUsRUFBRTtBQUFFOEIsZ0JBQVUsRUFBRTtBQUFkLEtBRmhCO0FBR0ksZ0JBQVksRUFBQyxLQUhqQjtBQUlJLFVBQU0sRUFBQyxPQUpYO0FBS0ksTUFBRSxFQUFDLE1BTFA7QUFNSSxTQUFLLEVBQUMsa0JBTlY7QUFPSSxTQUFLLEVBQUMsV0FQVjtBQVFJLFNBQUssRUFBRXZDLEtBUlg7QUFTSSxZQUFRLEVBQUVSLFVBVGQ7QUFVSSxZQUFRLEVBQUUsa0JBQUFnRCxDQUFDO0FBQUEsYUFBSXZDLFFBQVEsQ0FBQ3VDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFBQSxLQVZmO0FBV0ksYUFBUyxNQVhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURILEdBdUJPO0FBQUksYUFBUyxFQUFFekQsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQ00sTUFBakMsQ0F4QlosQ0FKSixDQUZKLEVBa0NJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBUSxXQUFPLEVBQUVtQixZQUFqQjtBQUErQixTQUFLLEVBQUMsV0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLENBbENKLENBREosQ0FESjtBQTRDSDs7R0FwSXVCakMsVTtVQU9oQkcsaUUsRUFVV3lCLHFEOzs7S0FqQks1QixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmJhOTYzZTdiMjNhM2UzMTRhM2ZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtcclxuICAgIEJ1dHRvbixcclxuICAgIFRleHRGaWVsZCxcclxuICAgIERpYWxvZyxcclxuICAgIERpYWxvZ0FjdGlvbnMsXHJcbiAgICBEaWFsb2dDb250ZW50LFxyXG4gICAgRGlhbG9nQ29udGVudFRleHQsXHJcbiAgICBEaWFsb2dUaXRsZSxcclxuICAgIFR5cG9ncmFwaHlcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGF1dGhTdGVwcyB9IGZyb20gJy4uL3V0aWxzL2F1dGhTdGVwcyc7XHJcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9BdXRoRGlhbG9nU3lsZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybURpYWxvZyh7IG9wZW4sIGhhbmRsZURpYWxvZ0Nsb3NlIH0pIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBjb250ZW50LFxyXG4gICAgICAgIHR5cG9zLFxyXG4gICAgICAgIGN1cnJlbnRDaGFyLFxyXG4gICAgICAgIGNoYXJzVG9CZVR5cGVkLFxyXG4gICAgICAgIHdlbGNvbWVcclxuICAgIH0gPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHsgbWVzc2FnZSwgcm91dGUsIHVzZXJJZCB9ID0gYXV0aFN0ZXBzO1xyXG4gICAgY29uc3QgW3VzZXJJRF0gPSB1c2VTdGF0ZSh1c2VySWQpO1xyXG5cclxuICAgIGNvbnN0IFtjaGVja0lucHV0LCBzZXRDaGVja0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFthdXRoU2Vzc2lvbiwgc2V0QXV0aFNlc3Npb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaW5jcmVtZW50LCBzZXRJbmNyZW1lbnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IHRETkEgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUluY3JlbWVudFVwID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdGFydCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgIHNldElucHV0KCcnKTtcclxuICAgICAgICBzZXRBdXRoU2Vzc2lvbihhdXRoU2Vzc2lvbiArIDEpXHJcbiAgICAgICAgaW5jcmVtZW50ID09PSBtZXNzYWdlLmxlbmd0aCAtIDEgP1xyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoMCkgOlxyXG4gICAgICAgICAgICBzZXRJbmNyZW1lbnQoaW5jcmVtZW50ICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmFja0FuZFJlc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5yZXNldCgpO1xyXG4gICAgICAgIHNldENoZWNrSW5wdXQoZmFsc2UpO1xyXG4gICAgICAgIHNldEluY3JlbWVudCgwKTtcclxuICAgICAgICBoYW5kbGVEaWFsb2dDbG9zZSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRETkEuY3VycmVudC5zdG9wKCk7XHJcbiAgICAgICAgc2V0Q2hlY2tJbnB1dCh0cnVlKTtcclxuICAgICAgICBjb25zdCB0eXBpbmdQYXR0ZXJuID0gYXdhaXQgdEROQS5jdXJyZW50LmdldFR5cGluZ1BhdHRlcm4oe1xyXG4gICAgICAgICAgICB0eXBlOiAwLFxyXG4gICAgICAgICAgICB0ZXh0OiBpbnB1dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5RdWFsaXR5ID0gdEROQS5jdXJyZW50LmdldFF1YWxpdHkodHlwaW5nUGF0dGVybik7XHJcbiAgICAgICAgaWYgKHBhdHRlcm5RdWFsaXR5ID4gMC4zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHJvdXRlLnNpZ25VcCwge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwaW5nUGF0dGVybixcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuUXVhbGl0eSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRoU2Vzc2lvbixcclxuICAgICAgICAgICAgICAgICAgICB1c2VySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFVwKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5yZXN1bHQgPT09IDEgJiYgbWVzc2FnZS5lbnJvbGxtZW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QXV0aCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBvbiBvdXIgZW5kLiBQbGVhc2UgcmVmcmVzaCBhbmQgdHJ5IGFnYWluLlwiKVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50VXAoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdEROQS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHRETkEuY3VycmVudCA9IG5ldyBUeXBpbmdETkEoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbdEROQV0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpbnB1dC5sZW5ndGggPT09IG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGggJiYgY2hlY2tQYXR0ZXJuKClcclxuICAgIH0sIFtpbnB1dF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGlhbG9nIG9wZW49e29wZW59IG9uQ2xvc2U9e2JhY2tBbmRSZXNldH0gYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImZvcm0tZGlhbG9nLXRpdGxlXCI+PGltZyB3aWR0aD1cIjIwMFwiIHNyYz1cImh0dHBzOi8vZ2l0aHViLmNvbS9BcmNoaXZhbGRpLzR3aGVlbHovYmxvYi9tYXN0ZXIvY2xpZW50L3NyYy9pbWFnZXMvU2hvcHBlZFR5cGluZ0ROQS5wbmc/cmF3PXRydWVcIiAvPjwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9e2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VG8gZW5zdXJlIHRoZSBoaWdoZXN0IGxldmVsIG9mIHNlY3VyaXR5LCB3ZSBhcmUgdXNpbmcgYSB0ZWNobm9sb2d5IHRoYXQgd2lsbCB0ZXN0IHdobyB5b3UgYXJlIGJ5IHRoZSB3YXkgeW91IHR5cGUhIHshYXV0aCAmJiAoPHNwYW4+KlBsZWFzZSBub3RlLCBpdCBtYXkgdGFrZSB1cCB0byA1IGF0dGVtcHRzLjwvc3Bhbj4pfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImJvZHkxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshYXV0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSB0eXBlIDxzcGFuIGNsYXNzTmFtZT17dHlwb3N9Pih0eXBvcyBhY2NlcHRlZCk8L3NwYW4+OntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VbaW5jcmVtZW50XS5zdWJzdHJpbmcoMCwgaW5wdXQubGVuZ3RoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjdXJyZW50Q2hhcn0+e21lc3NhZ2VbaW5jcmVtZW50XS5jaGFyQXQoaW5wdXQubGVuZ3RoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2hhcnNUb0JlVHlwZWR9PnttZXNzYWdlW2luY3JlbWVudF0uc3Vic3RyaW5nKGlucHV0Lmxlbmd0aCArIDEsIG1lc3NhZ2VbaW5jcmVtZW50XS5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyBzcGVsbENoZWNrOiAnZmFsc2UnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJUZG5hXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUeXBlIFBocmFzZSBIZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXt3ZWxjb21lfT5XZWxjb21lIHt1c2VySUR9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtiYWNrQW5kUmVzZXR9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==