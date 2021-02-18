webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./src/components/UserInformationDialog.js":
/*!*************************************************!*\
  !*** ./src/components/UserInformationDialog.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserInformationDialog; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _styles_UserInformationDialogStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/UserInformationDialogStyles */ "./src/styles/UserInformationDialogStyles.js");
/* harmony import */ var _utils_authSteps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/authSteps */ "./src/utils/authSteps.js");



var _jsxFileName = "C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\UserInformationDialog.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function UserInformationDialog(_ref) {
  _s();

  var open = _ref.open;

  var _useStyles = Object(_styles_UserInformationDialogStyles__WEBPACK_IMPORTED_MODULE_4__["useStyles"])(),
      content = _useStyles.content,
      root = _useStyles.root,
      logout = _useStyles.logout;

  var handleLogout = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(logout, {
                method: 'POST'
              });

            case 2:
              res = _context.sent;
              window.location.reload();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLogout() {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
    open: open // onClose={handleClose}
    ,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogTitle"], {
    id: "alert-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Please fill out this form 😊"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], {
    className: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("form", {
    className: root,
    noValidate: true,
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
    variant: "outlined",
    id: "outlined-size-normal",
    label: "Standard",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    size: "large",
    className: logout,
    onClick: handleLogout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Log Out"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    size: "large",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, "Submit"))));
}

_s(UserInformationDialog, "chsMnwPQtoP6pE70tItReDpdG44=", false, function () {
  return [_styles_UserInformationDialogStyles__WEBPACK_IMPORTED_MODULE_4__["useStyles"]];
});

_c = UserInformationDialog;

var _c;

$RefreshReg$(_c, "UserInformationDialog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm9ybWF0aW9uRGlhbG9nLmpzIl0sIm5hbWVzIjpbIlVzZXJJbmZvcm1hdGlvbkRpYWxvZyIsIm9wZW4iLCJ1c2VTdHlsZXMiLCJjb250ZW50Iiwicm9vdCIsImxvZ291dCIsImhhbmRsZUxvZ291dCIsImZldGNoIiwibWV0aG9kIiwicmVzIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBRWUsU0FBU0EscUJBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsbUJBQ2xCQyxxRkFBUyxFQURTO0FBQUEsTUFDNUNDLE9BRDRDLGNBQzVDQSxPQUQ0QztBQUFBLE1BQ25DQyxJQURtQyxjQUNuQ0EsSUFEbUM7QUFBQSxNQUM3QkMsTUFENkIsY0FDN0JBLE1BRDZCOztBQUdwRCxNQUFNQyxZQUFZO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQ0MsS0FBSyxDQUFDRixNQUFELEVBQVM7QUFDNUJHLHNCQUFNLEVBQUU7QUFEb0IsZUFBVCxDQUROOztBQUFBO0FBQ1hDLGlCQURXO0FBSWpCQyxvQkFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjs7QUFKaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWk4sWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFPQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQ0ksUUFBSSxFQUFFTCxJQURWLENBRUk7QUFGSjtBQUdJLHVCQUFnQixvQkFIcEI7QUFJSSx3QkFBaUIsMEJBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSSxNQUFDLDZEQUFEO0FBQWEsTUFBRSxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDLDhCQUF0QyxDQU5KLEVBT0ksTUFBQywrREFBRDtBQUFlLGFBQVMsRUFBRUUsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFFQyxJQUFqQjtBQUF1QixjQUFVLE1BQWpDO0FBQWtDLGdCQUFZLEVBQUMsS0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQU9JLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQVVJLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVdJLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixFQVlJLE1BQUMsMkRBQUQ7QUFBVyxXQUFPLEVBQUMsVUFBbkI7QUFBOEIsTUFBRSxFQUFDLHNCQUFqQztBQUF3RCxTQUFLLEVBQUMsVUFBOUQ7QUFBeUUsU0FBSyxFQUFDLFdBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixDQURKLENBUEosRUF1QkksTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLGFBQVMsRUFBRUMsTUFBaEM7QUFBd0MsV0FBTyxFQUFFQyxZQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFJSSxNQUFDLHdEQUFEO0FBQVEsUUFBSSxFQUFDLE9BQWI7QUFBcUIsU0FBSyxFQUFDLFdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixDQXZCSixDQURKLENBREo7QUFvQ0g7O0dBOUN1Qk4scUI7VUFDY0UsNkU7OztLQURkRixxQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuMTZlMDAzOGFmOWU2NjQ1N2JiZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBEaWFsb2csXHJcbiAgICBEaWFsb2dBY3Rpb25zLFxyXG4gICAgRGlhbG9nQ29udGVudCxcclxuICAgIERpYWxvZ0NvbnRlbnRUZXh0LFxyXG4gICAgRGlhbG9nVGl0bGUsXHJcbiAgICBUZXh0RmllbGRcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9Vc2VySW5mb3JtYXRpb25EaWFsb2dTdHlsZXMnO1xyXG5pbXBvcnQgeyBhdXRoU3RlcHMgfSBmcm9tICcuLi91dGlscy9hdXRoU3RlcHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckluZm9ybWF0aW9uRGlhbG9nKHsgb3BlbiB9KSB7XHJcbiAgICBjb25zdCB7IGNvbnRlbnQsIHJvb3QsIGxvZ291dCB9ID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGxvZ291dCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJhbGVydC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImFsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPntcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZvcm0g8J+YilwifTwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9e2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17cm9vdH0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpZD1cIm91dGxpbmVkLXNpemUtbm9ybWFsXCIgbGFiZWw9XCJTdGFuZGFyZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsYXJnZVwiIGNsYXNzTmFtZT17bG9nb3V0fSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGFyZ2VcIiBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==