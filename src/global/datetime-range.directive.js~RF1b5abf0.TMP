require('./datetime-picker.directive.css');

directive.$inject = ['$datetimeModalService'];
function directive($datetimeModalService){
	return {
		retrict: 'AE',
    scope: {
      minDate: '=',
      maxDate: '='
    },
    require: 'ngModel',
		template: require('./datetime-picker.directive.html'),
		link: function($scope, $ele, $attr, ngModel){

      // $scope.date = ngModel.$viewValue;

      $scope.selectMinTime = function(){

        $datetimeModalService.show({
          date:    $scope.date,
          minDate: $scope.minDate,
          maxDate: $scope.maxDate
        }).then(function(newDate){
          ngModel.$setViewValue(newDate);
          ngModel.$render();
          // $scope.date = newDate;
        });
      };

      // ngModel.$formatters.push(function(modelValue){
        
      // });
      // ngModel.$parsers.push(function(viewValue){
        
      // });
      // viewValue -> 视图
      ngModel.$render = function() {
        $scope.date  = ngModel.$viewValue;
      };
		}
	};
}

module.exports = directive;
