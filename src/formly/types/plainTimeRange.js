module.exports = {
  name: 'plainTimeRange',
  // template: require('./plainTimeRange.html'),
  template: '<datetime-range ng-model="model[options.key]"></datetime-range>',
  controller: ['$scope', function($scope){
    var model = $scope.model;
    var key = $scope.options.key;    

    function checkValidity(expressionValue) {
      var valid;

      if($scope.to.required) {
        valid = model[key] && 
          model[key].min && model[key].max && 
          expressionValue;
        
        $scope.form.$setValidity('required', valid);
      }
    }
    
    // 初始化判断本表单是否合法
    // fc这个短名一开始没有被赋值，所以需要watch，在watch到后就停止监听
    var unwatchFormControl = $scope.$watch('fc', function(newValue){
      console.log(newValue);
      if(!newValue) {
        return;
      }
      checkValidity(true);
      unwatchFormControl();
    });



    // // console.log($scope.options);
    // // console.log($scope);

    // $scope.selectMinTime = function(){
    //   var date = model[key] = model[key] || {};
    //   $datetimeModalService.show({
    //     date: date.min,
    //     maxDate: date.max
    //   }).then(function(newDate){
    //     date.min = newDate;
    //     checkValidity();
    //   });
    // };

    // $scope.selectMaxTime = function(){
    //   var date = model[key] = model[key] || {};
    //   $datetimeModalService.show({
    //     date: date.max,
    //     minDate: date.min
    //   }).then(function(newDate){
    //     date.max = newDate;
    //     checkValidity();
    //   });
    // };  

    // function checkValidity() {
    //   var valid = !!(model[key] && model[key].min && model[key].max);
    //   if($scope.to.required) {
    //     $scope.form.$setValidity('required', valid);
    //   }
    // }

    // checkValidity();
  }]
};