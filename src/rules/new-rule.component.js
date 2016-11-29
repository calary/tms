require('./new-rule.css');

var types = {
  101: require('./fields/101.js')
};


controller.$inject = ['ruleTypes', '$state'];
function controller(ruleTypes){
  var $ctrl = this;
  $ctrl.ruleTypes = ruleTypes;
  // formly
  $ctrl.fields = [];
  $ctrl.formList = [];
  $ctrl.addSection = addSection;
  $ctrl.removeSection = removeSection;

  // 测试用fields
  $ctrl.fields = types[101];
  
  
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