require('./view-rules.css');

controller.$inject = ['$state', 'rulesService'];
function controller($state, rulesService){
  var $ctrl = this;
  $ctrl.data = {};
  $ctrl.ruleTypes = [];

  var rulesId = $state.params.rulesId;
  console.log('enter view-rules');

  getRule();
  function getRule(){
    rulesService.getRule(rulesId).then(function(data){
      if(data) {
        $ctrl.data = data;
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
      }
    });
  }

}

module.exports = {
  template: require('./view-rules.component.html'),
  controller: controller
};