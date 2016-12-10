webpackJsonphome([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.newsSources = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _apiWrapper = __webpack_require__(5);

	var _dropdown = __webpack_require__(6);

	var _getArticles = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var newsSources = exports.newsSources = function () {
		function newsSources() {
			_classCallCheck(this, newsSources);
		}

		_createClass(newsSources, [{
			key: 'setSources',
			value: function setSources(lang) {
				_apiWrapper.apiWrapper.getData('https://newsapi.org/v1/sources?language=' + lang).then(function (data) {
					var array = [];

					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = data.sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var id = _step.value.id;

							array.push(id);
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

					return new Set(array);
				}).then(function (arr) {
					var refArr = '';

					arr.forEach(function (c) {
						refArr = refArr + ' ' + (0, _dropdown.dropdown)(c);
					});
					document.getElementById("source-filter").innerHTML = refArr;
				}).then(function () {
					var elements = document.getElementsByClassName('source-href');

					var _loop = function _loop(i) {
						elements[i].addEventListener('click', function () {
							(0, _getArticles.getArticles)(elements[i].getAttribute('id'));
						});
					};

					for (var i = 0; i < elements.length; i++) {
						_loop(i);
					}
				});
			}
		}]);

		return newsSources;
	}();

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var dropdown = exports.dropdown = function dropdown(sourceId) {
	  return "<a href=\"#\" id=" + sourceId + " class=\"source-href\">" + sourceId + "</a>";
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getArticles = getArticles;

	var _apiWrapper = __webpack_require__(5);

	var _variables = __webpack_require__(8);

	var _paperName = __webpack_require__(9);

	var _newsContainer = __webpack_require__(10);

	exports.getArticles = getArticles;

	function getArticles(source) {
		home.clearContent("news-content");
		var requestArticlstr = 'https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + _variables.API;
		__webpack_require__(11);

		_apiWrapper.apiWrapper.getData(requestArticlstr).then(function (data) {
			var newsContentArr = (0, _paperName.paperName)(data.source);

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = data.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _step$value = _step.value,
					    description = _step$value.description,
					    title = _step$value.title,
					    url = _step$value.url,
					    urlToImage = _step$value.urlToImage;

					newsContentArr = newsContentArr + ' ' + (0, _newsContainer.newsContainer)(urlToImage, url, title, description);
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
		});
		home.hideDropdownList();
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var API = exports.API = "5fb7dea8d7f440b1af9b7cd7cba9640d";

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var paperName = exports.paperName = function paperName(name) {
	  return "<h3 id=\"paperName\">" + name.toUpperCase() + "</h3>";
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var newsContainer = exports.newsContainer = function newsContainer(urlToImage, url, title, description) {
		return "<div class=\"news\"> \n \t<img class=\"news-img\"src=\"" + urlToImage + "\"/>\n\t<div class=\"logo news-content\">\n\t\t<a href=\"" + url + "\" target=\"_blank\">" + title + "</a>\n\t</div>\n\t<p class=\"news-text\">" + description + "</p> \n\t</div>\n\t<div class=\"clear\">\n </div>";
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./news.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./news.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".news {\n  border: solid #00b1c1 1px;\n  border-radius: 2%;\n  overflow: auto;\n  background-color: white;\n}\n.news-text {\n  padding: 0 4px 0 4px;\n  font-size: 115%;\n}\n.news-img {\n  height: 20%;\n  width: 20%;\n  margin: 2%;\n  float: left;\n}\n.clear {\n  clear: both;\n}\n#news-content {\n  width: 69%;\n  float: left;\n  margin: 0 0 20px 20px;\n}\n#news-content h3 {\n  font-size: 270%;\n  margin-top: 0px;\n  margin-left: 7%;\n}\n.logo.news-content {\n  padding: 0 3px 0 3px;\n}\n.logo.news-content a {\n  font-size: 170%;\n}\n", ""]);

	// exports


/***/ }
]);