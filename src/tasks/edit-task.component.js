controller.$inject = ['$modalService', '$datetimeModalService'];
function controller($modalService, $datetimeModalService){
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

  this.options = {};

  this.fields = [];

  this.fields.push({
    type: 'static2',
    templateOptions: {
      label: '选择标签规则组',
      text: '1700-奶芙官网打标签规则'
    }
  });
  this.fields.push({
    type: 'static2',
    templateOptions: {
      label: 'site ID/广告ID',
      text: '1700'
    }
  });
  this.fields.push({
    key: 'singleOption',
    type: 'select2',
    templateOptions: {
      label: '选择标签规则组',
      valueProp: 'id',
      labelProp: 'label',
      options: testData,
      required: true
    }
  });
  this.fields.push({
    key: 'sideId',
    type: 'input2',
    templateOptions: {
      label: 'site ID/广告ID',
      required: true
    }
  });
  this.fields.push({
    key: 'time',
    type: 'timeRange2',
    optionsTypes: ['timeRange2'],
    templateOptions: {
      label: '设置任务周期',
      required: true
    }
  });
  // this.fields.push({});

  // function definition
  function onSubmit() {
    alert(JSON.stringify(vm.model), null, 2);
  }
}

module.exports = {
  template: require('./edit-task.component.html'),
  controller: controller
};