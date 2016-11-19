module.exports = {
  name: 'plainTimeRange',
  template: require('./plainTimeRange.html'),
  controller: ['$scope', '$datetimeModalService', function($scope, $datetimeModalService){
    var model = $scope.model;
    var key = $scope.options.key;
    // console.log($scope.options);
    // console.log($scope);

    $scope.selectMinTime = function(){
      var date = model[key] = model[key] || {};
      $datetimeModalService.show({
        date: date.min,
        maxDate: date.max
      }).then(function(newDate){
        date.min = newDate;
        checkValidity();
      });
    };

    $scope.selectMaxTime = function(){
      var date = model[key] = model[key] || {};
      $datetimeModalService.show({
        date: date.max,
        minDate: date.min
      }).then(function(newDate){
        date.max = newDate;
        checkValidity();
      });
    };  

    function checkValidity() {
      var valid = !!(model[key] && model[key].min && model[key].max);
      if($scope.to.required) {
        $scope.form.$setValidity('required', valid);
      }
    }

    checkValidity();
  }]
};