controller.$inject = [];
function controller(){
  this.content = '任务列表';
}

module.exports = {
  template: require('./rules-list.component.html'),
  controller: controller
};