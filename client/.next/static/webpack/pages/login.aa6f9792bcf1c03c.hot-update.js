"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./hooks/googleSignIn.tsx":
/*!********************************!*\
  !*** ./hooks/googleSignIn.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar callBack = function(data) {\n    console.log(data);\n};\nvar GoogleSignIn = function() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var script = document.createElement(\"script\");\n        script.src = \"https://accounts.google.com/gsi/client\";\n        script.async = true;\n        document.body.appendChild(script);\n        return function() {\n            document.body.removeChild(script);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"g_id_onload\",\n                \"data-client_id\": \"227682946707-r26ab2qpn8bb44apkq4k88lg8i66lv7a.apps.googleusercontent.com\",\n                \"data-login_uri\": \"http://localhost:5050/login/google\",\n                \"data-callback\": \"callback\",\n                \"data-auto_prompt\": \"false\"\n            }, void 0, false, {\n                fileName: \"/Users/matheusgleizer/Documents/Portfolio/blog-by-me/client/hooks/googleSignIn.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"g_id_signin\",\n                \"data-type\": \"standard\",\n                \"data-size\": \"large\",\n                \"data-theme\": \"outline\",\n                \"data-text\": \"sign_in_with\",\n                \"data-shape\": \"rectangular\",\n                \"data-logo_alignment\": \"right\"\n            }, void 0, false, {\n                fileName: \"/Users/matheusgleizer/Documents/Portfolio/blog-by-me/client/hooks/googleSignIn.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matheusgleizer/Documents/Portfolio/blog-by-me/client/hooks/googleSignIn.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(GoogleSignIn, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = GoogleSignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoogleSignIn);\nvar _c;\n$RefreshReg$(_c, \"GoogleSignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9nb29nbGVTaWduSW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQUFrQztBQUVsQyxJQUFNQyxRQUFRLEdBQUcsU0FBQ0MsSUFBUyxFQUFLO0lBQzlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7QUFDcEIsQ0FBQztBQUVELElBQU1HLFlBQVksR0FBRyxXQUFNOztJQUN6QkwsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTU0sTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFFL0NGLE1BQU0sQ0FBQ0csR0FBRyxHQUFHLHdDQUF3QyxDQUFDO1FBQ3RESCxNQUFNLENBQUNJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFcEJILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxXQUFXLENBQUNOLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLE9BQU8sV0FBTTtZQUNYQyxRQUFRLENBQUNJLElBQUksQ0FBQ0UsV0FBVyxDQUFDUCxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ1EsS0FBRzs7MEJBQ0YsOERBQUNBLEtBQUc7Z0JBQ0ZDLEVBQUUsRUFBQyxhQUFhO2dCQUNoQkMsZ0JBQWMsRUFBQywwRUFBMEU7Z0JBQ3pGQyxnQkFBYyxFQUFDLG9DQUFvQztnQkFDbkRDLGVBQWEsRUFBQyxVQUFVO2dCQUN4QkMsa0JBQWdCLEVBQUMsT0FBTzs7Ozs7cUJBQ25COzBCQUNQLDhEQUFDTCxLQUFHO2dCQUNGTSxTQUFTLEVBQUMsYUFBYTtnQkFDdkJDLFdBQVMsRUFBQyxVQUFVO2dCQUNwQkMsV0FBUyxFQUFDLE9BQU87Z0JBQ2pCQyxZQUFVLEVBQUMsU0FBUztnQkFDcEJDLFdBQVMsRUFBQyxjQUFjO2dCQUN4QkMsWUFBVSxFQUFDLGFBQWE7Z0JBQ3hCQyxxQkFBbUIsRUFBQyxPQUFPOzs7OztxQkFDdEI7Ozs7OzthQUNILENBQ047QUFDSixDQUFDO0dBbENLckIsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBb0NsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL2dvb2dsZVNpZ25Jbi50c3g/OGFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGNhbGxCYWNrID0gKGRhdGE6IGFueSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn07XG5cbmNvbnN0IEdvb2dsZVNpZ25JbiA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2dzaS9jbGllbnQnO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPSdnX2lkX29ubG9hZCdcbiAgICAgICAgZGF0YS1jbGllbnRfaWQ9XCIyMjc2ODI5NDY3MDctcjI2YWIycXBuOGJiNDRhcGtxNGs4OGxnOGk2Nmx2N2EuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxuICAgICAgICBkYXRhLWxvZ2luX3VyaT0naHR0cDovL2xvY2FsaG9zdDo1MDUwL2xvZ2luL2dvb2dsZSdcbiAgICAgICAgZGF0YS1jYWxsYmFjaz0nY2FsbGJhY2snXG4gICAgICAgIGRhdGEtYXV0b19wcm9tcHQ9J2ZhbHNlJ1xuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2dfaWRfc2lnbmluJ1xuICAgICAgICBkYXRhLXR5cGU9J3N0YW5kYXJkJ1xuICAgICAgICBkYXRhLXNpemU9J2xhcmdlJ1xuICAgICAgICBkYXRhLXRoZW1lPSdvdXRsaW5lJ1xuICAgICAgICBkYXRhLXRleHQ9J3NpZ25faW5fd2l0aCdcbiAgICAgICAgZGF0YS1zaGFwZT0ncmVjdGFuZ3VsYXInXG4gICAgICAgIGRhdGEtbG9nb19hbGlnbm1lbnQ9J3JpZ2h0J1xuICAgICAgPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlU2lnbkluO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImNhbGxCYWNrIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJHb29nbGVTaWduSW4iLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGl2IiwiaWQiLCJkYXRhLWNsaWVudF9pZCIsImRhdGEtbG9naW5fdXJpIiwiZGF0YS1jYWxsYmFjayIsImRhdGEtYXV0b19wcm9tcHQiLCJjbGFzc05hbWUiLCJkYXRhLXR5cGUiLCJkYXRhLXNpemUiLCJkYXRhLXRoZW1lIiwiZGF0YS10ZXh0IiwiZGF0YS1zaGFwZSIsImRhdGEtbG9nb19hbGlnbm1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/googleSignIn.tsx\n"));

/***/ })

});