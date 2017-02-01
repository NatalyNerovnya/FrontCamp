export class ArticleCtrl{
    constructor($location){
        this.$location = $location;
    }

    showAll(){
        this.$location.path("/");
    }

    edit(){
        this.$location.path("/" + this.article._id + "/edit");
    }
}