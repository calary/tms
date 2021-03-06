controller.$inject = ['tasksService', '$timeout', '$q', 'fieldOptionsService'];
function controller(tasksService, $timeout, $q, fieldOptionsService){
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

  $ctrl.model = {
    input: []
  };
  $ctrl.options = {};
  var inputs = [];
  $ctrl.fields = [
    {
      className: '',
      fieldGroup: inputs
    },
    fieldOptionsService.getCompare({
      model: $ctrl.model,
      key: ['a', 'b', 'c', 'd', 'e']
    }),
    fieldOptionsService.getTimeRange({
      label: 'time-range',
      required: true,
      key: ['minDate', 'maxDate']
    })
  ];

  $ctrl.addInput = function(){
    var input = {
      key: 'input[' + inputs.length + ']',
      type: 'input2',
      templateOptions: {
        label: 'input' + inputs.length
      }
    };
    inputs.push(input);
  };
  $ctrl.removeInput = function(index){
    var i, len;
    if(index >= inputs.length) {
      return;
    }
    $ctrl.model.input.splice(index, 1);
    inputs.pop();

    // inputs.splice(index, 1);
    // inputs.forEach(function(input, i){
    //   inputs[i] = 
    // });

    // console.log(inputs);
  };
}

module.exports = {
  template: require('./test.component.html'),
  controller: controller
};