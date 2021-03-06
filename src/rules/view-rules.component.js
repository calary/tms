require('./view-rules.css');

controller.$inject = ['$state', 'rulesService', 'store', '$q'];
function controller($state, rulesService, store, $q){
  var $ctrl = this;
  var rulesId = $state.params.rulesId;
  var abortPromise;
  $ctrl.data = {};
  $ctrl.ruleTypes = [];
  $ctrl.store = store;
  $ctrl.$onDestroy = onDestroy;
  $ctrl.loading = 0;
  $ctrl.loadingError = '';

  // console.log('enter view-rules');

  // xx-table配置
  var baseTableConfig = {
    data: [],
    columns: [
      {
        head: 'Key',
        data: '<span uib-tooltip-html="row.Tips">{{ row.Key }}</span>'
      }, {
        head: 'Tag',
        data: '<div ng-bind-html="row.Tag"></div>'
      }, {
        head: '权重',
        data: '<div ng-bind-html="row.Weight"></div>'
      }, {
        head: '执行次数',
        data: '<div ng-bind-html="row.ExecCount"></div>'
      }, {
        hide: store.hideEditArea,
        head: '状态 <button class="btn btn-sm btn-success" ng-hide="$ctrl.store.hideEditArea">保存</button>',
        data: '{{ row.Status }}'
      }
    ]
  };

  getRule();
  function getRule(){
    abortPromise = $q.defer(); 
    rulesService.getRule(rulesId, { timeout: abortPromise.promise}).then(function(data){
      // console.log('get rules succ', rulesId)
      $ctrl.loading = 1;
      if(data) {
        $ctrl.data = data;
        store.viewRulesType = data.GroupStatus == '已加入任务' ? 1 : 4;

        $ctrl.ruleTypes = rulesService.getRuleTypes(data.GroupType);
        (data.Module || []).forEach(function(module){
          var type = $ctrl.ruleTypes.find(function(type){
            return type.title == module.Name;
          });
          console.log(module.Name);
          if(type) {
            type.rules = (type.rules || []).concat(module.Content);
            // type.rules = module.Content;
          }
        });

        $ctrl.tableConfigs = $ctrl.ruleTypes.map(function(type, index){
          return angular.extend({}, baseTableConfig, {
            data: type.rules || []
          });
        });
      }
    }, function(reason){
      $ctrl.loading = 2;
      $ctrl.loadingError = reason;
    });
  }

  function onDestroy(){
    // console.log('onDestroy');
    if(abortPromise) {
      abortPromise.resolve();
    }
  };
}

module.exports = {
  template: require('./view-rules.component.html'),
  controller: controller
};