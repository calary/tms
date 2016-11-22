require('./datetime-picker.directive.css');

directive.$inject = ['$datetimeModalService'];
function directive($datetimeModalService){
	return {
		retrict: 'AE',
    scope: {
      minDate: '=',
      maxDate: '=',
      mode:    '@'
    },
    require: 'ngModel',
		template: require('./datetime-picker.directive.html'),
		link: function($scope, $ele, $attr, ngModel){

      var mode = $scope.mode;
      var format;

      switch(mode) {
        case 'year':  format = 'yyyy年'; break;
        case 'month': format = 'yyyy-MM'; break;
        case 'day':   format = 'yyyy-MM-dd'; break;
        case 'time':  format = 'HH:mm:ss'; break;
        default:      format = 'yyyy-MM-dd HH:mm:ss'; break;
      }
      $scope.format = format;
      // console.log(format);

      // $scope.date = ngModel.$viewValue;

      $scope.selectTime = function(){

        $datetimeModalService.show({
          date:    toDate($scope.date),
          minDate: toDate($scope.minDate),
          maxDate: toDate($scope.maxDate),
          mode:   $scope.mode
        }).then(function(newDate){
          ngModel.$setViewValue(newDate);
          ngModel.$render();
          // $scope.date = newDate;
        });
      };

      // viewValue -> 视图
      ngModel.$render = function() {
        $scope.date  = ngModel.$viewValue;
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
        return !required || !!(value);
      };

      function toDate(date) {
        if(date && !(date instanceof Date)) {
          try{ 
            date = new Date(date); 
          } catch(e) {

          }
        }
        return date;
      }
		}
	};
}

module.exports = directive;
