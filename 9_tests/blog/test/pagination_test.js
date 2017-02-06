// // describe('Pagination Component', () => {

// //     let parentScope;
// //     let element;
// //     function findIn(element, selector) {
// //         return angular.element(element[0].querySelector(selector));
// //     }

// //     //beforeEach(angular.mock.module('articleApp'));

// //     // 1:
// //     beforeEach(inject(($compile, $rootScope) => {
// //         debugger;
// //         // 2:
// //         parentScope = $rootScope.$new();
// //         parentScope.page = 1;
// //         parentScope.shouldShow = true;

// //         // 3:
// //         element = angular.element(`<pagination-component page="parentScope.page" ng-show="parentScope.shouldShow"></pagination-component>`);
// //         $compile(element)(parentScope);

// //         // 4:
// //         debugger;
// //         parentScope.$digest();
// //         debugger;

// //     }));

// //     it('displays initial value of some attr', () => {
// //         debugger;
// //         // 5:
// //         const someAttrValue = findIn(element, '.js-page').text();
// //         expect(someAttrValue).toEqual(1);

// //     });

// //     //   it('displays changed value of some attr', () => {

// //     //     // 6:
// //     //     parentScope.someAttr = 'CHANGED_VALUE';
// //     //     parentScope.$digest();

// //     //     const someAttrValue = findIn(element, '.js-some-attr').text();
// //     //     expect(someAttrValue).toEqual('CHANGED_VALUE');

// //     //   });
// // });

// // describe('Pagination Component', () => {

// //     let parentScope;
// //     let element;

// //     beforeAll(angular.mock.module('articleApp'));

// //     // 1:
// //     beforeEach(inject(($compile, $rootScope) => {
// //         debugger;
// //         // 2:
// //         parentScope = $rootScope.$new();
// //         parentScope.page = 1;
// //         parentScope.shouldShow = true;

// //         // 3:
// //         element = angular.element(`<pagination-component page='1' ng-show='true'></pagination-component>`);
// //         $compile(element)(parentScope);

// //         // 4:
// //         debugger;
// //         parentScope.$digest();
// //         debugger;

// //     }));

// //     it('displays initial value of some attr', () => {
// //         debugger;
// //         // 5:
// //         const pageValue = findIn(element, '.js-page').text();
// //         expect(someAttrValue).toEqual(1);

// //     });

// //   it('displays changed value of some attr', () => {

// //     // 6:
// //     parentScope.someAttr = 'CHANGED_VALUE';
// //     parentScope.$digest();

// //     const someAttrValue = findIn(element, '.js-some-attr').text();
// //     expect(someAttrValue).toEqual('CHANGED_VALUE');

// //   });
// // });

// // describe('Pagination component', () => {
// //     var controller;
// //     beforeAll(angular.mock.module('articleApp'));
// //     var element;
// //     var scope;
// //     // beforeEach(inject(function ($rootScope, $compile) {
// //     //     scope = $rootScope.$new();
// //     //     element = angular.element('<pagination-component page={{page}} ng-show={{shouldShow}}></pagination-component>');
// //     //     element = $compile(element)(scope);
// //     //     scope.page = 1;
// //     //     scope.shouldShow = true;
// //     //     scope.$apply();
// //     //     debugger;
// //     // }));
// //     beforeEach(angular.mock.inject(function ($rootScope, $componentController) {
// //         debugger;
// //         scope = $rootScope.$new();
// //         controller = $componentController('paginationComponent', { $scope: scope }, { page: 1, articles: [{}, {}, {}, {}, {}]});
// //         debugger;
// //     }));

// //     it('should expose my title', function () {
// //         debugger;
// //         expect(controller.myTitle).toBe('Unit Testing AngularJS');
// //     });

// //     it('should have my binding bound', function () {
// //         expect(controller.page).toBe(1);
// //     });
// // })



// import { PaginationCtrl } from './../admin/articles/components/pagination/paginationCtrl.js';

// describe('Pagination controller', function() {
//     var scope, createController;

//     beforeEach(inject(function ($rootScope, $controller) {
//         scope = $rootScope.$new();

//         createController = function() {
//             return $controller('PaginationCtrl', {
//                 '$scope': scope
//             });
//         };
//     }));

//     it('should have a method to check if the path is active', function() {
//         debugger;
//         var controller = createController();
//         $location.path('/about');
//         expect($location.path()).toBe('/about');
//         expect(scope.isActive('/about')).toBe(true);
//         expect(scope.isActive('/contact')).toBe(false);
//     });
// });