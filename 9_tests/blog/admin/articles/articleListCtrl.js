export class ArticleListCtrl {
    constructor(articleService) {
        this.articleService = articleService;
        this.load();
    };

    load() {
        this.articleService.query().$promise.then(articles => {
            this.articles = articles;
        })
    }
}