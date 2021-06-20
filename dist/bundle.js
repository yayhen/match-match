/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"a {\\n  margin: 10px;\\n}\\n\\n.card-container {\\n  /* width: 1000px; */\\n  /* height: 100%; */\\n  background: blue;\\n}\\n\\n.card {\\n  width: 100px;\\n  height: 115px;\\n  border: 2px solid white; \\n  display: inline-block;\\n  margin: 15px;\\n  line-height: 75px;\\n}\\n\\n.congradulation {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background: darkcyan;\\n}\\n\\n.timer {\\n  position: fixed;\\n  top: 10%;\\n  left: 50%;\\n  background: darkcyan;\\n  color: white;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://match-match/./src/assets/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://match-match/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/images/animals.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/animals.jpg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"63bc9a081ee8c3c4143325f647bfc9f2.jpg\");\n\n//# sourceURL=webpack://match-match/./src/assets/images/animals.jpg?");

/***/ }),

/***/ "./src/assets/styles/style.css":
/*!*************************************!*\
  !*** ./src/assets/styles/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css\");\n\n            \n\nvar options = {\"injectType\":\"singletonStyleTag\"};\n\noptions.insert = \"head\";\noptions.singleton = true;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://match-match/./src/assets/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://match-match/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/card.ts":
/*!********************************!*\
  !*** ./src/components/card.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar animalImagesUrl = __webpack_require__(/*! ../assets/images/animals.jpg */ \"./src/assets/images/animals.jpg\").default;\nvar animalImagesPosition = {\n    imageWidth: 100,\n    imageHight: 116,\n    imagesInRow: 12,\n};\nvar Card = /** @class */ (function () {\n    function Card(imageNumber, id, game, cardPosition, cardsContainer) {\n        this.cardId = id;\n        this.imageNumber = imageNumber;\n        this.container = document.createElement('div');\n        this.makeKardImageVisible();\n        this.openedCard = true;\n        this.game = game;\n        this.cardPosition = cardPosition;\n        this.cardsContainer = cardsContainer;\n        if (game.openedCards[cardPosition.i][cardPosition.j] === false) {\n            this.openedCard = false;\n            this.makeCardImageInvisible();\n        }\n    }\n    Card.prototype.makeKardImageVisible = function () {\n        this.container = document.createElement('div');\n        this.container.className = 'card';\n        this.container.id = this.cardId;\n        var canvas = document.createElement('canvas');\n        var imageWidth = animalImagesPosition.imageWidth;\n        var imageHight = animalImagesPosition.imageHight;\n        var imagesInRow = animalImagesPosition.imagesInRow;\n        canvas.width = imageWidth;\n        canvas.height = imageHight;\n        var ctx = canvas.getContext('2d');\n        var image = document.createElement('img');\n        image.src = animalImagesUrl;\n        var offsetX = 0;\n        var offsetY = 0;\n        if (this.imageNumber > imagesInRow) {\n            offsetX = imageWidth * (this.imageNumber % imagesInRow - 1);\n            offsetY = imageHight * (Math.floor(this.imageNumber / imagesInRow));\n            if (this.imageNumber % imagesInRow === 0) {\n                offsetX = imageWidth * (imagesInRow - 1);\n                offsetY = imageHight * (Math.floor(this.imageNumber / imagesInRow) - 1);\n            }\n        }\n        else if (this.imageNumber != 1) {\n            offsetX = imageWidth * (this.imageNumber - 1);\n        }\n        image.addEventListener('load', function () {\n            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, offsetX, offsetY, imageWidth, imageHight, 0, 0, imageWidth, imageHight);\n        });\n        this.container.append(canvas);\n        var cardToInvisible = document.getElementById(this.cardId);\n        cardToInvisible === null || cardToInvisible === void 0 ? void 0 : cardToInvisible.replaceWith(this.container);\n        this.openedCard = true;\n        this.render();\n    };\n    Card.prototype.makeCardImageInvisible = function () {\n        var cardToInvisible = document.getElementById(this.cardId);\n        this.container = document.createElement('div');\n        this.container.className = 'card';\n        this.container.id = this.cardId;\n        var canvas = document.createElement('canvas');\n        var imageWidth = animalImagesPosition.imageWidth;\n        var imageHight = animalImagesPosition.imageHight;\n        var imagesInRow = animalImagesPosition.imagesInRow;\n        canvas.width = imageWidth;\n        canvas.height = imageHight;\n        var ctx = canvas.getContext('2d');\n        var image = document.createElement('img');\n        image.src = animalImagesUrl;\n        image.addEventListener('load', function () {\n            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, -250, -250, imageWidth, imageHight, 0, 0, imageWidth, imageHight);\n        });\n        this.container.append(canvas);\n        cardToInvisible === null || cardToInvisible === void 0 ? void 0 : cardToInvisible.replaceWith(this.container);\n        this.openedCard = false;\n        this.render();\n    };\n    Card.prototype.cardClickHandler = function () {\n        var _this = this;\n        var isWinCard = this.game.winCards[this.cardPosition.i][this.cardPosition.j];\n        if (this.openedCard === true && !isWinCard) {\n            this.game.openedCards[this.cardPosition.i][this.cardPosition.j] = false;\n            this.makeCardImageInvisible();\n            return;\n        }\n        if (this.openedCard === false) {\n            var totalCardsOpened = 0;\n            var cardOpenPosition = { x: NaN, y: NaN };\n            //In cycle calculating number of opened cards without wins cards\n            for (var i = 0; i < this.game.openedCards.length; i++) {\n                for (var j = 0; j < this.game.openedCards[0].length; j++) {\n                    if (this.game.openedCards[i][j] === true && this.game.winCards[i][j] === false) {\n                        totalCardsOpened += 1;\n                        cardOpenPosition.x = i;\n                        cardOpenPosition.y = j;\n                    }\n                }\n            }\n            if (totalCardsOpened === 0) {\n                this.game.openedCards[this.cardPosition.i][this.cardPosition.j] = true;\n                this.makeKardImageVisible();\n            }\n            if (totalCardsOpened === 1) {\n                this.game.compares += 1;\n                this.game.openedCards[this.cardPosition.i][this.cardPosition.j] = true;\n                this.makeKardImageVisible();\n                var firstCardOpened = this.game.gameField[this.cardPosition.i][this.cardPosition.j];\n                var secondCardOpened = this.game.gameField[cardOpenPosition.x][cardOpenPosition.y];\n                if (firstCardOpened === secondCardOpened) {\n                    this.game.winCards[this.cardPosition.i][this.cardPosition.j] = true;\n                    this.game.winCards[cardOpenPosition.x][cardOpenPosition.y] = true;\n                }\n                else {\n                    this.game.incorrectCompares += 1;\n                    setTimeout(function () {\n                        _this.game.invisibleAllExceptWinCards();\n                        _this.cardsContainer.refresh(_this.game);\n                    }, 500);\n                }\n            }\n            this.cardsContainer.refresh(this.game);\n        }\n    };\n    Card.prototype.render = function () {\n        this.container.onclick = this.cardClickHandler.bind(this);\n        return this.container;\n    };\n    return Card;\n}());\nexports.default = Card;\n\n\n//# sourceURL=webpack://match-match/./src/components/card.ts?");

/***/ }),

/***/ "./src/components/cards-container.ts":
/*!*******************************************!*\
  !*** ./src/components/cards-container.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar game_1 = __importDefault(__webpack_require__(/*! ../core/GameLogic/game */ \"./src/core/GameLogic/game.ts\"));\nvar card_1 = __importDefault(__webpack_require__(/*! ./card */ \"./src/components/card.ts\"));\nvar congradulation_1 = __importDefault(__webpack_require__(/*! ./congradulation */ \"./src/components/congradulation.ts\"));\nvar timer_1 = __importDefault(__webpack_require__(/*! ./timer */ \"./src/components/timer.ts\"));\nvar CardsContainer = /** @class */ (function () {\n    function CardsContainer(difficunity) {\n        // Object consist of properties x and y (numbers of cards in vertical and horizontal axes)\n        this.container = document.createElement('div');\n        this.container.className = 'card-container';\n        this.difficunity = difficunity;\n        this.cards = [[]];\n        this.timer = new timer_1.default(this);\n        this.container.append(this.timer.render());\n        this.game = new game_1.default({ x: 4, y: 4 });\n    }\n    CardsContainer.prototype.addCardsToContainer = function () {\n        var game = new game_1.default({ x: 4, y: 4 });\n        game.fillRandomCardsInTable();\n        game.visibleAllCards();\n        this.game = game;\n        for (var i = 0; i < this.difficunity.x; i++) {\n            this.cards[i] = [];\n            for (var j = 0; j < this.difficunity.y; j++) {\n                var card = new card_1.default(game.getCard(i, j), 'row' + i + 'collumn' + j, game, { i: i, j: j }, this);\n                this.cards[i][j] = card;\n                this.container.append(card.render());\n            }\n        }\n    };\n    CardsContainer.prototype.refresh = function (game) {\n        var cardsToRefresh;\n        cardsToRefresh = [];\n        for (var i = 0; i < this.difficunity.x; i++) {\n            for (var j = 0; j < this.difficunity.y; j++) {\n                if (game.openedCards[i][j] == false) {\n                    var card = new card_1.default(game.getCard(i, j), 'row' + i + 'collumn' + j, game, { i: i, j: j }, this);\n                    cardsToRefresh.push(card);\n                }\n            }\n        }\n        cardsToRefresh.forEach(function (item) {\n            var pidor = document.getElementById(item.cardId);\n            pidor === null || pidor === void 0 ? void 0 : pidor.replaceWith(item.render());\n        });\n        var winGameCheck = true;\n        for (var i = 0; i < game.openedCards.length; i++) {\n            for (var j = 0; j < game.openedCards[0].length; j++) {\n                if (game.winCards[i][j] === false) {\n                    winGameCheck = false;\n                    break;\n                }\n            }\n        }\n        if (winGameCheck) {\n            this.timer.pause();\n            var modalCongradulation = new congradulation_1.default(game.calculateScore(this.timer.seconds));\n            document.body.append(modalCongradulation.render());\n        }\n    };\n    CardsContainer.prototype.render = function () {\n        var _this = this;\n        this.cards.forEach(function (item) {\n            var newRow = document.createElement('div');\n            _this.container.append(newRow);\n            item.forEach(function (itm) {\n                _this.container.append(itm.render());\n            });\n        });\n        return this.container;\n    };\n    return CardsContainer;\n}());\nexports.default = CardsContainer;\n\n\n//# sourceURL=webpack://match-match/./src/components/cards-container.ts?");

/***/ }),

/***/ "./src/components/congradulation.ts":
/*!******************************************!*\
  !*** ./src/components/congradulation.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Congradulation = /** @class */ (function () {\n    function Congradulation(score) {\n        this.container = document.createElement('div');\n        this.container.className = 'congradulation';\n        var buttonOK = document.createElement('button');\n        this.container.innerText = \"Great job! You scored \" + score + \" points\";\n        buttonOK.innerText = 'OK';\n        buttonOK.onclick = function () {\n            var modalClose = document.getElementsByClassName('congradulation');\n            modalClose[0].remove();\n            console.log('OK');\n        };\n        this.container.append(buttonOK);\n    }\n    Congradulation.prototype.render = function () {\n        return this.container;\n    };\n    return Congradulation;\n}());\nexports.default = Congradulation;\n\n\n//# sourceURL=webpack://match-match/./src/components/congradulation.ts?");

/***/ }),

/***/ "./src/components/timer.ts":
/*!*********************************!*\
  !*** ./src/components/timer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Timer = /** @class */ (function () {\n    function Timer(cardsContainer) {\n        var _this = this;\n        this.timerIsRun = false;\n        this.cardsContainer = cardsContainer;\n        this.prepareToGame = true;\n        this.container = document.createElement('div');\n        this.container.className = 'timer';\n        this.container.onclick = function () {\n            if (_this.prepareToGame) {\n                //not stop timer in preparation stage\n            }\n            else {\n                if (_this.timerIsRun) {\n                    _this.pause();\n                }\n                else {\n                    _this.resume();\n                }\n            }\n        };\n        this.seconds = 5;\n        this.interval = setInterval(function () {\n            if (_this.prepareToGame) {\n                _this.seconds -= 1;\n                _this.update();\n                if (_this.seconds === 0) {\n                    _this.prepareToGame = false;\n                    _this.cardsContainer.game.invisibleAllCards();\n                    _this.cardsContainer.refresh(_this.cardsContainer.game);\n                }\n            }\n            else {\n                _this.seconds += 1;\n                _this.update();\n            }\n        }, 1000);\n        this.timerIsRun = true;\n    }\n    Timer.prototype.update = function () {\n        var timerSeconds = this.seconds % 60;\n        var timerMinutes = (this.seconds - timerSeconds) / 60;\n        var timerContainer = document.getElementsByClassName('timer');\n        timerContainer[0].innerHTML = timerMinutes + \":\" + timerSeconds;\n        timerContainer[0].replaceWith(document.getElementsByClassName('timer')[0]);\n    };\n    Timer.prototype.pause = function () {\n        clearInterval(this.interval);\n        this.timerIsRun = false;\n    };\n    Timer.prototype.resume = function () {\n        var _this = this;\n        this.interval = setInterval(function () {\n            _this.seconds += 1;\n            _this.update();\n        }, 1000);\n        this.timerIsRun = true;\n    };\n    Timer.prototype.render = function () {\n        return this.container;\n    };\n    return Timer;\n}());\nexports.default = Timer;\n\n\n//# sourceURL=webpack://match-match/./src/components/timer.ts?");

/***/ }),

/***/ "./src/core/GameLogic/game.ts":
/*!************************************!*\
  !*** ./src/core/GameLogic/game.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Game = /** @class */ (function () {\n    function Game(difficunity) {\n        this.gameField = [[]];\n        this.openedCards = [[]];\n        this.winCards = [[]];\n        for (var i = 0; i < difficunity.x; i++) {\n            this.gameField[i] = [];\n            this.openedCards[i] = [];\n            this.winCards[i] = [];\n            for (var j = 0; j < difficunity.y; j++) {\n                this.gameField[i][j] = 0;\n                this.openedCards[i][j] = false;\n                this.winCards[i][j] = false;\n            }\n        }\n        this.score = 0;\n        this.compares = 0;\n        this.incorrectCompares = 0;\n    }\n    Game.prototype.fillRandomCardsInTable = function () {\n        var _this = this;\n        var cardsBeforeRandomize;\n        cardsBeforeRandomize = [];\n        for (var i = 1; i <= Math.pow(this.gameField.length, 2) / 2; i++) {\n            cardsBeforeRandomize.push(i);\n            cardsBeforeRandomize.push(i);\n        }\n        var randomCard;\n        this.gameField.forEach(function (item, index) {\n            item.forEach(function (itm, ind) {\n                randomCard = Math.floor(Math.random() * cardsBeforeRandomize.length);\n                _this.gameField[index][ind] = cardsBeforeRandomize[randomCard];\n                cardsBeforeRandomize.splice(randomCard, 1);\n            });\n        });\n    };\n    Game.prototype.getCard = function (x, y) {\n        return this.gameField[x][y];\n    };\n    Game.prototype.visibleAllCards = function () {\n        for (var i = 0; i < this.openedCards.length; i++) {\n            for (var j = 0; j < this.openedCards[0].length; j++) {\n                this.openedCards[i][j] = true;\n            }\n        }\n    };\n    Game.prototype.invisibleAllCards = function () {\n        for (var i = 0; i < this.openedCards.length; i++) {\n            for (var j = 0; j < this.openedCards[0].length; j++) {\n                this.openedCards[i][j] = false;\n            }\n        }\n    };\n    Game.prototype.invisibleAllExceptWinCards = function () {\n        for (var i = 0; i < this.openedCards.length; i++) {\n            for (var j = 0; j < this.openedCards[0].length; j++) {\n                if (this.winCards[i][j] === false) {\n                    this.openedCards[i][j] = false;\n                }\n            }\n        }\n    };\n    Game.prototype.calculateScore = function (playedSeconds) {\n        var score = (this.compares - this.incorrectCompares) * 100 - playedSeconds * 10;\n        return score > 0 ? score : 0;\n    };\n    return Game;\n}());\nexports.default = Game;\n\n\n//# sourceURL=webpack://match-match/./src/core/GameLogic/game.ts?");

/***/ }),

/***/ "./src/core/templates/page.ts":
/*!************************************!*\
  !*** ./src/core/templates/page.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Page = /** @class */ (function () {\n    function Page(id) {\n        this.container = document.createElement('div');\n        this.container.id = id;\n    }\n    Page.prototype.createHeader = function (text) {\n        var header = document.createElement('header');\n        var headerTitle = document.createElement('h3');\n        headerTitle.innerText = text;\n        header.append(headerTitle);\n        var linkGame = document.createElement('a');\n        linkGame.innerText = 'game';\n        linkGame.href = '#game';\n        header.append(linkGame);\n        var linkSettings = document.createElement('a');\n        linkSettings.innerText = 'settings';\n        linkSettings.href = '#settings';\n        header.append(linkSettings);\n        var linkBestScores = document.createElement('a');\n        linkBestScores.innerText = 'Best scores';\n        linkBestScores.href = '#best-scores';\n        header.append(linkBestScores);\n        var linkAbout = document.createElement('a');\n        linkAbout.innerText = 'About';\n        linkAbout.href = '#about';\n        header.append(linkAbout);\n        return header;\n    };\n    Page.prototype.createMain = function (text) {\n        var mainText = document.createElement('main');\n        mainText.innerText = text;\n        return mainText;\n    };\n    Page.prototype.createFooter = function (text) {\n        var footerText = document.createElement('footer');\n        footerText.innerText = text;\n        return footerText;\n    };\n    Page.prototype.render = function () {\n        return this.container;\n    };\n    return Page;\n}());\nexports.default = Page;\n\n\n//# sourceURL=webpack://match-match/./src/core/templates/page.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar app_1 = __importDefault(__webpack_require__(/*! ./pages/app */ \"./src/pages/app/index.ts\"));\n__webpack_require__(/*! ./assets/styles/style.css */ \"./src/assets/styles/style.css\");\nvar app = new app_1.default();\napp.run();\n\n\n//# sourceURL=webpack://match-match/./src/index.ts?");

/***/ }),

/***/ "./src/pages/about/index.ts":
/*!**********************************!*\
  !*** ./src/pages/about/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar page_1 = __importDefault(__webpack_require__(/*! ./../../core/templates/page */ \"./src/core/templates/page.ts\"));\nvar AboutGame = /** @class */ (function (_super) {\n    __extends(AboutGame, _super);\n    function AboutGame(id) {\n        return _super.call(this, id) || this;\n    }\n    AboutGame.prototype.render = function () {\n        var header = this.createHeader('About Game');\n        var main = this.createMain('Match-match game');\n        var footer = this.createFooter('powered by my');\n        this.container.append(header, main, footer);\n        return this.container;\n    };\n    return AboutGame;\n}(page_1.default));\nexports.default = AboutGame;\n\n\n//# sourceURL=webpack://match-match/./src/pages/about/index.ts?");

/***/ }),

/***/ "./src/pages/app/index.ts":
/*!********************************!*\
  !*** ./src/pages/app/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar best_score_1 = __importDefault(__webpack_require__(/*! ../best-score */ \"./src/pages/best-score/index.ts\"));\nvar game_1 = __importDefault(__webpack_require__(/*! ../game */ \"./src/pages/game/index.ts\"));\nvar settings_1 = __importDefault(__webpack_require__(/*! ../settings */ \"./src/pages/settings/index.ts\"));\nvar about_1 = __importDefault(__webpack_require__(/*! ./../about */ \"./src/pages/about/index.ts\"));\nvar App = /** @class */ (function () {\n    function App() {\n        this.aboutPage = new about_1.default('about');\n    }\n    App.renderNewPage = function (id) {\n        App.container.innerHTML = '';\n        var page = null;\n        switch (id) {\n            case 'about':\n                page = new about_1.default(id);\n                break;\n            case 'game':\n                page = new game_1.default(id);\n                break;\n            case 'best-scores':\n                page = new best_score_1.default(id);\n                break;\n            case 'settings':\n                page = new settings_1.default(id);\n                break;\n            default:\n                page = new game_1.default(id);\n                break;\n        }\n        if (page) {\n            var PageHTML = page.render();\n            document.body.append(PageHTML);\n        }\n    };\n    App.prototype.routeChangeHandler = function () {\n        window.addEventListener('hashchange', function () {\n            var route = window.location.hash.slice(1);\n            App.renderNewPage(route);\n        });\n    };\n    App.prototype.run = function () {\n        App.renderNewPage('about');\n        this.routeChangeHandler();\n    };\n    App.container = document.body;\n    return App;\n}());\nexports.default = App;\n\n\n//# sourceURL=webpack://match-match/./src/pages/app/index.ts?");

/***/ }),

/***/ "./src/pages/best-score/index.ts":
/*!***************************************!*\
  !*** ./src/pages/best-score/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar page_1 = __importDefault(__webpack_require__(/*! ./../../core/templates/page */ \"./src/core/templates/page.ts\"));\nvar BestScores = /** @class */ (function (_super) {\n    __extends(BestScores, _super);\n    function BestScores(id) {\n        return _super.call(this, id) || this;\n    }\n    BestScores.prototype.render = function () {\n        var header = this.createHeader('Best scores');\n        var main = this.createMain('leaders in match');\n        var footer = this.createFooter('powered by my');\n        this.container.append(header, main, footer);\n        return this.container;\n    };\n    return BestScores;\n}(page_1.default));\nexports.default = BestScores;\n\n\n//# sourceURL=webpack://match-match/./src/pages/best-score/index.ts?");

/***/ }),

/***/ "./src/pages/game/index.ts":
/*!*********************************!*\
  !*** ./src/pages/game/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar cards_container_1 = __importDefault(__webpack_require__(/*! ../../components/cards-container */ \"./src/components/cards-container.ts\"));\nvar page_1 = __importDefault(__webpack_require__(/*! ./../../core/templates/page */ \"./src/core/templates/page.ts\"));\nvar Game = /** @class */ (function (_super) {\n    __extends(Game, _super);\n    function Game(id) {\n        return _super.call(this, id) || this;\n    }\n    Game.prototype.render = function () {\n        var header = this.createHeader('Game');\n        var main = this.createMain('good luck!');\n        var cardsContainer = new cards_container_1.default({ x: 4, y: 4 });\n        cardsContainer.addCardsToContainer();\n        main.append(cardsContainer.render());\n        var footer = this.createFooter('powered by my');\n        this.container.append(header, main, footer);\n        return this.container;\n    };\n    return Game;\n}(page_1.default));\nexports.default = Game;\n\n\n//# sourceURL=webpack://match-match/./src/pages/game/index.ts?");

/***/ }),

/***/ "./src/pages/settings/index.ts":
/*!*************************************!*\
  !*** ./src/pages/settings/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar page_1 = __importDefault(__webpack_require__(/*! ./../../core/templates/page */ \"./src/core/templates/page.ts\"));\nvar Settings = /** @class */ (function (_super) {\n    __extends(Settings, _super);\n    function Settings(id) {\n        return _super.call(this, id) || this;\n    }\n    Settings.prototype.render = function () {\n        var header = this.createHeader('Settings');\n        var main = this.createMain('settings of game');\n        var footer = this.createFooter('powered by my');\n        this.container.append(header, main, footer);\n        return this.container;\n    };\n    return Settings;\n}(page_1.default));\nexports.default = Settings;\n\n\n//# sourceURL=webpack://match-match/./src/pages/settings/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;