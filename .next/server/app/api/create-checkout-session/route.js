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
exports.id = "app/api/create-checkout-session/route";
exports.ids = ["app/api/create-checkout-session/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fjosephcampbell%2FDesktop%2FClaude%20Web%20Project%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjosephcampbell%2FDesktop%2FClaude%20Web%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fjosephcampbell%2FDesktop%2FClaude%20Web%20Project%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjosephcampbell%2FDesktop%2FClaude%20Web%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_josephcampbell_Desktop_Claude_Web_Project_app_api_create_checkout_session_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/create-checkout-session/route.ts */ \"(rsc)/./app/api/create-checkout-session/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/create-checkout-session/route\",\n        pathname: \"/api/create-checkout-session\",\n        filename: \"route\",\n        bundlePath: \"app/api/create-checkout-session/route\"\n    },\n    resolvedPagePath: \"/Users/josephcampbell/Desktop/Claude Web Project/app/api/create-checkout-session/route.ts\",\n    nextConfigOutput,\n    userland: _Users_josephcampbell_Desktop_Claude_Web_Project_app_api_create_checkout_session_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/create-checkout-session/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmpvc2VwaGNhbXBiZWxsJTJGRGVza3RvcCUyRkNsYXVkZSUyMFdlYiUyMFByb2plY3QlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGam9zZXBoY2FtcGJlbGwlMkZEZXNrdG9wJTJGQ2xhdWRlJTIwV2ViJTIwUHJvamVjdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2ItdGhlLXdlaXJkLWJvb2svPzkzMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2pvc2VwaGNhbXBiZWxsL0Rlc2t0b3AvQ2xhdWRlIFdlYiBQcm9qZWN0L2FwcC9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb25cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2pvc2VwaGNhbXBiZWxsL0Rlc2t0b3AvQ2xhdWRlIFdlYiBQcm9qZWN0L2FwcC9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fjosephcampbell%2FDesktop%2FClaude%20Web%20Project%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjosephcampbell%2FDesktop%2FClaude%20Web%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/create-checkout-session/route.ts":
/*!**************************************************!*\
  !*** ./app/api/create-checkout-session/route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/stripe */ \"(rsc)/./lib/stripe.ts\");\n\n\nasync function POST(req) {\n    try {\n        const { tierId } = await req.json();\n        if (!tierId || !_lib_stripe__WEBPACK_IMPORTED_MODULE_1__.tierPriceMap[tierId]) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Invalid tier\"\n            }, {\n                status: 400\n            });\n        }\n        const priceId = _lib_stripe__WEBPACK_IMPORTED_MODULE_1__.tierPriceMap[tierId];\n        if (!priceId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: `Price not configured for tier: ${tierId}`\n            }, {\n                status: 500\n            });\n        }\n        const siteUrl = \"http://localhost:3000\" || 0;\n        const session = await _lib_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.checkout.sessions.create({\n            mode: \"payment\",\n            payment_method_types: [\n                \"card\"\n            ],\n            line_items: [\n                {\n                    price: priceId,\n                    quantity: 1\n                }\n            ],\n            success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,\n            cancel_url: `${siteUrl}/subscribe`,\n            allow_promotion_codes: true\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            url: session.url\n        });\n    } catch (error) {\n        console.error(\"Stripe checkout error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create checkout session\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RDtBQUNKO0FBRTdDLGVBQWVHLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1ELElBQUlFLElBQUk7UUFFakMsSUFBSSxDQUFDRCxVQUFVLENBQUNILHFEQUFZLENBQUNHLE9BQU8sRUFBRTtZQUNwQyxPQUFPTCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3BFO1FBRUEsTUFBTUMsVUFBVVAscURBQVksQ0FBQ0csT0FBTztRQUVwQyxJQUFJLENBQUNJLFNBQVM7WUFDWixPQUFPVCxxREFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtnQkFBRUMsT0FBTyxDQUFDLCtCQUErQixFQUFFRixPQUFPLENBQUM7WUFBQyxHQUNwRDtnQkFBRUcsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTUUsVUFBVUMsdUJBQWdDLElBQUksQ0FBdUI7UUFFM0UsTUFBTUcsVUFBVSxNQUFNYiwrQ0FBTUEsQ0FBQ2MsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztZQUNwREMsTUFBTTtZQUNOQyxzQkFBc0I7Z0JBQUM7YUFBTztZQUM5QkMsWUFBWTtnQkFDVjtvQkFDRUMsT0FBT1o7b0JBQ1BhLFVBQVU7Z0JBQ1o7YUFDRDtZQUNEQyxhQUFhLENBQUMsRUFBRWIsUUFBUSx5Q0FBeUMsQ0FBQztZQUNsRWMsWUFBWSxDQUFDLEVBQUVkLFFBQVEsVUFBVSxDQUFDO1lBQ2xDZSx1QkFBdUI7UUFDekI7UUFFQSxPQUFPekIscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFb0IsS0FBS1osUUFBUVksR0FBRztRQUFDO0lBQzlDLEVBQUUsT0FBT25CLE9BQU87UUFDZG9CLFFBQVFwQixLQUFLLENBQUMsMEJBQTBCQTtRQUN4QyxPQUFPUCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBb0MsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDekY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3R3Yi10aGUtd2VpcmQtYm9vay8uL2FwcC9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24vcm91dGUudHM/ZjZhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBzdHJpcGUsIHRpZXJQcmljZU1hcCB9IGZyb20gXCJAL2xpYi9zdHJpcGVcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgdGllcklkIH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgaWYgKCF0aWVySWQgfHwgIXRpZXJQcmljZU1hcFt0aWVySWRdKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIHRpZXJcIiB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHByaWNlSWQgPSB0aWVyUHJpY2VNYXBbdGllcklkXTtcblxuICAgIGlmICghcHJpY2VJZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiBgUHJpY2Ugbm90IGNvbmZpZ3VyZWQgZm9yIHRpZXI6ICR7dGllcklkfWAgfSxcbiAgICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHNpdGVVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgICAgbW9kZTogXCJwYXltZW50XCIsXG4gICAgICBwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcbiAgICAgIGxpbmVfaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByaWNlOiBwcmljZUlkLFxuICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHN1Y2Nlc3NfdXJsOiBgJHtzaXRlVXJsfS9zdWNjZXNzP3Nlc3Npb25faWQ9e0NIRUNLT1VUX1NFU1NJT05fSUR9YCxcbiAgICAgIGNhbmNlbF91cmw6IGAke3NpdGVVcmx9L3N1YnNjcmliZWAsXG4gICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1cmw6IHNlc3Npb24udXJsIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJTdHJpcGUgY2hlY2tvdXQgZXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIGNoZWNrb3V0IHNlc3Npb25cIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwic3RyaXBlIiwidGllclByaWNlTWFwIiwiUE9TVCIsInJlcSIsInRpZXJJZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInByaWNlSWQiLCJzaXRlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NJVEVfVVJMIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJtb2RlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsInN1Y2Nlc3NfdXJsIiwiY2FuY2VsX3VybCIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsInVybCIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/create-checkout-session/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/stripe.ts":
/*!***********************!*\
  !*** ./lib/stripe.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stripe: () => (/* binding */ stripe),\n/* harmony export */   tierPriceMap: () => (/* binding */ tierPriceMap)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n\nif (!process.env.STRIPE_SECRET_KEY) {\n    throw new Error(\"Missing STRIPE_SECRET_KEY environment variable\");\n}\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_0__[\"default\"](process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2024-06-20\",\n    typescript: true\n});\n// Map tier IDs to their Stripe price env var\nconst tierPriceMap = {\n    pro: process.env.STRIPE_PRICE_PRO,\n    expert: process.env.STRIPE_PRICE_EXPERT,\n    hacker: process.env.STRIPE_PRICE_HACKER,\n    meister: process.env.STRIPE_PRICE_MEISTER,\n    diamond: process.env.STRIPE_PRICE_DIAMOND\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3RyaXBlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUU1QixJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCLEVBQUU7SUFDbEMsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRU8sTUFBTUMsU0FBUyxJQUFJTCw4Q0FBTUEsQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUIsRUFBRTtJQUM5REcsWUFBWTtJQUNaQyxZQUFZO0FBQ2QsR0FBRztBQUVILDZDQUE2QztBQUN0QyxNQUFNQyxlQUFtRDtJQUM5REMsS0FBS1IsUUFBUUMsR0FBRyxDQUFDUSxnQkFBZ0I7SUFDakNDLFFBQVFWLFFBQVFDLEdBQUcsQ0FBQ1UsbUJBQW1CO0lBQ3ZDQyxRQUFRWixRQUFRQyxHQUFHLENBQUNZLG1CQUFtQjtJQUN2Q0MsU0FBU2QsUUFBUUMsR0FBRyxDQUFDYyxvQkFBb0I7SUFDekNDLFNBQVNoQixRQUFRQyxHQUFHLENBQUNnQixvQkFBb0I7QUFDM0MsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3R3Yi10aGUtd2VpcmQtYm9vay8uL2xpYi9zdHJpcGUudHM/MGUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcblxuaWYgKCFwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIFNUUklQRV9TRUNSRVRfS0VZIGVudmlyb25tZW50IHZhcmlhYmxlXCIpO1xufVxuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSwge1xuICBhcGlWZXJzaW9uOiBcIjIwMjQtMDYtMjBcIixcbiAgdHlwZXNjcmlwdDogdHJ1ZSxcbn0pO1xuXG4vLyBNYXAgdGllciBJRHMgdG8gdGhlaXIgU3RyaXBlIHByaWNlIGVudiB2YXJcbmV4cG9ydCBjb25zdCB0aWVyUHJpY2VNYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB7XG4gIHBybzogcHJvY2Vzcy5lbnYuU1RSSVBFX1BSSUNFX1BSTyxcbiAgZXhwZXJ0OiBwcm9jZXNzLmVudi5TVFJJUEVfUFJJQ0VfRVhQRVJULFxuICBoYWNrZXI6IHByb2Nlc3MuZW52LlNUUklQRV9QUklDRV9IQUNLRVIsXG4gIG1laXN0ZXI6IHByb2Nlc3MuZW52LlNUUklQRV9QUklDRV9NRUlTVEVSLFxuICBkaWFtb25kOiBwcm9jZXNzLmVudi5TVFJJUEVfUFJJQ0VfRElBTU9ORCxcbn07XG4iXSwibmFtZXMiOlsiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiRXJyb3IiLCJzdHJpcGUiLCJhcGlWZXJzaW9uIiwidHlwZXNjcmlwdCIsInRpZXJQcmljZU1hcCIsInBybyIsIlNUUklQRV9QUklDRV9QUk8iLCJleHBlcnQiLCJTVFJJUEVfUFJJQ0VfRVhQRVJUIiwiaGFja2VyIiwiU1RSSVBFX1BSSUNFX0hBQ0tFUiIsIm1laXN0ZXIiLCJTVFJJUEVfUFJJQ0VfTUVJU1RFUiIsImRpYW1vbmQiLCJTVFJJUEVfUFJJQ0VfRElBTU9ORCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/stripe.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/call-bind-apply-helpers","vendor-chunks/get-proto","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/side-channel","vendor-chunks/side-channel-weakmap","vendor-chunks/side-channel-map","vendor-chunks/side-channel-list","vendor-chunks/hasown","vendor-chunks/get-intrinsic","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/call-bound"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcreate-checkout-session%2Froute&page=%2Fapi%2Fcreate-checkout-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcreate-checkout-session%2Froute.ts&appDir=%2FUsers%2Fjosephcampbell%2FDesktop%2FClaude%20Web%20Project%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjosephcampbell%2FDesktop%2FClaude%20Web%20Project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();