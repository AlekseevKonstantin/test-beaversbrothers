(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cweb_project%5Ctest-beaversbrothers%5Clayout-test%5Csrc%5Cpages%5Cindex.tsx!./":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cweb_project%5Ctest-beaversbrothers%5Clayout-test%5Csrc%5Cpages%5Cindex.tsx ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/index.tsx */ "./src/pages/index.tsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_cbd63dbc973cd2abe989 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_cbd63dbc973cd2abe989 */ "dll-reference dll_cbd63dbc973cd2abe989"))("./node_modules/react/index.js");

/***/ }),

/***/ "./src/components/Layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/Layout/Layout.tsx ***!
  \******************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/assets/styles/index.css */ "./src/assets/styles/index.css");
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\Layout\\Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "root",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, children));
};

/***/ }),

/***/ "./src/components/card/card.tsx":
/*!**************************************!*\
  !*** ./src/components/card/card.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masks_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../masks/mask */ "./src/components/masks/mask.tsx");
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.css */ "./src/components/card/card.css");
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_card_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\card\\card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Card = function Card(props) {
  var cardRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var card = cardRef.current;
    props.callback && props.callback.call(props.context, card.offsetHeight + 40);
  }, []);
  var cardStyle = "card ".concat(props.cardProps.className);
  return __jsx("div", {
    className: cardStyle,
    ref: cardRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "card__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "card__img-wrapper",
    style: _objectSpread({}, props.cardProps.imgWrapStyle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    className: "card__img-decore",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("span", {
    className: "card__id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.cardProps.id.length > 0 && props.cardProps.id), props.cardProps.mask.length > 0 && __jsx(_masks_mask__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: props.cardProps.maskWidth,
    height: props.cardProps.maskHeight,
    img: props.cardProps.img,
    type: props.cardProps.mask,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), props.cardProps.mask.length === 0 && __jsx("img", {
    className: "card__img",
    src: "".concat(props.cardProps.img),
    alt: "".concat(props.cardProps.img),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("div", {
    className: "card__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("span", {
    className: "card__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, props.cardProps.title), __jsx("span", {
    className: "card__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, props.cardProps.text))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/masks/circle.tsx":
/*!*****************************************!*\
  !*** ./src/components/masks/circle.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\masks\\circle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Circle = function Circle(props) {
  return __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("clipPath", {
    clipPathUnits: "objectBoundingBox",
    id: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("path", {
    className: "style-scope image-mask",
    d: "M 0.5, 0.5 m -0.5, 0 a 0.5, 0.5 0 1, 0 1, 0 a 0.5, 0.5 0 1, 0 -1, 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Circle);

/***/ }),

/***/ "./src/components/masks/dome.tsx":
/*!***************************************!*\
  !*** ./src/components/masks/dome.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\masks\\dome.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Dome = function Dome(props) {
  return __jsx("defs", {
    className: "style-scope image-mask",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("clipPath", {
    clipPathUnits: "objectBoundingBox",
    className: "style-scope image-mask",
    id: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("ellipse", {
    cx: ".5",
    cy: ".55",
    rx: ".5",
    ry: ".54",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("rect", {
    x: "0",
    y: ".55",
    width: "100",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Dome);

/***/ }),

/***/ "./src/components/masks/mask.tsx":
/*!***************************************!*\
  !*** ./src/components/masks/mask.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle */ "./src/components/masks/circle.tsx");
/* harmony import */ var _triangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triangle */ "./src/components/masks/triangle.tsx");
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./square */ "./src/components/masks/square.tsx");
/* harmony import */ var _dome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dome */ "./src/components/masks/dome.tsx");
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\masks\\mask.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Mask = function Mask(props) {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    role: "img",
    className: "style-scope image-mask card__img mask",
    preserveAspectRatio: props.width === '100%' ? "none" : '',
    viewBox: "0 0 ".concat(parseInt(props.width), " ").concat(parseInt(props.height)),
    width: props.width,
    height: props.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.type === 'circle' && __jsx(_circle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), props.type === 'triangle' && __jsx(_triangle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), props.type === 'square' && __jsx(_square__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), props.type === 'dome' && __jsx(_dome__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("image", {
    height: "100%",
    width: "100%",
    preserveAspectRatio: "xMidYMid slice",
    className: "mask-name style-scope image-mask",
    clipPath: "url(#".concat(props.type, ")"),
    xlinkHref: props.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Mask);

/***/ }),

/***/ "./src/components/masks/square.tsx":
/*!*****************************************!*\
  !*** ./src/components/masks/square.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\masks\\square.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Square = function Square(props) {
  return __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("clipPath", {
    clipPathUnits: "objectBoundingBox",
    id: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("path", {
    className: "style-scope image-mask",
    d: "M 0 0, 1 0, 1 1, 0 1 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./src/components/masks/triangle.tsx":
/*!*******************************************!*\
  !*** ./src/components/masks/triangle.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\masks\\triangle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Triangle = function Triangle(props) {
  return __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("clipPath", {
    clipPathUnits: "objectBoundingBox",
    className: "style-scope image-mask",
    id: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("path", {
    className: "style-scope image-mask",
    d: "M 0 1, 0.5 0, 0.5 0, 1 1 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Triangle);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/components/Layout/Layout */ "./src/components/Layout/Layout.tsx");
/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/card/card */ "./src/components/card/card.tsx");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../state/state */ "./src/state/state.tsx");







var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var _default = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      topHeight: 0,
      maskedHeight: 0,
      curVp: 0
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getMaxTopHeight", function (height) {
      if (_this.state && height > _this.state.topHeight) {
        _this.state.topHeight = height;
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getMaxMaskedHeight", function (height) {
      if (_this.state && height > _this.state.maskedHeight) {
        _this.state.maskedHeight = height;
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "resize", function () {
      _this.setState({
        curVp: window.innerWidth
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        curVp: window.innerWidth
      });
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }
  }, {
    key: "cardToProps",
    value: function cardToProps(array, callback) {
      var _this2 = this;

      return array.map(function (item, index) {
        return __jsx("div", {
          className: "col ".concat(item.className),
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, __jsx(_components_card_card__WEBPACK_IMPORTED_MODULE_9__["default"], {
          cardProps: item.cardProps,
          callback: callback,
          context: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("h2", {
        className: "headers mb--more-small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "\u0422\u041E\u041F ", __jsx("span", {
        className: "italic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "10"), " \u043C\u0435\u0441\u0442"), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, _state_state__WEBPACK_IMPORTED_MODULE_10__["stateTop"] && this.cardToProps(_state_state__WEBPACK_IMPORTED_MODULE_10__["bigTop"], null)), __jsx("div", {
        className: "list",
        style: this.state.curVp > 0 && this.state.curVp < 767 ? {
          height: "".concat(this.state.topHeight, "px")
        } : undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, _state_state__WEBPACK_IMPORTED_MODULE_10__["stateTop"] && this.cardToProps(_state_state__WEBPACK_IMPORTED_MODULE_10__["stateTop"], this.getMaxTopHeight))), __jsx("h2", {
        className: "headers mb--more-medium mt--big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("span", {
        className: "italic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "\u0421\u043A\u043E\u0440\u043E"), " \u043D\u0430 \u0441\u0430\u0439\u0442\u0435"), __jsx("div", {
        className: "list",
        style: this.state.curVp > 0 && this.state.curVp < 767 ? {
          height: "".concat(this.state.maskedHeight, "px")
        } : undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, _state_state__WEBPACK_IMPORTED_MODULE_10__["stateMasked"] && this.cardToProps(_state_state__WEBPACK_IMPORTED_MODULE_10__["stateMasked"], this.getMaxMaskedHeight)))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./src/state/state.tsx":
/*!*****************************!*\
  !*** ./src/state/state.tsx ***!
  \*****************************/
/*! exports provided: bigTop, stateTop, stateMasked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bigTop", function() { return bigTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateTop", function() { return stateTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateMasked", function() { return stateMasked; });
var bigTop = [{
  className: 'w50p w100p-xs mb--more-small mb--more-big-xs',
  cardProps: {
    id: '1',
    img: '/img/img-1.png',
    title: 'Невьянская башня',
    text: 'Остатки прошлого величия промышленников Демидовых',
    className: 'big first ',
    imgWrapStyle: {
      backgroundColor: 'transparent'
    },
    mask: 'circle',
    maskWidth: '100%',
    maskHeight: '100%'
  }
}, {
  className: 'w50p w100p-xs mb--more-small mb--more-medium-xs',
  cardProps: {
    id: '2',
    img: '/img/gan-2.png',
    title: 'Ганина яма',
    text: 'В 1918 году в шахту бросили останки представителей царской династии Романовых',
    className: 'big second',
    imgWrapStyle: {
      backgroundColor: 'white'
    },
    mask: 'dome',
    maskWidth: '100%',
    maskHeight: '100%'
  }
}];
var stateTop = [{
  className: 'w25p w275-fix-xs mb--more-medium',
  cardProps: {
    id: '3',
    img: '/img/img-3.png',
    title: 'Верхотурье',
    text: 'Духовный центр России',
    className: '',
    imgWrapStyle: {
      backgroundColor: 'transparent'
    },
    mask: '',
    maskWidth: '',
    maskHeight: ''
  }
}, {
  className: 'w25p w275-fix-xs mb--more-medium',
  cardProps: {
    id: '4',
    img: '/img/img-4.png',
    title: 'Аркаим',
    text: 'Город древних цивилизаций',
    className: '',
    imgWrapStyle: {
      backgroundColor: 'transparent'
    },
    mask: '',
    maskWidth: '',
    maskHeight: ''
  }
}, {
  className: 'w25p w275-fix-xs mb--more-medium',
  cardProps: {
    id: '5',
    img: '/img/img-5.png',
    title: 'Оленьи ручьи',
    text: 'Красивый парк с памятниками древней истории',
    className: 'status-kids',
    imgWrapStyle: {
      backgroundColor: 'transparent'
    },
    mask: '',
    maskWidth: '',
    maskHeight: ''
  }
}, {
  className: 'w25p w275-fix-xs mb--more-medium',
  cardProps: {
    id: '6',
    img: '/img/img-6.png',
    title: 'Конжаковский камень',
    text: 'Высшая точка Свердловской области',
    className: '',
    imgWrapStyle: {
      backgroundColor: 'transparent'
    },
    mask: '',
    maskWidth: '',
    maskHeight: ''
  }
}, {
  className: 'w25p w275-fix-xs',
  cardProps: {
    id: '7',
    img: '/img/img-7.png',
    title: 'Качканар',
    text: 'Причудливые скальные останцы и буддийский монастырь',
    className: '',
    imgWrapStyle: {
      backgroundColor: 'transparent'
    },
    mask: '',
    maskWidth: '',
    maskHeight: ''
  }
}, {
  className: 'w25p w275-fix-xs',
  cardProps: {
    id: '8',
    img: '/img/img-8.png',
    title: 'Зюраткуль',
    text: 'Горный хребет и озеро',
    className: 'status-basko',
    imgWrapStyle: {
      backgroundColor: 'transparent'
    },
    mask: '',
    maskWidth: '',
    maskHeight: ''
  }
}, {
  className: 'w25p w275-fix-xs',
  cardProps: {
    id: '9',
    img: '/img/img-9.png',
    title: 'Аракульский',
    text: 'Шихан Живописная скальная стена с причудливыми формами',
    className: '',
    imgWrapStyle: {
      backgroundColor: 'transparent'
    },
    mask: '',
    maskWidth: '',
    maskHeight: ''
  }
}, {
  className: 'w25p w275-fix-xs',
  cardProps: {
    id: '10',
    img: '/img/img-10.png',
    title: 'Граница европы и Азии',
    text: 'Монументы и стеллы на магистралях',
    className: '',
    imgWrapStyle: {
      backgroundColor: 'transparent'
    },
    mask: '',
    maskWidth: '',
    maskHeight: ''
  }
}];
var stateMasked = [{
  className: 'w33p w275-fix-xs',
  cardProps: {
    id: '',
    img: '/img/img-11.png',
    title: '10 мест для прогулок',
    text: 'Парки, тихие улицы, чтобы отправиться на пробежку или плэнер',
    className: 'masked mask-triangle status-route',
    imgWrapStyle: {
      backgroundColor: '#82CA9C'
    },
    mask: 'triangle',
    maskWidth: '90%',
    maskHeight: '80%'
  }
}, {
  className: 'w33p w275-fix-xs',
  cardProps: {
    id: '',
    img: '/img/img-12.png',
    title: 'Где пробовать настоящую уральскую кухню',
    text: 'Пельмени, кулебяки шаньги: традиционные рецепты народов Урала',
    className: 'masked mask-circle status-route',
    imgWrapStyle: {
      backgroundColor: '#F8AA9E'
    },
    mask: 'circle',
    maskWidth: '82%',
    maskHeight: '82%'
  }
}, {
  className: 'w33p w275-fix-xs',
  cardProps: {
    id: '',
    img: '/img/img-13.png',
    title: 'Портал',
    text: 'Арт-объект фестиваля Стеннография',
    className: 'masked mask-square',
    imgWrapStyle: {
      backgroundColor: '#008066'
    },
    mask: 'square',
    maskWidth: '80%',
    maskHeight: '80%'
  }
}];

/***/ }),

/***/ 1:
/*!**************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5Cweb_project%5Ctest-beaversbrothers%5Clayout-test%5Csrc%5Cpages%5Cindex.tsx ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5Cweb_project%5Ctest-beaversbrothers%5Clayout-test%5Csrc%5Cpages%5Cindex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5Cweb_project%5Ctest-beaversbrothers%5Clayout-test%5Csrc%5Cpages%5Cindex.tsx!./");


/***/ }),

/***/ "dll-reference dll_cbd63dbc973cd2abe989":
/*!*******************************************!*\
  !*** external "dll_cbd63dbc973cd2abe989" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_cbd63dbc973cd2abe989;

/***/ })

},[[1,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map