describe('Article service', function () {
    let suite;
    let articles;
    let $httpBackend;

    angular.mock.module.sharedInjector();

    beforeAll(function () {
        angular.mock.module('adminApp');
    });

    beforeEach(inject(function ($injector, $q) {
        suite = {};
        articles = [{
            _id: 1,
            title: 'title1',
            text: 'text1'
        }, {
            _id: 2,
            title: 'title2',
            text: 'text2'
        }];

        suite.articleService = $injector.get('ArticleService');
        $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function () {
        suite = null;
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch articles', function () {
        let result;
        $httpBackend.expectGET('/articles').respond(articles);
        suite.articleService.query().$promise.then(data => {
            result = data;
        });
        $httpBackend.flush();

        expect(result[0].id).toEqual(articles[0].id);
        expect(result[1].id).toEqual(articles[1].id);
        expect(result.length).toEqual(2);
    });
});