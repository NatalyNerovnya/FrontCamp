export class ArticleEditCtrl {
    constructor($routeParams, articleService, $location) {
        this.articleService = articleService;
        this.article = new articleService();
        this.$location = $location;
        this.getArticle($routeParams.articleId);
    };
    
    getArticle(id) {
        this.articleService.get({ articleId: id }).$promise.then(article => this.article = article);
    };

    save() {
        var fd = new FormData();
        for (var key in this.article) {
            fd.append(key, this.article[key]);
        }
        fd.append('id', this.article._id);
        this.articleService.update({}, fd).$promise.then(() => {
            this.$location.path("/");
        })
    };
}