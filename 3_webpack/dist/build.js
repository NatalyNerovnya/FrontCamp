var home =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _apiData = __webpack_require__(1);

	var _variables = __webpack_require__(2);

	var _newsContent = __webpack_require__(3);

	var _events = __webpack_require__(4);

	exports.clickDropdown = _events.clickDropdown;
	exports.getArticles = getArticles;
	__webpack_require__(5);

	function getArticles(source) {
		(0, _newsContent.clearNewsContent)();
		var requestArticlstr = 'https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + _variables.API;

		_apiData.apiWrapper.getData(requestArticlstr).then(function (data) {
			var newsContentArr = '<h3 id="paperName">' + data.source.toUpperCase() + '</h3>';

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = data.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _step.value,
					    author = _step$value.author,
					    description = _step$value.description,
					    publishedAt = _step$value.publishedAt,
					    title = _step$value.title,
					    url = _step$value.url,
					    urlToImage = _step$value.urlToImage;

					newsContentArr = newsContentArr + '  <div class="news"> <img class="news-img"src="' + urlToImage + '"/>\n\t\t\t<div class="logo news-content"><a href="' + url + '" target="_blank">' + title + '</a></div>\t\t\t<p class="news-text">' + description + '</p>  </div> <div class="clear"></div>';
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			document.getElementById("news-content").innerHTML = newsContentArr;
		}).catch(function (error) {
			return console.log('error: ' + error);
		});
		(0, _newsContent.hideDropdownList)();
	};

	function setSources() {
		_apiData.apiWrapper.getData(" https://newsapi.org/v1/sources?language=en").then(function (data) {
			var array = [];

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = data.sources[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var id = _step2.value.id;

					array.push(id);
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return new Set(array);
		}).then(function (arr) {
			var refArr = '';

			arr.forEach(function (c) {
				refArr = refArr + ' <a href="#" onclick="home.getArticles(\'' + c + '\')"id=' + c + '>' + c + '</a>';
			});

			document.getElementById("source-filter").innerHTML = refArr;
		}).catch(function (error) {
			return console.log('error: ' + error);
		});
	};

	setSources();

	if (true) {
		alert("debug mode");
	}
	if (PRODUCTION) {
		console.log("Production");
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var apiWrapper = exports.apiWrapper = function () {
		function apiWrapper() {
			_classCallCheck(this, apiWrapper);
		}

		_createClass(apiWrapper, null, [{
			key: 'getData',
			value: function getData(connectionString) {
				return fetch(connectionString, { method: 'GET' }).then(function (response) {
					return response.json();
				});
			}
		}]);

		return apiWrapper;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var API = exports.API = "5fb7dea8d7f440b1af9b7cd7cba9640d";

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearNewsContent = clearNewsContent;
	exports.hideDropdownList = hideDropdownList;
	function clearNewsContent() {
	  var elem = document.getElementById("news-content");
	  elem.innerHTML = '';
	};

	function hideDropdownList() {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
	    var openDropdown = dropdowns[i];

	    if (openDropdown.classList.contains('show')) {
	      openDropdown.classList.remove('show');
	    }
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var clickDropdown = exports.clickDropdown = function clickDropdown(id) {
	  return document.getElementById(id).classList.toggle("show");
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./app.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./app.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "body {\n  background-color: #f9fdff;\n}\nh1 {\n  color: #00b1c1;\n}\nh5 {\n  font-size: 25px;\n}\n.content .logo.site {\n  background-color: #ddfcff;\n  margin: 20px;\n}\n.logo.site h1 {\n  padding: 5% 5% 0 5%;\n  font-size: 600%;\n}\n.logo.site h5 {\n  padding-left: 60%;\n}\n.logo.news-content {\n  padding: 0 3px 0 3px;\n}\n.logo.news-content a {\n  font-size: 170%;\n}\na {\n  text-decoration: none;\n  color: #00b1c1;\n}\na:visited {\n  color: #00b1c1;\n}\n.nav {\n  border: solid #00b1c1 3px;\n  border-radius: 5%;\n  margin: 20px;\n  background-color: white;\n  float: right;\n}\n.dropdown-content {\n  display: none;\n  position: absolute;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px #000000;\n  background-color: white;\n}\n.dropdown-content a {\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n.dropbtn {\n  border: solid #00b1c1 3px;\n  border-radius: 5%;\n  background-color: #ddfcff;\n  height: 30px;\n  width: 70%;\n}\n.show {\n  display: block;\n}\n.news {\n  border: solid #00b1c1 1px;\n  border-radius: 2%;\n  overflow: auto;\n  background-color: white;\n}\n#news-content {\n  width: 69%;\n  float: left;\n  margin: 0 0 20px 20px;\n}\n.news-text {\n  padding: 0 4px 0 4px;\n  font-size: 115%;\n}\n.news-img {\n  height: 20%;\n  width: 20%;\n  margin: 2%;\n  float: left;\n}\n.clear {\n  clear: both;\n}\n#news-content h3 {\n  font-size: 270%;\n  margin-top: 0px;\n  margin-left: 7%;\n}\n@media only screen and (min-width: 300px) and (max-width: 415px) {\n  h1 {\n    font-size: 300%;\n  }\n  .nav {\n    width: 80%;\n    display: inline;\n    border: none;\n    clear: both;\n  }\n  .dropdown {\n    display: inline;\n    margin: 5%;\n  }\n  .dropbtn {\n    height: 30px;\n    width: 30%;\n  }\n  #news-content {\n    width: 90%;\n  }\n}\n@media only screen and (min-width: 416px) and (max-width: 800px) {\n  .nav {\n    height: 70px;\n    width: 15%;\n  }\n  .dropdown {\n    padding: 20% 0 0 10%;\n  }\n}\n@media only screen and (min-width: 801px) and (max-width: 1100px) {\n  .nav {\n    height: 100px;\n    width: 20%;\n  }\n  .dropdown {\n    padding: 20% 0 0 10%;\n  }\n}\n@media only screen and (min-width: 1101px) and (max-width: 3000px) {\n  .nav {\n    height: 160px;\n    width: 25%;\n  }\n  .dropdown {\n    padding: 20% 0 0 10%;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);