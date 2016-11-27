controller.$inject = ['rulesService', 'store'];
function controller(rulesService, store){
  var $ctrl = this;
  $ctrl.store = store;

  $ctrl.data = [];
  $ctrl.rulesTitles = [
    { id: 0, title: '加入任务-未开启' },
    { id: 1, title: '加入任务-执行中' },
    { id: 2, title: '加入任务-暂停中' },
    { id: 3, title: '加入任务-已结束' },
    { id: 4, title: '未加入任务' }
  ];

  // xx-table配置
  var baseTableConfig = {
    data: [],
    firstUpdate: true,
    columns: [
      {
        head: 'site ID/广告ID',
        data: '{{ row.SiteID }}'
      }, {
        head: '规则组名称',
        data: '{{ row.RuleGroupName }}'
      }, {
        head: '规则组类型',
        data: '{{ row.RuleGroupType }}'
      }, {
        head: '创建时间',
        data: '{{ row.CreateTime | date2 }}'
      }, {
        head: '加入任务时间',
        data: '{{ row.CreateTaskTime | date2 }}'
      }, {
        hide: store.hideEditArea,
        head: ' ',
        data: '<a href="">复制规则组</a><br><a href="">导入规则组</a>'
      }
    ]
  };
  $ctrl.tableConfigs = [];

  $ctrl.rulesTitles.forEach(function(rules, index){
    var getData = createGetData(rules.id, index);
    $ctrl.tableConfigs[index] = angular.extend({}, baseTableConfig, {
      getData: getData
    });
  });

  function createGetData(status, index){
    return function(){
      return rulesService.getRules({ Status: status });
    };
  }
}

module.exports = {
  template: require('./rules-list.component.html'),
  controller: controller
};