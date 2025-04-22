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

/***/ "./services/whishlistcontext.tsx":
/*!***************************************!*\
  !*** ./services/whishlistcontext.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WishlistProvider: () => (/* binding */ WishlistProvider),\n/* harmony export */   useWishlist: () => (/* binding */ useWishlist)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst WishlistContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst WishlistProvider = ({ children })=>{\n    const [wishlist, setWishlist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToWishlist = (product)=>{\n        setWishlist([\n            ...wishlist,\n            product\n        ]);\n    };\n    const removeFromWishlist = (product)=>{\n        setWishlist(wishlist.filter((item)=>item.id !== product.id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WishlistContext.Provider, {\n        value: {\n            wishlist,\n            addToWishlist,\n            removeFromWishlist\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"E:\\\\Demo E-commerce Shopping Platform\\\\services\\\\whishlistcontext.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\nconst useWishlist = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WishlistContext);\n    if (!context) {\n        throw new Error(\"useWishlist must be used within a WishlistProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy93aGlzaGxpc3Rjb250ZXh0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1FO0FBU25FLE1BQU1JLGdDQUFrQkgsb0RBQWFBLENBQW1DSTtBQUVqRSxNQUFNQyxtQkFBNEQsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDcEYsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFZLEVBQUU7SUFFdEQsTUFBTU8sZ0JBQWdCLENBQUNDO1FBQ3JCRixZQUFZO2VBQUlEO1lBQVVHO1NBQVE7SUFDcEM7SUFFQSxNQUFNQyxxQkFBcUIsQ0FBQ0Q7UUFDMUJGLFlBQVlELFNBQVNLLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsRUFBRSxLQUFLSixRQUFRSSxFQUFFO0lBQzVEO0lBRUEscUJBQ0UsOERBQUNYLGdCQUFnQlksUUFBUTtRQUFDQyxPQUFPO1lBQUVUO1lBQVVFO1lBQWVFO1FBQW1CO2tCQUM1RUw7Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNVyxjQUFjO0lBQ3pCLE1BQU1DLFVBQVVqQixpREFBVUEsQ0FBQ0U7SUFDM0IsSUFBSSxDQUFDZSxTQUFTO1FBQ1osTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0lBQ0EsT0FBT0Q7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTWV0YXNob3BwaW5nLy4vc2VydmljZXMvd2hpc2hsaXN0Y29udGV4dC50c3g/Y2M1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQC90eXBlcy90eXBlJztcblxuaW50ZXJmYWNlIFdpc2hsaXN0Q29udGV4dFByb3BzIHtcbiAgd2lzaGxpc3Q6IFByb2R1Y3RbXTtcbiAgYWRkVG9XaXNobGlzdDogKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHZvaWQ7XG4gIHJlbW92ZUZyb21XaXNobGlzdDogKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFdpc2hsaXN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8V2lzaGxpc3RDb250ZXh0UHJvcHMgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBXaXNobGlzdFByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt3aXNobGlzdCwgc2V0V2lzaGxpc3RdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSk7XG5cbiAgY29uc3QgYWRkVG9XaXNobGlzdCA9IChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgc2V0V2lzaGxpc3QoWy4uLndpc2hsaXN0LCBwcm9kdWN0XSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlRnJvbVdpc2hsaXN0ID0gKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICBzZXRXaXNobGlzdCh3aXNobGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBwcm9kdWN0LmlkKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8V2lzaGxpc3RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHdpc2hsaXN0LCBhZGRUb1dpc2hsaXN0LCByZW1vdmVGcm9tV2lzaGxpc3QgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9XaXNobGlzdENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlV2lzaGxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFdpc2hsaXN0Q29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlV2lzaGxpc3QgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIFdpc2hsaXN0UHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiV2lzaGxpc3RDb250ZXh0IiwidW5kZWZpbmVkIiwiV2lzaGxpc3RQcm92aWRlciIsImNoaWxkcmVuIiwid2lzaGxpc3QiLCJzZXRXaXNobGlzdCIsImFkZFRvV2lzaGxpc3QiLCJwcm9kdWN0IiwicmVtb3ZlRnJvbVdpc2hsaXN0IiwiZmlsdGVyIiwiaXRlbSIsImlkIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVdpc2hsaXN0IiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/whishlistcontext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_whishlistcontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/whishlistcontext */ \"./services/whishlistcontext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_services_whishlistcontext__WEBPACK_IMPORTED_MODULE_3__.WishlistProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Meta-shopping\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Demo E-commerce Shopping Platform\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\Demo E-commerce Shopping Platform\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"E:\\\\Demo E-commerce Shopping Platform\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Demo E-commerce Shopping Platform\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRThCO0FBRUY7QUFDdUM7QUFFcEQsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxxQkFDRTtrQkFDRSw0RUFBQ0gsd0VBQWdCQTs7OEJBQ2pCLDhEQUFDRCxrREFBSUE7OEJBQ0gsNEVBQUNLO2tDQUFNOzs7Ozs7Ozs7Ozs4QkFFVCw4REFBQ0Y7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUk5QiIsInNvdXJjZXMiOlsid2VicGFjazovL01ldGFzaG9wcGluZy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgV2lzaGxpc3RQcm92aWRlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3doaXNobGlzdGNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxXaXNobGlzdFByb3ZpZGVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NZXRhLXNob3BwaW5nPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvV2lzaGxpc3RQcm92aWRlcj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJXaXNobGlzdFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();