controller.$inject = ['$uibModal', 'rulesService'];
function controller($uibModal, rulesService){

  var $ctrl = this;
  $ctrl.selectFile = selectFile;
  $ctrl.showImportModal = showImportModal;

  $ctrl.errMsg = '';
  $ctrl.succMsg = '';
  $ctrl.rulesId = '';
  $ctrl.uploading = false;

  function selectFile(file){
    if($ctrl.uploading) {
      return;
    }
    $ctrl.errMsg = '';
    $ctrl.succMsg = '';
    $ctrl.uploading = true;
    rulesService.importFile(file)
    .then(function(data){
      // console.log(data.Data);
      // console.log(data.Information);
      $ctrl.uploading = false;
      $ctrl.succMsg = data.Information;
      $ctrl.rulesId = data.Data;
    }, function(reason){
      $ctrl.uploading = false;
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