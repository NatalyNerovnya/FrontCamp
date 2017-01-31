import { ArticleListCtrl } from './articleListCtrl.js';
import { ArticleCtrl } from './articleCtrl.js';
import { ArticleAddCtrl } from './articleAddCtrl.js';
import { ArticleEditCtrl } from './articleEditCtrl.js';
import { ArticleService } from './articleService.js';
import { textValidation } from './directives/validate.js';
import { articleListComponent } from './components/articleList/articleListComponent.js';
import { articleComponent } from './components/article/articleComponent.js';
import { paginationComponent } from './components/pagination/paginationComponent.js';
import { articleAddDirective } from './directives/articleAdd/articleAddDirective.js';


let articleApp = angular.module('articleApp', ['ngResource'])
    .controller('ArticleListCtrl', ['ArticleService', '$location', ArticleListCtrl])
    .controller('ArticleCtrl', ['$routeParams', 'ArticleService', '$location', ArticleCtrl])
    .controller('ArticleAddCtrl', ['ArticleService', '$location', ArticleAddCtrl])
    .controller('ArticleEditCtrl', ['$routeParams','ArticleService', '$location', ArticleEditCtrl])
    .factory('ArticleService', ['$resource', ArticleService])
    .component('articleListComponent', articleListComponent)
    .component('articleComponent', articleComponent)
    .component('paginationComponent', paginationComponent)
    .directive('articleAddDirective', articleAddDirective)
    .directive('textValidation', textValidation);

export default articleApp;