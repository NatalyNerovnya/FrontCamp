export const textValidation = () => {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.textValidation = function (modelValue, viewValue) {
                if(modelValue === undefined)
                    return false;
                return modelValue.length >= 20;
            };
        }
    }
}