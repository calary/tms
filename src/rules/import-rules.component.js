controller.$inject = ['$uibModal'];
function controller($uibModal){

  var $ctrl = this;

  $ctrl.showImportModal = showImportModal;

  function showImportModal() {
    var modalInstance = $uibModal.open({
      size: '400',
      component: 'importRulesModal',
    });
    modalInstance.result.then(function(file){
      console.log('xxxxxxxxxxxxxx');
      console.log(file);
    });
  }
}

module.exports = {
  template: require('./import-rules.component.html'),
  controller: controller
};