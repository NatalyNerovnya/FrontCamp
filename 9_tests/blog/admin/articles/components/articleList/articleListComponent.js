import { ArticleListCtrl } from './articleListCtrl.js';

export const articleListComponent = {
    bindings: {
        articles: '<'
    },
    // templateUrl: './admin/articles/components/articleList/articleListTemplate.html',
    template: require('./articleListTemplate.html'),
    controller: ArticleListCtrl
};