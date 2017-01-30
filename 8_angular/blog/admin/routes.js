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

    $locationProvider.html5Mode(true);
}