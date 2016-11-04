controller.$inject = [];
function controller(){
  this.content = '编辑任务';
}

module.exports = {
  template: require('./new-rules.component.html'),
  controller: controller
};