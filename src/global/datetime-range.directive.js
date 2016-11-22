require('./datetime-picker.directive.css');

directive.$inject = ['$datetimeModalService'];
function directive($datetimeModalService){
	return {
		retrict: 'AE',
    require: 'ngModel',
    scope: {
      mode: '@'
    },
		template: require('./datetime-range.directive.html'),
		link: function($scope, $ele, $attr, ngModel){

      // ngModel.$formatters.push(function(modelValue){
        
      // });
      // ngModel.$parsers.push(function(viewValue){
        
      // });

      $scope.$watch('minDate+maxDate', function(){
        var min = $scope.minDate;
        var max = $scope.maxDate;
        if(min && min instanceof String) {
          $scope.minDate = new Date(min);
        }
        if(max && max instanceof String) {
          $scope.maxDate = new Date(max);
        }
        ngModel.$setViewValue({
          min: $scope.minDate,
          max: $scope.maxDate
        });
        // ngModel.$render();
      });
      // viewValue -> 视图
      ngModel.$render = function() {
        var value = ngModel.$isEmpty(ngModel.$viewValue) ?
          {} : ngModel.$viewValue;
        $scope.minDate = value.min;
        $scope.maxDate = value.max;
      };

      // 属性required与required的监听
      var required = false;
      $attr.$observe('required', function(value){
        if(value === true || value === 'true') {
          required = true;
        } else {
          required = false;
        }
        ngModel.$validate();
      });
      // required validator
      ngModel.$validators.required = function(value) {
        return !required || !!(value && value.min && value.max);
      };
		}
	};
}

module.exports = directive;
