controller.$inject = ['$uibModal', 'rulesService'];
function controller($uibModal, rulesService){

  var $ctrl = this;
  $ctrl.selectFile = selectFile;
  $ctrl.showImportModal = showImportModal;

  $ctrl.errMsg = '';
  $ctrl.succMsg = '';

  function selectFile(file){
    $ctrl.errMsg = '';
    $ctrl.succMsg = '';
    console.log(file);
    rulesService.importFile(file)
    .then(function(data){
      $ctrl.succMsg = data.Information;
    }, function(reason){
      $ctrl.errMsg = reason;
    });
  }
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