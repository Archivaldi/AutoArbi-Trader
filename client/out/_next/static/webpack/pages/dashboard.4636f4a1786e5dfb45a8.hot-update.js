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
      gap: '1.5rem'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxEcmF3ZXJTdHlsZXMuanMiXSwibmFtZXMiOlsibWF0ZXJpYWxVSVN0eWxlcyIsInRoZW1lIiwicGFnZSIsImRyYXdlcldpZHRoIiwiZ2xvYmFsU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJhcHBCYXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsImFwcEJhclNoaWZ0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiZW50ZXJpbmdTY3JlZW4iLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJoaWRlIiwiZmxleFNocmluayIsIndoaXRlU3BhY2UiLCJkcmF3ZXJPcGVuIiwiZHJhd2VyQ2xvc2UiLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsInRvb2xiYXIiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwibWl4aW5zIiwiY29udGVudCIsImZsZXhHcm93IiwiZ2FwIiwibG9nbyIsIm1heFdpZHRoIiwicGFkZGluZ0xlZnQiLCJhdXRvIiwiY29sb3IiLCJhcmJpVHJhZGVyIiwiZXhpdEljb24iLCJncmlkVGVtcGxhdGVSb3dzIiwidXBsb2FkU3R5bGVzIiwibWFrZVN0eWxlcyIsImRhc2hib2FyZFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDdEMsTUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxRQUFJLEVBQUU7QUFDRkMsYUFBTyxFQUFFO0FBRFAsS0FEVztBQUlqQkMsVUFB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RUFBRSxFQURSO0FBRUZOLGFBQU8sRUFBRW5DLEtBQUssQ0FBQzZCLE9BQU4sQ0FBYyxDQUFkLENBRlA7QUFHRmEsaUJBQVcsRUFBRTFDLEtBQUssQ0FBQzZCLE9BQU4sQ0FBYyxDQUFkO0FBSFgsS0EvRFc7QUFvRWpCYyxRQUFJLEVBQUU7QUFDRkMsV0FBSyxFQUFFO0FBREwsS0FwRVc7QUF1RWpCQyxjQUFVLEVBQUU7QUFDUkQsV0FBSyxFQUFFO0FBREMsS0F2RUs7QUEwRWpCRSxZQUFRLEVBQUU7QUFDTkYsV0FBSyxFQUFFO0FBREQ7QUExRU8sR0FBckI7O0FBOEVBLFVBQVEzQyxJQUFSO0FBQ0ksU0FBSyxjQUFMO0FBQ0ksNkNBQ09FLFlBRFA7QUFFSWtDLGVBQU8sa0NBQ0FsQyxZQUFZLENBQUNrQyxPQURiO0FBRUhVLDBCQUFnQixFQUFFO0FBRmY7QUFGWDs7QUFPSixTQUFLLGlCQUFMO0FBQXdCO0FBQ3BCLCtDQUNPNUMsWUFEUDtBQUVJa0MsaUJBQU8sa0NBQ0FsQyxZQUFZLENBQUNrQyxPQURiO0FBRUhVLDRCQUFnQixFQUFFO0FBRmY7QUFGWDtBQU9IO0FBakJMO0FBbUJILENBbkdEOztBQXFHTyxJQUFNQyxZQUFZLEdBQUdDLDJFQUFVLENBQUMsVUFBQWpELEtBQUs7QUFBQSxTQUFJRCxnQkFBZ0IsQ0FBQ0MsS0FBRCxFQUFRLGNBQVIsQ0FBcEI7QUFBQSxDQUFOLENBQS9CO0FBQ0EsSUFBTWtELGVBQWUsR0FBR0QsMkVBQVUsQ0FBQyxVQUFBakQsS0FBSztBQUFBLFNBQUlELGdCQUFnQixDQUFDQyxLQUFELEVBQVEsaUJBQVIsQ0FBcEI7QUFBQSxDQUFOLENBQWxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC40NjM2ZjRhMTc4NmU1ZGZiNDVhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCBtYXRlcmlhbFVJU3R5bGVzID0gKHRoZW1lLCBwYWdlKSA9PiB7XHJcbiAgICBjb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuICAgIGNvbnN0IGdsb2JhbFN0eWxlcyA9IHtcclxuICAgICAgICByb290OiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFwcEJhcjoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICAgICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXBwQmFyU2hpZnQ6IHtcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICAgICAgICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVudUJ1dHRvbjoge1xyXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogMzYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRyYXdlcjoge1xyXG4gICAgICAgICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHJhd2VyT3Blbjoge1xyXG4gICAgICAgICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkcmF3ZXJDbG9zZToge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpICsgMSxcclxuICAgICAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSkgKyAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgICAgICAgICAgLy8gbmVjZXNzYXJ5IGZvciBjb250ZW50IHRvIGJlIGJlbG93IGFwcCBiYXJcclxuICAgICAgICAgICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGdhcDogJzEuNXJlbSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ286IHtcclxuICAgICAgICAgICAgbWF4V2lkdGg6IDUwLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygwKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dG86IHtcclxuICAgICAgICAgICAgY29sb3I6IFwiIzYyYmRmOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcmJpVHJhZGVyOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDgxY2JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhpdEljb246IHtcclxuICAgICAgICAgICAgY29sb3I6ICcjZmZjY2NiJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN3aXRjaCAocGFnZSkge1xyXG4gICAgICAgIGNhc2UgJ3VwbG9hZFN0eWxlcyc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5nbG9iYWxTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZ2xvYmFsU3R5bGVzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogJzV2aCAxNy41dmggMTcuNXZoIDE3LjV2aCAxNy41dmgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdkYXNoYm9hcmRTdHlsZXMnOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5nbG9iYWxTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZ2xvYmFsU3R5bGVzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogJzV2aCAzOHZoIDM4dmgnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWRTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+IG1hdGVyaWFsVUlTdHlsZXModGhlbWUsICd1cGxvYWRTdHlsZXMnKSk7XHJcbmV4cG9ydCBjb25zdCBkYXNoYm9hcmRTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+IG1hdGVyaWFsVUlTdHlsZXModGhlbWUsICdkYXNoYm9hcmRTdHlsZXMnKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==