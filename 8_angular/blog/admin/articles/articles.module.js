import { ArticleListCtrl } from './articleListCtrl.js';
import { ArticleAddCtrl } from './articleAddCtrl.js';
import { ArticleService } from './articleService.js';
import { articleListComponent } from './components/articleList/articleListComponent.js';
import { articleAddDirective } from './directives/articleAdd/articleAddDirective.js';


let articleApp = angular.module('articleApp', ['ngResource'])
    .controller('ArticleListCtrl', ['ArticleService', ArticleListCtrl])
    .controller('ArticleAddCtrl', ['ArticleService', '$location', ArticleAddCtrl])
    .factory('ArticleService', ['$resource', ArticleService])
    .component('articleListComponent', articleListComponent)
    .directive('articleAddDirective', articleAddDirective);

export default articleApp;