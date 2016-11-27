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

	function getArticles(source) {
		contentWorker.clearNewsContent();
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
		contentWorker.hideDropdownList();
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
				refArr = refArr + ' <a href="#" onclick="getArticles(\'' + c + '\')"id=' + c + '>' + c + '</a>';
			});

			document.getElementById("source-filter").innerHTML = refArr;
		}).catch(function (error) {
			return console.log('error: ' + error);
		});
	};

	setSources();

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

/***/ }
/******/ ]);