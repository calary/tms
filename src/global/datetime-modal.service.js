module.exports = ['$uibModal', function($uibModal){
  return {
    show: show
  };
  /*
    config.date 给定一个日期
    config.minDate 给定一个最小日期
    config.maxDate 给定一个最大日期
   */
  function show(config) {
    var modalInstance = $uibModal.open({
      size: 'sm',
      component: 'datetimeModal',
      windowClass: 'datetime-modal',
      resolve: {
        config: config || {}
      }
    });
    return modalInstance.result;
  }
}];
