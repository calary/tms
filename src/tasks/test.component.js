controller.$inject = ['tasksService', '$timeout', '$q'];
function controller(tasksService, $timeout, $q){
  var $ctrl = this;
 
  this.day = new Date();
  this.maxDate = new Date(2016, 11,20);

  this.range = {
    min: new Date(2016, 10, 3),
    max: new Date(2016, 10, 27)
  };

  $ctrl.click = function(){
    console.log('controller: click');
    // var deferred = $q.defer();
    return $timeout(function(){
      // deferred.resolve();
    }, 1000).then(function(){
      console.log('controller: resolve');
    });
    // return deferred.promise;
  };

  

}

module.exports = {
  template: require('./test.component.html'),
  controller: controller
};