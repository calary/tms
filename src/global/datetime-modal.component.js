require('./datetime-modal.css');

/*
config
 - date    当前时间
 - minDate 最小时间
 - maxDate 最大时间
 - mode    模式：datetime|year|month|day|time
 */


controller.$inject = ['$scope'];
function controller($scope){
  var $ctrl = this;
  $ctrl.ok = ok;
  $ctrl.cancel = cancel;

  var config = $ctrl.resolve.config;
  var date = config.date ? angular.copy(config.date) : new Date();
  var minDate = config.minDate ? angular.copy(config.minDate) : null;
  var maxDate = config.maxDate ? angular.copy(config.maxDate) : null;
  var mode = config.mode ? config.mode.toLowerCase() : 'datetime';
  var datePickerMode = mode === 'time' || mode === 'datetime'
    ? 'day' : mode;
  
  // console.log(config);

  // 是否选择datepicker和timepicker
  $ctrl.showDate = mode !== 'time';
  $ctrl.showTime = mode === 'datetime' || mode === 'time';
  $ctrl.date = date;
  // datePicker设置
  $ctrl.options = {
    showWeeks: false,
    minDate: minDate,
    maxDate: maxDate,
    minMode: datePickerMode
  };
  // console.log($ctrl.showDate, $ctrl.showTime)
  // console.log($ctrl.options)
  // timePicker选择框设置
  // $ctrl.minTime = null;
  // $ctrl.maxTime = null;

  $scope.$watch('$ctrl.date', function(newVal){
    if(minDate) {
      if(minDate.getTime() >= $ctrl.date.getTime()) {
        $ctrl.date.setTime(minDate.getTime() + 1000);
      }
      // if(isSameDay(minDate, $ctrl.date)) {
      //   console.log('is same min date')
      //   $ctrl.minTime = minDate;
      // } else {
      //   $ctrl.minTime = null;
      // }
    }
    if(maxDate) {
      if(maxDate.getTime() <= $ctrl.date.getTime()) {
        $ctrl.date.setTime(maxDate.getTime() - 1000);
      }
      // if(isSameDay(maxDate, $ctrl.date)) {
      //   console.log('is same max date')
      //   $ctrl.maxTime = maxDate;
      // } else {
      //   $ctrl.maxTime = null;
      // }
    }
  });

  function isSameDay(d1, d2) {
    if(!(d1 && d2)) {
      return false;
    }
    return d1.toDateString() === d2.toDateString();
  }

  function setDate(){
    $ctrl.date.setHours(
      $ctrl.hour, $ctrl.minute, $ctrl.second);
  }
	
	function ok(){
		$ctrl.close({$value: $ctrl.date});
	}

	function cancel(){
		$ctrl.dismiss();
	}
}

module.exports = {
  template: require('./datetime-modal.component.html'),
  controller: controller,
  bindings: {
  	resolve: '<',
    close: '&',
    dismiss: '&'
  }
};
