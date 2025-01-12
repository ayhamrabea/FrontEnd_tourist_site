"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateexam"]("main",{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _laylazi_bootstrap_rtl_dist_css_bootstrap_rtl_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css */ \"./node_modules/@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css\");\n/* harmony import */ var _laylazi_bootstrap_rtl_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @laylazi/bootstrap-rtl/dist/js/bootstrap.bundle.min.js */ \"./node_modules/@laylazi/bootstrap-rtl/dist/js/bootstrap.bundle.min.js\");\n/* harmony import */ var _laylazi_bootstrap_rtl_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_laylazi_bootstrap_rtl_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n     //// من المهم استيراد الملفات بهذا الشكل و الترتيب\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// تفعيل المكتبة\r\naos__WEBPACK_IMPORTED_MODULE_5___default().init({\r\n    duration: 300, // مدة التأثير بالمللي ثانية\r\n    easing: 'ease-in-out', // نوع الحركة\r\n    offset: 200, // المسافة قبل بدء التأثير\r\n    delay: 75, // تأخير البداية بالمللي ثانية\r\n});\r\n\r\n\r\n\r\n//// background navbar\r\nwindow.addEventListener('scroll', function () {\r\n    const navbar = document.querySelector('.navbar'); // تحديد العنصر\r\n    if (window.scrollY > 250) {  // إذا كان التمرير أكبر من 50px\r\n        navbar.classList.add('navbar-scrolled');  // إضافة الفئة (class)\r\n    } else {\r\n        navbar.classList.remove('navbar-scrolled');  // إزالة الفئة (class)\r\n    }\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n// login-invalid\r\ndocument.querySelector('form').addEventListener('submit', function (event) {\r\n    event.preventDefault(); // منع الإرسال الفعلي للنموذج\r\n\r\n    const email = document.getElementById('exampleFormControlInput1');\r\n    const password = document.getElementById('inputPassword');\r\n\r\n    // تحقق من المدخلات\r\n    let isValid = true;\r\n\r\n    if (!email.value) {\r\n        email.classList.add('is-invalid');  // إضافة is-invalid للبريد الإلكتروني إذا كان فارغًا\r\n        isValid = false;\r\n    } else {\r\n        email.classList.remove('is-invalid'); // إزالة is-invalid إذا كان المدخل صحيحًا\r\n    }\r\n\r\n    if (!password.value) {\r\n        password.classList.add('is-invalid');  // إضافة is-invalid لكلمة السر إذا كانت فارغة\r\n        isValid = false;\r\n    } else {\r\n        password.classList.remove('is-invalid'); // إزالة is-invalid إذا كان المدخل صحيحًا\r\n    }\r\n\r\n    if (isValid) {\r\n        alert(\"تم تسجيل الدخول بنجاح!\");\r\n        // أضف الكود هنا لإرسال النموذج أو القيام بإجراء آخر\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://exam/./src/js/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("51114875fdc9a1258f3e")
/******/ })();
/******/ 
/******/ }
);