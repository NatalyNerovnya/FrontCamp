export const routes = ($routeProvider, $locationProvider) => {
    $routeProvider.when("/", {
        template: require('./articles/articleList.html'),
        controller: 'ArticleListCtrl',
        controllerAs: 'articleListCtrl',
        caseInsensitiveMatch: true,
        data: {}
    });

    $routeProvider.when("/add", {
        template: require('./articles/articleAdd.html'),
        controller: 'ArticleAddCtrl',
        controllerAs: 'articleAddCtrl',
        caseInsensitiveMatch: true,
        data: {}
    });

    $routeProvider.when("/:articleId/edit", {
        template: require('./articles/articleEdit.html'),
        controller: 'ArticleEditCtrl',
        controllerAs: 'articleEditCtrl',
        caseInsensitiveMatch: true,
        data: {}
    });

    $routeProvider.when("/:articleId", {
        template: require('./articles/article.html'),
        controller: 'ArticleCtrl',
        controllerAs: 'articleCtrl',
        caseInsensitiveMatch: true,
        data: {}
    });

    $locationProvider.html5Mode(true);
}