require('./datetime-picker.directive.css');

directive.$inject = ['$datetimeModalService'];
function directive($datetimeModalService){
	return {
		retrict: 'AE',
    scope: {},
    require: 'ngModel',
		template: require('./datetime-range.directive.html'),
		link: function($scope, $ele, $attr, ngModel){

      // ngModel.$formatters.push(function(modelValue){
        
      // });
      // ngModel.$parsers.push(function(viewValue){
        
      // });
      $scope.$watch('minDate+maxDate', function(){
        ngModel.$setViewValue({
          min: $scope.minDate,
          max: $scope.maxDate
        });
        // ngModel.$render();
      });
      // viewValue -> 视图
      ngModel.$render = function() {
        var $viewValue = ngModel.$viewValue || {};
        $scope.minDate  = $viewValue.min;
        $scope.maxDate  = $viewValue.max;
      };
		}
	};
}

module.exports = directive;
