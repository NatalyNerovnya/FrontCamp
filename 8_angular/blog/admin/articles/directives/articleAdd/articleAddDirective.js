import { ArticleAddCtrl } from './articleAddCtrl.js';

export const articleAddDirective = () => {
    return {
        scope: {
            article: '=',
            save: '&',
            editMode: '<'
        },
        restrict: 'E',
        template: require('./articleAddTemplate.html'),
        controller: ArticleAddCtrl,
        controllerAs: 'articleAddCtrl',
        bindToController: true
    }
};