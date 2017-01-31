import { PaginationCtrl } from './paginationCtrl.js';

export const paginationComponent = {
    bindings: {
        page: '='
    },
    template: require('./paginationTemplate.html'),
    controller: PaginationCtrl
};