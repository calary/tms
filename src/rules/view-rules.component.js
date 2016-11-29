require('./view-rules.css');

controller.$inject = ['$state', 'rulesService', 'store'];
function controller($state, rulesService, store){
  var $ctrl = this;
  $ctrl.data = {};
  $ctrl.ruleTypes = [];
  $ctrl.store = store;

  var rulesId = $state.params.rulesId;
  console.log('enter view-rules');

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
        data: '{{ row.ExecCount }}'
      }, {
        hide: store.hideEditArea,
        head: '状态 <button class="btn btn-sm btn-success" ng-hide="$ctrl.store.hideEditArea">保存</button>',
        data: '{{ row.Status }}'
      }
    ]
  };

  getRule();
  function getRule(){
    rulesService.getRule(rulesId).then(function(data){
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
    });
  }
}

module.exports = {
  template: require('./view-rules.component.html'),
  controller: controller
};