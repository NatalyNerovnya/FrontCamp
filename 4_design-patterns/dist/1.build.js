webpackJsonphome([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Application = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _SourceRepository = __webpack_require__(4);

	var _ArticlesRepository = __webpack_require__(6);

	var _ArticlesRender = __webpack_require__(12);

	var _SourceRender = __webpack_require__(16);

	var _Observable2 = __webpack_require__(18);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Application = exports.Application = function (_Observable) {
		_inherits(Application, _Observable);

		function Application() {
			_classCallCheck(this, Application);

			var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this));

			_this.sourceRepository = new _SourceRepository.SourceRepository();
			_this.sourceRender = new _SourceRender.SourceRender();
			_this.articlesRepository = new _ArticlesRepository.ArticlesRepository();
			_this.articlesRender = new _ArticlesRender.ArticlesRender();
			_this.stateForLogging = 'create instance';
			return _this;
		}

		_createClass(Application, [{
			key: 'start',
			value: function start(lang) {
				var _this2 = this;

				this.stateForLogging = 'start application';
				this.notify();
				this.sourceRepository.getSetOfCategories(lang).then(function (arr) {
					return _this2.sourceRender.setDropdowns(arr);
				}).then(function () {
					return _this2.addClickEventsToCategories();
				});
			}
		}, {
			key: 'getArticles',
			value: function getArticles(source) {
				var _this3 = this;

				this.stateForLogging = 'show news';
				this.notify();
				home.clearContent("source-filter");
				home.clearContent("news-content");
				this.articlesRepository.setArticles(source).then(function (data) {
					return _this3.articlesRender.createDomElements(data);
				}).then(function (content) {
					return home.setContent('news-content', content);
				});
			}
		}, {
			key: 'addClickEventsToCategories',
			value: function addClickEventsToCategories() {
				var elements = document.getElementsByClassName('source-href');

				var _loop = function _loop(i) {
					elements[i].addEventListener('click', function () {
						Application.instance.getArticles(elements[i].getAttribute('id'));
					});
				};

				for (var i = 0; i < elements.length; i++) {
					_loop(i);
				}
			}
		}], [{
			key: 'getInstance',
			value: function getInstance() {
				if (!Application.instance) {
					Application.instance = new Application();
				}
				return Application.instance;
			}
		}]);

		return Application;
	}(_Observable2.Observable);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SourceRepository = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _apiWrapper = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SourceRepository = exports.SourceRepository = function () {
		function SourceRepository() {
			_classCallCheck(this, SourceRepository);

			this.requestStr = 'https://newsapi.org/v1/sources?language=';
		}

		_createClass(SourceRepository, [{
			key: 'getSetOfCategories',
			value: function getSetOfCategories(lang) {
				return _apiWrapper.apiWrapper.getData(this.requestStr + lang).then(function (data) {
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
				});
			}
		}]);

		return SourceRepository;
	}();

	;

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ArticlesRepository = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _apiWrapper = __webpack_require__(5);

	var _variables = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticlesRepository = exports.ArticlesRepository = function () {
		function ArticlesRepository() {
			_classCallCheck(this, ArticlesRepository);

			self = this;
			self.requestArticlstr = 'https://newsapi.org/v1/articles?apiKey=' + _variables.API + '&source=';
		}

		_createClass(ArticlesRepository, [{
			key: 'setArticles',
			value: function setArticles(source) {
				__webpack_require__(8);
				return _apiWrapper.apiWrapper.getData(self.requestArticlstr + source);
			}
		}]);

		return ArticlesRepository;
	}();

	;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var API = exports.API = "5fb7dea8d7f440b1af9b7cd7cba9640d";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".news {\n  border: solid #00b1c1 1px;\n  border-radius: 2%;\n  overflow: auto;\n  background-color: white;\n}\n.news-text {\n  padding: 0 4px 0 4px;\n  font-size: 115%;\n}\n.news-img {\n  height: 20%;\n  width: 20%;\n  margin: 2%;\n  float: left;\n}\n.clear {\n  clear: both;\n}\n#news-content {\n  width: 69%;\n  float: left;\n  margin: 0 0 20px 20px;\n}\n#news-content h3 {\n  font-size: 270%;\n  margin-top: 0px;\n  margin-left: 7%;\n}\n.logo.news-content {\n  padding: 0 3px 0 3px;\n}\n.logo.news-content a {\n  font-size: 170%;\n}\n", ""]);

	// exports


/***/ },
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ArticlesRender = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _paperName = __webpack_require__(13);

	var _ArticleTemplateRender = __webpack_require__(14);

	var _ArticleDecorator = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticlesRender = exports.ArticlesRender = function () {
		function ArticlesRender() {
			_classCallCheck(this, ArticlesRender);
		}

		_createClass(ArticlesRender, [{
			key: 'createDomElements',
			value: function createDomElements(data) {

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

						var article = new _ArticleTemplateRender.ArticleTemplateRender(urlToImage, url, title, description);
						var decorator = new _ArticleDecorator.ArticleDecorator(article);
						newsContentArr = newsContentArr + ' ' + decorator.render();
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

				return newsContentArr;
			}
		}]);

		return ArticlesRender;
	}();

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var paperName = exports.paperName = function paperName(name) {
	  return "<h3 id=\"paperName\">" + name.toUpperCase() + "</h3>";
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleTemplateRender = exports.ArticleTemplateRender = function () {
		function ArticleTemplateRender(urlToImage, url, title, description) {
			_classCallCheck(this, ArticleTemplateRender);

			this.image = urlToImage;
			this.url = url;
			this.title = title;
			this.description = description;
		}

		_createClass(ArticleTemplateRender, [{
			key: "render",
			value: function render() {
				return "\n\t \t<img class=\"news-img\"src=\"" + this.image + "\"/>\n\t\t<div class=\"logo news-content\">\n\t\t\t<a href=\"" + this.url + "\" target=\"_blank\">" + this.title + "</a>\n\t\t</div>\n\t\t<p class=\"news-text\">" + this.description + "</p> \n\t\t</div>";
			}
		}]);

		return ArticleTemplateRender;
	}();

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleDecorator = exports.ArticleDecorator = function () {
		function ArticleDecorator(articleTemplate) {
			_classCallCheck(this, ArticleDecorator);

			this.articleTemplate = articleTemplate;
		}

		_createClass(ArticleDecorator, [{
			key: "render",
			value: function render() {
				return "<div class=\"news\"> \n\t \t" + this.articleTemplate.render() + "\n\t\t<div class=\"clear\">\n\t   </div>";
			}
		}]);

		return ArticleDecorator;
	}();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SourceRender = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dropdown = __webpack_require__(17);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SourceRender = exports.SourceRender = function () {
		function SourceRender() {
			_classCallCheck(this, SourceRender);
		}

		_createClass(SourceRender, [{
			key: 'setDropdowns',
			value: function setDropdowns(arr) {
				var refArr = '';
				arr.forEach(function (c) {
					refArr = refArr + ' ' + (0, _dropdown.dropdown)(c);
				});
				home.setContent("source-filter", refArr);
			}
		}]);

		return SourceRender;
	}();

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var dropdown = exports.dropdown = function dropdown(sourceId) {
	  return "<a href=\"#\" id=" + sourceId + " class=\"source-href\">" + sourceId + "</a>";
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observable = exports.Observable = function () {
		function Observable() {
			_classCallCheck(this, Observable);

			this.observers = [];
		}

		_createClass(Observable, [{
			key: "attach",
			value: function attach(observer) {
				this.observers.push(observer);
			}
		}, {
			key: "detach",
			value: function detach(observer) {
				var indexOfElement = this.observers.indexOf(observer);
				if (indexOfElement != -1) {
					this.observers.splice(indexOfElement, 1);
				}
			}
		}, {
			key: "notify",
			value: function notify() {
				this.observers.forEach(function (o) {
					return o.update();
				});
			}
		}]);

		return Observable;
	}();

	;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LogToConsoleObserver = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observer = __webpack_require__(20);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LogToConsoleObserver /*extends Observer*/ = exports.LogToConsoleObserver = function () {
		function LogToConsoleObserver(subject) {
			_classCallCheck(this, LogToConsoleObserver);

			this.subject = subject;
			this.subject.attach(this);
		}

		_createClass(LogToConsoleObserver, [{
			key: 'update',
			value: function update() {
				console.log('Console log: ' + this.subject.stateForLogging + ';');
			}
		}]);

		return LogToConsoleObserver;
	}();

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observer = exports.Observer = function () {
		function Observer() {
			_classCallCheck(this, Observer);
		}

		_createClass(Observer, [{
			key: "update",
			value: function update() {}
		}]);

		return Observer;
	}();

/***/ }
]);