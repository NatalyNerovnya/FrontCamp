describe('Validation', function () {
  var $scope, myFormText;

  beforeEach(inject(function ($compile, $rootScope) {
    $scope = $rootScope;
    var element = angular.element(
      '<form name="myForm"><textarea type="text" ng-model="text" ng-required="true" name="text" text-validation></textarea> </form>'
    );
    $scope.model = { text: undefined }
    $compile(element)($scope);
    myFormText = $scope.myForm.text;
  }));

  describe('text-validation', function () {

    it('should pass with text with more than 20 symbols', function () {
      myFormText.$setViewValue('123456789012345678901');
      expect(myFormText.$modelValue).toEqual('123456789012345678901');
      expect(myFormText.$valid).toBe(true);
    });

    it('should not pass with text with less than 20 symbols', function () {
      myFormText.$setViewValue('123');
      $scope.$digest();
      expect(myFormText.$valid).toBe(true);
    });

    it('should not pass with undefined value', function () {
      $scope.$digest();
      expect(myFormText.$valid).toBe(false);
    });
  });
});