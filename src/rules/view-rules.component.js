controller.$inject = [];
function controller(){
  this.content = '编辑任务';
}

module.exports = {
  template: require('./view-rules.component.html'),
  controller: controller
};