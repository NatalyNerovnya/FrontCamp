export class ArticleCtrl {
    constructor($routeParams,articleService) {
        this.articleService = articleService;
        this.getArticle($routeParams.articleId);
    };
    
    getArticle(id) {
        this.articleService.get({ articleId: id }).$promise.then(article => this.article = article);
    };
}