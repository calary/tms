controller.$inject = [];
function controller(){
  var $ctrl = this;


  $ctrl.list = [
    { title: '加入任务-未开启' },
    { title: '加入任务-执行中' },
    { title: '加入任务-暂停中' },
    { title: '加入任务-已结束' },
    { title: '未加入任务' }
  ];
}

module.exports = {
  template: require('./rules-list.component.html'),
  controller: controller
};