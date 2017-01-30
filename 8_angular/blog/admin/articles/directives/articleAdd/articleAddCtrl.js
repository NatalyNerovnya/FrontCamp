export class ArticleAddCtrl{
    constructor(){}

    add() {
        debugger;
        let file = this.addEditArticleForm.picture.$$element[0].files[0];
        this.article.picture = file;
        this.save();
    }
};