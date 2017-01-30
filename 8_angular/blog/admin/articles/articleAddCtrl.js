export class ArticleAddCtrl {
    constructor(articleService, $location) {
        this.articleService = articleService;
        this.article = new articleService();
        this.$location = $location;
    };

    save() {
        var fd = new FormData();
        for (var key in this.article) {
            fd.append(key, this.article[key]);
        }
        this.articleService.create({}, fd).$promise.then(() => {
            debugger;
            this.$location.path("/");
        })
    }
}