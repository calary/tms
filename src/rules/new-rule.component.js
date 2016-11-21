require('./new-rule.css');

controller.$inject = ['ruleTypes'];
function controller(ruleTypes){
  var $ctrl = this;
  $ctrl.ruleTypes = ruleTypes;
  // formly
  $ctrl.fields = [];
  $ctrl.formList = [];
  $ctrl.addSection = addSection;
  $ctrl.removeSection = removeSection;

  // 测试用fields
  $ctrl.fields = [{
    key: 'test',
    type: 'input2',
    templateOptions: {
      label: 'site ID/广告ID',
      required: true
    }
  }, {
    key: 'test2',
    type: 'bindTag',
    templateOptions: {
      required: true
    }
  }];

  addSection();
  $ctrl.formList[0].model = {
    // test2: [ 
    //   { "weight": "1", "tagId": 5, "tagTitle": "eee" },
    //   { "weight": "0.8", "tagId": 6, "tagTitle": "ee22e" },
    // ]
  };


  function addSection(){
    $ctrl.formList.push({
      options: {},
      model: {},
      fields: angular.copy($ctrl.fields)
    });
  }

  function removeSection(index){
    $ctrl.formList.splice(index, 1);
  }

}

module.exports = {
  template: require('./new-rule.component.html'),
  controller: controller
};