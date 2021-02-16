webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./src/styles/GlobalDrawerStyles.js":
/*!******************************************!*\
  !*** ./src/styles/GlobalDrawerStyles.js ***!
  \******************************************/
/*! exports provided: uploadStyles, dashboardStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadStyles", function() { return uploadStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardStyles", function() { return dashboardStyles; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var materialUIStyles = function materialUIStyles(theme, page) {
  var drawerWidth = 240;
  var globalStyles = {
    root: {
      display: 'flex'
    },
    appBar: {
      backgroundColor: 'primary',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1
    }, theme.breakpoints.up('sm'), {
      width: theme.spacing(9) + 1
    }),
    toolbar: _objectSpread({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column'
    },
    logo: {
      maxWidth: 50,
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(0)
    },
    auto: {
      color: "#62bdf9"
    },
    arbiTrader: {
      color: "#0081cb"
    },
    exitIcon: {
      color: '#ffcccb'
    }
  };

  switch (page) {
    case 'uploadStyles':
      return _objectSpread(_objectSpread({}, globalStyles), {}, {
        content: _objectSpread(_objectSpread({}, globalStyles.content), {}, {
          gridTemplateRows: '5vh 17.5vh 17.5vh 17.5vh 17.5vh'
        })
      });

    case 'dashboardStyles':
      {
        return _objectSpread(_objectSpread({}, globalStyles), {}, {
          content: _objectSpread(_objectSpread({}, globalStyles.content), {}, {
            gridTemplateRows: '5vh 38vh 38vh'
          })
        });
      }
  }
};

var uploadStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return materialUIStyles(theme, 'uploadStyles');
});
var dashboardStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return materialUIStyles(theme, 'dashboardStyles');
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxEcmF3ZXJTdHlsZXMuanMiXSwibmFtZXMiOlsibWF0ZXJpYWxVSVN0eWxlcyIsInRoZW1lIiwicGFnZSIsImRyYXdlcldpZHRoIiwiZ2xvYmFsU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhcHBCYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsImFwcEJhclNoaWZ0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiZW50ZXJpbmdTY3JlZW4iLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJoaWRlIiwiZmxleFNocmluayIsIndoaXRlU3BhY2UiLCJkcmF3ZXJPcGVuIiwiZHJhd2VyQ2xvc2UiLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsInRvb2xiYXIiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwibWl4aW5zIiwiY29udGVudCIsImZsZXhHcm93IiwiZmxleERpcmVjdGlvbiIsImxvZ28iLCJtYXhXaWR0aCIsInBhZGRpbmdMZWZ0IiwiYXV0byIsImNvbG9yIiwiYXJiaVRyYWRlciIsImV4aXRJY29uIiwiZ3JpZFRlbXBsYXRlUm93cyIsInVwbG9hZFN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkYXNoYm9hcmRTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSLEVBQWlCO0FBQ3RDLE1BQU1DLFdBQVcsR0FBRyxHQUFwQjtBQUNBLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsUUFBSSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRTtBQURQLEtBRFc7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QUFDRkMsY0FBUSxFQUFFLEVBRFI7QUFFRk4sYUFBTyxFQUFFbkMsS0FBSyxDQUFDNkIsT0FBTixDQUFjLENBQWQsQ0FGUDtBQUdGYSxpQkFBVyxFQUFFMUMsS0FBSyxDQUFDNkIsT0FBTixDQUFjLENBQWQ7QUFIWCxLQS9EVztBQW9FakJjLFFBQUksRUFBRTtBQUNGQyxXQUFLLEVBQUU7QUFETCxLQXBFVztBQXVFakJDLGNBQVUsRUFBRTtBQUNSRCxXQUFLLEVBQUU7QUFEQyxLQXZFSztBQTBFakJFLFlBQVEsRUFBRTtBQUNORixXQUFLLEVBQUU7QUFERDtBQTFFTyxHQUFyQjs7QUE4RUEsVUFBUTNDLElBQVI7QUFDSSxTQUFLLGNBQUw7QUFDSSw2Q0FDT0UsWUFEUDtBQUVJa0MsZUFBTyxrQ0FDQWxDLFlBQVksQ0FBQ2tDLE9BRGI7QUFFSFUsMEJBQWdCLEVBQUU7QUFGZjtBQUZYOztBQU9KLFNBQUssaUJBQUw7QUFBd0I7QUFDcEIsK0NBQ081QyxZQURQO0FBRUlrQyxpQkFBTyxrQ0FDQWxDLFlBQVksQ0FBQ2tDLE9BRGI7QUFFSFUsNEJBQWdCLEVBQUU7QUFGZjtBQUZYO0FBT0g7QUFqQkw7QUFtQkgsQ0FuR0Q7O0FBcUdPLElBQU1DLFlBQVksR0FBR0MsMkVBQVUsQ0FBQyxVQUFBakQsS0FBSztBQUFBLFNBQUlELGdCQUFnQixDQUFDQyxLQUFELEVBQVEsY0FBUixDQUFwQjtBQUFBLENBQU4sQ0FBL0I7QUFDQSxJQUFNa0QsZUFBZSxHQUFHRCwyRUFBVSxDQUFDLFVBQUFqRCxLQUFLO0FBQUEsU0FBSUQsZ0JBQWdCLENBQUNDLEtBQUQsRUFBUSxpQkFBUixDQUFwQjtBQUFBLENBQU4sQ0FBbEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmFmY2E0MzI0OTljZDViMTVlZTkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IG1hdGVyaWFsVUlTdHlsZXMgPSAodGhlbWUsIHBhZ2UpID0+IHtcclxuICAgIGNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG4gICAgY29uc3QgZ2xvYmFsU3R5bGVzID0ge1xyXG4gICAgICAgIHJvb3Q6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBwQmFyOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcHBCYXJTaGlmdDoge1xyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZW51QnV0dG9uOiB7XHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAzNixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGU6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHJhd2VyOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkcmF3ZXJPcGVuOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRyYXdlckNsb3NlOiB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNykgKyAxLFxyXG4gICAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSArIDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gICAgICAgICAgICAvLyBuZWNlc3NhcnkgZm9yIGNvbnRlbnQgdG8gYmUgYmVsb3cgYXBwIGJhclxyXG4gICAgICAgICAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ286IHtcclxuICAgICAgICAgICAgbWF4V2lkdGg6IDUwLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygwKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dG86IHtcclxuICAgICAgICAgICAgY29sb3I6IFwiIzYyYmRmOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcmJpVHJhZGVyOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDgxY2JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhpdEljb246IHtcclxuICAgICAgICAgICAgY29sb3I6ICcjZmZjY2NiJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN3aXRjaCAocGFnZSkge1xyXG4gICAgICAgIGNhc2UgJ3VwbG9hZFN0eWxlcyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5nbG9iYWxTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZ2xvYmFsU3R5bGVzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogJzV2aCAxNy41dmggMTcuNXZoIDE3LjV2aCAxNy41dmgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdkYXNoYm9hcmRTdHlsZXMnOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5nbG9iYWxTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZ2xvYmFsU3R5bGVzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogJzV2aCAzOHZoIDM4dmgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWRTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+IG1hdGVyaWFsVUlTdHlsZXModGhlbWUsICd1cGxvYWRTdHlsZXMnKSk7XHJcbmV4cG9ydCBjb25zdCBkYXNoYm9hcmRTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+IG1hdGVyaWFsVUlTdHlsZXModGhlbWUsICdkYXNoYm9hcmRTdHlsZXMnKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==