require('./new-rule.css');

controller.$inject = ['$state', 'rulesService'];
function controller($state, rulesService){
  var $ctrl = this;
  $ctrl.ruleTypes = [];

  var rulesId = $state.params.rulesId;
  
  getRule();
  function getRule(){
    rulesService.getRule(rulesId).then(function(data){
      if(data) {

        $ctrl.ruleTypes = rulesService.getRuleTypes(data.GroupType);

        if($state.is('newRuleList') && $ctrl.ruleTypes.length) {
          $state.go('newRule', { ruleType: $ctrl.ruleTypes[0].id });
        }
      }
    });
  }
}

module.exports = {
  template: require('./new-rule-list.component.html'),
  controller: controller
};