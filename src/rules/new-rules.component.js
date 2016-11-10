controller.$inject = [];
function controller(){
  var $ctrl = this;

  var testData = [
    {
      "id": 1,
      "label":"Option 1"
    },
    {
      "id": 2,
      "label":"Option 2"
    },
    {
      "id": 3,
      "label":"Option 3"
    }
  ];

  $ctrl.options = {};
  $ctrl.fields = [
    {
      key: 'singleOption',
      type: 'select2',
      templateOptions: {
        label: '选择标签规则组',
        valueProp: 'id',
        labelProp: 'label',
        options: testData,
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
}

module.exports = {
  template: require('./new-rules.component.html'),
  controller: controller
};