"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/auth0":
/*!********************************************!*\
  !*** external "next-auth/providers/auth0" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/auth0");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/auth0 */ \"next-auth/providers/auth0\");\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// import AppleProvider from \"next-auth/providers/apple\"\n// import EmailProvider from \"next-auth/providers/email\"\n// For more information on each option (and a full list of options) go to\n// https://next-auth.js.org/configuration/options\nconst authOptions = {\n    // https://next-auth.js.org/configuration/providers/oauth\n    providers: [\n        /* EmailProvider({\n         server: process.env.EMAIL_SERVER,\n         from: process.env.EMAIL_FROM,\n       }),\n    // Temporarily removing the Apple provider from the demo site as the\n    // callback URL for it needs updating due to Vercel changing domains\n\n    Providers.Apple({\n      clientId: process.env.APPLE_ID,\n      clientSecret: {\n        appleId: process.env.APPLE_ID,\n        teamId: process.env.APPLE_TEAM_ID,\n        privateKey: process.env.APPLE_PRIVATE_KEY,\n        keyId: process.env.APPLE_KEY_ID,\n      },\n    }),\n    */ next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.FACEBOOK_ID,\n            clientSecret: process.env.FACEBOOK_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        }),\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.TWITTER_ID,\n            clientSecret: process.env.TWITTER_SECRET\n        }),\n        next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.AUTH0_ID,\n            clientSecret: process.env.AUTH0_SECRET,\n            issuer: process.env.AUTH0_ISSUER\n        }), \n    ],\n    theme: {\n        colorScheme: \"light\"\n    },\n    callbacks: {\n        async jwt ({ token  }) {\n            token.userRole = \"admin\";\n            return token;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ0U7QUFDSTtBQUNKO0FBQ0U7QUFDSjtBQUNyRCx3REFBd0Q7QUFDeEQsd0RBQXdEO0FBRXhELHlFQUF5RTtBQUN6RSxpREFBaUQ7QUFDMUMsTUFBTU0sV0FBVyxHQUFvQjtJQUMxQyx5REFBeUQ7SUFDekRDLFNBQVMsRUFBRTtRQUNUOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JBLEdBQ0FMLG1FQUFnQixDQUFDO1lBQ2ZNLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7WUFDakNDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGVBQWU7U0FDMUMsQ0FBQztRQUNGVixpRUFBYyxDQUFDO1lBQ2JLLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFNBQVM7WUFDL0JGLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNLLGFBQWE7U0FDeEMsQ0FBQztRQUNGZCxpRUFBYyxDQUFDO1lBQ2JPLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNNLGdCQUFnQixJQUFJLEVBQUU7WUFDNUNKLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNPLG9CQUFvQixJQUFJLEVBQUU7U0FDckQsQ0FBQztRQUNGYixrRUFBZSxDQUFDO1lBQ2RJLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNRLFVBQVU7WUFDaENOLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNTLGNBQWM7U0FDekMsQ0FBQztRQUNGZCxnRUFBYSxDQUFDO1lBQ1pHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNVLFFBQVE7WUFDOUJSLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNXLFlBQVk7WUFDdENDLE1BQU0sRUFBRWIsT0FBTyxDQUFDQyxHQUFHLENBQUNhLFlBQVk7U0FDakMsQ0FBQztLQUNIO0lBQ0RDLEtBQUssRUFBRTtRQUNMQyxXQUFXLEVBQUUsT0FBTztLQUNyQjtJQUNEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxHQUFHLEVBQUMsRUFBRUMsS0FBSyxHQUFFLEVBQUU7WUFDbkJBLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE9BQU87WUFDeEIsT0FBT0QsS0FBSztRQUNkLENBQUM7S0FDRjtDQUNGO0FBRUQsaUVBQWU1QixnREFBUSxDQUFDTSxXQUFXLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiXG5pbXBvcnQgRmFjZWJvb2tQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9mYWNlYm9va1wiXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCJcbmltcG9ydCBUd2l0dGVyUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvdHdpdHRlclwiXG5pbXBvcnQgQXV0aDBQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9hdXRoMFwiXG4vLyBpbXBvcnQgQXBwbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9hcHBsZVwiXG4vLyBpbXBvcnQgRW1haWxQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9lbWFpbFwiXG5cbi8vIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGVhY2ggb3B0aW9uIChhbmQgYSBmdWxsIGxpc3Qgb2Ygb3B0aW9ucykgZ28gdG9cbi8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL29wdGlvbnNcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICAvLyBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9wcm92aWRlcnMvb2F1dGhcbiAgcHJvdmlkZXJzOiBbXG4gICAgLyogRW1haWxQcm92aWRlcih7XG4gICAgICAgICBzZXJ2ZXI6IHByb2Nlc3MuZW52LkVNQUlMX1NFUlZFUixcbiAgICAgICAgIGZyb206IHByb2Nlc3MuZW52LkVNQUlMX0ZST00sXG4gICAgICAgfSksXG4gICAgLy8gVGVtcG9yYXJpbHkgcmVtb3ZpbmcgdGhlIEFwcGxlIHByb3ZpZGVyIGZyb20gdGhlIGRlbW8gc2l0ZSBhcyB0aGVcbiAgICAvLyBjYWxsYmFjayBVUkwgZm9yIGl0IG5lZWRzIHVwZGF0aW5nIGR1ZSB0byBWZXJjZWwgY2hhbmdpbmcgZG9tYWluc1xuXG4gICAgUHJvdmlkZXJzLkFwcGxlKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5BUFBMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDoge1xuICAgICAgICBhcHBsZUlkOiBwcm9jZXNzLmVudi5BUFBMRV9JRCxcbiAgICAgICAgdGVhbUlkOiBwcm9jZXNzLmVudi5BUFBMRV9URUFNX0lELFxuICAgICAgICBwcml2YXRlS2V5OiBwcm9jZXNzLmVudi5BUFBMRV9QUklWQVRFX0tFWSxcbiAgICAgICAga2V5SWQ6IHByb2Nlc3MuZW52LkFQUExFX0tFWV9JRCxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgKi9cbiAgICBGYWNlYm9va1Byb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5GQUNFQk9PS19JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfU0VDUkVULFxuICAgIH0pLFxuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgfSksXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQgfHwgJycsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIHx8ICcnLFxuICAgIH0pLFxuICAgIFR3aXR0ZXJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9TRUNSRVQsXG4gICAgfSksXG4gICAgQXV0aDBQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX1NFQ1JFVCxcbiAgICAgIGlzc3VlcjogcHJvY2Vzcy5lbnYuQVVUSDBfSVNTVUVSLFxuICAgIH0pLFxuICBdLFxuICB0aGVtZToge1xuICAgIGNvbG9yU2NoZW1lOiBcImxpZ2h0XCIsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuIH0pIHtcbiAgICAgIHRva2VuLnVzZXJSb2xlID0gXCJhZG1pblwiXG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9LFxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucylcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiRmFjZWJvb2tQcm92aWRlciIsIkdpdGh1YlByb3ZpZGVyIiwiVHdpdHRlclByb3ZpZGVyIiwiQXV0aDBQcm92aWRlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiRkFDRUJPT0tfSUQiLCJjbGllbnRTZWNyZXQiLCJGQUNFQk9PS19TRUNSRVQiLCJHSVRIVUJfSUQiLCJHSVRIVUJfU0VDUkVUIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiVFdJVFRFUl9JRCIsIlRXSVRURVJfU0VDUkVUIiwiQVVUSDBfSUQiLCJBVVRIMF9TRUNSRVQiLCJpc3N1ZXIiLCJBVVRIMF9JU1NVRVIiLCJ0aGVtZSIsImNvbG9yU2NoZW1lIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyUm9sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();