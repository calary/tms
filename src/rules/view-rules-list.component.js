controller.$inject = ['$state', 'rulesService'];
function controller($state, rulesService){
  var $ctrl = this;

  rulesService.getRules({ Status: 1 }).then(function(data){
    $ctrl.data = data && data.Data || [];
    if($state.is('viewRulesList')) {
      $state.go('viewRules', { 
        rulesId: $ctrl.data[0].RuleGroupID
      });
    }
  });
}

module.exports = {
  template: require('./view-rules-list.component.html'),
  controller: controller
};