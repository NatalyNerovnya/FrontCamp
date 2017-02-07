describe('Articles component', function() {
    let suite;
    angular.mock.module.sharedInjector();

    beforeAll(function() {
        angular.mock.module('adminApp');
    });

    beforeEach(inject(function($injector, $q, _$componentController_) {
        suite = {};
        suite.$componentController = _$componentController_;
    }));

    it('should define first page', function() {
        var ctrl = suite.$componentController('articleListComponent', null);
        expect(ctrl.page).toBeDefined();
    });

    it('should have have page = 1', function() {
        var ctrl = suite.$componentController('articleListComponent', null);
        expect(ctrl.page).toBe(1);
    });

    afterEach(function() {
        suite = null;
    });
});