require('./new-rule.css');

controller.$inject = ['$state', 'ruleTypes'];
function controller($state, ruleTypes){
  var $ctrl = this;
  $ctrl.ruleTypes = ruleTypes;

  if($state.is('newRuleList')) {
    $state.go('newRule', { ruleType: ruleTypes[0].id })
  }
}

module.exports = {
  template: require('./new-rule-list.component.html'),
  controller: controller
};