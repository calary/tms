controller.$inject = ['$state'];
function controller($state){
  var $ctrl = this;

  if($state.is('viewRulesList')) {
    $state.go('viewRules', { rulesId: 'test'});
  }
}

module.exports = {
  template: require('./view-rules-list.component.html'),
  controller: controller
};