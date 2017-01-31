export class ArticleAddCtrl {
    constructor() { }

    add() {
        if (!this.editMode) {
            let file = this.addEditArticleForm.picture.$$element[0].files[0];
            this.article.picture = file;
        }
        this.save();
    }
};