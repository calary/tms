require('./view-rules.css');

controller.$inject = ['ruleTypes'];
function controller(ruleTypes){
  var $ctrl = this;

  $ctrl.ruleTypes = [].concat(ruleTypes);
}

module.exports = {
  template: require('./view-rules.component.html'),
  controller: controller
};