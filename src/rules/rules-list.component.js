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

  $ctrl.rulesTitles.forEach(function(rules, index){
    getRules(rules.id, index);
  });

  function getRules(status, index){
    rulesService.getRules({ Status: status })
    .then(function(data){
      $ctrl.data[index] = data || [];
    });
  }
}

module.exports = {
  template: require('./rules-list.component.html'),
  controller: controller
};