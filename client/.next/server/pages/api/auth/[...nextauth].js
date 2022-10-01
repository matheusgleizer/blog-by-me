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

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

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

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrR0FBa0c7QUFDNUQ7QUFFdEMsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxPQUFPLEdBQUc7SUFDZEMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QkMsZUFBZSxFQUFFLElBQUk7Q0FDdEI7QUFFRCxJQUFJQyxNQUFNO0FBQ1YsSUFBSUMsYUFBYTtBQUVqQixJQUFJLENBQUNQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQsSUFBSVIsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1MsTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkosTUFBTSxHQUFHLElBQUlSLGdEQUFXLENBQUNDLEdBQUcsRUFBRUksT0FBTyxDQUFDLENBQUM7UUFDdkNNLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNESixhQUFhLEdBQUdFLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUgsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL21vbmdvZGIuanM/ZDkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBvcHRpb25zID0ge1xuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbn07XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG4gIH1cbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xufVxuXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxuLy8gc2VwYXJhdGUgbW9kdWxlLCB0aGUgY2xpZW50IGNhbiBiZSBzaGFyZWQgYWNyb3NzIGZ1bmN0aW9ucy5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/auth0 */ \"next-auth/providers/auth0\");\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var _utils_callback_signIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/callback/signIn */ \"(api)/./utils/callback/signIn.ts\");\n\n\n\n\n\n\n\n\n\n// import AppleProvider from \"next-auth/providers/apple\"\n// import EmailProvider from \"next-auth/providers/email\"\n// For more information on each option (and a full list of options) go to\n// https://next-auth.js.org/configuration/options\nconst authOptions = {\n    // https://next-auth.js.org/configuration/providers/oauth\n    providers: [\n        /* EmailProvider({\n         server: process.env.EMAIL_SERVER,\n         from: process.env.EMAIL_FROM,\n       }),\n    // Temporarily removing the Apple provider from the demo site as the\n    // callback URL for it needs updating due to Vercel changing domains\n\n    Providers.Apple({\n      clientId: process.env.APPLE_ID,\n      clientSecret: {\n        appleId: process.env.APPLE_ID,\n        teamId: process.env.APPLE_TEAM_ID,\n        privateKey: process.env.APPLE_PRIVATE_KEY,\n        keyId: process.env.APPLE_KEY_ID,\n      },\n    }),\n    */ next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.FACEBOOK_ID,\n            clientSecret: process.env.FACEBOOK_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID || \"\",\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET || \"\"\n        }),\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.TWITTER_ID,\n            clientSecret: process.env.TWITTER_SECRET\n        }),\n        next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.AUTH0_ID,\n            clientSecret: process.env.AUTH0_SECRET,\n            issuer: process.env.AUTH0_ISSUER\n        }), \n    ],\n    theme: {\n        colorScheme: \"light\"\n    },\n    callbacks: {\n        //   // async jwt({ token }) {\n        //   //   token.userRole = \"admin\"\n        //   //   return token\n        //   // },\n        async signIn (data) {\n            return await (0,_utils_callback_signIn__WEBPACK_IMPORTED_MODULE_8__.signInCallback)(data);\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_6__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_7__[\"default\"])\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNFO0FBQ0k7QUFDSjtBQUNFO0FBQ0o7QUFDTTtBQUNYO0FBQ2U7QUFFaEUsd0RBQXdEO0FBQ3hELHdEQUF3RDtBQUV4RCx5RUFBeUU7QUFDekUsaURBQWlEO0FBQzFDLE1BQU1VLFdBQVcsR0FBRztJQUN6Qix5REFBeUQ7SUFDekRDLFNBQVMsRUFBRTtRQUNUOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JBLEdBQ0FSLG1FQUFnQixDQUFDO1lBQ2ZTLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7WUFDakNDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGVBQWU7U0FDMUMsQ0FBQztRQUNGYixpRUFBYyxDQUFDO1lBQ2JRLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNJLFNBQVM7WUFDL0JGLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNLLGFBQWE7U0FDeEMsQ0FBQztRQUNGakIsaUVBQWMsQ0FBQztZQUNiVSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxnQkFBZ0IsSUFBSSxFQUFFO1lBQzVDSixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxvQkFBb0IsSUFBSSxFQUFFO1NBQ3JELENBQUM7UUFDRmhCLGtFQUFlLENBQUM7WUFDZE8sUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsVUFBVTtZQUNoQ04sWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsY0FBYztTQUN6QyxDQUFDO1FBQ0ZqQixnRUFBYSxDQUFDO1lBQ1pNLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNVLFFBQVE7WUFDOUJSLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNXLFlBQVk7WUFDdENDLE1BQU0sRUFBRWIsT0FBTyxDQUFDQyxHQUFHLENBQUNhLFlBQVk7U0FDakMsQ0FBQztLQUNIO0lBQ0RDLEtBQUssRUFBRTtRQUNMQyxXQUFXLEVBQUUsT0FBTztLQUNyQjtJQUNEQyxTQUFTLEVBQUU7UUFDVCw4QkFBOEI7UUFDOUIsa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsTUFBTUMsTUFBTSxFQUFDQyxJQUFJLEVBQUU7WUFDakIsT0FBTyxNQUFNdkIsc0VBQWMsQ0FBQ3VCLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FDRjtJQUNEQyxNQUFNLEVBQUVwQixPQUFPLENBQUNDLEdBQUcsQ0FBQ29CLGVBQWU7SUFDbkNDLE9BQU8sRUFBRTVCLDBFQUFjLENBQUNDLG9EQUFhLENBQUM7Q0FRdkMsQ0FBQztBQUVGLGlFQUFlUixnREFBUSxDQUFDVSxXQUFXLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSc7XG5pbXBvcnQgRmFjZWJvb2tQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2ZhY2Vib29rJztcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1Yic7XG5pbXBvcnQgVHdpdHRlclByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvdHdpdHRlcic7XG5pbXBvcnQgQXV0aDBQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2F1dGgwJztcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXInO1xuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vLi4vLi4vbGliL21vbmdvZGInO1xuaW1wb3J0IHsgc2lnbkluQ2FsbGJhY2sgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxsYmFjay9zaWduSW4nO1xuXG4vLyBpbXBvcnQgQXBwbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9hcHBsZVwiXG4vLyBpbXBvcnQgRW1haWxQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9lbWFpbFwiXG5cbi8vIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGVhY2ggb3B0aW9uIChhbmQgYSBmdWxsIGxpc3Qgb2Ygb3B0aW9ucykgZ28gdG9cbi8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL29wdGlvbnNcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vcHJvdmlkZXJzL29hdXRoXG4gIHByb3ZpZGVyczogW1xuICAgIC8qIEVtYWlsUHJvdmlkZXIoe1xuICAgICAgICAgc2VydmVyOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVIsXG4gICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgICAgIH0pLFxuICAgIC8vIFRlbXBvcmFyaWx5IHJlbW92aW5nIHRoZSBBcHBsZSBwcm92aWRlciBmcm9tIHRoZSBkZW1vIHNpdGUgYXMgdGhlXG4gICAgLy8gY2FsbGJhY2sgVVJMIGZvciBpdCBuZWVkcyB1cGRhdGluZyBkdWUgdG8gVmVyY2VsIGNoYW5naW5nIGRvbWFpbnNcblxuICAgIFByb3ZpZGVycy5BcHBsZSh7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVBQTEVfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHtcbiAgICAgICAgYXBwbGVJZDogcHJvY2Vzcy5lbnYuQVBQTEVfSUQsXG4gICAgICAgIHRlYW1JZDogcHJvY2Vzcy5lbnYuQVBQTEVfVEVBTV9JRCxcbiAgICAgICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuQVBQTEVfUFJJVkFURV9LRVksXG4gICAgICAgIGtleUlkOiBwcm9jZXNzLmVudi5BUFBMRV9LRVlfSUQsXG4gICAgICB9LFxuICAgIH0pLFxuICAgICovXG4gICAgRmFjZWJvb2tQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBHaXRodWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIHx8ICcnLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCB8fCAnJyxcbiAgICB9KSxcbiAgICBUd2l0dGVyUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LlRXSVRURVJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LlRXSVRURVJfU0VDUkVULFxuICAgIH0pLFxuICAgIEF1dGgwUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFVVEgwX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIMF9TRUNSRVQsXG4gICAgICBpc3N1ZXI6IHByb2Nlc3MuZW52LkFVVEgwX0lTU1VFUixcbiAgICB9KSxcbiAgXSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvclNjaGVtZTogJ2xpZ2h0JyxcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgLy8gICAvLyBhc3luYyBqd3QoeyB0b2tlbiB9KSB7XG4gICAgLy8gICAvLyAgIHRva2VuLnVzZXJSb2xlID0gXCJhZG1pblwiXG4gICAgLy8gICAvLyAgIHJldHVybiB0b2tlblxuICAgIC8vICAgLy8gfSxcbiAgICBhc3luYyBzaWduSW4oZGF0YSkge1xuICAgICAgcmV0dXJuIGF3YWl0IHNpZ25JbkNhbGxiYWNrKGRhdGEpO1xuICAgIH0sXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcbiAgLy8gcGFnZXM6IHtcbiAgICAvLyBzaWduSW46ICcvYXV0aC9zaWduLWluJyxcbiAgICAvLyAgIHNpZ25PdXQ6ICcvYXV0aC9zaWdub3V0JyxcbiAgICAvLyAgIGVycm9yOiAnL2F1dGgvZXJyb3InLCAvLyBFcnJvciBjb2RlIHBhc3NlZCBpbiBxdWVyeSBzdHJpbmcgYXMgP2Vycm9yPVxuICAgIC8vICAgdmVyaWZ5UmVxdWVzdDogJy9hdXRoL3ZlcmlmeS1yZXF1ZXN0JywgLy8gKHVzZWQgZm9yIGNoZWNrIGVtYWlsIG1lc3NhZ2UpXG4gICAgLy8gICBuZXdVc2VyOiAnL2F1dGgvbmV3LXVzZXInIC8vIE5ldyB1c2VycyB3aWxsIGJlIGRpcmVjdGVkIGhlcmUgb24gZmlyc3Qgc2lnbiBpbiAobGVhdmUgdGhlIHByb3BlcnR5IG91dCBpZiBub3Qgb2YgaW50ZXJlc3QpXG4gIC8vIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJOZXh0QXV0aE9wdGlvbnMiLCJHb29nbGVQcm92aWRlciIsIkZhY2Vib29rUHJvdmlkZXIiLCJHaXRodWJQcm92aWRlciIsIlR3aXR0ZXJQcm92aWRlciIsIkF1dGgwUHJvdmlkZXIiLCJNb25nb0RCQWRhcHRlciIsImNsaWVudFByb21pc2UiLCJzaWduSW5DYWxsYmFjayIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiRkFDRUJPT0tfSUQiLCJjbGllbnRTZWNyZXQiLCJGQUNFQk9PS19TRUNSRVQiLCJHSVRIVUJfSUQiLCJHSVRIVUJfU0VDUkVUIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiVFdJVFRFUl9JRCIsIlRXSVRURVJfU0VDUkVUIiwiQVVUSDBfSUQiLCJBVVRIMF9TRUNSRVQiLCJpc3N1ZXIiLCJBVVRIMF9JU1NVRVIiLCJ0aGVtZSIsImNvbG9yU2NoZW1lIiwiY2FsbGJhY2tzIiwic2lnbkluIiwiZGF0YSIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsImFkYXB0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./utils/callback/signIn.ts":
/*!**********************************!*\
  !*** ./utils/callback/signIn.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signInCallback\": () => (/* binding */ signInCallback)\n/* harmony export */ });\nconst signInCallback = async (data)=>{\n    console.log(data);\n    return true;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jYWxsYmFjay9zaWduSW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLGNBQWMsR0FBRyxPQUFPQyxJQUFTLEdBQUs7SUFDL0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7SUFDakIsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL2NhbGxiYWNrL3NpZ25Jbi50cz9hNDJmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY29uc3Qgc2lnbkluQ2FsbGJhY2sgPSBhc3luYyAoZGF0YTogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gdHJ1ZTtcbn0iXSwibmFtZXMiOlsic2lnbkluQ2FsbGJhY2siLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/callback/signIn.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();