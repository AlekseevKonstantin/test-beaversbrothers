module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/styles/index.css":
/*!*************************************!*\
  !*** ./src/assets/styles/index.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/assets/styles/index.css */ "./src/assets/styles/index.css");
/* harmony import */ var _assets_styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\Layout\\Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = ({
  children
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "root",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, children));

/***/ }),

/***/ "./src/components/card/card.css":
/*!**************************************!*\
  !*** ./src/components/card/card.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/card/card.tsx":
/*!**************************************!*\
  !*** ./src/components/card/card.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masks_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../masks/mask */ "./src/components/masks/mask.tsx");
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.css */ "./src/components/card/card.css");
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\card\\card.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Card = props => {
  const cardRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let card = cardRef.current;
    props.callback && props.callback.call(props.context, card.offsetHeight + 40);
  }, []);
  const cardStyle = `card ${props.cardProps.className}`;
  return __jsx("div", {
    className: cardStyle,
    ref: cardRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "card__inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "card__img-wrapper",
    style: _objectSpread({}, props.cardProps.imgWrapStyle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("span", {
    className: "card__img-decore",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("span", {
    className: "card__id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, props.cardProps.id.length > 0 && props.cardProps.id), props.cardProps.mask.length > 0 && __jsx(_masks_mask__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: props.cardProps.maskWidth,
    height: props.cardProps.maskHeight,
    img: props.cardProps.img,
    type: props.cardProps.mask,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), props.cardProps.mask.length === 0 && __jsx("img", {
    className: "card__img",
    src: `${props.cardProps.img}`,
    alt: `${props.cardProps.img}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx("div", {
    className: "card__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("span", {
    className: "card__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, props.cardProps.title), __jsx("span", {
    className: "card__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\masks\\circle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Circle = props => {
  return __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("clipPath", {
    clipPathUnits: "objectBoundingBox",
    id: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("path", {
    className: "style-scope image-mask",
    d: "M 0.5, 0.5 m -0.5, 0 a 0.5, 0.5 0 1, 0 1, 0 a 0.5, 0.5 0 1, 0 -1, 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\masks\\dome.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Dome = props => {
  return __jsx("defs", {
    className: "style-scope image-mask",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("clipPath", {
    clipPathUnits: "objectBoundingBox",
    className: "style-scope image-mask",
    id: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("ellipse", {
    cx: ".5",
    cy: ".55",
    rx: ".5",
    ry: ".54",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("rect", {
    x: "0",
    y: ".55",
    width: "100",
    height: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle */ "./src/components/masks/circle.tsx");
/* harmony import */ var _triangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triangle */ "./src/components/masks/triangle.tsx");
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./square */ "./src/components/masks/square.tsx");
/* harmony import */ var _dome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dome */ "./src/components/masks/dome.tsx");
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\masks\\mask.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Mask = props => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    version: "1.1",
    role: "img",
    className: "style-scope image-mask card__img mask",
    preserveAspectRatio: props.width === '100%' ? "none" : '',
    viewBox: `0 0 ${parseInt(props.width)} ${parseInt(props.height)}`,
    width: props.width,
    height: props.height,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.type === 'circle' && __jsx(_circle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), props.type === 'triangle' && __jsx(_triangle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), props.type === 'square' && __jsx(_square__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), props.type === 'dome' && __jsx(_dome__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("image", {
    height: "100%",
    width: "100%",
    preserveAspectRatio: "xMidYMid slice",
    className: "mask-name style-scope image-mask",
    clipPath: `url(#${props.type})`,
    xlinkHref: props.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\masks\\square.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Square = props => {
  return __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("clipPath", {
    clipPathUnits: "objectBoundingBox",
    id: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("path", {
    className: "style-scope image-mask",
    d: "M 0 0, 1 0, 1 1, 0 1 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\components\\masks\\triangle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Triangle = props => {
  return __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("clipPath", {
    clipPathUnits: "objectBoundingBox",
    className: "style-scope image-mask",
    id: props.type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("path", {
    className: "style-scope image-mask",
    d: "M 0 1, 0.5 0, 0.5 0, 1 1 z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/Layout/Layout */ "./src/components/Layout/Layout.tsx");
/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card/card */ "./src/components/card/card.tsx");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/state */ "./src/state/state.tsx");
var _jsxFileName = "C:\\web_project\\test-beaversbrothers\\layout-test\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = (class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      topHeight: 0,
      maskedHeight: 0,
      curVp: 0
    });

    _defineProperty(this, "getMaxTopHeight", height => {
      if (this.state && height > this.state.topHeight) {
        this.state.topHeight = height;
      }
    });

    _defineProperty(this, "getMaxMaskedHeight", height => {
      if (this.state && height > this.state.maskedHeight) {
        this.state.maskedHeight = height;
      }
    });

    _defineProperty(this, "resize", () => {
      this.setState({
        curVp: window.innerWidth
      });
    });
  }

  componentDidMount() {
    this.setState({
      curVp: window.innerWidth
    });
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  cardToProps(array, callback) {
    return array.map((item, index) => {
      return __jsx("div", {
        className: `col ${item.className}`,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(_components_card_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
        cardProps: item.cardProps,
        callback: callback,
        context: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }));
    });
  }

  render() {
    return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
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
    }, _state_state__WEBPACK_IMPORTED_MODULE_3__["stateTop"] && this.cardToProps(_state_state__WEBPACK_IMPORTED_MODULE_3__["bigTop"], null)), __jsx("div", {
      className: "list",
      style: this.state.curVp > 0 && this.state.curVp < 767 ? {
        height: `${this.state.topHeight}px`
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
    }, _state_state__WEBPACK_IMPORTED_MODULE_3__["stateTop"] && this.cardToProps(_state_state__WEBPACK_IMPORTED_MODULE_3__["stateTop"], this.getMaxTopHeight))), __jsx("h2", {
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
        height: `${this.state.maskedHeight}px`
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
    }, _state_state__WEBPACK_IMPORTED_MODULE_3__["stateMasked"] && this.cardToProps(_state_state__WEBPACK_IMPORTED_MODULE_3__["stateMasked"], this.getMaxMaskedHeight)))));
  }

});

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
const bigTop = [{
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
const stateTop = [{
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
const stateMasked = [{
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

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\web_project\test-beaversbrothers\layout-test\src\pages\index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map