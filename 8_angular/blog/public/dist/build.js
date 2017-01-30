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

	var _articlesModule = __webpack_require__(1);

	var _articlesModule2 = _interopRequireDefault(_articlesModule);

	var _routes = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var adminApp = angular.module('adminApp', ['ngRoute', _articlesModule2.default.name]).config(["$routeProvider", "$locationProvider", _routes.routes]);;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _articleListCtrl = __webpack_require__(2);

	var _articleAddCtrl = __webpack_require__(3);

	var _articleService = __webpack_require__(4);

	var _articleListComponent = __webpack_require__(5);

	var _articleAddDirective = __webpack_require__(8);

	var articleApp = angular.module('articleApp', ['ngResource']).controller('ArticleListCtrl', ['ArticleService', _articleListCtrl.ArticleListCtrl]).controller('ArticleAddCtrl', ['ArticleService', '$location', _articleAddCtrl.ArticleAddCtrl]).factory('ArticleService', ['$resource', _articleService.ArticleService]).component('articleListComponent', _articleListComponent.articleListComponent).directive('articleAddDirective', _articleAddDirective.articleAddDirective);

	exports.default = articleApp;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleListCtrl = exports.ArticleListCtrl = function () {
	    function ArticleListCtrl(articleService) {
	        _classCallCheck(this, ArticleListCtrl);

	        this.articleService = articleService;
	        this.load();
	    }

	    _createClass(ArticleListCtrl, [{
	        key: "load",
	        value: function load() {
	            var _this = this;

	            this.articleService.query().$promise.then(function (articles) {
	                _this.articles = articles;
	            });
	        }
	    }]);

	    return ArticleListCtrl;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleAddCtrl = exports.ArticleAddCtrl = function () {
	    function ArticleAddCtrl(articleService, $location) {
	        _classCallCheck(this, ArticleAddCtrl);

	        this.articleService = articleService;
	        this.article = new articleService();
	        this.$location = $location;
	    }

	    _createClass(ArticleAddCtrl, [{
	        key: "save",
	        value: function save() {
	            var _this = this;

	            var fd = new FormData();
	            for (var key in this.article) {
	                fd.append(key, this.article[key]);
	            }
	            this.articleService.create({}, fd).$promise.then(function () {
	                debugger;
	                _this.$location.path("/");
	            });
	        }
	    }]);

	    return ArticleAddCtrl;
	}();

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ArticleService = exports.ArticleService = function ArticleService($resource) {
	    var url = '/articles';
	    // let params = {styleId: '@styleId', dealerZipe: '@dealerZip'        };
	    return $resource(url, {}, {
	        create: {
	            method: "POST",
	            transformRequest: angular.identity,
	            headers: { 'Content-Type': undefined }
	        }
	    });
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.articleListComponent = undefined;

	var _articleListCtrl = __webpack_require__(6);

	var articleListComponent = exports.articleListComponent = {
	    bindings: {
	        articles: '<'
	    },
	    template: __webpack_require__(7),
	    controller: _articleListCtrl.ArticleListCtrl
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleListCtrl = exports.ArticleListCtrl = function ArticleListCtrl() {
	  _classCallCheck(this, ArticleListCtrl);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<p>Number of articles: <span ng-bind=\"$ctrl.articles.length\"></span></p>\r\n<ul ng-repeat=\"article in $ctrl.articles\">\r\n    <li ng-bind=\"article.title\"></li>\r\n</ul>"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.articleAddDirective = undefined;

	var _articleAddCtrl = __webpack_require__(9);

	var articleAddDirective = exports.articleAddDirective = function articleAddDirective() {
	    return {
	        scope: {
	            article: '=',
	            save: '&'
	        },
	        restrict: 'E',
	        template: __webpack_require__(10),
	        controller: _articleAddCtrl.ArticleAddCtrl,
	        controllerAs: 'articleAddCtrl',
	        bindToController: true
	    };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleAddCtrl = exports.ArticleAddCtrl = function () {
	    function ArticleAddCtrl() {
	        _classCallCheck(this, ArticleAddCtrl);
	    }

	    _createClass(ArticleAddCtrl, [{
	        key: "add",
	        value: function add() {
	            debugger;
	            var file = this.addEditArticleForm.picture.$$element[0].files[0];
	            this.article.picture = file;
	            this.save();
	        }
	    }]);

	    return ArticleAddCtrl;
	}();

	;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<form ng-submit=\"$articleAddCtrl.addEditArticleForm.$valid && articleAddCtrl.add()\" name=\"articleAddCtrl.addEditArticleForm\" novalidate=\"novalidate\">\r\n    <div>Title:</div>\r\n    <div>\r\n        <input type=\"text\" ng-model=\"articleAddCtrl.article.title\" ng-required=\"true\" name=\"title\" />\r\n        <span style=\"color: red\" ng-show=\"articleAddCtrl.addEditArticleForm.title.$invalid && (articleAddCtrl.addEditArticleForm.title.$dirty || articleAddCtrl.addEditArticleForm.$submitted)\">Title is required!</span>\r\n    </div>\r\n    <div>Author:</div>\r\n    <div>\r\n        <input type=\"text\" ng-model=\"articleAddCtrl.article.author\" />\r\n    </div>\r\n    <div>Text:</div>\r\n    <div>\r\n        <textarea type=\"text\" ng-model=\"articleAddCtrl.article.text\" ng-required=\"true\" name=\"text\"></textarea>\r\n        <span style=\"color: red\" ng-show=\"articleAddCtrl.addEditArticleForm.text.$invalid && (articleAddCtrl.addEditArticleForm.text.$dirty || articleAddCtrl.addEditArticleForm.$submitted)\">Text is required!</span>\r\n    </div>\r\n    <div>Picture:</div>\r\n    <div>\r\n        <input type=\"file\" ng-model=\"articleAddCtrl.article.picture\" ng-required=\"true\" name=\"picture\" />\r\n        <span style=\"color: red\" ng-show=\"articleAddCtrl.addEditArticleForm.picture.$invalid && (articleAddCtrl.addEditArticleForm.picture.$dirty || articleAddCtrl.addEditArticleForm.$submitted)\">Picture is required!</span>\r\n    </div>\r\n    <button type=\"submit\">Add</button>\r\n</form>"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var routes = exports.routes = function routes($routeProvider, $locationProvider) {
	    $routeProvider.when("/", {
	        template: __webpack_require__(12),
	        controller: 'ArticleListCtrl',
	        controllerAs: 'articleListCtrl',
	        caseInsensitiveMatch: true,
	        data: {}
	    });

	    $routeProvider.when("/add", {
	        template: __webpack_require__(13),
	        controller: 'ArticleAddCtrl',
	        controllerAs: 'articleAddCtrl',
	        caseInsensitiveMatch: true,
	        data: {}
	    });

	    $locationProvider.html5Mode(true);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<article-list-component articles=\"articleListCtrl.articles\"></article-list-component>"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<article-add-directive article=\"articleAddCtrl.article\" save=\"articleAddCtrl.save()\"></article-add-directive>"

/***/ }
/******/ ]);