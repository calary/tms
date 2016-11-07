controller.$inject = ['$uibModal'];
function controller($uibModal){

  var $ctrl = this;

  $ctrl.showImportModal = showImportModal;

  function showImportModal() {
    var modalInstance = $uibModal.open({
      size: '400',
      component: 'importRulesModal',
      // windowClass: 'datetime-modal',
      resolve: {
        // config: config || {}
      }
    });
    return modalInstance.result;
  }
}

module.exports = {
  template: require('./import-rules.component.html'),
  controller: controller
};