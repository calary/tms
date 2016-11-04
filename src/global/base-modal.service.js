module.exports = ['$uibModal', function($uibModal){
  return {
    confirm: confirm,
    alert: alert,
    toast: toast
  };

  function confirm(config) {
    var modalInstance = $uibModal.open({
      size: 'sm',
      component: 'baseModal',
      resolve: {
        config: function(){
          return config;
        }
      }
    });
    return modalInstance.result;
  }

  function alert(config) {
    config = config || {};
    config.hideCancel = true;
    return confirm(config);
  }

  function toast(config) {
    config = config || {};
    config.isToast = true;
    return confirm(config);
  }
}];
