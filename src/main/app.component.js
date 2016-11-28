controller.$inject = ['$rootScope', '$state', '$transitions', 'store'];
function controller($rootScope, $state, $transitions, store){
  var $ctrl = this;
  $ctrl.$state = $state;
  $ctrl.store = store;
  $ctrl.isRulesList = false; // 规则组列表 + 未加入任务的规则组详情
  $ctrl.isViewRulesList = false; // 已加入任务的规则组详情
  $ctrl.isNewRules = false;
  var viewRulesType = 0;

  $transitions.onSuccess({}, function(){
    isNewRules();
    isRulesList();
  });
  // view-rules-list.component.js
  // type = 1 显示为执行期规则组 
  // type = 2 显示为规则组列表
  $rootScope.$on('VIEW_RULES_TYPE', function(e, type){
    viewRulesType = type;
    isRulesList();
  });

  isNewRules();
  isRulesList();
  function isNewRules(){
    var is = $state.is('newRules') || $state.is('newRuleList') || $state.is('newRule');
    $ctrl.isNewRules = is;
  }

  function isRulesList(){
    $ctrl.isRulesList = $state.is('rulesList') || 
      $state.is('viewRules') && viewRulesType == 2;
    $ctrl.isViewRulesList = $state.is('viewRulesList') || 
      $state.is('viewRules') && viewRulesType == 1;
  }
}
module.exports = {
  template: require('./app.component.html'),
  controller: controller
};