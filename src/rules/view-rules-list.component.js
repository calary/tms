controller.$inject = ['$rootScope', '$scope', '$state', '$transitions', 'rulesService', 'store'];
function controller($rootScope, $scope, $state, $transitions, rulesService, store){
  var $ctrl = this;
  $ctrl.data = [];
  $ctrl.store = store;
  $ctrl.showNav = false;
  $ctrl.currentId = '';

  // console.log('enter view rules list');
  rulesService.getRules({ Status: 1 }).then(function(data){
    $ctrl.data = data || [];
    $ctrl.data.forEach(function(rules){
      var title = '';
      if(rules.SiteID) {
        title += rules.SiteID + ' - ';
      }
      title += rules.RuleGroupName;
      rules.title = title;
    });
    init();
  });

  var deregister = $transitions.onSuccess({}, function(){
    // console.log('view rules list on success');
    init();
  });
  // console.log(deregister);
  $ctrl.$onDestroy = function(){
    deregister();
  };

  $scope.$watch('$ctrl.currentId', function(){
    if($ctrl.currentId) {
      $state.go('viewRules', { 
        rulesId: $ctrl.currentId
      });
    }
  })

  // console.log($scope);

  // init();
  function init(){
    console.log('view rules list INIT');
    if($state.is('viewRules')) {
      var rulesId = $state.params.rulesId;
      var index = $ctrl.data.findIndex(function(rules){
        console.log(rules.RuleGroupID);
        return rulesId == rules.RuleGroupID;
      });
      console.log(index);
      $ctrl.showNav = index >= 0;
      $ctrl.currentId = rulesId;
    } else {
      // 列表页 自动跳转到第一个
      $ctrl.showNav = true;
      if($ctrl.data.length) {
        $ctrl.currentId = $ctrl.data[0].RuleGroupID;
        $state.go('viewRules', { 
          rulesId: $ctrl.data[0].RuleGroupID
        });
      }
    }
    $rootScope.$emit('VIEW_RULES_TYPE', $ctrl.showNav ? 1 : 2);
  }
}

module.exports = {
  template: require('./view-rules-list.component.html'),
  controller: controller
};