export class ArticleListCtrl{
    constructor($location){
        this.$location = $location;
        this.page = 1;
    }

    addNew(){
        this.$location.path("/add");
    }
}