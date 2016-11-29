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
	exports.getArticles = getArticles;

	var _apiData = __webpack_require__(5);

	var _variables = __webpack_require__(6);

	exports.getArticles = getArticles;

	function getArticles(source) {
		home.clearNewsContent();
		var requestArticlstr = 'https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + _variables.API;

		__webpack_require__(7);

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
		home.hideDropdownList();
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
				refArr = refArr + ' <a href="#" id=' + c + ' class="source-href">' + c + '</a>';
			});
			debugger;

			document.getElementById("source-filter").innerHTML = refArr;
		}).then(function () {
			document.getElementsByClassName('source-href').forEach(function (s) {
				s.addEventListener('click', function () {
					getArticles(s.getAttribute('id'));
				});
			});
		}).catch(function (error) {
			return console.log('error: ' + error);
		});
	};

	setSources();

	// document.getElementsByClassName('source-href').forEach(s => {
	// 	s.addEventListener('click', () => {
	// 		getArticles(s.getAttribute('id'));
	// 	});
	// });

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
	var API = exports.API = "5fb7dea8d7f440b1af9b7cd7cba9640d";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".news {\n  border: solid #00b1c1 1px;\n  border-radius: 2%;\n  overflow: auto;\n  background-color: white;\n}\n.news-text {\n  padding: 0 4px 0 4px;\n  font-size: 115%;\n}\n.news-img {\n  height: 20%;\n  width: 20%;\n  margin: 2%;\n  float: left;\n}\n.clear {\n  clear: both;\n}\n#news-content {\n  width: 69%;\n  float: left;\n  margin: 0 0 20px 20px;\n}\n#news-content h3 {\n  font-size: 270%;\n  margin-top: 0px;\n  margin-left: 7%;\n}\n.logo.news-content {\n  padding: 0 3px 0 3px;\n}\n.logo.news-content a {\n  font-size: 170%;\n}\n", ""]);

	// exports


/***/ }
]);