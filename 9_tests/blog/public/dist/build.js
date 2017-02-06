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

	var _routes = __webpack_require__(20);

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

	var _articleCtrl = __webpack_require__(3);

	var _articleAddCtrl = __webpack_require__(4);

	var _articleEditCtrl = __webpack_require__(5);

	var _articleService = __webpack_require__(6);

	var _validate = __webpack_require__(7);

	var _articleListComponent = __webpack_require__(8);

	var _articleComponent = __webpack_require__(11);

	var _paginationComponent = __webpack_require__(14);

	var _articleAddDirective = __webpack_require__(17);

	var articleApp = angular.module('articleApp', ['ngResource']).controller('ArticleListCtrl', ['ArticleService', '$location', _articleListCtrl.ArticleListCtrl]).controller('ArticleCtrl', ['$routeParams', 'ArticleService', '$location', _articleCtrl.ArticleCtrl]).controller('ArticleAddCtrl', ['ArticleService', '$location', _articleAddCtrl.ArticleAddCtrl]).controller('ArticleEditCtrl', ['$routeParams', 'ArticleService', '$location', _articleEditCtrl.ArticleEditCtrl]).factory('ArticleService', ['$resource', _articleService.ArticleService]).component('articleListComponent', _articleListComponent.articleListComponent).component('articleComponent', _articleComponent.articleComponent).component('paginationComponent', _paginationComponent.paginationComponent).directive('articleAddDirective', _articleAddDirective.articleAddDirective).directive('textValidation', _validate.textValidation);

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

	var ArticleCtrl = exports.ArticleCtrl = function () {
	    function ArticleCtrl($routeParams, articleService) {
	        _classCallCheck(this, ArticleCtrl);

	        this.articleService = articleService;
	        this.getArticle($routeParams.articleId);
	    }

	    _createClass(ArticleCtrl, [{
	        key: "getArticle",
	        value: function getArticle(id) {
	            var _this = this;

	            this.articleService.get({ articleId: id }).$promise.then(function (article) {
	                return _this.article = article;
	            });
	        }
	    }]);

	    return ArticleCtrl;
	}();

/***/ },
/* 4 */
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
	                _this.$location.path("/");
	            });
	        }
	    }]);

	    return ArticleAddCtrl;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleEditCtrl = exports.ArticleEditCtrl = function () {
	    function ArticleEditCtrl($routeParams, articleService, $location) {
	        _classCallCheck(this, ArticleEditCtrl);

	        this.articleService = articleService;
	        this.article = new articleService();
	        this.$location = $location;
	        this.getArticle($routeParams.articleId);
	    }

	    _createClass(ArticleEditCtrl, [{
	        key: "getArticle",
	        value: function getArticle(id) {
	            var _this = this;

	            this.articleService.get({ articleId: id }).$promise.then(function (article) {
	                return _this.article = article;
	            });
	        }
	    }, {
	        key: "save",
	        value: function save() {
	            var _this2 = this;

	            var fd = new FormData();
	            for (var key in this.article) {
	                fd.append(key, this.article[key]);
	            }
	            fd.append('id', this.article._id);
	            this.articleService.update({}, fd).$promise.then(function () {
	                _this2.$location.path("/");
	            });
	        }
	    }]);

	    return ArticleEditCtrl;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ArticleService = exports.ArticleService = function ArticleService($resource) {
	    var url = '/articles/:articleId';
	    // let params = {styleId: '@styleId', dealerZipe: '@dealerZip'        };
	    return $resource(url, { articleId: '@id' }, {
	        create: {
	            method: "POST",
	            transformRequest: angular.identity,
	            headers: { 'Content-Type': undefined }
	        },
	        update: {
	            method: "PUT",
	            transformRequest: angular.identity,
	            headers: { 'Content-Type': undefined }
	        }
	    });
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var textValidation = exports.textValidation = function textValidation() {
	    return {
	        require: 'ngModel',
	        link: function link(scope, elm, attrs, ctrl) {
	            ctrl.$validators.textValidation = function (modelValue, viewValue) {
	                if (modelValue === undefined) return false;
	                return modelValue.length >= 20;
	            };
	        }
	    };
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.articleListComponent = undefined;

	var _articleListCtrl = __webpack_require__(9);

	var articleListComponent = exports.articleListComponent = {
	    bindings: {
	        articles: '<'
	    },
	    template: __webpack_require__(10),
	    controller: _articleListCtrl.ArticleListCtrl
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

	var ArticleListCtrl = exports.ArticleListCtrl = function () {
	    function ArticleListCtrl($location) {
	        _classCallCheck(this, ArticleListCtrl);

	        this.$location = $location;
	        this.page = 1;
	    }

	    _createClass(ArticleListCtrl, [{
	        key: "addNew",
	        value: function addNew() {
	            this.$location.path("/add");
	        }
	    }]);

	    return ArticleListCtrl;
	}();

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<p>Number of articles: <span ng-bind=\"$ctrl.articles.length\"></span></p>\r\n<md-raised-button ng-click=\"$ctrl.addNew();\" class=\"btn edit\"> Add new </md-raised-button>\r\n<div class=\"container\">\r\n    <div class=\"articleBox\" ng-repeat=\"article in $ctrl.articles | limitTo: $ctrl.page * 3\">\r\n        <a ng-href=\"/admin/{{article._id}}\">\r\n            <h2 class=\"articleTitle\" ng-bind=\"article.title\"></h2>\r\n        </a>\r\n        <img class=\"blogImg\" ng-src=\"http://localhost:4000/uploads/{{article.imageUrl}}\" />\r\n    </div>\r\n</div>\r\n\r\n<pagination-component page=\"$ctrl.page\" ng-show=\"$ctrl.page *  3 < $ctrl.articles.length\"></pagination-component>"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.articleComponent = undefined;

	var _articleCtrl = __webpack_require__(12);

	var articleComponent = exports.articleComponent = {
	    bindings: {
	        article: '<'
	    },
	    template: __webpack_require__(13),
	    controller: _articleCtrl.ArticleCtrl
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ArticleCtrl = exports.ArticleCtrl = function () {
	    function ArticleCtrl($location) {
	        _classCallCheck(this, ArticleCtrl);

	        this.$location = $location;
	    }

	    _createClass(ArticleCtrl, [{
	        key: "showAll",
	        value: function showAll() {
	            this.$location.path("/");
	        }
	    }, {
	        key: "edit",
	        value: function edit() {
	            this.$location.path("/" + this.article._id + "/edit");
	        }
	    }]);

	    return ArticleCtrl;
	}();

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=\"articleBox\" >\r\n    <h2 class=\"articleTitle\" ng-bind=\"$ctrl.article.title\"></h2>\r\n    <img class=\"blogImg\" ng-src=\"http://localhost:4000/uploads/{{$ctrl.article.imageUrl}}\" />\r\n    <p ng-bind=\"$ctrl.article.text\"></p>\r\n    <a class=\"btn edit\" ng-click=\"$ctrl.showAll()\">Return to all</a>\r\n    <a class=\"btn edit\" ng-click=\"$ctrl.edit()\">Edit</a>\r\n</div>"

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.paginationComponent = undefined;

	var _paginationCtrl = __webpack_require__(15);

	var paginationComponent = exports.paginationComponent = {
	    bindings: {
	        page: '='
	    },
	    template: __webpack_require__(16),
	    controller: _paginationCtrl.PaginationCtrl
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PaginationCtrl = exports.PaginationCtrl = function () {
	    function PaginationCtrl() {
	        _classCallCheck(this, PaginationCtrl);
	    }

	    _createClass(PaginationCtrl, [{
	        key: "showMore",
	        value: function showMore() {
	            this.page = this.page + 1;
	        }
	    }]);

	    return PaginationCtrl;
	}();

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"round-button\">\r\n    <div class=\"round-button-circle\">\r\n        <a ng-click=\"$ctrl.showMore()\" class=\"round-button\">Show more</a>\r\n    </div>\r\n</div>"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.articleAddDirective = undefined;

	var _articleAddCtrl = __webpack_require__(18);

	var articleAddDirective = exports.articleAddDirective = function articleAddDirective() {
	    return {
	        scope: {
	            article: '=',
	            save: '&',
	            editMode: '<'
	        },
	        restrict: 'E',
	        template: __webpack_require__(19),
	        controller: _articleAddCtrl.ArticleAddCtrl,
	        controllerAs: 'articleAddCtrl',
	        bindToController: true
	    };
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

	var ArticleAddCtrl = exports.ArticleAddCtrl = function () {
	    function ArticleAddCtrl() {
	        _classCallCheck(this, ArticleAddCtrl);
	    }

	    _createClass(ArticleAddCtrl, [{
	        key: "add",
	        value: function add() {
	            if (!this.editMode) {
	                var file = this.addEditArticleForm.picture.$$element[0].files[0];
	                this.article.picture = file;
	            }
	            this.save();
	        }
	    }]);

	    return ArticleAddCtrl;
	}();

	;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class='addForm'>\r\n    <form ng-submit=\"articleAddCtrl.addEditArticleForm.$valid && articleAddCtrl.add()\" name=\"articleAddCtrl.addEditArticleForm\" novalidate=\"novalidate\">\r\n        <div class='inputName'>Title:</div>\r\n        <div>\r\n            <input type=\"text\" ng-model=\"articleAddCtrl.article.title\" ng-required=\"true\" name=\"title\" />\r\n            <span style=\"color: red\" ng-show=\"articleAddCtrl.addEditArticleForm.title.$invalid && (articleAddCtrl.addEditArticleForm.title.$dirty || articleAddCtrl.addEditArticleForm.$submitted)\">Title is required!</span>\r\n        </div>\r\n        <div class='inputName' ng-if=\"!articleAddCtrl.editMode\">Author:</div>\r\n        <div ng-if=\"!articleAddCtrl.editMode\">\r\n            <input type=\"text\" ng-model=\"articleAddCtrl.article.author\" />\r\n        </div>\r\n        <div class='inputName'>Text:</div>\r\n        <div>\r\n            <textarea type=\"text\" ng-model=\"articleAddCtrl.article.text\" ng-required=\"true\" name=\"text\" text-validation></textarea>\r\n            <span style=\"color: red\" ng-show=\"articleAddCtrl.addEditArticleForm.text.$invalid && (articleAddCtrl.addEditArticleForm.text.$dirty || articleAddCtrl.addEditArticleForm.$submitted)\">Text must contain at least 20 symbols!</span>\r\n            \r\n        </div>\r\n        <div class='inputName' ng-if=\"!articleAddCtrl.editMode\">Picture:</div>\r\n        <div ng-if=\"!articleAddCtrl.editMode\">\r\n            <input type=\"file\" ng-model=\"articleAddCtrl.article.picture\" name=\"picture\" />\r\n            <span style=\"color: red\" ng-show=\"articleAddCtrl.addEditArticleForm.picture.$invalid && (articleAddCtrl.addEditArticleForm.picture.$dirty || articleAddCtrl.addEditArticleForm.$submitted)\">Picture is required!</span>\r\n        </div>\r\n        <button type=\"submit\" class=\"btnAdd\" ng-if=\"!articleAddCtrl.editMode\">Add</button>\r\n        <button type=\"submit\" class=\"btnAdd\" ng-if=\"articleAddCtrl.editMode\">Save</button>\r\n    </form>\r\n</div>"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var routes = exports.routes = function routes($routeProvider, $locationProvider) {
	    $routeProvider.when("/", {
	        template: __webpack_require__(21),
	        controller: 'ArticleListCtrl',
	        controllerAs: 'articleListCtrl',
	        caseInsensitiveMatch: true,
	        data: {}
	    });

	    $routeProvider.when("/add", {
	        template: __webpack_require__(22),
	        controller: 'ArticleAddCtrl',
	        controllerAs: 'articleAddCtrl',
	        caseInsensitiveMatch: true,
	        data: {}
	    });

	    $routeProvider.when("/:articleId/edit", {
	        template: __webpack_require__(23),
	        controller: 'ArticleEditCtrl',
	        controllerAs: 'articleEditCtrl',
	        caseInsensitiveMatch: true,
	        data: {}
	    });

	    $routeProvider.when("/:articleId", {
	        template: __webpack_require__(24),
	        controller: 'ArticleCtrl',
	        controllerAs: 'articleCtrl',
	        caseInsensitiveMatch: true,
	        data: {}
	    });

	    $locationProvider.html5Mode(true);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<article-list-component articles=\"articleListCtrl.articles\"></article-list-component>"

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<article-add-directive article=\"articleAddCtrl.article\" save=\"articleAddCtrl.save()\" edit-mode=\"false\"></article-add-directive>"

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<article-add-directive article=\"articleEditCtrl.article\" save=\"articleEditCtrl.save()\" edit-mode=\"true\"></article-add-directive>"

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<article-component article=\"articleCtrl.article\"></article-component>"

/***/ }
/******/ ]);