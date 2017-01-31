import { ArticleCtrl } from './articleCtrl.js';

export const articleComponent = {
    bindings: {
        article: '<'
    },
    template: require('./articleTemplate.html'),
    controller: ArticleCtrl
};