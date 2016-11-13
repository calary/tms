controller.$inject = ['$state', 'rulesTypes', 'ruleTypes'];
function controller($state, rulesTypes, ruleTypes){
  var $ctrl = this;
  $ctrl.options = {};
  $ctrl.model = {
    rulesType: rulesTypes[0].id
  };

  $ctrl.fields = [
    {
      key: 'rulesType',
      type: 'select2',
      templateOptions: {
        label: '选择规则组类型',
        valueProp: 'id',
        labelProp: 'title',
        options: rulesTypes,
        required: true
      }
    },
    {
      key: 'asdf',
      type: 'input2',
      templateOptions: {
        label: 'site ID'
      }
    },
    {
      key: 'ffff',
      type: 'input2',
      templateOptions: {
        label: '规则组名称',
        required: true
      }
    }
  ];

  $ctrl.go = function(){
    $state.go('newRule', {rulesId: 'test', ruleType: ruleTypes[0].id});
  };
}

module.exports = {
  template: require('./new-rules.component.html'),
  controller: controller
};