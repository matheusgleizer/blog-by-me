/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./pages/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloClient({\n    uri: \"https://flyby-gateway.herokuapp.com/\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_3__.InMemoryCache()\n});\nclient.query({\n    query: _apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql`\n      query GetLocations {\n        locations {\n          id\n          name\n          description\n          photo\n        }\n      }\n    `\n}).then((result)=>console.log(result));\n// Use of the <SessionProvider> is mandatory to allow components that call\n// `useSession()` anywhere in your application to access the `session` object.\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n            session: session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/matheusgleizer/Documents/Portfolio/blog-by-me/client/pages/_app.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/matheusgleizer/Documents/Portfolio/blog-by-me/client/pages/_app.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/matheusgleizer/Documents/Portfolio/blog-by-me/client/pages/_app.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUM1QjtBQU9FO0FBRXhCLE1BQU1LLE1BQU0sR0FBRyxJQUFJSix3REFBWSxDQUFDO0lBQzlCSyxHQUFHLEVBQUUsc0NBQXNDO0lBQzNDQyxLQUFLLEVBQUUsSUFBSUwseURBQWEsRUFBRTtDQUMzQixDQUFDO0FBRUZHLE1BQU0sQ0FDSEcsS0FBSyxDQUFDO0lBQ0xBLEtBQUssRUFBRUosK0NBQUcsQ0FBQzs7Ozs7Ozs7O0lBU1gsQ0FBQztDQUNGLENBQUMsQ0FDREssSUFBSSxDQUFDLENBQUNDLE1BQU0sR0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFLekMsMEVBQTBFO0FBQzFFLDhFQUE4RTtBQUMvRCxTQUFTRyxHQUFHLENBQUMsRUFDMUJDLFNBQVMsR0FDVEMsU0FBUyxFQUFFLEVBQUVDLE9BQU8sR0FBRSxHQUFHRCxTQUFTLEVBQUUsR0FDTCxFQUFFO0lBQ2pDLHFCQUNFLDhEQUFDWiwwREFBYztRQUFDRSxNQUFNLEVBQUVBLE1BQU07a0JBQzVCLDRFQUFDTCw0REFBZTtZQUFDZ0IsT0FBTyxFQUFFQSxPQUFPO3NCQUMvQiw0RUFBQ0YsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ1o7Ozs7O1lBQ0gsQ0FDakI7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBJbk1lbW9yeUNhY2hlLFxuICBBcG9sbG9Qcm92aWRlcixcbiAgZ3FsLFxuICB1c2VRdWVyeVxufSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICB1cmk6ICdodHRwczovL2ZseWJ5LWdhdGV3YXkuaGVyb2t1YXBwLmNvbS8nLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pO1xuXG5jbGllbnRcbiAgLnF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgR2V0TG9jYXRpb25zIHtcbiAgICAgICAgbG9jYXRpb25zIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHBob3RvXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICB9KVxuICAudGhlbigocmVzdWx0KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKTtcblxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB0eXBlIHsgU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XG5cbi8vIFVzZSBvZiB0aGUgPFNlc3Npb25Qcm92aWRlcj4gaXMgbWFuZGF0b3J5IHRvIGFsbG93IGNvbXBvbmVudHMgdGhhdCBjYWxsXG4vLyBgdXNlU2Vzc2lvbigpYCBhbnl3aGVyZSBpbiB5b3VyIGFwcGxpY2F0aW9uIHRvIGFjY2VzcyB0aGUgYHNlc3Npb25gIG9iamVjdC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7XG4gIENvbXBvbmVudCxcbiAgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9LFxufTogQXBwUHJvcHM8eyBzZXNzaW9uOiBTZXNzaW9uIH0+KSB7XG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsIkFwb2xsb1Byb3ZpZGVyIiwiZ3FsIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiLCJxdWVyeSIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/styles.css":
/*!**************************!*\
  !*** ./pages/styles.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();