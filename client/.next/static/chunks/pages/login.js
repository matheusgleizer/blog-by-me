/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/login"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmatheusgleizer%2FDocuments%2FPortfolio%2Fblog-by-me%2Fclient%2Fpages%2Flogin.tsx&page=%2Flogin!":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmatheusgleizer%2FDocuments%2FPortfolio%2Fblog-by-me%2Fclient%2Fpages%2Flogin.tsx&page=%2Flogin! ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/login\",\n      function () {\n        return __webpack_require__(/*! ./pages/login.tsx */ \"./pages/login.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/login\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRm1hdGhldXNnbGVpemVyJTJGRG9jdW1lbnRzJTJGUG9ydGZvbGlvJTJGYmxvZy1ieS1tZSUyRmNsaWVudCUyRnBhZ2VzJTJGbG9naW4udHN4JnBhZ2U9JTJGbG9naW4hLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsNENBQW1CO0FBQzFDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9mMTFlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvbG9naW5cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2xvZ2luLnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvbG9naW5cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmatheusgleizer%2FDocuments%2FPortfolio%2Fblog-by-me%2Fclient%2Fpages%2Flogin.tsx&page=%2Flogin!\n"));

/***/ }),

/***/ "./hooks/googleSignIn.tsx":
/*!********************************!*\
  !*** ./hooks/googleSignIn.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar GoogleSignIn = function() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var script = document.createElement(\"script\");\n        script.src = \"https://accounts.google.com/gsi/client\";\n        script.async = true;\n        document.body.appendChild(script);\n        window.handleCredentialResponse = function(response) {\n            // decodeJwtResponse() is a custom function defined by you\n            // to decode the credential response.\n            // const responsePayload = decodeJwtResponse(response.credential);\n            // console.log(\"ID: \" + responsePayload.sub);\n            // console.log('Full Name: ' + responsePayload.name);\n            // console.log('Given Name: ' + responsePayload.given_name);\n            // console.log('Family Name: ' + responsePayload.family_name);\n            // console.log(\"Image URL: \" + responsePayload.picture);\n            // console.log(\"Email: \" + responsePayload.email);\n            console.log(response);\n        };\n        return function() {\n            document.body.removeChild(script);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"g_id_onload\",\n                \"data-client_id\": \"227682946707-r26ab2qpn8bb44apkq4k88lg8i66lv7a.apps.googleusercontent.com\",\n                \"data-login_uri\": \"http://localhost:5050/login/google\",\n                \"data-callback\": \"handleCredentialResponse\",\n                \"data-auto_prompt\": \"false\"\n            }, void 0, false, {\n                fileName: \"/Users/matheusgleizer/Documents/Portfolio/blog-by-me/client/hooks/googleSignIn.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"g_id_signin\",\n                \"data-type\": \"standard\",\n                \"data-size\": \"large\",\n                \"data-theme\": \"outline\",\n                \"data-text\": \"sign_in_with\",\n                \"data-shape\": \"rectangular\",\n                \"data-logo_alignment\": \"left\"\n            }, void 0, false, {\n                fileName: \"/Users/matheusgleizer/Documents/Portfolio/blog-by-me/client/hooks/googleSignIn.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matheusgleizer/Documents/Portfolio/blog-by-me/client/hooks/googleSignIn.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, _this);\n};\n_s(GoogleSignIn, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = GoogleSignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoogleSignIn);\nvar _c;\n$RefreshReg$(_c, \"GoogleSignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9nb29nbGVTaWduSW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQUFrQztBQUVsQyxJQUFNQyxZQUFZLEdBQUcsV0FBTTs7SUFDekJELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1FLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBRS9DRixNQUFNLENBQUNHLEdBQUcsR0FBRyx3Q0FBd0MsQ0FBQztRQUN0REgsTUFBTSxDQUFDSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRXBCSCxRQUFRLENBQUNJLElBQUksQ0FBQ0MsV0FBVyxDQUFDTixNQUFNLENBQUMsQ0FBQztRQUVsQ08sTUFBTSxDQUFDQyx3QkFBd0IsR0FBRyxTQUFDQyxRQUFhLEVBQUs7WUFDbkQsMERBQTBEO1lBQzFELHFDQUFxQztZQUNyQyxrRUFBa0U7WUFFbEUsNkNBQTZDO1lBQzdDLHFEQUFxRDtZQUNyRCw0REFBNEQ7WUFDNUQsOERBQThEO1lBQzlELHdEQUF3RDtZQUN4RCxrREFBa0Q7WUFDbERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7UUFFRixPQUFPLFdBQU07WUFDWFIsUUFBUSxDQUFDSSxJQUFJLENBQUNPLFdBQVcsQ0FBQ1osTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNhLEtBQUc7OzBCQUNGLDhEQUFDQSxLQUFHO2dCQUNGQyxFQUFFLEVBQUMsYUFBYTtnQkFDaEJDLGdCQUFjLEVBQUMsMEVBQTBFO2dCQUN6RkMsZ0JBQWMsRUFBQyxvQ0FBb0M7Z0JBQ25EQyxlQUFhLEVBQUMsMEJBQTBCO2dCQUN4Q0Msa0JBQWdCLEVBQUMsT0FBTzs7Ozs7cUJBQ25COzBCQUNQLDhEQUFDTCxLQUFHO2dCQUNGTSxTQUFTLEVBQUMsYUFBYTtnQkFDdkJDLFdBQVMsRUFBQyxVQUFVO2dCQUNwQkMsV0FBUyxFQUFDLE9BQU87Z0JBQ2pCQyxZQUFVLEVBQUMsU0FBUztnQkFDcEJDLFdBQVMsRUFBQyxjQUFjO2dCQUN4QkMsWUFBVSxFQUFDLGFBQWE7Z0JBQ3hCQyxxQkFBbUIsRUFBQyxNQUFNOzs7OztxQkFDckI7Ozs7OzthQUNILENBQ047QUFDSixDQUFDO0dBaERLMUIsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBa0RsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL2dvb2dsZVNpZ25Jbi50c3g/OGFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEdvb2dsZVNpZ25JbiA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2dzaS9jbGllbnQnO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiAgICB3aW5kb3cuaGFuZGxlQ3JlZGVudGlhbFJlc3BvbnNlID0gKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIC8vIGRlY29kZUp3dFJlc3BvbnNlKCkgaXMgYSBjdXN0b20gZnVuY3Rpb24gZGVmaW5lZCBieSB5b3VcbiAgICAgIC8vIHRvIGRlY29kZSB0aGUgY3JlZGVudGlhbCByZXNwb25zZS5cbiAgICAgIC8vIGNvbnN0IHJlc3BvbnNlUGF5bG9hZCA9IGRlY29kZUp3dFJlc3BvbnNlKHJlc3BvbnNlLmNyZWRlbnRpYWwpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIklEOiBcIiArIHJlc3BvbnNlUGF5bG9hZC5zdWIpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ0Z1bGwgTmFtZTogJyArIHJlc3BvbnNlUGF5bG9hZC5uYW1lKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdHaXZlbiBOYW1lOiAnICsgcmVzcG9uc2VQYXlsb2FkLmdpdmVuX25hbWUpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ0ZhbWlseSBOYW1lOiAnICsgcmVzcG9uc2VQYXlsb2FkLmZhbWlseV9uYW1lKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiSW1hZ2UgVVJMOiBcIiArIHJlc3BvbnNlUGF5bG9hZC5waWN0dXJlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiRW1haWw6IFwiICsgcmVzcG9uc2VQYXlsb2FkLmVtYWlsKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBpZD0nZ19pZF9vbmxvYWQnXG4gICAgICAgIGRhdGEtY2xpZW50X2lkPScyMjc2ODI5NDY3MDctcjI2YWIycXBuOGJiNDRhcGtxNGs4OGxnOGk2Nmx2N2EuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nXG4gICAgICAgIGRhdGEtbG9naW5fdXJpPSdodHRwOi8vbG9jYWxob3N0OjUwNTAvbG9naW4vZ29vZ2xlJ1xuICAgICAgICBkYXRhLWNhbGxiYWNrPSdoYW5kbGVDcmVkZW50aWFsUmVzcG9uc2UnXG4gICAgICAgIGRhdGEtYXV0b19wcm9tcHQ9J2ZhbHNlJ1xuICAgICAgPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2dfaWRfc2lnbmluJ1xuICAgICAgICBkYXRhLXR5cGU9J3N0YW5kYXJkJ1xuICAgICAgICBkYXRhLXNpemU9J2xhcmdlJ1xuICAgICAgICBkYXRhLXRoZW1lPSdvdXRsaW5lJ1xuICAgICAgICBkYXRhLXRleHQ9J3NpZ25faW5fd2l0aCdcbiAgICAgICAgZGF0YS1zaGFwZT0ncmVjdGFuZ3VsYXInXG4gICAgICAgIGRhdGEtbG9nb19hbGlnbm1lbnQ9J2xlZnQnXG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVTaWduSW47XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiR29vZ2xlU2lnbkluIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJoYW5kbGVDcmVkZW50aWFsUmVzcG9uc2UiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVDaGlsZCIsImRpdiIsImlkIiwiZGF0YS1jbGllbnRfaWQiLCJkYXRhLWxvZ2luX3VyaSIsImRhdGEtY2FsbGJhY2siLCJkYXRhLWF1dG9fcHJvbXB0IiwiY2xhc3NOYW1lIiwiZGF0YS10eXBlIiwiZGF0YS1zaXplIiwiZGF0YS10aGVtZSIsImRhdGEtdGV4dCIsImRhdGEtc2hhcGUiLCJkYXRhLWxvZ29fYWxpZ25tZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/googleSignIn.tsx\n"));

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_googleSignIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/googleSignIn */ \"./hooks/googleSignIn.tsx\");\n// import { useState, useEffect } from 'react';\n// import GoogleLogin from 'react-google-login';\n// import axios from 'axios';\n// import { isEmpty } from 'lodash';\nvar _this = undefined;\n\n\nvar responseGoogle = function(response) {\n    console.log(response);\n};\nvar Login = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Login\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_googleSignIn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/matheusgleizer/Documents/Portfolio/blog-by-me/client/pages/login.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/matheusgleizer/Documents/Portfolio/blog-by-me/client/pages/login.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLCtDQUErQztBQUMvQyxnREFBZ0Q7QUFDaEQsNkJBQTZCO0FBQzdCLG9DQUFvQztBQUNwQzs7QUFBaUQ7QUFFakQsSUFBTUMsY0FBYyxHQUFHLFNBQUNDLFFBQWEsRUFBSztJQUN4Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFFRCxJQUFNRyxLQUFLLEdBQUcsV0FBTTtJQUNsQixxQkFDRSw4REFBQ0MsS0FBRzs7WUFBQyxPQUVIOzBCQUFBLDhEQUFDTiwyREFBWTs7OztxQkFBRzs7Ozs7O2FBQ1osQ0FTTjtBQUNKLENBQUM7QUFmS0ssS0FBQUEsS0FBSztBQWlCWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLnRzeD83MjQzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgR29vZ2xlTG9naW4gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vLyBpbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBHb29nbGVTaWduSW4gZnJvbSAnLi4vaG9va3MvZ29vZ2xlU2lnbkluJztcblxuY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2U6IGFueSkgPT4ge1xuICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG59O1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgTG9naW5cbiAgICAgIDxHb29nbGVTaWduSW4gLz5cbiAgICA8L2Rpdj5cbiAgICAvLyA8R29vZ2xlTG9naW5cbiAgICAvLyAgIGNsaWVudElkPVwiMjI3NjgyOTQ2NzA3LXIyNmFiMnFwbjhiYjQ0YXBrcTRrODhsZzhpNjZsdjdhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbiAgICAvLyAgIGJ1dHRvblRleHQ9J0xvZ2luJ1xuICAgIC8vICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cbiAgICAvLyAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XG4gICAgLy8gICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxuICAgIC8vICAgYWNjZXNzVHlwZT0nb25saW5lJ1xuICAgIC8vIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJHb29nbGVTaWduSW4iLCJyZXNwb25zZUdvb2dsZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIkxvZ2luIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmatheusgleizer%2FDocuments%2FPortfolio%2Fblog-by-me%2Fclient%2Fpages%2Flogin.tsx&page=%2Flogin!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);