import { ArticleListCtrl } from './articleListCtrl.js';

export const articleListComponent = {
    bindings: {
        articles: '<'
    },
    template: require('./articleListTemplate.html'),
    controller: ArticleListCtrl
};